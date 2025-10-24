export const styles = {
  row: {
    '&.Mui-selected': { 
      backgroundColor: '#F3F4F6 !important' 
    }
  },
  workspaceNameContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  },
  avatar: {
    width: 32,
    height: 32,
    fontSize: '14px',
    fontWeight: 600
  },
  countCell: {
    width: 140
  },
  userTotal: {
    fontWeight: 600,
    mb: 0.5
  },
  rolesContainer: {
    display: 'flex',
    gap: 0.5,
    flexWrap: 'wrap'
  },
  chipOwner: {
    height: 20,
    fontSize: '11px',
    backgroundColor: '#FEE2E2',
    color: '#991B1B',
    '& .MuiChip-label': { px: 1 }
  },
  chipAdmin: {
    height: 20,
    fontSize: '11px',
    backgroundColor: '#DBEAFE',
    color: '#1E40AF',
    '& .MuiChip-label': { px: 1 }
  },
  chipMember: {
    height: 20,
    fontSize: '11px',
    backgroundColor: '#E5E7EB',
    color: '#374151',
    '& .MuiChip-label': { px: 1 }
  },
  createdAt: {
    color: '#6B7280'
  }
}

