import React from 'react'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Checkbox,
  Paper
} from '@mui/material'
import { styles } from './DataTable.styles'

const DataTable = ({ 
  columns,
  data,
  selectedIds = [],
  onSelectAll,
  onSelectRow,
  renderRow,
  showCheckbox = true
}) => {
  const allSelected = data.length > 0 && selectedIds.length === data.length
  const someSelected = selectedIds.length > 0 && selectedIds.length < data.length

  return (
    <TableContainer component={Paper} sx={styles.container}>
      <Table>
        <TableHead>
          <TableRow sx={styles.headerRow}>
            {showCheckbox && (
              <TableCell padding="checkbox">
                <Checkbox 
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={onSelectAll}
                  size="small"
                />
              </TableCell>
            )}
            {columns.map((column, index) => (
              <TableCell 
                key={index} 
                sx={{
                  ...styles.headerCell,
                  ...(column.width && { width: column.width })
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => renderRow(row))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable

