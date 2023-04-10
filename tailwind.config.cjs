/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            screens: {
                "vsm": "340px",
            },
        },
    },
    plugins: [],
}

