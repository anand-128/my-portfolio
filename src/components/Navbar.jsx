import React from "react";
import { useEffect, useState } from "react";
import {
  CatIcon,
  Download,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );
  }, [darkMode]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">

        {/* ================= LOGO ================= */}

        <a
          href="#home"
          onClick={handleNavClick}
          className="text-xl font-bold tracking-tight text-white"
        >
          Anand
          <span className="text-indigo-400">.</span>
        </a>

        {/* ================= DESKTOP NAV ================= */}

        <div className="hidden items-center gap-7 lg:flex">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* ================= DESKTOP ACTIONS ================= */}

        <div className="hidden items-center gap-3 lg:flex">

          {/* Theme Button */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
          >
            {darkMode ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/anand-128"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
            aria-label="GitHub"
          >
            <CatIcon size={18} />
          </a>

          {/* Resume */}
          <a
            href="/resume/Anand-Raj-Tiwari-Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-500"
          >
            <Download size={16} />

            Resume
          </a>

        </div>

        {/* ================= MOBILE ACTIONS ================= */}

        <div className="flex items-center gap-2 lg:hidden">

          {/* Theme */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400"
          >
            {darkMode ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400"
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

        </div>

      </nav>

      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 lg:hidden">

          <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8">

            <div className="flex flex-col">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="border-b border-slate-800/70 py-4 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Resume */}
              <a
                href="/resume/Anand-Raj-Tiwari-Resume.pdf"
                download
                onClick={handleNavClick}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-indigo-500"
              >
                <Download size={16} />

                Download Resume
              </a>

              {/* Mobile GitHub */}
              <a
                href="https://github.com/anand-128"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 px-4 py-3 text-sm font-medium text-slate-300 transition-colors duration-300 hover:bg-slate-900 hover:text-white"
              >
                <CatIcon size={17} />

                GitHub
              </a>

            </div>

          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;