import React, { useState } from 'react';
import { ExperienceProps } from "@/lib/types";

const Experience = ({ data: experience }: { data: ExperienceProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="px-6 py-5 overflow-hidden rounded-lg shadow-md 
                bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900/90
                border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/30
                transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl
                relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-xl opacity-0 transition-opacity duration-500" 
           style={{ opacity: isHovered ? 0.7 : 0 }}></div>
      
      {/* Job title with animated underline */}
      <div className="relative group">
        <span className="block my-2 text-xl font-semibold text-blue-600 transition-colors duration-300 transform dark:text-white hover:text-blue-700 dark:hover:text-blue-400">
          {experience.title}
        </span>
        <span className={`
          block h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full
          transition-all duration-500 
          ${isHovered ? 'w-3/4 opacity-100' : 'w-0 opacity-0'}
        `}></span>
      </div>
      
      {/* Company info with hover effects */}
      <div className="flex items-center my-3">
        <div className="flex items-start">
          <a 
            href={experience.company?.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`
              relative overflow-hidden rounded-full p-0.5
              transition-all duration-300
              ${isHovered ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-transparent'}
            `}
          >
            <div className="bg-white dark:bg-gray-800 rounded-full">
              <img 
                className={`
                  object-cover w-12 h-12 rounded-full
                  transition-all duration-300
                  ${isHovered ? 'scale-110' : 'scale-100'}
                `}
                src={experience.company?.logo ?? '/logo/company-default.png'}
                alt={experience.company?.name || "Company logo"}
                loading="lazy"
              />
            </div>
          </a>
          
          <div className="mx-3">
            <a 
              href={experience.company?.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <h2 className="text-md font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200" role="link">
                {experience.company?.name ?? ''}
              </h2>
            </a>
            
            <div className="mt-1 space-y-1">
              <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                <svg className="w-3.5 h-3.5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                {experience.employment_type ?? ''}
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                <svg className="w-3.5 h-3.5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {experience.company?.location ? experience.company?.location : ''}
                {experience.type && (experience.company?.location ? ' • ' : '') + experience.type}
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                <svg className="w-3.5 h-3.5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {experience.startedAt} - {experience.endedAt}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Experience overview */}
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {experience.overview}
      </p>
      
      {/* Skills tags */}
      <div className="mt-auto pt-4 flex flex-wrap gap-1.5 justify-end">
        {experience.skills.map((skill, index) => (
          <div 
            key={index}
            className={`
              bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300
              px-2.5 py-1 rounded-full text-xs font-medium
              transition-all duration-300
              ${isHovered ? 'transform scale-105' : ''}
              hover:bg-blue-200 dark:hover:bg-blue-800/40
            `}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
