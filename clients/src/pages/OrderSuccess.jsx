import { useParams, Link } from "react-router-dom";
import { Check, ArrowRight, ShoppingBag, Sparkles, Heart } from "lucide-react";
import NavBar from "../components/Navbar";

const OrderSuccess = () => {
  const { id } = useParams();

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <main className="pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="max-w-xl w-full relative">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-64 h-64 bg-pink-100/40 rounded-full blur-[100px] -z-10" />
          
          <div className="bg-white rounded-[4rem] shadow-2xl shadow-pink-100/50 border border-gray-100 p-12 md:p-16 text-center relative overflow-hidden">
            
            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center text-white relative z-10 shadow-xl">
                  <Check size={40} strokeWidth={3} />
                </div>
                <div className="absolute inset-0 bg-pink-200 rounded-full animate-ping opacity-20" />
                <div className="absolute -top-4 -right-4 text-pink-500">
                  <Sparkles size={28} />
                </div>
              </div>
            </div>

            <h1 className="text-5xl font-black text-gray-900 tracking-tighter mb-4">
              It's <span className="text-pink-600 italic font-serif text-6xl">Official.</span>
            </h1>
            
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 mb-10">
              Your Atelier pieces are being prepared
            </p>

            <div className="bg-gray-50 rounded-[2.5rem] p-8 mb-10 border border-gray-100 group hover:border-pink-200 transition-colors duration-500">
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-pink-500 mb-2">Order Reference</span>
                <span className="text-2xl font-black text-gray-900 tracking-widest uppercase">
                  #{id?.slice(-8).toUpperCase() || "CONFIRMED"}
                </span>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200/50 grid grid-cols-2 gap-4">
                <div className="text-left">
                  <p className="text-[8px] font-black uppercase tracking-widest text-gray-400 mb-1">Status</p>
                  <p className="text-[10px] font-black uppercase text-gray-900 tracking-tight">Processing</p>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-black uppercase tracking-widest text-gray-400 mb-1">Expected</p>
                  <p className="text-[10px] font-black uppercase text-gray-900 tracking-tight">3-5 Days</p>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-12 max-w-xs mx-auto font-medium">
              A digital receipt has been dispatched to your inbox. You can monitor your shipment via your personal dashboard.
            </p>

            <div className="flex flex-col gap-4">
              <Link
                to={`/order/${id}`}
                className="w-full bg-gray-900 text-white h-16 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-pink-600 transition-all active:scale-95 shadow-xl shadow-gray-200"
              >
                Track Order <ArrowRight size={16} />
              </Link>

              <Link
                to="/"
                className="w-full border-2 border-gray-900 text-gray-900 h-16 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all"
              >
                Back to Gallery
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-2 text-pink-200">
              <Heart size={14} fill="currentColor" />
              <span className="text-[9px] font-black uppercase tracking-[0.4em]">Thank you for choosing us</span>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderSuccess;