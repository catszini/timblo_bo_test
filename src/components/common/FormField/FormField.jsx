import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import { styles } from './FormField.styles'

const FormField = ({ 
  label, 
  required = false,
  error,
  helperText,
  multiline = false,
  rows = 1,
  ...props 
}) => {
  return (
    <Box>
      {label && (
        <Typography variant="body2" sx={styles.label}>
          {label}
          {required && <span style={{ color: '#DC2626' }}> *</span>}
        </Typography>
      )}
      <TextField
        variant="outlined"
        fullWidth
        size="small"
        multiline={multiline}
        rows={multiline ? rows : undefined}
        error={error}
        helperText={helperText}
        {...props}
      />
    </Box>
  )
}

export default FormField

