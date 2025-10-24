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
  mainLayout: {
    display: 'flex',
    gap: 3,
    mb: 3
  },
  leftPanel: {
    flex: '1 1 60%',
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  },
  rightPanel: {
    flex: '1 1 40%',
    border: '1px solid #E5E7EB',
    borderRadius: 2,
    bgcolor: '#FAFAFA',
    overflow: 'hidden'
  },
  infoHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2
  },
  infoTitleSection: {
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
    color: '#6B7280',
    fontSize: '14px'
  },
  buttonGroup: {
    display: 'flex',
    gap: 1
  },
  tableContainer: {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    borderRadius: 2
  },
  tableRow: {
    cursor: 'pointer',
    '&.Mui-selected': {
      backgroundColor: '#EFF6FF !important'
    }
  },
  treeHeader: {
    p: 2,
    borderBottom: '1px solid #E5E7EB',
    bgcolor: 'white'
  },
  treeContent: {
    p: 2,
    minHeight: '400px'
  },
  noDataArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '300px',
    gap: 2
  },
  noDataIcon: {
    fontSize: 64,
    color: '#D1D5DB'
  },
  noDataText: {
    color: '#9CA3AF',
    fontSize: '14px'
  },
  treeView: {
    py: 1
  },
  treeParent: {
    py: 1,
    '&:hover': {
      backgroundColor: 'rgba(59, 130, 246, 0.08)'
    }
  },
  treeChild: {
    pl: 4,
    py: 0.5,
    '&:hover': {
      backgroundColor: 'rgba(59, 130, 246, 0.05)'
    }
  },
  bottomActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 2,
    mt: 3
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }
}

