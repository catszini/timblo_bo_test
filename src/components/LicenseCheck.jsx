import React, { useEffect, useState } from 'react'
import { LicenseInfo } from '@mui/x-license'
import { Box, Typography, Chip } from '@mui/material'

const LicenseCheck = () => {
  const [licenseStatus, setLicenseStatus] = useState('')

  useEffect(() => {
    try {
      const licenseKey = LicenseInfo.getLicenseKey()
      console.log('🔍 현재 라이센스 키:', licenseKey ? licenseKey.substring(0, 20) + '...' : '없음')
      
      if (licenseKey) {
        setLicenseStatus('활성화됨')
        console.log('✅ MUI X Pro 라이센스 활성화 상태 확인됨')
      } else {
        setLicenseStatus('비활성화됨')
        console.log('❌ MUI X Pro 라이센스가 설정되지 않음')
      }
    } catch (error) {
      console.error('라이센스 확인 중 오류:', error)
      setLicenseStatus('오류')
    }
  }, [])

  return (
    <Box sx={{ position: 'fixed', top: 10, right: 10, zIndex: 9999 }}>
      <Chip
        label={`MUI X Pro: ${licenseStatus}`}
        color={licenseStatus === '활성화됨' ? 'success' : 'error'}
        variant="filled"
        size="small"
      />
    </Box>
  )
}

export default LicenseCheck 