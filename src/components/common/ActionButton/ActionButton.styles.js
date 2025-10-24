const colorStyles = {
  primary: {
    outlined: {
      borderColor: '#0066FF',
      borderWidth: '1px',
      color: '#0066FF',
      borderRadius: '8px',
      '&:hover': { 
        borderColor: '#0052CC',
        backgroundColor: 'rgba(0, 102, 255, 0.04)',
        borderWidth: '1px',
      }
    },
    contained: {
      backgroundColor: '#0066FF',
      borderRadius: '8px',
      '&:hover': { backgroundColor: '#0052CC' }
    }
  },
  success: {
    outlined: {
      borderColor: '#10B981',
      borderWidth: '1px',
      color: '#10B981',
      borderRadius: '8px',
      '&:hover': { 
        borderColor: '#059669',
        backgroundColor: 'rgba(16, 185, 129, 0.04)',
        borderWidth: '1px',
      }
    },
    contained: {
      backgroundColor: '#10B981',
      borderRadius: '8px',
      '&:hover': { backgroundColor: '#059669' }
    }
  },
  error: {
    outlined: {
      borderColor: '#EF4444',
      borderWidth: '1px',
      color: '#EF4444',
      borderRadius: '8px',
      '&:hover': { 
        borderColor: '#DC2626',
        backgroundColor: 'rgba(239, 68, 68, 0.04)',
        borderWidth: '1px',
      }
    },
    contained: {
      backgroundColor: '#EF4444',
      borderRadius: '8px',
      '&:hover': { backgroundColor: '#DC2626' }
    }
  },
  secondary: {
    outlined: {
      borderColor: '#6B7280',
      borderWidth: '1px',
      color: '#6B7280',
      borderRadius: '8px',
      '&:hover': { 
        borderColor: '#4B5563',
        backgroundColor: 'rgba(107, 114, 128, 0.04)',
        borderWidth: '1px',
      }
    },
    contained: {
      backgroundColor: '#6B7280',
      borderRadius: '8px',
      '&:hover': { backgroundColor: '#4B5563' }
    }
  }
}

export const getButtonStyles = (color, variant) => ({
  textTransform: 'none',
  fontWeight: 500,
  ...colorStyles[color]?.[variant]
})
