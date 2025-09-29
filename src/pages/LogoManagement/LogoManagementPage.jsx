import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

const LogoManagementPage = () => {
  const [logoImage, setLogoImage] = useState(null)
  const [workspaceName, setWorkspaceName] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  // 이미지 업로드 핸들러
  const handleImageUpload = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/png,image/jpeg,image/jpg'
    input.style.display = 'none'

    input.addEventListener('change', (e) => {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setLogoImage(e.target.result)
        }
        reader.readAsDataURL(file)
      }
    })

    document.body.appendChild(input)
    input.click()
    document.body.removeChild(input)
  }

  // 이미지 삭제 핸들러
  const handleImageDelete = () => {
    setLogoImage(null)
  }

  // 워크스페이스 이름 수정 핸들러
  const handleNameEdit = () => {
    setIsEditing(true)
  }

  // 설정 저장 핸들러
  const handleSave = () => {
    console.log('로고 설정 저장:', { logoImage, workspaceName })
    alert('설정이 저장되었습니다.')
    setIsEditing(false)
  }

  // 취소 핸들러
  const handleCancel = () => {
    setIsEditing(false)
    setWorkspaceName('')
    setLogoImage(null)
  }

  return (
    <Layout className="page-logo-management">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">로고 관리</h1>
        </div>

        <div className="content-body">
          {/* 로고 이미지 섹션 */}
          <div className="card section logo-card" style={{ 
            padding: '24px', 
            marginBottom: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            border: '1px solid #E5E7EB' 
          }}>
            <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>
              <strong>로고 이미지</strong>
            </div>
            <div className="row" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div className="logo-box" style={{ 
                width: '200px', 
                height: '80px', 
                border: '2px dashed #D1D5DB', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundColor: '#F9FAFB',
                color: '#6B7280',
                fontSize: '14px'
              }}>
                {logoImage ? (
                  <img 
                    src={logoImage} 
                    alt="로고 미리보기" 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                  />
                ) : (
                  '로고 미리보기'
                )}
              </div>
              <div>
                <div className="hint" style={{ fontSize: '13px', color: '#6B7280', marginBottom: '4px' }}>
                  권장 이미지 크기: 168 x 48 픽셀
                </div>
                <div className="hint" style={{ fontSize: '13px', color: '#6B7280', marginBottom: '16px' }}>
                  권장 파일 형식: PNG
                </div>
                <div className="row row-margin-top" style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    className="btn primary"
                    onClick={handleImageUpload}
                    style={{
                      padding: '8px 16px',
                      background: '#3B82F6',
                      color: 'white',
                      border: '1px solid #3B82F6',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#2563EB'
                      e.target.style.borderColor = '#2563EB'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#3B82F6'
                      e.target.style.borderColor = '#3B82F6'
                    }}
                  >
                    이미지 등록
                  </button>
                  <button 
                    className="btn danger"
                    onClick={handleImageDelete}
                    style={{
                      padding: '8px 16px',
                      background: 'transparent',
                      color: '#DC2626',
                      border: '1px solid #DC2626',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#fef2f2'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent'
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 워크스페이스 이름 섹션 */}
          <div className="card section name-card" style={{ 
            padding: '24px', 
            marginBottom: '32px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            border: '1px solid #E5E7EB' 
          }}>
            <div className="ws-title" style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>
              <strong>워크스페이스 이름</strong>
            </div>
            <div className="name-row" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="이름을 입력해주세요"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                disabled={!isEditing}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  fontSize: '14px',
                  backgroundColor: isEditing ? 'white' : '#F9FAFB',
                  color: isEditing ? '#111827' : '#6B7280'
                }}
              />
              <button 
                className="btn"
                onClick={handleNameEdit}
                style={{
                  padding: '10px 20px',
                  background: 'transparent',
                  color: '#6B7280',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#F9FAFB'
                  e.target.style.borderColor = '#9CA3AF'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.borderColor = '#D1D5DB'
                }}
              >
                수정
              </button>
            </div>
          </div>

          {/* 저장 버튼 */}
          <div className="section-actions" style={{ textAlign: 'center' }}>
            <button 
              className="btn primary"
              onClick={handleSave}
              style={{
                padding: '12px 32px',
                marginRight: '12px',
                background: '#3B82F6',
                color: 'white',
                border: '1px solid #3B82F6',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#2563EB'
                e.target.style.borderColor = '#2563EB'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#3B82F6'
                e.target.style.borderColor = '#3B82F6'
              }}
            >
              설정 저장
            </button>
            <button 
              className="btn outline"
              onClick={handleCancel}
              style={{
                padding: '12px 32px',
                background: 'transparent',
                color: '#6B7280',
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#F9FAFB'
                e.target.style.borderColor = '#9CA3AF'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.borderColor = '#D1D5DB'
              }}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LogoManagementPage