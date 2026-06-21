import axios from "axios";

const API = "https://luxefashion.onrender.com/api/orders";

const axiosInstance = axios.create({
  baseURL: API,
});

export const createOrder = async (order, token) => {
  const res = await axiosInstance.post("/", order, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getMyOrders = async (token) => {
  const res = await axiosInstance.get("/my-orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getOrderById = async (id, token) => {
  const res = await axiosInstance.get(`/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const cancelOrder = async (id, token) => {
  const res = await axiosInstance.put(
    `/${id}/cancel`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  return res.data;
};
