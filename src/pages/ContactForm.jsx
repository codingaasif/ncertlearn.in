import { useState } from "react";
import { Mail, Send } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="bg-gray-50 flex items-start justify-center px-4 pt-20 sm:pt-24 mb-8">
      {/* SAME CARD – just enhanced shadow & hover */}
      <div className="w-full max-w-3xl bg-white rounded-2xl 
                      shadow-lg hover:shadow-xl transition-shadow
                      p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-blue-100 rounded-full">
            <Mail className="text-blue-900 w-6 h-6" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Contact Us
          </h1>
        </div>

        <p className="text-sm sm:text-base text-gray-500 mb-6">
          Have a question or feedback? We’d love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {success && (
              <p className="text-green-600 bg-green-50 border border-green-200
                            rounded-lg py-2 px-3 text-sm text-center">
                Your message has been sent successfully!
              </p>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2
                         focus:outline-none focus:ring-1 focus:ring-blue-900
                         hover:border-blue-400 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2
                         focus:outline-none focus:ring-1 focus:ring-blue-900
                         hover:border-blue-400 transition"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 resize-none
                         focus:outline-none focus:ring-1 focus:ring-blue-900
                         hover:border-blue-400 transition"
            />

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2.5 rounded-lg
                         flex items-center justify-center gap-2
                         hover:bg-blue-800 hover:shadow-md
                         transition cursor-pointer"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>

          {/* Social Media */}
          <div className="flex flex-col items-center justify-center text-center space-y-5">
            <h3 className="text-lg font-semibold text-gray-700">
              Connect with us
            </h3>

            <div className="w-12 h-1 bg-blue-900 rounded-full"></div>

            <p className="text-gray-500 text-sm">
              Follow us on social media for updates & support
            </p>

            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 flex items-center justify-center
                               rounded-full bg-gray-100 text-gray-600
                               hover:bg-blue-900 hover:text-white
                               shadow hover:shadow-lg
                               transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
