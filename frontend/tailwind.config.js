/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      bgr:"#FAFAFA", 
      text:"#1A1A1A",
      primary:"#2DC8EA",
      secondary:"#A1679E",
      danger: "#F53A3A",
      warning: "#FFC700",
      good: "#2DEA62",
      grey: "#D9D9D9",
    },
    extend: {},
  },
  plugins: [],
}

