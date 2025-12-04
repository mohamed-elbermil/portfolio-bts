import { useEffect, useState, useRef } from 'react';
import { Code, Database, Palette, Settings } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 95 },
        { name: "JS", level: 60 },
        { name: "php", level: 50 },
        { name: "Bootstrap", level: 70 },
        { name: "React/Next.js", level: 50 },
        { name: "Vue.js", level: 60 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Wordpress", level: 90 },
        { name: "Webflow", level: 90 }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 40 },
        { name: "SQL", level: 50 },
        { name: "MongoDB", level: 30 },
        { name: "Python", level: 30 },
      ]
    },
   
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design",
      skills: [
        { name: "Photoshop", level: 70 },
        { name: "Illustrator", level: 70 },
        { name: "Indesign", level: 70 },
        { name: "After Effect", level: 70 },
        { name: "Canva", level: 70 },
        { name: "Figma", level: 95 },
        { name: "Prototyping", level: 95 }
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Outils",
      skills: [
        { name: "Git", level: 95 },
        { name: "Gitlab", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Slack", level: 90 },
        { name: "Notion", level: 90 },
        { name: "GSAP", level: 90 },
      ]
    }
  ];

  const getLevelColors = (level: number) => {
    if (level >= 90) return "bg-blue-50 border-blue-100";
    if (level >= 70) return "bg-purple-50 border-purple-100";
    if (level >= 50) return "bg-amber-50 border-amber-100";
    return "bg-slate-50 border-slate-100";
  };

  const getAccentGradient = (level: number) => {
    if (level >= 90) return "from-blue-500 via-indigo-500 to-purple-500";
    if (level >= 70) return "from-purple-500 via-violet-500 to-pink-500";
    if (level >= 50) return "from-amber-500 via-orange-500 to-rose-500";
    return "from-slate-500 via-slate-400 to-slate-300";
  };

  const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }; delay: number }) => {
    const levelColors = getLevelColors(skill.level);
    const accentGradient = getAccentGradient(skill.level);

    return (
      <div
        className={`mb-3 transform transition duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className={`relative flex items-center justify-between overflow-hidden rounded-2xl border px-4 py-4 shadow-sm hover:shadow-md ${levelColors}`}>
          <span className={`pointer-events-none absolute inset-x-4 top-0 h-1 rounded-full bg-gradient-to-r ${accentGradient}`} />
          <div className="relative">
            <p className="text-sm font-semibold text-gray-900">{skill.name}</p>
          </div>
          <div className="text-right text-xs uppercase tracking-widest text-gray-500">
            
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="competences" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Compétences Techniques
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une expertise polyvalente couvrant tout l'écosystème de développement moderne,
            de la conception à la mise en production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    delay={categoryIndex * 200 + skillIndex * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-2 gap-6">
          {[
            { number: "4+", label: "Années d'expérience" },
            { number: "20+", label: "Technologies maîtrisées" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;