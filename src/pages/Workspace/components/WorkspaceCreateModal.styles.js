export const styles = {
  paper: {
    borderRadius: '12px',
    minHeight: '500px'
  },
  title: {
    textAlign: 'center',
    pt: 3,
    pb: 2
  },
  titleText: {
    fontWeight: 600
  },
  content: {
    px: 4
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    mb: 3
  },
  avatar: {
    width: 80,
    height: 80,
    fontSize: '32px',
    fontWeight: 700
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2.5
  },
  label: {
    mb: 1,
    fontWeight: 600,
    color: '#374151'
  },
  actions: {
    px: 4,
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
  confirmButton: {
    textTransform: 'none',
    py: 1.2,
    backgroundColor: '#3B82F6',
    '&:hover': { backgroundColor: '#2563EB' }
  }
}

