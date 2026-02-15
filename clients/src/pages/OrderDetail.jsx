import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import NavBar from "../components/Navbar";
import { toast } from "react-hot-toast";
import {
  Package,
  MapPin,
  CreditCard,
  ArrowLeft,
  XCircle,
  Calendar,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const fetchOrder = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5520/api/orders/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setOrder(data);
    } catch (err) {
      toast.error("Failed to sync with server");
    } finally {
      setLoading(false);
    }
  }, [id, token]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  const cancelOrder = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:5520/api/orders/${id}/cancel`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setOrder(data);
      toast.success("Order Cancelled");
    } catch (err) {
      toast.error("Cancellation failed");
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-16 h-16 border-t-2 border-pink-500 rounded-full animate-spin" />
      </div>
    );

  const isCancelled = order.orderStatus === "Cancelled";
  const canCancel = !["Delivered", "Cancelled", "Shipped"].includes(
    order.orderStatus,
  );

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-100 pb-12">
          <div>
            <Link
              to="/my-orders"
              className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 hover:text-black transition-colors"
            >
              <ArrowLeft size={12} /> Back to Archives
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <Package size={14} className="text-pink-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                Order Specification
              </span>
            </div>
            <h1 className="text-7xl font-black text-gray-900 tracking-tighter leading-none uppercase">
              Manifest{" "}
              <span className="text-pink-600 italic font-serif">
                #{order._id?.slice(-8).toUpperCase()}
              </span>
            </h1>
          </div>
          <div className="mt-8 md:mt-0 px-6 py-3 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${isCancelled ? "bg-red-500" : "bg-pink-500"} animate-pulse`}
            />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">
              {order.orderStatus}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 rounded-[3rem] p-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6 flex items-center gap-2">
                <MapPin size={12} /> Shipping Node
              </h4>
              <p className="text-lg font-bold text-gray-900 leading-tight uppercase tracking-tighter">
                {order.address?.fullName}
                <br />
                <span className="text-xs font-medium text-gray-500 lowercase font-mono">
                  {order.address?.street}
                </span>
                <br />
                <span className="text-sm">
                  {order.address?.city} — {order.address?.pincode}
                </span>
              </p>
            </div>

            <div className="bg-pink-50 rounded-[3rem] p-10 border border-pink-100">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-600 mb-6 flex items-center gap-2">
                <CreditCard size={12} /> Payment Log
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase text-pink-400">
                  <span>Subtotal</span>
                  <span>₹{order.totalAmount}</span>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase text-pink-400">
                  <span>Logistics</span>
                  <span>FREE</span>
                </div>
                <div className="pt-4 border-t border-pink-200 flex justify-between items-end">
                  <span className="text-[10px] font-black uppercase text-pink-800">
                    Total Due
                  </span>
                  <span className="text-4xl font-black text-pink-600 tracking-tighter italic leading-none">
                    ₹{order.totalAmount}
                  </span>
                </div>
              </div>
            </div>

            {canCancel && (
              <button
                onClick={cancelOrder}
                className="w-full py-6 rounded-3xl border-2 border-red-50 text-red-400 text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white hover:border-red-500 transition-all flex items-center justify-center gap-2"
              >
                <XCircle size={14} /> Cancel Acquisition
              </button>
            )}
          </div>

          <div className="lg:col-span-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-900 mb-10 flex items-center gap-4">
              Asset Manifest <span className="h-px flex-1 bg-gray-100"></span>
            </h3>

            <div className="space-y-6">
              {order.items?.map((item) => (
                <div
                  key={item.productId}
                  className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-xl transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-200">
                      <Package size={24} />
                    </div>
                    <div>
                      <p className="text-xl font-black text-gray-900 uppercase tracking-tighter">
                        {item.name}
                      </p>
                      <p className="text-[10px] font-bold text-pink-500 uppercase tracking-widest mt-1">
                        Quantity: {item.quantity || 1}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-gray-300 uppercase mb-1">
                      Row Value
                    </p>
                    <p className="text-2xl font-black text-gray-900 italic">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-gray-50 flex items-center gap-3 opacity-20 grayscale">
              <ShieldCheck size={20} />
              <p className="text-[9px] font-black uppercase tracking-[0.5em]">
                Secured by Atelier Systems
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderDetail;
