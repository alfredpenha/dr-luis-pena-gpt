/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#163A59",
          foreground: "#F8FAF6",
          hover: "#1B466B",
          dark: "#1B466B",
          darker: "#122E47",
          soft: "#E8EEF2",
          50: "#EEF3F7",
          100: "#DCE6EE",
          700: "#163A59",
          800: "#122E47",
        },
        accent: {
          DEFAULT: "#D13A32",
          soft: "#FDE8E6",
          100: "#FDE8E6",
        },
        surface: {
          DEFAULT: "#FFFEFC",
          elevated: "#FFFFFF",
          muted: "#F8F5F0",
        },
        muted: {
          DEFAULT: "#F3F0EA",
          subtle: "#EDE8DF",
          600: "#556271",
          700: "#3C4A58",
        },
        text: {
          DEFAULT: "#0F172A",
          muted: "#475569",
          secondary: "#475569",
        },
        border: {
          DEFAULT: "#D7DDE3",
          strong: "#C7CFD7",
        },
        ring: {
          DEFAULT: "rgba(22, 58, 89, 0.32)",
        },
        whatsapp: {
          DEFAULT: "#15803D",
          dark: "#166534",
          darker: "#14532D",
          hover: "#166534",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["DM Serif Display", "serif"],
      },
      fontSize: {
        h1: ["1.875rem", { lineHeight: "2.25rem" }],
        "h1-desktop": ["2.75rem", { lineHeight: "3.25rem" }],
        h2: ["1.625rem", { lineHeight: "2.125rem" }],
        "h2-desktop": ["1.875rem", { lineHeight: "2.375rem" }],
        h3: ["1.25rem", { lineHeight: "1.75rem" }],
        "h3-desktop": ["1.375rem", { lineHeight: "1.875rem" }],
        body: ["1rem", { lineHeight: "1.625rem" }],
        secondary: ["0.875rem", { lineHeight: "1.375rem" }],
      },
      borderRadius: {
        card: "12px",
        block: "16px",
      },
      boxShadow: {
        soft: "0 4px 12px rgba(15, 23, 42, 0.06)",
        card: "0 2px 8px rgba(15, 23, 42, 0.05)",
      },
      maxWidth: {
        layout: "72rem",
      },
    },
  },
};
