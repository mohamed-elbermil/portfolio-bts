import React from "react";
import { ChevronDown, MapPin, Mail, Github, Linkedin } from "lucide-react";
import profile from "../assets/images/profile.jpg";
import Reveal from "./Reveal";

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    width={24}
    height={24}
    {...props}
  >
    <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z" />
  </svg>
);

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
                <a
                  href="https://www.behance.net/mohamedelbermil2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-white/30 text-gray-200 shadow-sm hover:shadow transform transition-all duration-200"
                  aria-label="Behance"
                >
                  <BehanceIcon className="w-6 h-6" />
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
                      Étudiant en première année de BTS SIO, je me spécialise
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
