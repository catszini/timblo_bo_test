import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import CustomButton from './CustomButton'
import { Add, Delete, Edit, Save } from '@mui/icons-material'

const ButtonExample = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        커스텀 버튼 예시
      </Typography>

      <Stack spacing={3}>
        {/* 방법 1: MUI 기본 색상 사용 */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            MUI 기본 색상 사용
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="text" color="primary">
              Primary
            </Button>
            <Button variant="text" color="secondary">
              Secondary
            </Button>
            <Button variant="text" color="success">
              Success
            </Button>
            <Button variant="text" color="error">
              Error
            </Button>
            <Button variant="text" color="warning">
              Warning
            </Button>
          </Stack>
        </Box>

        {/* Plain/Text 버튼 */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            MUI Text/Plain 버튼
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="text" color="primary">
              Text Primary
            </Button>
            <Button variant="text" color="secondary">
              Text Secondary
            </Button>
            <Button variant="text" color="success">
              Text Success
            </Button>
            <Button variant="text" color="error">
              Text Error
            </Button>
            <Button variant="text" color="warning">
              Text Warning
            </Button>
          </Stack>
        </Box>

        {/* 방법 2: 커스텀 버튼 사용 */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            커스텀 버튼 사용
          </Typography>
          <Stack direction="row" spacing={2}>
            <CustomButton variant="primary" startIcon={<Add />}>
              생성
            </CustomButton>
            <CustomButton variant="secondary" startIcon={<Edit />}>
              수정
            </CustomButton>
            <CustomButton variant="success" startIcon={<Save />}>
              저장
            </CustomButton>
            <CustomButton variant="error" startIcon={<Delete />}>
              삭제
            </CustomButton>
            <CustomButton variant="warning">
              경고
            </CustomButton>
            <CustomButton variant="outlined">
              취소
            </CustomButton>
            <CustomButton variant="plain">
              Plain
            </CustomButton>
            <CustomButton variant="plain-secondary">
              Plain Secondary
            </CustomButton>
          </Stack>
        </Box>

        {/* 크기 변형 */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            크기 변형
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <CustomButton variant="primary" size="small">
              Small
            </CustomButton>
            <CustomButton variant="primary" size="medium">
              Medium
            </CustomButton>
            <CustomButton variant="primary" size="large">
              Large
            </CustomButton>
          </Stack>
        </Box>

        {/* 전체 폭 */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            전체 폭 버튼
          </Typography>
          <CustomButton variant="primary" fullWidth>
            전체 폭 버튼
          </CustomButton>
        </Box>
      </Stack>
    </Box>
  )
}

export default ButtonExample 