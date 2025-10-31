import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      lineHeight: '1.5',
    },
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

export { theme };
