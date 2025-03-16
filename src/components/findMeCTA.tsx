import Link from "next/link";
import Image from "next/image";
import { socials } from "@/config/app";
import { useState } from "react";

const FindMeCTA = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  
  return (
    <div className="w-full py-12 md:py-16">
      <div className="relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 group shadow-xl max-w-3xl mx-auto rounded-xl">
        {/* Animated background gradients that extend beyond the container */}
        <div className="absolute -left-24 -top-24 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full blur-3xl transform transition-all duration-700 group-hover:scale-125"></div>
        <div className="absolute -right-24 -bottom-24 w-72 h-72 bg-gradient-to-tr from-blue-400/20 to-violet-500/20 rounded-full blur-3xl transform transition-all duration-700 group-hover:scale-125"></div>
        <div className="absolute left-1/4 top-1/3 w-60 h-60 bg-gradient-to-tr from-purple-400/10 to-blue-500/10 rounded-full blur-3xl transform transition-all duration-700 group-hover:scale-110"></div>
        
        {/* Fiery decorative border */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-purple-500/5 dark:from-orange-500/10 dark:via-pink-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative z-10 flex flex-col items-center px-4 py-10 md:px-8 md:py-12">
          {/* Title with fiery gradient and animated underline */}
          <div className="relative mb-8 md:mb-10 group/title">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-white group-hover:from-orange-500 group-hover:to-pink-600 transition-all duration-500">
              Find me on
            </h2>
            <span className="block h-1 mt-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full 
                          transition-all duration-500 w-0 group-hover:w-full mx-auto shadow-glow-sm"></span>
          </div>
          
          {/* Social icons with enhanced animations - with appropriate spacing */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-20 my-8 w-full">
            {/* GitHub */}
            <Link 
              href={socials.github} 
              target="_blank"
              title="GitHub"
              className="relative group/icon"
              onMouseEnter={() => setHoveredIcon('github')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className={`
                absolute -inset-6 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20
                dark:from-orange-500/30 dark:to-pink-600/30
                transition-all duration-500 opacity-0 group-hover/icon:opacity-100 scale-0 group-hover/icon:scale-100
                blur-xl
              `}></div>
              <div className={`
                relative transition-all duration-700 transform
                ${hoveredIcon === 'github' ? 'scale-125 rotate-[360deg]' : 'scale-100 rotate-0'}
              `}>
                <Image 
                  src="/logo/github.gif" 
                  alt="GitHub" 
                  width={56} 
                  height={56}
                  className="rounded-full shadow-lg hover:shadow-orange-500/30 dark:hover:shadow-pink-600/40 
                           transition-shadow duration-300"
                />
              </div>
              <div className={`
                absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max whitespace-nowrap
                opacity-0 group-hover/icon:opacity-100 translate-y-0 group-hover/icon:translate-y-1
                transition-all duration-300 text-sm font-medium
                text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600
              `}>
                GitHub
              </div>
            </Link>
            
            {/* LinkedIn */}
            <Link 
              href={socials.linkedin} 
              target="_blank"
              title="LinkedIn"
              className="relative group/icon"
              onMouseEnter={() => setHoveredIcon('linkedin')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className={`
                absolute -inset-6 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20
                dark:from-orange-500/30 dark:to-pink-600/30
                transition-all duration-500 opacity-0 group-hover/icon:opacity-100 scale-0 group-hover/icon:scale-100
                blur-xl
              `}></div>
              <div className={`
                relative transition-all duration-700 transform
                ${hoveredIcon === 'linkedin' ? 'scale-125 rotate-[360deg]' : 'scale-100 rotate-0'}
              `}>
                <Image 
                  src="/logo/linkedin.gif" 
                  alt="LinkedIn" 
                  width={56} 
                  height={56}
                  className="rounded-full shadow-lg hover:shadow-orange-500/30 dark:hover:shadow-pink-600/40 
                           transition-shadow duration-300"
                />
              </div>
              <div className={`
                absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max whitespace-nowrap
                opacity-0 group-hover/icon:opacity-100 translate-y-0 group-hover/icon:translate-y-1
                transition-all duration-300 text-sm font-medium
                text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600
              `}>
                LinkedIn
              </div>
            </Link>
          </div>
          
          {/* Connect with me text with fiery gradient - more compact */}
          <div className="w-full max-w-xl mx-auto px-4">
            <p className="mt-8 mb-6 text-base md:text-lg text-gray-600 dark:text-gray-400 text-center relative group/text">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white group-hover:from-orange-500 group-hover:to-pink-600 transition-all duration-500 font-medium">
                Let&apos;s connect and discuss how we can work together on your next project!
              </span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500/5 via-pink-600/5 to-purple-600/5 dark:from-orange-500/10 dark:via-pink-600/10 dark:to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
            </p>
          </div>
          
          {/* CTA Button - more compact */}
          <a 
            href="mailto:contact@abdelmajidzaddi.me" 
            className="relative mt-6 px-8 py-3 text-base font-medium text-white transition-all duration-300 transform rounded-lg overflow-hidden group/button hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 group-hover/button:from-pink-600 group-hover/button:to-orange-500 transition-all duration-500"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-600/20 opacity-0 group-hover/button:opacity-100 transition-all duration-300 blur-lg"></span>
            <span className="relative z-10">Get In Touch</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FindMeCTA;