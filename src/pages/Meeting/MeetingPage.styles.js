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
    alignItems: 'center',
    gap: 2
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    flexWrap: 'wrap'
  },
  totalCount: {
    fontSize: '14px',
    color: '#6B7280',
    fontWeight: 500
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
    minWidth: '250px'
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
  meetingTitle: {
    fontWeight: 500,
    color: '#111827'
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    mt: 3
  }
}
