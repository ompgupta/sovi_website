module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        '1st': " linear-gradient(103deg, #fa5853, #f46692 50%, #ffc444 103%)",
         '2nd':"linear-gradient(0deg, #1d1e1f, rgba(29, 30, 30, 0))",
      },
      colors:{
           'prime-white':"#f4f8fb",
           'prime-black':"#1d1e1f"
      },
      height: {
        '85': '85vh',
      },
    },
  },
  plugins: [],
}
