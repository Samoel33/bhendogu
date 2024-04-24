import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'primary': '#12B0DE',
      'secondary':'#135578',
      'btn':{
        'primary': '#12B0DE',
        'secondary': '#135578',
      },
      'overlay':'rgba(21,56,76,0.7)',
      'text-primary':"#ffffff",
      'paragraph':"#fff9"
    },
    extend: {
      screens: {
        xs: "320px",
      },
      maxWidth: {
        "md-s": "75ch",
        "lg-s": "80ch",
      },
      keyframes: {
        "up-down": {
          from: { transform: "translateY(-2px)" },
          to: { transform: "translateY(0)" },
        },
        "open-nav": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "close-nav": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        "slide-relay": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "heading":{
          "0%":{opacity:'0.2'
                , transform:"translateY(2rem)"},
          "50%": { opacity: "0.5", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0rem)" }
        },
        "card":{
          from:{
            height:"0",
          },
          to:{
            height:"30%"
          }

        }
        
      },
      animation: {
        "up-down": "up-down 1.5s ease-in-out infinite",
        "open-nav": "open-nav 0.8s ease-in-out 1",
        "close-nav": "close-nav 1.8s ease-in-out 1",
        "over-relay":"slide-relay 0.8s ease-in 1",
        "heading-anim":"heading 1.8s ease 1 forwards",
        "paragraph-anim":"heading 1.8s ease-in-out 1 2s forwards",
        "card":"card 1.8s ease-out 1 forwards"
      },

    },
  },
  plugins: [],
};
export default config;
