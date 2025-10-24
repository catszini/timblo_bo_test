import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  IconButton
} from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import ImageIcon from '@mui/icons-material/Image'
import Layout from '../../components/Layout/Layout'
import { SaveButton, CancelButton, DeleteButton, EditButton } from '../../components/common/CommonButtons'
import ActionButton from '../../components/common/ActionButton'
import { styles } from './LogoManagementPage.styles'

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
    if (window.confirm('로고 이미지를 삭제하시겠습니까?')) {
      setLogoImage(null)
    }
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
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            로고 관리
          </Typography>
        </Box>

        {/* 로고 이미지 섹션 */}
        <Paper sx={styles.section}>
          <Typography variant="h6" sx={styles.sectionTitle}>
            로고 이미지
          </Typography>
          
          <Box sx={styles.logoSection}>
            <Box sx={styles.logoBox}>
              {logoImage ? (
                <img 
                  src={logoImage} 
                  alt="로고 미리보기" 
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                />
              ) : (
                <Box sx={styles.logoPlaceholder}>
                  <ImageIcon sx={styles.logoIcon} />
                  <Typography variant="body2" color="text.secondary">
                    로고 미리보기
                  </Typography>
                </Box>
              )}
            </Box>
            
            <Box sx={styles.logoInfo}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                권장 이미지 크기: 168 x 48 픽셀
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                권장 파일 형식: PNG
              </Typography>
              
              <Box sx={styles.logoActions}>
                <ActionButton
                  variant="outlined"
                  color="primary"
                  startIcon={<UploadIcon />}
                  onClick={handleImageUpload}
                >
                  이미지 등록
                </ActionButton>
                <DeleteButton
                  startIcon={<DeleteIcon />}
                  onClick={handleImageDelete}
                />
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* 워크스페이스 이름 섹션 */}
        <Paper sx={styles.section}>
          <Typography variant="h6" sx={styles.sectionTitle}>
            워크스페이스 이름
          </Typography>
          
          <Box sx={styles.nameSection}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="이름을 입력해주세요"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              disabled={!isEditing}
              sx={styles.nameInput}
            />
            <EditButton
              startIcon={<EditIcon />}
              onClick={handleNameEdit}
            />
          </Box>
        </Paper>

        {/* 저장 버튼 */}
        <Box sx={styles.actionButtons}>
          <SaveButton
            onClick={handleSave}
            size="large"
          >
            설정 저장
          </SaveButton>
          <CancelButton
            onClick={handleCancel}
            size="large"
          />
        </Box>
      </Container>
    </Layout>
  )
}

export default LogoManagementPage
