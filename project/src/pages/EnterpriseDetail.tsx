import React, { useEffect, useRef } from 'react';
import PGW from '../assets/images/PGW.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Users, Layers, GitBranch, GitMerge, GitPullRequest } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: 'Thomas (tuteur)', role: 'Développeur Web', initial: 'T' },
  { name: 'Julie', role: 'Designer web / Intégratrice', initial: 'J' },
  { name: 'Ludovic', role: 'Manager', initial: 'L' },
  { name: 'Mickael', role: 'Développeur Web', initial: 'M' },
  { name: 'Alexandre', role: 'Développeur Web', initial: 'A' },
  { name: 'Nabil', role: 'Lead Développeur', initial: 'N' },
  { name: 'Gauthier', role: 'Lead Développeur Junior', initial: 'G' },
  { name: 'Vanessa', role: 'Chargée de QA et développeuse web', initial: 'V' },
  { name: 'Quentin', role: 'Développeur Web', initial: 'Q' },
  { name: 'Caroline', role: 'Product Owner', initial: 'C' },
  { name: 'Océane', role: 'Développeur Web', initial: 'O' }
]

const EnterpriseDetail = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 769px)": () => {
        const root = sectionRef.current;
        if (!root) return;
        const timelineItems = root.querySelectorAll('.onboarding-item');
        const bentoCards = root.querySelectorAll('.eco-card');
        gsap.set(timelineItems, { opacity: 0, y: 20 });
        gsap.to(timelineItems, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.querySelector('#onboarding'),
            start: "top 80%",
          },
        });
        gsap.set(bentoCards, { opacity: 0, y: 24 });
        gsap.to(bentoCards, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.querySelector('#ecosystem'),
            start: "top 80%",
          },
        });
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#050505] text-gray-100">
      <a href="#presentation" className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl hover:border-white/30 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Retour au Portfolio
      </a>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
              <img src={PGW} alt="Logo entreprise" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight -tracking-[0.02em]">Immersion BTS SIO SLAM</h1>
              <p className="mt-2 text-gray-300">Mission principale: améliorer l’expérience et la qualité front dans un environnement multi-projets.</p>
            </div>
          </div>
          <div className="bg-white/3 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="text-sm text-gray-300">Contexte</div>
            <div className="text-gray-200">Intégration au sein d’une équipe produit, contribution aux interfaces, performance, accessibilité et outillage.</div>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight -tracking-[0.02em]">L’Écosystème</h2>
          <p className="text-gray-400 mb-10">Présentation du groupe, de ses produits et des pratiques de distribution digitale.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="eco-card bg-white/3 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Layers className="w-5 h-5" />
                <div className="font-semibold">Produits</div>
              </div>
              <div className="text-gray-300">Plateformes de réservation, portails clients, back-office.</div>
            </div>
            <div className="eco-card bg-white/3 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5" />
                <div className="font-semibold">Partenaires</div>
              </div>
              <div className="text-gray-300">Tour-opérateurs, distributeurs, enseignes grand public.</div>
            </div>
            <div className="eco-card bg-white/3 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Layers className="w-5 h-5" />
                <div className="font-semibold">Technologies</div>
              </div>
              <div className="text-gray-300">Front moderne, APIs, outillage DevOps.</div>
            </div>
          </div>

          <div className="mt-12 bg-white/3 border border-white/10 rounded-2xl p-6">
            <div className="font-mono text-sm text-gray-300 mb-3">Marque Blanche</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                <div className="text-gray-200">Noyau Applicatif</div>
                <div className="text-xs text-gray-400">Fonctions communes, sécurité, performance</div>
              </div>
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                <div className="text-gray-200">Thèmes & Branding</div>
                <div className="text-xs text-gray-400">Palette, composants, assets</div>
              </div>
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                <div className="text-gray-200">Déploiement</div>
                <div className="text-xs text-gray-400">Intégration par client, SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight -tracking-[0.02em]">L’Équipe</h2>
          <p className="text-gray-400 mb-10">Une culture “Human First” centrée sur la qualité et la collaboration.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div key={i} className="rounded-2xl bg-white/3 border border-white/10 p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                  <div className="text-sm">{m.initial}</div>
                </div>
                <div className="font-semibold">{m.name}</div>
                <div className="text-xs text-gray-400">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="onboarding" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight -tracking-[0.02em]">Onboarding</h2>
          <p className="text-gray-400 mb-10">Les premiers jours: mise en route, exploration, maîtrise des livrables.</p>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10"></div>
            <div className="space-y-8">
              <div className="onboarding-item relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-lg font-semibold">Setup Technique</div>
                <div className="text-gray-300">IDE, Docker, packages, accès, configuration des environnements.</div>
              </div>
              <div className="onboarding-item relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-lg font-semibold">Exploration</div>
                <div className="text-gray-300">Analyse des arborescences, conventions, pipelines, composants clés.</div>
              </div>
              <div className="onboarding-item relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <GitBranch className="w-4 h-4" />
                </div>
                <div className="text-lg font-semibold">Workflow Git</div>
                <div className="text-gray-300">Branches, MRs, merges: politique, revues et intégration continue.</div>
                <div className="mt-4 rounded-2xl bg-white/3 border border-white/10 p-4">
                  <pre className="font-mono text-sm text-gray-200">
{`git init
git checkout -b feature/ui-refresh
git add .
git commit -m "feat(ui): refresh bento and glass cards"
git push origin feature/ui-refresh
`}
                  </pre>
                  <div className="mt-2 flex gap-3 text-xs text-gray-400">
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10"><GitMerge className="w-3 h-3" /> merge</div>
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10"><GitPullRequest className="w-3 h-3" /> MR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseDetail;
