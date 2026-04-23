/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#F7F7F5",
        section: "#EDEAE6",
        accentPrimary: "#3B1F2B",
        accentSecondary: "#6E3B47",
        highlight: "#A8B5A2",
        muted: "#B8AFA6",
        ink: "#111111"
      },
      boxShadow: {
        soft: "0 20px 45px -24px rgba(17,17,17,0.25)",
        card: "0 18px 36px -24px rgba(59,31,43,0.35)"
      },
      borderRadius: {
        xl2: "1rem",
        xl3: "1.25rem"
      }
    }
  },
  plugins: []
};
