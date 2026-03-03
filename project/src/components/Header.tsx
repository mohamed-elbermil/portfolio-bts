import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import profile from "../assets/images/profile.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (window.location.hash !== '' && window.location.hash !== '#home') {
      window.location.hash = sectionId === 'presentation' ? '#home' : `#${sectionId}`;
      setIsMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'presentation', label: 'Présentation' },
    { id: 'veille', label: 'Veille Tech' },
    { id: 'tableau-competences', label: 'Tableau des compétences' },
    { id: 'competences', label: 'Compétences' },
    { id: 'cv', label: 'CV' },
    { id: 'projets', label: 'Projets' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/8 backdrop-blur-xl border-b border-white/15' : 'bg-transparent border-b border-white/10 backdrop-blur-xl'
    }`}>
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
              <img
                src={profile}
                alt="Mohamed EL BERMIL"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-semibold text-gray-100 tracking-tight -tracking-[0.01em]">
              Portfolio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-200 border border-white/10 rounded-2xl hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-x2 border-t border-white/10">
            <div className="py-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-6 py-3 text-gray-200 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
