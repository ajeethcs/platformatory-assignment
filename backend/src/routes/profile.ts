import express from "express";
import { checkJwt } from "../middleware/auth";
import User from "../models/User";
import { Connection, WorkflowClient } from "@temporalio/client";
import { updateUserWorkflow } from "../temporal/workflows/updateUserWorkflow";

const router = express.Router();

router.get("/", async (req: any, res) => {
  const user = await User.findOne({ sub: req.user.sub });
  if (!user) {
    return res.json({
      sub: req.user.sub,
      firstName: "",
      lastName: "",
      phone: "",
      city: "",
      pincode: "",
    });
  }
  res.json(user);
});

router.post("/", checkJwt, async (req: any, res) => {
  const { firstName, lastName, phone, city, pincode } = req.body;
  const user = req.user as { sub?: string } | undefined;

  if (!user || !user.sub) {
    return res.status(401).json({ message: "Unauthorized: Missing user ID" });
  }

  const connection = await Connection.connect({
    address: "localhost:7233",
  });

  const client = new WorkflowClient({
    connection,
  });

  const handle = await client.start(updateUserWorkflow, {
    taskQueue: "user-task-queue",
    workflowId: `update-user-${user.sub}-${Date.now()}`,
    args: [
      {
        sub: user.sub,
        firstName,
        lastName,
        phone,
        city,
        pincode,
      },
    ],
  });

  const updatedUser = await handle.result();

  res.json(updatedUser);
});

export default router;
