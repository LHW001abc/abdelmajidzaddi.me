import Link from "next/link";
import { socials } from "@/config/app";
import { useState } from "react";

const FindMeCTA = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  
  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -left-10 -bottom-20 w-40 h-40 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-xl"></div>
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-indigo-200/10 dark:bg-indigo-400/5 rounded-full blur-xl"></div>
      
      <div className="container relative z-10 flex flex-col items-center px-4 py-16 mx-auto text-center">
        {/* Title with animated underline */}
        <div className="relative mb-8 group">
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white 
                         transition-transform duration-300 group-hover:scale-105">
            Find me on
          </h2>
          <span className="block h-0.5 mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full 
                          transition-all duration-500 w-0 group-hover:w-full mx-auto"></span>
        </div>
        
        {/* Social icons with enhanced animations */}
        <div className="flex justify-center space-x-8 mt-4">
          {/* GitHub */}
          <Link 
            href={socials.github} 
            target="_blank"
            title="GitHub"
            className="relative group"
            onMouseEnter={() => setHoveredIcon('github')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div className={`
              absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-600/20
              dark:from-blue-500/10 dark:to-indigo-600/10
              transition-all duration-300 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100
              blur-md
            `}></div>
            <div className={`
              relative transition-all duration-500 transform
              ${hoveredIcon === 'github' ? 'scale-125 rotate-[360deg]' : 'scale-100 rotate-0'}
            `}>
              <img 
                src="/logo/github.gif" 
                alt="GitHub" 
                width="48px" 
                height="48px"
                className="rounded-full shadow-lg hover:shadow-blue-400/20 dark:hover:shadow-blue-500/30 
                         transition-shadow duration-300"
              />
            </div>
          </Link>
          
          {/* LinkedIn */}
          <Link 
            href={socials.linkedin} 
            target="_blank"
            title="LinkedIn"
            className="relative group"
            onMouseEnter={() => setHoveredIcon('linkedin')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div className={`
              absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-600/20
              dark:from-blue-500/10 dark:to-indigo-600/10
              transition-all duration-300 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100
              blur-md
            `}></div>
            <div className={`
              relative transition-all duration-500 transform
              ${hoveredIcon === 'linkedin' ? 'scale-125 rotate-[360deg]' : 'scale-100 rotate-0'}
            `}>
              <img 
                src="/logo/linkedin.gif" 
                alt="LinkedIn" 
                width="48px" 
                height="48px"
                className="rounded-full shadow-lg hover:shadow-blue-400/20 dark:hover:shadow-blue-500/30 
                         transition-shadow duration-300"
              />
            </div>
          </Link>
        </div>
        
        {/* Connect with me text */}
        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400 max-w-md animate-pulse">
          Let&apos;s connect and discuss how we can work together on your next project!
        </p>
      </div>
    </div>
  );
}

export default FindMeCTA;