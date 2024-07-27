import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: "#eff5ff",
                    100: "#dbe8fe",
                    200: "#bfd7fe",
                    300: "#93bbfd",
                    400: "#609afa",
                    500: "#3b82f6",
                    600: "#2570eb",
                    700: "#1d64d8",
                    800: "#1e55af",
                    900: "#1e478a",
                    950: "#172e54",
                },
            },
        },
    },

    plugins: [forms],
};
