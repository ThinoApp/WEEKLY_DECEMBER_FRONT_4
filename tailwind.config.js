/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            flex: {
                2: '2 2 0%',
            },
            screens: {
                xsm: '400px',
            },
            backgroundColor: {
                primary: '#4452FE',
                secondary: '#02E4C0',
                darkbg: '#181818',
                lightGray: '#5C5C5C',
            },
            borderColor: {
                primary: '#4452FE',
                secondary: '#02E4C0',
                darkbg: '#181818',
                lightGray: '#5C5C5C',
            },
            textColor: {
                primary: '#4452FE',
                secondary: '#02E4C0',
                darkbg: '#181818',
                lightGray: '#5C5C5C',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
