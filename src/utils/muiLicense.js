import { LicenseInfo } from '@mui/x-license'

// MUI X Pro 라이센스 키 설정
export const setMuiLicense = () => {
  // 여기에 실제 라이센스 키를 입력하세요
  // 예: const licenseKey = 'your-actual-license-key-from-mui'
  const licenseKey = '7fa2d890358b98e3ddd012724ee5fa02Tz0xMTg3MDksRT0xNzg4NzM5MTk5MDAwLFM9cHJvLExNPXN1YnNjcmlwdGlvbixQVj1RMy0yMDI0LEtWPTI='
  
  try {
    if (licenseKey && licenseKey !== 'your-license-key-here') {
      LicenseInfo.setLicenseKey(licenseKey)
      console.log('✅ MUI X Pro 라이센스가 활성화되었습니다!')
      console.log('라이센스 키:', licenseKey.substring(0, 20) + '...')
    } else {
      console.warn('❌ MUI X Pro 라이센스 키를 설정해주세요.')
    }
  } catch (error) {
    console.error('❌ 라이센스 설정 중 오류:', error)
  }
}

// 라이센스 상태 확인
export const getLicenseStatus = () => {
  return LicenseInfo.getLicenseKey()
} 