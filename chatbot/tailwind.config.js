// tailwind.config.js
module.exports = {
  content: [
    "./chatbot.html",
    "./**/*.html",
    "./**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        esprit: '#bee1e6', /* couleur messages et étendu */
        primary: '#0b6b8b', /* exemple si besoin */
        footerGray: '#929292',
        chatBlue: '#0d76a6'
      },
      boxShadow: {
        'soft': '0 8px 20px rgba(16,24,40,0.06)'
      },
      borderRadius: {
        'xl2': '14px'
      }
    },
  },
  plugins: [],
}
