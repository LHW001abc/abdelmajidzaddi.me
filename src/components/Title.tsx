"use client";

import React, { useState, useEffect } from "react";

const Title = ({ 
  className = "", 
  textClass = "", 
  children,
  accentColor = "blue-500",
  shadowColor = "blue-300"
}: { 
  className?: string, 
  textClass?: string, 
  children: React.ReactNode,
  accentColor?: string,
  shadowColor?: string
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const underlineElements = document.querySelectorAll('.underline-element');
    underlineElements.forEach((element, index) => {
      setTimeout(() => {
        (element as HTMLElement).style.width = (element as HTMLElement).dataset.width || '0';
        (element as HTMLElement).style.opacity = '1';
      }, 300 + (index * 150));
    });
  }, []);

  return (
    <div className={`relative transition-all duration-700 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${className}`}>
      <h1 
        className={`
          text-2xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-${accentColor} to-purple-600
          capitalize lg:text-4xl relative z-10 
          hover:scale-105 transition-transform duration-300
          drop-shadow-lg ${textClass}
        `}
      >
        {children}
      </h1>
      
      <div className="relative flex mx-auto mt-3 overflow-hidden">
        <span 
          className="underline-element inline-block h-1.5 bg-gradient-to-r from-${accentColor} to-purple-600 rounded-full opacity-0 transition-all duration-700 ease-in-out shadow-lg shadow-${shadowColor}/50"
          style={{ width: '0', transitionDelay: '0.3s' }}
          data-width="160px"
        ></span>
        <span 
          className="underline-element inline-block h-1.5 mx-1 bg-gradient-to-r from-purple-600 to-${accentColor} rounded-full opacity-0 transition-all duration-700 ease-in-out shadow-lg shadow-${shadowColor}/50"
          style={{ width: '0', transitionDelay: '0.45s' }}
          data-width="12px"
        ></span>
        <span 
          className="underline-element inline-block h-1.5 bg-gradient-to-r from-${accentColor} to-purple-600 rounded-full opacity-0 transition-all duration-700 ease-in-out shadow-lg shadow-${shadowColor}/50"
          style={{ width: '0', transitionDelay: '0.6s' }}
          data-width="4px"
        ></span>
      </div>
      
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-${accentColor}/20 to-purple-600/10 rounded-full blur-xl z-0 animate-pulse"></div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-${accentColor}/10 rounded-full blur-xl z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}

export default Title;