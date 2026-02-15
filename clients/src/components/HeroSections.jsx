import React from "react";
import Imageone from "../assets/images/fashion.png";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, MousePointer2 } from "lucide-react";

const HeroSections = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden pt-32 pb-20 px-4 md:px-10">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-100/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-7 z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-3 animate-fadeIn">
              <div className="px-3 py-1 bg-pink-50 rounded-full border border-pink-100 flex items-center gap-2">
                <Sparkles size={12} className="text-pink-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-600">
                  Collection_2026
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">
                Available Now
              </span>
            </div>

            <h1 className="text-[12vw] lg:text-[10rem] font-black text-gray-900 leading-[0.8] tracking-tighter uppercase">
              Find Your <br />
              <span className="text-pink-600 italic font-serif lowercase tracking-normal">
                Luxury
              </span> <br />
              Identity
            </h1>

            <div className="flex flex-col md:flex-row items-start md:items-end gap-8 pt-6">
              <p className="text-sm md:text-base text-gray-500 font-medium max-w-xs leading-relaxed uppercase tracking-tight">
                Meticulously curated exclusive fashion, accessories, and fragrances designed to manifest your true confidence.
              </p>
              
              <Link
                to="/"
                className="group bg-gray-900 hover:bg-pink-600 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center gap-3 shadow-2xl shadow-gray-200"
              >
                Start Exploring
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-3 border-t border-gray-100 pt-8 opacity-40">
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest">Global Shipping</p>
              <p className="text-xs font-bold font-mono">NODE_01</p>
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest">Limited Access</p>
              <p className="text-xs font-bold font-mono">V.092</p>
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest">Secure Ledger</p>
              <p className="text-xs font-bold font-mono">EST_2024</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative group">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[3.5rem] bg-gray-50 shadow-2xl shadow-gray-200 border-[12px] border-white">
            <img
              src={Imageone}
              alt="Fashion Hero"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg border border-white/50 animate-bounce">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white">
                <MousePointer2 size={14} />
              </div>
              <div>
                <p className="text-[8px] font-black uppercase text-gray-400">View_Detail</p>
                <p className="text-[10px] font-bold text-gray-900 tracking-tighter">Editorial_Archive_01</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-pink-200 rounded-br-[3rem]" />
        </div>

      </div>
    </section>
  );
};

export default HeroSections;