import React from 'react';
import { Download, Calendar, MapPin, Building, GraduationCap, Award } from 'lucide-react';
import cvPdf from '../assets/documents/cv-mohamed-elbermil.pdf';

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
      description: "Spécialisation en développement web et intelligence artificielle"
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
    { name: "Designer UX/UI", issuer: "Web Force 3", year: "2023" },
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

  return (
    <section id="cv" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Parcours Professionnel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Une trajectoire dédiée à l'excellence technique et à l'innovation constante
            dans l'écosystème du développement moderne.
          </p>
          
          <button 
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            <Download className="w-5 h-5 mr-2" />
            Télécharger le CV
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Building className="w-6 h-6 mr-3 text-blue-500" />
                Expérience Professionnelle
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-200 last:border-l-0">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-800">{exp.title}</h4>
                      <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-purple-500" />
                Formation
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-purple-200 last:border-l-0">
                    <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-0"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-800">{edu.title}</h4>
                      <span className="text-sm text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Certifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-500" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-yellow-400 pl-4">
                    <div className="font-semibold text-gray-800">{cert.name}</div>
                    <div className="text-sm text-gray-600">{cert.issuer}</div>
                    <div className="text-xs text-yellow-600 font-medium">{cert.year}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Langues</h3>
              
              <div className="space-y-3">
                {[
                  { lang: "Français", level: "Natif" },
                  { lang: "Anglais", level: "Intermédiaire" },
                  { lang: "Arabe", level: "Intermédiaire avancé"}
                ].map((language, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">{language.lang}</span>
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;