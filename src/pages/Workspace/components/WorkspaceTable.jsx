import React from 'react'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Paper
} from '@mui/material'
import Checkbox from '../../../components/common/Checkbox'
import WorkspaceRow from './WorkspaceRow'
import { styles } from './WorkspaceTable.styles'

const WorkspaceTable = ({ 
  workspaces, 
  selectedIds, 
  onSelectAll, 
  onSelectRow,
  onCountChange 
}) => {
  const allSelected = workspaces.length > 0 && selectedIds.length === workspaces.length
  const someSelected = selectedIds.length > 0 && selectedIds.length < workspaces.length

  return (
    <TableContainer component={Paper} sx={styles.container}>
      <Table>
        <TableHead>
          <TableRow sx={styles.headerRow}>
            <TableCell padding="checkbox">
              <Checkbox 
                checked={allSelected}
                indeterminate={someSelected}
                onChange={onSelectAll}
                size="small"
              />
            </TableCell>
            <TableCell sx={styles.headerCell}>워크스페이스명</TableCell>
            <TableCell sx={styles.headerCell}>도메인명</TableCell>
            <TableCell sx={styles.headerCell}>생성자</TableCell>
            <TableCell sx={{ ...styles.headerCell, width: 140 }}>구성원</TableCell>
            <TableCell sx={styles.headerCell}>사용자 현황</TableCell>
            <TableCell sx={styles.headerCell}>생성시간</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workspaces.map(workspace => (
            <WorkspaceRow
              key={workspace.id}
              workspace={workspace}
              isSelected={selectedIds.includes(workspace.id)}
              onSelect={onSelectRow}
              onCountChange={onCountChange}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default WorkspaceTable

