import React, { useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Card,
  CardContent
} from '@mui/material'

function LogoManagementPage() {
  const [workspaceName, setWorkspaceName] = useState('SK Telecom')

  const handleImageUpload = () => {
    console.log('Upload image')
  }

  const handleImageDelete = () => {
    console.log('Delete image')
  }

  const handleNameUpdate = () => {
    console.log('Update workspace name')
  }

  const handleSaveSettings = () => {
    console.log('Save all settings')
  }

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        로고 이미지 관리
      </Typography>

      {/* 로고 이미지 섹션 */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            로고 이미지
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            {/* 로고 미리보기 */}
            <Box sx={{ 
              width: 200, 
              height: 120, 
              border: '2px dashed #E5E5E5',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F8F9FA',
              fontSize: '14px',
              color: '#6B7280'
            }}>
              로고 미리보기
            </Box>
            
            {/* 로고 설정 */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', color: '#6B7280', mb: 1 }}>
                권장 이미지 크기: 168 x 48 픽셀
              </Typography>
              <Typography sx={{ fontSize: '14px', color: '#6B7280', mb: 2 }}>
                권장 파일 형식: PNG
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button 
                  variant="contained" 
                  onClick={handleImageUpload}
                  sx={{ fontSize: '14px' }}
                >
                  이미지 등록
                </Button>
                <Button 
                  variant="outlined" 
                  color="error"
                  onClick={handleImageDelete}
                  sx={{ fontSize: '14px' }}
                >
                  삭제
                </Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* 워크스페이스 이름 섹션 */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            워크스페이스 이름
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <TextField
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder="이름을 입력해주세요"
              sx={{ 
                flex: 1,
                '& .MuiOutlinedInput-root': {
                  height: '40px',
                  fontSize: '14px'
                }
              }}
            />
            <Button 
              variant="outlined"
              onClick={handleNameUpdate}
              sx={{ 
                height: '40px',
                fontSize: '14px',
                minWidth: '60px'
              }}
            >
              수정
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* 저장 버튼 */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button 
          variant="contained" 
          onClick={handleSaveSettings}
          sx={{ 
            fontSize: '14px',
            minWidth: '100px',
            height: '40px'
          }}
        >
          설정 저장
        </Button>
      </Box>
    </Box>
  )
}

export default LogoManagementPage