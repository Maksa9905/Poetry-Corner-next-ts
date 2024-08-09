import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
    },
    colors: {
      neutral_01: '#656d4f',
      neutral_02: '#9b9b84',
      neutral_03: '#fbeddb',
      neutral_04: '#e1d0bc',
      neutral_05: '#c9a88d',
      red: '#FF6347',

      monochrome_01: '#1d2022',
      monochrome_02: '#494c4e',
      monochrome_03: '#787a7b',
      monochrome_04: '#cecfd0',
      monochrome_05: '#dfe1e2',
      white: '#fff',

      transparent: 'transparent',
    },
    backgroundImage: {
      logo: 'url(https://svgshare.com/i/18nH.svg)',
      menu: 'url(https://svgshare.com/i/18n5.svg)',
      vk_icon: 'url(https://svgshare.com/i/18oM.svg)',
      yt_icon: 'url(https://svgshare.com/i/18mU.svg)',
      tg_icon: 'url(https://svgshare.com/i/18n6.svg)',
      pen: 'url(https://iimg.su/s/29/th_QvFk9MghGsEbTusV2PikerHWmJnLTmX7YOvyvdv6.png)',
      right_arrow: 'url(https://svgshare.com/i/18o1.svg)',
    },
  },
  plugins: [],
};

export default config;
