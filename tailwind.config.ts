import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "img-card":"url('C:/Users/lukas/Documents/New Project/nutri-smart/public/cat.png')",
      },
      textColor: {
        'Mevkgreen': '#033136',
        'Mevk-darkgreen': '#011315',
        'Mevkgolden': '#dbbc65',
        'Mevkligth': '#e5e9cc',
        'Mevkjeans': '#5c747c',
        'NewPalet-green-0': '#75bc43',
        'NewPalet-green-1': '#549335',
        'NewPalet-green-2': '#4a6438',
        'NewPalet-green-3': '#4a6236',
        'NewPalet-green-4': '#2e4110',
        'NewPalet-green-5': '#1a3114',
        'NewPalet-green-6': '#131c0a',
        'NewPalet-green-blur-0': '#9aa89c',
        'NewPalet-green-blur-1': '#738c6d',
        'NewPalet-green-blur-2': '#879064',
        'NewPalet-yellow': '#d9c49c',
        'NewPalet-jeans': '#455158'
      },
      gradientColorStops:{
        'Mevkgreen': '#033136',
        'Mevk-darkgreen': '#011315',
        'Mevkgolden': '#dbbc65',
        'Mevkligth': '#e5e9cc',
        'Mevkjeans': '#5c747c',
        'NewPalet-green-0': '#75bc43',
        'NewPalet-green-1': '#549335',
        'NewPalet-green-2': '#4a6438',
        'NewPalet-green-3': '#4a6236',
        'NewPalet-green-4': '#2e4110',
        'NewPalet-green-5': '#1a3114',
        'NewPalet-green-6': '#131c0a',
        'NewPalet-green-blur-0': '#9aa89c',
        'NewPalet-green-blur-1': '#738c6d',
        'NewPalet-green-blur-2': '#879064',
        'NewPalet-yellow': '#d9c49c',
        'NewPalet-jeans': '#455158'
        
      },
      backgroundColor:{
        'Mevkgreen': '#033136',
        'Mevk-darkgreen': '#011315',
        'Mevkgolden': '#dbbc65',
        'Mevkligth': '#e5e9cc',
        'Mevkjeans': '#5c747c',
        'NewPalet-green-0': '#75bc43',
        'NewPalet-green-1': '#549335',
        'NewPalet-green-2': '#4a6438',
        'NewPalet-green-3': '#4a6236',
        'NewPalet-green-4': '#2e4110',
        'NewPalet-green-5': '#1a3114',
        'NewPalet-green-6': '#131c0a',
        'NewPalet-green-blur-0': '#9aa89c',
        'NewPalet-green-blur-1': '#738c6d',
        'NewPalet-green-blur-2': '#879064',
        'NewPalet-yellow': '#d9c49c',
        'NewPalet-jeans': '#455158'
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'md-green': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgb(117, 188, 67,0.9)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'lg-green': '0 10px 15px -3px rgb(117, 188, 67,0.9)', 
        none: 'none',
      },
      borderRadius: {
        'none': '0',
       'sm': '0.125rem',
       DEFAULT: '0.25rem',
       'md': '0.375rem',
       'lg': '0.5rem',
       'full': '9999px',
       'large': '12px',
       'nice': '187px',
      },

      height: {
        'niceVh': '86vh',
        'hCard': '234px'
      },
      color: {
        Mevkgreen: '#033136',
        Mevkgolden: '#dbbc65',
        Mevkligth: '#e5e9cc',
        Mevkjeans: '#5c747c'
      },
      dropShadow: {
        '3xl-green': 'rgb(117, 188, 67,0.9)', 
      }
       
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
