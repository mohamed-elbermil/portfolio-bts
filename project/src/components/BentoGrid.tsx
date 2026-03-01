import React, { useEffect, useRef } from 'react';
import { Code, Database, Terminal, Layers, Settings, Cpu } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const cards = [
    {
      title: 'PHP',
      icon: <Code className="w-6 h-6" />,
      accent: 'from-blue-400/20 to-blue-400/0',
      border: 'hover:border-blue-400/50',
      content: (
        <div className="space-y-3">
          <div className="font-mono text-sm text-blue-300">Syntaxe, MVC, REST</div>
          <div className="flex gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300">Laravel</span>
            <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300">Routing</span>
            <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300">Auth</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Java',
      icon: <Cpu className="w-6 h-6" />,
      accent: 'from-purple-400/20 to-purple-400/0',
      border: 'hover:border-purple-400/50',
      content: (
        <div className="space-y-3">
          <div className="font-mono text-sm text-purple-300">POO, Collections, I/O</div>
          <div className="flex gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300">Spring</span>
            <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300">JDBC</span>
            <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300">Tests</span>
          </div>
        </div>
      ),
    },
    {
      title: 'SQL',
      icon: <Database className="w-6 h-6" />,
      accent: 'from-emerald-400/20 to-emerald-400/0',
      border: 'hover:border-emerald-400/50',
      content: (
        <div className="space-y-3">
          <div className="font-mono text-sm text-emerald-300">DDL, DML, Index</div>
          <div className="flex gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-300">PostgreSQL</span>
            <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-300">Optimisation</span>
            <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-300">Transactions</span>
          </div>
        </div>
      ),
    },
    {
      title: 'API & Tests',
      icon: <Settings className="w-6 h-6" />,
      accent: 'from-cyan-400/20 to-cyan-400/0',
      border: 'hover:border-cyan-400/50',
      content: (
        <div className="space-y-3">
          <div className="font-mono text-sm text-cyan-300">REST, Auth, CI</div>
          <div className="flex gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300">Swagger</span>
            <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300">Jest</span>
            <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300">Postman</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Frontend',
      icon: <Layers className="w-6 h-6" />,
      accent: 'from-orange-400/20 to-orange-400/0',
      border: 'hover:border-orange-400/50',
      content: (
        <div className="space-y-3">
          <div className="font-mono text-sm text-orange-300">React, Tailwind</div>
          <div className="flex gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-orange-300">UX</span>
            <span className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-orange-300">UI</span>
            <span className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-orange-300">Animations</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Shell & Tools',
      icon: <Terminal className="w-6 h-6" />,
      accent: 'from-pink-400/20 to-pink-400/0',
      border: 'hover:border-pink-400/50',
      content: (
        <div className="space-y-3">
          <div className="font-mono text-sm text-pink-300">Git, CLI</div>
          <div className="flex gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-pink-500/10 text-pink-300">GitHub</span>
            <span className="px-2 py-1 text-xs rounded-full bg-pink-500/10 text-pink-300">CI</span>
            <span className="px-2 py-1 text-xs rounded-full bg-pink-500/10 text-pink-300">Deploy</span>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    try {
      ScrollTrigger.matchMedia({
        "(min-width: 769px)": () => {
          const root = gridRef.current as Element | null;
          if (!root) return;
          const els = root.querySelectorAll('.bento-card');
          if (!els || els.length === 0) return;
          gsap.set(els, { opacity: 0, y: 30 });
          gsap.to(els, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: root,
              start: "top 80%",
            },
          });
        },
      });
    } catch { void 0; }
    return () => {
      try {
        ScrollTrigger.getAll().forEach(t => t.kill());
      } catch { void 0; }
    };
  }, []);

  return (
    <section id="competences" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight -tracking-[0.02em]">Compétences en Bento Grid</h2>
          <p className="mt-4 text-gray-400 max-w-2xl">Présentation minimaliste et immersive, avec micro-interactions premium.</p>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`bento-card group relative overflow-hidden rounded-2xl p-6 bg-white/3 backdrop-blur-xl border border-white/10 ${card.border} transition-all duration-300`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.accent}`} />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-gray-200">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold -tracking-[0.01em]">{card.title}</h3>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-gray-400">hover</div>
              </div>
              <div className="relative z-10 mt-4">{card.content}</div>
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-2 group-hover:ring-white/30 transition-all duration-300"></div>
              <div className="absolute inset-0 scale-100 group-hover:scale-[1.02] transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
 
 
 
 
 
 
 
 
