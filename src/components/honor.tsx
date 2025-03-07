import { HonorProps } from "@/lib/types";
import React, { useState } from "react";
import Image from 'next/image';

const Honor = ({ data: honor }: { data: HonorProps }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div 
      className="max-w-2xl px-8 py-6 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 
                rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out
                border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/30
                transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-xl opacity-0 transition-opacity duration-500" 
           style={{ opacity: isHovered ? 0.7 : 0 }}></div>
      
      {/* Header with date and award icon */}
      <div className="flex items-center justify-between relative z-10">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-blue-100/50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
          {honor.issuedAt}
        </span>
        {honor.is_award && (
          <div className={`
            relative overflow-hidden rounded-full p-0.5
            transition-all duration-300
            ${isHovered ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-transparent'}
          `}>
            <div className="bg-white dark:bg-gray-800 rounded-full">
              <Image
                className={`
                  h-12 w-12 p-1 rounded-full
                  transition-all duration-300
                  ${isHovered ? 'scale-110' : 'scale-100'}
                `}
                src={honor.badge || '/icons/award.svg'}
                alt={honor.title}
                width={64}
                height={64}
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Title and description */}
      <div className="mt-4 relative z-10">
        {/* Title with underline effect */}
        <div className="relative inline-block">
          <h3 className="text-xl font-bold text-gray-700 dark:text-white transition-colors duration-300">
            {honor.title}
          </h3>
          <span className={`
            block h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full
            transition-all duration-500 
            ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}
          `}></span>
        </div>
        
        {/* Description with read more/less toggle */}
        <div className="mt-3">
          <p className="text-gray-600 dark:text-gray-300">
            {showFullDescription
              ? honor.description
              : `${honor.description.slice(0, 225)}...`}
            <button
              className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 font-medium ml-1 transition-colors duration-200 focus:outline-none"
              onClick={toggleDescription}
            >
              {showFullDescription ? "Show less" : "Read more"}
            </button>
          </p>
        </div>
      </div>
      
      {/* Footer with issuer */}
      <div className="flex items-center justify-end mt-6 relative z-10">
        <div className={`
          flex items-center px-4 py-1.5 bg-blue-100/50 dark:bg-blue-900/30 rounded-full
          transition-all duration-300
          ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-80'}
        `}>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Issued by: {honor.issuedBy}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Honor;
