import React from 'react';
import { TrendingUp, Zap, Globe, Brain, Shield, Smartphone } from 'lucide-react';

const TechWatch = () => {
  const techTrends = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligence Artificielle",
      description: "GPT-4, LLMs et automatisation des processus métier",
      status: "Critique",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web3 & Blockchain",
      description: "DeFi, NFTs et applications décentralisées",
      status: "Émergent",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Edge Computing",
      description: "Calcul en périphérie et latence ultra-faible",
      status: "En croissance",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersécurité",
      description: "Zero Trust, sécurité quantique et privacy",
      status: "Essentiel",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Progressive Web Apps",
      description: "Applications hybrides et expérience native",
      status: "Mature",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Cloud Native",
      description: "Microservices, Kubernetes et serverless",
      status: "Standard",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Critique': return 'bg-red-100 text-red-800';
      case 'Émergent': return 'bg-blue-100 text-blue-800';
      case 'En croissance': return 'bg-yellow-100 text-yellow-800';
      case 'Essentiel': return 'bg-purple-100 text-purple-800';
      case 'Mature': return 'bg-green-100 text-green-800';
      case 'Standard': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="veille" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Veille Technologique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Restez à la pointe de l'innovation avec notre analyse des tendances 
            technologiques qui façonnent l'avenir du développement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techTrends.map((trend, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${trend.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-200`}>
                {trend.icon}
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">{trend.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(trend.status)}`}>
                  {trend.status}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">{trend.description}</p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Impact</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`w-2 h-2 rounded-full ${
                          star <= (trend.status === 'Critique' ? 5 : trend.status === 'Essentiel' ? 4 : 3)
                            ? 'bg-yellow-400'
                            : 'bg-gray-200'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechWatch;