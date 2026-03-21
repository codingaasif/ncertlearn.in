import { useState } from "react";
import { FaGoogle, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { Eye, EyeOff, UserCircle } from "lucide-react";
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
  const [showPassword, setShowPassword] = useState(false); // ✅ NEW

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendOtp = async () => {
    if (!formData.mobile || formData.mobile.length < 10) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    setLoading(true);
    setMessage("");

    await new Promise((res) => setTimeout(res, 1000));
    setOtpSent(true);
    setLoading(false);
    setMessage("OTP sent successfully!");
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    setMessage("");
    setTimeout(() => {
      setLoading(false);
      setMessage("Google login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1500);
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    await new Promise((res) => setTimeout(res, 1000));

    if (loginMethod === "mobile") {
      if (!formData.otp) {
        setMessage("Please enter the OTP.");
        setLoading(false);
        return;
      }
      setMessage("OTP verified successfully! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1500);
    } else if (authMode === "signup") {
      setMessage("Account created successfully! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1500);
    } else {
      setMessage("Logged in successfully! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1500);
    }

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
    <div className="bg-gray-50 flex items-start justify-center py-5 lg:py-8 mt-16 w-full overflow-x-hidden">
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
                message.includes("success") || message.includes("verified")
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
            <button
              onClick={() => setLoginMethod("email")}
              className={`flex flex-col items-center justify-center py-2 rounded-lg text-sm
                ${
                  loginMethod === "email"
                    ? "bg-blue-900 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                } transition`}
            >
              <FaEnvelope />
              <span>Email</span>
            </button>

            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="flex flex-col items-center justify-center py-2 rounded-lg text-sm bg-gray-100 text-gray-600 hover:bg-gray-200 transition disabled:opacity-50"
            >
              <FaGoogle />
              <span>Google</span>
            </button>

            <button
              onClick={() => setLoginMethod("mobile")}
              className={`flex flex-col items-center justify-center py-2 rounded-lg text-sm
                ${
                  loginMethod === "mobile"
                    ? "bg-green-600 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                } transition`}
            >
              <FaMobileAlt />
              <span>Mobile</span>
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          
          {authMode === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 box-border
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
                className="w-full border rounded-lg px-4 py-2 box-border
                           focus:ring-1 focus:ring-blue-900 focus:outline-none"
              />

              {/* ✅ Password with show/hide */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 pr-10 box-border
                             focus:ring-1 focus:ring-blue-900 focus:outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ?<EyeOff size={18} /> :  <Eye size={18} />}
                </button>
              </div>

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
                maxLength="10"
                className="w-full border rounded-lg px-4 py-2 box-border
                           focus:ring-1 focus:ring-blue-900 focus:outline-none"
              />

              {/* ✅ FIXED OTP ROW */}
              <div className="flex gap-2 w-full">
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  disabled={!otpSent}
                  className="flex-1 min-w-0 border rounded-lg px-4 py-2 box-border
                             focus:ring-1 focus:ring-green-500 focus:outline-none"
                />

                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={loading || !formData.mobile || formData.mobile.length !== 10}
                  className="px-4 shrink-0 bg-blue-900 text-white rounded-lg
                             hover:bg-blue-800 transition cursor-pointer disabled:opacity-60"
                >
                  {loading ? "Sending..." : otpSent ? "Resend" : "Send OTP"}
                </button>
              </div>
            </>
          )}

          {!(loginMethod === "mobile" && !otpSent) && (
            <button
              type="submit"
              disabled={loading}
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
            ? "Don't have an account?"
            : "Already have an account?"}
          <button
            onClick={() => {
              setAuthMode(authMode === "login" ? "signup" : "login");
              setMessage("");
              setOtpSent(false);
            }}
            className="ml-1 text-blue-900 font-semibold hover:underline cursor-pointer"
          >
            {authMode === "login" ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}