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
  searchSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 3,
    gap: 2,
    flexWrap: 'wrap'
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 2
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  },
  dateRangeWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    backgroundColor: 'white',
    border: '1px solid #D1D5DB',
    borderRadius: 1,
    px: 2,
    py: 0.5
  },
  calendarIcon: {
    fontSize: 20,
    color: '#6B7280'
  },
  dateInput: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none'
      }
    },
    minWidth: '250px'
  },
  searchInput: {
    minWidth: '300px'
  },
  tableContainer: {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    borderRadius: 2
  },
  headerCell: {
    fontWeight: 600,
    backgroundColor: '#F9FAFB',
    color: '#374151'
  }
}

