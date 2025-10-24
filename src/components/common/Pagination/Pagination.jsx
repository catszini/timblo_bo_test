import React from 'react'
import { Box, Pagination as MuiPagination } from '@mui/material'
import { styles } from './Pagination.styles'

const Pagination = ({ 
  count, 
  page, 
  onChange,
  currentPage,
  totalPages,
  onPageChange,
  ...props 
}) => {
  // currentPage/totalPages 형식을 지원하면서 page/count 형식도 지원
  const finalPage = currentPage || page || 1
  const finalCount = totalPages || count || 1
  const finalOnChange = onPageChange || onChange

  const handleChange = (event, value) => {
    if (finalOnChange) {
      finalOnChange(value)
    }
  }

  return (
    <Box sx={styles.container}>
      <MuiPagination 
        count={finalCount} 
        page={finalPage}
        onChange={handleChange}
        color="primary"
        shape="rounded"
        sx={styles.pagination}
      />
    </Box>
  )
}

export default Pagination

