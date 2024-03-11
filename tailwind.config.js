/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0E0E0E",
                primary: "#FFFFFF",
                secondary: "#FCCB05",
            },

            fontFamily: {
                heading: "axiforma",
                bodyContent: "helvetica",
            },
        },
    },
    plugins: [],
};
