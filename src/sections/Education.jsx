import React from "react";

import {
  Award,
  BookOpen,
  CalendarDays,
  GraduationCap,
  MapPin,
} from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institute: "Gyan Ganga College of Technology",
    location: "Jabalpur, Madhya Pradesh",
    duration: "2022 – 2026",
    score: "CGPA — 7.56",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Education",
    field: "Class XII",
    institute: "Senior Secondary Education",
    location: "Madhya Pradesh",
    duration: "2021 – 2022",
    score: "83.2%",
    icon: BookOpen,
  },
  {
    degree: "Secondary Education",
    field: "Class X",
    institute: "Secondary Education",
    location: "Madhya Pradesh",
    duration: "2019 – 2020",
    score: "86.8%",
    icon: Award,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-950 px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Education
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            My academic journey
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            My academic background and the foundation that helped
            me build my career in computer science and frontend
            development.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mt-14">

          {/* Timeline Line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-slate-800 md:block" />

          <div className="space-y-6">

            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.degree}
                  className="relative md:pl-16"
                >

                  {/* Timeline Icon */}
                  <div className="absolute left-0 top-7 hidden h-12 w-12 items-center justify-center rounded-full border border-indigo-500/30 bg-slate-950 text-indigo-400 md:flex">
                    <Icon size={21} />
                  </div>

                  {/* Education Card */}
                  <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-slate-900 sm:p-7">

                    {/* Top */}
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                      <div className="flex gap-4">

                        {/* Mobile Icon */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 md:hidden">
                          <Icon size={20} />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-indigo-400">
                            {item.field}
                          </p>

                          <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                            {item.degree}
                          </h3>

                          <p className="mt-2 text-sm text-slate-400">
                            {item.institute}
                          </p>
                        </div>

                      </div>

                      {/* Duration */}
                      <div className="flex w-fit items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-400">
                        <CalendarDays size={16} />

                        <span>
                          {item.duration}
                        </span>
                      </div>

                    </div>

                    {/* Bottom Info */}
                    <div className="mt-6 flex flex-col gap-4 border-t border-slate-800 pt-5 sm:flex-row sm:items-center sm:justify-between">

                      {/* Location */}
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={16} />

                        <span>
                          {item.location}
                        </span>
                      </div>

                      {/* Score */}
                      <div className="flex items-center gap-2">
                        <Award
                          size={17}
                          className="text-indigo-400"
                        />

                        <span className="text-sm font-semibold text-slate-200">
                          {item.score}
                        </span>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 rounded-2xl border border-indigo-500/10 bg-indigo-500/[0.03] p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
              <GraduationCap size={22} />
            </div>

            <div>
              <p className="font-semibold text-white">
                Computer Science & Engineering
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Building a strong foundation in computer science
                while developing practical skills in modern web
                development.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;