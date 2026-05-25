import React from "react";

const techs = [
  "React", "Vue.js", "TypeScript", "Node.js", "MongoDB", "SCSS", "Figma",
  "Tailwind", "WordPress", "Docker", "Express.js", "Python", "Git", "RGAA",
  "Next.js", "n8n", "Agile / Scrum", "GitLab",
];

const Marquee = () => (
  <div className="overflow-hidden border-y border-white/10 py-5 bg-white/[0.01]">
    <div className="flex whitespace-nowrap animate-marquee w-max">
      {[...techs, ...techs].map((tech, i) => (
        <span
          key={i}
          className="inline-flex items-center text-gray-600 text-xs font-medium uppercase tracking-[0.18em] px-7"
        >
          {tech}
          <span className="ml-7 w-1 h-1 bg-white/15 rounded-full" />
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
