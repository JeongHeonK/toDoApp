import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "memo-pattern": "url(/img/memo.png)",
      },
      boxShadow: {
        shadowCustom: "4.5px 3px 0px 2px #0F172A",
      },
    },
  },
  plugins: [],
};
export default config;
