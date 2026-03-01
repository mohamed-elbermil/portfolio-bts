import React, { useEffect, useRef } from 'react';
import PGW from '../assets/images/PGW.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Layers, GitBranch, GitMerge, GitPullRequest, FileCode, Kanban } from 'lucide-react';
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

const techIcons = [
  { name: 'VueJS', url: 'https://cdn.simpleicons.org/vuedotjs/41B883' },
  { name: 'SCSS', url: 'https://cdn.simpleicons.org/sass/CC6699' },
  { name: 'Chocolatey', url: 'https://cdn.simpleicons.org/chocolatey/80B5E3' },
  { name: 'NodeJS', url: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
  { name: 'XML', url: 'https://cdn.simpleicons.org/w3c/005A9C' },
];

const toolIcons = [
  { name: 'Visual Studio Code', url: 'https://cdn.simpleicons.org/visualstudiocode/007ACC' },
  { name: 'GitLab', url: 'https://cdn.simpleicons.org/gitlab/FC6D26' },
  { name: 'Discord', url: 'https://cdn.simpleicons.org/discord/5865F2' },
  { name: 'Thunderbird', url: 'https://cdn.simpleicons.org/thunderbird/0A84FF' },
  { name: 'Pidgin', url: 'https://cdn.simpleicons.org/pidgin/802372' },
  { name: 'Jitsi', url: 'https://cdn.simpleicons.org/jitsi/009FCC' },
  { name: 'Planio', url: undefined },
  { name: 'Whaller', url: undefined },
];

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
            <div className="text-sm text-gray-300">Contexte</div><br />
            <div className="text-gray-200">Le groupe PenguinWorld propose une large gamme de services pour les professionnels et les voyageurs. Cette diversité est au cœur de notre identité et de notre mission, portée par des équipes d’experts passionnés.
Pour nous, un voyage réussi est celui où chaque maillon de la chaîne humaine est présent, permettant au voyageur de gagner en liberté et en découverte.
Guidés par nos passions et nos rêves, nous avons à cœur de rapprocher les peuples et de contribuer à diffuser la paix, sur les routes, les mers et à travers le monde. N’hésitez jamais à explorer au-delà des frontières, des pays et des croyances.
</div>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight -tracking-[0.02em]">Les services</h2>
          <p className="text-gray-400 mb-10">Penguin World regroupe plusieurs sociétés :</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Resaneo', url: 'https://media.licdn.com/dms/image/v2/C4D0BAQEK5DcwYdSsFg/company-logo_200_200/company-logo_200_200/0/1630461534022/resaneo_logo?e=2147483647&v=beta&t=UpFz5Z57ZHGu8M2ZcGhkEzki6uTjCYTtp7Hhw6CMSM8' },
              { name: 'Quartier Libre', url: 'https://media.licdn.com/dms/image/v2/C4E0BAQEX99_bfi3wZA/company-logo_200_200/company-logo_200_200/0/1672758052612/quartier_libre_logo?e=2147483647&v=beta&t=HEuBAB-OOeDURoQE5dXQmGJXjhlgD39lawLS6sHgFFA' },
              { name: 'Speedmedia', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rJyvcYMEd3ujswW7IgEpDHdvlA-OtJwVmA&s' },
              { name: 'Promovols', url: 'https://fr.igraal.com/images/400x/images/p/Promovols_2.jpg' },
              { name: 'BDV (Bourse des vols)', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVjlIPIu6QUIkpXt1tTKp7DPqEg0_oTT9kw&s' },
              { name: 'BDV (Bourse des voyages)', url: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/5fcf60ff13159100018c5b49/0x0.png' },
            
            ].map((logo, i) => (
              <div key={i} className="w-36 h-36 mb-6 bg-white rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                <img src={logo.url} alt={`Logo ${logo.name}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>


          <div className="mt-12 bg-white/3 border border-white/10 rounded-2xl p-6">
            <div className="font-mono text-sm text-gray-300 mb-3">Définitions</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                <div className="text-gray-200">Vente de marques blanche</div>
                <div className="text-xs text-gray-400">Produit/service réutilisable par d’autres marques sans mention du fabricant d’origine.</div>
                
                <img src={PGW} alt="Logo entreprise" className="w-12 h-12 object-contain" />
                <img src={PGW} alt="Logo entreprise" className="w-12 h-12 object-contain" />
              </div>
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                <div className="text-gray-200">Vente de voyages</div>
                <div className="text-xs text-gray-400">Tous ces sites facilitent l’accès à des offres de voyage pour les utilisateurs, en centralisant l’information et en permettant de comparer et réserver facilement.
                </div>
                <img src={PGW} alt="Logo entreprise" className="w-12 h-12 object-contain" />
                <img src={PGW} alt="Logo entreprise" className="w-12 h-12 object-contain" />
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
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 tracking-tight -tracking-[0.02em]">Installation des outils et logiciels</h3>
          <div className="bg-white/3 border border-white/10 rounded-2xl overflow-hidden">
            <div className="hidden md:grid grid-cols-3 bg-white/5 text-gray-100 font-semibold">
              <div className="px-4 py-3 border-r border-white/10">Catégorie</div>
              <div className="px-4 py-3 border-r border-white/10">Outil</div>
              <div className="px-4 py-3">Rôle et Utilisation</div>
            </div>
            <div className="divide-y divide-white/10">
              <div className="grid md:grid-cols-3">
                <div className="px-4 py-4 text-gray-300 border-r border-white/10">Développement</div>
                <div className="px-4 py-4 text-gray-200 border-r border-white/10">Visual Studio Code (VS Code)</div>
                <div className="px-4 py-4 text-gray-300">Éditeur utilisé pour corriger des bugs et créer des éléments web/logiciels.</div>
              </div>
              <div className="grid md:grid-cols-3">
                <div className="px-4 py-4 text-gray-300 border-r border-white/10">Emailing</div>
                <div className="px-4 py-4 text-gray-200 border-r border-white/10">Beefree</div>
                <div className="px-4 py-4 text-gray-300">Création et édition de templates d’e‑mails pour campagnes et communications.</div>
              </div>
              <div className="grid md:grid-cols-3">
                <div className="px-4 py-4 text-gray-300 border-r border-white/10">Gestion des Mots de Passe</div>
                <div className="px-4 py-4 text-gray-200 border-r border-white/10">SysPass</div>
                <div className="px-4 py-4 text-gray-300">Gestion sécurisée des mots de passe et des identifiants professionnels.</div>
              </div>
              <div className="grid md:grid-cols-3">
                <div className="px-4 py-4 text-gray-300 border-r border-white/10">Gestion des Logiciels</div>
                <div className="px-4 py-4 text-gray-200 border-r border-white/10">Chocolatey</div>
                <div className="px-4 py-4 text-gray-300">Gestionnaire de paquets Windows, mise à jour et installation d’applications.</div>
              </div>
              <div className="grid md:grid-cols-3">
                <div className="px-4 py-4 text-gray-300 border-r border-white/10">Communication Sécurisée</div>
                <div className="px-4 py-4 text-gray-200 border-r border-white/10">Pidgin</div>
                <div className="px-4 py-4 text-gray-300">Messagerie pour l’échange d’informations sensibles entre collaborateurs.</div>
              </div>
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-6 mt-9 tracking-tight -tracking-[0.02em]">Familiarisation de l’arborescence et fonctionnements des projets</h3>
          <div className="bg-white/3 border border-white/10 rounded-2xl overflow-hidden">
            <div className="hidden md:grid grid-cols-3 bg-white/5 text-gray-100 font-semibold">
              <div className="px-4 py-3 border-r border-white/10">Application</div>
              <div className="px-4 py-3 border-r border-white/10">Stack / Version</div>
              <div className="px-4 py-3">Rôle</div>
            </div>
            <div className="divide-y divide-white/10">
              <div className="grid md:grid-cols-3">
                <div className="px-4 py-4 text-gray-200 border-r border-white/10">RESULT</div>
                <div className="px-4 py-4 text-gray-300 border-r border-white/10">
                  <span className="inline-block px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs">Node.js 10.24</span>
                </div>
                <div className="px-4 py-4 text-gray-300">Interface permettant de choisir un voyage.</div>
              </div>
              <div className="grid md:grid-cols-3">
                <div className="px-4 py-4 text-gray-200 border-r border-white/10">MT</div>
                <div className="px-4 py-4 text-gray-300 border-r border-white/10">
                  <span className="inline-block px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs">Node.js 18</span>
                </div>
                <div className="px-4 py-4 text-gray-300">Interface pour réserver et régler le montant d’un voyage.</div>
              </div>
              <div className="grid md:grid-cols-3">
                <div className="px-4 py-4 text-gray-200 border-r border-white/10">SAV</div>
                <div className="px-4 py-4 text-gray-300 border-r border-white/10">
                  <span className="inline-block px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs">PHP 7.2</span>
                </div>
                <div className="px-4 py-4 text-gray-300">Interface pour suivre la commande ou contacter l’assistance.</div>
              </div>
              <div className="grid md:grid-cols-3">
                <div className="px-4 py-4 text-gray-200 border-r border-white/10">Resacenter</div>
                <div className="px-4 py-4 text-gray-300 border-r border-white/10">
                  <span className="inline-block px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs">PHP 7.2</span>
                </div>
                <div className="px-4 py-4 text-gray-300">Interface pour créer des templates et des mailings pour les MB.</div>
              </div>
            </div>
          </div>

        </div>
        
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 tracking-tight -tracking-[0.02em]">Correction de bug d’affichage sur Bourse des Voyages</h3>
          <p className="text-gray-400 mb-8">Exemple concret d’intervention front: correction d’un défaut de mise en page et harmonisation des styles.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/3 border border-white/10 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-white/5">
                <span className="text-sm font-semibold text-gray-100">Avant</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">Capture</span>
              </div>
              <img
                src="https://via.placeholder.com/800x480?text=Avant+-+Bourse+des+Voyages"
                alt="Avant correction - Bourse des Voyages"
                className="w-full h-[300px] object-cover"
              />
              <div className="px-4 py-3 text-sm text-gray-300">Mise en page décalée, composants non alignés, contrastes insuffisants.</div>
            </div>
            <div className="rounded-2xl bg-white/3 border border-white/10 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-white/5">
                <span className="text-sm font-semibold text-gray-100">Après</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">Capture</span>
              </div>
              <img
                src="https://via.placeholder.com/800x480?text=Apr%C3%A8s+-+Bourse+des+Voyages"
                alt="Après correction - Bourse des Voyages"
                className="w-full h-[300px] object-cover"
              />
              <div className="px-4 py-3 text-sm text-gray-300">Répartition de l’espacement + ajout  et personnalisation de la slide-bar & Alignement horizontale des éléments</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 tracking-tight -tracking-[0.02em]">Création d’un design system modulaire (Figma)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="rounded-2xl bg-white/3 border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-white/5 text-sm font-semibold text-gray-100">Création de variables</div>
              <img
                src="https://via.placeholder.com/800x480?text=Figma+-+Variables"
                alt="Figma - Variables"
                className="w-full h-[220px] object-cover"
              />
              <div className="px-4 py-3 text-sm text-gray-300">Couleurs, espaces, typographies et tokens pour un thème cohérent.</div>
            </div>
            <div className="rounded-2xl bg-white/3 border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-white/5 text-sm font-semibold text-gray-100">Création de composants</div>
              <img
                src="https://via.placeholder.com/800x480?text=Figma+-+Composants"
                alt="Figma - Composants"
                className="w-full h-[220px] object-cover"
              />
              <div className="px-4 py-3 text-sm text-gray-300">Buttons, Cards, Carousel, Checkboxes et variants responsives.</div>
            </div>
            <div className="rounded-2xl bg-white/3 border border-white/10 p-6">
              <div className="text-gray-100 font-semibold mb-3">Choses apprises</div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Comment fonctionne Figma (pages, frames, assets)</li>
                <li>Variables et tokens pour la thématisation</li>
                <li>Composants, variants, auto‑layout</li>
                <li>Documentation intégrée pour l’équipe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 tracking-tight -tracking-[0.02em]">Création des visuels pour Play Store “Bourse des vols”</h3>
          <p className="text-gray-400 mb-8">Production de visuels marketing et captures d’application pour la fiche Play Store.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/3 border border-white/10 overflow-hidden">
              <img
                src="https://via.placeholder.com/1000x560?text=Visuel+Play+Store+1"
                alt="Play Store visuel 1"
                className="w-full h-[220px] object-cover"
              />
              <div className="px-4 py-3 text-sm text-gray-300">Mise en scène multi‑devices, branding et hiérarchie visuelle.</div>
            </div>
            <div className="rounded-2xl bg-white/3 border border-white/10 overflow-hidden">
              <img
                src="https://via.placeholder.com/1000x560?text=Visuel+Play+Store+2"
                alt="Play Store visuel 2"
                className="w-full h-[220px] object-cover"
              />
              <div className="px-4 py-3 text-sm text-gray-300">Focus bénéfices: destinations, simplicité, rapport qualité/prix.</div>
            </div>
            <div className="rounded-2xl bg-white/3 border border-white/10 overflow-hidden">
              <img
                src="https://via.placeholder.com/1000x560?text=Visuel+Play+Store+3"
                alt="Play Store visuel 3"
                className="w-full h-[220px] object-cover"
              />
              <div className="px-4 py-3 text-sm text-gray-300">Cohérence des layouts, typographies et couleurs de marque.</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 tracking-tight -tracking-[0.02em]">Respect du RGAA</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 bg-white rounded-2xl overflow-hidden">
              <img
                src="https://via.placeholder.com/1200x700?text=Crit%C3%A8res+et+tests+%28RGAA%29"
                alt="Critères et tests (RGAA)"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white/3 border border-white/10 p-6">
                <div className="text-gray-100 font-semibold mb-3">Choses apprises</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>Bonnes pratiques pour rendre les sites accessibles.</li>
                  <li>Alternatives textuelles et sémantique adaptée.</li>
                  <li>Focus visibles et navigation clavier.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white/3 border border-white/10 p-6">
                <div className="text-gray-100 font-semibold mb-3">Exemple d’éléments repris</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>Rétablissement du rectangle de focus.</li>
                  <li>Ajout d’aria-label pour les lecteurs d’écran.</li>
                  <li>Attribut role sur les éléments clés (ex: banner).</li>
                  <li>Désactivation des images décoratives via aria-hidden="true".</li>
                </ul>
                <div className="mt-4 rounded-xl bg-white text-gray-800 border border-white/10 p-4 text-sm">
                  Nous sommes 100% français. Notre agence de voyage en ligne est entièrement locale.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight -tracking-[0.02em]">Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {techIcons.map((t, i) => (
                  <div key={i} className="rounded-2xl bg-white/3 border border-white/10 p-4 flex items-center gap-3">
                    {t.url ? (
                      <img src={t.url} alt={t.name} className="w-10 h-10 object-contain" />
                    ) : (
                      <FileCode className="w-10 h-10 text-gray-300" />
                    )}
                    <div className="text-gray-200 text-sm">{t.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight -tracking-[0.02em]">Outils</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {toolIcons.map((t, i) => (
                  <div key={i} className="rounded-2xl bg-white/3 border border-white/10 p-4 flex items-center gap-3">
                    {t.url ? (
                      <img src={t.url} alt={t.name} className="w-10 h-10 object-contain" />
                    ) : (
                      <Kanban className="w-10 h-10 text-gray-300" />
                    )}
                    <div className="text-gray-200 text-sm">{t.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight -tracking-[0.02em]">Les réunions</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="px-4 py-2 rounded-full bg-white/10 text-gray-100 font-semibold mr-3">Lundi et mercredi</span>
                  <span className="px-4 py-2 rounded-full bg-white/5 text-gray-300">Organiser les nouveaux tickets et la livraison du reste de la semaine.</span>
                </div>
                <div className="flex items-center">
                  <span className="px-4 py-2 rounded-full bg-white/10 text-gray-100 font-semibold mr-3">Mercredi</span>
                  <span className="px-4 py-2 rounded-full bg-white/5 text-gray-300">Les livraisons.</span>
                </div>
                <div className="flex items-center">
                  <span className="px-4 py-2 rounded-full bg-white/10 text-gray-100 font-semibold mr-3">Un vendredi sur deux</span>
                  <span className="px-4 py-2 rounded-full bg-white/5 text-gray-300">Journée interne (Créer des outils utiles pour l'équipe: automatisation, timeline, etc.).</span>
                </div>
                <div className="flex items-center">
                  <span className="px-4 py-2 rounded-full bg-white/10 text-gray-100 font-semibold mr-3">Toute les 4 semaines</span>
                  <span className="px-4 py-2 rounded-full bg-white/5 text-gray-300">Rétro pour évaluer les points positifs et faire le bilan.</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-100 mb-3">Suivi du temps passé sur chaque projet</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>Logger son temps dans les tickets Gitlab.</li>
                  <li>Visualiser le temps passé par chaque membre sur chaque projet (jour, semaine, mois).</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight -tracking-[0.02em]">Statuts des tickets Gitlab</h3>
              <div className="bg-white rounded-2xl p-6">
                <ul className="space-y-3 text-gray-800 text-sm">
                  <li><span className="font-semibold">À traiter :</span> La tâche ou MR est créée mais pas encore prise en charge. En attente d’assignation ou de priorisation.</li>
                  <li><span className="font-semibold">En cours :</span> Le développement a commencé. Le code est en cours de modification dans une branche dédiée.</li>
                  <li><span className="font-semibold">Validation technique :</span> Revue de code par l’équipe technique pour vérifier la qualité, le fonctionnement et le respect des standards.</li>
                  <li><span className="font-semibold">Validation fonctionnelle :</span> Tests pour s’assurer que la fonctionnalité répond aux besoins fonctionnels et aux scénarios d’usage.</li>
                  <li><span className="font-semibold">Déploiement prod :</span> Mise en production du code validé.</li>
                  <li><span className="font-semibold">Livré :</span> La fonctionnalité est disponible pour les utilisateurs. Cycle terminé.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 tracking-tight -tracking-[0.02em]">Les compétences acquises</h3>
          <div className="bg-white/3 border border-white/10 rounded-2xl p-6">
            <div className="flex flex-wrap gap-3">
              {[
                'Intégration web',
                'Développement',
                'RGAA',
                'VueJS',
                'SCSS',
                'Intervenir sur plusieurs environnements',
                'Résolution de bugs (nb voyageurs)',
                'Commandes git/npm',
                'Raccourcis clavier',
                'GitLab',
                'Design system',
                'Configurer son IDE (tabs, extensions, indentation)',
                'Emailing'
              ].map((label, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white text-gray-800 text-sm shadow-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseDetail;
