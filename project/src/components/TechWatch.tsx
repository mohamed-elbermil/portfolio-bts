// Import des hooks React pour gérer l'état local et les effets de cycle de vie
import React, { useEffect, useState } from "react";
import Reveal from "./Reveal";
// Icône de lien externe affichée sur chaque carte d'actualité
import { ExternalLink } from "lucide-react";

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
      { url: "https://www.usine-digitale.fr/rss", source: "L'Usine Digitale" },
      { url: "https://www.zdnet.fr/feeds/rss", source: "ZDNet" },
      { url: "https://dev.to/feed/latest", source: "Dev.to" },
    ];

    // Récupère un flux RSS et le convertit en objets article
    const fetchFeed = async (feed: Feed): Promise<NewsItem[]> => {
      type Rss2JsonItem = { title: string; link: string; pubDate: string };
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      if (!data || !data.items) throw new Error("Invalid feed");

      // Récupère plus d'éléments pour augmenter les chances de match
      return data.items.slice(0, 10).map((item: Rss2JsonItem) => ({
        title: item.title,
        link: item.link,
        date: new Date(item.pubDate),
        source: feed.source,
      }));
    };

    // Agrège tous les flux, trie par date et sélectionne les 3 plus récents
    (async () => {
      try {
        const results = await Promise.allSettled(feeds.map(fetchFeed));

        // Liste consolidée d'articles
        const allItems: NewsItem[] = [];
        results.forEach((r) => {
          if (r.status === "fulfilled") allItems.push(...r.value);
        });

        // Mots-clés élargis pour la veille BTS SIO
        const keywords = [
          "cybersecurity",
          "sécurité",
          "cybersécurité",
          "hack",
          "faille",
          "framework",
          "react",
          "vue",
          "angular",
          "nextjs",
          "svelte",
          "web dev",
          "frontend",
          "backend",
          "fullstack",
          "javascript",
          "typescript",
          "php",
          "devops",
          "docker",
          "kubernetes",
          "cloud",
          "aws",
          "azure",
          "cicd",
          "ia",
          "intelligence artificielle",
          "ai",
          "data",
          "api",
        ];

        const filtered = allItems.filter((i) => {
          const t = i.title.toLowerCase();
          return keywords.some((k) => t.includes(k));
        });

        // Si aucun match n'est trouvé avec les filtres, on prend les plus récents par défaut
        const finalNews = filtered.length > 0 ? filtered : allItems;

        finalNews.sort((a, b) => b.date.getTime() - a.date.getTime());
        setNews(finalNews.slice(0, 3));
      } catch {
        setError("Impossible de charger les actualités.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section id="veille" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-100 mb-10 tracking-tight -tracking-[0.02em]">
            Veille Technologique
          </h2>
          <p className="mb-6 leading-relaxed">
            Ma méthodologie de veille technologique repose sur une routine de
            <strong> trois sessions hebdomadaires</strong>, articulée autour de
            plusieurs canaux stratégiques :
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">•</span>
              <div>
                <strong>Curated Content & Tutoriels :</strong> Suivi de
                créateurs de référence
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {" "}
                  (Grafikart, Micode)
                </span>{" "}
                pour l'évolution des frameworks (React, Vue.js) et
                l'apprentissage des bonnes pratiques de développement.
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-3 text-blue-500">•</span>
              <div>
                <strong>Veille Informationnelle & IA :</strong> Abonnement à des
                newsletters spécialisées et consultation de sources comme
                <em className="font-medium"> Hacker News</em> pour anticiper les
                ruptures technologiques dans les domaines de l'IA et du
                Hardware.
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-3 text-blue-500">•</span>
              <div>
                <strong>Sécurité Applicative (Flux RSS) :</strong> Surveillance
                active des vulnérabilités via des sources officielles comme le
                <strong className="text-red-500 italic"> CERT-FR</strong> pour
                garantir la conformité de mes projets.
              </div>
            </li>
          </ul>
          <h3 className="text-2xl font-bold text-gray-100 mb-4">
            Actualités récentes
          </h3>
          {/* Grille responsive: 3 colonnes sur desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Message de chargement */}
            {loading && (
              <p className="col-span-3 text-center text-gray-400">
                Chargement…
              </p>
            )}
            {/* Message d'erreur */}
            {error && (
              <p className="col-span-3 text-center text-red-500">{error}</p>
            )}

            {/* Cartes d'actualités lorsque les données sont disponibles */}
            {!loading &&
              !error &&
              news.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/3 rounded-2xl p-5 backdrop-blur-xl border border-white/10 flex flex-col"
                >
                  {/* En-tête de carte: source et icône de lien externe */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-200 font-semibold">
                      {item.source}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-300" />
                  </div>

                  {/* Titre de l'article et date formatée en français */}
                  <div className="text-gray-100 font-medium mb-2">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-400">
                    {item.date.toLocaleDateString("fr-FR")}
                  </div>
                </a>
              ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="#veille-archive"
              className="inline-flex items-center px-6 py-3 bg-white/5 text-white font-semibold rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-200"
            >
              Voir plus de veille technologique
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TechWatch;
