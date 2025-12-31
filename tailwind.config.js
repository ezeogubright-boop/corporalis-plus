export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#39E01E",
        "background-light": "#FAFAFA",
        "background-dark": "#121212",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E1E1E",
        "text-main-light": "#111111",
        "text-main-dark": "#EAEAEA",
        "text-muted-light": "#666666",
        "text-muted-dark": "#A0A0A0",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
        'grid-pattern-dark': "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)",
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-in': 'slide-in 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
