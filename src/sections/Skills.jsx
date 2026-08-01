import React from "react";

import {
  Code2,
  Palette,
  Database,
  GitBranch,
  Cloud,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive web experiences.",
    icon: Code2,
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Redux",
      "Tailwind CSS",
      "Context API",
      "REST API",
      "Responsive Design",
    ],
  },
  {
    title: "UI / UX Design",
    description: "Designing clean interfaces and user-focused experiences.",
    icon: Palette,
    skills: [
      "Figma UI Design",
      "Framer",
      "WordPress",
    ],
  },
  {
    title: "Database",
    description: "Working with basic database concepts and data.",
    icon: Database,
    skills: [
      "MySQL (Basic)",
    ],
  },
  {
    title: "Version Control & Tools",
    description: "Tools I use for development and project workflow.",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "npm",
      "Microsoft Excel",
    ],
  },
  {
    title: "Deployment & Hosting",
    description: "Deploying and hosting frontend applications.",
    icon: Cloud,
    skills: [
      "Netlify",
      "Vercel",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            My Skills
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            A collection of technologies and tools I use to build
            modern, responsive and scalable web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-slate-900"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-colors duration-300 group-hover:bg-indigo-500/15">
                    <Icon size={23} />
                  </div>

                  <span className="text-xs text-slate-600">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-indigo-500/30 hover:text-indigo-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 rounded-2xl border border-indigo-500/10 bg-indigo-500/[0.03] px-6 py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-semibold text-white">
                Always learning, always building.
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Exploring better ways to create fast and meaningful
                digital experiences.
              </p>
            </div>

            <Code2
              size={24}
              className="hidden text-indigo-400 sm:block"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;