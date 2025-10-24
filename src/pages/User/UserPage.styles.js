export const styles = {
  container: {
    py: 4
  },
  header: {
    mb: 3
  },
  title: {
    fontSize: '24px',
    fontWeight: 600,
    color: '#111827'
  },
  searchToolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 3,
    flexWrap: 'wrap',
    gap: 2
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center'
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  },
  totalCount: {
    fontSize: '14px',
    color: '#6B7280',
    fontWeight: 500
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  searchSelect: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    }
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#D1D5DB'
  },
  searchInput: {
    flex: 1,
    minWidth: '300px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none'
      }
    }
  },
  searchIcon: {
    fontSize: 20,
    color: '#6B7280'
  },
  tableContainer: {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    borderRadius: 2
  },
  headerCell: {
    fontWeight: 600,
    backgroundColor: '#F9FAFB',
    color: '#374151'
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  },
  avatar: {
    width: 32,
    height: 32,
    fontSize: '14px',
    backgroundColor: '#3B82F6'
  },
  emailLink: {
    color: '#3B82F6',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    mt: 3
  }
}

