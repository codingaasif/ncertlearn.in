import { Link } from "react-router-dom";
import { AlertTriangle, Home, BookOpen, ArrowLeft } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center px-4 pt-20 sm:pt-24">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
        {/* Header (same pattern as Contact / AskQuestion) */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-red-100 rounded-full">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Page Not Found
          </h1>
        </div>

        <p className="text-sm sm:text-base text-gray-500 mb-6">
          Looks like you followed a broken link or entered a wrong address.
        </p>

        {/* 404 */}
        <h2 className="text-6xl font-extrabold text-gray-800 mb-3">404</h2>

        <p className="text-gray-500 mb-4">
          The page you are trying to reach doesn’t exist or has been moved.
        </p>

        <p className="text-sm text-gray-400 mb-6">
          Don’t worry — you can continue learning using the options below 📚
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Link
            to="/"
            className="flex items-center justify-center gap-2
                       bg-blue-900 text-white px-6 py-2.5 rounded-lg
                       hover:bg-blue-800 transition font-semibold"
          >
            <Home size={18} />
            Home
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center justify-center gap-2
                       border border-blue-900 text-blue-900 px-6 py-2.5 rounded-lg
                       hover:bg-blue-50 transition font-semibold"
          >
            <BookOpen size={18} />
            Dashboard
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t pt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Quick Access
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <Link to="/tutorials" className="hover:text-blue-900 hover:underline">
              Classes 6–10
            </Link>
            <Link to="/notes" className="hover:text-blue-900 hover:underline">
              Notes
            </Link>
            <Link to="/quiz/class/:classId" className="hover:text-blue-900 hover:underline">
              Quizzes
            </Link>
          </div>
        </div>

        {/* Go Back */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 inline-flex items-center gap-2 text-sm
                     text-gray-500 hover:text-blue-900 transition cursor-pointer"
        >
          <ArrowLeft size={16} />
          Go Back
        </button>
      </div>
    </div>
  );
}
