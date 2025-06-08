import React from 'react';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Crypto Portfolio Tracker",
      description: "Tracker de portfolio crypto avec analyses techniques, alertes de prix et intégration multi-exchanges.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Svelte", "Node.js", "Redis", "WebSocket"],
      features: ["Analyses techniques", "Alertes de prix", "Multi-exchanges"],
      stats: { users: "12K+", rating: 4.4 },
      links: {
        demo: "#",
        github: "#"
      },
      category: "FinTech"
    }
  ];

  const categories = ["Tous", "Web App", "Mobile App", "SaaS", "AI Tool", "FinTech"];
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");

  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {project.category}
                </div>
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
                  <a
                    href={project.links.demo}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
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