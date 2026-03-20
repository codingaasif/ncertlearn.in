import { GraduationCap } from "lucide-react";

export const PageLoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 animate-bounce-slow">
          <GraduationCap size={80} className="text-white mx-auto" />
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-3 mb-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-4 h-4 bg-white rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <p className="text-white text-xl font-semibold mb-2">Loading...</p>
        <p className="text-white/60 text-sm">Please wait while we prepare your content</p>
      </div>
    </div>
  );
};

export const ComponentLoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <GraduationCap size={20} className="text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export const NavbarLoadingSpinner = () => {
  return (
    <div className="bg-white shadow-md py-4 animate-pulse">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="h-8 w-32 bg-gray-200 rounded"></div>
          <div className="flex space-x-4">
            <div className="h-6 w-20 bg-gray-200 rounded"></div>
            <div className="h-6 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};