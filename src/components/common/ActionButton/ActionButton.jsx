import React from 'react'
import { Button } from '@mui/material'
import { getButtonStyles } from './ActionButton.styles'

const ActionButton = ({ 
  variant = 'contained',
  color = 'primary',
  startIcon,
  children,
  onClick,
  ...props
}) => {
  const styles = getButtonStyles(color, variant)

  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      onClick={onClick}
      sx={styles}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ActionButton

