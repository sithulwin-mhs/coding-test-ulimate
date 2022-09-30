/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'heading-font': '22px',
        'default-font':'14px',
        'modle-title-font':'18px',
        'modal-sub-title-font':'12px'
    },
    colors: {
        'title-color': '#54BAB9',
        'default-color': '#000000',
        'search-color':'rgba(68, 68, 68, 0.5)',
        'confirm-color':'#01577d',
        'placehoder-color':'#ACB3C0',
        'update-color':'#EDC339',
        'delete-color':'#CD211D',
        'input-outline':'rgba(34, 122, 161, 0.5)'
    }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
}