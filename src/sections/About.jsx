import React from "react";
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-2 text-indigo-400">
            <Sparkles size={18} />

            <span className="text-sm font-semibold uppercase tracking-widest">
              About Me
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Building clean and meaningful
            <span className="text-indigo-400"> web experiences.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            I'm a Frontend Web Developer with hands-on experience
            building responsive web applications using React.js,
            JavaScript and modern frontend technologies.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">

          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              A little about me
            </h3>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-400">
              <p>
                I enjoy turning ideas into responsive and
                user-friendly interfaces. My primary focus is
                frontend development with React.js, JavaScript
                and Tailwind CSS.
              </p>

              <p>
                During my experience as a React.js Developer
                at Skillsvarz Gravity Coding Pvt. Ltd., I worked
                on frontend applications and also mentored junior
                interns on React.js fundamentals, project
                structure and reusable component design.
              </p>

              <p>
                I also enjoy working with REST APIs, responsive
                design, Git and modern development tools to build
                practical web applications.
              </p>
            </div>

            {/* Location */}
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
              <MapPin size={18} className="text-indigo-400" />

              <span>Jabalpur, Madhya Pradesh, India</span>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

            {/* Experience Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-900">
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  <BriefcaseBusiness size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Experience
                  </p>

                  <h4 className="mt-1 font-semibold text-white">
                    React.js Developer
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Oct 2025 – Feb 2026
                  </p>
                </div>

              </div>
            </div>

            {/* Education Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-900">
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  <GraduationCap size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Education
                  </p>

                  <h4 className="mt-1 font-semibold text-white">
                    B.Tech Computer Science
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    CGPA — 7.56
                  </p>
                </div>

              </div>
            </div>

            {/* Focus Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-900">
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Code2 size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Primary Focus
                  </p>

                  <h4 className="mt-1 font-semibold text-white">
                    Frontend Development
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    React.js & Modern UI
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Tech Stack */}
        <div className="mt-16 border-t border-slate-800 pt-10">

          <p className="mb-5 text-sm font-medium uppercase tracking-widest text-slate-500">
            Technologies I work with
          </p>

          <div className="flex flex-wrap gap-3">

            {[
              "React.js",
              "JavaScript",
              "Tailwind CSS",
              "HTML5",
              "CSS3",
              "Redux",
              "REST API",
              "Git",
              "GitHub",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition-colors duration-300 hover:border-indigo-500/30 hover:text-indigo-400"
              >
                {technology}
              </span>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;