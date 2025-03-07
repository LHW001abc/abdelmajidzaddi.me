import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        relative overflow-hidden
        flex items-center justify-center w-12 h-12 p-2 ml-4 
        rounded-full focus:outline-none 
        transition-all duration-500
        ${theme === 'light' 
          ? 'bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 hover:shadow-md hover:shadow-blue-200/50' 
          : 'bg-indigo-900/30 hover:bg-indigo-800/40 text-amber-300 hover:text-amber-200 hover:shadow-md hover:shadow-indigo-500/30'
        }
        transform ${isAnimating ? 'scale-90' : 'scale-100'}
      `}
      aria-label="Toggle theme"
    >
      {/* Background effects */}
      <span className={`
        absolute inset-0 rounded-full 
        transition-opacity duration-500 
        ${isAnimating ? 'opacity-100' : 'opacity-0'}
        ${theme === 'light' 
          ? 'bg-gradient-to-br from-amber-100/80 to-amber-300/50' 
          : 'bg-gradient-to-br from-indigo-800/80 to-blue-900/50'
        }
      `}></span>
      
      {/* Sun/Moon Icon with animation */}
      <div className={`
        relative z-10 
        transition-all duration-500 transform
        ${isAnimating ? 'rotate-[360deg] scale-110' : 'rotate-0'}
      `}>
        {theme === 'light' ? (
          // Light mode icon - Sun
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          // Dark mode icon - Moon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </div>
      
      {/* Decorative stars for dark mode */}
      {theme === 'dark' && (
        <>
          <span className={`absolute top-2 left-3 w-1 h-1 bg-amber-200 rounded-full transition-opacity duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}></span>
          <span className={`absolute bottom-3 right-3 w-0.5 h-0.5 bg-amber-200 rounded-full transition-opacity duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}></span>
          <span className={`absolute top-5 right-3 w-1 h-1 bg-amber-200 rounded-full transition-opacity duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}></span>
        </>
      )}
      
      {/* Decorative rays for light mode */}
      {theme === 'light' && (
        <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-2 bg-amber-400 rounded"></span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-2 bg-amber-400 rounded"></span>
          <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-px bg-amber-400 rounded"></span>
          <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-px bg-amber-400 rounded"></span>
        </div>
      )}
    </button>
  );
};

export default ThemeSwitcher;