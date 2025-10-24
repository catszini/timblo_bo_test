export const styles = {
  checkbox: {
    '& .MuiSvgIcon-root': {
      width: 20,
      height: 20,
    },
    // 기본 스타일 (체크박스 모양)
    color: '#D1D5DB',
    '&.Mui-checked': {
      color: '#3B82F6',
    },
    '&:hover': {
      backgroundColor: 'rgba(59, 130, 246, 0.04)',
    },
  }
}

// 커스텀 블루 스타일 (SystemUser 페이지용)
export const customBlueStyles = {
  checkbox: {
    '& .MuiSvgIcon-root': {
      width: 16,
      height: 16,
      border: '1.5px solid #97c3f0',
      borderRadius: '3px',
      backgroundColor: 'white',
      '& path': {
        display: 'none',
      },
    },
    '&.Mui-checked .MuiSvgIcon-root': {
      backgroundColor: 'rgba(199, 223, 247, 0.8)',
      borderColor: '#97c3f0',
    },
    '&.MuiCheckbox-indeterminate .MuiSvgIcon-root': {
      backgroundColor: 'rgba(199, 223, 247, 0.8)',
      borderColor: '#97c3f0',
    },
    '&:hover .MuiSvgIcon-root': {
      borderColor: '#a5cef3',
      backgroundColor: 'white',
    },
    '&.Mui-checked:hover .MuiSvgIcon-root': {
      backgroundColor: 'rgba(199, 223, 247, 0.9)',
      borderColor: '#a5cef3',
    },
  }
}

