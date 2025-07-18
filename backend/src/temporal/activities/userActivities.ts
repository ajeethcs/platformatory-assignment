import User from "../../models/User";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

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
    `https://crudcrud.com/api/${process.env.CRUDCRUD_API_KEY}/users`,
    userData
  );
}
