import React from 'react';
import { ChevronDown, MapPin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('veille');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="presentation" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 flex items-center min-h-screen">
        <div className="w-full">
          <div className="text-center max-w-4xl mx-auto">
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              React
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Mohamed EL BERMIL
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
              Intégrateur web
            </h2>

            <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-12">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Lyon, France</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-purple-500" />
                <a 
                  href="mailto:melbermil@outlook.fr"
                  className="hover:text-purple-600 transition-colors duration-200"
                >
                  melbermil@outlook.fr
                </a>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Notre Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Transformer les idées innovantes en solutions technologiques performantes. 
                Je me spécialise dans le développement d'applications web modernes, 
                l'architecture cloud et l'intégration de technologies émergentes pour 
                créer des expériences utilisateur exceptionnelles.
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToNext}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Découvrir mon travail
              <ChevronDown className="w-5 h-5 ml-2 inline-block group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;