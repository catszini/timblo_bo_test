import { createTheme } from '@mui/material/styles'

// Outlined 테마 설정
const theme = createTheme({
  components: {
    // TextField - 모든 TextField를 Outlined로 설정
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0066FF',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0066FF',
              borderWidth: '2px',
            },
          },
        },
      },
    },
    
    // Select - 모든 Select를 Outlined로 설정
    MuiSelect: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0066FF',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0066FF',
            borderWidth: '2px',
          },
        },
      },
    },
    
    // FormControl
    MuiFormControl: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
    
    // Button - Outlined 버튼 스타일
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
        },
        outlined: {
          borderColor: '#0066FF',
          color: '#0066FF',
          '&:hover': {
            borderColor: '#0052CC',
            backgroundColor: 'rgba(0, 102, 255, 0.04)',
          },
        },
        contained: {
          backgroundColor: '#0066FF',
          '&:hover': {
            backgroundColor: '#0052CC',
          },
        },
      },
    },
    
    // Checkbox
    MuiCheckbox: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          color: '#9CA3AF',
          '&.Mui-checked': {
            color: '#0066FF',
          },
        },
      },
    },
    
    // Switch
    MuiSwitch: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: '#0066FF',
            '& + .MuiSwitch-track': {
              backgroundColor: '#0066FF',
            },
          },
        },
      },
    },
    
    // Chip - Outlined 스타일
    MuiChip: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
      styleOverrides: {
        root: {
          borderRadius: '6px',
        },
        outlined: {
          borderColor: '#E5E5E5',
        },
      },
    },
    
    // Table
    MuiTable: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: '#F8F9FA',
            fontWeight: 600,
            color: '#333',
            borderBottom: '1px solid #E5E5E5',
          },
          '& .MuiTableCell-body': {
            borderBottom: '1px solid #F3F4F6',
          },
          '& .MuiTableRow-root:hover': {
            backgroundColor: '#F9FAFB',
          },
        },
      },
    },
    
    // Dialog
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '12px',
        },
      },
    },
    
    // Alert
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
        outlined: {
          border: '1px solid',
        },
      },
    },
  },
  
  palette: {
    primary: {
      main: '#0066FF',
      light: '#4285F4',
      dark: '#0052CC',
    },
    secondary: {
      main: '#6C757D',
      light: '#ADB5BD',
      dark: '#495057',
    },
    error: {
      main: '#EF4444',
      light: '#F87171',
      dark: '#DC2626',
    },
    warning: {
      main: '#F59E0B',
      light: '#FBBF24',
      dark: '#D97706',
    },
    success: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
    },
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  
  typography: {
    fontFamily: '"Pretendard", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '0.875rem',
    },
    body2: {
      fontSize: '0.75rem',
    },
  },
  
  shape: {
    borderRadius: 8,
  },
})

export default theme
