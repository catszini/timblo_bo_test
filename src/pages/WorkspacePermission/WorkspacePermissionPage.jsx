import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Switch,
  FormControlLabel,
  Checkbox,
  Button,
  ButtonGroup,
  Box,
  styled
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

// 커스텀 체크박스 스타일
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    width: 16,
    height: 16,
    border: '1.5px solid #97c3f0',
    borderRadius: '3px',
    backgroundColor: 'white', // 미체크 상태는 흰색 배경
    '& path': {
      display: 'none', // 체크 아이콘 숨김
    },
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    backgroundColor: 'rgba(199, 223, 247, 0.8)', // 체크된 상태만 파란색 배경
    borderColor: '#97c3f0',
  },
  '&.MuiCheckbox-indeterminate .MuiSvgIcon-root': {
    backgroundColor: 'rgba(199, 223, 247, 0.8)', // indeterminate 상태도 파란색 배경
    borderColor: '#97c3f0',
  },
  '&:hover .MuiSvgIcon-root': {
    borderColor: '#a5cef3',
    backgroundColor: 'white', // 미체크 호버 시에도 흰색 유지
  },
  '&.Mui-checked:hover .MuiSvgIcon-root': {
    backgroundColor: 'rgba(199, 223, 247, 0.9)', // 체크된 상태 호버 시만 파란색
    borderColor: '#a5cef3',
  },
}))

const permissionData = [
  {
    id: 1,
    feature: '브라우저 탭 제목 지정',
    description: '브라우저 제목바에 표시될 제목을 설정합니다.',
    settingType: 'input',
    value: 'AI 회의록 - dev'
  },
  {
    id: 2,
    feature: '동의서 제출요구',
    description: '각종 서비스 이용에 대한 동의서 제출을 요구합니다.',
    settingType: 'toggle',
    enabled: true
  },
  {
    id: 3,
    feature: '썸네일 이미지 업로드',
    description: '썸네일 이미지 업로드 기능을 활성화합니다.',
    settingType: 'toggle',
    enabled: false
  },
  {
    id: 4,
    feature: '닉네임 수정',
    description: '닉네임 수정 기능을 활성화합니다.',
    settingType: 'toggle',
    enabled: true
  },
  {
    id: 5,
    feature: '주소록 기능',
    description: '주소록 기능을 활성화합니다',
    settingType: 'toggle',
    enabled: false
  },
  {
    id: 6,
    feature: '녹음 기능',
    description: '녹음 관련 기능을 전체적으로 비활성화하지 비활성화합니다.',
    settingType: 'toggle',
    enabled: true
  },
  {
    id: 7,
    feature: '파일 업로드',
    description: '파일 업로드 기능을 활성화합니다.',
    settingType: 'toggle',
    enabled: true
  },
  {
    id: 8,
    feature: '이메일 알림',
    description: '신규회의록 생성에 대한 이메일 알림 기능을 활성화합니다.',
    settingType: 'toggle',
    enabled: true
  },
  {
    id: 9,
    feature: '회의록 공유',
    description: '회의록 공유 기능을 활성화 합니다.',
    settingType: 'toggle',
    enabled: false
  },
  {
    id: 10,
    feature: '클립보드 복사',
    description: 'AI 요약, 음성기록의 클립보드 복사 기능을 활성화합니다.',
    settingType: 'toggle',
    enabled: false
  },
  {
    id: 11,
    feature: '재요약 기능',
    description: '음성기록에 대한 재요약 기능을 활성화합니다.',
    settingType: 'toggle',
    enabled: true
  },
  {
    id: 12,
    feature: '템플릿 기능',
    description: '노트 탭의 템플릿 기능을 활성화 합니다.',
    settingType: 'toggle',
    enabled: true
  },
  {
    id: 13,
    feature: '문서파일 다운로드',
    description: '문서 다운로드 관련 기능 진체에 활성화합니다.',
    settingType: 'toggle',
    enabled: true
  },
  {
    id: 14,
    feature: '문서 파일 다운로드 항목',
    description: '문서 파일 다운로드 기능을 활성화합니다.',
    settingType: 'checkbox-group',
    options: ['전체 요약', '별도', '하이라이트', '노트', '음성 기록'],
    selectedOptions: []
  },
  {
    id: 15,
    feature: '영상/음성 파일 다운로드',
    description: '영상/음성 파일 다운로드 기능을 활성화합니다.',
    settingType: 'checkbox-group',
    options: ['TXT 다운로드', 'PDF 다운로드', 'DOCX 다운로드', 'HWP 다운로드'],
    selectedOptions: []
  },
  {
    id: 16,
    feature: '영상/음성 파일 보존기간',
    description: '녹음된 음성파일이나 업로드된 미디어의 원본파일의 보존 기간을 설정합니다.',
    settingType: 'select',
    value: '180일',
    options: ['90일', '180일', '1년', '3년', '직접 입력'],
    customValue: ''
  },
  {
    id: 17,
    feature: '영상/음성 전사기록 보존기간',
    description: '음성 전사된 컨텐츠에 대한 보존기간을 설정합니다.',
    settingType: 'select',
    value: '영구',
    options: ['영구', '1년', '2년', '3년', '직접 입력'],
    customValue: ''
  },
  {
    id: 18,
    feature: 'AI 요약 보존 기간',
    description: 'LLM에 의해 요약된 컨텐츠에 대한 보존기간을 설정합니다.',
    settingType: 'select',
    value: '영구',
    options: ['영구', '1년', '2년', '3년', '직접 입력'],
    customValue: ''
  }
]

