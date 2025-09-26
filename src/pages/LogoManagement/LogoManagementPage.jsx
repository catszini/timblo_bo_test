import React, { useState } from 'react'
import {
  TextField,
  Button,
  Alert,
  Snackbar,
  ButtonGroup
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const LogoManagementPage = () => {
  const [workspaceName, setWorkspaceName] = useState('SK Telecom')
  const [isEditingName, setIsEditingName] = useState(false)
  const [logoPreview, setLogoPreview] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertSeverity, setAlertSeverity] = useState('success')

  const handleImageUpload = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = (e) => {
      const file = e.target.files[0]
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          setAlertMessage('파일 크기는 5MB 이하여야 합니다.')
          setAlertSeverity('error')
          setShowAlert(true)
          return
        }
        
        const reader = new FileReader()
        reader.onload = (e) => {
          setLogoPreview(e.target.result)
          setAlertMessage('이미지가 성공적으로 업로드되었습니다.')
          setAlertSeverity('success')
          setShowAlert(true)
        }
        reader.readAsDataURL(file)
      }
    }
    input.click()
  }

  const handleImageDelete = () => {
    if (window.confirm('로고 이미지를 삭제하시겠습니까?')) {
      setLogoPreview(null)
      setAlertMessage('로고 이미지가 삭제되었습니다.')
      setAlertSeverity('info')
      setShowAlert(true)
    }
  }

  const handleNameEdit = () => {
    setIsEditingName(true)
  }

  const handleNameSave = () => {
    setIsEditingName(false)
    setAlertMessage('워크스페이스 이름이 저장되었습니다.')
    setAlertSeverity('success')
    setShowAlert(true)
  }

  const handleSaveSettings = () => {
    setAlertMessage('설정이 저장되었습니다.')
    setAlertSeverity('success')
    setShowAlert(true)
  }

  const handleCancel = () => {
    setWorkspaceName('SK Telecom')
    setLogoPreview(null)
    setIsEditingName(false)
    setAlertMessage('변경사항이 취소되었습니다.')
    setAlertSeverity('info')
    setShowAlert(true)
  }

  return (
    <Layout className="page-general general-page">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">로고 이미지 관리</h1>
        </div>

        <div className="content-body">
          {/* 로고 이미지 카드 */}
          <div className="card section logo-card">
            <div><strong>로고 이미지</strong></div>
            <div className="row">
              <div 
                className="logo-box"
                style={{
                  backgroundImage: logoPreview ? `url(${logoPreview})` : 'none',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              >
                {!logoPreview && '로고 미리보기'}
              </div>
              <div>
                <div className="hint">권장 이미지 크기: 168 x 48 픽셀</div>
                <div className="hint">권장 파일 형식: PNG</div>
                <div className="row row-margin-top">
                  <ButtonGroup variant="outlined" size="medium">
                    <Button 
                      onClick={handleImageUpload}
                      sx={{ 
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderColor: 'primary.main',
                        '&:hover': { 
                          bgcolor: 'primary.dark',
                          borderColor: 'primary.dark'
                        }
                      }}
                    >
                      이미지 등록
                    </Button>
                    <Button 
                      onClick={handleImageDelete}
                      disabled={!logoPreview}
                      sx={{ 
                        color: 'error.main', 
                        borderColor: 'error.main',
                        '&:hover': { 
                          bgcolor: 'error.light',
                          color: 'white',
                          borderColor: 'error.main'
                        },
                        '&:disabled': {
                          color: 'grey.400',
                          borderColor: 'grey.300'
                        }
                      }}
                    >
                      삭제
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>

          {/* 워크스페이스 이름 카드 */}
          <div className="card section name-card">
            <div className="ws-title"><strong>워크스페이스 이름</strong></div>
            <div className="name-row">
              {isEditingName ? (
                <TextField
                  placeholder="이름을 입력해주세요"
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ 
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#E5E5E5'
                      },
                      '&:hover fieldset': {
                        borderColor: '#9CA3AF'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#0066FF'
                      }
                    }
                  }}
                />
              ) : (
                <TextField
                  value={workspaceName}
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{ readOnly: true }}
                  sx={{ 
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#E5E5E5'
                      },
                      '&:hover fieldset': {
                        borderColor: '#E5E5E5'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#E5E5E5'
                      }
                    }
                  }}
                />
              )}
              <Button 
                className="btn"
                variant="outlined"
                onClick={isEditingName ? handleNameSave : handleNameEdit}
              >
                {isEditingName ? '저장' : '수정'}
              </Button>
            </div>
          </div>

          {/* 저장 버튼 */}
          <div className="section-actions">
            <ButtonGroup variant="outlined" size="medium">
              <Button 
                onClick={handleCancel}
                sx={{ 
                  color: 'text.secondary',
                  borderColor: 'grey.400',
                  '&:hover': { 
                    bgcolor: 'grey.100',
                    borderColor: 'grey.400'
                  }
                }}
              >
                취소
              </Button>
              <Button 
                onClick={handleSaveSettings}
                sx={{ 
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderColor: 'primary.main',
                  '&:hover': { 
                    bgcolor: 'primary.dark',
                    borderColor: 'primary.dark'
                  }
                }}
              >
                설정 저장
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>

      <Snackbar
        open={showAlert}
        autoHideDuration={3000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowAlert(false)} 
          severity={alertSeverity}
          variant="filled"
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Layout>
  )
}

export default LogoManagementPage