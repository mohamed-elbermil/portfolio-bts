import React from 'react';
import { TrendingUp, Zap, Globe, Brain, Shield, Smartphone, Code, Database, Cloud, Server, ExternalLink } from 'lucide-react';

const TechWatch = () => {
  const techTrends = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligence Artificielle",
      description: "Claude 3 Opus, GPT-4 Turbo et l'évolution des LLMs pour le développement",
      status: "Critique",
      color: "from-purple-500 to-pink-500",
      date: "Mars 2025",
      link: "https://www.zdnet.com/article/anthropic-launches-claude-3-opus-its-most-advanced-ai-model-yet/"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "React 19, Next.js 14 et l'essor des frameworks full-stack",
      status: "Standard",
      color: "from-blue-500 to-cyan-500",
      date: "Mars 2025",
      link: "https://nextjs.org/blog/next-14"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Computing",
      description: "AWS Bedrock, Azure AI et l'évolution des services cloud",
      status: "Essentiel",
      color: "from-yellow-500 to-orange-500",
      date: "Mars 2025",
      link: "https://aws.amazon.com/bedrock/"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersécurité",
      description: "IA dans la sécurité, Zero Trust et protection contre les attaques quantiques",
      status: "Critique",
      color: "from-red-500 to-rose-500",
      date: "Mars 2025",
      link: "https://www.csoonline.com/article/1291510/quantum-computing-threats-to-cybersecurity.html"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Bases de données",
      description: "PostgreSQL 16, MongoDB Atlas et les bases de données vectorielles",
      status: "En croissance",
      color: "from-green-500 to-emerald-500",
      date: "Mars 2025",
      link: "https://www.postgresql.org/docs/16/release.html"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "DevOps",
      description: "GitHub Copilot Enterprise, Docker Desktop et l'automatisation CI/CD",
      status: "Mature",
      color: "from-indigo-500 to-purple-500",
      date: "Mars 2025",
      link: "https://github.blog/2024-02-27-github-copilot-enterprise-is-now-generally-available/"
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
            <a
              key={index}
              href={trend.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 block"
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

              <p className="text-gray-600 leading-relaxed mb-4">{trend.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>Dernière mise à jour : {trend.date}</span>
                <ExternalLink className="w-4 h-4 text-blue-500" />
              </div>

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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechWatch;