import mongoose from "mongoose";
import { Worker } from "@temporalio/worker";
import * as activities from "./activities/userActivities";
import dotenv from "dotenv";

dotenv.config();

async function run() {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log("Worker connected to MongoDB");

  const worker = await Worker.create({
    workflowsPath: require.resolve("./workflows/updateUserWorkflow"),
    activities,
    taskQueue: "user-task-queue",
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
