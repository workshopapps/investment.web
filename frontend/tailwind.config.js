/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                HauoraLight: ['Hauora-Light'],
                Hauora: ['Hauora-Regular'],
                HauoraBold: ['Hauora-Bold']
            },
            backgroundImage: {
                'hero-desktop': "url('./assets/index/header-desktop.svg')",
                'hero-mobile': "url('./assets/index/header-mobile.svg')",
                'how-mobile': "url('./assets/how-it-works/bg-mobile.png')",
                'how-desktop': "url('./assets/how-it-works/bg-desktop.png')",
                'desk-signup': "url('./assets/signup/bg-signup.png')"
            },
            colors: {
                primary101: '#0B5934',
                primary102: '#1BD47B',
                primaryGray: '#525A65',
                primary103: '#139757',
                secondaryBlack: '#000511',
                shade500: '#F5F5F5',
                shade400: '#F9F9F9',
                shade100: '#E0E2E5',
                shadeBlue: '#CCE3FF',
                primary104: '#1F2226'
            },
            width : {
                210: '300px',
                520: '520px'
            }
        }
    },
    plugins: []
};
