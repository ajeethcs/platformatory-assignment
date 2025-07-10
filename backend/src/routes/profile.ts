import express from "express";
import { checkJwt } from "../middleware/auth";
import User from "../models/User";

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
  console.log("Nakkal user=", user, "thoof");
  if (!user || !user.sub) {
    return res.status(401).json({ message: "Unauthorized: Missing user ID" });
  }

  const updated = await User.findOneAndUpdate(
    { sub: req.user.sub },
    { firstName, lastName, phone, city, pincode },
    { upsert: true, new: true }
  );

  res.json(updated);
});

export default router;
