const API = "https://luxefashion.onrender.com/api/orders";
export const createOrder = async (order, token) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });

  return res.json();
};

export const getMyOrders = async (token) => {
  const res = await fetch(`${API}/my-orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.json();
};

export const getOrderById = async (id, token) => {
  const res = await fetch(`${API}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.json();
};