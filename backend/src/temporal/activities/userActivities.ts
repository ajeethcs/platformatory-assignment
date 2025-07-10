import User from "../../models/User";
import axios from "axios";

export async function saveUserToMongo(profile: any) {
  console.log("Saving user to MongoDB...");

  await User.findOneAndUpdate(
    { sub: profile.sub },
    {
      firstName: profile.firstName,
      lastName: profile.lastName,
      phone: profile.phone,
      city: profile.city,
      pincode: profile.pincode,
    },
    { upsert: true, new: true }
  );

  console.log("Saved to MongoDB!");
}

export async function sendUserToCrudCrud(profile: any) {
  console.log("Sending data to CRUDCrud...");

  await axios.post(
    `https://crudcrud.com/api/cccbc60ae4f14ebc8a161ea7acbebf8c/users`,
    profile
  );

  console.log("Sent to CRUDCrud!");
}
