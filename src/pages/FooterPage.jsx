import { Link } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  Heart,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function FooterPage() {

  const footerLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms", path: "/terms-and-conditions" },
  { label: "Cookies", path: "/cookies-policy" },
];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Floating CTA Banner */}
      <div className="relative top-5 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-blue-900 to-indigo-900 rounded-2xl shadow-2xl p-6 sm:p-8 transition-transform duration-300">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <Sparkles className="text-yellow-300" size={18} />
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-yellow-100">
                  FREE ACCESS
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Start Learning Today
              </h3>

              <p className="text-sm sm:text-base text-blue-100 max-w-xl">
                Unlock all NCERT chapters, solutions, and interactive exercises
              </p>
            </div>

            <Link
              to="/dashboard"
              className="group bg-white text-blue-900 font-semibold py-3 px-6 sm:px-8 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:bg-gray-300"
            >
              Go to Dashboard
              <ArrowRight size={18} className="transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                <img
                  src="assets/images/Ncert_Learn.svg"
                  alt="NCERTLearn Logo"
                  className="w-7 h-7 object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  NCERT<span className="text-blue-400">Learn</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">
                  Empowering Future Learners
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-300 max-w-md">
              Your comprehensive learning platform for NCERT curriculum from
              Class 6 to 10 with interactive tutorials, exercises, and progress
              tracking.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {[{ icon: FaFacebookF, color: "hover:bg-blue-600" },
                { icon: FaInstagram, color: "hover:bg-pink-600" },
                { icon: FaYoutube, color: "hover:bg-red-600" },
                { icon: FaWhatsapp, color: "hover:bg-green-600" },
                { icon: FaLinkedin, color: "hover:bg-blue-700" }].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-300 ${social.color} hover:text-white transition-colors`}
                  >
                    <social.icon size={18} />
                  </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[{ path: "/dashboard", label: "Dashboard", icon: GraduationCap },
                { path: "/tutorials", label: "Tutorials", icon: BookOpen },
                { path: "/exercises", label: "Exercises", icon: CheckCircle },
                { path: "/progress", label: "Progress", icon: CheckCircle },
                { path: "/notes", label: "Notes", icon: BookOpen }].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                      <link.icon size={16} className="group-hover:text-blue-400" />
                      {link.label}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Classes</h3>
            <div className="grid grid-cols-2 gap-2">
              {[6, 7, 8, 9, 10].map((grade) => (
                <Link
                  key={grade}
                  to={`/tutorials/class/${grade}`}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-center text-sm text-gray-300 hover:text-white transition"
                >
                  Class {grade}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <Mail size={16} className="text-blue-400" />
                <a
                  href="mailto:support@ncertlearn.com"
                  className="hover:text-white"
                >
                  support@ncertlearn.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:+919852858089" className="hover:text-white">
                  +91 9852858089
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <span>
                  NCERT Learning Center,
                  <br />
                  New Ashok Nagar Delhi, India 110096
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          {/* Left side: Copyright + policies */}
          <div className="text-center sm:text-left">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} NCERTLearn. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2">
              {footerLinks.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="text-gray-500 hover:text-gray-300 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: Made for students + Founder */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-400">
            <div className="flex items-center gap-2">
              <Heart
                size={14}
                className="text-red-500 fill-red-500"
                strokeWidth={3}
              />
              <span>Made for students</span>
            </div>

            <span className="hidden sm:inline text-base">&bull;</span>

            <p>
              Founded & Developed by{" "}
              <Link
                to="/founder"
                className="text-white hover:text-blue-500 transition-colors font-medium"
              >
                Aasif Noor
              </Link>
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            Disclaimer: This platform is an independent educational resource and
            is not officially affiliated with NCERT. All materials are for
            educational purposes only.
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 bg-blue-900 hover:bg-blue-800 text-white rounded-full shadow-lg flex items-center justify-center transition hover:scale-110 z-50 cursor-pointer"
        aria-label="Back to top"
      >
        <ArrowRight className="rotate-90" size={18} strokeWidth={4} />
      </button>
    </footer>
  );
}
