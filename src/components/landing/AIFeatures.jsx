import {
  Sparkles,
  WandSparkles,
  SearchCheck,
  Target,
  Brain,
} from "lucide-react";


  const aiFeatures = [
    {
      title: "AI Resume Writing",
      description: "Generate stronger summaries, bullet points, and professional content.",
      icon: WandSparkles,
    },
    {
      title: "ATS Analysis",
      description: "Analyze your resume for ATS compatibility and keyword coverage.",
      icon: SearchCheck,
    },
    {
      title: "Job Matching",
      description: "Compare your resume with a job description and identify relevant matches.",
      icon: Target,
    },
    {
      title: "Skill Gap Analysis",
      description: "Discover important skills missing for your target role.",
      icon: Brain,
    },
  ];



  const AIFeatures = () => {
    return (
      <section id="ai-features" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* left column */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2">
                AI-Powered Intelligence
              </div>
              <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                AI-Powered Resume Intelligence
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-7 text-slate-600">
                Let AI help you create, optimize, and tailor your resume for the jobs you want.
              </p>
              <div className="mt-8 space-y-4">
                {aiFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-white hover:shadow-sm cursor-pointer">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                      <feature.icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* right column */}
            <div>
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-violet-300/20 blur-3xl"> </div>
                <div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-2xl rotate-[1.5deg]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* icon container */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                        <Sparkles size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        AI Resume Analysis
                      </h3>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                      AI Optimized
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">
                    Your resume performance at a glance
                  </p>

                  {/* AI analysis card */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">
                        ATS Score
                      </span>

                      <span className="text-2xl font-bold text-violet-600">
                        88%
                      </span>
                    </div>

                    {/* score bar */}
                    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-violet-500 to-blue-500"></div>
                    </div>

                    {/* metric grid */}
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      {/* first metric */}
                      <div>
                        <p className="text-xs text-slate-500">
                          Keywords
                        </p>
                        <p className="mt-1 text-lg font-bold text-slate-900">
                          24/28
                        </p>
                      </div>
                      {/* second metric */}
                      <div>
                        <p className="text-xs text-slate-500">
                          Skills Match
                        </p>

                        <p className="mt-1 text-lg font-bold text-slate-900">
                          86%
                        </p>
                      </div>
                      {/* third metric */}
                      <div>
                        <p className="text-xs text-slate-500">
                          Experience
                        </p>

                        <p className="mt-1 text-lg font-bold text-slate-900">
                          92%
                        </p>
                      </div>
                    </div>
                    <button className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-200  hover:bg-violet-600 cursor-pointer">
                      View Detailed Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default AIFeatures;