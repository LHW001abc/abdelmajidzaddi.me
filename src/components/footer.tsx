'use client';
import Link from "next/link";
import { useState } from "react";
import {logo, socials} from "@/config/app";
import {useTheme} from "@/context/ThemeContext";
import Image from 'next/image';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <footer className="relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/20 to-transparent"></div>
      <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-xl"></div>
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-200/10 dark:bg-indigo-400/5 rounded-full blur-xl"></div>
      
      <div className="container relative z-10 flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        {/* Logo with hover effect */}
        <Link href="/" className="group relative transition-transform duration-300 hover:scale-105">
          <div className="relative overflow-hidden">
            <Image
              className="w-auto h-14 transition-all duration-500"
              src={theme === 'dark' ? logo.dark : logo.light}
              alt="Abdelmajid ZADDI"
              loading="lazy"
              width={120}
              height={24}
            />
            {/* Logo hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 dark:from-blue-500/10 dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>
        
        {/* Copyright text with animation */}
        <p className="text-sm text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-blue-500 dark:hover:text-blue-400">
          © {currentYear} Abdelmajid ZADDI. All Rights Reserved.
        </p>
        
        {/* Social media links */}
        <div className="flex -mx-2">
          {/* GitHub icon */}
          <a 
            href={socials.github}
            className="mx-2 relative group"
            aria-label="Github"
            onMouseEnter={() => setHoveredIcon('github')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div className={`
              absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 
              opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30
              transition-all duration-300 scale-0 group-hover:scale-150
            `}></div>
            <svg 
              className={`
                w-6 h-6 fill-current transition-all duration-300
                ${hoveredIcon === 'github' 
                  ? 'text-blue-600 dark:text-blue-400 transform scale-110' 
                  : 'text-gray-600 dark:text-gray-300'}
              `} 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
              </path>
            </svg>
          </a>
          
          {/* LinkedIn icon */}
          <a 
            href={socials.linkedin}
            className="mx-2 relative group"
            aria-label="Linkedin"
            onMouseEnter={() => setHoveredIcon('linkedin')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div className={`
              absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 
              opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30
              transition-all duration-300 scale-0 group-hover:scale-150
            `}></div>
            <svg 
              className={`
                w-6 h-6 fill-current transition-all duration-300
                ${hoveredIcon === 'linkedin' 
                  ? 'text-blue-600 dark:text-blue-400 transform scale-110' 
                  : 'text-gray-600 dark:text-gray-300'}
              `} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512"
            >
              <path
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;