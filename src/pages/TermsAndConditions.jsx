const TermsAndConditions = () => {
  return (
    <div className="pt-20 sm:pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      
      {/* Page Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
        Terms & Conditions
      </h1>

      {/* Content Card */}
      <div className="bg-white shadow-md rounded-xl p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
        
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          By accessing <strong>NCERTLearn</strong>, you agree to comply with
          these Terms & Conditions.
        </p>

        <section>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            Use of Service
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Content is provided for educational purposes only. Unauthorized
            redistribution is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            Intellectual Property
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            All content, logos, and materials belong to NCERTLearn.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            Changes to Terms
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Terms may be updated at any time. Continued use means acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            Contact
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Questions? Email{" "}
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

export default TermsAndConditions;
