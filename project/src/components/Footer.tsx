import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "Présentation", href: "#presentation" },
    { name: "Veille Tech", href: "#veille" },
    { name: "Compétences", href: "#competences" },
    { name: "CV", href: "#cv" },
    { name: "Projets", href: "#projets" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">React</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Mohamed EL BERMIL</h3>
                <p className="text-gray-400">Intégrateur Web</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Passionné par l'innovation technologique, je transforme vos idées
              en solutions digitales performantes et évolutives qui font la différence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>melbermil@outlook.fr</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-red-400" />
                <span>Lyon, France</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Réseaux Sociaux</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-200 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-semibold mb-3">Newsletter Tech</h5>
              <p className="text-gray-400 text-sm mb-4">
                Recevez les dernières tendances technologiques
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-r-lg hover:shadow-lg transition-shadow duration-200">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;