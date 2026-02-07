import { useState, useEffect } from "react";
import { Send, HelpCircle } from "lucide-react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AskQuestion() {
  const [classId, setClassId] = useState("");
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!classId || !subject || !question) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/api/questions/ask", {
        classId,
        subject,
        question,
      });

      alert("Question submitted successfully!");
      setClassId("");
      setSubject("");
      setQuestion("");
    } catch (err) {
      alert("Failed to submit question");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-gray-50 flex items-start justify-center px-4 pt-20 sm:pt-24 mb-7"
      data-aos="fade-up"
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-5 sm:p-8"
        data-aos="zoom-in"
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 mb-4"
          data-aos="fade-right"
        >
          <div className="p-2 bg-blue-100 rounded-full">
            <HelpCircle className="text-blue-900 w-6 h-6" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Ask a Question
          </h1>
        </div>

        <p
          className="text-sm sm:text-base text-gray-500 mb-6"
          data-aos="fade-left"
        >
          Ask your doubts related to NCERT subjects. Our experts will help you.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Class */}
          <div data-aos="fade-up">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Class
            </label>
            <select
              value={classId}
              onChange={(e) => setClassId(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 text-sm sm:text-base
                         focus:outline-none focus:ring-1 focus:ring-blue-900"
            >
              <option value="">Choose class</option>
              {[6, 7, 8, 9, 10].map((cls) => (
                <option key={cls} value={cls}>
                  Class {cls}
                </option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div data-aos="fade-up" data-aos-delay="100">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="e.g. Science, Mathematics"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 text-sm sm:text-base
                         focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>

          {/* Question */}
          <div data-aos="fade-up" data-aos-delay="200">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Question
            </label>
            <textarea
              rows={5}
              placeholder="Write your question clearly..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 text-sm sm:text-base resize-none
                         focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            data-aos="zoom-in"
            data-aos-delay="300"
            className="w-full bg-blue-900 text-white py-2.5 rounded-lg
                       flex items-center justify-center gap-2
                       hover:bg-blue-800 transition
                       disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            <Send size={18} />
            {loading ? "Submitting..." : "Submit Question"}
          </button>
        </form>
      </div>
    </div>
  );
}
