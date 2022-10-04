
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js, jsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    theme: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Oswald"'],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      backgroundImage: {
        'pack-train': "url('./src/components/images/Tranquili_tea.png')",
      },
      aspectRatio: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      },
      colors: {
        // sky: colors.sky,
        // cyan: colors.cyan,
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'red': '#fef2f2',
        'carnation': { DEFAULT: '#F75C4B', '50': '#FFFBFB', '100': '#FEE9E7', '200': '#FCC6C0', '300': '#FAA399', '400': '#F97F72', '500': '#F75C4B', '600': '#F52B15', '700': '#C91C09', '800': '#931407', '900': '#5D0D04' },
      },
    },
    variants: {
      aspectRatio: ['responsive', 'hover']
    },
    extend: {},
  },
  presets: [require('full-palette')],

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tw-elements/dist/plugin'),
    require('tailwindcss/colors')
  ],
};
