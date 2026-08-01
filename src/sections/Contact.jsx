import React from "react";

import {
  ArrowUpRight,
  CatIcon,
  Mail,
  MapPin,
  NewspaperIcon,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:px-8 lg:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's build something
            <span className="text-indigo-400"> together.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            Have a project, opportunity or just want to say hello?
            Feel free to reach out. I'd love to hear from you.
          </p>

        </div>

        {/* Contact Content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ================= LEFT ================= */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">

            <h3 className="text-xl font-semibold text-white">
              Get in touch
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              I'm always open to discussing frontend development,
              interesting projects and new opportunities.
            </p>

            {/* Email */}
            <a
              href="mailto:your-email@example.com"
              className="group mt-8 flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4 transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-900"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Email
                </p>

                <p className="mt-1 text-sm font-medium text-slate-200">
                  tiwarianandraj@example.com
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="ml-auto text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-400"
              />
            </a>

            {/* Location */}
            <div className="mt-4 flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Location
                </p>

                <p className="mt-1 text-sm font-medium text-slate-200">
                  Jabalpur, Madhya Pradesh, India
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">

              <p className="text-sm font-medium text-slate-300">
                Connect with me
              </p>

              <div className="mt-4 flex gap-3">

                <a
                  href="https://github.com/anand-128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
                  aria-label="GitHub"
                >
                  <CatIcon size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/anandrajtiwari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <NewspaperIcon size={19} />
                </a>

              </div>

            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <Send size={20} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Send me a message
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  I'll get back to you as soon as possible.
                </p>
              </div>

            </div>

            <form
              className="mt-8 space-y-5"
              onSubmit={(event) => event.preventDefault()}
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500"
              >
                Send Message

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl border border-indigo-500/10 bg-indigo-500/[0.03] p-6 text-center sm:p-8">

          <p className="text-sm text-slate-500">
            Looking for a frontend developer?
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            Let's create something great together.
          </h3>

          <a
            href="mailto:your-email@example.com"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Start a conversation

            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;