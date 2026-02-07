import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const FounderPage = () => {
  return (
    <div className="pt-20 sm:pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      {/* Page Heading */}
      <h1
        data-aos="fade-up"
        className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800"
      >
        Founder
      </h1>

      {/* Founder Card */}
      <div
        data-aos="zoom-in"
        className="bg-white shadow-md rounded-xl p-5 sm:p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Profile Image */}
          <div
            data-aos="flip-left"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36
                       rounded-full overflow-hidden bg-gray-200 shrink-0"
          >
            <img
              src="assets/images/Founder.webp"
              alt="Aasif Noor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div
            data-aos="fade-left"
            className="text-center md:text-left"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Aasif Noor
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Founder & Creator – NCERTLearn
              <span className="mx-1">&bull;</span> AI Enthusiast
              <span className="mx-1">&bull;</span> Educator
            </p>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              NCERTLearn was founded by{" "}
              <span className="font-medium">Aasif Noor</span> with the aim of
              making NCERT-based education simple, accessible, and
              student-friendly. The platform focuses on clarity, structured
              learning, and strong academic foundations.
            </p>

            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              The vision behind NCERTLearn is to support students across India
              by providing reliable, curriculum-aligned study material.
            </p>
          </div>
        </div>

        {/* Social & Contact */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 flex justify-center md:justify-start gap-4"
        >
          <a
            href="https://www.linkedin.com/in/aasifias2810/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full
                       bg-gray-100 text-gray-600
                       hover:bg-blue-600 hover:text-white
                       transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full
                       bg-gray-100 text-gray-600
                       hover:bg-pink-600 hover:text-white
                       transition"
            aria-label="Instagram"
          >
            <FaInstagram size={16} />
          </a>

          <a
            href="https://github.com/codingaasif"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full
                       bg-gray-100 text-gray-600
                       hover:bg-gray-800 hover:text-white
                       transition"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>

          <a
            href="mailto:support@ncertlearn.com"
            className="w-9 h-9 flex items-center justify-center rounded-full
                       bg-gray-100 text-gray-600
                       hover:bg-green-600 hover:text-white
                       transition"
            aria-label="Email"
          >
            <FaEnvelope size={16} />
          </a>
        </div>

        {/* Mission Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 sm:mt-8 border-t pt-5 sm:pt-6"
        >
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
            Our Mission
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            To empower students with high-quality educational resources and
            simplify learning through clear explanations, well-organized
            content, and a learner-first approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FounderPage;
