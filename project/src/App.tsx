import React, { useEffect, useState } from 'react';
import CompanyExperience from './components/CompanyExperiences';
import Header from './components/Header';
import Hero from './components/Hero';
import TechWatch from './components/TechWatch';
import CV from './components/CV';
import Footer from './components/Footer';
import TechWatchArchive from './pages/TechWatchArchive';
import BentoGrid from './components/BentoGrid';
import CaseStudies from './components/CaseStudies';
import EnterpriseDetail from './pages/EnterpriseDetail';

function App() {
  const [route, setRoute] = useState<string>(window.location.hash || '#home');

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (route === '#veille-archive') {
    return (
      <div className="min-h-screen bg-[#050505] text-gray-100">
        <Header />
        <TechWatchArchive />
        <Footer />
      </div>
    );
  }

  if (route === '#entreprises-detail') {
    return (
      <div className="min-h-screen bg-[#050505] text-gray-100">
        <Header />
        <EnterpriseDetail />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100">
      <Header />
      <Hero />
      <BentoGrid />
      <CV />
      <CompanyExperience />
      <CaseStudies />
      <TechWatch />
      <Footer />
    </div>
  );
}

export default App;
