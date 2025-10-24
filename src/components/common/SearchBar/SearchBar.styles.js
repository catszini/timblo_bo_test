export const styles = {
  container: {
    display: 'flex',
    gap: 0
  },
  select: {
    minWidth: 120,
    borderRadius: '6px 0 0 6px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderRight: 'none'
    }
  },
  textField: {
    width: 280,
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
      '& fieldset': {
        borderLeft: 'none',
        borderRight: 'none'
      }
    }
  },
  searchIcon: {
    fontSize: 20,
    color: '#9CA3AF'
  },
  button: {
    borderRadius: '0 6px 6px 0',
    textTransform: 'none',
    px: 3,
    backgroundColor: '#3B82F6',
    '&:hover': { backgroundColor: '#2563EB' }
  }
}

