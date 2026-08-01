import React from "react";

import { useRef } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe,
  MessageCircle,
  ShoppingCart,
  BookOpen,
  CatIcon,
} from "lucide-react";

import gravityCodingImage from "../assets/gravity-coding.png";
import groceryKaroImage from "../assets/grocery-karo.png";
import chatAppImage from "../assets/chat-app.png";
import blogWebsiteImage from "../assets/blog-website.png";

const projects = [
  {
    number: "01",
    title: "Gravity Coding Official Website",
    description:
      "A modern and responsive website built for Gravity Coding with a clean interface and structured frontend experience.",
    image: gravityCodingImage,
    icon: Globe,
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    liveLink: "https://gravitycoding.com/",
    githubLink: "https://github.com/anand-128",
  },

  {
    number: "02",
    title: "GroceryKaro",
    description:
      "A responsive grocery shopping website designed to provide a smooth and user-friendly online shopping experience.",
    image: groceryKaroImage,
    icon: ShoppingCart,
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "Responsive Design"
    ],
    liveLink: "https://grocerykro.vercel.app/",
    githubLink: "https://github.com/anand-128",
  },

  {
    number: "03",
    title: "Chat App",
    description:
      "A responsive chat application with a clean interface, user-based conversations and API integration.",
    image: chatAppImage,
    icon: MessageCircle,
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "Responsive Design"
    ],
    liveLink: "https://chat-app-m9gh.vercel.app/",
    githubLink: "https://github.com/anand-128",
  },

  {
    number: "04",
    title: "Blog Website",
    description:
      "A modern blog website focused on clean content presentation, responsive layouts and an engaging reading experience.",
    image: blogWebsiteImage,
    icon: BookOpen,
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    liveLink: "https://blog-website-one-steel.vercel.app/",
    githubLink: "https://github.com/anand-128",
  },
];

const Projects = () => {
  const projectsContainer = useRef(null);

  const scrollProjects = (direction) => {
    if (!projectsContainer.current) return;

    const scrollAmount = 420;

    projectsContainer.current.scrollBy({
      left:
        direction === "left"
          ? -scrollAmount
          : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
              Projects
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Things I've built
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              A selection of projects where I have applied my
              frontend development skills to build practical,
              responsive and user-friendly web experiences.
            </p>

          </div>

          {/* ================= ARROWS ================= */}

          <div className="flex items-center gap-3">

            <button
              type="button"
              onClick={() => scrollProjects("left")}
              aria-label="Previous projects"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={() => scrollProjects("right")}
              aria-label="Next projects"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white"
            >
              <ArrowRight size={19} />
            </button>

          </div>

        </div>

        {/* ================= PROJECTS ================= */}

        <div
          ref={projectsContainer}
          className="mt-14 flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="group relative flex w-[85vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 sm:w-[420px] lg:w-[430px]"
              >

                {/* ================= IMAGE ================= */}

                <div className="relative h-64 overflow-hidden">

                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-indigo-950/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Project Number */}
                  <span className="absolute left-5 top-5 rounded-lg border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-semibold tracking-widest text-white backdrop-blur-md">
                    {project.number}
                  </span>

                  {/* Project Icon */}
                  <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-indigo-300 backdrop-blur-md">
                    <Icon size={20} />
                  </div>

                </div>

                {/* ================= CONTENT ================= */}

                <div className="flex flex-1 flex-col p-6">

                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:border-slate-700 group-hover:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 flex items-center gap-3">

                    {/* Live Project */}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-500"
                    >
                      View Project

                      <ExternalLink
                        size={16}
                        className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                      />
                    </a>

                    {/* GitHub */}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800 hover:text-white"
                    >
                      <CatIcon size={18} />
                    </a>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* ================= BOTTOM INFO ================= */}

        <div className="mt-8 flex items-center justify-between">

          <p className="text-sm text-slate-600">
            Scroll or use the arrows to explore my projects
          </p>

          <a
            href="https://github.com/anand-128"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            <CatIcon size={17} />

            More on GitHub

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Projects;