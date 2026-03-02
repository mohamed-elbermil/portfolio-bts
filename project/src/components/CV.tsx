import React, { useEffect, useRef } from 'react';
import { Download, MapPin, Building, GraduationCap, Award } from 'lucide-react';
import cvPdf from '../assets/documents/cv-mohamed-elbermil.pdf';
import Reveal from './Reveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CV = () => {
  const experiences = [
    {
      period: "2024-2025",
      title: "Intégrateur web",
      company: "Penguin World",
      location: "Villeurbanne, France",
      description: "Penguin World, engagé dans la promotion de voyages inspirant, rassemble une équipe passionnés pour rapprocher les peuples. Ils m'ont fait appel en tant qu'intégrateur web pour renforcer l'expérience utilisateur de leurs différentes plateformes.",
      achievements: [
        "Intégration de solutions en marque blanche sur les sites clients majeurs (Lidl,Veepee, etc.).",
        "Mise en œuvre de designs adaptatifs (responsive) pour une expérience utilisateur optimale sur tous les appareils.",
        "Optimisation des performances pour garantir rapidité, fluidité et conformité aux meilleures pratiques du web."
      ]
    },
    {
      period: "2023-2024",
      title: "DESIGNER WEB & GRAPHISTE",
      company: "We Do Play",
      location: "Lyon, France",
      description: "We Do Play est une équipe de coureurs passionné qui adorent relever des défis au quotidien. Dans le cadre de ce projet, j'ai eu le privilège de m'occuper de la refonte de leur site web avec Wix.",
      achievements: [
        "Création d'un puzzle interactif intégré par la suite sur le site internet",
        "Refonte graphique du site internet avec Wix",
        "Conseils sur les choix graphiques",
        "Conception créative d'une affiche de cinéma sur-mesure avec Photoshop"
      ]
    },
    {
      period: "2023 - 2024",
      title: "DESIGNER WEB & GRAPHISTE",
      company: "SOBLIM",
      location: "Lyon, France",
      description: "SOBLIM est une agence web digital proposant différents services autour du web. Durant ce projet je me suis occupé de la création de la charte graphique, du site internet et de la gestion des réseaux sociaux.",
      achievements: [
        "Création de l'identité graphique avec la suite Adobe",
        "Création d'un nouveau site internet (Wordpress)",
        "Rédaction des textes",
        "Gestion des formulaires",
        "Référencement (SEO)"
        
      ]
    }
  ];

  const education = [
    {
      period: "2024-2026",
      title: "BTS SIO - SLAM",
      institution: "Nexa Campus Lyon",
      location: "Lyon, France",
      description: "Spécialisation en développement web et application"
    },
    {
      period: "2023 - 2024",
      title: "Développeur Web et Web Mobile",
      institution: "Web Force 3",
      location: "Lyon, France",
      description: "Formation orienté développement web"
    },
    {
      period: "2022-2023",
      title: "Designer UX/UI",
      institution: "Web Force 3",
      location: "Lyon, France",
      description: "Formation orienté développement web et design UX/UI"
    },
    {
      period: "2023 - 2024",
      title: "Design Web Marketing Digital",
      institution: "Web Force 3",
      location: "Lyon, France",
      description: "Formation orienté développement web et marketing"
    }
  ];

  const certifications = [
    { name: "Designer UX/UI RNCP 5", issuer: "Web Force 3", year: "2023" },
    { name: "Baccalauréat professionnel Menuisier Agenceur", issuer: "Ecole Lamache", year: "2021" },

  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'CV_Mohamed_Elbermil.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      ScrollTrigger.matchMedia({
        "(min-width: 769px)": () => {
          const section = sectionRef.current;
          if (!section) return;
          const titleInner = section.querySelector('.cv-title-inner');
          if (titleInner) {
            gsap.fromTo(titleInner, { yPercent: 100 }, {
              yPercent: 0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: titleInner,
                start: "top 85%",
              }
            });
          }
        }
      });
    } catch { void 0; }
    return () => {
      try {
        ScrollTrigger.getAll().forEach(t => t.kill());
      } catch { void 0; }
    };
  }, []);

  return (
    <section id="cv" className="py-24">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        <Reveal>
        <div className="text-center mb-16">
          <h2 className="overflow-hidden text-5xl md:text-6xl font-bold text-gray-100 mb-6 tracking-tight -tracking-[0.02em]">
            <span className="cv-title-inner inline-block translate-y-full">Parcours Professionnel</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">Découvrez mon parcours et mes compétences en un coup d’œil.
          </p>
          
          <button 
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-white/5 text-white font-semibold rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-200"
          >
            <Download className="w-5 h-5 mr-2" />
            Télécharger le CV
          </button>

          <div className="mt-10 max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-lg">
              <iframe
                src={cvPdf}
                title="Aperçu du CV"
                className="w-full h-[480px]"
              />
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Aperçu du CV affiché ci-dessus. Pour une meilleure lisibilité ou impression, utilisez le bouton &quot;Télécharger le CV&quot;.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/3 rounded-2xl p-8 border border-white/10 mb-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <Building className="w-6 h-6 mr-3 text-gray-200" />
                Expérience Professionnelle
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-white/10 last:border-l-0">
                    <div className="absolute w-4 h-4 bg-white/40 rounded-full -left-2 top-0"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-100">{exp.title}</h4>
                      <span className="text-sm text-gray-200 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-300 mb-3">
                      <Building className="w-4 h-4 mr-2 text-gray-200" />
                      <span className="font-medium text-gray-200">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-4 h-4 mr-1 text-gray-200" />
                      <span className="text-gray-300">{exp.location}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-white/40 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white/3 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-gray-200" />
                Formation
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-white/10 last:border-l-0">
                    <div className="absolute w-4 h-4 bg-white/40 rounded-full -left-2 top-0"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-100">{edu.title}</h4>
                      <span className="text-sm text-gray-200 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {edu.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-300 mb-2">
                      <Building className="w-4 h-4 mr-2 text-gray-200" />
                      <span className="font-medium text-gray-200">{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-4 h-4 mr-1 text-gray-200" />
                      <span className="text-gray-300">{edu.location}</span>
                    </div>
                    
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Certifications */}
            <div className="bg-white/3 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-gray-200" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-yellow-400 pl-4">
                    <div className="font-semibold text-gray-100">{cert.name}</div>
                    <div className="text-sm text-gray-300">{cert.issuer}</div>
                    <div className="text-xs text-gray-200 font-medium">{cert.year}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white/3 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-gray-100 mb-4">Langues</h3>
              
              <div className="space-y-3">
                {[
                  { lang: "Français", level: "Natif" },
                  { lang: "Anglais", level: "Intermédiaire" },
                  { lang: "Arabe", level: "Intermédiaire avancé"}
                ].map((language, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium text-gray-100">{language.lang}</span>
                    <span className="text-sm text-gray-200 bg-white/5 px-2 py-1 rounded border border-white/10">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CV;
