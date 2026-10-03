import { useNavigate } from "react-router-dom";


const templates = [
  {
    name: "Modern",
  },
  {
    name: "Professional",
  },
  {
    name: "Creative",
  },
];


const Templates = () => {
  const navigate = useNavigate();
  return (
    <section id="templates">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Professional Resume Templates
        </h2>
        <p className="mt-4 text-lg leading-7 text-slate-600">
          Choose a modern, professional template designed to make your resume stand out.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {templates.map((template) => (
          <div
            key={template.name}
            className={`rounded-2xl border bg-white p-4 shadow-sm ${
              template.name === "Creative"
                ? "border-violet-200"
                : "border-slate-200"
            }`}
          >
            <div className={`aspect-[3/4] rounded-lg border p-4 ${
                              template.name === "Professional"
                                ? "border-slate-300 bg-white"
                                : template.name === "Creative"
                                  ? "border-violet-200 bg-violet-50/30"
                                  : "border-slate-200 bg-slate-50"
                            }`}
            >
              {template.name === "Modern" && (
                <div className="mb-3 h-1 rounded-full bg-blue-500" />
              )}

              {template.name === "Professional" && (
                <div className="mb-3 h-px bg-slate-400" />
              )}

              <div
                className={`border-b pb-3 ${
                      template.name === "Creative"
                        ? "border-violet-400 rounded-lg bg-violet-50 p-2"
                        : "border-slate-300"
                    } ${
                      template.name === "Professional" ? "text-center" : "text-left"
                    }`}
              >
                <h3
                  className={`font-bold ${
                        template.name === "Modern"
                          ? "text-lg text-blue-600"
                          : template.name === "Professional"
                            ? "text-base tracking-wide text-slate-900"
                            : "text-lg text-violet-600"
                      }`}
                >
                  Mohammad Atif
                </h3> 
                <p
                  className={`${
                        template.name === "Modern"
                          ? "text-xs font-medium text-blue-600"
                          : template.name === "Professional"
                            ? "text-[10px] uppercase tracking-wide text-slate-500"
                            : "text-xs font-medium text-blue-600"
                      }`}
                >
                  Full Stack Developer
                </p>
              </div>
              
              <div
                className={`mt-3 flex gap-2 ${
                  template.name === "Creative"
                    ? "flex-col"
                    : "flex-wrap"
                } ${
                  template.name === "Professional"
                    ? "justify-center"
                    : "justify-start"
                }`}
              >
                <span className="text-[9px] text-slate-500">
                  mdatif0422@gmail.com
                </span>

                <span className="text-[9px] text-slate-500">
                  Pondicherry, India
                </span>

                <span className="text-[9px] text-slate-500">
                  LinkedIn
                </span>
              </div>

              <div className="mt-4">
                <h4 className={`text-[9px] font-bold uppercase tracking-wide ${
                      template.name === "Professional"
                        ? "border-b border-slate-300 pb-1 text-slate-900"
                        : "text-slate-900"
                    }`}>
                  Professional Summary
                </h4>

                <p className="mt-1 text-[8px] leading-4 text-slate-500">
                  Full Stack Developer experienced in building modern web applications
                  using React, Java, Spring Boot and MySQL.
                </p>
              </div>
              <div className="mt-4">
                <h4 className={`text-[9px] font-bold uppercase tracking-wide ${
                        template.name === "Professional"
                          ? "border-b border-slate-300 pb-1 text-slate-900"
                          : "text-slate-900"
                      }`}>
                  Skills
                </h4>
                <div className={`mt-2 flex flex-wrap gap-1 ${
                        template.name === "Modern"
                          ? "rounded-lg bg-blue-50 p-1"
                          : template.name === "Creative"
                            ? "rounded-lg bg-violet-50 p-1.5"
                            : ""
                      }`}
                >
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[7px] text-slate-600">
                    React
                  </span>
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[7px] text-slate-600">
                    Java
                  </span>

                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[7px] text-slate-600">
                    Spring Boot
                  </span>

                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[7px] text-slate-600">
                    MySQL
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                  <h4 className={`text-[9px] font-bold uppercase tracking-wide ${
                          template.name === "Professional"
                            ? "border-b border-slate-300 pb-1 text-slate-900"
                            : "text-slate-900"
                        }`}>
                    Experience
                  </h4>
                  <div className={`mt-2 ${
                            template.name === "Creative"
                              ? "border-l-2 border-violet-300 pl-2"
                              : ""
                          }`}
                  >
                    <p className="text-[8px] font-semibold text-slate-900">
                      Software Developer
                    </p>

                    <p className="text-[7px] text-violet-600">
                      Tech Solutions Inc.
                    </p>
                    <p className="mt-1 text-[7px] leading-3 text-slate-500">
                      Developed responsive web applications using React and Spring Boot.
                    </p>

                    <p className="text-[7px] leading-3 text-slate-500">
                      Designed REST APIs and integrated databases.
                    </p>
                  </div>
              </div>

              <div className="mt-4">
                <h4 className={`text-[9px] font-bold uppercase tracking-wide ${
                          template.name === "Professional"
                            ? "border-b border-slate-300 pb-1 text-slate-900"
                            : "text-slate-900"
                        }`}>
                  Education
                </h4>

                <div className="mt-2">
                  <p className="text-[8px] font-semibold text-slate-900">
                    M.Tech in Computer Science
                  </p>

                  <p className="text-[7px] text-slate-500">
                    Pondicherry University
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <h4 className={`text-[9px] font-bold uppercase tracking-wide ${
                      template.name === "Professional"
                        ? "border-b border-slate-300 pb-1 text-slate-900"
                        : "text-slate-900"
                    }`}>
                  Projects
                </h4>

                <div className="mt-2">
                  <p className="text-[8px] font-semibold text-slate-900">
                    AI Resume Builder
                  </p>

                  <p className="text-[7px] leading-3 text-slate-500">
                    Built a web application using React, Spring Boot and MySQL.
                  </p>
                </div>
              </div>
              
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900">
                {template.name}
              </h3>

              <button
                onClick={() => navigate("/resume-builder", {
                          state: { template: template.name }
                        })}
                className="rounded-lg px-3 py-1.5 text-xs font-medium text-violet-600
                          transition-colors hover:bg-violet-50"
              >
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Templates;