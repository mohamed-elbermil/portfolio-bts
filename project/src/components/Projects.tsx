import React from 'react';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Fitness-Area",
      description: "Création d'un site web moderne pour une salle de sport, mettant en avant les équipements, les cours et les abonnements disponibles.",
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "CSS"],
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
      title: "Netflix Clone",
      description: "Réplique moderne de l'interface Netflix avec une expérience utilisateur immersive et des fonctionnalités similaires à la plateforme originale.",
      image: "https://cdn.wccftech.com/wp-content/uploads/2021/06/Fix-Netflix-App-23.jpg",
      technologies: ["React", "CSS", "SQL"],
      features: [
        "Catalogue de films dynamique",
        "Interface responsive",
      ],
      stats: { users: "1000+", rating: 4.9 },
      links: {
        github: "https://github.com/mohamed-elbermil/netflix-clone"
      }
    }
  ];

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Projets Réalisés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Une sélection de projets qui démontrent l'étendue de mon expertise technique
            et ma capacité à créer des solutions innovantes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Fonctionnalités clés :</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{project.stats.users} utilisateurs</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    <span>{project.stats.rating}/5</span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  {project.links.Site && (
                    <a
                      href={project.links.Site}
                      target="_blank"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Site web
                    </a>
                  )}
                  <a
                    href={project.links.github} 
                    target="_blank"
                    className={`flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200 ${project.links.Site ? 'flex-1' : 'w-full'}`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projets réalisés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">200K+</div>
              <div className="text-gray-600">Utilisateurs actifs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4.7/5</div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;