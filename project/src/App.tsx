import React from 'react';
import CompanyExperience from './components/CompanyExperiences';
import Header from './components/Header';
import Hero from './components/Hero';
import TechWatch from './components/TechWatch';
import Skills from './components/Skills';
import CV from './components/CV';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
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