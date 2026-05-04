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
        base: "#F8F6F2",
        offWhite: "#F8F6F2",
        section: "#F0EDE8",
        accentPrimary: "#1A1D36",
        accentSecondary: "#C5A059",
        highlight: "#D1D1D1",
        muted: "#D1D1D1",
        ink: "#1A1D36",
        primary: "#1A1D36",
        secondary: "#C5A059",
        accent: "#D1D1D1",
        text: "#333333",
        divider: "#D1D1D1",
        background: "#F8F6F2"
      },
      backgroundImage: {
        "camliqa-mesh":
          "radial-gradient(45% 52% at 15% 18%, rgba(197,160,89,0.30) 0%, rgba(197,160,89,0) 65%), radial-gradient(65% 75% at 84% 76%, rgba(26,29,54,0.92) 12%, rgba(26,29,54,1) 100%), linear-gradient(120deg, rgba(26,29,54,1) 0%, rgba(35,29,55,0.98) 45%, rgba(26,29,54,1) 100%)"
      },
      boxShadow: {
        soft: "0 24px 55px -28px rgba(26,29,54,0.28)",
        card: "0 20px 42px -24px rgba(197,160,89,0.25)"
      },
      borderRadius: {
        xl2: "1rem",
        xl3: "1.25rem"
      }
    }
  },
  plugins: []
};
