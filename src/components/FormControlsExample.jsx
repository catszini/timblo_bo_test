import React, { useState } from 'react'
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Paper,
  Stack,
  Divider
} from '@mui/material'

const FormControlsExample = () => {
  const [checkedItems, setCheckedItems] = useState({
    system: true,
    workspace: false,
    users: true,
    menu: false,
    templates: true,
    prompts: false
  })

  const [radioValue, setRadioValue] = useState('option1')
  const [switchValue, setSwitchValue] = useState(true)

  const handleCheckboxChange = (name) => (event) => {
    setCheckedItems(prev => ({
      ...prev,
      [name]: event.target.checked
    }))
  }

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value)
  }

  const handleSwitchChange = (event) => {
    setSwitchValue(event.target.checked)
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        폼 컨트롤 테마 예시
      </Typography>

      <Stack spacing={4}>
        {/* 체크박스 그룹 */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            체크박스 (권한 관리 예시)
          </Typography>
          
          <FormGroup>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: 'primary.main' }}>
              ✓ 시스템
            </Typography>
            <Box sx={{ ml: 2, mb: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedItems.workspace}
                    onChange={handleCheckboxChange('workspace')}
                  />
                }
                label="워크스페이스 관리"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedItems.users}
                    onChange={handleCheckboxChange('users')}
                  />
                }
                label="사용자 관리"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedItems.menu}
                    onChange={handleCheckboxChange('menu')}
                  />
                }
                label="메뉴 생성 관리"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedItems.templates}
                    onChange={handleCheckboxChange('templates')}
                  />
                }
                label="메뉴 권한 관리"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedItems.prompts}
                    onChange={handleCheckboxChange('prompts')}
                  />
                }
                label="사용량 통계"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedItems.system}
                    onChange={handleCheckboxChange('system')}
                  />
                }
                label="사용자별 통계"
              />
            </Box>

            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: 'primary.main' }}>
              ✓ 워크스페이스
            </Typography>
            <Box sx={{ ml: 2 }}>
              <FormControlLabel
                control={<Checkbox checked />}
                label="기능 권한 관리"
              />
              <FormControlLabel
                control={<Checkbox checked />}
                label="메뉴 권한 관리"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="사용자 관리"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="로고 이미지 관리"
              />
              <FormControlLabel
                control={<Checkbox checked />}
                label="회의 템플릿 관리"
              />
              <FormControlLabel
                control={<Checkbox checked />}
                label="프롬프트 관리"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="동의서 관리"
              />
            </Box>
          </FormGroup>
        </Paper>

        {/* 라디오 버튼 그룹 */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            라디오 버튼 (선택 옵션)
          </Typography>
          
          <RadioGroup value={radioValue} onChange={handleRadioChange}>
            <FormControlLabel
              value="option1"
              control={<Radio />}
              label="시스템관리자"
            />
            <FormControlLabel
              value="option2"
              control={<Radio />}
              label="워크스페이스관리자"
            />
            <FormControlLabel
              value="option3"
              control={<Radio />}
              label="메뉴관리자"
            />
            <FormControlLabel
              value="option4"
              control={<Radio />}
              label="통계관리자"
            />
          </RadioGroup>
        </Paper>

        {/* 스위치 */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            스위치 (활성화/비활성화)
          </Typography>
          
          <Stack spacing={2}>
            <FormControlLabel
              control={
                <Switch
                  checked={switchValue}
                  onChange={handleSwitchChange}
                />
              }
              label="서비스 활성화"
            />
            <FormControlLabel
              control={<Switch checked />}
              label="이메일 알림"
            />
            <FormControlLabel
              control={<Switch />}
              label="푸시 알림"
            />
            <FormControlLabel
              control={<Switch checked />}
              label="자동 저장"
            />
          </Stack>
        </Paper>

        {/* 혼합 예시 */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            혼합 사용 예시
          </Typography>
          
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <FormControlLabel
                control={<Checkbox checked />}
                label="워크스페이스 관리"
              />
              <FormControlLabel
                control={<Switch checked />}
                label="활성화"
              />
            </Box>
            
            <Divider />
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <FormControlLabel
                control={<Checkbox />}
                label="사용자 관리"
              />
              <FormControlLabel
                control={<Switch />}
                label="활성화"
              />
            </Box>
            
            <Divider />
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <FormControlLabel
                control={<Checkbox checked />}
                label="메뉴 권한 관리"
              />
              <FormControlLabel
                control={<Switch checked />}
                label="활성화"
              />
            </Box>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  )
}

export default FormControlsExample 