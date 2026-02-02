const CookiesPolicy = () => {
  return (
    <div className="pt-20 sm:pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      
      {/* Page Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
        Cookies Policy
      </h1>

      {/* Content Card */}
      <div className="bg-white shadow-md rounded-xl p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
        
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          This Cookies Policy explains how <strong>NCERTLearn</strong> uses
          cookies and similar technologies.
        </p>

        <section>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            What Are Cookies
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Cookies are small text files stored on your device to improve
            website functionality and performance.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            How We Use Cookies
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            We use cookies to analyze traffic, improve content, and personalize
            learning experiences.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            Managing Cookies
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            You can disable cookies in your browser settings, but some features
            may not function properly.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            Updates
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            This policy may change periodically. Please review it regularly.
          </p>
        </section>

      </div>
    </div>
  );
};

export default CookiesPolicy;
