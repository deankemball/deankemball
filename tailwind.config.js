/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',  // Include src
  ],
  theme: {
  	colors: {
  		red: '#EF3E36',
  		black: '#04080F',
  		white: '#FCFCFC',
  		darkGreen: '#8BBC78',
  		lightGreen: '#E7F5D9',
  		whiteGreen: '#F6F8ED',
  		brown: '#513131',
  		orange: '#FB7E56',
  		mbOrange: '#FF4C00',
  		wilma1: '#9381FF',
  		wilma2: '#FF84E8',
  		dwred: '#FF0000',
  		cdodger1: '#141414',
  		cdodger2: '#292929',
  		paper: '#F5F1F0',
  		yellow: '#FBFFDD',
		// yellow: '#F1FF8C',
  		purple: '#7261e9'
  	},
  	extend: {
  		fontFamily: {
  			inter: ["Inter", "sans-serif"],
  			ibm: ["IBM Plex Mono", "monospace"],
  			grotesk: ["Space Grotesk", "sans-serif"],
  			hubot: ["Hubot-Sans", "sans-serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
		  keyframes: {
			scale: {
			  '0%': { transform: 'scale(100%)' },
			  '50%': { transform: 'scale(110%)' },
			  '100%': { transform: 'scale(100%)' },
			},
			wiggle: {
			  '0%, 100%': { transform: 'rotate(-4deg)' },
			  '50%': { transform: 'rotate(4deg)' },
			},
			bounceAndWiggle: {
				'0%, 100%': { transform: 'translateY(0) rotate(-4deg)' },
				'50%': { transform: 'translateY(-10px) rotate(4deg)' },
			  },
		  },
		  animation: {
        scale: 'scale 1s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
		car: 'bounceAndWiggle 1s infinite'
      }
  	}
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-animate")],
};
