export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    overflow: 'hidden'
  },
  textField: {
    flex: 1,
    '& .MuiOutlinedInput-root': {
      '& fieldset': { border: 'none' },
    },
    '& input[type=number]': {
      MozAppearance: 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  },
  input: {
    textAlign: 'center',
    padding: '6px 8px',
    fontSize: '14px'
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '1px solid #E5E7EB'
  },
  buttonUp: {
    padding: '2px',
    borderRadius: 0,
    borderBottom: '1px solid #E5E7EB',
    '&:hover': { backgroundColor: '#F3F4F6' }
  },
  buttonDown: {
    padding: '2px',
    borderRadius: 0,
    '&:hover': { backgroundColor: '#F3F4F6' }
  },
  icon: {
    fontSize: 16
  }
}

