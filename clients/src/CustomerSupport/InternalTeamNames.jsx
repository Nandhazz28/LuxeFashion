import React, { useState, useEffect, useRef } from "react";
import NavBar from "../components/Navbar";
import {
  Terminal,
  ShieldCheck,
  Globe,
  Cpu,
  Zap,
  Layers,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    id: "support-team",
    title: "Support_Staff",
    icon: <Zap size={20} />,
    node: "ST_01",
    definition:
      "Primary frontline assistance unit responsible for initial triage and rapid incident resolution.",
    faqs: [
      {
        q: "DEPLOYMENT",
        a: "Agile support environments with high-velocity response protocols.",
      },
      {
        q: "EMPHASIS",
        a: "Direct human-to-node response and ticket lifecycle management.",
      },
      {
        q: "ROLES",
        a: "Support Specialist // Tier 1 Help Desk // Incident Logger.",
      },
    ],
  },
  {
    id: "client-solutions",
    title: "Client_Solutions",
    icon: <Cpu size={20} />,
    node: "CS_02",
    definition:
      "Strategic solution architects focused on enterprise-level integrations and high-value accounts.",
    faqs: [
      {
        q: "FOCUS",
        a: "Complex systems integration and long-term asset stabilization.",
      },
      {
        q: "ENVIRONMENT",
        a: "B2B SaaS sectors and dedicated client infrastructure.",
      },
      { q: "ROLES", a: "Solutions Consultant // Technical Account Lead." },
    ],
  },
  {
    id: "service-operations",
    title: "Service_Operations",
    icon: <Layers size={20} />,
    node: "SO_03",
    definition:
      "The operational backbone managing internal workflow efficiency and KPI tracking.",
    faqs: [
      {
        q: "SCOPE",
        a: "Global workflow orchestration and performance dashboarding.",
      },
      {
        q: "TYPE",
        a: "Internal system optimization and departmental synergy.",
      },
      {
        q: "METRICS",
        a: "Operational Velocity // Resource Allocation Ratios.",
      },
    ],
  },
  {
    id: "global-services",
    title: "Global_Services",
    icon: <Globe size={20} />,
    node: "GS_04",
    definition:
      "Distributed support network ensuring 24/7 coverage across all regional clusters.",
    faqs: [
      {
        q: "COVERAGE",
        a: "Multi-timezone regional nodes with 24/7 uptime protocols.",
      },
      {
        q: "CHALLENGE",
        a: "Regional localization and cross-border regulatory compliance.",
      },
      { q: "STRATEGY", a: "Follow-the-sun operational methodology." },
    ],
  },
  {
    id: "resolution-team",
    title: "Resolution_Unit",
    icon: <ShieldCheck size={20} />,
    node: "RU_05",
    definition:
      "Specialized escalation specialists for high-sensitivity cases and critical system failures.",
    faqs: [
      {
        q: "ESCALATION",
        a: "High-priority critical cases requiring executive-level overrides.",
      },
      {
        q: "OBJECTIVE",
        a: "Finality. Absolute resolution of multi-layered system conflicts.",
      },
      { q: "AUTH_LEVEL", a: "Level 4 Clearance // Full System Access." },
    ],
  },
];

const Section = ({ section, isActive }) => (
  <section
    id={section.id}
    className={`mb-32 scroll-mt-48 transition-all duration-700 ${
      isActive ? "opacity-100" : "opacity-20 blur-[1px]"
    }`}
  >
    <div className="flex items-start gap-6 mb-10 group">
      <div
        className={`p-4 border rounded-3xl transition-all duration-500 shadow-xl ${
          isActive
            ? "bg-gray-900 text-white border-gray-900 shadow-gray-200"
            : "bg-white border-gray-100 text-pink-600 shadow-pink-100/20"
        }`}
      >
        {section.icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-gray-900">
            {section.title.replace("_", " ")}
          </h2>
          <span className="text-[10px] font-black text-pink-500 uppercase tracking-[0.4em]">
            Node // {section.node}
          </span>
        </div>
        <div
          className={`h-px w-full bg-gradient-to-r transition-all duration-1000 ${
            isActive
              ? "from-pink-500 to-transparent"
              : "from-gray-200 to-transparent"
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
          <div className="flex justify-between items-center mb-4">
            <span className="text-[9px] font-black text-pink-500 uppercase tracking-[0.3em]">
              {faq.q}
            </span>
            <ArrowRight
              size={12}
              className="text-pink-200 opacity-0 group-hover/card:opacity-100 -translate-x-2 group-hover/card:translate-x-0 transition-all"
            />
          </div>
          <p className="text-[11px] font-bold text-gray-700 uppercase tracking-tighter leading-relaxed">
            {faq.a}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default function InternalTeamNames() {
  const [active, setActive] = useState(sections[0].id);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" },
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
                Sector_00 // Internal_Logic
              </span>
            </div>

            <h1 className="text-8xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
              Team <br />
              <span className="text-pink-600 italic font-serif lowercase tracking-normal">
                Naming
              </span>
            </h1>
          </div>

          <div className="max-w-xs border-l-[6px] border-pink-600 pl-8 py-2">
            <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-2">
              Auth_Required
            </p>
            <p className="text-xs font-bold leading-relaxed text-gray-900 uppercase italic">
              Proprietary internal designations for cross-departmental
              coordination and system clearance levels.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-20">
          <aside className="col-span-12 lg:col-span-3 sticky top-40 h-fit space-y-6">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-300 ml-4">
              Structural_Units
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
              <div className="flex gap-12">
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    Protocol
                  </p>
                  <p className="text-[10px] font-black text-gray-900 uppercase tracking-tighter underline decoration-pink-500 underline-offset-4">
                    Internal_Manifest
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    Asset_ID
                  </p>
                  <p className="text-[10px] font-black text-gray-900 uppercase tracking-tighter underline decoration-pink-500 underline-offset-4">
                    LX_TEAM_2026
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
                © 2026 Luxefashion // Operation_Nodes
              </span>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
