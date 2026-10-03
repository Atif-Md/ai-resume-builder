import { Link } from "react-router-dom";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <FileText size={24} className="text-violet-600" />
            <span className="text-lg font-bold text-slate-900">
              AI Resume Builder
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 hidden lg:flex">
            <Link to="/" className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600">
              Home
            </Link>
            <a href="#features" className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600">
              Features
            </a>
            <Link to="#templates" className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600">
              Templates
            </Link>
            <a href="#pricing" className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600">
              FAQ
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600">
              Contact
            </a>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link to="/login" className="text-sm font-medium text-slate-600 cursor-pointer transition-colors hover:text-violet-600">Login</Link>
              <Link to="/register" className="rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">Get Started</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden cursor-pointer rounded-lg p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            { isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>


        {/* mobile menu */}
        {isMenuOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="flex flex-col gap-4 px-6 py-5">
              <Link to="/" className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600">
                Home
              </Link>
              <a href="#features" className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600">
                Features
              </a>
              <Link to="#templates" className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600">
                Templates
              </Link>
              <a href="#pricing" className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600">
                Pricing
              </a>
              <a href="#faq" className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600">
                FAQ
              </a>
              <a href="#contact" className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600">
                Contact
              </a>
              <div className="border-t border-slate-200 pt-4">
                <Link to="/register" className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">Get Started</Link>
                <Link to="/login" className="w-full inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-slate-600 cursor-pointer transition-colors hover:bg-slate-50 hover:text-violet-600">Login</Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;