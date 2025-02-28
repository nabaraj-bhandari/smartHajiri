/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary/Background Colors (60%)
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",

        // Secondary Colors (30%)
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-light": "rgb(var(--color-primary-light) / <alpha-value>)",
        "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
        "text-tertiary": "rgb(var(--color-text-tertiary) / <alpha-value>)",

        // Accent Colors (10%)
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",

        // Button Colors
        "btn-primary": "rgb(var(--color-btn-primary) / <alpha-value>)",
        "btn-primary-hover":
          "rgb(var(--color-btn-primary-hover) / <alpha-value>)",
        "btn-secondary": "rgb(var(--color-btn-secondary) / <alpha-value>)",
        "btn-secondary-hover":
          "rgb(var(--color-btn-secondary-hover) / <alpha-value>)",
        "btn-danger": "rgb(var(--color-btn-danger) / <alpha-value>)",
        "btn-danger-hover":
          "rgb(var(--color-btn-danger-hover) / <alpha-value>)",
        "btn-success": "rgb(var(--color-btn-success) / <alpha-value>)",
        "btn-success-hover":
          "rgb(var(--color-btn-success-hover) / <alpha-value>)",
        "btn-warning": "rgb(var(--color-btn-warning) / <alpha-value>)",
        "btn-warning-hover":
          "rgb(var(--color-btn-warning-hover) / <alpha-value>)",
        "btn-info": "rgb(var(--color-btn-info) / <alpha-value>)",
        "btn-info-hover": "rgb(var(--color-btn-info-hover) / <alpha-value>)",
        "btn-light": "rgb(var(--color-btn-light) / <alpha-value>)",
        "btn-light-hover": "rgb(var(--color-btn-light-hover) / <alpha-value>)",
        "btn-dark": "rgb(var(--color-btn-dark) / <alpha-value>)",
        "btn-dark-hover": "rgb(var(--color-btn-dark-hover) / <alpha-value>)",
        "btn-link": "rgb(var(--color-btn-link) / <alpha-value>)",
        "btn-link-hover": "rgb(var(--color-btn-link-hover) / <alpha-value>)",

        // Light Colors
        "light-violet": "rgb(var(--color-light-violet) / <alpha-value>)",
        "light-violet-text":
          "rgb(var(--color-light-violet-text) / <alpha-value>)",

        "light-indigo": "rgb(var(--color-light-indigo) / <alpha-value>)",
        "light-indigo-text":
          "rgb(var(--color-light-indigo-text) / <alpha-value>)",

        "light-blue": "rgb(var(--color-light-blue) / <alpha-value>)",
        "light-blue-text": "rgb(var(--color-light-blue-text) / <alpha-value>)",

        "light-green": "rgb(var(--color-light-green) / <alpha-value>)",
        "light-green-text":
          "rgb(var(--color-light-green-text) / <alpha-value>)",

        "light-yellow": "rgb(var(--color-light-yellow) / <alpha-value>)",
        "light-yellow-text":
          "rgb(var(--color-light-yellow-text) / <alpha-value>)",

        "light-orange": "rgb(var(--color-light-orange) / <alpha-value>)",
        "light-orange-text":
          "rgb(var(--color-light-orange-text) / <alpha-value>)",

        "light-red": "rgb(var(--color-light-red) / <alpha-value>)",
        "light-red-text": "rgb(var(--color-light-red-text) / <alpha-value>)",
      },
      borderColor: {
        DEFAULT: "rgb(var(--color-border) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
