import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-[1000]">
      <div className="relative">
        {/* Main loader ring */}
        <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-500 rounded-full animate-spin"></div>
        
        {/* Inner ring with opposite animation */}
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-indigo-100 dark:border-indigo-900 border-b-indigo-600 dark:border-b-indigo-500 rounded-full animate-spin-reverse"></div>
        
        {/* Core pulse */}
        <div className="absolute top-5 left-5 w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
        
        {/* Decorative particles */}
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-indigo-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-0 w-1 h-1 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-1/2 right-0 w-1 h-1 bg-indigo-500 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
      </div>
      
      {/* Text */}
      <div className="absolute mt-24 text-center">
        <p className="text-blue-700 dark:text-blue-400 font-medium">
          Loading<span className="animate-ellipsis">.</span><span className="animate-ellipsis" style={{ animationDelay: '0.3s' }}>.</span><span className="animate-ellipsis" style={{ animationDelay: '0.6s' }}>.</span>
        </p>
      </div>
      
      {/* Add these keyframes to your global CSS */}
      <style jsx global>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        
        @keyframes ellipsis {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 1.2s linear infinite;
        }
        
        .animate-ellipsis {
          animation: ellipsis 1.2s infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Loader;
