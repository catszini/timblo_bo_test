import React from 'react'
import { Checkbox as MuiCheckbox } from '@mui/material'
import { styles } from './Checkbox.styles'

const Checkbox = ({ 
  checked, 
  onChange, 
  indeterminate,
  size = 'medium',
  ...props 
}) => {
  return (
    <MuiCheckbox
      checked={checked}
      onChange={onChange}
      indeterminate={indeterminate}
      size={size}
      sx={styles.checkbox}
      {...props}
    />
  )
}

export default Checkbox

