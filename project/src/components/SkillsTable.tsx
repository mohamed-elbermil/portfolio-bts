import React from "react";
import Reveal from "./Reveal";
import { FileText } from "lucide-react";

const SkillsTable = () => {
  const axes = [
    "Gérer le patrimoine informatique",
    "Développer la présence en ligne de l'organisation",
    "Travailler en mode projet",
    "Organiser son développement professionnel",
  ];

  const realisationsAnnee1 = [
    {
      patrimoine: [
        "Versioning systématique du code source avec Git/GitLab (traçabilité des ressources)",
        "Gestion des accès et habilitations via Syspass (gestionnaire de mots de passe d'entreprise)",
        "Suivi des tâches et incidents clients sur Planio (outil de ticketing interne)",
        "Personnalisation d'un template email (variables dynamiques, standards RFC)",
        "Respect des normes et standards web adoptés par le prestataire",
      ],
      presence: [
        "Intégration front-end de sites marque blanche pour clients Lidl et Veepee",
        "Audit et corrections RGAA sur les sites clients",
        "Planification des campagnes email",
        "Veille sur les guidelines des stores (Play Store)",
        "Référencement de l'app « Bourse des Vols » sur Google Play",
      ],
      projet: [
        "Suivi d'avancement via Planio (organisation par tâches, délais)",
        "Merge requests GitLab par branche fonctionnelle",
        "Suivi du respect du cadre juridique",
      ],
      devPro: [
        "Veille réglementaire sur le RGAA",
        "Apprentissage du design system Figma en contexte professionnel",
      ],
    },
  ];

  const realisationsAnnee2 = [
    {
      patrimoine: [
        "Déploiement du site artisan sur hébergement professionnel",
        "Formation du client à la prise en main du back-office WordPress",
      ],
      presence: [
        "Création du site artisan plombier (WordPress, responsive)",
        "Référencement local : Google My Business, SEO local",
        "Pages services et zones d'intervention adaptées au contexte local",
        "Analyse des objectifs de prise de contact en ligne",
      ],
      projet: [
        "Recueil du besoin client, maquette Figma, intégration, déploiement",
        "Planification des étapes et respect des délais convenus",
      ],
      devPro: [
        "Veille sur les outils de référencement local",
        "Montée en compétences sur Next.js (projet Moovy)",
      ],
    },
  ];

  const competences = [
    "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    "Mettre à disposition des utilisateurs un service informatique",
    "Recenser et identifier les ressources numériques",
    "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
    "Mettre en place et vérifier les niveaux d'habilitation associés à un service",
    "Vérifier les conditions de la continuité d'un service informatique",
    "Gérer des sauvegardes",
    "Vérifier le respect des règles d'utilisation des ressources numériques",
    "Collecter, suivre et orienter des demandes",
    "Traiter des demandes concernant les services réseau et système, applicatifs",
    "Traiter des demandes concernant les applications",
    "Participer à la valorisation de l'image de l'organisation sur les médias numériques (cadre juridique, enjeux économiques)",
    "Référencer les services en ligne de l'organisation et mesurer leur visibilité",
    "Participer à l'évolution d'un site Web exploitant les données de l'organisation",
    "Analyser les objectifs et les modalités d'organisation d'un projet",
    "Planifier les activités",
    "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
    "Réaliser les tests d'intégration et d'acceptation d'un service",
    "Déployer un service",
    "Accompagner les utilisateurs dans la mise en place d'un service",
    "Mettre en place son environnement d'apprentissage personnel",
    "Mettre en œuvre des outils et stratégies de veille informationnelle",
    "Gérer son identité professionnelle",
    "Développer son projet professionnel",
  ];

  const realisationsFormation = [
    {
      titre: "Développement de site web en marque blanche (Results, Megatunnel, SAV)",
      items: [
        "Vérifier le respect des règles d'utilisation des ressources numériques",
        "Traiter les demandes concernant les applications",
        "Analyse des objectifs et planification des livrables",
        "Réalisation des tests d'intégration et d'acceptation",
        "Déploiement de l'application en local",
        "Mise en place de l'environnement de développement (Git, Visual Studio Code)",
        "Veille technologique sur des outils améliorant la productivité",
        "Création du design system et intégration d'images promotionnelles sur Google Play",
        "Référencement des services en ligne, mesure de la visibilité sur Google Play",
        "Application des normes d'accessibilité numérique (RGAA), tests d'acceptation, déploiement des correctifs",
      ],
    },
    {
      titre: "Présence en ligne de bout en bout pour un artisan plombier",
      items: [
        "Recueil du besoin client : analyse des objectifs (augmenter les prises de contact en ligne)",
        "Maquette sur Figma, validation avec le client avant intégration",
        "Création du site WordPress responsive (pages services, zones d'intervention)",
        "Référencement local : Google My Business, SEO local (mots-clés géolocalisés)",
        "Déploiement sur hébergement professionnel et vérification de l'accessibilité publique",
        "Formation du client à l'interface d'administration WordPress et documentation des procédures de base",
        "Accompagnement post-livraison : explication de la mise à jour du contenu",
      ],
    },
  ];

  return (
    <section id="tableau-competences" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-100 mb-4 tracking-tight -tracking-[0.02em]">
            Tableau des compétences
          </h2>
          <p className="text-center text-gray-400 mb-2">
            BTS SIO — Option SLAM — Tableau de synthèse des réalisations professionnelles
          </p>
          <p className="text-center text-sm text-gray-500 mb-10">
            EL BERMIL Mohamed · Nexa Digital School ·{" "}
            <a
              href="https://portfolio-bts-mohamed-e.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              portfolio-bts-mohamed-e.vercel.app
            </a>
          </p>

          {/* Lien PDF si le fichier est présent dans public */}
          <div className="flex justify-center mb-10">
            <a
              href="/e4-tableau-synthese.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 text-gray-200 font-medium transition-all"
            >
              <FileText className="w-5 h-5" />
              Ouvrir le tableau complet (PDF)
            </a>
          </div>

          {/* Axes du référentiel */}
          <h3 className="text-xl font-bold text-gray-100 mb-4 mt-12">
            Axes du référentiel
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            {axes.map((axe, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <span className="text-blue-500 mt-0.5">▸</span>
                <span>{axe}</span>
              </li>
            ))}
          </ul>

          {/* Réalisations en milieu professionnel */}
          <h3 className="text-xl font-bold text-gray-100 mb-4">
            Réalisations en milieu professionnel
          </h3>
          <div className="space-y-6 mb-10">
            <div>
              <h4 className="text-gray-200 font-semibold mb-2">Première année</h4>
              <div className="rounded-xl border border-white/10 bg-white/3 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  {(["patrimoine", "presence", "projet", "devPro"] as const).map(
                    (key, i) => (
                      <div key={key} className="p-4">
                        <div className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wide">
                          {axes[i]}
                        </div>
                        <ul className="space-y-1 text-sm text-gray-300">
                          {realisationsAnnee1[0][key].map((item, j) => (
                            <li key={j} className="flex gap-1">
                              <span className="text-blue-500">▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-gray-200 font-semibold mb-2">Seconde année</h4>
              <div className="rounded-xl border border-white/10 bg-white/3 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  {(["patrimoine", "presence", "projet", "devPro"] as const).map(
                    (key, i) => (
                      <div key={key} className="p-4">
                        <div className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wide">
                          {axes[i]}
                        </div>
                        <ul className="space-y-1 text-sm text-gray-300">
                          {realisationsAnnee2[0][key].map((item, j) => (
                            <li key={j} className="flex gap-1">
                              <span className="text-blue-500">▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Compétences mises en œuvre */}
          <h3 className="text-xl font-bold text-gray-100 mb-4">
            Compétences mises en œuvre
          </h3>
          <div className="rounded-xl border border-white/10 bg-white/3 p-4 md:p-6 mb-10">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
              {competences.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-500 shrink-0">▸</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Réalisations en cours de formation */}
          <h3 className="text-xl font-bold text-gray-100 mb-4">
            Réalisations en cours de formation
          </h3>
          <div className="space-y-6">
            {realisationsFormation.map((bloc, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/3 p-4 md:p-6"
              >
                <h4 className="text-gray-100 font-semibold mb-3">
                  {bloc.titre}
                </h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  {bloc.items.map((item, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-blue-500 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SkillsTable;
