import React from 'react'
import { FormControl, Select as MuiSelect, MenuItem } from '@mui/material'
import { styles } from './Select.styles'

const Select = ({ 
  value, 
  onChange, 
  options = [],
  size = 'small',
  width,
  placeholder,
  ...props
}) => {
  return (
    <FormControl variant="outlined" size={size} sx={{ ...styles.formControl, ...(width && { width }) }}>
      <MuiSelect
        variant="outlined"
        value={value}
        onChange={onChange}
        displayEmpty={!!placeholder}
        sx={styles.select}
        {...props}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}
        {options.map((option, index) => (
          <MenuItem 
            key={index} 
            value={typeof option === 'string' ? option : option.value}
          >
            {typeof option === 'string' ? option : option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default Select

