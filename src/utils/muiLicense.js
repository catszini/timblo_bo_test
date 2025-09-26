import { LicenseInfo } from '@mui/x-license'

// MUI X 라이센스 키 설정
export const setupMuiLicense = () => {
  // 여기에 라이센스 키를 입력하세요
  const LICENSE_KEY = '7fa2d890358b98e3ddd012724ee5fa02Tz0xMTg3MDksRT0xNzg4NzM5MTk5MDAwLFM9cHJvLExNPXN1YnNjcmlwdGlvbixQVj1RMy0yMDI0LEtWPTI='
  
  if (LICENSE_KEY && LICENSE_KEY !== 'YOUR_LICENSE_KEY_HERE') {
    LicenseInfo.setLicenseKey(LICENSE_KEY)
    console.log('MUI X License key has been set successfully')
  } else {
    console.warn('MUI X License key is not set. Please add your license key in src/utils/muiLicense.js')
  }
}

export default setupMuiLicense
