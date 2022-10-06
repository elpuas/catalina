module.exports = {
  content: [
    './src/components/blocks/**/*.{html,js}',
    './src/components/bricks/**/*.{html,js}',
    './src/components/structures/**/*.{html,js}',
    './src/components/templates/**/*.{html,js}',
    './src/pages/**/*.{html,js}',
  ],
  theme: {
    colors: {
      primary: '#5E6F00',
      secondary: '#B6D600',
      tertiary: '#D8FF00',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      interBold: ['Inter Bold', 'sans-serif'],
      interBlack: ['Inter Black', 'sans-serif'],
    },
    fontSize: {
      hero: '6rem',
      heroMobile: '3.625rem',
      sectionHeader: '2.625rem',
      sectionHeaderMobile: '2.25rem',
      sectionContent: '1.5rem',
      base: '1.125rem',
    },
    extend: {},
  },
  plugins: [],
};