const WorkspacePermissionPage = () => {
  const [permissions, setPermissions] = useState(permissionData)

  const handleToggleChange = (id, newValue) => {
    setPermissions(permissions.map(permission =>
      permission.id === id ? { ...permission, enabled: newValue } : permission
    ))
  }

  const handleInputChange = (id, newValue) => {
    setPermissions(permissions.map(permission =>
      permission.id === id ? { ...permission, value: newValue } : permission
    ))
  }

  const handleSelectChange = (id, newValue) => {
    setPermissions(permissions.map(permission =>
      permission.id === id ? { ...permission, value: newValue } : permission
    ))
  }

  const handleCustomCheckboxChange = (id, option, checked) => {
    setPermissions(permissions.map(permission => {
      if (permission.id === id) {
        const selectedOptions = checked
          ? [...permission.selectedOptions, option]
          : permission.selectedOptions.filter(item => item !== option)
        return { ...permission, selectedOptions }
      }
      return permission
    }))
  }

  const handleCustomInputChange = (id, customValue) => {
    setPermissions(permissions.map(permission =>
      permission.id === id ? { ...permission, customValue } : permission
    ))
  }

  const handleSave = () => {
    console.log('권한 설정 저장:', permissions)
    alert('권한 설정이 저장되었습니다.')
  }

  const handleCancel = () => {
    if (window.confirm('변경사항을 취소하시겠습니까?')) {
      setPermissions(permissionData)
    }
  }

  const renderSetting = (permission) => {
    switch (permission.settingType) {
      case 'input':
        return (
          <TextField
            value={permission.value}
            onChange={(e) => handleInputChange(permission.id, e.target.value)}
            variant="outlined"
            size="small"
            className="setting-input"
          />
        )
      
      case 'toggle':
        return (
          <FormControlLabel
            control={
              <Switch
                checked={permission.enabled}
                onChange={(e) => handleToggleChange(permission.id, e.target.checked)}
                size="small"
                color="primary"
              />
            }
            label=""
            className="toggle-switch"
          />
        )
      
      case 'select':
        return (
          <div className="setting-combo-wrapper">
            <FormControl size="small" className="combo-select" style={{ width: '100%' }}>
              <Select
                value={permission.value}
                onChange={(e) => handleSelectChange(permission.id, e.target.value)}
                variant="outlined"
                style={{ width: '100%' }}
              >
                {permission.options.map(option => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {permission.value === '직접 입력' && (
              <>
                <TextField
                  type="text"
                  value={permission.customValue || ''}
                  onChange={(e) => handleCustomInputChange(permission.id, e.target.value)}
                  variant="outlined"
                  size="small"
                  className="custom-input"
                  style={{ marginLeft: '8px', width: '100px' }}
                />
                <span className="input-unit" style={{ marginLeft: '4px' }}>일 후</span>
              </>
            )}
          </div>
        )
      
      case 'checkbox-group':
        return (
          <div className="checkbox-group-horizontal">
            {permission.options.map(option => (
              <label key={option} className="checkbox-item" style={{ display: 'flex', alignItems: 'center', marginRight: '16px', marginBottom: '8px' }}>
                <CustomCheckbox
                  checked={permission.selectedOptions.includes(option)}
                  onChange={(e) => handleCustomCheckboxChange(permission.id, option, e.target.checked)}
                  size="small"
                  className="feature-checkbox"
                  style={{ padding: '4px', marginRight: '4px' }}
                />
                {option}
              </label>
            ))}
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <Layout className="page-workspace-permission">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">기능 권한 관리</h1>
        </div>
        
        <div className="content-body">
          {/* 기능 권한 관리 테이블 */}
          <div className="permission-table-container">
            <table className="permission-table">
              <thead>
                <tr>
                  <th width="250">기능</th>
                  <th>권한 설명</th>
                  <th width="300">사용 설정</th>
                </tr>
              </thead>
              <tbody>
                {permissions.map((permission) => (
                  <tr key={permission.id}>
                    <td className="feature-name">{permission.feature}</td>
                    <td className="feature-description">{permission.description}</td>
                    <td className="feature-setting">
                      {renderSetting(permission)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 권한 설정 저장 버튼 */}
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
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
                onClick={handleSave}
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
                저장
              </Button>
            </ButtonGroup>
          </Box>
        </div>
      </div>
    </Layout>
  )
}

export default WorkspacePermissionPage