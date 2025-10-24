import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { styles } from './Modal.styles'

const Modal = ({ 
  open, 
  onClose, 
  title, 
  children, 
  actions,
  maxWidth = 'sm',
  ...props 
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth
      {...props}
    >
      {title && (
        <DialogTitle sx={styles.title}>
          {title}
          {onClose && (
            <IconButton
              onClick={onClose}
              sx={styles.closeButton}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
      )}
      
      <DialogContent sx={styles.content}>
        {children}
      </DialogContent>
      
      {actions && (
        <DialogActions sx={styles.actions}>
          {actions}
        </DialogActions>
      )}
    </Dialog>
  )
}

export default Modal

