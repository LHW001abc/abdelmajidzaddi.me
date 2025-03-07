import { ProjectProps } from "@/lib/types";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

const Project = ({ data: project }: { data: ProjectProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="w-full bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 
                rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20 
                transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with overlay effect */}
      <div className="relative overflow-hidden">
        <Link href={`/projects/${project.slug}`}>
          <div className="relative">
            <Image
              className={`object-cover object-center w-full h-56 rounded-t-lg transition-transform duration-700 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
              src={project.image}
              alt={project.title}
              loading="lazy"
              width={400}
              height={256}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-blue-500/50 to-transparent opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-70' : ''}`}></div>
            
            {/* View project overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <span className="px-4 py-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full font-medium shadow-lg transform transition-transform duration-500 hover:scale-105">
                View Project
              </span>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Category banner with icon */}
      <div className="w-full flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-indigo-800">
        <svg
          aria-label="headphones icon"
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
          />
        </svg>
        <h1 className="mx-3 text-lg font-semibold text-white">{project.category}</h1>
      </div>
      
      {/* Project content */}
      <div className="w-full flex flex-col px-6 py-4 flex-1 relative">
        {/* Background decoration */}
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-xl opacity-0 transition-opacity duration-500" style={{ opacity: isHovered ? 0.7 : 0 }}></div>
        
        {/* Title with animated underline */}
        <Link href={`/projects/${project.slug}`} className="block group relative z-10">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {project.title}
          </h1>
          <span className={`block h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500 ${isHovered ? 'w-1/3 opacity-100' : 'w-0 opacity-0'}`}></span>
        </Link>
        
        {/* Project excerpt */}
        <p className="py-2 text-gray-700 dark:text-gray-400 relative z-10">{project.excerpt}</p>
        
        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-1.5 justify-end relative z-10">
          {project.tags.map((tag, index) => (
            <div
              key={index}
              className={`
                bg-blue-200 dark:bg-gray-700 text-blue-800 dark:text-blue-200 
                px-3 py-1 rounded-full text-xs font-medium
                transition-all duration-300
                ${isHovered ? 'transform scale-105' : ''}
                hover:bg-blue-300 dark:hover:bg-blue-700
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
