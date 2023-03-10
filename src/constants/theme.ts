import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  textStyles: {
    title: {
      fontSize: '18px',
      fontWeight: 500,
      color: '#333333',
    },
    subtitle: {
      fontSize: '16px',
      fontWeight: 500,
      color: '#333333',
    },
    body: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#666660',
    },
    description: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#666660',
    },
  },
  fontSizes: {
    xxs: '12px',
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    '2xl': '26px',
    '3xl': '36px',
    '4xl': '40px',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  colors: {
    transparent: 'transparent',
    black: '#333333',
    white: '#fff',
    bg: '#F7F7F7',
    font: {
      primary: '#333333',
      secondary: '#666660',
      red: '#E30459',
    },
    shadow: '#EFEFEF',
    gray: {
      100: '#F3F3F3',
      200: '#D8D8D8',
      300: '#ECECEC',
      400: '#F7F7F7',
    },
  },
  space: {},
})
