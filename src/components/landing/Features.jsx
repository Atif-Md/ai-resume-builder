import {
  FileText,
  LayoutTemplate,
  Download,
  FolderOpen,
  icons,
} from "lucide-react";



const features = [
  {
    title: "Resume Builder",
    description: "Create and edit your professional resume easily.",
    icon: FileText,
  },
  {
    title: "Professional Templates",
    description: "Choose from modern, ATS-friendly resume templates.",
    icon: LayoutTemplate,
  },
  {
    title: "PDF Export",
    description: "Download your completed resume as a high-quality PDF.",
    icon: Download,
  },
  {
    title: "Resume Manager",
    description: "Save and manage multiple resumes in one place.",
    icon: FolderOpen,
  },
];


const Features = () => {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Everything you need to create a professional, ATS-friendly resume with ease.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-violet-200 cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <feature.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;