import { useEffect, useState } from "react";
import { getMyOrders } from "../api/orderApi";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { 
  ShoppingBag, 
  ChevronRight, 
  Sparkles, 
  PackageCheck, 
  ArrowLeft,
  Clock
} from "lucide-react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;
    if (token) {
      getMyOrders(token).then((data) => {
        setOrders(data);
        setLoading(false);
      });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-16 h-16 border-t-2 border-pink-500 rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-100 pb-12">
          <div>
            <Link to="/profile" className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 hover:text-black transition-colors">
               <ArrowLeft size={12} /> Back to Dashboard
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={14} className="text-pink-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Transaction History</span>
            </div>
            <h1 className="text-7xl font-black text-gray-900 tracking-tighter leading-none uppercase">
              Order <span className="text-pink-600 italic font-serif">Archives</span>
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-[3rem] p-10 sticky top-32">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-8">Archive Summary</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">Total Acquisitions</p>
                  <p className="text-3xl font-black text-gray-900">{orders.length}</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">Primary Status</p>
                  <p className="text-xl font-bold text-pink-600 italic">Active Manifest</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            {orders.length === 0 ? (
              <div className="py-24 text-center bg-gray-50 rounded-[3rem] border border-gray-100">
                <ShoppingBag size={48} className="mx-auto text-gray-200 mb-6" strokeWidth={1} />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">No Orders Found</p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <Link
                    key={order._id}
                    to={`/order/${order._id}`}
                    className="flex flex-col md:flex-row items-center justify-between p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-2xl hover:shadow-pink-100/30 hover:border-pink-200 transition-all group"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-pink-500 transition-colors">
                        <PackageCheck size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                           <span className="text-xs font-black text-gray-900 uppercase tracking-tighter">REF: {order._id.slice(-8).toUpperCase()}</span>
                           <span className="text-[8px] font-bold text-gray-300 uppercase px-2 py-0.5 border border-gray-100 rounded-full flex items-center gap-1">
                              <Clock size={8} /> {new Date(order.createdAt).toLocaleDateString()}
                           </span>
                        </div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          Amount: <span className="text-gray-900">₹{order.totalAmount.toLocaleString()}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start mt-4 md:mt-0">
                      <div className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest ${
                        order.orderStatus === "Cancelled" ? "bg-red-50 text-red-500" : "bg-pink-50 text-pink-600"
                      }`}>
                        {order.orderStatus}
                      </div>
                      <ChevronRight size={18} className="text-gray-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyOrders;