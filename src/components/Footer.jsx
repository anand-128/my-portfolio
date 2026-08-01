import React from "react";

import {
  ArrowUp,
  Mail,
  Heart,
  CatIcon,
  NewspaperIcon,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Logo / Name */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-white"
            >
              Anand
              <span className="text-indigo-400">.</span>
            </a>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Frontend Developer focused on building clean,
              responsive and meaningful web experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/anand-128"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
            >
              <CatIcon size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/anandrajtiwari/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
            >
              <NewspaperIcon size={18} />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
            >
              <Mail size={18} />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {currentYear} Anand Raj Tiwari. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Made with
            <Heart
              size={14}
              className="fill-indigo-400 text-indigo-400"
            />
            using React & Tailwind CSS
          </p>

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="group flex items-center gap-2 text-slate-500 transition-colors hover:text-white"
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 transition-all duration-300 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10">
              <ArrowUp
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;