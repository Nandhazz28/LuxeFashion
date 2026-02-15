import React, { useState } from "react";
import NavBar from "../components/Navbar";
import { BookOpen, LifeBuoy, Heart, Wrench, Shield, ArrowRight, Terminal } from "lucide-react";

const sections = [
  {
    id: "customer-service",
    title: "Customer_Service",
    icon: <LifeBuoy size={18} />,
    definition: "The primary protocol for transactional assistance across the purchase lifecycle.",
    faqs: [
      { q: "OPERATIONAL_SCOPE", a: "Inquiry management, logistical status, returns/exchanges, and primary troubleshooting." },
      { q: "LEADERSHIP_MODEL", a: "Frontline units governed by SOP manifests and CRM-integrated context." },
      { q: "EFFICIENCY_METRICS", a: "CSAT (Satisfaction), FRT (Response), and FCR (Resolution Accuracy)." },
    ],
  },
  {
    id: "help-center",
    title: "Help_Center",
    icon: <BookOpen size={18} />,
    definition: "An automated self-service repository for technical documentation and system FAQs.",
    faqs: [
      { q: "ASSET_REQUIREMENTS", a: "Step-by-step logic flows, release logs, and encrypted policy documentation." },
      { q: "SYNC_FREQUENCY", a: "Updates must align with every feature drop and high-volume ticket pattern." },
      { q: "DISCOVERY_PATHS", a: "Global navigation, footer nodes, and contextual in-app triggers." },
    ],
  },
  {
    id: "support-center",
    title: "Support_Center",
    icon: <Wrench size={18} />,
    definition: "A dedicated hub for advanced technical triaging and live ticket escalation.",
    faqs: [
      { q: "DIFFERENTIAL_LOGIC", a: "Focuses on live, technical ticket streams vs. static knowledge assets." },
      { q: "ROUTING_PROTOCOL", a: "Auto-triage based on severity, category, and client priority tiers." },
      { q: "TOOLING_STACK", a: "Ticketing infrastructure, system status nodes, and incident runbooks." },
    ],
  },
  {
    id: "customer-care",
    title: "Customer_Care",
    icon: <Heart size={18} />,
    definition: "A relationship-centric model focusing on empathy and long-term retention.",
    faqs: [
      { q: "EMOTIONAL_DIFFERENTIAL", a: "Prioritizes personalized wellness and rapport over purely transactional speed." },
      { q: "TRAINING_VECTORS", a: "Active monitoring, inclusive linguistics, and proactive outreach cues." },
      { q: "SUCCESS_INDICATORS", a: "NPS (Net Promoter Score) and Repeat Engagement Velocity." },
    ],
  },
  {
    id: "service-desk",
    title: "Service_Desk",
    icon: <Shield size={18} />,
    definition: "An ITIL-aligned function managing incidents, change requests, and infrastructure.",
    faqs: [
      { q: "INCIDENT_SCOPE", a: "Response management, change approvals, and problem-management lifecycle." },
      { q: "FRAMEWORK_ALIGNMENT", a: "Adherence to ITIL standards for configuration and security management." },
      { q: "PRIORITY_LOGIC", a: "Weighted by business impact, safety requirements, and regulatory compliance." },
    ],
  },
];

const Section = ({ section }) => (
  <section id={section.id} className="mb-24 scroll-mt-40 animate-in fade-in slide-in-from-bottom-6 duration-1000">
    <div className="flex items-center gap-5 mb-8">
      <div className="p-4 bg-gray-900 text-white rounded-[1.5rem] shadow-xl shadow-gray-200">
        {section.icon}
      </div>
      <div>
        <h2 className="text-4xl font-black uppercase tracking-tighter text-gray-900 leading-none">
          {section.title}
        </h2>
        <div className="flex items-center gap-2 mt-2">
            <div className="h-px w-4 bg-pink-500" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-pink-500">Service_Node // 0{section.id.length % 9}</span>
        </div>
      </div>
    </div>
    
    <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed mb-10 max-w-3xl">
      {section.definition}
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {section.faqs.map((faq, idx) => (
        <div
          key={idx}
          className="p-8 border border-gray-100 rounded-[2rem] bg-white hover:border-pink-200 hover:shadow-2xl hover:shadow-pink-100/30 transition-all duration-500 group"
        >
          <p className="text-[10px] font-black text-pink-600 uppercase tracking-[0.2em] mb-4 flex justify-between items-center">
            {faq.q}
            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </p>
          <p className="text-[11px] font-bold text-gray-600 uppercase tracking-widest leading-relaxed">
            {faq.a}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default function CommonBusinessAlternatives() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <main className="pt-44 pb-24 px-4 md:px-10">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-28 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Terminal size={14} className="text-pink-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                  Global_Support_Taxonomy // 2026
                </span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-gray-900 tracking-tighter leading-[0.8] uppercase">
                Service <br />
                <span className="text-pink-600 italic font-serif lowercase tracking-normal">
                  Alternatives
                </span>
              </h1>
            </div>
            <div className="border-l-4 border-pink-600 pl-8 py-2 max-w-md">
                <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-2">Manifest_Objective</p>
                <p className="text-xs font-bold leading-relaxed text-gray-900 uppercase italic">
                  Standardizing terminology to optimize client-facing protocols and incident resolution velocity.
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            <aside className="lg:col-span-3 sticky top-40 h-fit space-y-10">
              <div className="space-y-2">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-300 ml-4">Concepts_List</p>
                <div className="flex flex-col gap-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left px-8 py-5 text-[10px] font-black uppercase tracking-widest transition-all rounded-[1.5rem] border ${
                        activeSection === section.id
                          ? "bg-gray-900 text-white border-gray-900 shadow-2xl translate-x-4"
                          : "text-gray-400 border-transparent hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {section.title.replace("_", " ")}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-pink-50 rounded-[2.5rem] border border-pink-100">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-pink-600">Live_Taxonomy</span>
                </div>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-tighter leading-tight">
                  Reference this manifest when defining department-level SOPs for the 2026 fiscal year.
                </p>
              </div>
            </aside>

            <div className="lg:col-span-9">
              {sections.map((s) => (
                <Section key={s.id} section={s} />
              ))}

              <footer className="mt-32 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex gap-12">
                    <div className="space-y-1">
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Protocol</p>
                        <p className="text-[10px] font-black text-gray-900 uppercase tracking-tighter underline decoration-pink-500 underline-offset-4">Internal_Use_Only</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Archive_ID</p>
                        <p className="text-[10px] font-black text-gray-900 uppercase tracking-tighter underline decoration-pink-500 underline-offset-4">LA_TAX_26_01</p>
                    </div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
                  © 2026 LuxeArchive // Digital_Assets
                </span>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}