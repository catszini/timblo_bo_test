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
  tabContainer: {
    borderBottom: '1px solid #E5E7EB',
    mb: 3
  },
  tabList: {
    display: 'flex',
    gap: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  tabButton: {
    padding: '12px 24px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 500,
    color: '#6B7280',
    borderBottom: '2px solid transparent',
    transition: 'all 0.2s',
    '&:hover': {
      color: '#1F6BFF',
      background: '#F9FAFB'
    }
  },
  tabButtonActive: {
    color: '#1F6BFF',
    borderBottom: '2px solid #1F6BFF',
    fontWeight: 600
  },
  contentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 3
  },
  titleSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 2
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#111827'
  },
  count: {
    fontSize: '14px',
    color: '#6B7280'
  },
  actionButtons: {
    display: 'flex',
    gap: 1
  },
  workspaceSelector: {
    ml: 2,
    minWidth: '200px'
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
    '&.selected': {
      bgcolor: '#EFF6FF'
    }
  },
  bodyCell: {
    fontSize: '14px',
    color: '#111827',
    borderBottom: '1px solid #F3F4F6'
  },
  sectionHeader: {
    bgcolor: '#F3F4F6',
    fontWeight: 600,
    fontSize: '14px',
    color: '#374151'
  },
  switchContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  editButton: {
    bgcolor: 'transparent',
    color: '#1F6BFF',
    border: '1px solid #1F6BFF',
    padding: '6px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
    '&:hover': {
      bgcolor: '#F0F7FF'
    }
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3
  },
  formRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1
  },
  radioGroup: {
    display: 'flex',
    gap: 2
  },
  radioOption: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    cursor: 'pointer'
  },
  confirmModal: {
    textAlign: 'center',
    py: 3
  },
  confirmMessage: {
    mb: 3
  },
  confirmTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#111827',
    mb: 1
  },
  confirmText: {
    fontSize: '14px',
    color: '#6B7280'
  }
}

