import { useState, useEffect } from "react";

const ResumeTabTitle = (
  { tab, selectedTab, handleClick }:
    {tab: string, selectedTab: string, handleClick: () => void}
) => {
  const [isActive, setIsActive] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const isSelected = tab === selectedTab;
  
  // Add pulse effect when tab becomes selected
  useEffect(() => {
    if (isSelected) {
      setIsPulsing(true);
      const timer = setTimeout(() => setIsPulsing(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isSelected]);

  return (
    <span 
      onClick={() => {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 300);
        handleClick();
      }}
      onMouseEnter={() => !isSelected && setIsActive(true)}
      onMouseLeave={() => !isSelected && setIsActive(false)}
      className={`
        relative block px-8 sm:px-16 py-4 
        cursor-pointer overflow-hidden
        transition-all duration-300 ease-out
        transform ${isActive && !isSelected ? 'scale-[1.02]' : 'scale-100'}
        ${isSelected ? 
          'bg-white dark:bg-gray-800 shadow-lg border-0' : 
          'bg-gray-50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-800'
        }
        rounded-xl
        group
      `}
    >
      {/* Premium glass effect */}
      <div className={`
        absolute inset-0 
        ${isSelected ? 
          'bg-gradient-to-br from-indigo-50/90 to-white dark:from-gray-800/90 dark:to-gray-800/50' : 
          'bg-white/90 dark:bg-gray-900/90'
        }
        backdrop-blur-sm
        transition-all duration-500
      `}></div>
      
      {/* Subtle shine effect */}
      <div className={`
        absolute -inset-full top-0 z-0 block transform-gpu
        bg-gradient-to-r from-transparent via-indigo-100/30 dark:via-indigo-900/20 to-transparent
        transition-all duration-1000
        ${isActive ? 'animate-[shine_1.8s_ease-in-out_forwards]' : ''}
      `}></div>
      
      {/* Elegant pulse effect when becoming active */}
      {isPulsing && (
        <span className="absolute inset-0 z-0 animate-[pulse_1s_ease-out] bg-indigo-100/50 dark:bg-indigo-900/30 rounded-xl"></span>
      )}

      {/* Text content with subtle gradient */}
      <div className="relative z-10 flex items-center justify-center">
        <h3 className={`
          text-base font-medium capitalize tracking-wide
          transition-all duration-300
          ${isSelected ? 
            'text-indigo-700 dark:text-indigo-300' : 
            'text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
          }
        `}>
          {tab}
        </h3>
      </div>
      
      {/* Professional indicator bar */}
      <div className={`
        absolute bottom-0 left-0
        h-0.5 
        transition-all duration-300 ease-out
        ${isSelected ? 
          'w-full bg-indigo-500' : 
          'w-0 group-hover:w-1/3 group-hover:bg-indigo-400/70'
        }
      `}></div>
      
      {/* Top right accent */}
      <div className={`
        absolute top-0 right-0
        w-8 h-8
        transition-all duration-300
        ${isSelected ? 
          'opacity-100 bg-gradient-to-bl from-indigo-500/20 to-transparent' : 
          'opacity-0 group-hover:opacity-60'
        }
      `}></div>
      
      {/* Selected state icon */}
      <div className={`
        absolute top-2.5 right-2.5
        w-1.5 h-1.5 rounded-full
        transition-all duration-300
        ${isSelected ? 
          'opacity-100 bg-indigo-500' : 
          'opacity-0'
        }
      `}></div>
    </span>
  );
};

export default ResumeTabTitle;
