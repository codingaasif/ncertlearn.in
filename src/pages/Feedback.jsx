/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Send, Smile, Star } from "lucide-react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(0);

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

    if (!rating || !message) {
      alert("Please give rating and feedback");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/api/feedback", {
        rating,
        message,
      });

      alert("Thank you for your feedback!");
      setRating(0);
      setMessage("");
    } catch (err) {
      alert("Failed to submit feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-gray-50 flex items-start justify-center px-4 pt-20 sm:pt-24 mb-8"
      data-aos="fade-up"
    >
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-5 sm:p-8"
        data-aos="zoom-in"
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 mb-4"
          data-aos="fade-right"
        >
          <div className="p-2 bg-yellow-100 rounded-full">
            <Smile className="text-yellow-500 w-6 h-6" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Feedback
          </h1>
        </div>

        <p
          className="text-sm sm:text-base text-gray-500 mb-6"
          data-aos="fade-left"
        >
          Your feedback helps us improve your learning experience 🚀
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rating */}
          <div data-aos="fade-up">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Rate your experience
            </label>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  data-aos="zoom-in"
                  data-aos-delay={star * 80}
                  className="transition transform hover:scale-110"
                >
                  <Star
                    className={`w-9 h-9
                      ${
                        (hover || rating) >= star
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                  />
                </button>
              ))}
            </div>

            {rating > 0 && (
              <p
                className="mt-2 text-sm text-gray-500"
                data-aos="fade-in"
              >
                You rated us {rating} star{rating > 1 && "s"} ⭐
              </p>
            )}
          </div>

          {/* Feedback Message */}
          <div data-aos="fade-up" data-aos-delay="150">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Your Feedback
            </label>
            <textarea
              rows={4}
              placeholder="Tell us what you liked or what we can improve..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 text-sm sm:text-base resize-none
                         focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            data-aos="zoom-in"
            data-aos-delay="250"
            className="w-full bg-blue-900 text-white py-2.5 rounded-lg
                       flex items-center justify-center gap-2
                       hover:bg-blue-800 transition
                       disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            <Send size={18} />
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
}
