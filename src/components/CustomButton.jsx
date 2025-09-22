import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

// 스타일드 버튼 컴포넌트들
const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#2563EB',
  color: '#ffffff',
  border: '1px solid #2563EB',
  '&:hover': {
    backgroundColor: '#1D4ED8',
    borderColor: '#1D4ED8',
  },
}))

const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#64748B',
  color: '#ffffff',
  border: '1px solid #64748B',
  '&:hover': {
    backgroundColor: '#475569',
    borderColor: '#475569',
  },
}))

const SuccessButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#10B981',
  color: '#ffffff',
  border: '1px solid #10B981',
  '&:hover': {
    backgroundColor: '#059669',
    borderColor: '#059669',
  },
}))

const ErrorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#EF4444',
  color: '#ffffff',
  border: '1px solid #EF4444',
  '&:hover': {
    backgroundColor: '#DC2626',
    borderColor: '#DC2626',
  },
}))

const WarningButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#F59E0B',
  color: '#ffffff',
  border: '1px solid #F59E0B',
  '&:hover': {
    backgroundColor: '#D97706',
    borderColor: '#D97706',
  },
}))

const OutlinedButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#2563EB',
  border: '1px solid #2563EB',
  '&:hover': {
    backgroundColor: '#f0f7ff',
    borderColor: '#1D4ED8',
  },
}))

const PlainButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#2563EB',
  border: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#f8fafc',
    transform: 'none',
    boxShadow: 'none',
  },
}))

const PlainSecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#64748B',
  border: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#f1f5f9',
    transform: 'none',
    boxShadow: 'none',
  },
}))

// 메인 CustomButton 컴포넌트
const CustomButton = ({ 
  variant = 'primary', 
  children, 
  onClick,
  disabled = false,
  size = 'medium',
  fullWidth = false,
  startIcon,
  endIcon,
  ...props 
}) => {
  const getButtonComponent = () => {
    switch (variant) {
      case 'primary':
        return PrimaryButton
      case 'secondary':
        return SecondaryButton
      case 'success':
        return SuccessButton
      case 'error':
        return ErrorButton
      case 'warning':
        return WarningButton
      case 'outlined':
        return OutlinedButton
      case 'plain':
      case 'text':
        return PlainButton
      case 'plain-secondary':
        return PlainSecondaryButton
      default:
        return PrimaryButton
    }
  }

  const ButtonComponent = getButtonComponent()

  return (
    <ButtonComponent
      onClick={onClick}
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {children}
    </ButtonComponent>
  )
}

export default CustomButton 