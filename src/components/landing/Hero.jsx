import { ArrowRight, FileText, Sparkles, Download } from 'lucide-react';
import { motion } from 'framer-motion';


const skills = [
  "React",
  "Java",
  "Spring Boot",
  "MySQL",
  "REST APIs",
  "Git",
];

const Hero = () => {
  return (
  <section className="relative overflow-hidden bg-slate-50">
    <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
    <div className="pointer-events-none absolute right-10 top-24 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
    <div className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2">
            AI-Powered Career Success
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl font-bold">
            Build Your Perfect
            <span className="block bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Resume with AI
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Create professional, ATS-friendly resumes in minutes with AI-powered suggestions and expert templates.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 font-semibold text-white transition-all duration-200 cursor-pointer hover:shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2">
              Create My Resume
              <ArrowRight size={18} />
            </button>
            <button className="border border-slate-300 bg-white px-6 py-3 rounded-xl font-semibold text-slate-700 cursor-pointer transition-all duration-200 hover:border-violet-400 hover:text-violet-600 inline-flex items-center gap-2">
              <FileText size={18} />
              Explore Templates
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
          {/* AI card */}
          <div transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }} className="absolute top-8 -left-8 w-52 rounded-2xl border border-violet-100 bg-white p-4 shadow-xl hidden sm:block" style={{
            transform:
              "perspective(1000px) rotateY(-25deg) rotateX(11deg) rotateZ(0deg)"
          }}>
            <div className="flex items-center gap-2">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500">
                AI Assistant
              </p>
              <p className="text-sm font-bold text-slate-900">
                Resume Optimized
              </p>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-violet-500 to-blue-500"></div>
            </div>
            <p className="mt-2 text-xs font-medium text-emerald-600">
              ATS Score: 88%
            </p>
          </div>

          {/* Download Resume Card */}
          <div className="absolute bottom-1 -right-3.5 w-40 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl flex items-center gap-3 hidden sm:block" style={{
            transform:
              "perspective(1000px) rotateY(-40deg) rotateX(9deg) rotateZ(0deg)"
          }}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Download size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-500">
                Export ready
              </p>
              <p className="text-sm font-bold text-slate-900">
                Resume.pdf
              </p>
            </div>
          </div>

          {/* Resume Card */}
          <div className="relative w-full max-w-sm  transition-transform duration-300 bg-white rounded-2xl shadow-[0_25px_45px_-15px_rgba(15,23,42,0.25)] border border-slate-200 p-5" style={{transform: "perspective(1800px) rotateY(-20deg) rotateX(11deg) rotateZ(0deg)"}}>
            
            {/* Header Section */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Mohammad Atif</h2>
              <p className="text-sm font-medium text-violet-600">Full Stack Developer</p>
            </div>

            {/* Contact Information Section */}
            <div className="mt-3 flex flex-wrap gap-3">
              <span className="text-xs text-slate-500">mdatif0422@gmail.com</span>
              <span className="text-xs text-slate-500">+91 9014794720</span>
              <span className="text-xs text-slate-500">Pondicherry, India</span>
              <span className="text-xs text-slate-500">LinkedIn</span>
              <span className="text-xs text-slate-500">GitHub</span>
            </div>
            <hr className="my-5 border-slate-200" />

            {/* Professional Summary Section */}
            <div className="mt-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Professional Summary
              </h3>
              <p className="mt-2 text-[11px] leading-5 text-slate-600">
                Full Stack Developer with experience building modern web applications using React, Java, Spring Boot and MySQL.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-700" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Experience Section */}
            <div className="mt-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Experience
              </h3>
              <div className="mt-3">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-bold text-slate-900">
                    Software Developer
                  </p>
                  <p className="text-[10px] text-slate-400">
                    2024 - Present
                  </p>
                </div>
                <p className="mt-1 text-[10px] text-violet-600">
                  Tech Solution Inc.
                </p>
                <ul className="mt-2">
                  <li className="text-[10px] leading-4 text-slate-600">
                    • Developed responsive web applications using React and Spring Boot.
                  </li>
                  <li className="text-[10px] leading-4 text-slate-600">
                    • Designed and integrated REST APIs for web applications.
                  </li>
                  <li className="text-[10px] leading-4 text-slate-600">
                    • Improved application performance and user experience.
                  </li>
                </ul>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Education
              </h3>
              <div className="mt-3">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-bold text-slate-900">
                    M.Tech in Computer Science and Engineering
                  </p>
                  <p className="text-[10px] text-slate-400">
                    2026 - Present
                  </p>
                </div>
                <p className="mt-1 text-[10px] text-violet-600">
                  Pondicherry University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export default Hero;