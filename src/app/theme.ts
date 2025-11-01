import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      lineHeight: '1.5',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiFormLabel-root': {
            fontSize: '12px',
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
            fontSize: '12px',
          },
          '&:after': {
            display: 'none',
          },
        },
        icon: {
          top: '5px',
          fontSize: '16px',
          color: 'black',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          '.MuiButtonBase-root': {
            fontSize: '14px',
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          flexGrow: 1,
          height: '100px',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '.MuiTableCell-root': {
            fontSize: '12px',

            '&:first-child': {
              paddingLeft: '32px',
            },

            '&:last-child': {
              paddingRight: '32px',
            },
          },
          '.MuiTableCell-head': {
            color: '#999',
            fontWeight: '400',
            padding: '4px',
          },
          '.MuiTableCell-body': {
            border: 'none',
            padding: '8px',
          },
        },
      },
    },
  },
});

export { theme };
