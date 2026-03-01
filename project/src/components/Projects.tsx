import React, { useEffect, useRef } from 'react';
import moovyImg from '../assets/images/moovy.png';
import fitnessAreaImg from '../assets/images/fitness-area.png';
import vintedImg from '../assets/images/vinted.png';
import { ExternalLink, Github, Users, Star } from 'lucide-react';
import Reveal from './Reveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projects = [
    {
      title: "Fitness-Area",
      description: "Création d'un site web moderne pour une salle de sport, mettant en avant les équipements, les cours et les abonnements disponibles.",
      image: fitnessAreaImg,
      technologies: ["React", "CSS"],
      competences: [
        "Bloc 2 : Conception et développement d'une interface utilisateur",
        "Bloc SLAM : Développer des composants front-end réutilisables",
        "Bloc 4 : Gestion de projet et versionning avec Git",
        "Bloc 3 : Intégration de services et déploiement (Vercel)"
      ],
      features: [
        "Consultation des formules",
        "Découverte des coachs",
        "Interface responsive",
      ],
      stats: { users: "500+", rating: 4.8 },
      links: {
        Site: "https://fitness-area-mohamed-e.vercel.app/",
        github: "https://github.com/mohamed-elbermil/fitness-area"
      }
    },
    {
      title: "Moovy",
      description: "Moovy est une plateforme de streaming fictive qui permet de découvrir et regarder vos films et séries préférés. La plateforme utilise l’API TMDB.",
      image: moovyImg,
      technologies: ["React","NextJS", "CSS", "JS"],
      competences: [
        "Bloc 2 : Définir et implémenter des fonctionnalités utilisateurs",
        "Bloc SLAM : Consommer et structurer des données côté client",
        "Bloc 3 : Modéliser et interroger une base de données SQL",
        "Bloc 4 : Collaboration, documentation et qualité du code"
      ],
      features: [
        "Catalogue de films dynamique",
        "Interface responsive",
      ],
      stats: { users: "1000+", rating: 4.9 },
      links: {
        github: "https://github.com/mohamed-elbermil/moovy"
      }
    },
    {
      title: "Vinted Générateur",
      description: "Il s'agit d'un projet personnel visant à automatiser la rédaction de mes descriptions de vêtements sur Vinted.",
      image: vintedImg,
      technologies: ["VueJS", "CSS", "JS"],
      competences: [
        "Bloc 2 : Conception et développement d'une interface utilisateur",
        "Bloc 4 : Gestion de projet et versionning avec Git"
      ],
      features: [
        "Génération de descriptions personnalisées",
        "Interface utilisateur intuitive",
      ],
      stats: { users: "1000+", rating: 4.9 },
      links: {
        github: "https://github.com/mohamed-elbermil/DressCode",
        Site: "https://dress-code-beta.vercel.app/",

      }
    }
  ];

  useEffect(() => {
    try {
      ScrollTrigger.matchMedia({
        "(min-width: 769px)": () => {
          const section = sectionRef.current;
          if (!section) return;
          const cards = section.querySelectorAll('.project-card');
          const images = section.querySelectorAll('.project-image');
          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: () => "+=800",
            pin: section,
            pinSpacing: true,
          });
          gsap.fromTo(cards, { scale: 0.8 }, {
            scale: 1,
            ease: "expo.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => "+=800",
              scrub: true,
            }
          });
          images.forEach((img, i) => {
            const card = cards[i];
            if (!card) return;
            gsap.to(img, {
              yPercent: -15,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              }
            });
          });
          const titleInner = section.querySelector('.projects-title-inner');
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
    <section id="projets" className="py-24">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        <Reveal>
        <div className="text-center mb-16">
          <h2 className="overflow-hidden text-5xl md:text-6xl font-bold text-gray-100 mb-6 tracking-tight -tracking-[0.02em]">
            <span className="projects-title-inner inline-block translate-y-full">Projets Réalisés</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Une sélection de projets qui démontrent l'étendue de mon expertise technique
            et ma capacité à créer des solutions innovantes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group bg-white/3 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 text-gray-200 text-xs font-medium rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-100 mb-2">Fonctionnalités clés :</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-100 mb-2">Compétences mobilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.competences?.map((comp, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-white/5 text-gray-200 text-xs font-medium rounded-full border border-white/10"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{project.stats.users} utilisateurs</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    <span>{project.stats.rating}/5</span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  {project.links.Site && (
                    <a
                      href={project.links.Site}
                      target="_blank"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Site web
                    </a>
                  )}
                  <a
                    href={project.links.github} 
                    target="_blank"
                    className={`flex items-center justify-center px-4 py-2 bg-white/5 text-gray-100 text-sm font-medium rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-200 ${project.links.Site ? 'flex-1' : 'w-full'}`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
