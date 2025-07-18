import { proxyActivities, sleep } from "@temporalio/workflow";

const activities = proxyActivities<{
  saveToMongo(user: any): Promise<any>;
  updateCrudCrud(user: any): Promise<void>;
}>({
  startToCloseTimeout: "30 seconds",
  retry: {
    maximumAttempts: 3,
    initialInterval: "2s",
    backoffCoefficient: 2,
    maximumInterval: "30s",
  },
});

export async function updateUserWorkflow(user: any) {
  // Save user to Mongo
  const updatedUser = await activities.saveToMongo(user);

  // Wait 10 seconds
  // await sleep(10_000);
  await new Promise((resolve) => setTimeout(resolve, 10_000));

  // Call CrudCrud
  await activities.updateCrudCrud(updatedUser);

  return updatedUser;
}
