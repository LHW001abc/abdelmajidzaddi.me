"use client";

import { motion } from "framer-motion";

const CardSkeleton = () => {
  return (
    <motion.div 
      className="w-full max-w-md mx-auto p-6 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900 overflow-hidden"
      initial={{ opacity: 0.6 }}
      animate={{ 
        opacity: [0.6, 0.8, 0.6],
        transition: { 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700" />
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded-md w-32 dark:bg-gray-600" />
          <div className="h-2 bg-gray-200 rounded-md w-24 dark:bg-gray-700" />
        </div>
      </div>

      <div className="h-4 bg-gray-300 rounded-md w-3/4 mb-4 dark:bg-gray-600" />

      <div className="space-y-3 mt-6">
        <div className="w-full h-3 bg-gray-200 rounded-md dark:bg-gray-700" />
        <div className="w-5/6 h-3 bg-gray-200 rounded-md dark:bg-gray-700" />
        <div className="w-4/5 h-3 bg-gray-200 rounded-md dark:bg-gray-700" />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="w-20 h-8 bg-gray-200 rounded-md dark:bg-gray-700" />
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600" />
      </div>
      
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="h-2 bg-gray-200 rounded-md dark:bg-gray-700" />
        <div className="h-2 bg-gray-200 rounded-md dark:bg-gray-700" />
        <div className="h-2 bg-gray-200 rounded-md dark:bg-gray-700" />
      </div>
    </motion.div>
  );
}

export default CardSkeleton;