module.exports = {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true
    },
    spacing: {
      0: '0px',
      px: '1px',
      4: '4px',
      8: '8px',
      16: '16px',
      32: '32px',
      64: '64px',
      96: '96px',
      112: '112px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3C3C3B',
          dark: '#1F1F1F',
        },
        secondary: {
          DEFAULT: '#986E47',
          craft: '#C4A181'
        },
        neutral: {
          dark: '#F9F5F2',
          light: '#F8F8F8'
        },
        success: {
          DEFAULT: '#008315',
          light: '#F2F9F2'
        },
        error: {
          DEFAULT: '#A9231C',
          light: '#FCF5F4'
        }
      },
    },
  },
  plugins: [],
}
