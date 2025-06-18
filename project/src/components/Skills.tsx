import React, { useEffect, useState, useRef } from 'react';
import { Code, Database, Globe, Palette, Settings, Smartphone } from 'lucide-react';

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
        { name: "Tailwind CSS", level: 95 }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 40 },
        { name: "SQL", level: 50 },
        { name: "MongoDB", level: 30 }
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
        { name: "Slack", level: 90 }
      ]
    }
  ];

  const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }; delay: number }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );

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