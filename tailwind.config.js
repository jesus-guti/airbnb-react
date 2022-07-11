/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "color-red": "#F55A5A",
                "color-dark": "#2B283A",
                "color-gray": "#918E9B"
            }
        },
    },
    plugins: [],
}