import User from "../../models/User";
import axios from "axios";

export async function saveToMongo(user: any) {
  const updated = await User.findOneAndUpdate({ sub: user.sub }, user, {
    upsert: true,
    new: true,
  });
  return updated.toObject();
}

export async function updateCrudCrud(user: any) {
  const { _id, __v, ...userData } = user;
  await axios.post(
    "https://crudcrud.com/api/f8652827bb074aba9cebe1dd1fb35107/users",
    userData
  );
}
