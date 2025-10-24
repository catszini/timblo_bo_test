import React from 'react'
import { Box, TextField, IconButton } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { styles } from './CountSpinner.styles'

const CountSpinner = ({ value, onChange, width = 120 }) => {
  const handleIncrement = (e) => {
    e.preventDefault()
    onChange(value + 1)
  }

  const handleDecrement = (e) => {
    e.preventDefault()
    onChange(Math.max(0, value - 1))
  }

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value) || 0
    onChange(Math.max(0, newValue))
  }

  return (
    <Box sx={{ ...styles.container, width }}>
      <TextField
        type="number"
        value={value}
        onChange={handleInputChange}
        size="small"
        inputProps={{ 
          min: 0,
          style: styles.input
        }}
        sx={styles.textField}
      />
      <Box sx={styles.buttonsContainer}>
        <IconButton 
          size="small" 
          onClick={handleIncrement}
          sx={styles.buttonUp}
        >
          <KeyboardArrowUpIcon sx={styles.icon} />
        </IconButton>
        <IconButton 
          size="small" 
          onClick={handleDecrement}
          sx={styles.buttonDown}
        >
          <KeyboardArrowDownIcon sx={styles.icon} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default CountSpinner

