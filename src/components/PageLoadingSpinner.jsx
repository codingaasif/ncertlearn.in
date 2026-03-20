// src/components/LoadingSpinners.jsx
import { GraduationCap, BookOpen, Loader2 } from "lucide-react";

export const PageLoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center z-50">
      <div className="text-center relative">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full bg-white/5 animate-ping absolute"></div>
          <div className="w-32 h-32 rounded-full bg-white/10 animate-pulse absolute"></div>
        </div>

        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="animate-bounce-slow">
            <div className="relative">
              <GraduationCap size={80} className="text-white mx-auto relative z-10" />
              <div className="absolute inset-0 blur-xl bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Animated Rings */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-white/20 border-t-white animate-spin"></div>
          </div>
        </div>

        {/* Loading Dots with Glow */}
        <div className="flex justify-center space-x-3 mb-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-4 h-4 bg-white rounded-full animate-bounce"
              style={{ 
                animationDelay: `${i * 0.15}s`,
                boxShadow: '0 0 10px rgba(255,255,255,0.5)'
              }}
            />
          ))}
        </div>

        {/* Loading Text with Gradient */}
        <p className="text-white text-xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Loading...
        </p>
        <p className="text-white/70 text-sm animate-pulse">
          Please wait while we prepare your content
        </p>

        {/* Progress Bar */}
        <div className="mt-6 w-48 mx-auto">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-progress"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 1.5s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export const ComponentLoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center p-8 min-h-[200px]">
      <div className="relative group">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        
        {/* Main Spinner */}
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-100 border-t-blue-600 border-r-purple-500 border-b-indigo-500 shadow-lg"></div>
          
          {/* Inner Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse">
              <GraduationCap size={24} className="text-blue-600" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <p className="text-sm text-gray-500 font-medium animate-pulse">
            Loading content...
          </p>
        </div>
      </div>
    </div>
  );
};

export const NavbarLoadingSpinner = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md shadow-lg py-4 animate-pulse border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 size={20} className="text-white animate-spin" />
              </div>
            </div>
            <div>
              <div className="h-6 w-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
              <div className="h-3 w-24 bg-gray-100 rounded mt-1 animate-pulse"></div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative group">
                <div className="h-5 w-16 bg-gray-200 rounded animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 animate-shimmer"></div>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-24 h-9 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Mobile Menu Skeleton (Hidden on desktop) */}
        <div className="md:hidden mt-4 space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 w-full bg-gray-100 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};