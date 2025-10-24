export const styles = {
  label: {
    mb: 1,
    fontWeight: 600,
    color: '#374151'
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      '& fieldset': {
        borderColor: '#D1D5DB',
        borderWidth: '1px',
      },
      '&:hover fieldset': {
        borderColor: '#0066FF',
        borderWidth: '1px',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0066FF',
        borderWidth: '2px',
      },
    }
  }
}
