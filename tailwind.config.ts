import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        unbounded: ["var(--font-unbounded)"],
      },
      colors: {
        accent1: "#4926a8",
        accent2: "#4354dd",
        accent3: "#11a8ed",
        primary:'#060319',
        accentGray:'#64748b'
      },
    },
  },
  plugins: [],
} satisfies Config;
