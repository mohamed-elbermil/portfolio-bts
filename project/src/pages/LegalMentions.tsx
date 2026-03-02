import React from 'react';

const LegalMentions = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight -tracking-[0.02em]">Mentions légales</h2>
        <div className="mt-6 rounded-2xl bg-white/3 border border-white/10 p-6">
          <div className="text-gray-100 font-semibold mb-2">Éditeur du site</div>
          <div className="text-gray-300">Mohamed El Bermil • Lyon, France • melbermil@outlook.fr</div>
        </div>
        <div className="mt-4 rounded-2xl bg-white/3 border border-white/10 p-6">
          <div className="text-gray-100 font-semibold mb-2">Hébergement</div>
          <div className="text-gray-300">Vercel / XAMPP (local) • Données statiques.</div>
        </div>
        <div className="mt-4 rounded-2xl bg-white/3 border border-white/10 p-6">
          <div className="text-gray-100 font-semibold mb-2">Propriété intellectuelle</div>
          <div className="text-gray-300">Tous les contenus sont protégés. Toute reproduction nécessite autorisation.</div>
        </div>
      </div>
    </section>
  );
};

export default LegalMentions;
