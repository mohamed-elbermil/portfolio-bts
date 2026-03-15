import React from 'react';

type Competence = {
  code: string;
  label: string;
};

type ProjectRow = {
  name: string;
  links: { github?: string; site?: string };
  covered: string[];
};

const competencies: Competence[] = [
  { code: 'C2.1', label: 'Développer une interface utilisateur' },
  { code: 'C2.2', label: 'Développer des composants logiciels' },
  { code: 'C2.3', label: 'Mettre en place une base de données' },
  { code: 'C2.4', label: 'Consommer des APIs / services' },
  { code: 'C2.5', label: 'Tests / validation technique' },
  { code: 'C3.1', label: 'Intégration continue / déploiement' }
];

const projects: ProjectRow[] = [
  {
    name: 'Fitness Area',
    links: { github: 'https://github.com/mohamed-elbermil/fitness-area', site: 'https://fitness-area-mohamed-e.vercel.app/' },
    covered: ['C2.1', 'C2.2', 'C3.1']
  },
  {
    name: 'Moovy',
    links: { github: 'https://github.com/mohamed-elbermil/moovy' },
    covered: ['C2.1', 'C2.4', 'C2.5']
  },
  {
    name: 'Vinted Clone',
    links: { github: 'https://github.com/mohamed-elbermil/vinted' },
    covered: ['C2.1', 'C2.2', 'C2.5']
  },
  {
    name: 'GSB - Winform',
    links: { github: 'https://github.com/mohamed-elbermil/GSB2_project' },
    covered: ['C2.2', 'C2.3', 'C2.4', 'C2.5']
  }
];

const SynthesisTable = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight -tracking-[0.02em]">Tableau de Synthèse</h2>
          <p className="mt-4 text-gray-400">Croisement des projets et des compétences du référentiel BTS SIO (SLAM).</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/3">
          <div className="hidden md:grid grid-cols-[2fr_repeat(6,_1fr)] bg-white/5 text-gray-100 font-semibold">
            <div className="px-4 py-3 border-r border-white/10">Projet</div>
            {competencies.map(c => (
              <div key={c.code} className="px-4 py-3 border-r border-white/10">{c.code}</div>
            ))}
          </div>
          <div className="divide-y divide-white/10">
            {projects.map(row => (
              <div key={row.name} className="grid grid-cols-1 md:grid-cols-[2fr_repeat(6,_1fr)]">
                <div className="px-4 py-4 text-gray-200 border-r border-white/10">
                  <div className="font-semibold">{row.name}</div>
                  <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-300">
                    {row.links.github && <a href={row.links.github} target="_blank" className="inline-block px-2 py-1 rounded-full bg-white/5 border border-white/10">GitHub</a>}
                    {row.links.site && <a href={row.links.site} target="_blank" className="inline-block px-2 py-1 rounded-full bg-white/5 border border-white/10">Site</a>}
                  </div>
                </div>
                {competencies.map(c => (
                  <div key={c.code} className="px-4 py-4 text-center text-gray-100 border-r border-white/10">
                    {row.covered.includes(c.code) ? '✔︎' : '—'}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {competencies.map(c => (
            <div key={c.code} className="rounded-2xl bg-white/3 border border-white/10 p-4">
              <div className="text-sm text-gray-300">{c.code}</div>
              <div className="text-gray-100 font-semibold">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SynthesisTable;
