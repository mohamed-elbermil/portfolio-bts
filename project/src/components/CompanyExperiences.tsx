import React from 'react';
import {
  Building,
  Users,
  MapPin,
  Calendar,
  Target,
  Briefcase,
  TrendingUp,
  Award,
} from 'lucide-react';
import PGW from '../assets/images/PGW.png';

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="currentColor" width={24} height={24} {...props}>
    <path d="M8.6 15.1c.6 0 1.1-.1 1.4-.3.3-.2.5-.6.5-1.1 0-.5-.2-.8-.5-1-.3-.2-.8-.3-1.4-.3H5.7v2.7h2.9zm.1 3.2c.7 0 1.2-.1 1.5-.4.3-.2.5-.6.5-1.2 0-.5-.2-.9-.5-1.1-.3-.2-.8-.3-1.5-.3H5.7v3h3zm6.2-2.2c-.3.2-.5.6-.5 1.1 0 .5.2.8.5 1 .3.2.8.3 1.4.3.6 0 1.1-.1 1.4-.3.3-.2.5-.6.5-1.1 0-.5-.2-.8-.5-1-.3-.2-.8-.3-1.4-.3-.6 0-1.1.1-1.4.3zm-6.2-5.1c1.2 0 2.1.2 2.7.7.6.5.9 1.2.9 2.2 0 .6-.2 1.1-.5 1.5-.3.4-.8.7-1.4.8v.1c.8.1 1.4.4 1.7.8.3.4.5.9.5 1.6 0 1.1-.4 1.9-1.1 2.4-.7.5-1.7.7-3 .7H3v-8.1h5.7zm7.5 2.2c.7-.6 1.7-.9 3-.9 1.1 0 2 .3 2.6.8.6.5.9 1.2 1 2.1h-2.1c-.1-.3-.2-.5-.4-.7-.2-.2-.5-.3-.9-.3-.5 0-.8.1-1 .3-.2.2-.3.5-.3.8v.2h4.8v.7c0 1.1-.3 2-1 2.6-.7.6-1.7.9-3 .9-1.2 0-2.1-.3-2.7-.8-.6-.5-.9-1.2-.9-2.2 0-1.1.3-1.9 1-2.5zm7.7 2.5c.2-.7.6-1.3 1.2-1.7.6-.4 1.4-.6 2.4-.6.9 0 1.7.2 2.2.6.5.4.8 1 .9 1.7h-1.7c-.1-.2-.2-.4-.4-.5-.2-.1-.5-.2-.9-.2-.4 0-.7.1-.9.2-.2.1-.3.3-.3.5 0 .2.1.3.3.4.2.1.7.2 1.5.3 1.2.2 2 .4 2.4.7.4.3.6.7.6 1.3 0 .7-.3 1.2-.9 1.6-.6.4-1.4.6-2.5.6-1 0-1.8-.2-2.4-.6-.6-.4-.9-1-.9-1.7h1.8c.1.5.6.7 1.5.7.4 0 .7-.1.9-.2.2-.1.3-.2.3-.4 0-.2-.1-.3-.3-.4-.2-.1-.7-.2-1.5-.3-1.2-.2-2-.4-2.4-.7-.4-.3-.6-.7-.6-1.3 0-.7.3-1.2.9-1.6zm-2.2-4.2h5.2v1.2h-5.2v-1.2z" />
  </svg>
);

const CompanyExperience = () => {
  const companies = [
    {
      name: 'Penguin World',
      period: '2024-2025',
      logo: PGW,
      image:
        'https://i.ytimg.com/vi/DwnXbfYhoyg/maxresdefault.jpg',
      size: '108 employés',
      sector: 'Tourisme et des loisirs',
      activity:
        "Développement des solutions de réservation en ligne multi-tour-opérateurs pour le secteur du tourisme et des loisirs",
      location: '73 rue Francis de Pressensé, 69100 Villeurbanne (Lyon)',
      position: 'Intégrateur web',
      missions: [
        "Depuis 2003, Penguin World accompagne les professionnels du tourisme et des loisirs dans le développement de leurs ventes sur Internet. L'entreprise propose des logiciels de réservation en ligne multi‑tour‑opérateurs et multi‑sources, permettant de distribuer et de gérer une offre complète de voyages sur l'ensemble des canaux de distribution.",
      ],
      achievements: [
        'Création de marque blanche',
        'Respect des normes et standards web',
        'Adaptation responsive',
        'Optimisation des performances',
        'Conception de template mail avec Beefree',
        'Mise en place de design system modulaire avec Figma',
        "Création d'images de présentation de l'application \"Bourse des Vols\" sur le Play Store",
        "Application des normes d'accessibilité numérique (RGAA)",
      ],
      technologies: ['Vue.JS', 'SCSS', 'CSS', 'HTML', 'Github', 'Gitlab', 'Planio', "Whaller", "Syspass", "Jitsi"],
      color: 'from-blue-500 to-blue-600',
    },
  ];

  return (
    <section id="entreprises" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Expérience Entreprise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les environnements professionnels qui ont façonné mon expertise
            et les missions qui ont enrichi mon parcours de développeur.
          </p>
        </div>

        <div className="space-y-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={company.image}
                  alt={`Environnement de travail chez ${company.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  {/* Company Header */}
                  <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden mr-4 shadow-md bg-white p-1">
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{company.name}</h3>
                        <p className="text-blue-600 font-semibold">{company.period}</p>
                      </div>
                      <a
                        href="https://www.behance.net/mohamedelbermil2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Behance"
                        className="ml-4 p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                      >
                        <BehanceIcon className="w-7 h-7 text-blue-600" />
                      </a>
                    </div>

                    {/* Company Info Cards */}
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center mb-2">
                          <Users className="w-5 h-5 text-blue-500 mr-2" />
                          <span className="font-semibold text-gray-800">Taille</span>
                        </div>
                        <p className="text-gray-600">{company.size}</p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="w-5 h-5 text-purple-500 mr-2" />
                          <span className="font-semibold text-gray-800">Secteur</span>
                        </div>
                        <p className="text-gray-600">{company.sector}</p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center mb-2">
                          <MapPin className="w-5 h-5 text-green-500 mr-2" />
                          <span className="font-semibold text-gray-800">Localisation</span>
                        </div>
                        <p className="text-gray-600">{company.location}</p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center mb-2">
                          <Briefcase className="w-5 h-5 text-orange-500 mr-2" />
                          <span className="font-semibold text-gray-800">Poste</span>
                        </div>
                        <p className="text-gray-600 font-medium">{company.position}</p>
                      </div>
                    </div>
                  </div>

                  {/* Company Details */}
                  <div className="lg:w-2/3">
                    {/* Activity */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                        <Building className="w-6 h-6 mr-2 text-blue-500" />
                        Activité de l'entreprise
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{company.activity}</p>
                    </div>

                    {/* Missions */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <Target className="w-6 h-6 mr-2 text-purple-500" />
                        Missions principales
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {company.missions.map((mission, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{mission}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <Award className="w-6 h-6 mr-2 text-green-500" />
                        Réalisations clés
                      </h4>
                      <div className="space-y-3">
                        {company.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Technologies utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {company.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Bilan de l'expérience</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-gray-600">Entreprise</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Employés encadrés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600">Projets livrés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">22+</div>
              <div className="text-gray-600">Années d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyExperience;
