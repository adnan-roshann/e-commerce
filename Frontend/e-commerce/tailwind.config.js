/** @type {import('tailwindcss').config} */
export default {
    content: [".index.html","./src/**/*.{js,ts,jsx,tsx}"],
    theme:{
        extend:{
            colors:{
                "rabbit-primary" : "#EB6D20",
            },
        },
    },

plugins: [],
};
