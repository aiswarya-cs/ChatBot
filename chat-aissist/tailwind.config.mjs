/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)", color: "#3b82f6" },
          "100%": { opacity: 1, transform: "translateY(0px)", color: "#a855f7" },
        },
      },
      animation: {
        fadeUp: "fadeUp 1s ease-out",
      },
    },
  },
  plugins: [],
};
