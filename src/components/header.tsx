'use client';
import {useEffect, useState, useMemo} from "react";
import Link from "next/link";
import {scrollToSection} from "@/lib/helper";
import ThemeSwitcher from "@/components/themeSwitcher";
import {useTheme} from "@/context/ThemeContext";
import {logo} from "@/config/app";
import Image from 'next/image';

const Header = () => {
  const { theme } = useTheme();
  const [isOpen, setOpen] = useState(false);
  const [isFixed, setFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = useMemo(() => [
    { name: 'About', href: '#about', link: 'about' },
    { name: 'Services', href: '#services', link: 'services' },
    { name: 'Resume', href: '#resume', link: 'resume' },
    { name: 'Work', href: '#work', link: 'work' },
    { name: 'Contact', href: '#contact', link: 'contact' }
  ], []);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Fixed header logic
      if (window.scrollY > 80) {
        setFixed(true);
      } else {
        setFixed(false);
      }

      // Active section detection
      const sections = navItems.map(item => item.link);
      
      // No need to push "contact" as it's already included in navItems
      // sections.push("contact");

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  return (
    <section 
      className={`
        bg-white/95 dark:bg-gray-900/95 backdrop-blur-md
        transition-all duration-300 ease-out
        ${isFixed ? 'fixed top-0 w-full z-50 shadow-lg animate-slideDown' : ''}
      `}
    >
      <nav className="container p-4 mx-auto lg:flex lg:justify-between lg:items-center">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <div className="relative overflow-hidden">
              <Image
                className="w-auto h-14 transition-transform duration-500 group-hover:scale-105"
                src={theme === 'dark' ? logo.dark : logo.light}
                alt="Ismail ZAHIR"
                width={160}
                height={32}
                loading="lazy"
              />
              {/* Logo hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 dark:from-blue-500/10 dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="sr-only">{`Ismail ZAHIR's Portfolio`}</span>
          </Link>

          {/* Mobile menu toggle button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none 
                         transition-transform duration-300 ease-in-out hover:scale-105"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Nav items container */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out 
                     bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md 
                     dark:shadow-gray-800/20 lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 
                     lg:bg-transparent lg:dark:bg-transparent lg:relative lg:w-auto 
                     lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0'
          }`}
        >
          {/* Nav links */}
          <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
            {navItems.map((item, index) => (
              <div key={index} className="relative group lg:mx-3">
                <span 
                  onClick={() => {
                    scrollToSection(item.href);
                    setOpen(false);
                  }}
     
                  className={`
                    inline-block text-gray-700 dark:text-gray-200 
                    transition-colors duration-300 cursor-pointer
                    hover:text-blue-500 dark:hover:text-blue-400
                    ${activeSection === item.link ? 'text-blue-600 dark:text-blue-400 font-medium' : ''}
                  `}
                >
                  {item.name}
                </span>
                {/* Animated underline */}
                <span className={`
                  absolute -bottom-1 left-0 w-0 h-0.5
                  bg-gradient-to-r from-blue-500 to-indigo-600
                  transition-all duration-300 ease-out rounded-full
                  ${activeSection === item.link ? 'w-full' : 'group-hover:w-full'}
                `}></span>
              </div>
            ))}
          </div>

          {/* Contact button */}
          <div 
            className="relative mt-4 lg:mt-0 lg:ml-6 overflow-hidden group"
            onClick={() => {
              scrollToSection("contact");
              setOpen(false);
            }}
          >
            <span className={`
              block px-5 py-2 text-sm text-center text-gray-700 dark:text-white
              border border-gray-300 dark:border-gray-700 rounded-md 
              transition-all duration-300 transform cursor-pointer
              bg-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600
              hover:text-white hover:border-transparent
              ${activeSection === "contact" ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-transparent' : ''}
            `}>
              Contact Us
            </span>
            {/* Button hover effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </div>
          
          {/* Theme switcher */}
          <ThemeSwitcher/>
        </div>
      </nav>
    </section>
  );
};

// Add this CSS to your global styles
// @keyframes slideDown {
//   from { transform: translateY(-100%); }
//   to { transform: translateY(0); }
// }
// .animate-slideDown {
//   animation: slideDown 0.3s ease-out forwards;
// }

export default Header;