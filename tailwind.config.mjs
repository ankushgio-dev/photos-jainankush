/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#f5f1ea',
        ink: '#1a1a1a',
        muted: '#6b6660',
        line: '#d8d2c7',
        accent: '#8a6f47',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      maxWidth: {
        prose: '38rem',
        gallery: '88rem',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
