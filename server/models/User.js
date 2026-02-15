import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    address: {
      fullName: String,
      phone: String,
      street: String,
      city: String,
      pincode: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
