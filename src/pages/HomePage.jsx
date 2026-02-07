import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, CheckCircle, Sparkles } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,        // important for production
      offset: 80,
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-900 to-indigo-900 text-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div
            className="text-center md:text-left"
            data-aos="fade-right"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Learn NCERT <br /> Class 6 to 10
            </h1>

            <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-lg mx-auto md:mx-0">
              Read chapter-wise NCERT books, practice questions, and understand
              concepts easily.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/exercises"
                className="bg-white text-blue-900 px-5 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 text-center transition"
              >
                Get Started
              </Link>
              <Link
                to="/tutorials"
                className="border border-white px-5 sm:px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 text-center transition"
              >
                Browse Classes
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative md:w-115 w-[90%] h-64 lg:h-80 mx-auto md:mx-0"
            data-aos="fade-left"
          >
            <img
              src="assets/images/Biology.jpg"
              alt="NCERT Biology"
              className="absolute w-32 lg:w-40 rotate-[-18deg] top-0 left-0 lg:left-4 shadow-xl z-10 transition-transform duration-300 hover:scale-105 border-2 border-white"
              data-aos="zoom-in"
            />

            <img
              src="assets/images/Mathmatics.jpg"
              alt="NCERT Mathematics"
              className="absolute w-32 lg:w-40 rotate-15 top-4 right-0 lg:right-4 shadow-xl z-20 transition-transform duration-300 hover:scale-105 border-2 border-white"
              data-aos="zoom-in"
              data-aos-delay="100"
            />

            <img
              src="assets/images/Chemistry.jpg"
              alt="NCERT Chemistry"
              className="absolute w-32 lg:w-40 rotate-[-8deg] bottom-4 left-8 lg:left-14 shadow-xl z-30 transition-transform duration-300 hover:scale-105 border-2 border-white"
              data-aos="zoom-in"
              data-aos-delay="200"
            />

            <img
              src="assets/images/Physics.jpg"
              alt="NCERT Physics"
              className="absolute w-36 lg:w-44 rotate-25 bottom-0 right-8 lg:right-12 shadow-2xl z-40 transition-transform duration-300 hover:scale-105 border-2 border-white"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10"
            data-aos="fade-up"
          >
            📚 Classes We Cover
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-2xl mx-auto">
            {[6, 7, 8, 9, 10].map((cls, i) => (
              <Link
                key={cls}
                to={`/tutorials/class/${cls}`}
                className="bg-white shadow rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition hover:scale-[1.02]"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <GraduationCap className="mx-auto text-blue-900 mb-2 md:mb-3 w-8 h-8 md:w-10 md:h-10" />
                <h3 className="font-semibold text-sm md:text-base">
                  Class {cls}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center justify-center gap-2 mb-8 md:mb-10"
            data-aos="fade-up"
          >
            <Sparkles className="text-yellow-400" size={28} />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Why Choose NCERTLearn?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Feature
              icon={<BookOpen className="text-blue-900 w-8 h-8 md:w-10 md:h-10" />}
              title="NCERT Focused"
              desc="Strictly based on NCERT syllabus."
              aos="fade-up"
            />
            <Feature
              icon={<CheckCircle className="text-green-600 w-8 h-8 md:w-10 md:h-10" />}
              title="Solved Questions"
              desc="Step-by-step easy solutions."
              aos="fade-up"
              delay="150"
            />
            <Feature
              icon={<GraduationCap className="text-purple-900 w-8 h-8 md:w-10 md:h-10" />}
              title="Student Friendly"
              desc="Simple language & clean UI."
              aos="fade-up"
              delay="300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, desc, aos, delay }) {
  return (
    <div
      className="bg-white p-5 md:p-6 rounded-xl shadow text-center hover:shadow-lg transition h-full"
      data-aos={aos}
      data-aos-delay={delay}
    >
      <div className="mb-3 md:mb-4 flex justify-center">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{desc}</p>
    </div>
  );
}
