import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-foreground": "var(--primary-foreground)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
