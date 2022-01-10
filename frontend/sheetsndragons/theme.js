/* eslint-disable import/no-anonymous-default-export */
// color tool: https://material.io/inline-tools/color/

// following Material UI React standard:
// https://material-ui.com/customization/default-theme/
const theme = {
  palette: {
    primary: {
      light: '#C1DBB3',
      main: '#97c27f',
      dark: '#6da64f',
    },
    secondary: {
      light: '#FFC09F',
      main: '#eb834d',
      dark: '#ff5c06',
    },
    background: {
      default: '#EFDEC6',
    },
    error: {
      main: '#af0818'
    },
    blue: {
      main: '#0c82b8',
      dark: '#006197',
    },
    lightBlue: {
      light: '#a8dae5',
      main: '#29aac2',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.64)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: 4,
  },
};


export default theme;