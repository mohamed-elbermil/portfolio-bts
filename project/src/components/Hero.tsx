import React from "react";
import { ChevronDown, MapPin, Mail, Github, Linkedin } from "lucide-react";
import profile from "../assets/images/profile.jpg";
import Reveal from "./Reveal";

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById("veille");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="presentation"
      className="min-h-screen relative overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 flex items-center min-h-screen">
        <Reveal>
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div
              className="w-full lg:w-1/2 text-center lg:text-left profile"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-8">
                <img
                  src={profile}
                  alt="Mohamed EL BERMIL"
                  className="w-full h-full object-cover rounded-full border border-white/20 shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-100 leading-tight tracking-tight -tracking-[0.02em]">
                Mohamed <br /> EL BERMIL
              </h1>

              <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light tracking-wide -tracking-[0.01em]">
                Développeur Web
              </h2>

              <div className="flex justify-center lg:justify-start gap-4 mb-8">
                <a
                  href="https://github.com/mohamed-elbermil?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-white/30 text-gray-200 shadow-sm hover:shadow transform transition-all duration-200"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-el-bermil-b957861bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-white/30 text-gray-200 shadow-sm hover:shadow transform transition-all duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>               
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-300 mb-12">
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
                  <MapPin className="w-5 h-5" />
                  <span className="text-gray-200">Lyon, France</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
                  <Mail className="w-5 h-5" />
                  <a
                    href="mailto:melbermil@outlook.fr"
                    className="text-gray-200 hover:text-white transition-colors duration-200"
                  >
                    melbermil@outlook.fr
                  </a>
                </div>
              </div>

              <button
                onClick={scrollToNext}
                className="group bg-white/5 text-white px-10 py-5 rounded-full font-semibold text-xl border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Découvrir mon travail
                  <ChevronDown className="w-6 h-6 ml-2 inline-block" />
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white/3 backdrop-blur-xl rounded-2xl p-10 border border-white/10 transform transition-transform duration-300">
                <h3 className="text-3xl font-bold text-gray-100 mb-8 text-center tracking-tight -tracking-[0.01em]">
                  À Propos de Moi
                </h3>

                <div className="space-y-8">
                  <div className="p-6 rounded-2xl bg-white/3 backdrop-blur-xl border border-white/10">
                    <h4 className="text-xl font-semibold text-gray-100 mb-3 flex items-center">
                      <span className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center mr-3">
                        🎓
                      </span>
                      Formation
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Étudiant en deuxième année de BTS SIO (SLAM), je me spécialise
                      dans le développement web et les nouvelles technologies.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/3 backdrop-blur-xl border border-white/10">
                    <h4 className="text-xl font-semibold text-gray-100 mb-3 flex items-center">
                      <span className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center mr-3">
                        💻
                      </span>
                      Ma Passion
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Le développement web m'attire par sa créativité et sa
                      diversité. J'aime particulièrement :
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                        Concevoir des interfaces intuitives et élégantes
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                        Résoudre des défis techniques complexes
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                        Transformer des idées en solutions concrètes
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/3 backdrop-blur-xl border border-white/10">
                    <h4 className="text-xl font-semibold text-gray-100 mb-3 flex items-center">
                      <span className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center mr-3">
                        🏃
                      </span>
                      En dehors du code
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Pour maintenir un équilibre, je pratique :
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                        Les sports de combat pour la discipline et l'énergie
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                        La randonnée pour me ressourcer en pleine nature
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-8 h-8 text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;
