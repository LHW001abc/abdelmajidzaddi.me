'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../styles/animated-technologies.css';

interface Technology {
  name: string;
  icon: string;
  category?: string;
}

const AnimatedTechnologies = () => {
  const [loading, setLoading] = useState(true);

  // Curated technologies for the animation - organized by importance and visual appeal
  const topRowTechs = [
    { name: "Python", icon: "/icons/python.png", category: "programming" },
    { name: "TensorFlow", icon: "/icons/tensorflow.png", category: "ai" },
    { name: "Machine Learning", icon: "/icons/ml.png", category: "ai" },
    { name: "LLM", icon: "/icons/llm.png", category: "ai" },
    { name: "Computer Vision", icon: "/icons/cv.jpg", category: "ai" },
    { name: "PyTorch", icon: "/icons/py.png", category: "ai" },
    { name: "Hugging Face", icon: "/icons/hg.png", category: "ai" },
    { name: "NLP", icon: "/icons/nlp.jpg", category: "ai" },
    { name: "Deep Learning", icon: "/icons/dl.jpg", category: "ai" },
    { name: "MLflow", icon: "/icons/MLFLOW.png", category: "mlops" }
  ];

  const bottomRowTechs = [
    { name: "Java", icon: "/icons/java.png", category: "programming" },
    { name: "Spring Boot", icon: "/icons/spring-boot.png", category: "framework" },
    { name: "Docker", icon: "/icons/docker.png", category: "devops" },
    { name: "Kubernetes", icon: "/icons/kb.png", category: "devops" },
    { name: "PostgreSQL", icon: "/icons/postgres.png", category: "database" },
    { name: "Apache Spark", icon: "/icons/ap.png", category: "bigdata" },
    { name: "Git", icon: "/icons/git.png", category: "tools" },
    { name: "REST", icon: "/icons/REST.png", category: "api" },
    { name: "MySQL", icon: "/icons/mysql.png", category: "database" },
    { name: "Apache Airflow", icon: "/icons/air.png", category: "workflow" }
  ];

  useEffect(() => {
    // Simulate loading for smooth entrance effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const TechItem = ({ tech, index }: { tech: Technology; index: number }) => (
    <div
      className="tech-item group relative flex-shrink-0 mx-3 p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200/40 dark:border-gray-700/40 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500"
      style={{
        minWidth: '130px',
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="flex flex-col items-center space-y-3">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={48}
            height={48}
            className="object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm"
            onError={(e) => {
              // Fallback to a default tech icon if specific icon fails
              const target = e.target as HTMLImageElement;
              target.src = '/icons/placeholder.svg';
            }}
          />
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-purple-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl scale-150"></div>
        </div>
        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-purple-600 transition-all duration-300">
          {tech.name}
        </span>
      </div>
      
      {/* Hover background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );

  const MarqueeRow = ({ 
    technologies, 
    direction = 'left', 
    speed = 60,
    className = '' 
  }: { 
    technologies: Technology[];
    direction?: 'left' | 'right';
    speed?: number;
    className?: string;
  }) => {
    const animationName = direction === 'left' ? 'scroll-left' : 'scroll-right';

    return (
      <div className={`marquee-container relative overflow-hidden ${className}`}>
        {/* Gradient fade overlays */}
        <div className="absolute left-0 top-0 w-24 h-full marquee-fade-left z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 h-full marquee-fade-right z-20 pointer-events-none"></div>
        
        <div
          className="flex animate-marquee"
          style={{
            animation: `${animationName} ${speed}s linear infinite`,
            width: 'max-content'
          }}
        >
          {/* First set */}
          {technologies.map((tech, index) => (
            <TechItem key={`first-${tech.name}-${index}`} tech={tech} index={index} />
          ))}
          {/* Duplicate set for seamless loop */}
          {technologies.map((tech, index) => (
            <TechItem key={`second-${tech.name}-${index}`} tech={tech} index={index} />
          ))}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="space-y-8 animate-pulse">
        {/* Loading skeleton with shimmer effect */}
        <div className="flex space-x-4 overflow-hidden">
          {[...Array(7)].map((_, i) => (
            <div
              key={`top-skeleton-${i}`}
              className="flex-shrink-0 w-32 h-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-2xl"
              style={{
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s infinite'
              }}
            />
          ))}
        </div>
        <div className="flex space-x-4 overflow-hidden">
          {[...Array(7)].map((_, i) => (
            <div
              key={`bottom-skeleton-${i}`}
              className="flex-shrink-0 w-32 h-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-2xl"
              style={{
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s infinite',
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
        
        <style jsx>{`
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
      {/* Top row - AI/ML Technologies (left to right) */}
      <MarqueeRow 
        technologies={topRowTechs} 
        direction="left" 
        speed={70}
        className="py-2"
      />
      
      {/* Bottom row - Development & Infrastructure (right to left) */}
      <MarqueeRow 
        technologies={bottomRowTechs} 
        direction="right" 
        speed={50}
        className="py-2"
      />
      
      {/* Optional: Add a subtle hint for interaction */}
      <div className="text-center mt-6">
        <p className="text-xs text-gray-500 dark:text-gray-400 opacity-70">
          Hover over technologies to pause the animation
        </p>
      </div>
    </div>
  );
};

export default AnimatedTechnologies;
