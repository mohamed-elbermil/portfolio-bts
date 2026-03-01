import React from 'react';
import moovyImg from '../assets/images/moovy.png';
import fitnessAreaImg from '../assets/images/fitness-area.png';
import vintedImg from '../assets/images/vinted.png';
import Reveal from './Reveal';

type CaseStudy = {
  title: string;
  image: string;
  problem: string;
  solution: string;
  link?: string;
};

const items: CaseStudy[] = [
  {
    title: 'Moovy',
    image: moovyImg,
    problem: "Découvrir et organiser un catalogue de films avec une navigation rapide.",
    solution: "Intégration TMDB, mise en cache client, UI réactive avec React + Tailwind.",
    link: "https://github.com/mohamed-elbermil/moovy"
  },
  {
    title: 'Fitness Area',
    image: fitnessAreaImg,
    problem: "Présenter cours et abonnements avec une interface claire sur mobile.",
    solution: "Grille responsive, composants réutilisables, déploiement Vercel.",
    link: "https://fitness-area-mohamed-e.vercel.app/"
  },
  {
    title: 'Vinted Clone',
    image: vintedImg,
    problem: "Simuler un parcours achat/vente simple et fiable.",
    solution: "Pages structurées, logique de listing, styles minimalistes.",
    link: "https://github.com/mohamed-elbermil/vinted"
  }
];

const CaseStudies = () => {
  return (
    <section id="projets" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight -tracking-[0.02em]">Études de cas</h2>
          <p className="mt-4 text-gray-400 max-w-2xl">Chaque projet structuré en “Le Problème” et “Ma Solution Technique”.</p>
        </div>
        <div className="space-y-16">
          {items.map((item, i) => (
            <article key={i} className="space-y-8">
              <div className="relative rounded-2xl overflow-hidden bg-white/3 backdrop-blur-xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent" />
                <img src={item.image} alt={item.title} className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <h3 className="text-2xl font-semibold -tracking-[0.01em]">{item.title}</h3>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-2xl bg-white/3 backdrop-blur-xl border border-white/10">
                    <div className="text-sm font-mono text-gray-300 mb-2">Le Problème</div>
                    <p className="text-gray-200">{item.problem}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/3 backdrop-blur-xl border border-white/10">
                    <div className="text-sm font-mono text-gray-300 mb-2">Ma Solution Technique</div>
                    <p className="text-gray-200">{item.solution}</p>
                  </div>
                </div>
              </div>
              {item.link && (
                <div className="flex">
                  <a
                    href={item.link}
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 text-gray-100 hover:bg-white/10 transition-colors"
                  >
                    Voir plus
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CaseStudies;
