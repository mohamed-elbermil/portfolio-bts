import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight -tracking-[0.02em]">Politique de confidentialité</h2>
        <div className="mt-6 rounded-2xl bg-white/3 border border-white/10 p-6">
          <div className="text-gray-100 font-semibold mb-2">Données collectées</div>
          <div className="text-gray-300">Aucune donnée personnelle n’est collectée hors contact volontaire par email.</div>
        </div>
        <div className="mt-4 rounded-2xl bg-white/3 border border-white/10 p-6">
          <div className="text-gray-100 font-semibold mb-2">Finalités</div>
          <div className="text-gray-300">Présenter le portfolio et les réalisations BTS SIO. Aucune revente.</div>
        </div>
        <div className="mt-4 rounded-2xl bg-white/3 border border-white/10 p-6">
          <div className="text-gray-100 font-semibold mb-2">Durée de conservation</div>
          <div className="text-gray-300">Contenus statiques. Les emails reçus sont conservés selon nécessité.</div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
