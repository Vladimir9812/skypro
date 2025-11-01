import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      lineHeight: '1.5',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiFormLabel-root': {
            fontSize: '0.75rem',
            color: '#000 !important',
          },
          // // Label внутри Input
          // '& .MuiInputLabel-root + .MuiInput-root': {
          //   fontSize: '12px', // label для Input
          // },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottom: 'none !important',
          },
          '&:before:hover': {
            borderBottom: 'none !important',
          },
          '.MuiSelect-select': {
            padding: 0,
            fontSize: '0.75rem',
          },
          '&:after': {
            display: 'none',
          },
        },
        icon: {
          top: '5px',
          fontSize: '1.05rem',
          color: 'black',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          '.MuiButtonBase-root': {
            fontSize: '0.875rem',
          },
        },
      },
    },
  },
});

export { theme };
