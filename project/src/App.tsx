import React, { useEffect, useState } from 'react';
import CompanyExperience from './components/CompanyExperiences';
import Header from './components/Header';
import Hero from './components/Hero';
import TechWatch from './components/TechWatch';
import Skills from './components/Skills';
import CV from './components/CV';
import Projects from './components/Projects';
import Footer from './components/Footer';
import TechWatchArchive from './pages/TechWatchArchive';

function App() {
  const [route, setRoute] = useState<string>(window.location.hash || '#home');

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (route === '#veille-archive') {
    return (
      <div className="min-h-screen">
        <Header />
        <TechWatchArchive />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Skills />
      <CV />
      <CompanyExperience/>
      <Projects />
      <TechWatch />
      <Footer />
    </div>
  );
}

export default App;