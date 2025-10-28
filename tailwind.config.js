/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mattegold: '#d4af37'
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif']
      },
      backgroundImage: {
        'tech-pattern': "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=7f96b7b1e4d22f5b8d0c6f1b33b1f3fc')"
      }
    }
  },
  plugins: []
};
