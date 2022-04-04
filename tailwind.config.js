module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
                display: ['Volkhov', 'serif']
            },
            colors: {
                gray: {
                    50: '#F6FAFD'
                },
            },
            fontSize: {
                '6xl': ['3.5rem', '4.25rem']
            },
            zIndex: {
                '-1': '-1'
            }
        },
    },
    plugins: [],
}