import React, { useState, useEffect, useRef } from "react";
import NavBar from "../components/Navbar";
import { HelpCircle, ArrowRight, MessageSquare, Terminal } from "lucide-react";

const categories = {
  "Orders_&_Logistics": [
    {
      q: "ESTIMATED_DELIVERY_TIMELINE",
      a: "Standard delivery within India requires 3–7 business days. Expedited units ship within 1–2 days.",
    },
    {
      q: "TRACKING_PROTOCOL",
      a: "Access Orders page or tracking link sent via SMS/email.",
    },
    {
      q: "ADDRESS_MODIFICATION",
      a: "Allowed only before fulfillment begins via the User Dashboard.",
    },
  ],
  "Returns_&_Nullification": [
    {
      q: "REVERSION_POLICY",
      a: "7-day return window. Final Sale and intimate units are excluded from reversion.",
    },
    {
      q: "ORDER_MODIFICATION",
      a: "Cancellation protocols are active within 60 minutes of placement.",
    },
    {
      q: "DAMAGE_REPORTING",
      a: "Report structural failures within 48 hours with high-resolution images.",
    },
  ],
  "Protocol_&_Clearing": [
    {
      q: "GUEST_ACCESS",
      a: "Guest checkout is permitted; however, data persistence requires a registered Node.",
    },
    {
      q: "ACCEPTED_CLEARING_METHODS",
      a: "UPI, Cards (Global), NetBanking, and COD for qualifying zones.",
    },
    {
      q: "PROMO_CODE_EXECUTION",
      a: "Apply unique hashes at checkout. One protocol per transaction.",
    },
  ],
};

const sections = Object.keys(categories).map((k) => ({
  id: k.toLowerCase().replace(/_&_/g, "-"),
  title: k,
  faqs: categories[k],
}));

const Section = ({ section, isActive }) => (
  <section
    id={section.id}
    className={`mb-32 scroll-mt-48 transition-all duration-700 ${
      isActive ? "opacity-100 translate-x-0" : "opacity-30 blur-[1px]"
    }`}
  >
    <div className="flex items-start gap-6 mb-10">
      <div
        className={`p-4 border rounded-3xl transition-all duration-500 shadow-xl ${
          isActive
            ? "bg-white border-pink-100 text-pink-600 shadow-pink-100/40"
            : "bg-gray-50 border-gray-100 text-gray-400 shadow-none"
        }`}
      >
        <HelpCircle size={20} />
      </div>
      <div className="flex-1">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-gray-900 mb-3">
          {section.title.replace(/_/g, " ")}
        </h2>
        <div
          className={`h-px w-full bg-gradient-to-r transition-all duration-1000 ${
            isActive
              ? "from-pink-500 to-transparent"
              : "from-gray-200 to-transparent"
          }`}
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {section.faqs.map((faq, i) => (
        <div
          key={i}
          className="p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:border-pink-200 hover:shadow-2xl hover:shadow-pink-100/30 transition-all group"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-[9px] font-black text-pink-600 uppercase tracking-[0.3em]">
              {faq.q}
            </span>
            <ArrowRight
              size={14}
              className="text-pink-200 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all"
            />
          </div>
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
            {faq.a}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default function FAQ() {
  const [active, setActive] = useState(sections[0].id);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-20% 0px -60% 0px" },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.current.observe(el);
    });

    return () => observer.current.disconnect();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white min-h-screen selection:bg-pink-100 selection:text-pink-600">
      <NavBar />

      <main className="pt-44 pb-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-28 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Terminal size={14} className="text-pink-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                Sector_05 // Support_Node
              </span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black uppercase text-gray-900 tracking-tighter leading-[0.75]">
              Help <br />
              <span className="text-pink-600 italic font-serif lowercase tracking-normal">
                Center
              </span>
            </h1>
          </div>

          <div className="text-right border-r-4 border-pink-600 pr-8 py-2">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1">
              System_Status
            </p>
            <p className="text-[12px] font-black uppercase tracking-[0.3em] text-pink-500">
              Operational // 2026
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <aside className="lg:col-span-3 lg:sticky lg:top-40 h-fit space-y-4">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-300 ml-4 mb-6">
              Archive_Topics
            </p>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`whitespace-nowrap block w-full text-left px-8 py-5 text-[10px] font-black uppercase tracking-widest rounded-[1.5rem] border transition-all duration-500 ${
                    active === s.id
                      ? "bg-gray-900 text-white border-gray-900 shadow-2xl lg:translate-x-6"
                      : "text-gray-400 border-transparent hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {s.title.replace(/_/g, " ")}
                </button>
              ))}
            </div>

            <div className="hidden lg:block p-8 bg-pink-50 rounded-[2.5rem] mt-12 border border-pink-100">
              <MessageSquare size={20} className="text-pink-600 mb-4" />
              <p className="text-[10px] font-black text-gray-900 uppercase tracking-widest mb-2">
                Live_Chat_Protocol
              </p>
              <p className="text-[10px] font-bold text-pink-700/60 uppercase tracking-tighter leading-tight">
                Our agents are currently active. Average resolution velocity:
                2.4 hours.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-9">
            {sections.map((s) => (
              <Section key={s.id} section={s} isActive={active === s.id} />
            ))}

            <footer className="mt-20 pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex gap-12">
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    Protocol
                  </p>
                  <p className="text-[10px] font-black text-gray-900 uppercase underline decoration-pink-500 underline-offset-4 tracking-tighter">
                    Secure_Encrypted
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    Response_Node
                  </p>
                  <p className="text-[10px] font-black text-gray-900 uppercase underline decoration-pink-500 underline-offset-4 tracking-tighter">
                    Global_Clearance
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Awaiting_Instructions
                </span>
                <div className="w-8 h-px bg-gray-300" />
                <span className="text-[10px] font-black text-gray-900">
                  2026©
                </span>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
