import React from 'react';

const CookiesPolicy = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight -tracking-[0.02em]">Gestion des cookies</h2>
        <div className="mt-6 rounded-2xl bg-white/3 border border-white/10 p-6">
          <div className="text-gray-100 font-semibold mb-2">Cookies utilisés</div>
          <div className="text-gray-300">Aucun cookie de suivi. Outils de build et hébergeur peuvent poser des cookies techniques.</div>
        </div>
        <div className="mt-4 rounded-2xl bg-white/3 border border-white/10 p-6">
          <div className="text-gray-100 font-semibold mb-2">Paramétrage</div>
          <div className="text-gray-300">Le navigateur permet de gérer l’acceptation et la suppression des cookies.</div>
        </div>
      </div>
    </section>
  );
};

export default CookiesPolicy;
