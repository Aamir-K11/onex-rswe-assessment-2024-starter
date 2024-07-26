import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        teal: "#00F3B9",
        darkblue: '#0036C3'
      },
      screens: {
        'mobile': '640px',

        'tablet': '768px',
  
        'laptop': '1024px',
  
        'desktop': '1280px',
      },
    }
  }
} satisfies Config

export default config