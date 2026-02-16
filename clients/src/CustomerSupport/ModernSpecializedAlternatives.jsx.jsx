import React, { useState, useEffect, useRef } from "react";
import NavBar from "../components/Navbar";
import {
  Target,
  Settings,
  Users,
  Handshake,
  Mail,
  ArrowUpRight,
  Terminal,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    id: "client-success",
    title: "Client_Success",
    icon: <Target size={20} />,
    node: "SN_02A",
    definition:
      "Proactive measures ensuring consumer asset optimization and long-term retention cycles.",
    faqs: [
      {
        q: "OPERATIONAL_ROLE",
        a: "Guiding users toward product adoption and strategic outcomes.",
      },
      {
        q: "DEPLOYMENT_ZONE",
        a: "SaaS, Enterprise, and recurring subscription ecosystems.",
      },
      {
        q: "CORE_STRATEGY",
        a: "High-touch onboarding and proactive health-score engagement.",
      },
    ],
  },
  {
    id: "tech-support",
    title: "Technical_Assistance",
    icon: <Settings size={20} />,
    node: "SN_02B",
    definition:
      "Diagnostic resolution for technical failures, system bugs, and infrastructure glitches.",
    faqs: [
      {
        q: "LOGISTICAL_SCOPE",
        a: "In-depth bug fixes, hardware diagnostics, and patch deployment.",
      },
      {
        q: "SECTOR_FOUNDATION",
        a: "Engineering-heavy IT and software development sectors.",
      },
      {
        q: "PRIMARY_KPI",
        a: "Mean Time to Resolve (MTTR) and diagnostic accuracy.",
      },
    ],
  },
  {
    id: "user-assistance",
    title: "User_Assistance",
    icon: <Users size={20} />,
    node: "SN_02C",
    definition:
      "Embedded user guidance and micro-copy assistance integrated directly into product interfaces.",
    faqs: [
      {
        q: "ASSISTANCE_TYPE",
        a: "Contextual tooltips, walkthroughs, and in-app triggers.",
      },
      {
        q: "PLATFORM_USE",
        a: "Consumer apps and complex SaaS interface platforms.",
      },
      {
        q: "OBJECTIVE",
        a: "Reducing friction during high-complexity user journeys.",
      },
    ],
  },
  {
    id: "client-relations",
    title: "Client_Relations",
    icon: <Handshake size={20} />,
    node: "SN_02D",
    definition:
      "Long-term partnership management focusing on business alignment and strategic growth.",
    faqs: [
      {
        q: "RELATIONSHIP_LOGIC",
        a: "Strategic collaboration and executive-level alignment.",
      },
      {
        q: "BUSINESS_VERTICAL",
        a: "B2B organizations with multi-year contract lifecycles.",
      },
      {
        q: "CORE_VALUE",
        a: "Establishing institutional trust and brand loyalty.",
      },
    ],
  },
  {
    id: "contact-us",
    title: "Contact_Node",
    icon: <Mail size={20} />,
    node: "SN_02E",
    definition:
      "The primary communication interface for unclassified inquiries and direct node-to-node messaging.",
    faqs: [
      {
        q: "NODE_PURPOSE",
        a: "General support inquiries and partnership outreach.",
      },
      {
        q: "UNIVERSAL_USE",
        a: "Applicable across all digital and physical service sectors.",
      },
      {
        q: "ACCESSIBILITY",
        a: "Low-friction communication pathways via secure mail nodes.",
      },
    ],
  },
];

const Section = ({ section, isActive }) => (
  <section
    id={section.id}
    className={`mb-32 scroll-mt-48 transition-all duration-700 ${
      isActive
        ? "opacity-100 translate-x-0"
        : "opacity-25 blur-[1px] -translate-x-2"
    }`}
  >
    <div className="flex items-start gap-6 mb-10 group">
      <div
        className={`p-4 border rounded-3xl transition-all duration-500 shadow-xl ${
          isActive
            ? "bg-pink-600 text-white border-pink-600 shadow-pink-100/40"
            : "bg-white border-gray-100 text-pink-600 shadow-pink-100/10"
        }`}
      >
        {section.icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-end mb-2">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-gray-900 leading-none">
            {section.title.replace("_", " ")}
          </h2>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">
            Sector // {section.node}
          </span>
        </div>
        <div
          className={`h-px w-full bg-gradient-to-r transition-all duration-1000 ${
            isActive
              ? "from-pink-500 to-transparent"
              : "from-gray-100 to-transparent"
          } mb-4`}
        />
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest max-w-2xl leading-relaxed">
          {section.definition}
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {section.faqs.map((faq, i) => (
        <div
          key={i}
          className="p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:border-pink-200 hover:shadow-2xl hover:shadow-pink-100/30 transition-all group/card"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-[9px] font-black text-pink-500 uppercase tracking-[0.3em]">
              {faq.q}
            </span>
            <ArrowRight
              size={12}
              className="text-pink-200 opacity-0 group-hover/card:opacity-100 -translate-x-2 group-hover/card:translate-x-0 transition-all"
            />
          </div>
          <p className="text-[11px] font-bold text-gray-600 uppercase tracking-tighter leading-relaxed">
            {faq.a}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default function ModernSpecializedAlternatives() {
  const [active, setActive] = useState(sections[0].id);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
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
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Terminal size={14} className="text-pink-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                Sector_02 // Specialized_Logic
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
              Modern <br />
              <span className="text-pink-600 italic font-serif lowercase tracking-normal">
                Alternatives
              </span>
            </h1>
          </div>

          <button className="group px-10 py-5 bg-gray-900 text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-pink-600 hover:shadow-2xl hover:shadow-pink-200 transition-all flex items-center gap-4">
            Request_Custom_Protocol
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>

        <div className="grid grid-cols-12 gap-20">
          <aside className="col-span-12 lg:col-span-3 sticky top-40 h-fit space-y-6">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-300 ml-4">
              Logical_Sectors
            </p>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`whitespace-nowrap block w-full text-left px-8 py-5 text-[10px] font-black uppercase tracking-widest rounded-[1.5rem] border transition-all duration-500 ${
                    active === s.id
                      ? "bg-gray-900 text-white border-gray-900 shadow-2xl lg:translate-x-4"
                      : "text-gray-400 border-transparent hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {s.title.replace("_", " ")}
                </button>
              ))}
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-9">
            {sections.map((s) => (
              <Section key={s.id} section={s} isActive={active === s.id} />
            ))}

            <footer className="mt-20 pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex gap-12 text-left">
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    Protocol
                  </p>
                  <p className="text-[10px] font-black text-gray-900 uppercase tracking-tighter underline decoration-pink-500 underline-offset-4">
                    Advanced_Triaging
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    Auth_Hash
                  </p>
                  <p className="text-[10px] font-black text-gray-900 uppercase tracking-tighter underline decoration-pink-500 underline-offset-4">
                    LX_MOD_2026
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
                © 2026 Luxefashion // Tech_Nodes
              </span>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
