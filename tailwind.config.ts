import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "neutral-dark-gray": "#4D4D4D",
        "neutral-light-gray": "#89939E",
        "neutral-gray": "#717171",
        "neutral-silver": "#4CAF4F",
        primary: "#4CAF4F",
      },
      backgroundImage: {
        customer: "url(../public/customers-1.jpg)",
      },
    },
  },
  plugins: [],
};
export default config;
