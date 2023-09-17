/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',

    extend: {

         keyframes: {
        wiggle: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.01)',boxShadow:'10px 5px 50px 1px rgba(0, 0, 0,.1)' },
          '100%': { transform: 'scale(1)' },
        }
      },
            animation: {
        wiggle: 'wiggle .8s ease-in-out infinite',
      },


      colors: {

      
        "primary-100": '#181d49',
        "primary-200":'#3C488A',
        "primary-300":' #5263c4',
        "primary-400":'#ECF2F9',
        "secondary-100":'#000000',
        "secondary-200":'#333333',
        "secondary-300":'#666666',
        "secondary-400":'#fcfcfc',
      },
       fontFamily: {
        'nunito': [ 'Nunito Sans', 'sans-serif' ],
        'poppins': [ 'Poppins', 'sans-serif' ]

      },
       backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(0 ,0, 0,0.8), rgba(24, 29, 73,.9)), url('https://wallpapers.com/images/hd/information-technology-3d-circuit-symbol-s7hpo0fa1vr1k5ru.jpg')",
      
    },
    },
  },
  plugins: [],
}