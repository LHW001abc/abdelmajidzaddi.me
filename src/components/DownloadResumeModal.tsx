import Link from 'next/link';
import { resumes } from "@/config/app";
import { useState, useEffect } from 'react';

const DownloadResumeModal = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
  useEffect(() => {
    if (isOpen) {
      // Small delay to trigger entrance animation after modal is rendered
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="relative flex justify-center">
      <div 
        className={`
          fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm
          transition-opacity duration-300 ease-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `} 
        aria-labelledby="modal-title" 
        role="dialog" 
        aria-modal="true"
      >
        <div 
          className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          {/* Modal backdrop with blurred effect */}
          <div 
            className={`fixed inset-0 transition-opacity bg-gray-800/50 dark:bg-gray-900/70`}
            aria-hidden="true"
          ></div>
          
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          
          {/* Modal panel */}
          <div 
            className={`
              relative inline-block px-4 pt-5 pb-4 overflow-hidden
              text-left align-bottom transition-all transform
              bg-white dark:bg-gray-800 rounded-xl
              shadow-xl dark:shadow-blue-900/20
              sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6
              ${isVisible ? 'sm:translate-y-0 opacity-100' : 'sm:translate-y-4 opacity-0'}
              transition-all duration-300 ease-out
            `}
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-200/20 dark:bg-indigo-400/10 rounded-full blur-xl"></div>
            
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-2 right-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 focus:outline-none"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              
              {/* Title and description */}
              <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white" id="modal-title">
                  Download My Resume
                </h2>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Please choose your preferred language:
                  </p>
                </div>
              </div>
            </div>
            
            {/* Download buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              {/* English resume */}
              <Link 
                href={resumes.english} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={close}
                onMouseEnter={() => setHoveredButton('english')}
                onMouseLeave={() => setHoveredButton(null)}
                className={`
                  relative overflow-hidden px-6 py-2.5 
                  text-sm font-medium text-white 
                  bg-gradient-to-r from-blue-500 to-indigo-600
                  rounded-lg transition-all duration-300
                  hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-600/20
                  w-full sm:w-auto flex justify-center items-center
                  ${hoveredButton === 'english' ? 'scale-105' : 'scale-100'}
                `}
              >
                <span className="mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </span>
                English
                
                {/* Animation effect */}
                <div className={`
                  absolute inset-0 bg-white/20 
                  transition-all duration-500 transform
                  ${hoveredButton === 'english' ? 'translate-x-full' : '-translate-x-full'}
                `}></div>
              </Link>
              
              {/* French resume */}
              <Link 
                href={resumes.french} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={close}
                onMouseEnter={() => setHoveredButton('french')}
                onMouseLeave={() => setHoveredButton(null)}
                className={`
                  relative overflow-hidden px-6 py-2.5 
                  text-sm font-medium text-white 
                  bg-gradient-to-r from-blue-500 to-indigo-600
                  rounded-lg transition-all duration-300
                  hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-600/20
                  w-full sm:w-auto flex justify-center items-center
                  ${hoveredButton === 'french' ? 'scale-105' : 'scale-100'}
                `}
              >
                <span className="mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </span>
                Français
                
                {/* Animation effect */}
                <div className={`
                  absolute inset-0 bg-white/20 
                  transition-all duration-500 transform
                  ${hoveredButton === 'french' ? 'translate-x-full' : '-translate-x-full'}
                `}></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadResumeModal;
