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
        bg-white/90 dark:bg-gray-900/95 backdrop-blur-lg
        transition-all duration-500 ease-out
        ${isFixed ? 'fixed top-0 w-full z-50 shadow-xl shadow-purple-500/10 dark:shadow-purple-800/10 animate-slideDown' : ''}
        border-b border-purple-100 dark:border-purple-900/40
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-blue-500/5 to-violet-500/5 dark:from-purple-500/10 dark:via-blue-600/10 dark:to-violet-600/10 opacity-60"></div>

      <nav className="container p-4 mx-auto lg:flex lg:justify-between lg:items-center relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                className="w-auto h-14 transition-transform duration-500 group-hover:scale-110"
                src={theme === 'dark' ? logo.dark : logo.light}
                alt="Abdelmajid ZADDI"
                loading="lazy"
              />
              {/* Logo hover effect - enhanced glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-blue-500/20 to-violet-500/20 
                            dark:from-purple-500/30 dark:via-blue-600/30 dark:to-violet-600/30 
                            opacity-0 group-hover:opacity-100 transition-all duration-500 
                            group-hover:blur-sm"></div>
            </div>
            <span className="sr-only">{`Abdelmajid ZADDI's Portfolio`}</span>
          </Link>

          {/* Mobile menu toggle button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none 
                         transition-all duration-300 ease-in-out hover:scale-110"
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
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-500 ease-in-out 
                     bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-md 
                     shadow-purple-500/5 dark:shadow-purple-800/5 lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 
                     lg:bg-transparent lg:dark:bg-transparent lg:relative lg:w-auto 
                     lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0'
          }`}
        >
          {/* Nav links */}
          <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
            {navItems.map((item, index) => (
              <div key={index} className="relative group lg:mx-4">
                <span 
                  onClick={() => {
                    scrollToSection(item.href);
                    setOpen(false);
                  }}
     
                  className={`
                    inline-block text-gray-700 dark:text-gray-200 
                    transition-all duration-300 cursor-pointer py-2 px-3 rounded-lg
                    group-hover:text-purple-600 dark:group-hover:text-purple-400
                    group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20
                    ${activeSection === item.link ? 
                      'text-purple-600 dark:text-purple-400 font-medium bg-purple-50 dark:bg-purple-900/20' : ''}
                  `}
                >
                  {item.name}
                </span>
                {/* Animated magical underline with glow */}
                <span className={`
                  absolute -bottom-1 left-0 w-0 h-0.5
                  bg-gradient-to-r from-purple-500 via-blue-500 to-violet-500
                  transition-all duration-500 ease-out rounded-full
                  group-hover:w-full group-hover:shadow-glow-sm
                  ${activeSection === item.link ? 'w-full shadow-glow-sm' : ''}
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
              border border-purple-200 dark:border-purple-800 rounded-lg
              transition-all duration-500 transform cursor-pointer
              bg-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-violet-500
              hover:text-white hover:border-transparent hover:shadow-glow
              ${activeSection === "contact" ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-violet-500 text-white border-transparent shadow-glow' : ''}
            `}>
              Contact Me
            </span>
            {/* Button hover effect - ethereal glow */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:blur-md"></span>
          </div>
          
          {/* Theme switcher */}
          <div className="mt-4 lg:mt-0 lg:ml-6">
            <ThemeSwitcher/>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;