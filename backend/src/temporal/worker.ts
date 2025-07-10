import { Worker } from "@temporalio/worker";
import * as activities from "./activities/userActivities";

async function run() {
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
