const SkeletonLoader = () => {
  return (
    <div className="animate-pulse">
      {/* Hero Skeleton */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="h-12 bg-white/20 rounded-lg w-3/4 mb-4"></div>
              <div className="h-6 bg-white/20 rounded-lg w-full mb-4"></div>
              <div className="h-10 bg-white/20 rounded-lg w-32"></div>
            </div>
            <div className="h-64 bg-white/20 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Classes Skeleton */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 bg-gray-200 rounded-lg w-64 mx-auto mb-10"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow">
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;