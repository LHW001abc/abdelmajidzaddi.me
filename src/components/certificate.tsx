import { CertificateProps } from "@/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { SiVercel } from "react-icons/si";

const Certificate = ({ data: certificate }: { data: CertificateProps }) => {
  // Default image path or add null check
  const imageSrc = certificate.image || "/placeholder-certificate.png";
  
  return (
    <motion.div 
      className="relative flex items-end overflow-hidden bg-cover rounded-lg h-64 group shadow-lg transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 z-10 group-hover:opacity-75 transition-opacity duration-300" />
      
      <Image 
        src={imageSrc}
        alt={certificate.title}
        fill
        className="object-cover z-0 transition-transform duration-500 group-hover:scale-105"
        priority
      />
      
      <motion.div 
        className="relative w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/20 dark:bg-gray-900/30 z-20 border-t border-gray-200/20 dark:border-gray-700/30"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="mt-2 text-xl font-bold text-white capitalize dark:text-white">
          {certificate.title}
        </h2>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center space-x-2">
            <SiVercel className="text-blue-400 dark:text-blue-300" />
            <p className="text-sm font-medium tracking-wider text-blue-400 uppercase dark:text-blue-300">
              {certificate.issuedBy}
            </p>
          </div>
          <p className="text-xs font-medium tracking-wider text-gray-300 uppercase dark:text-gray-300">
            {certificate.issuedAt}
          </p>
        </div>
        
        {'url' in certificate && certificate.url ? (
          <motion.a 
            href={certificate.url as string}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 dark:bg-gray-800/40 absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-700/60"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View ${certificate.title} certificate`}
          >
            <FiExternalLink className="text-white" />
          </motion.a>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

export default Certificate;