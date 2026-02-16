import axios from "axios";

const API = "https://lively-growth-production-cd2d.up.railway.app/api/auth";

export const loginUser = async (data) => {
  const res = await axios.post(`${API}/login`, data);
  return res.data;
};

export const registerUser = async (data) => {
  const res = await axios.post(`${API}/register`, data);
  return res.data;
};
