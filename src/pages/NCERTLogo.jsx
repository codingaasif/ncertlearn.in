import { Link } from 'react-router-dom';

const NCERTLogo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 sm:gap-3 cursor-pointer no-underline group"
    >
      {/* SVG Logo */}
      <div className="relative">
        <svg 
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-105 transition-transform duration-300"
          fill="none"
        >
          {/* Outer circle */}
          <circle cx="20" cy="20" r="20" fill="url(#circleGradient)" />

          {/* Inner circle */}
          <circle cx="20" cy="20" r="15" fill="white" />

          {/* PERFECTLY CENTERED NL */}
          <g
            transform="translate(20 20)"
            className="group-hover:scale-110 transition-transform duration-300"
            style={{ transformOrigin: 'center' }}
          >
            {/* N */}
            <rect x="-8" y="-6" width="2.5" height="12" rx="1" fill="#2563eb" />
            <path d="M-5.5 -6 L0 6" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="0" y="-6" width="2.5" height="12" rx="1" fill="#2563eb" />

            {/* L */}
            <rect x="4" y="-6" width="2.5" height="8" rx="1" fill="#2563eb" />
            <rect x="4" y="2" width="6" height="2.5" rx="1" fill="#2563eb" />
          </g>

          {/* Subtle ring */}
          <circle cx="20" cy="20" r="19.5" stroke="white" strokeOpacity="0.2" strokeWidth="1" />

          <defs>
            <linearGradient id="circleGradient" x1="0" y1="0" x2="40" y2="40">
              <stop stopColor="#3b82f6" />
              <stop offset="0.5" stopColor="#2563eb" />
              <stop offset="1" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
        </svg>

        {/* AI Badge */}
        <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-linear-to-br from-blue-600 to-blue-800 text-white text-[7px] sm:text-[8px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
          AI
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-baseline">
          <span className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
            NCERT
          </span>
          <span className="text-lg sm:text-xl font-bold ml-0.5 bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Learn
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-semibold text-blue-600 tracking-wider">
          AI-POWERED LEARNING
        </span>
      </div>
    </Link>
  );
};

export default NCERTLogo;
