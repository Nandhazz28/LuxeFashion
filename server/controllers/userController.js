import User from "../models/User.js";
export const getUserProfile = async (req, res) => {
  res.json(req.user);
};

export const updateUserProfile = async (req, res) => {
  try {
    console.log("Updating user:", req.user._id);

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { name, email, address } = req.body;

    if (name) user.name = name;
    if (email) user.email = email;

    if (address) {
      user.address = {
        ...user.address, 
        fullName: address.fullName || user.address?.fullName || "",
        phone: address.phone || user.address?.phone || "",
        street: address.street || user.address?.street || "",
        city: address.city || user.address?.city || "",
        pincode: address.pincode || user.address?.pincode || "",
      };
    }

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    console.error("PROFILE UPDATE ERROR:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
