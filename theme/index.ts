import { extendTheme } from '@chakra-ui/react';

// Chakra UI teması, renkler ve fontlar burada ayarlanacak
// const theme = extendTheme({
//   config: {
//     initialColorMode: 'light', // Varsayılan renk modu
//     useSystemColorMode: false, // Sistem rengini kullanma
//   },

// });

const theme = extendTheme({
  config: {
    initialColorMode: 'light', // Default color mode
    useSystemColorMode: false, // Don't use system color mode
  },

  styles: {
    global: () => ({
      ':root': {
        '--bg-color': '#F4F6FA',
        '--heading-text-color': '#313E51',
        '--italic-text-color': '#626C7F',
        '--button-text-color': '#313E51',
        '--button-background-color': '#FFFFFF',
        '--button-shadow': '0px 16px 40px 0px rgba(143, 160, 193, 0.14)',
        '--toggle-color': '#A729F5',
        '--day-night-icon': '#626C7F',
        '--circle-color': '#EDF1F9',
      },
      '[data-theme=dark]': {
        '--bg-color': '#313E51',
        '--heading-text-color': '#FFFFFF',
        '--italic-text-color': '#ABC1E1',
        '--button-text-color': '#FFFFFF',
        '--button-background-color': '#3B4D66',
        '--button-shadow': ' 0px 16px 40px 0px rgba(49, 62, 81, 0.14)',
        '--day-night-icon': '#FFFFFF',
        '--circle-color': '#2D3949',
      },
      'html, body': {
        background: 'var(--bg-color)',
        transition: 'background-color 0.3s ease, color 0.3s ease !important',
        fontFamily: 'Rubik, sans-serif',
      },
    }),
  },
  textStyles: {
    display: {
      fontWeight: '500',
      fontSize: '144px',
      lineHeight: '100%',
    },
    headingLBold: {
      fontWeight: '500',
      fontSize: '64px',
      lineHeight: '100%',
    },
    headingLRegular: {
      fontWeight: '300',
      fontSize: '64px',
      lineHeight: '100%',
    },
    headingM: {
      fontWeight: '500',
      fontSize: '36px',
      lineHeight: '100%',
    },
    headingS: {
      fontWeight: '500',
      fontSize: '28px',
      lineHeight: '100%',
    },
    bodyM: {
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '150%',
    },
    bodyS: {
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '150%',
      fontStyle: 'italic',
    },
  },
  breakpoints: {
    base: '0em', // 0px
    sm: '30em', // ~480px
    md: '48em', // ~768px
    lg: '62em', // ~992px
    xl: '80em', // ~1280px
    '2xl': '96em', // ~1536px
  },
  space: {
    4.5: '17px',
  },
});

export default theme;
