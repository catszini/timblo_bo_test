import React, { useState, useEffect } from 'react'
import { LicenseInfo } from '@mui/x-license'

const LicenseCheck = ({ children }) => {
  const [licenseKey, setLicenseKey] = useState('')
  const [isLicenseSet, setIsLicenseSet] = useState(false)
  const [showLicenseForm, setShowLicenseForm] = useState(false)

  useEffect(() => {
    // 하드코딩된 라이센스 키 우선 확인
    const HARDCODED_LICENSE = '7fa2d890358b98e3ddd012724ee5fa02Tz0xMTg3MDksRT0xNzg4NzM5MTk5MDAwLFM9cHJvLExNPXN1YnNjcmlwdGlvbixQVj1RMy0yMDI0LEtWPTI='
    
    if (HARDCODED_LICENSE && HARDCODED_LICENSE !== 'YOUR_LICENSE_KEY_HERE') {
      LicenseInfo.setLicenseKey(HARDCODED_LICENSE)
      localStorage.setItem('mui_license_key', HARDCODED_LICENSE)
      setIsLicenseSet(true)
      setLicenseKey(HARDCODED_LICENSE)
      console.log('MUI X License key (hardcoded) has been set successfully')
      return
    }

    // 로컬 스토리지에서 라이센스 키 확인
    const savedLicense = localStorage.getItem('mui_license_key')
    if (savedLicense && savedLicense !== 'YOUR_LICENSE_KEY_HERE') {
      LicenseInfo.setLicenseKey(savedLicense)
      setIsLicenseSet(true)
      setLicenseKey(savedLicense)
      console.log('MUI X License key (from localStorage) has been set successfully')
    } else {
      setShowLicenseForm(true)
    }
  }, [])

  const handleLicenseSubmit = (e) => {
    e.preventDefault()
    if (licenseKey && licenseKey.trim() !== '') {
      try {
        LicenseInfo.setLicenseKey(licenseKey)
        localStorage.setItem('mui_license_key', licenseKey)
        setIsLicenseSet(true)
        setShowLicenseForm(false)
        console.log('MUI X License key has been set successfully')
      } catch (error) {
        console.error('Error setting license key:', error)
        alert('라이센스 키 설정에 실패했습니다. 올바른 키인지 확인해주세요.')
      }
    }
  }

  const handleSkip = () => {
    setShowLicenseForm(false)
    setIsLicenseSet(true)
    console.warn('MUI X License key is not set. Some features may show watermarks.')
  }

  if (showLicenseForm) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '90%'
        }}>
          <h2 className="license-title">MUI X 라이센스 키 등록</h2>
          <p className="license-description">
            MUI X 컴포넌트를 사용하기 위해 라이센스 키를 입력해주세요.
          </p>
          <form onSubmit={handleLicenseSubmit}>
            <input
              type="text"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              placeholder="라이센스 키를 입력하세요"
              className="license-input"
            />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#1976d2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                등록
              </button>
              <button
                type="button"
                onClick={handleSkip}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#666',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                나중에
              </button>
            </div>
          </form>
          <p className="license-note">
            라이센스 키 없이도 사용할 수 있지만, 일부 컴포넌트에 워터마크가 표시됩니다.
          </p>
        </div>
      </div>
    )
  }

  return children
}

export default LicenseCheck
