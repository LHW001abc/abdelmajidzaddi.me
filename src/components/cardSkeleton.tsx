"use client";

import { motion } from "framer-motion";

type CardSkeletonProps = {
  type?: 'web' | 'ai' | 'nlp' | 'computer-vision' | 'speech' | 'automation' | 'default';
};

const CardSkeleton = ({ type = 'default' }: CardSkeletonProps) => {
  // Simple mapping of service types to background images and colors
  const getStyle = () => {
    switch(type) {
      case 'web':
        return {
          bgImage: "url('/icons/web-development.png')",
          overlay: "from-emerald-100/80 to-teal-100/80 dark:from-emerald-900/60 dark:to-teal-900/60",
          border: "border-emerald-200 dark:border-emerald-800",
          accent: "bg-emerald-400"
        };
      case 'ai':
        return {
          bgImage: "url('/icons/ai-ml-development.svg')",
          overlay: "from-purple-100/80 to-indigo-100/80 dark:from-purple-900/60 dark:to-indigo-900/60",
          border: "border-purple-200 dark:border-purple-800",
          accent: "bg-purple-400"
        };
      case 'nlp':
        return {
          bgImage: "url('/icons/nlp-solutions.svg')",
          overlay: "from-indigo-100/80 to-blue-100/80 dark:from-indigo-900/60 dark:to-blue-900/60",
          border: "border-indigo-200 dark:border-indigo-800",
          accent: "bg-indigo-400"
        };
      case 'computer-vision':
        return {
          bgImage: "url('/icons/computer-vision.svg')",
          overlay: "from-blue-100/80 to-cyan-100/80 dark:from-blue-900/60 dark:to-cyan-900/60",
          border: "border-blue-200 dark:border-blue-800",
          accent: "bg-blue-400"
        };
      case 'speech':
        return {
          bgImage: "url('/icons/speech-recognition.svg')",
          overlay: "from-orange-100/80 to-red-100/80 dark:from-orange-900/60 dark:to-red-900/60",
          border: "border-orange-200 dark:border-orange-800",
          accent: "bg-orange-400"
        };
      case 'automation':
        return {
          bgImage: "url('/icons/ai-automation.svg')",
          overlay: "from-rose-100/80 to-pink-100/80 dark:from-rose-900/60 dark:to-pink-900/60",
          border: "border-rose-200 dark:border-rose-800",
          accent: "bg-rose-400"
        };
      default:
        return {
          bgImage: "",
          overlay: "from-gray-100/80 to-slate-100/80 dark:from-gray-800/60 dark:to-slate-800/60",
          border: "border-gray-200 dark:border-gray-700",
          accent: "bg-gray-400"
        };
    }
  };
  
  const style = getStyle();

  return (
    <motion.div 
      className={`relative w-full h-full rounded-lg border ${style.border} shadow-md overflow-hidden`}
      initial={{ opacity: 0.7 }}
      animate={{ 
        opacity: [0.7, 0.9, 0.7],
        transition: { 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {/* Background image with proper positioning */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-15"
        style={{ backgroundImage: style.bgImage }}
      ></div>
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${style.overlay}`}></div>
      
      {/* Content placeholders with consistent z-index */}
      <div className="relative z-10 p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <div className={`h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden`}>
            <div 
              className="h-6 w-6 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: style.bgImage }}
            ></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-300 rounded w-32 dark:bg-gray-600"></div>
            <div className="h-2 bg-gray-200 rounded w-24 dark:bg-gray-700"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4 dark:bg-gray-600"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-full dark:bg-gray-700"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6 dark:bg-gray-700"></div>
            <div className="h-3 bg-gray-200 rounded w-4/5 dark:bg-gray-700"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div className="h-8 w-24 bg-gray-300 rounded-md dark:bg-gray-600"></div>
          <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
      
      {/* Loading indicator */}
      <div className="absolute bottom-3 right-3">
        <motion.div 
          className={`h-2 w-2 rounded-full ${style.accent}`}
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}

export default CardSkeleton;