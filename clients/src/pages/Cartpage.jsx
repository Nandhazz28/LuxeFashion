import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import NavBar from "../components/Navbar";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const Cartpage = () => {
  const { cart, removeFromCart, updateQty } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + (item.newPrice || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-100 pb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={14} className="text-pink-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                Your Selection
              </span>
            </div>
            <h1 className="text-7xl font-black text-gray-900 tracking-tighter leading-none">
              Shopping <span className="text-pink-500 italic font-serif">Bag</span>
            </h1>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-[11px] font-black uppercase tracking-widest text-gray-400">
              Subtotal ({cart.length} items):{" "}
              <span className="text-gray-900 ml-2 italic">
                ₹{total.toLocaleString()}
              </span>
            </p>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-40 border-2 border-dashed border-gray-100 rounded-[4rem]">
            <ShoppingBag size={64} className="text-gray-100 mb-8" />
            <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900">
              Your bag is empty
            </h2>
            <Link
              to="/"
              className="mt-6 text-[11px] font-black uppercase tracking-[0.3em] text-pink-500 hover:text-black transition-colors flex items-center gap-2"
            >
              Browse Collections <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7 space-y-10">
              {cart.map((item) => (
                <div
                  key={item.cartId}
                  className="group flex flex-col sm:flex-row gap-8 pb-10 border-b border-gray-50"
                >
                  <div className="w-full sm:w-48 aspect-[3/4] bg-gray-50 rounded-[2rem] overflow-hidden relative shadow-2xl shadow-gray-200/50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex-1 flex flex-col py-2">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-black text-gray-900 tracking-tight uppercase">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <p className="text-[11px] font-black uppercase tracking-widest text-pink-500 mb-6">
                      Boutique Exclusive
                    </p>

                    <div className="mt-auto flex items-end justify-between">
                      <div className="flex items-center border-2 border-gray-900 rounded-2xl p-1">
                        <button
                          onClick={() =>
                            updateQty(
                              item.cartId,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-900 hover:text-white rounded-xl transition-all"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-5 text-sm font-black">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQty(item.cartId, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-900 hover:text-white rounded-xl transition-all"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-2xl font-black text-gray-900 tracking-tighter">
                          ₹{((item.newPrice || 0) * (item.quantity || 1)).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gray-50 rounded-[3rem] p-12 sticky top-32">
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 mb-10">
                  Checkout Summary
                </h4>

                <div className="space-y-6 mb-10">
                  <div className="flex justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                      Order Value
                    </span>
                    <span className="text-sm font-black text-gray-900 font-mono">
                      ₹{total.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                      Shipping
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-600">
                      Complimentary
                    </span>
                  </div>
                </div>

                <div className="pt-8 border-t-2 border-gray-900 flex justify-between items-center mb-10">
                  <span className="text-sm font-black uppercase tracking-[0.4em]">Total</span>
                  <span className="text-4xl font-black tracking-tighter text-gray-900">
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-gray-900 text-white h-20 rounded-3xl font-black text-[11px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-pink-600 transition-all active:scale-95 shadow-2xl shadow-gray-300"
                >
                  Proceed to Checkout <ArrowRight size={18} />
                </button>

                <div className="mt-12 grid grid-cols-2 gap-6 opacity-30">
                  <div className="flex flex-col items-center gap-2">
                    <ShieldCheck size={20} />
                    <span className="text-[8px] font-black uppercase tracking-widest">Secure</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Lock size={20} />
                    <span className="text-[8px] font-black uppercase tracking-widest">Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cartpage;
