import React from "react";

import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Experience
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Where I've worked
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            My professional experience and the work I have done
            while growing as a frontend developer.
          </p>
        </div>

        {/* Experience */}
        <div className="relative mt-14">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-800 md:block" />

          <div className="relative md:pl-16">

            {/* Timeline Dot */}
            <div className="absolute left-0 top-8 hidden h-11 w-11 items-center justify-center rounded-full border border-indigo-500/30 bg-slate-950 text-indigo-400 md:flex">
              <BriefcaseBusiness size={20} />
            </div>

            {/* Experience Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-900 sm:p-8">

              {/* Header */}
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 md:hidden">
                      <BriefcaseBusiness size={19} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        React.js Developer Intern
                      </h3>

                      <p className="mt-1 font-medium text-indigo-400">
                        Skillsvarz Gravity Coding Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-400">
                  <CalendarDays size={16} />

                  <span>
                    Oct 2025 – Feb 2026
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={16} />

                <span>
                  India
                </span>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-slate-800" />

              {/* Description */}
              <p className="max-w-4xl text-base leading-8 text-slate-400">
                Worked as a React.js Developer Intern, contributing
                to frontend applications while working with modern
                React.js development practices.
              </p>

              {/* Responsibilities */}
              <div className="mt-7">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                  What I worked on
                </h4>

                <div className="mt-5 space-y-4">

                  <div className="flex gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-indigo-400"
                    />

                    <p className="text-sm leading-7 text-slate-400">
                      Worked on frontend applications using
                      React.js and modern frontend technologies.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-indigo-400"
                    />

                    <p className="text-sm leading-7 text-slate-400">
                      Worked with project structure and reusable
                      component-based development.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-indigo-400"
                    />

                    <p className="text-sm leading-7 text-slate-400">
                      Mentored junior interns on React.js fundamentals,
                      project structure and reusable components.
                    </p>
                  </div>

                </div>
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                  Technologies
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">

                  {[
                    "React.js",
                    "JavaScript",
                    "HTML5",
                    "CSS3",
                    "Tailwind CSS",
                    "Redux",
                    "REST API",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-indigo-500/30 hover:text-indigo-400"
                    >
                      {technology}
                    </span>
                  ))}

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;