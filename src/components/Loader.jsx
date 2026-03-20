import { GraduationCap, BookOpen } from 'lucide-react';

const Loader = ({ isLoading, loadingText = 'Loading...', type = 'page' }) => {
  if (!isLoading) return null;

  if (type === 'page') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="animate-bounce mb-4">
            <GraduationCap size={60} className="text-white mx-auto" />
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-100"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-200"></div>
          </div>
          <p className="text-white text-lg font-semibold">{loadingText}</p>
          <p className="text-white/70 text-sm mt-2">NCERTLearn</p>
        </div>
      </div>
    );
  }

  if (type === 'button') {
    return (
      <div className="inline-flex items-center space-x-2">
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
        <span>{loadingText}</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
      <span className="ml-2 text-gray-600">{loadingText}</span>
    </div>
  );
};

export default Loader;