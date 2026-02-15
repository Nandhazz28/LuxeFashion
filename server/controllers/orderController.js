import Order from "../models/Order.js";
import mongoose from "mongoose";

export const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items in order" });
    }

    const order = await Order.create({
      user: req.user._id,
      items,
      totalAmount,
      address,
      paymentStatus: "Pending",
      orderStatus: "Placed",
    });

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Order creation failed" });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(orders);
  } catch {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid order ID" });

    const order = await Order.findById(id);

    if (!order)
      return res.status(404).json({ message: "Order not found" });

    if (order.user.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Unauthorized" });

    res.json(order);
  } catch {
    res.status(500).json({ message: "Failed to fetch order" });
  }
};


export const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order)
      return res.status(404).json({ message: "Order not found" });

    if (order.user.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Unauthorized" });

    if (order.orderStatus === "Delivered")
      return res.status(400).json({ message: "Delivered cannot cancel" });

    if (order.orderStatus === "Cancelled")
      return res.status(400).json({ message: "Already cancelled" });

    order.orderStatus = "Cancelled";
    await order.save();

    res.json(order);
  } catch {
    res.status(500).json({ message: "Cancel failed" });
  }
};
