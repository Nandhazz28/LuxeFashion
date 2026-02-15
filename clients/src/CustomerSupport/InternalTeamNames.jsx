import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import { Terminal, ShieldCheck, Globe, Cpu, Zap, ArrowRight, Layers } from "lucide-react";

const sections = [
  {
    id: "support-team",
    title: "Support_Staff",
    icon: <Zap size={18} />,
    definition: "The primary frontline interface for direct consumer asset assistance.",
    faqs: [
      { q: "DEPLOYMENT_SCENARIO", a: "Optimal for agile, mid-tier operational units where role fluidity is required." },
      { q: "CORE_EMPHASIS", a: "Functional direct-response. Eliminates high-level abstraction in favor of rapid utility." },
      { q: "UNIT_DESIGNATIONS", a: "Support Specialist // Tier_01 Agent // Help Desk Technician." },
    ],
  },
  {
    id: "client-solutions",
    title: "Client_Solutions",
    icon: <Cpu size={18} />,
    definition: "Focuses on strategic asset resolution and complex system integrations.",
    faqs: [
      { q: "SOLUTION_PARAMETERS", a: "Suggests high-level problem solving, deep architectural knowledge, and bespoke integration." },
      { q: "ENVIRONMENT", a: "SaaS/B2B sectors where client nodes require tailored strategic patches." },
      { q: "UNIT_DESIGNATIONS", a: "Solutions Consultant // Strategic Account Manager." },
    ],
  },
  {
    id: "service-operations",
    title: "Service_Operations",
    icon: <Layers size={18} />,
    definition: "The structural backbone managing the efficiency of the support delivery model.",
    faqs: [
      { q: "OPERATIONAL_SCOPE", a: "Infrastructure management, KPI analytics, and workflow automation logic." },
      { q: "INTERFACE_TYPE", a: "Non-consumer facing. Internal optimization for frontline unit success." },
    ],
  },
  {
    id: "global-services",
    title: "Global_Services",
    icon: <Globe size={18} />,
    definition: "Distributed support clusters serving multiple regional nodes and time zones.",
    faqs: [
      { q: "GLOBAL_IMPLICATION", a: "24/7 coverage across all regional sectors with multi-language protocol support." },
      { q: "LOGISTICAL_CHALLENGES", a: "Cultural training synchronization and global latency management." },
    ],
  },
  {
    id: "resolution-team",
    title: "Resolution_Unit",
    icon: <ShieldCheck size={18} />,
    definition: "Specialized internal cluster for high-sensitivity escalations and conflict nullification.",
    faqs: [
      { q: "ESCALATION_METRICS", a: "Issues requiring cross-departmental overrides (Legal/Engineering) or VIP priority." },
      { q: "OBJECTIVE", a: "Finality. Expertise in de-escalating critical system failures." },
    ],
  },
];

const Section = ({ section }) => (
  <section id={section.id} className="mb-20 scroll-mt-40 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-pink-50 rounded-2xl text-pink-600">
        {section.icon}
      </div>
      <div>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-gray-900">
          {section.title}
        </h2>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500">Node_ID: {section.id.toUpperCase()}</p>
      </div>
    </div>
    
    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed mb-8 max-w-2xl">
      {section.definition}
    </p>

    <div className="grid gap-3">
      {section.faqs.map((faq, idx) => (
        <details
          key={idx}
          className="group border border-gray-100 rounded-[1.5rem] bg-white transition-all hover:border-pink-200 hover:shadow-lg hover:shadow-pink-100/20"
        >
          <summary className="list-none p-6 cursor-pointer flex justify-between items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900">
              {faq.q}
            </span>
            <ArrowRight size={14} className="text-gray-300 group-open:rotate-90 transition-transform" />
          </summary>
          <div className="px-6 pb-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed border-t border-gray-50 pt-4">
            {faq.a}
          </div>
        </details>
      ))}
    </div>
  </section>
);

export default function InternalTeamNames() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <main className="pt-40 pb-20 px-4 md:px-10">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-pink-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                  Sector_00 // Internal_Logic
                </span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-gray-900 tracking-tighter leading-[0.8] uppercase">
                Team <br />
                <span className="text-pink-600 italic font-serif lowercase tracking-normal">
                  Naming
                </span>
              </h1>
            </div>
            <div className="bg-gray-900 text-white p-6 rounded-[2rem] hidden lg:block max-w-xs">
              <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">System_Note</p>
              <p className="text-[10px] font-bold leading-relaxed uppercase">
                Titles define the operational priority and client-facing protocol for all LuxeArchive units.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <aside className="lg:col-span-3 sticky top-32 h-fit space-y-4">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Logical_Units</p>
              <div className="flex flex-col gap-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest transition-all rounded-2xl ${
                      activeSection === section.id
                        ? "bg-gray-900 text-white shadow-xl translate-x-2"
                        : "text-gray-400 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </aside>

            <div className="lg:col-span-9">
              {sections.map((s) => (
                <Section key={s.id} section={s} />
              ))}

              <footer className="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-gray-300">
                <span>© {new Date().getFullYear()} LuxeArchive_Protocols</span>
                <span>Security_Level_04</span>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}