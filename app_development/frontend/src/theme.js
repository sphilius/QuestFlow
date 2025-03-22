import { createTheme } from '@mui/material/styles';

// Color palette from UX/UI design document
const theme = createTheme({
  palette: {
    primary: {
      main: '#006D77', // Deep Teal
      light: '#83C5BE', // Light Teal
      dark: '#1A2238', // Midnight Blue
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#EDF6F9', // Muted Yellow
      light: '#FFDDD2', // Light Grey
      dark: '#E29578',
      contrastText: '#1A2238',
    },
    success: {
      main: '#06D6A0', // Success Green
    },
    warning: {
      main: '#FF9F1C', // Alert Orange
    },
    error: {
      main: '#E71D36', // Error Red
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
    text: {
      primary: '#1A2238',
      secondary: '#4A5568',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem',
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '1rem',
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '0.875rem',
    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #006D77 30%, #83C5BE 90%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme;
