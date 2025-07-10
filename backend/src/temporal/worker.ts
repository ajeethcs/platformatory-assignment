import mongoose from "mongoose";
import { Worker } from "@temporalio/worker";
import * as activities from "./activities/userActivities";

async function run() {
  // Connect to MongoDB first
  await mongoose.connect("mongodb://127.0.0.1:27017/platformatory");
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
