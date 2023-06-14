/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      zIndex: {
        '-1': '1',
        '--1': '-1'
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['Cormorant Garamond'],
      'cyreal': ['Lora'],
      'spectral': ['Spectral'],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald',],
      'body': ['"Open Sans"',],
      juniper: 'Juniper',
    },
    height: {
      '88': '22rem',
      '104': '26rem',
      '112': '28rem',
      '128': '32rem',
      '144': '36rem',
      '160': '40rem',
    },
    screens: {
      'xsm': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'full': '100%'

    },
    rotate: {
      '90': '90deg',
      '270': '270deg',
    },

    display: ["group-hover"]
  },
  plugins: [],
}
