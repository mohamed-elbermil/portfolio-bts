import React from 'react';
import { ExternalLink } from 'lucide-react';

type ArchiveItem = {
  title: string;
  date: string;
  source: string;
  summary: string;
  link: string;
};

const TechWatchArchive = () => {
  const items: ArchiveItem[] = [
    {
      title: 'Sortie de React 19 RC',
      date: '2024-10-01',
      source: 'React',
      summary: "Améliorations des Server Components, Actions et du rendu concurrent.",
      link: 'https://react.dev/blog/2024/10/01/react-19'
    },
    {
      title: 'Next.js 14 et TurboPack',
      date: '2024-04-10',
      source: 'Vercel',
      summary: "Optimisations de build, améliorations des routes et du caching.",
      link: 'https://nextjs.org/blog/next-14'
    },
    {
      title: 'Tailwind CSS v3.4',
      date: '2024-02-15',
      source: 'Tailwind Labs',
      summary: "Nouvelles utilitaires et performances accrues pour le JIT.",
      link: 'https://tailwindcss.com/blog'
    },
    {
      title: 'PostgreSQL 16',
      date: '2024-01-05',
      source: 'PostgreSQL',
      summary: "Améliorations de performances et fonctionnalités SQL avancées.",
      link: 'https://www.postgresql.org/docs/16/release.html'
    },
    {
      title: 'GitHub Copilot Enterprise GA',
      date: '2024-03-01',
      source: 'GitHub',
      summary: "Intégration améliorée pour les organisations et la documentation.",
      link: 'https://github.blog/2024-02-27-github-copilot-enterprise-is-now-generally-available/'
    },
    {
      title: 'Vite 5',
      date: '2024-01-20',
      source: 'Vite',
      summary: "Mises à jour majeures du bundler et compatibilité accrue.",
      link: 'https://vitejs.dev/blog'
    }
  ];

  return (
    <section id="veille-archive" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Archive Veille Technologique</h2>
            <p className="text-gray-600">Actualités marquantes depuis l'année dernière</p>
          </div>
          <a
            href="#veille"
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200"
          >
            Retour
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg border border-gray-100 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-gray-800 font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString('fr-FR')} • {item.source}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-500" />
              </div>
              <div className="text-sm text-gray-600">{item.summary}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechWatchArchive;