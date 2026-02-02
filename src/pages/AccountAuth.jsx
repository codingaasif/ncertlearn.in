import { useState } from "react";
import { FaGoogle, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { UserCircle } from "lucide-react";
import { useNavigate } from "react-router";

export default function AccountAuth() {
  const [authMode, setAuthMode] = useState("login");
  const [loginMethod, setLoginMethod] = useState("email");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendOtp = async () => {
    if (!formData.mobile) {
      setMessage("Please enter your mobile number.");
      return;
    }
    setLoading(true);
    setMessage("");

    await new Promise((res) => setTimeout(res, 1000));
    setOtpSent(true);
    setLoading(false);
    setMessage("OTP sent successfully!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    await new Promise((res) => setTimeout(res, 1000));

    setMessage(
      loginMethod === "mobile"
        ? "OTP verified successfully!"
        : authMode === "signup"
          ? "Account created successfully!"
          : "Logged in successfully!"
    );

    setFormData({
      name: "",
      email: "",
      password: "",
      mobile: "",
      otp: "",
    });
    setOtpSent(false);
    setLoading(false);
  };

  return (
    <div className="bg-gray-50 flex items-start justify-center px-4 py-8 mt-16">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-full">
            <UserCircle className="text-blue-900 w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {authMode === "login" ? "Student Login" : "Student Sign Up"}
          </h2>
        </div>

        <p className="text-sm text-gray-500 mb-5">
          Access your NCERT learning dashboard
        </p>

        {/* Message */}
        {message && (
          <p
            className={`mb-4 text-sm text-center rounded-lg py-2 px-3
              ${
                message.includes("success")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
          >
            {message}
          </p>
        )}

        {/* Login Method Tabs */}
        {authMode === "login" && (
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[
              { id: "email", icon: <FaEnvelope />, label: "Email" },
              { id: "google", icon: <FaGoogle />, label: "Google" },
              { id: "mobile", icon: <FaMobileAlt />, label: "Mobile" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setLoginMethod(item.id)}
                className={`flex flex-col items-center justify-center py-2 rounded-lg text-sm
                  ${
                    loginMethod === item.id
                      ? "bg-blue-900 text-white shadow"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  } transition`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {authMode === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2
                         focus:ring-1 focus:ring-blue-900 focus:outline-none"
            />
          )}

          {(loginMethod === "email" || authMode === "signup") && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2
                           focus:ring-1 focus:ring-blue-900 focus:outline-none"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2
                           focus:ring-1 focus:ring-blue-900 focus:outline-none"
              />

              {/* ✅ Remember / Forgot */}
              {authMode === "login" && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="accent-blue-900"
                    />
                    Remember me
                  </label>

                  <button
                    type="button"
                    className="text-blue-900 hover:underline font-medium cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
              )}
            </>
          )}

          {loginMethod === "mobile" && (
            <>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2
                           focus:ring-1 focus:ring-blue-900 focus:outline-none"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  disabled={!otpSent}
                  className="flex-1 border rounded-lg px-4 py-2
                             focus:ring-1 focus:ring-green-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={loading}
                  className="px-4 bg-blue-900 text-white rounded-lg
                             hover:bg-blue-800 transition cursor-pointer disabled:opacity-60"
                >
                  {otpSent ? "Resend" : "Send OTP"}
                </button>
              </div>
            </>
          )}

          {!(loginMethod === "mobile" && !otpSent) && (
            <button
              type="submit"
              disabled={loading}
              onClick={() => navigate("/")}
              className="w-full bg-blue-900 text-white py-2.5 rounded-lg
                         hover:bg-blue-800 hover:shadow transition
                         disabled:opacity-60 cursor-pointer"
            >
              {loading
                ? "Please wait..."
                : loginMethod === "mobile"
                  ? "Verify OTP"
                  : authMode === "signup"
                    ? "Create Account"
                    : "Login"}
            </button>
          )}
        </form>

        {/* Toggle */}
        <p className="mt-5 text-center text-sm text-gray-600">
          {authMode === "login"
            ? "Don’t have an account?"
            : "Already have an account?"}
          <button
            onClick={() =>
              setAuthMode(authMode === "login" ? "signup" : "login")
            }
            className="ml-1 text-blue-900 font-semibold hover:underline cursor-pointer"
          >
            {authMode === "login" ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
