// Import des hooks React pour gérer l'état local et les effets de cycle de vie
import React, { useEffect, useState } from 'react';
// Icône de lien externe affichée sur chaque carte d'actualité
import { ExternalLink } from 'lucide-react';

// Composant d'affichage de la veille technologique
const TechWatch = () => {
  // Types locaux pour structurer les données
  type Feed = { url: string; source: string };
  type NewsItem = { title: string; link: string; date: Date; source: string };

  // Liste normalisée d'articles issus des flux
  const [news, setNews] = useState<NewsItem[]>([]);
  // Indicateur de chargement
  const [loading, setLoading] = useState(true);
  // Message d'erreur à afficher en cas d'échec
  const [error, setError] = useState<string | null>(null);

  // Récupère les flux RSS au montage du composant
  useEffect(() => {
    // Sources RSS francophones agrégées
    const feeds: Feed[] = [
      { url: "https://www.numerama.com/feed/", source: "Numerama" },
      { url: "https://www.01net.com/feed/", source: "01net" },
      { url: "https://www.developpez.com/index/rss", source: "Developpez.com" }
    ];

    // Récupère un flux RSS et le convertit en objets article
    const fetchFeed = async (feed: Feed): Promise<NewsItem[]> => {
      type Rss2JsonItem = { title: string; link: string; pubDate: string };
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      if (!data || !data.items) throw new Error("Invalid feed");

      // Ne conserve que les 5 derniers éléments et normalise les champs
      return data.items.slice(0, 5).map((item: Rss2JsonItem) => ({
        title: item.title,
        link: item.link,
        date: new Date(item.pubDate),
        source: feed.source
      }));
    };

    // Agrège tous les flux, trie par date et sélectionne les 3 plus récents
    (async () => {
      try {
        const results = await Promise.allSettled(feeds.map(fetchFeed));

        // Liste consolidée d'articles
        const allItems: NewsItem[] = [];
        results.forEach(r => {
          if (r.status === "fulfilled") allItems.push(...r.value);
        });

        // Tri décroissant par date de publication
        allItems.sort((a, b) => b.date.getTime() - a.date.getTime());
        // Ne garde que les 3 actualités les plus récentes
        setNews(allItems.slice(0, 3));
      } catch {
        setError("Impossible de charger les actualités.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section id="veille" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10">
          Veille Technologique
        </h2>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Actualités récentes
        </h3>

        {/* Grille responsive: 3 colonnes sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Message de chargement */}
          {loading && <p className="col-span-3 text-center text-gray-500">Chargement…</p>}
          {/* Message d'erreur */}
          {error && <p className="col-span-3 text-center text-red-600">{error}</p>}

          {/* Cartes d'actualités lorsque les données sont disponibles */}
          {!loading && !error &&
            news.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-5 shadow hover:shadow-lg border border-gray-100 flex flex-col"
              >
                {/* En-tête de carte: source et icône de lien externe */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-semibold">{item.source}</span>
                  <ExternalLink className="w-4 h-4 text-blue-500" />
                </div>

                {/* Titre de l'article et date formatée en français */}
                <div className="text-gray-800 font-medium mb-2">{item.title}</div>
                <div className="text-xs text-gray-500">
                  {item.date.toLocaleDateString("fr-FR")}
                </div>
              </a>
            ))
          }
        </div>
        <div className="mt-10 text-center">
          <a
            href="#veille-archive"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Voir plus de veille technologique
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechWatch;
