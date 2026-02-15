import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../api/orderApi";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { MapPin, Phone, User, Home, Hash, ArrowRight, ShieldCheck, Sparkles, CreditCard } from "lucide-react";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });

  const total = cart.reduce((sum, i) => sum + i.newPrice * i.quantity, 0);

  const getIcon = (key) => {
    switch (key) {
      case "fullName": return <User size={16} />;
      case "phone": return <Phone size={16} />;
      case "street": return <Home size={16} />;
      case "city": return <MapPin size={16} />;
      case "pincode": return <Hash size={16} />;
      default: return <MapPin size={16} />;
    }
  };

  const placeOrder = async () => {
    if (!user?.token) return toast.error("Please login to finalize order");

    const emptyFields = Object.entries(address).filter(([_, v]) => !v.trim());
    if (emptyFields.length > 0) return toast.error("Complete your shipping profile");

    try {
      const orderData = {
        items: cart.map((i) => ({ productId: i.id, name: i.name, price: i.newPrice, qty: i.quantity })),
        address,
        totalAmount: total,
      };

      const data = await createOrder(orderData, user.token);
      clearCart();
      toast.success("Order Secured Successfully");
      navigate(`/order-success/${data._id}`);
    } catch (err) {
      toast.error(err.response?.data || "Process failed. Try again.");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-100 pb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={14} className="text-pink-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Atelier Checkout</span>
            </div>
            <h1 className="text-6xl font-black text-gray-900 tracking-tighter leading-none">
              Shipping <span className="text-pink-600 italic font-serif">&</span> Details
            </h1>
          </div>
          <div className="mt-6 md:mt-0 text-right">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Est. Arrival</p>
            <p className="text-sm font-black text-gray-900">3 — 5 Business Days</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-7 space-y-12">
            <section>
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-900 mb-8 flex items-center gap-4">
                01. Delivery Address <span className="h-px w-20 bg-gray-100"></span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {Object.keys(address).map((key) => (
                  <div key={key} className={`relative group ${key === 'street' ? 'md:col-span-2' : ''}`}>
                    <label className="absolute -top-6 left-0 text-[9px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-pink-500 transition-colors">
                      {key.replace(/([A-Z])/g, " $1")}
                    </label>
                    <div className="flex items-center border-b-2 border-gray-100 group-focus-within:border-gray-900 transition-all py-3">
                      <span className="text-gray-300 group-focus-within:text-gray-900 transition-colors mr-4">
                        {getIcon(key)}
                      </span>
                      <input
                        value={address[key]}
                        onChange={(e) => setAddress({ ...address, [key]: e.target.value })}
                        className="w-full bg-transparent border-none focus:ring-0 text-sm font-bold tracking-tight placeholder:text-gray-200"
                        placeholder={`Enter ${key.replace(/([A-Z])/g, " $1").toLowerCase()}...`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-900 mb-8 flex items-center gap-4">
                02. Payment Method <span className="h-px w-20 bg-gray-100"></span>
              </h3>
              <div className="p-8 rounded-[2rem] border-2 border-gray-900 bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CreditCard size={24} className="text-gray-900" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest">Cash on Delivery</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Pay at your doorstep</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-4 border-gray-900 bg-white"></div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gray-50 rounded-[3rem] p-10 sticky top-32">
              <h2 className="text-2xl font-black tracking-tighter mb-10 flex items-baseline gap-2">
                Bag Summary <span className="text-xs text-gray-400 font-bold">({cart.length} Items)</span>
              </h2>

              <div className="space-y-8 mb-10 overflow-y-auto max-h-[320px] pr-4 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-24 bg-white rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100">
                      <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-900 mb-1">{item.name}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Qty: {item.quantity}</p>
                      <p className="text-xs font-black mt-2 text-pink-600">₹{item.newPrice.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-gray-200">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-black">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <span>Shipping</span>
                  <span className="text-green-600 font-black tracking-[0.2em]">Complimentary</span>
                </div>
                <div className="flex justify-between items-center pt-6 mt-4 border-t-2 border-gray-900">
                  <span className="text-sm font-black uppercase tracking-[0.3em]">Total</span>
                  <span className="text-4xl font-black tracking-tighter">₹{total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={placeOrder}
                className="w-full mt-10 bg-gray-900 text-white h-20 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-pink-600 transition-all active:scale-95 shadow-2xl shadow-gray-200"
              >
                Secure Order <ArrowRight size={18} />
              </button>

              <div className="mt-8 flex items-center justify-center gap-2 text-gray-400">
                <ShieldCheck size={14} />
                <span className="text-[9px] font-black uppercase tracking-widest">Encrypted Checkout</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;