/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                HauoraLight: ['Hauora-Light'],
                Hauora: ['Hauora-Regular'],
                HauoraBold: ['Hauora-Bold']
            }
        }
    },
    plugins: []
};
