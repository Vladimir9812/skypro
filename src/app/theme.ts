import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  components: {
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
            fontSize: 12,
          },
          '&:after': {
            display: 'none',
          },
        },
        icon: {
          top: 5,
          fontSize: 16,
          color: 'black',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          '.MuiButtonBase-root': {
            fontSize: 14,
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          flexGrow: 1,

          '&::-webkit-scrollbar': {
            width: 8,
            height: 8,
          },

          '&::-webkit-scrollbar-thumb': {
            cursor: 'pointer',
            borderRadius: 99,
            backgroundColor: '#D9D9D9',
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '.MuiTableCell-root': {
            fontSize: 12,

            '&:first-child': {
              paddingLeft: 32,
            },

            '&:last-child': {
              paddingRight: 32,
            },
          },
          '.MuiTableCell-head': {
            color: '#999',
            fontWeight: 400,
            padding: 4,
          },
          '.MuiTableCell-body': {
            border: 'none',
            padding: 8,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '.MuiInputBase-input': {
            fontSize: 12,
            color: '#999',
            padding: 10,

            '&::placeholder': {
              color: '#999',
              opacity: 1,
            },
          },
          '.MuiOutlinedInput-root': {
            borderRadius: 6,

            '&:hover fieldset': {
              borderColor: '#999',
            },
            '&.Mui-focused fieldset': {
              borderWidth: 1,
              borderColor: '#999',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          gap: 12,
          padding: '4px 16px',
          background: '#F4F5F6',

          '& .MuiChip-label': {
            padding: 0,
          },
          '& .MuiChip-icon': {
            color: '#000',
            margin: 0,
          },
        },
      },
    },
  },
});

export { theme };
