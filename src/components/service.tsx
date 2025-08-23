import { ServiceProps } from "@/lib/types";
import Link from "next/link";
import ElectricBorder from './ElectricBorder';
import { 
  Code, 
  Database, 
  BarChart3, 
  Layers, 
  Smartphone, 
  Cloud,
  BrainCircuit, 
  Rocket,
  ArrowUpRight,
  Zap,
  CheckCircle
} from 'lucide-react';

const Service = ({ data: service }: { data: ServiceProps }) => {
  
  // Function to get the appropriate icon component based on service name
  const getServiceIcon = () => {
    const serviceName = service.name.toLowerCase();
    
    if (serviceName.includes('data') || serviceName.includes('analytic')) {
      return <BarChart3 className="w-7 h-7" strokeWidth={1.5} />;
    } else if (serviceName.includes('web') || serviceName.includes('frontend') || serviceName.includes('ui')) {
      return <Layers className="w-7 h-7" strokeWidth={1.5} />;
    } else if (serviceName.includes('ai') || serviceName.includes('machine') || serviceName.includes('intelligence')) {
      return <BrainCircuit className="w-7 h-7" strokeWidth={1.5} />;
    } else if (serviceName.includes('mobile') || serviceName.includes('app')) {
      return <Smartphone className="w-7 h-7" strokeWidth={1.5} />;
    } else if (serviceName.includes('cloud') || serviceName.includes('devops')) {
      return <Cloud className="w-7 h-7" strokeWidth={1.5} />;
    } else if (serviceName.includes('backend') || serviceName.includes('database')) {
      return <Database className="w-7 h-7" strokeWidth={1.5} />;
    } else if (serviceName.includes('consult') || serviceName.includes('strategy')) {
      return <Rocket className="w-7 h-7" strokeWidth={1.5} />;
    } else {
      // Default icon for any other service
      return <Code className="w-7 h-7" strokeWidth={1.5} />;
    }
  };

  // Get service category color
  const getCategoryColor = () => {
    const serviceName = service.name.toLowerCase();
    
    if (serviceName.includes('ai') || serviceName.includes('machine') || serviceName.includes('intelligence') || serviceName.includes('nlp') || serviceName.includes('computer') || serviceName.includes('vision') || serviceName.includes('speech') || serviceName.includes('automation')) {
      return {
        gradient: 'from-purple-500 via-violet-500 to-purple-600',
        bg: 'bg-purple-500/10',
        border: 'border-purple-200/30 dark:border-purple-800/30',
        text: 'text-purple-600 dark:text-purple-400',
        shadow: 'hover:shadow-purple-500/20',
        electric: '#9333ea' // purple-500
      };
    } else if (serviceName.includes('web') || serviceName.includes('frontend') || serviceName.includes('ui')) {
      return {
        gradient: 'from-blue-500 via-cyan-500 to-blue-600',
        bg: 'bg-blue-500/10',
        border: 'border-blue-200/30 dark:border-blue-800/30',
        text: 'text-blue-600 dark:text-blue-400',
        shadow: 'hover:shadow-blue-500/20',
        electric: '#06b6d4' // cyan-500
      };
    } else {
      return {
        gradient: 'from-indigo-500 via-blue-500 to-indigo-600',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-200/30 dark:border-indigo-800/30',
        text: 'text-indigo-600 dark:text-indigo-400',
        shadow: 'hover:shadow-indigo-500/20',
        electric: '#6366f1' // indigo-500
      };
    }
  };

  const colors = getCategoryColor();
  
  return (
    <ElectricBorder
      color={colors.electric}
      speed={0.8}
      chaos={0.6}
      thickness={1}
      style={{ borderRadius: 16 }}
      className="h-full"
    >
      <div 
        className={`group relative p-8 space-y-4 rounded-2xl flex flex-col h-full
                   bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 
                   dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-800/80 dark:to-gray-700/50
                   transition-all duration-500 ease-out transform 
                   hover:scale-[1.02] hover:-translate-y-2
                   hover:shadow-2xl ${colors.shadow}
                   hover:from-white hover:via-blue-50/30 hover:to-indigo-50/40
                   dark:hover:from-gray-800 dark:hover:via-gray-700/80 dark:hover:to-gray-600/50
                   overflow-hidden backdrop-blur-sm`}
      >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Enhanced Floating Background Elements */}
      <div className={`absolute -right-8 -top-8 w-32 h-32 ${colors.bg} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
      <div className={`absolute -left-6 -bottom-6 w-24 h-24 ${colors.bg} rounded-full blur-xl opacity-15 group-hover:opacity-30 transition-all duration-500`}></div>
      
      {/* Category colored top border */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} rounded-t-2xl`}></div>
      
      {/* Service Number Badge */}
      <div className={`absolute top-6 right-6 w-10 h-10 rounded-xl bg-gradient-to-br ${colors.gradient} p-0.5 shadow-lg`}>
        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
          <span className={`text-xs font-bold ${colors.text}`}>
            0{Math.floor(Math.random() * 6) + 1}
          </span>
        </div>
      </div>

      {/* Enhanced Icon */}
      <div className="relative z-10 flex items-center justify-start mb-6">
        <div 
          className={`relative w-18 h-18 rounded-2xl p-1 
                     bg-gradient-to-br ${colors.gradient} 
                     transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                     shadow-lg group-hover:shadow-xl ${colors.shadow}`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl w-full h-full flex items-center justify-center relative overflow-hidden">
            {/* Icon background pattern */}
            <div className={`absolute inset-0 ${colors.bg} opacity-20`}></div>
            <span className={`relative z-10 text-transparent bg-clip-text bg-gradient-to-br ${colors.gradient}`}>
              {getServiceIcon()}
            </span>
          </div>
          {/* Icon glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
        </div>
      </div>

      {/* Service Title with enhanced styling */}
      <div className="relative z-10 space-y-3">
        <Link href={`/services/${service.slug}`} className="block group/title">
          <h3 className={`text-xl font-bold text-gray-800 dark:text-white 
                         group-hover/title:${colors.text} transition-colors duration-300 
                         line-clamp-2 leading-tight`}>
            {service.name}
          </h3>
          <span className={`block w-0 h-0.5 bg-gradient-to-r ${colors.gradient} 
                           group-hover/title:w-full transition-all duration-300 mt-2 rounded-full`}></span>
        </Link>

        {/* Service excerpt with better typography */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
          {service.excerpt}
        </p>
      </div>

      {/* Features Preview */}
      <div className="flex-1 relative z-10 space-y-3">
        <div className="flex flex-wrap gap-2">
          {service.tags?.slice(0, 2).map((tag: string, index: number) => (
            <span key={index} className={`px-2 py-1 text-xs font-medium rounded-lg
                                         bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm
                                         ${colors.text} border border-white/20 dark:border-gray-600/20`}>
              #{tag}
            </span>
          )) || (
            <>
              <span className={`px-2 py-1 text-xs font-medium rounded-lg
                               bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm
                               ${colors.text} border border-white/20 dark:border-gray-600/20`}>
                #premium
              </span>
              <span className={`px-2 py-1 text-xs font-medium rounded-lg
                               bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm
                               ${colors.text} border border-white/20 dark:border-gray-600/20`}>
                #custom
              </span>
            </>
          )}
        </div>

        {/* Key Features */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Custom solutions</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>Fast delivery</span>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Button */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/20 dark:border-gray-700/20">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Starting from <span className="font-semibold text-gray-700 dark:text-gray-300">Contact</span>
        </div>
        
        <Link href={`/services/${service.slug}`}
              className={`group/btn p-3 rounded-xl transition-all duration-300 transform 
                         bg-gradient-to-r ${colors.gradient} 
                         hover:shadow-lg ${colors.shadow} 
                         hover:scale-110 hover:-rotate-3`}>
          <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </ElectricBorder>
  );
}

export default Service;