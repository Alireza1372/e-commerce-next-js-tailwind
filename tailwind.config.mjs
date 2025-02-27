/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ctaBanner: "url('/cta-banner.jpg')",
      },
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        accent: "#F78F9c",
        blackish: "#1b1b1b",
      },
    },
  },
  plugins: [],
};
