import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea', // 모던 그라데이션 블루
      light: '#9bb3f7',
      dark: '#4a4bbd',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#764ba2', // 세련된 그라데이션 퍼플
      light: '#a775c4',
      dark: '#532982',
    },
    success: {
      main: '#06D6A0', // 생동감 있는 민트그린
      light: '#38e5b5',
      dark: '#059669',
    },
    warning: {
      main: '#FFD23F', // 따뜻한 골드
      light: '#ffe066',
      dark: '#ccaa32',
    },
    error: {
      main: '#FF6B6B', // 부드러운 코랄 레드
      light: '#ff9999',
      dark: '#cc5555',
    },
    info: {
      main: '#4ECDC4', // 차분한 터쿼이즈
      light: '#7dd8d1',
      dark: '#3ea39d',
    },
    background: {
      default: '#FAFBFC', // 매우 연한 회색
      paper: '#FFFFFF',
      neutral: '#F8FAFC',
    },
    text: {
      primary: '#1E293B', // 부드러운 진한 회색
      secondary: '#64748B',
      disabled: '#94A3B8',
    },
    grey: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    },
    divider: '#E2E8F0',
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
    borderRadius: 8,
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
          background: 'linear-gradient(135deg, #FAFBFC 0%, #F8FAFC 50%, #F1F5F9 100%)',
          minHeight: '100vh',
          transition: 'all 0.3s ease',
        },
        '*': {
          scrollBehavior: 'smooth',
        },
        '@keyframes fadeInUp': {
          from: {
            opacity: 0,
            transform: 'translateY(30px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        '@keyframes pulse': {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.8,
          },
        },
        '@keyframes shimmer': {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
        a: {
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
          '&:visited': {
            color: '#6366F1',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          height: '44px',
          borderRadius: '14px',
          fontSize: '14px',
          fontWeight: 600,
          padding: '0 24px',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          boxShadow: 'none',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)',
          },
          '&:active': {
            transform: 'translateY(-1px) scale(1.01)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
          color: '#ffffff',
          border: 'none',
          '&:hover': {
            background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
            boxShadow: '0 12px 40px -12px rgba(99, 102, 241, 0.4)',
          },
          '&.MuiButton-containedSecondary': {
            background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #7C3AED 0%, #9333EA 100%)',
              boxShadow: '0 12px 40px -12px rgba(139, 92, 246, 0.4)',
            },
          },
          '&.MuiButton-containedSuccess': {
            background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
              boxShadow: '0 12px 40px -12px rgba(16, 185, 129, 0.4)',
            },
          },
          '&.MuiButton-containedError': {
            background: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
              boxShadow: '0 12px 40px -12px rgba(239, 68, 68, 0.4)',
            },
          },
          '&.MuiButton-containedWarning': {
            background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
              boxShadow: '0 12px 40px -12px rgba(245, 158, 11, 0.4)',
            },
          },
        },
        outlined: {
          background: 'rgba(99, 102, 241, 0.1)',
          color: '#6366F1',
          border: 'none',
          backdropFilter: 'blur(8px)',
          '&:hover': {
            background: 'rgba(99, 102, 241, 0.15)',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
          },
        },
        text: {
          background: 'rgba(99, 102, 241, 0.1)',
          color: '#6366F1',
          border: 'none',
          borderRadius: '10px',
          backdropFilter: 'blur(8px)',
          '&:hover': {
            background: 'rgba(99, 102, 241, 0.15)',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
          },
          '&.MuiButton-textSecondary': {
            background: 'rgba(139, 92, 246, 0.1)',
            color: '#8B5CF6',
            '&:hover': {
              background: 'rgba(139, 92, 246, 0.15)',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.2)',
            },
          },
          '&.MuiButton-textSuccess': {
            background: 'rgba(16, 185, 129, 0.1)',
            color: '#10B981',
            '&:hover': {
              background: 'rgba(16, 185, 129, 0.15)',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
            },
          },
          '&.MuiButton-textError': {
            background: 'rgba(239, 68, 68, 0.1)',
            color: '#EF4444',
            '&:hover': {
              background: 'rgba(239, 68, 68, 0.15)',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)',
            },
          },
          '&.MuiButton-textWarning': {
            background: 'rgba(245, 158, 11, 0.1)',
            color: '#F59E0B',
            '&:hover': {
              background: 'rgba(245, 158, 11, 0.15)',
              boxShadow: '0 4px 12px rgba(245, 158, 11, 0.2)',
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            height: '40px',
            borderRadius: '12px',
            fontSize: '14px',
            backgroundColor: '#ffffff',
            border: '1.5px solid rgba(226, 232, 240, 0.5)',
            background: '#ffffff',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover': {
              transform: 'translateY(-1px)',
              boxShadow: '0 8px 25px -8px rgba(99, 102, 241, 0.1)',
              '& fieldset': {
                borderColor: 'transparent',
              },
            },
            '&.Mui-focused': {
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 40px -12px rgba(99, 102, 241, 0.25)',
              background: '#ffffff',
              borderColor: '#6366F1',
              '& fieldset': {
                borderColor: 'transparent',
              },
            },
          },
          '& .MuiInputBase-input': {
            padding: '8px 14px',
            color: '#475569',
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
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          overflow: 'hidden',
          '&:hover': {
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            transform: 'translateY(-8px) scale(1.02)',
            border: '1px solid rgba(102, 126, 234, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '18px',
          background: 'rgba(255, 255, 255, 0.98)',
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          position: 'relative',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(102, 126, 234, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          fontWeight: 500,
          fontSize: '12px',
        },
        filled: {
          '&.MuiChip-colorSuccess': {
            backgroundColor: '#DCFCE7',
            color: '#166534',
          },
          '&.MuiChip-colorError': {
            backgroundColor: '#FEE2E2',
            color: '#991B1B',
          },
          '&.MuiChip-colorWarning': {
            backgroundColor: '#FEF3C7',
            color: '#92400E',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '8px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
            transform: 'scale(1.05)',
          },
          '&.Mui-checked': {
            '&:hover': {
              backgroundColor: 'rgba(99, 102, 241, 0.12)',
            },
          },
          '& .MuiSvgIcon-root': {
            fontSize: '22px',
            borderRadius: '6px',
            filter: 'drop-shadow(0 2px 4px rgba(99, 102, 241, 0.2))',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: '8px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
            transform: 'scale(1.05)',
          },
          '&.Mui-checked': {
            '&:hover': {
              backgroundColor: 'rgba(99, 102, 241, 0.12)',
            },
          },
          '& .MuiSvgIcon-root': {
            fontSize: '22px',
            filter: 'drop-shadow(0 2px 4px rgba(99, 102, 241, 0.2))',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: '0',
          marginRight: '20px',
          borderRadius: '10px',
          padding: '4px 8px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(99, 102, 241, 0.04)',
          },
          '& .MuiFormControlLabel-label': {
            fontSize: '14px',
            color: '#475569',
            fontWeight: 500,
            marginLeft: '10px',
            transition: 'color 0.2s ease-in-out',
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
          width: '52px',
          height: '28px',
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: '2px',
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(24px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                opacity: 1,
                border: 0,
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: '#6366F1',
              border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: '#f1f5f9',
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.3,
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: '24px',
            height: '24px',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
          },
          '& .MuiSwitch-track': {
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 100%)',
            opacity: 1,
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            border: '1px solid rgba(203, 213, 225, 0.5)',
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
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(99, 102, 241, 0.08)',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: '#f8fafc',
          '& .MuiTableCell-head': {
            color: '#334155',
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            borderBottom: '1px solid #e2e8f0',
            padding: '18px 24px',
            background: 'transparent',
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
              backgroundColor: 'rgba(99, 102, 241, 0.02)',
            },
            '&:hover': {
              backgroundColor: 'rgba(99, 102, 241, 0.06)',
              transform: 'scale(1.001)',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.08)',
            },
          },
          '& .MuiTableCell-body': {
            padding: '16px 24px',
            borderBottom: '1px solid rgba(99, 102, 241, 0.06)',
            fontSize: '14px',
            color: '#334155',
            transition: 'color 0.2s ease-in-out',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 500,
          height: '28px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
        filled: {
          '&.MuiChip-colorSuccess': {
            background: 'linear-gradient(135deg, #06D6A0 0%, #00B894 100%)',
            color: '#ffffff',
          },
          '&.MuiChip-colorError': {
            background: 'linear-gradient(135deg, #FF6B6B 0%, #E55454 100%)',
            color: '#ffffff',
          },
          '&.MuiChip-colorWarning': {
            background: 'linear-gradient(135deg, #FFD23F 0%, #FFB84D 100%)',
            color: '#1a1a1a',
          },
          '&.MuiChip-colorDefault': {
            background: 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 100%)',
            color: '#334155',
          },
        },
      },
    },
  },
})

export default theme
