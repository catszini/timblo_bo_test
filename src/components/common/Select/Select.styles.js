export const styles = {
  formControl: {
    minWidth: 120
  },
  select: {
    backgroundColor: 'white',
    borderRadius: '8px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#D1D5DB',
      borderWidth: '1px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0066FF',
      borderWidth: '1px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0066FF',
      borderWidth: '2px',
    },
  }
}
