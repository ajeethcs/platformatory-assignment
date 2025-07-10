import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  sub: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  phone: String,
  city: String,
  pincode: String,
});

export default mongoose.model("User", UserSchema);
