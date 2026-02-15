import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Terminal
} from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-24 pb-12 px-6 md:px-10 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end pb-20 border-b border-gray-100 gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={14} className="text-pink-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                LuxeArchive // Global Interface
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-none uppercase">
              Flux<span className="text-pink-600 italic font-serif lowercase">Store</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Newsletter_Syndicate</p>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="ACCESS@PROTOCOL.COM" 
                className="bg-gray-50 border-none rounded-2xl px-6 py-4 w-72 text-[10px] font-bold tracking-widest focus:ring-2 focus:ring-pink-500 transition-all uppercase"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-2 rounded-xl hover:bg-pink-600 transition-colors">
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 py-20">
          
          
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-900 flex items-center gap-2">
              <Terminal size={12} className="text-pink-500" /> 01. Philosophy
            </h3>
            <p className="text-xs font-bold text-gray-400 leading-relaxed uppercase tracking-tighter max-w-xs">
              Curating high-fidelity physical assets through a digital-first lens. All systems optimized for the 2026 vanguard.
            </p>
            <div className="flex gap-4 pt-4">
              {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:text-pink-500 hover:bg-pink-50 transition-all border border-gray-100">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-900">02. Navigation</h3>
            <ul className="space-y-3">
              {["Men", "Women", "Kids", "profile"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-pink-500 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-900 underline decoration-pink-500 decoration-2 underline-offset-8">
              03. Support_Architecture
            </h3>
            <ul className="space-y-4 pt-2">
              <li>
                <Link to="/faq" className="group flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 group-hover:text-pink-600 transition-colors">General FAQ</span>
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tight italic">Component: FAQ.jsx</span>
                </Link>
              </li>
              <li>
                <Link to="/CommonBusinessAlternatives" className="group flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 group-hover:text-pink-600 transition-colors">Business_Logic</span>
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tight italic">Component: CommonBusinessAlternatives.jsx</span>
                </Link>
              </li>
              <li>
                <Link to="/ModernSpecializedAlternatives" className="group flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 group-hover:text-pink-600 transition-colors">Modern_Specialized</span>
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tight italic">Component: ModernSpecializedAlternatives.jsx</span>
                </Link>
              </li>
              <li>
                <Link to="/InternalTeamNames" className="group flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 group-hover:text-pink-600 transition-colors">Internal_Terminology</span>
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tight italic">Component: InternalTeamNames.jsx</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-900">04. Coordinates</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-pink-500 mt-1" />
                <span className="text-[10px] font-black uppercase text-gray-400 tracking-tighter">Chennai, India <br/> Studio_600082</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-pink-500" />
                <span className="text-[10px] font-black uppercase text-gray-900 tracking-tighter">support@fluxstore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
             <p className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-300">
               © {currentYear} FluxStore Platform // Assets Secured
             </p>
             <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" title="Systems Active" />
          </div>
          <div className="flex gap-8">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-300 hover:text-pink-500 cursor-pointer transition-colors">Privacy_Protocol</span>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-300 hover:text-pink-500 cursor-pointer transition-colors">Cookie_Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;