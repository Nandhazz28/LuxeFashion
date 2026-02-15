import React, { useState, useEffect, useRef } from "react";
import NavBar from "../components/Navbar";
import { Target, Settings, Users, Handshake, Mail, ArrowUpRight, Terminal } from "lucide-react";

const sections = [
  {
    id: "client-success",
    title: "Client_Success",
    icon: <Target size={18} />,
    definition: "Proactive measures ensuring consumer asset optimization and long-term retention metrics.",
    faqs: [
      { q: "OPERATIONAL_ROLE", a: "Guiding users toward peak product adoption and quantifiable objective achievement." },
      { q: "DEPLOYMENT_ZONE", a: "Primarily SaaS and subscription-based nodes where ongoing engagement is the critical KPI." },
      { q: "CORE_STRATEGY", a: "Proactive outreach protocols, onboarding synchronization, and outcome measurement." },
    ],
  },
  {
    id: "tech-support",
    title: "Technical_Assistance",
    icon: <Settings size={18} />,
    definition: "Diagnostic-heavy resolution for structural system failures and software anomalies.",
    faqs: [
      { q: "LOGISTICAL_SCOPE", a: "Error reconciliation, structural bug fixes, hardware diagnostics, and tier-escalation." },
      { q: "SECTOR_FOUNDATION", a: "IT services, hardware distribution nodes, and software engineering clusters." },
      { q: "PRIMARY_KPI", a: "Resolution velocity and technical accuracy in problem-solving." },
    ],
  },
  {
    id: "user-assistance",
    title: "User_Assistance",
    icon: <Users size={18} />,
    definition: "End-user focused guidance integrated directly into the digital interface experience.",
    faqs: [
      { q: "ASSISTANCE_TYPE", a: "Contextual in-app documentation, semantic tooltips, and real-time guidance manifests." },
      { q: "PLATFORM_USE", a: "Digital ecosystems, consumer-facing applications, and SaaS interfaces." },
      { q: "OBJECTIVE", a: "User empowerment via clarity of interface and cognitive load reduction." },
    ],
  },
  {
    id: "client-relations",
    title: "Client_Relations",
    icon: <Handshake size={18} />,
    definition: "Long-term partnership management prioritizing trust over transactional interactions.",
    faqs: [
      { q: "RELATIONSHIP_LOGIC", a: "Strategic collaboration focused on building high-value, multi-cycle loyalty." },
      { q: "BUSINESS_VERTICAL", a: "B2B organizations, high-end agencies, and professional service sectors." },
      { q: "CORE_VALUE", a: "Strategic alignment and long-term asset security through partnership." },
    ],
  },
  {
    id: "contact-us",
    title: "Contact_Node",
    icon: <Mail size={18} />,
    definition: "The primary communication link for direct external-to-internal data transfer.",
    faqs: [
      { q: "NODE_PURPOSE", a: "Providing a verified channel for support requests or sales inquiries." },
      { q: "UNIVERSAL_USE", a: "Omnichannel application across all digital archive sectors." },
      { q: "ACCESSIBILITY", a: "Minimizing communication friction through simplified UI touchpoints." },
    ],
  },
];

const Section = ({ section }) => (
  <section id={section.id} className="mb-32 scroll-mt-48">
    <div className="flex items-start gap-6 mb-10 group">
      <div className="p-4 bg-white border border-gray-100 rounded-3xl text-pink-600 shadow-xl shadow-pink-100/20 group-hover:bg-pink-600 group-hover:text-white transition-all duration-500">
        {section.icon}
      </div>
      <div className="flex-1">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-gray-900 leading-none mb-3">
          {section.title}
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-pink-500/50 to-transparent mb-4" />
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed max-w-2xl">
          {section.definition}
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {section.faqs.map((faq, idx) => (
        <div
          key={idx}
          className="p-8 bg-gray-50/50 border border-gray-100 rounded-[2.5rem] hover:bg-white hover:border-pink-100 hover:shadow-2xl hover:shadow-pink-100/40 transition-all duration-700"
        >
          <span className="text-[9px] font-black text-pink-500 uppercase tracking-[0.3em] mb-4 block">
            {faq.q}
          </span>
          <p className="text-[11px] font-bold text-gray-700 uppercase tracking-tighter leading-relaxed">
            {faq.a}
          </p>
        </div>
      ))}
    </div>
  </section>
);

const ModernSpecializedAlternatives = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -70% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.current.observe(el);
    });

    return () => observer.current.disconnect();
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <main className="pt-44 pb-32 px-4 md:px-10">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-28 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Terminal size={14} className="text-pink-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                  Sector_02 // Specialized_Logic
                </span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-gray-900 tracking-tighter leading-[0.8] uppercase">
                Modern <br />
                <span className="text-pink-600 italic font-serif lowercase tracking-normal">
                  Alternatives
                </span>
              </h1>
            </div>
            <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-pink-600 transition-colors flex items-center gap-3">
               Request_Custom_Protocol <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            <aside className="lg:col-span-3 sticky top-40 h-fit">
              <div className="space-y-2">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-300 ml-4 mb-4">Manifest_index</p>
                <nav className="flex flex-col gap-2">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`text-left px-8 py-5 text-[10px] font-black uppercase tracking-widest transition-all rounded-[2rem] border ${
                        activeSection === s.id
                          ? "bg-gray-900 text-white border-gray-900 shadow-2xl translate-x-4"
                          : "text-gray-400 border-transparent hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {s.title.replace("_", " ")}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-9">
              {sections.map((s) => (
                <Section key={s.id} section={s} />
              ))}
              
              <footer className="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center">
                 <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                   LuxeArchive_2026 // Technical_Documentation
                 </p>
                 <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-ping" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-900">System_Status: Live</span>
                 </div>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModernSpecializedAlternatives;