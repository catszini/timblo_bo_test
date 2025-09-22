import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0066FF', // 기존 파란색
    },
    secondary: {
      main: '#64748B', // 회색 계열
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#292A2B',
      secondary: '#4D5256',
    },
    grey: {
      100: '#F8F9FA',
      200: '#F1F3F4',
      300: '#E5E5E5',
      400: '#9AA0A6',
      500: '#6B7280',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h5: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
      color: '#292A2B',
    },
    body1: {
      fontSize: '14px',
      color: '#292A2B',
    },
    body2: {
      fontSize: '14px',
      color: '#4D5256',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          height: '36px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          backgroundColor: '#0066FF',
          color: '#fff',
          border: '1px solid #0066FF',
          '&:hover': {
            backgroundColor: '#0052CC',
          },
        },
        outlined: {
          backgroundColor: 'transparent',
          color: '#0066FF',
          border: '1px solid #0066FF',
          '&:hover': {
            backgroundColor: '#f0f7ff',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            height: '36px',
            borderRadius: '8px',
            fontSize: '14px',
            backgroundColor: '#fff',
            '& fieldset': {
              borderColor: '#E5E5E5',
            },
            '&:hover fieldset': {
              borderColor: '#E5E5E5',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0066FF',
              borderWidth: '1px',
            },
          },
          '& .MuiInputBase-input': {
            padding: '6px 12px',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: '36px',
          borderRadius: '8px',
          fontSize: '14px',
          backgroundColor: '#fff',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E5E5E5',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E5E5E5',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0066FF',
            borderWidth: '1px',
          },
        },
        select: {
          padding: '6px 32px 6px 12px',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: 0,
          minWidth: '100%',
          width: '100%',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: '#f8f9fa',
            fontWeight: 600,
            color: '#292A2B',
            borderBottom: '1px solid #E5E5E5',
            fontSize: '14px',
            padding: '14px 16px',
            whiteSpace: 'nowrap',
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root:hover': {
            backgroundColor: '#F8F9FA',
          },
          '& .MuiTableCell-body': {
            padding: '12px 16px',
            borderBottom: '1px solid #F1F3F4',
            fontSize: '14px',
            color: '#292A2B',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: '24px',
          fontSize: '12px',
          fontWeight: 500,
          borderRadius: '6px',
        },
        colorSuccess: {
          backgroundColor: '#10B981',
          color: '#fff',
        },
        colorDefault: {
          backgroundColor: '#E5E5E5',
          color: '#4D5256',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          borderRadius: '8px',
          '&.MuiTableContainer-root': {
            width: '100%',
            overflowX: 'auto',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: '1px solid #E5E5E5',
          boxShadow: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#292A2B',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          borderBottom: '1px solid #E5E5E5',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          margin: '2px 0',
          padding: '8px 12px',
          '&:hover': {
            backgroundColor: '#f5f6f8',
          },
          '&.Mui-selected': {
            backgroundColor: '#f0f7ff',
            color: '#0066ff',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#f0f7ff',
            },
          },
        },
      },
    },
  },
})

export default theme
