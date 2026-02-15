/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef4ff",
          100: "#dce8ff",
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
        },
        accent: {
          100: "#fee2e2",
          600: "#dc2626",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f8fafc",
        },
        muted: {
          600: "#475569",
          700: "#334155",
        },
        text: {
          DEFAULT: "#0f172a",
          secondary: "#334155",
        },
      },
      fontFamily: {
        sans: [
          "Source Sans 3",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
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
