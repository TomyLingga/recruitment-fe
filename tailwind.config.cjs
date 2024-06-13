/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins"
    },
    extend: {
      colors: {
        glass: 'rgba(255,255,255,0.25)',
        Dangers:'#E74C3C',
        Teal: "#2F6C6D",
        Greens:'#239B56',
        HummingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "#e9e9ea",
        grays: "#4B4B4C",
        smoothGray: '#F2F4F4',
        warning: "#D68910",
        smoothYellow: '#FEF9E7',
        colorsBodies: '#4E2E54',
        colorsBodies1:'#954F75',
        colorsBodies2:'#F8DAC3',
        colorsBodies3:'#F8F4E9',
        colorBodies: '#8d5a46',
        colorBodies1:'#da3323',
        colorBodies2:'#2c4c5c',
        colorBodies3:'#e48e21',
        colorBodies4:'#a5a4a8',
        colorv2Bodies: '#C5D1EB',
        colorv2Bodies1:'#92AFD7',
        colorv2Bodies2:'#5A7684',
        colorv2Bodies3:'#395B50',
        colorv2Bodies4:'#1F2F16',
        colorv3Bodies: '#0e3308',
        colorv3Bodies1:'#023e48',
        colorv3Bodies2:'#1b666b',
        colorv3Bodies3:'#a64510',
        colorv3Bodies4:'#ffa948',
        colorv4Bodies: '#FFFFFF',
        colorv4Bodies1:'#F5EA54',
        colorv4Bodies2:'#FD6500',
        colorv4Bodies3:'#0568BF',
        colorv4Bodies4:'#003D64',
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        }
      },
      backgroundImage:{
        'inl-img' : "url('https://inl.co.id/wp-content/uploads/2021/06/pabrik-3.jpg')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
