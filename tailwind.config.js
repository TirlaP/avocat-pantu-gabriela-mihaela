/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#800000", // Maroon - like in image 1
          foreground: "hsl(var(--primary-foreground))",
          100: "#f8e7e7",
          200: "#e6cccc",
          300: "#c99999",
          400: "#b36666",
          500: "#993333",
          600: "#800000",
          700: "#660000",
          800: "#4d0000",
          900: "#330000",
        },
        secondary: {
          DEFAULT: "#d4b97d", // Gold accent color
          foreground: "#44331a",
          100: "#f7f2e6",
          200: "#f0e6cc",
          300: "#e6d9b3",
          400: "#dcc999",
          500: "#d4b97d",
          600: "#c7a55c",
          700: "#b38f3c",
          800: "#997a28",
          900: "#806619",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        teal: {
          DEFAULT: "#315f67", // Teal color - adjusted from screenshot
          light: "#e6f0f2",
          dark: "#204046",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "text-cycle": {
          "0%, 26.66%": { opacity: "1", transform: "translateY(0)" },
          "33.33%, 36.66%": { opacity: "0", transform: "translateY(10px)" },
          "43.33%, 69.99%": { opacity: "1", transform: "translateY(0)" },
          "76.66%, 83.33%": { opacity: "0", transform: "translateY(10px)" },
          "90%, 100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s ease-out",
        "fade-up": "fade-up 0.7s ease-out",
        "text-cycle": "text-cycle 9s infinite",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-prose-body)',
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
