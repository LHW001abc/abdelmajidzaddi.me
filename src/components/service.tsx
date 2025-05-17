import { ServiceProps } from "@/lib/types";
import Link from "next/link";
import { useState } from "react";

const Service = ({ data: service }: { data: ServiceProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl flex flex-col flex-1
                transition-all duration-500 ease-in-out transform hover:scale-105
                hover:shadow-2xl hover:shadow-blue-300/30 dark:hover:shadow-blue-400/20
                bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700
                relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/icons/web-dev.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.1,
          filter: "blur(1px)",
          mixBlendMode: "multiply",
          borderRadius: "inherit"
        }}
      />
      
      {/* Background decoration elements */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-300/20 dark:bg-blue-400/10 rounded-full blur-xl z-0"></div>
      <div className="absolute -left-6 -top-6 w-20 h-20 bg-indigo-300/20 dark:bg-indigo-400/10 rounded-full blur-xl z-0"></div>
      
      {/* Icon with animated gradient */}
      <div 
        className={`
          relative z-10 w-16 h-16 rounded-full flex items-center justify-center
          bg-gradient-to-r from-blue-500 to-indigo-600 p-0.5
          transition-transform duration-300 ${isHovered ? 'scale-110' : ''}
        `}
      >
        <div className="bg-white dark:bg-gray-800 rounded-full w-full h-full flex items-center justify-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
            </svg>
          </span>
        </div>
      </div>

      {/* Service Title with hover underline effect */}
      <Link href={`/services/${service.slug}`} className="block relative z-10 group">
        <h1 className="text-xl font-bold text-gray-700 capitalize dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {service.name}
        </h1>
        <span className="block w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-300 mt-1"></span>
      </Link>

      {/* Service excerpt */}
      <p className="text-gray-600 dark:text-gray-300 relative z-10">
        {service.excerpt}
      </p>

      {/* Animated arrow button */}
      <div className="mt-auto flex flex-col flex-1 gap-1 items-end justify-end relative z-10">
        <Link href={`/services/${service.slug}`}
            className="p-3 text-white capitalize transition-all duration-300 transform 
                     bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full 
                     hover:shadow-lg hover:shadow-blue-500/30 
                     hover:translate-x-1 group">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Service;