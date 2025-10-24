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
    mb: 3
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 2,
    flexWrap: 'wrap'
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    flexWrap: 'wrap',
    flex: 1
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5
  },
  dateRangeWrap: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  dateInput: {
    width: '250px',
    '& .MuiInputBase-input': {
      cursor: 'pointer'
    }
  },
  calendarIcon: {
    position: 'absolute',
    left: '12px',
    zIndex: 1,
    pointerEvents: 'none',
    fontSize: '18px'
  },
  searchInput: {
    minWidth: '200px'
  },
  searchButton: {
    bgcolor: 'primary.main',
    color: 'white',
    '&:hover': {
      bgcolor: 'primary.dark'
    }
  },
  excelButton: {
    bgcolor: '#10B981',
    color: 'white',
    border: '1px solid #10B981',
    '&:hover': {
      bgcolor: '#059669',
      border: '1px solid #059669'
    }
  },
  tableContainer: {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    borderRadius: 2,
    overflow: 'hidden'
  },
  table: {
    minWidth: 800
  },
  headerRow: {
    bgcolor: '#F9FAFB'
  },
  headerCell: {
    fontWeight: 600,
    color: '#374151',
    fontSize: '14px',
    borderBottom: '1px solid #E5E7EB'
  },
  bodyRow: {
    '&:hover': {
      bgcolor: '#F9FAFB'
    },
    '&:last-child td': {
      borderBottom: 0
    }
  },
  bodyCell: {
    fontSize: '14px',
    color: '#111827',
    borderBottom: '1px solid #F3F4F6'
  },
  workspaceBadge: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '12px',
    bgcolor: '#EFF6FF',
    color: '#1E40AF',
    fontSize: '13px',
    fontWeight: 500
  },
  userIcon: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  },
  userInitial: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '14px',
    fontWeight: 600
  },
  statsCount: {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: 500,
    minWidth: '40px',
    textAlign: 'center'
  },
  statsNew: {
    bgcolor: '#DBEAFE',
    color: '#1E40AF'
  },
  statsEdit: {
    bgcolor: '#FEF3C7',
    color: '#92400E'
  },
  statsDelete: {
    bgcolor: '#FEE2E2',
    color: '#991B1B'
  },
  statsTotal: {
    bgcolor: '#F3E8FF',
    color: '#6B21A8'
  }
}

