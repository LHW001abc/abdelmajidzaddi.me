import React, { useState } from "react";
import { SkillProps } from "@/lib/types";
import Image from 'next/image';

const Skill = ({ data: skill }: { data: SkillProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-out 
                hover:shadow-2xl hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20 
                bg-white dark:bg-gray-800 border border-transparent hover:border-blue-300/50 dark:hover:border-blue-500/30
                transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background elements and decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content container */}
      <div className="relative flex flex-col items-center p-6 gap-4 z-10">
        {/* Icon container with animated border */}
        <div className={`
          relative p-0.5 rounded-xl overflow-hidden transition-all duration-500
          ${isHovered ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-transparent'}
        `}>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center w-20 h-20 transition-all duration-300">
            <Image
              src={skill.icon || "/icons/default-skill.svg"}
              alt={skill.name}
              width={64}
              height={64}
              className={`
                max-w-full max-h-full filter 
                ${isHovered ? 'scale-110' : 'scale-100'}
                transition-all duration-500
              `}
            />
          </div>
        </div>

        {/* Name with animated underline */}
        <div className="relative">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center transition-colors duration-300">
            {skill.name}
          </h3>
          <span className={`
            block h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full
            transition-all duration-500 mx-auto
            ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}
          `}></span>
        </div>

        {/* Optional skill level indicator */}
        {skill.level && (
          <div className="w-full mt-2">
            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${skill.level}%`, 
                  transform: isHovered ? 'scaleX(1)' : 'scaleX(0.8)',
                  transformOrigin: 'left',
                  opacity: isHovered ? 1 : 0.7
                }}
              />
            </div>
            <p className="text-xs text-right mt-1 text-gray-600 dark:text-gray-400">
              {skill.level}%
            </p>
          </div>
        )}
      </div>

      {/* Particle effects on hover */}
      {isHovered && (
        <>
          <span className="absolute top-1/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '1s' }}></span>
          <span className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-ping" style={{ animationDuration: '1.5s' }}></span>
          <span className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping" style={{ animationDuration: '0.8s' }}></span>
        </>
      )}
    </div>
  );
};

export default Skill;