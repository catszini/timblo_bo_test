import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3B82F6', // 깔끔한 파란색
      light: '#60A5FA',
      dark: '#1D4ED8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6B7280', // 중성적인 회색
      light: '#9CA3AF',
      dark: '#374151',
    },
    success: {
      main: '#10B981', // 명확한 초록색
      light: '#34D399',
      dark: '#059669',
    },
    warning: {
      main: '#F59E0B', // 명확한 주황색
      light: '#FBBF24',
      dark: '#D97706',
    },
    error: {
      main: '#EF4444', // 명확한 빨간색
      light: '#F87171',
      dark: '#DC2626',
    },
    info: {
      main: '#3B82F6', // primary와 동일
      light: '#60A5FA',
      dark: '#1D4ED8',
    },
    background: {
      default: '#FFFFFF', // 순백색 배경
      paper: '#FFFFFF',
      neutral: '#F9FAFB',
    },
    text: {
      primary: '#111827', // 진한 검정
      secondary: '#6B7280',
      disabled: '#9CA3AF',
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
    divider: '#E5E7EB',
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
    allVariants: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: '#1E293B',
      fontFamily: 'inherit',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: '#1E293B',
      fontFamily: 'inherit',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#334155',
      fontFamily: 'inherit',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#334155',
      fontFamily: 'inherit',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#475569',
      fontFamily: 'inherit',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: '#475569',
      fontFamily: 'inherit',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#64748B',
      fontFamily: 'inherit',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#64748B',
      fontFamily: 'inherit',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      letterSpacing: '0.025em',
      textTransform: 'none',
      fontFamily: 'inherit',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.4,
      color: '#94A3B8',
      fontFamily: 'inherit',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#94A3B8',
      fontFamily: 'inherit',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#475569',
      fontFamily: 'inherit',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#475569',
      fontFamily: 'inherit',
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          fontFamily: 'inherit',
        },
        body: {
          backgroundColor: '#FFFFFF',
          minHeight: '100vh',
          color: '#111827',
        },
        '*': {
          scrollBehavior: 'smooth',
        },
        a: {
          fontSize: '14px',
          fontWeight: 500,
          color: '#3B82F6',
          textDecoration: 'none',
          '&:hover': {
            color: '#2563EB',
            textDecoration: 'underline',
          },
          '&:visited': {
            color: '#3B82F6',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          height: '36px',
          borderRadius: '0px',
          fontSize: '14px',
          fontWeight: 500,
          padding: '0 16px',
          transition: 'all 0.2s ease-in-out',
          boxShadow: 'none',
          border: '1px solid transparent',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          backgroundColor: 'transparent',
          color: '#3B82F6',
          border: '1px solid #3B82F6',
          '&:hover': {
            backgroundColor: '#3B82F6',
            color: '#ffffff',
            borderColor: '#3B82F6',
          },
          '&.MuiButton-containedSecondary': {
            backgroundColor: 'transparent',
            color: '#6B7280',
            borderColor: '#6B7280',
            '&:hover': {
              backgroundColor: '#6B7280',
              color: '#ffffff',
            },
          },
          '&.MuiButton-containedSuccess': {
            backgroundColor: 'transparent',
            color: '#10B981',
            borderColor: '#10B981',
            '&:hover': {
              backgroundColor: '#10B981',
              color: '#ffffff',
            },
          },
          '&.MuiButton-containedError': {
            backgroundColor: 'transparent',
            color: '#EF4444',
            borderColor: '#EF4444',
            '&:hover': {
              backgroundColor: '#EF4444',
              color: '#ffffff',
            },
          },
          '&.MuiButton-containedWarning': {
            backgroundColor: 'transparent',
            color: '#F59E0B',
            borderColor: '#F59E0B',
            '&:hover': {
              backgroundColor: '#F59E0B',
              color: '#ffffff',
            },
          },
        },
        outlined: {
          backgroundColor: 'transparent',
          color: '#3B82F6',
          border: '1px solid #3B82F6',
          '&:hover': {
            backgroundColor: '#3B82F6',
            color: '#ffffff',
            borderColor: '#3B82F6',
          },
          '&.MuiButton-outlinedSecondary': {
            color: '#6B7280',
            borderColor: '#6B7280',
            '&:hover': {
              backgroundColor: '#6B7280',
              color: '#ffffff',
            },
          },
        },
        text: {
          backgroundColor: 'transparent',
          color: '#3B82F6',
          border: '1px solid #3B82F6',
          '&:hover': {
            backgroundColor: '#3B82F6',
            color: '#ffffff',
          },
          '&.MuiButton-textSecondary': {
            backgroundColor: 'transparent',
            color: '#6B7280',
            borderColor: '#6B7280',
            '&:hover': {
              backgroundColor: '#6B7280',
              color: '#ffffff',
            },
          },
          '&.MuiButton-textError': {
            backgroundColor: 'transparent',
            color: '#EF4444',
            borderColor: '#EF4444',
            '&:hover': {
              backgroundColor: '#EF4444',
              color: '#ffffff',
            },
          },
          '&.MuiButton-textSuccess': {
            backgroundColor: 'transparent',
            color: '#10B981',
            borderColor: '#10B981',
            '&:hover': {
              backgroundColor: '#10B981',
              color: '#ffffff',
            },
          },
          '&.MuiButton-textWarning': {
            backgroundColor: 'transparent',
            color: '#F59E0B',
            borderColor: '#F59E0B',
            '&:hover': {
              backgroundColor: '#F59E0B',
              color: '#ffffff',
            },
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            height: '36px',
            borderRadius: '0px',
            fontSize: '14px',
            backgroundColor: '#ffffff',
            transition: 'all 0.2s ease-in-out',
            '& fieldset': {
              borderColor: '#E5E7EB',
            },
            '&:hover': {
              '& fieldset': {
                borderColor: '#3B82F6',
              },
            },
            '&.Mui-focused': {
              '& fieldset': {
                borderColor: '#3B82F6',
                borderWidth: '1px',
              },
            },
          },
          '& .MuiInputBase-input': {
            padding: '8px 12px',
            color: '#111827',
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          height: '36px',
          borderRadius: '0px',
          fontSize: '14px',
          backgroundColor: '#fff',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E5E7EB',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#3B82F6',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#3B82F6',
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
            backgroundColor: '#F9FAFB',
            fontWeight: 600,
            color: '#111827',
            borderBottom: '1px solid #E5E7EB',
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
            backgroundColor: '#F9FAFB',
          },
          '& .MuiTableCell-body': {
            padding: '12px 16px',
            borderBottom: '1px solid #E5E7EB',
            fontSize: '14px',
            color: '#111827',
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
          borderRadius: '0px',
          border: '1px solid #E5E7EB',
          backgroundColor: 'transparent',
        },
        colorSuccess: {
          backgroundColor: 'transparent',
          color: '#10B981',
          border: '1px solid #10B981',
        },
        colorDefault: {
          backgroundColor: 'transparent',
          color: '#4D5256',
          border: '1px solid #E5E7EB',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: '0px',
          backgroundColor: '#ffffff',
          border: '1px solid #E5E7EB',
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
          margin: '2px 0',
          padding: '8px 12px',
          fontSize: '14px',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'rgba(139, 92, 246, 0.08)',
            color: '#8B5CF6',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(139, 92, 246, 0.12)',
            color: '#8B5CF6',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: 'rgba(139, 92, 246, 0.16)',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          backgroundColor: '#ffffff',
          boxShadow: 'none',
          border: '1px solid #E5E7EB',
          transition: 'all 0.2s ease-in-out',
          overflow: 'hidden',
          '&:hover': {
            boxShadow: 'none',
            borderColor: '#D1D5DB',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          backgroundColor: '#ffffff',
          boxShadow: 'none',
          border: '1px solid #E5E7EB',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            borderColor: '#D1D5DB',
          },
          '&.MuiTableContainer-root': {
            width: '100%',
            overflowX: 'auto',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          fontWeight: 500,
          fontSize: '12px',
          border: '1px solid #E5E7EB',
        },
        filled: {
          '&.MuiChip-colorSuccess': {
            backgroundColor: '#DCFCE7',
            color: '#166534',
            border: '1px solid #BBF7D0',
          },
          '&.MuiChip-colorError': {
            backgroundColor: '#FEE2E2',
            color: '#991B1B',
            border: '1px solid #FECACA',
          },
          '&.MuiChip-colorWarning': {
            backgroundColor: '#FEF3C7',
            color: '#92400E',
            border: '1px solid #FDE68A',
          },
          '&.MuiChip-colorDefault': {
            backgroundColor: '#F3F4F6',
            color: '#374151',
            border: '1px solid #E5E7EB',
          },
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          padding: '8px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-checked': {
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
          '& .MuiSvgIcon-root': {
            fontSize: '20px',
            borderRadius: '2px',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: '8px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-checked': {
            color: '#3B82F6',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
          '& .MuiSvgIcon-root': {
            fontSize: '22px',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: '0',
          marginRight: '20px',
          borderRadius: '0px',
          padding: '4px 8px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '& .MuiFormControlLabel-label': {
            fontSize: '14px',
            color: '#475569',
            fontWeight: 500,
            marginLeft: '10px',
          },
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          '& .MuiFormControlLabel-root': {
            marginBottom: '8px',
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: '58px',
          height: '32px',
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: '2px',
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(26px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: '#3B82F6',
                opacity: 1,
                border: 0,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: '#3B82F6',
              border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: '#E5E7EB',
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.3,
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: '28px',
            height: '28px',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 4px 0 rgba(0,35,11,0.2)',
            borderRadius: '50%',
          },
          '& .MuiSwitch-track': {
            borderRadius: '16px',
            backgroundColor: '#E5E7EB',
            opacity: 1,
            transition: 'all 300ms ease-in-out',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          fontWeight: 500,
          color: '#6366F1',
          textDecoration: 'none',
          transition: 'all 0.2s ease-in-out',
          borderRadius: '4px',
          padding: '2px 4px',
          '&:hover': {
            color: '#4F46E5',
            backgroundColor: 'rgba(99, 102, 241, 0.06)',
            textDecoration: 'none',
          },
          '&:focus': {
            outline: '2px solid rgba(99, 102, 241, 0.2)',
            outlineOffset: '2px',
          },
          '&.Mui-focusVisible': {
            outline: '2px solid rgba(99, 102, 241, 0.2)',
            outlineOffset: '2px',
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          backgroundColor: '#ffffff',
          boxShadow: 'none',
          border: '1px solid #E5E7EB',
          overflow: 'hidden',
          '&:hover': {
            borderColor: '#D1D5DB',
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root': {
            transition: 'all 0.2s ease-in-out',
            '&:nth-of-type(even)': {
              backgroundColor: '#F9FAFB',
            },
            '&:hover': {
              backgroundColor: '#F3F4F6',
            },
          },
          '& .MuiTableCell-body': {
            padding: '12px 16px',
            borderBottom: '1px solid #E5E7EB',
            fontSize: '14px',
            color: '#111827',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          fontSize: '12px',
          fontWeight: 500,
          height: '24px',
          border: '1px solid #E5E7EB',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            borderColor: '#D1D5DB',
          },
        },
        filled: {
          '&.MuiChip-colorSuccess': {
            backgroundColor: '#DCFCE7',
            color: '#166534',
            border: '1px solid #BBF7D0',
          },
          '&.MuiChip-colorError': {
            backgroundColor: '#FEE2E2',
            color: '#991B1B',
            border: '1px solid #FECACA',
          },
          '&.MuiChip-colorWarning': {
            backgroundColor: '#FEF3C7',
            color: '#92400E',
            border: '1px solid #FDE68A',
          },
          '&.MuiChip-colorDefault': {
            backgroundColor: '#F3F4F6',
            color: '#374151',
            border: '1px solid #E5E7EB',
          },
        },
      },
    },
  },
})

export default theme
