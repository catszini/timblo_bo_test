export const styles = {
  container: {
    py: 4
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 3
  },
  title: {
    fontSize: '24px',
    fontWeight: 600,
    color: '#111827'
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
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#F9FAFB'
    }
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  },
  modalLabel: {
    fontWeight: 600,
    color: '#374151',
    mb: 0.5
  },
  modalValue: {
    color: '#6B7280',
    fontSize: '14px'
  },
  versionTable: {
    mt: 1,
    boxShadow: 'none',
    border: '1px solid #E5E7EB'
  },
  versionHeaderCell: {
    fontWeight: 600,
    backgroundColor: '#F3F4F6',
    fontSize: '13px',
    py: 1
  }
}

