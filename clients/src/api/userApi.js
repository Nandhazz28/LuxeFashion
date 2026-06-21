import axios from "axios";

const API = "https://luxefashion.onrender.com/api/users";

const axiosInstance = axios.create({
  baseURL: API,
});

export const getUserProfile = async (token) => {
  const res = await axiosInstance.get("/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const updateUserProfile = async (userData, token) => {
  const res = await axiosInstance.put("/profile", userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
