import React, { useState } from "react";
import NavBar from "../components/Navbar";
import { Sparkles, HelpCircle, ArrowRight, MessageSquare, Terminal } from "lucide-react";

const allFaqs = {
  "Orders & Logistics": [
    { q: "ESTIMATED_DELIVERY_TIMELINE", a: "Standard delivery within India requires 3–7 business days. Expedited units ship within 1–2 business days. Tracking manifests are supplied via encrypted email/SMS upon dispatch." },
    { q: "TRACKING_PROTOCOL", a: "Access your Orders page and select 'View Manifest'. Alternatively, use the unique hash link sent to your registered contact node." },
    { q: "ADDRESS_MODIFICATION", a: "Permitted only while status is 'Awaiting Fulfillment'. Once the logistics chain is initiated, address parameters are locked." }
  ],
  "Returns & Nullification": [
    { q: "REVERSION_POLICY", a: "7-day return window for standard items. Intimate units and 'Final Sale' items are non-reversible. Items must remain in 'Original Condition' with all security tags intact." },
    { q: "ORDER_MODIFICATION", a: "Cancellation window: 60 minutes post-placement. Beyond this threshold, fulfillment enters the automated pipeline." },
    { q: "DAMAGE_REPORTING", a: "Report structural failures or incorrect unit delivery within 48 hours. Photo evidence is required for manifest reconciliation." }
  ],
  "Protocol & Clearing": [
    { q: "GUEST_ACCESS", a: "Guest checkout is supported. However, a registered Profile node is required for automated tracking and simplified asset reversion." },
    { q: "ACCEPTED_CLEARING_METHODS", a: "UPI, Credit/Debit (Global), NetBanking, and COD for qualifying zones. All clearing is secured via TLS 1.3 encryption." },
    { q: "PROMO_CODE_EXECUTION", a: "Input codes during final clearing. One code per transaction. Exclusions may apply to 'Atelier' limited drops." }
  ]
};

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(allFaqs)[0]);

  return (
    <div className="bg-white min-h-screen">
      <NavBar />
      
      <main className="pt-40 pb-20 px-4 md:px-10">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle size={14} className="text-pink-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                  Sector_05 // Support_Node
                </span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-gray-900 tracking-tighter leading-[0.8] uppercase">
                Help <br />
                <span className="text-pink-600 italic font-serif lowercase tracking-normal">
                  Center
                </span>
              </h1>
            </div>
            <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Last_Sync: 2026.02.14</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500">System_Status: Operational</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <aside className="lg:col-span-3 space-y-8 sticky top-32 h-fit">
              <div className="space-y-2">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 ml-1">Archive_Topics</p>
                <div className="flex flex-col gap-1">
                  {Object.keys(allFaqs).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left px-4 py-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl ${
                        activeCategory === cat 
                        ? "bg-gray-900 text-white translate-x-2" 
                        : "text-gray-400 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {cat.replace(" ", "_")}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-pink-50 rounded-[2rem] space-y-4">
                 <Terminal size={20} className="text-pink-600" />
                 <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-900">Direct_Assistance</h4>
                 <p className="text-[10px] font-bold text-pink-700/70 leading-relaxed uppercase tracking-tighter">
                    Emergency support via support@fluxstore.com <br />
                    Node_ID: +91 8015-789-769
                 </p>
                 <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-pink-600 hover:gap-4 transition-all">
                    Open_Chat_Protocol <ArrowRight size={12} />
                  </button>
              </div>
            </aside>

            <div className="lg:col-span-9 space-y-20">
              <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-baseline gap-4">
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-gray-900">
                        {activeCategory}
                    </h2>
                    <div className="h-px flex-1 bg-gray-100" />
                </div>

                <div className="grid gap-4">
                  {allFaqs[activeCategory].map((faq, index) => (
                    <details
                      key={index}
                      className="group border border-gray-100 rounded-[2rem] bg-white transition-all hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100/30"
                    >
                      <summary className="list-none p-8 cursor-pointer flex justify-between items-center">
                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-900">
                          {faq.q}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-open:rotate-180 transition-transform">
                            <ArrowRight size={14} className="rotate-90" />
                        </div>
                      </summary>
                      <div className="px-8 pb-8 text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                        <div className="pt-4 border-t border-gray-50">
                            {faq.a}
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between gap-6">
                 <div className="flex gap-10">
                    <div className="space-y-1">
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Protocol</p>
                        <p className="text-[10px] font-black text-gray-900 uppercase">Secure_Encrypted</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Response_Time</p>
                        <p className="text-[10px] font-black text-gray-900 uppercase">Avg 2.4 Hours</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <MessageSquare size={16} className="text-pink-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Awaiting_Instructions</span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;