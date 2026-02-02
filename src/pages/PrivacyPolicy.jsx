const PrivacyPolicy = () => {
  return (
    <div className="pt-20 sm:pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      
      {/* Page Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
        Privacy Policy
      </h1>

      {/* Content Card */}
      <div className="bg-white shadow-md rounded-xl p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
        
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          This Privacy Policy explains how <strong>NCERTLearn</strong> collects,
          uses, and protects your personal information when you use our website.
        </p>

        <section>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            Information We Collect
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            We may collect information you voluntarily submit such as name,
            email, and contact details when you interact with forms on this site.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            How We Use Your Information
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Your information is used to improve the service, respond to requests,
            and provide relevant learning content. We do not sell or share your
            personal data.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            Cookies
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Cookies help enhance user experience and analyze site performance.
            You can manage cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            Changes to This Policy
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            This policy may be updated from time to time. Updates will be posted
            on this page.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            Contact
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            For questions, email us at{" "}
            <a
              href="mailto:support@ncertlearn.com"
              className="text-blue-900 hover:underline font-medium"
            >
              support@ncertlearn.com
            </a>
          </p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
