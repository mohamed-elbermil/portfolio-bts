import React from "react";
import { ChevronDown, MapPin, Mail, Github, Linkedin } from "lucide-react";
import profile from "../assets/images/profile.jpg";
import Reveal from "./Reveal";

const Hero = () => {
  const stats = [
    { value: "6+", label: "Projets réalisés" },
    { value: "1 an", label: "En entreprise" },
    { value: "RGAA", label: "Conformité accessibilité" },
    { value: "2026", label: "BTS SIO SLAM" },
  ];

  const scrollToNext = () => {
    const el = document.getElementById("competences");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="presentation"
      className="min-h-screen relative overflow-hidden bg-[#050505]"
    >
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 flex items-center min-h-screen">
        <Reveal>
          <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              {/* Left column */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

                {/* Photo + badge disponible */}
                <div className="relative w-40 h-40 mb-8">
                  <img
                    src={profile}
                    alt="Mohamed EL BERMIL"
                    className="w-full h-full object-cover rounded-full border border-white/20 shadow-xl hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 bg-[#0d0d0d] border border-white/10 rounded-full px-3 py-1 shadow">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span className="text-xs text-gray-300">Disponible</span>
                  </div>
                </div>

                <h1 className="text-6xl md:text-7xl font-bold mb-3 text-gray-100 leading-tight tracking-tight -tracking-[0.02em]">
                  Mohamed <br /> EL BERMIL
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 font-light tracking-wide -tracking-[0.01em]">
                  Développeur Web
                </h2>

                {/* Tagline */}
                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                  Je conçois et intègre des interfaces performantes —{" "}
                  du design system au déploiement en production.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-200 text-sm">Lyon, France</span>
                  </div>
                  <a
                    href="mailto:melbermil@outlook.fr"
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-200 text-sm">melbermil@outlook.fr</span>
                  </a>
                </div>

                <div className="flex gap-3 mb-10">
                  <a
                    href="https://github.com/mohamed-elbermil?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-white/30 text-gray-200 transition-all duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohamed-el-bermil-b957861bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-white/30 text-gray-200 transition-all duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                <button
                  onClick={scrollToNext}
                  className="group bg-white/5 text-white px-8 py-4 rounded-full font-semibold border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Découvrir mon travail
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
              </div>

              {/* Right column */}
              <div className="w-full lg:w-1/2 space-y-4">

                {/* Stats 2×2 */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors duration-300"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-gray-100 mb-1 tracking-tight -tracking-[0.02em]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* About compact */}
                <div className="bg-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <h3 className="text-base font-semibold text-gray-100 mb-4 tracking-tight">
                    À Propos
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-base">
                        🎓
                      </span>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Étudiant en 2ᵉ année de BTS SIO SLAM, spécialisé en
                        développement web et nouvelles technologies.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-base">
                        💻
                      </span>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Passionné par la conception d'interfaces intuitives et la
                        résolution de problèmes techniques.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-base">
                        🥊
                      </span>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Sports de combat, randonnée et montage vidéo en dehors
                        du code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-8 h-8 text-gray-600" />
      </div>
    </section>
  );
};

export default Hero;
