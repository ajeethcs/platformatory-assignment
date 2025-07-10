import { proxyActivities } from "@temporalio/workflow";

const activities = proxyActivities<{
  saveToMongo(user: any): Promise<any>;
  updateCrudCrud(user: any): Promise<void>;
}>({
  startToCloseTimeout: "30 seconds",
});

export async function updateUserWorkflow(user: any) {
  // Save user to Mongo
  const updatedUser = await activities.saveToMongo(user);

  // Wait 10 seconds
  await new Promise((resolve) => setTimeout(resolve, 10_000));

  // Call CrudCrud
  await activities.updateCrudCrud(updatedUser);

  return updatedUser;
}
