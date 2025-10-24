export const styles = {
  paper: {
    borderRadius: '12px'
  },
  title: {
    pb: 2
  },
  titleText: {
    fontWeight: 600
  },
  content: {
    px: 3
  },
  infoCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    p: 2.5,
    mb: 3,
    backgroundColor: '#F9FAFB',
    borderRadius: '8px',
    border: '1px solid #E5E7EB'
  },
  avatar: {
    width: 56,
    height: 56,
    fontSize: '24px',
    fontWeight: 700
  },
  workspaceName: {
    fontWeight: 600,
    mb: 0.5
  },
  domain: {
    color: '#6B7280'
  },
  note: {
    color: '#9CA3AF'
  },
  warningText: {
    mb: 2,
    color: '#374151'
  },
  inputLabel: {
    mb: 1,
    fontWeight: 600,
    color: '#374151'
  },
  inputContainer: {
    mb: 3
  },
  alert: {
    backgroundColor: '#FEE2E2',
    color: '#991B1B',
    '& .MuiAlert-icon': {
      color: '#DC2626'
    }
  },
  actions: {
    px: 3,
    pb: 3,
    pt: 2,
    gap: 1
  },
  cancelButton: {
    textTransform: 'none',
    py: 1.2,
    borderColor: '#D1D5DB',
    color: '#374151',
    '&:hover': { 
      borderColor: '#9CA3AF',
      backgroundColor: '#F9FAFB'
    }
  },
  deleteButton: {
    textTransform: 'none',
    py: 1.2,
    backgroundColor: '#DC2626',
    '&:hover': { backgroundColor: '#B91C1C' },
    '&.Mui-disabled': {
      backgroundColor: '#F3F4F6',
      color: '#9CA3AF'
    }
  }
}

