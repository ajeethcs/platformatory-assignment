import { proxyActivities, sleep } from "@temporalio/workflow";
import type * as activities from "../activities/userActivities";

const { saveUserToMongo, sendUserToCrudCrud } = proxyActivities<
  typeof activities
>({
  startToCloseTimeout: "1 minute",
});

export async function updateUserWorkflow(profile: any) {
  await saveUserToMongo(profile);

  // Wait 10 seconds
  await sleep(10_000);

  await sendUserToCrudCrud(profile);
}
