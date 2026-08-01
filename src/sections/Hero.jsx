import React from "react";
import {
  ArrowUpRight,
  Download,
  Code2,
  Sparkles,
  CatIcon,
  NewspaperIcon,
} from "lucide-react";

import profileImage from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">

        {/* ================= LEFT CONTENT ================= */}

        <div className="relative z-10">

          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

            <span className="text-sm font-medium text-emerald-300">
              Open to opportunities
            </span>
          </div>

          {/* Greeting */}
          <p className="mb-3 text-lg font-medium text-slate-400">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Anand Raj
            <span className="mt-1 block bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Tiwari
            </span>
          </h1>

          {/* Role */}
          <div className="mt-6 flex items-center gap-3">
            <Code2 className="text-indigo-400" size={24} />

            <h2 className="text-2xl font-semibold text-slate-200 sm:text-3xl">
              Frontend Developer
            </h2>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I build modern, responsive and user-friendly web
            applications using React, JavaScript and Tailwind CSS.
            I enjoy turning ideas into clean and interactive
            digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            {/* Projects */}
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500"
            >
              View My Projects

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Resume */}
            <a
              href="/resume/Anand-Raj-Tiwari-Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800"
            >
              <Download size={17} />

              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center gap-4">

            <span className="text-sm text-slate-500">
              Connect with me
            </span>

            {/* GitHub */}
            <a
              href="https://github.com/anand-128"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white"
            >
              <CatIcon size={19} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anandrajtiwari/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white"
            >
              <NewspaperIcon size={19} />
            </a>
          </div>
        </div>

        {/* ================= RIGHT PROFILE ================= */}

        <div className="relative flex items-center justify-center lg:justify-end">

          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl sm:h-96 sm:w-96" />

          {/* Profile wrapper */}
          <div className="relative">

            {/* Outer ring */}
            <div className="absolute -inset-5 rounded-full border border-indigo-500/20" />

            <div className="absolute -inset-10 rounded-full border border-slate-800/50" />

            {/* Profile image */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-slate-800 bg-slate-900 shadow-2xl shadow-indigo-900/40 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <img
                src={profileImage}
                alt="Anand Raj Tiwari"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Developer badge */}
            <div className="absolute -bottom-5 -left-8 hidden items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                <Code2 size={19} />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Building with
                </p>

                <p className="text-sm font-semibold text-white">
                  React & Tailwind
                </p>
              </div>
            </div>

            {/* Available badge */}
            {/* <div className="absolute -right-5 top-8 hidden items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex">
              <Sparkles
                size={17}
                className="text-emerald-400"
              />

              <span className="text-sm font-medium text-slate-200">
                Open to Work
              </span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-slate-300 sm:flex"
      >
        <span className="text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="h-8 w-px bg-gradient-to-b from-slate-500 to-transparent" />
      </a>
    </section>
  );
};

export default Hero;