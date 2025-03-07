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
        relative block px-6 sm:px-16 py-4 
        border-2 rounded-xl cursor-pointer overflow-hidden
        transition-all duration-300 ease-in-out
        transform ${isActive && !isSelected ? 'scale-[1.03]' : 'scale-100'}
        ${isSelected ? 
          'border-blue-500 dark:border-blue-400 shadow-md shadow-blue-300/30 dark:shadow-blue-500/20' : 
          'border-blue-300/70 dark:border-blue-500/40 hover:border-blue-400 dark:hover:border-blue-400/70'
        }
      `}
    >
      {/* Background with gradient */}
      <div className={`
        absolute inset-0 transition-opacity duration-300
        bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700/90 dark:to-gray-800/90
        opacity-0 ${isSelected || isActive ? 'opacity-100' : ''}
      `}></div>
      
      {/* Shine effect on hover/active */}
      <div className={`
        absolute -inset-full top-0 z-0 block transform-gpu
        bg-gradient-to-r from-transparent via-white/20 dark:via-blue-500/10 to-transparent
        transition-all duration-500
        ${isActive ? 'animate-[shine_1.5s_ease_forwards]' : ''}
      `}></div>
      
      {/* Pulse effect when becoming active */}
      {isPulsing && (
        <span className="absolute inset-0 z-0 animate-[pulse_0.7s_ease-out] rounded-xl bg-blue-300/20 dark:bg-blue-500/20"></span>
      )}

      {/* Text content */}
      <div className="relative z-10 flex items-center justify-center">
        <h3 className={`
          text-md font-semibold capitalize
          transition-all duration-300
          ${isSelected ? 
            'text-blue-700 dark:text-blue-300' : 
            'text-gray-700 dark:text-gray-300'
          }
        `}>
          {tab}
        </h3>
      </div>
      
      {/* Indicator dot for selected tab */}
      <div className={`
        absolute -bottom-1 left-1/2 transform -translate-x-1/2
        w-1.5 h-1.5 rounded-full
        transition-all duration-300
        ${isSelected ? 'bg-blue-500 dark:bg-blue-400 opacity-100' : 'opacity-0'}
      `}></div>
    </span>
  );
};

export default ResumeTabTitle;
