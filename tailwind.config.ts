import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-nunito)', 'Inter', 'system-ui', 'sans-serif'],
        'nunito': ['var(--font-nunito)', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 103, 79, 0.5), 0 0 30px rgba(236, 64, 122, 0.3)',
        'glow-sm': '0 0 8px rgba(255, 103, 79, 0.4), 0 0 15px rgba(236, 64, 122, 0.2)',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '200%' }
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)'},
        }
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out forwards',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }: PluginAPI) {
      const newUtilities = {
        '.border-gradient-br-orange-pink': {
          'border-image': 'linear-gradient(to bottom right, #f97316, #db2777) 1',
        },
      };
      addUtilities(newUtilities);
    }
  ],
};
export default config;
