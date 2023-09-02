/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        hero: "url('/public/images/header-bg.jpg')",
        services: "url('/public/images/menu-bg.jpg')",
        footer: "url('/public/images/footer-bg.jpg') ",
      },

      boxShadow: {
        normal: "0px 10px 30px 0px rgba(182, 136, 52, 0.2)",
      },

      colors: {
        navbar: "rgba(20, 2, 0, 0.8)",
        brand: {
          50: "#b68834",
          100: "#777777",
          150: "#eee",
          200: "rgba(0, 0, 0, 0.8)",
        },
      },
    },
  },
  plugins: [],
};
