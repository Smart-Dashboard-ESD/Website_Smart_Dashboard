/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1366px",
      default: "1440px",
      "3xl": "1536px",
      "4xl": "1680px",
      "5xl": "1920px",
      "6xl": "2560px",
    },
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      Primary: {
        Light: "#E8F2F8",
        LightHover: "#DDECF4",
        LightActive: "#B8D7E8",
        Normal: "#1B7FB5",
        NormalHover: "#1872A3",
        NormalActive: "#166691",
        Dark: "#145F88",
        DarkHover: "#104C6D",
        DarkActive: "#0C3951",
        Darker: "#092C3F",
      },
      Success: {
        Light: "#F2F6E7",
        LightHover: "#EBF2DA",
        LightActive: "#d6e3b3",
        Normal: "#7aa60b",
        NormalHover: "#6e950a",
        NormalActive: "#628509",
        Dark: "#5c7d08",
        DarkHover: "#496407",
        DarkActive: "#374b05",
        Darker: "#2b3a04",
      },
      Info: {
        Light: "#E6F8F9",
        LightHover: "#D9F4F6",
        LightActive: "#B1E8ED",
        Normal: "#02B6C5",
        NormalHover: "#02A4B1",
        NormalActive: "#02929E",
        Dark: "#028994",
        DarkHover: "#016D76",
        DarkActive: "#015259",
        Darker: "#014045",
      },
      Warning: {
        Light: "#FEF5E7",
        LightHover: "#FDEFDA",
        LightActive: "#FBDEB3",
        Normal: "#F3960A",
        NormalHover: "#DB8709",
        NormalActive: "#C27808",
        Dark: "#B67108",
        DarkHover: "#925A06",
        DarkActive: "#6D4405",
        Darker: "#553504",
      },
      Danger: {
        Light: "#FBEAE7",
        LightHover: "#F8DFDB",
        LightActive: "#F1BDB6",
        Normal: "#D22912",
        NormalHover: "#BD2510",
        NormalActive: "#A8210E",
        Dark: "#9E1F0E",
        DarkHover: "#7E190B",
        DarkActive: "#5E1208",
        Darker: "#4A0E06",
      },
      Greyscale: {
        Light: "#F4F4F4",
        LightHover: "#EFEFEF",
        LightActive: "#DEDEDE",
        Normal: "#939393",
        NormalHover: "#848484",
        NormalActive: "#767676",
        Dark: "#6E6E6E",
        DarkHover: "#585858",
        DarkActive: "#424242",
        Darker: "#333333",
      },
      white: "#FFFFFF",
      Black: {
        Light: "#ECECEC",
        LightHover: "#E3E3E3",
        LightActive: "#C5C5C5",
        Normal: "#444444",
        NormalHover: "#3D3D3D",
        NormalActive: "#363636",
        Dark: "#333333",
        DarkHover: "#292929",
        DarkActive: "#1F1F1F",
        Darker: "#181818",
      },
    },
  },
  plugins: [],
};
