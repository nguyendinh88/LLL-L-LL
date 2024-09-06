/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './packages/renderer/index.html',
    './packages/renderer/dist/index.html',
    './packages/renderer/dist/*.js',
    './packages/renderer/src/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
