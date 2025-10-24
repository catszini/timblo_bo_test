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
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  },
  menuHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2
  },
  menuTitleSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 2
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#111827'
  },
  buttonGroup: {
    display: 'flex',
    gap: 1
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
  tableRow: {
    cursor: 'move',
    '&:hover': {
      backgroundColor: '#F9FAFB'
    }
  },
  dragOverRow: {
    borderTop: '2px solid #3B82F6',
    backgroundColor: '#EFF6FF'
  },
  separatorRow: {
    backgroundColor: '#F3F4F6'
  },
  dragCell: {
    textAlign: 'center',
    cursor: 'grab',
    '&:active': {
      cursor: 'grabbing'
    }
  },
  dragHandle: {
    color: '#9CA3AF',
    '&:hover': {
      color: '#3B82F6'
    }
  },
  separatorText: {
    color: '#6B7280',
    fontStyle: 'italic',
    fontWeight: 500
  },
  switch: {
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#3B82F6'
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#3B82F6'
    }
  }
}

