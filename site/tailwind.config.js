/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxxl: { max: "1735px" },
      // => @media (max-width: 1535px) { ... }

      xxl: { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md_x: { max: "850px" },
      // => @media (max-width: 767px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      smx: { max: "370px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        Lalezar: ["Lalezar", "sans-serif"],
        League_Gothic: ["League Gothic", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        roxo: "#C985F1",

        roxoPerson: "#8A37E6",
        cinzas: "#D7E3E1",
        cinzaPerson: "#D7E3E1",
        cinzaPerson1: "#404040",
        vermelho: "#FA5252",
        vermelho_drop: "#FDA9A9",
        typePokemon_fogo: "#FF5C00",
        typePokemon_voador: "#6082D9",
        typePokemon_planta: "#178930",
        typePokemon_venenoso: "#4C26B9",
        typePokemon_eletrico: "#FFB800",
        typePokemon_agua: "#00A3FF",
        typePokemon_aco: "#B1B7BB",
        typePokemon_psiquico: "#A5286D",
        typePokemon_dark: "#030406",
        typePokemon_dragao: "#458894",
        typePokemon_fantasma: "#705898",
        typePokemon_lutador: "#C03028",
        typePokemon_terra: "#E0C068",
        typePokemon_rocha: "#B8A038",
        typePokemon_gelo: "#98D8D8",
      },
      height: {
        mxh: "100%",
        300: "300px",
        400: "400px",
        500: "500px",
        700: "700px",
        1200: "1200px",
        1500: "1500px",
      },
      width: {
        mxw: "100%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
