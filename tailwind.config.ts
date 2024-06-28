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
        plusIcon: "url(/img/plus.png) ",
        logo: "url(/img/Logo.png)",
        "logo-sm": "url(/img/logo-sm.png)",
        "btn-edit": "url(/img/btn-edit.png)",
        "btn-plus": "url(/img/btn-plus.png)",
        doneDefault: "url(/img/doneDefault.png)",
        "doneDefault-sm": "url(/img/doneDefault-sm.png)",
        todoDefault: "url(/img/todoDefault.png)",
        "todoDefault-sm": "url(/img/todoDefault-sm.png)",
      },
      boxShadow: {
        shadowCustom: "4.5px 3px 0px 2px #0F172A",
      },
    },
  },
  plugins: [],
};
export default config;
