import {EducationProps} from "@/lib/types";
import React, { useState } from "react";
import Image from 'next/image';

const Education = ({ data: education }: { data: EducationProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="px-6 py-5 overflow-hidden rounded-lg shadow-md 
                bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900/90
                border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/30
                transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl
                relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-xl opacity-0 transition-opacity duration-500" 
           style={{ opacity: isHovered ? 0.7 : 0 }}></div>
      
      {/* Education type badge */}
      <div className="flex justify-between items-center mb-4">
        <div className={`
          px-3 py-1 text-xs font-medium rounded-full 
          bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300
          transition-all duration-300
          ${isHovered ? 'transform scale-105' : ''}
        `}>
          {education.type}
        </div>
        
        <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
          <svg className="w-3.5 h-3.5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span>{education.startedAt} - {education.endedAt}</span>
        </div>
      </div>
      
      {/* Degree title with animated underline */}
      <div className="relative group mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
          {education.title}
        </h2>
        <span className={`
          block h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full
          transition-all duration-500 
          ${isHovered ? 'w-2/3 opacity-100' : 'w-0 opacity-0'}
        `}></span>
      </div>

      {/* School information */}
      <div className="flex items-center">
        <div className={`
          relative overflow-hidden rounded-full p-0.5
          transition-all duration-300
          ${isHovered ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-transparent'}
        `}>
          <div className="bg-white dark:bg-gray-800 rounded-full">
            <Image 
              className={`
                object-cover w-12 h-12 rounded-full
                transition-all duration-300
                ${isHovered ? 'scale-110' : 'scale-100'}
              `}
              src={education.school?.logo || '/logo/company-default.png'}
              alt={education.school?.name || "School logo"}
              width={48}
              height={48}
            />
          </div>
        </div>
        
        <div className="mx-3">
          <h3 className="text-md font-medium text-blue-600 dark:text-blue-400">
            {education.school?.name ?? ''}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
            <svg className="w-3.5 h-3.5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            {education.school?.university ?? ''}
          </p>
          
          {education.description && (
            <p className={`
              mt-3 text-sm text-gray-600 dark:text-gray-400 
              transition-all duration-300 
              max-h-0 overflow-hidden opacity-0
              ${isHovered ? 'max-h-24 opacity-100' : ''}
            `}>
              {education.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Education;