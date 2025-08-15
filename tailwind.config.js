/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Habilita o modo JIT
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Verifica arquivos nas páginas
    './components/**/*.{js,ts,jsx,tsx}', // Verifica arquivos nos componentes
  ],
  theme: {
    extend: {},
  },
  darkMode: 'selector', // Usar o modo escuro com base no seletor
  plugins: [],
}
