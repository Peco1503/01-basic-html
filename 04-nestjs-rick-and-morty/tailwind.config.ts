import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rick-and-morty-green": "#A6E22E",
      },
    },
  },
  plugins: [],
};
export default config;
