import React from "react";
import { toast } from "react-hot-toast";
import { ArrowUpRight, Sparkles, Zap } from "lucide-react";

const PromotionalBanners = () => {
  const handleClick = (text) => {
    toast.success(`MANIFEST_REDIRECT: ${text}`, {
      style: {
        borderRadius: "1rem",
        background: "#111",
        color: "#fff",
        fontSize: "10px",
        fontWeight: "900",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
      },
    });
  };

  return (
    <section className="py-24 px-4 md:px-10 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
        <div
          onClick={() => handleClick("AUTUMN_COLLECTION")}
          className="lg:col-span-7 relative group overflow-hidden rounded-[3rem] bg-gray-900 cursor-pointer border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-pink-100/30 transition-all duration-700"
        >
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
            alt="Women's Fashion"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between items-start">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2">
                <Sparkles size={14} className="text-pink-600" />
                <span className="text-[10px] font-black tracking-[0.2em] text-gray-900">
                  ARCHIVE_NEW_DROP
                </span>
              </div>
              <div className="text-white/40 font-black text-[10px] tracking-widest">
                REF_AUTUMN_2026
              </div>
            </div>

            <div className="space-y-4 pointer-events-auto">
              <h3 className="text-white text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase">
                Autumn <br />
                <span className="text-pink-500 italic font-serif lowercase tracking-normal">
                  Atelier
                </span>
              </h3>
              <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-white hover:text-pink-500 transition-colors pt-4">
                Explore_Collection <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <div
            onClick={() => handleClick("ACCESSORIES")}
            className="relative flex-1 group overflow-hidden rounded-[2.5rem] bg-black cursor-pointer border border-gray-800 transition-all duration-500 hover:shadow-xl hover:shadow-pink-900/20"
          >
            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80"
              alt="Accessories"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="relative h-full p-8 flex flex-col justify-end">
              <div className="absolute top-8 right-8 text-pink-500">
                <Zap size={24} fill="currentColor" />
              </div>
              <h3 className="text-white text-4xl font-black tracking-tighter uppercase mb-2">
                Luxury <span className="text-pink-500">Add-ons</span>
              </h3>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                Technical_Gear // Up to 40% OFF
              </p>
            </div>
          </div>

          <div
            onClick={() => handleClick("SNEAKERS")}
            className="relative flex-1 group overflow-hidden rounded-[2.5rem] bg-gray-50 cursor-pointer border border-gray-100 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50"
          >
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
                alt="Sneakers"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            <div className="relative h-full p-8 bg-gradient-to-r from-white via-white/80 to-transparent flex flex-col justify-center max-w-[60%]">
              <span className="text-[9px] font-black bg-gray-900 text-white px-2 py-1 rounded-md w-fit mb-4 tracking-[0.2em]">
                PLATFORM_LIMIT
              </span>
              <h3 className="text-3xl font-black text-gray-900 tracking-tighter uppercase leading-none mb-4">
                Sneaker <br />
                Manifest
              </h3>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pink-600">
                Inspect_Drop <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanners;
