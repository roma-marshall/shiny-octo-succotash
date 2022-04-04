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
            }
        },
        colors: {
            gray: {
                50: '#f6fafd'
            },
        }
    },
    plugins: [],
}