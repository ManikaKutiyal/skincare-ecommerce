/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"]
      },
      colors: {
        base: "#F9F8FF",
        offWhite: "#F9F8FF",
        section: "#F1EEFA",
        accentPrimary: "#1A1A3E",
        accentSecondary: "#C9A84C",
        highlight: "#6C3FC5",
        muted: "#CFC7E2",
        ink: "#101024",
        primary: "#1A1A3E",
        secondary: "#C9A84C",
        accent: "#6C3FC5",
        background: "#F9F8FF"
      },
      backgroundImage: {
        "camliqa-mesh":
          "radial-gradient(45% 52% at 15% 18%, rgba(108,63,197,0.45) 0%, rgba(108,63,197,0) 65%), radial-gradient(65% 75% at 84% 76%, rgba(26,26,62,0.92) 12%, rgba(26,26,62,1) 100%), linear-gradient(120deg, rgba(26,26,62,1) 0%, rgba(34,23,84,0.98) 45%, rgba(26,26,62,1) 100%)"
      },
      boxShadow: {
        soft: "0 24px 55px -28px rgba(26,26,62,0.34)",
        card: "0 20px 42px -24px rgba(108,63,197,0.32)"
      },
      borderRadius: {
        xl2: "1rem",
        xl3: "1.25rem"
      }
    }
  },
  plugins: []
};
