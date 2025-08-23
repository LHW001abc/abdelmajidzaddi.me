import React, { useState } from 'react';
import { ExperienceProps } from "@/lib/types";
import Image from 'next/image';

const Experience = ({ data: experience }: { data: ExperienceProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-blue-50/80 
                     dark:from-gray-800/80 dark:via-gray-900/60 dark:to-purple-900/20 
                     backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-2xl"></div>
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-violet-500/5 
                     dark:from-purple-500/10 dark:via-blue-600/10 dark:to-violet-600/10 
                     opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
      
      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-violet-500/20 
                     opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm -z-10 
                     group-hover:blur-md group-hover:scale-110"></div>
      
      {/* Content Container */}
      <div className="relative z-10 px-8 py-6 flex flex-col h-full">
        {/* Floating Accent Elements */}
        <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-blue-500/10 
                       rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-violet-500/10 
                       rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
        
        {/* Job Title with Enhanced Typography */}
        <div className="relative group/title mb-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-purple-700 to-blue-700 
                        dark:from-white dark:via-purple-300 dark:to-blue-300 bg-clip-text text-transparent 
                        transition-all duration-500 group-hover:scale-105">
            {experience.title}
          </h3>
          
          {/* Dynamic Underline */}
          <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-violet-500 rounded-full 
                         transition-all duration-700 ease-out mt-2"
               style={{ 
                 width: isHovered ? '85%' : '0%',
                 opacity: isHovered ? 1 : 0,
                 boxShadow: isHovered ? '0 0 20px rgba(147, 51, 234, 0.3)' : 'none'
               }}>
          </div>
        </div>
        
        {/* Company Section with Enhanced Glass Effect */}
        <div className="flex items-start space-x-4 mb-6">
          {/* Company Logo with Floating Effect */}
          <div className="relative group/logo">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl 
                           opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md scale-110"></div>
            
            <a 
              href={experience.company?.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative block"
            >
              <div className="relative p-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm 
                             rounded-2xl border border-white/30 dark:border-gray-700/30 
                             transition-all duration-500 group-hover:scale-110 
                             group-hover:rotate-3 group-hover:shadow-2xl">
                <Image
                  className="object-cover w-14 h-14 rounded-xl transition-all duration-500
                           group-hover/logo:scale-105"
                  src={experience.company?.logo ?? '/logo/company-default.png'}
                  alt={experience.company?.name || "Company logo"}
                  width={56}
                  height={56}
                  loading="lazy"
                />
                
                {/* Logo Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400/0 to-blue-500/0 
                               group-hover/logo:from-purple-400/20 group-hover/logo:to-blue-500/20 
                               transition-all duration-500"></div>
              </div>
            </a>
          </div>
          
          {/* Company Details */}
          <div className="flex-1 space-y-3">
            <a 
              href={experience.company?.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group/company inline-block"
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 
                           group-hover/company:text-purple-600 dark:group-hover/company:text-purple-400 
                           transition-all duration-300">
                {experience.company?.name ?? ''}
              </h4>
            </a>
            
            {/* Enhanced Info Cards */}
            <div className="space-y-2">
              {experience.employment_type && (
                <div className="inline-flex items-center px-3 py-1.5 rounded-lg 
                               bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm
                               border border-purple-200/50 dark:border-purple-800/50 
                               text-sm text-gray-700 dark:text-gray-300 
                               transition-all duration-300 hover:scale-105">
                  <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  {experience.employment_type}
                </div>
              )}
              
              {(experience.company?.location || experience.type) && (
                <div className="inline-flex items-center px-3 py-1.5 rounded-lg 
                               bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm
                               border border-blue-200/50 dark:border-blue-800/50 
                               text-sm text-gray-700 dark:text-gray-300 ml-2
                               transition-all duration-300 hover:scale-105">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {experience.company?.location ? experience.company?.location : ''}
                  {experience.type && (experience.company?.location ? ' • ' : '') + experience.type}
                </div>
              )}
              
              <div className="inline-flex items-center px-3 py-1.5 rounded-lg 
                             bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm
                             border border-violet-200/50 dark:border-violet-800/50 
                             text-sm text-gray-700 dark:text-gray-300
                             transition-all duration-300 hover:scale-105">
                <svg className="w-4 h-4 mr-2 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {experience.startedAt} - {experience.endedAt}
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Overview Section */}
        {experience.overview && (
          <div className="mb-6">
            <div className="relative p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm 
                           border border-white/30 dark:border-gray-700/30 
                           transition-all duration-500 group-hover:bg-white/60 dark:group-hover:bg-gray-800/60">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                {experience.overview}
              </p>
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-purple-500/5 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        )}
        
        {/* Premium Skills Section */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 justify-end">
            {experience.skills.map((skill, index) => (
              <div 
                key={index}
                className="group/skill relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Skill Badge Background */}
                <div className="relative px-4 py-2 rounded-full 
                               bg-gradient-to-r from-white/70 to-white/50 
                               dark:from-gray-800/70 dark:to-gray-700/50 
                               backdrop-blur-sm border border-white/40 dark:border-gray-600/40
                               transition-all duration-500 
                               group-hover:scale-105 group/skill:hover:scale-110
                               group/skill:hover:bg-gradient-to-r group/skill:hover:from-purple-100/80 group/skill:hover:to-blue-100/80
                               dark:group/skill:hover:from-purple-900/40 dark:group/skill:hover:to-blue-900/40">
                  
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 
                                 transition-all duration-300 
                                 group/skill:hover:text-purple-700 dark:group/skill:hover:text-purple-300">
                    {skill}
                  </span>
                  
                  {/* Skill Badge Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                                 opacity-0 group/skill:hover:opacity-100 transition-all duration-500 blur-sm"></div>
                </div>
                
                {/* Individual skill animation */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/0 to-blue-400/0 
                               group-hover:from-purple-400/10 group-hover:to-blue-400/10 
                               transition-all duration-700" 
                     style={{ transitionDelay: `${index * 50}ms` }}></div>
              </div>
            ))}
          </div>
          
          {/* Skills Count Indicator */}
          <div className="mt-3 flex justify-end">
            <div className="inline-flex items-center px-2 py-1 rounded-full 
                           bg-gradient-to-r from-purple-100/50 to-blue-100/50 
                           dark:from-purple-900/30 dark:to-blue-900/30 
                           border border-purple-200/30 dark:border-purple-800/30">
              <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                {experience.skills.length} Skills
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
