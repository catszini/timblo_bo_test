import React, { useState } from 'react'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Switch,
  Checkbox,
  FormControlLabel
} from '@mui/material'

const featurePermissionData = [
  { id: 1, featureName: '브라우저 제목바 제목', settingType: 'text', value: 'AI 회의록 - dev', description: '브라우저 제목바에 표시될 제목을 설정합니다.' },
  { id: 2, featureName: '동의서 제출요구', settingType: 'toggle', value: true, description: '각종 서비스 이용에 대한 동의서 제출을 요구합니다.' },
  { id: 3, featureName: '번역버전 아바타 업로드', settingType: 'toggle', value: false, description: '번역된 아바타 업로드 기능을 활성화합니다.' },
  { id: 4, featureName: '녹취록 수정', settingType: 'toggle', value: true, description: '녹취록 수정 기능을 활성화합니다.' },
  { id: 5, featureName: '주소록 기능', settingType: 'toggle', value: false, description: '주소록 기능을 활성화합니다' },
  { id: 6, featureName: '녹음 기능', settingType: 'toggle', value: true, description: '녹음 관련 기능을 전체적으로 비활성화하거나 비활성화합니다.' },
  { id: 7, featureName: '파일 업로드', settingType: 'toggle', value: true, description: '파일 업로드 기능을 활성화합니다.' },
  { id: 8, featureName: '이메일 알림', settingType: 'toggle', value: true, description: '신규회원의 생성에 대한 이메일 알림 기능을 활성화합니다.' },
  { id: 9, featureName: '화면록 공유', settingType: 'toggle', value: false, description: '화면록 공유 기능을 활성한 합니다.' },
  { id: 10, featureName: '클립보드 복사', settingType: 'toggle', value: false, description: 'AI 요약, 음성기록의 클립보드 복사 기능을 활성화합니다.' },
  { id: 11, featureName: '제안어 기능', settingType: 'toggle', value: true, description: '음성기록에 대한 제안어 기능을 활성화합니다.' },
  { id: 12, featureName: '템플릿 기능', settingType: 'toggle', value: true, description: '노트 탬의 템플릿 기능을 활성한 합니다.' },
  { id: 13, featureName: '문서파일 다운로드', settingType: 'toggle', value: true, description: '문서 다운로드 관련 기능 선택해 활성화합니다.' },
  { id: 14, featureName: '문서 파일 다운로드 설정', settingType: 'checkbox', value: ['선택 요약', '볼드', '하이라이트', '노트', '음성 기록'], options: ['TXT 다운로드', 'PDF 다운로드', 'DOCX 다운로드', 'HWP 다운로드'], description: '문서 파일 다운로드 기능을 활성화합니다.' },
  { id: 15, featureName: '영상/음성 파일 다운로드', settingType: 'checkbox', value: [], options: ['TXT 다운로드', 'PDF 다운로드', 'DOCX 다운로드', 'HWP 다운로드'], description: '영상/음성 파일 다운로드 기능을 활성화합니다.' },
  { id: 16, featureName: '영상/음성 파일 보존기간', settingType: 'select', value: '180일', customValue: '', options: ['90일', '180일', '1년', '3년', '직접 입력'], description: '녹음된 영상화먼 업로드된 미디어의 암호화랑된 보존 기간을 설정합니다.' },
  { id: 17, featureName: '영상/음성 전사기록 보존기간', settingType: 'select', value: '영구', customValue: '', options: ['90일', '180일', '1년', '3년', '직접 입력'], description: '음성 전사된 전체소에 대한 보존기간을 설정합니다.' },
  { id: 18, featureName: 'AI 요약 보존 기간', settingType: 'select', value: '영구', customValue: '', options: ['90일', '180일', '1년', '3년', '직접 입력'], description: 'LLM에 의해 요약된 전체소에 대한 보존기간을 설정합니다.' }
]

function FeaturePermissionPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [features, setFeatures] = useState(featurePermissionData)

  const handleToggle = (id) => {
    setFeatures(prev => 
      prev.map(feature => 
        feature.id === id 
          ? { ...feature, value: !feature.value }
          : feature
      )
    )
  }

  const handleTextChange = (id, value) => {
    setFeatures(prev => 
      prev.map(feature => 
        feature.id === id 
          ? { ...feature, value: value }
          : feature
      )
    )
  }

  const handleSelectChange = (id, value) => {
    setFeatures(prev => 
      prev.map(feature => 
        feature.id === id 
          ? { ...feature, value: value, customValue: value === '직접 입력' ? feature.customValue : '' }
          : feature
      )
    )
  }

  const handleCustomValueChange = (id, value) => {
    setFeatures(prev => 
      prev.map(feature => 
        feature.id === id 
          ? { ...feature, customValue: value }
          : feature
      )
    )
  }

  const handleCheckboxChange = (id, option) => {
    setFeatures(prev => 
      prev.map(feature => {
        if (feature.id === id) {
          const currentValues = Array.isArray(feature.value) ? feature.value : []
          const newValues = currentValues.includes(option)
            ? currentValues.filter(item => item !== option)
            : [...currentValues, option]
          return { ...feature, value: newValues }
        }
        return feature
      })
    )
  }

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        기능 권한 관리
      </Typography>

      {/* 검색 툴바 */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          width: '100%'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ 
              fontSize: '14px', 
              fontWeight: 500, 
              color: '#292A2B',
              minWidth: '40px'
            }}>
              검색
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
              size="small"
              placeholder="기능명 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ 
                width: '300px',
                '& .MuiOutlinedInput-root': {
                  height: '36px',
                  fontSize: '14px'
                }
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* 기능 권한 테이블 */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width="200">기능</TableCell>
              <TableCell width="400">권한 설명</TableCell>
              <TableCell>사용 설정</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {features
              .filter(feature => 
                feature.featureName.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((feature) => (
              <TableRow key={feature.id}>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                    {feature.featureName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', color: '#6B7280' }}>
                    {feature.description}
                  </Typography>
                </TableCell>
                <TableCell>
                  {feature.settingType === 'toggle' ? (
                    <Switch 
                      checked={feature.value}
                      onChange={() => handleToggle(feature.id)}
                      size="small"
                    />
                  ) : feature.settingType === 'select' ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <FormControl size="small" sx={{ minWidth: '200px' }}>
                        <Select
                          value={feature.value}
                          onChange={(e) => handleSelectChange(feature.id, e.target.value)}
                          sx={{ 
                            height: '32px',
                            fontSize: '14px'
                          }}
                        >
                          {feature.options?.map((option) => (
                            <MenuItem key={option} value={option} sx={{ fontSize: '14px' }}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {feature.value === '직접 입력' && (
                        <TextField
                          size="small"
                          placeholder="직접 입력하세요"
                          value={feature.customValue || ''}
                          onChange={(e) => handleCustomValueChange(feature.id, e.target.value)}
                          sx={{ 
                            minWidth: '150px',
                            '& .MuiOutlinedInput-root': {
                              height: '32px',
                              fontSize: '14px'
                            }
                          }}
                        />
                      )}
                    </Box>
                  ) : feature.settingType === 'checkbox' ? (
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                      {feature.options?.map((option) => (
                        <FormControlLabel
                          key={option}
                          control={
                            <Checkbox
                              checked={Array.isArray(feature.value) ? feature.value.includes(option) : false}
                              onChange={() => handleCheckboxChange(feature.id, option)}
                              size="small"
                            />
                          }
                          label={
                            <Typography sx={{ fontSize: '12px' }}>
                              {option}
                            </Typography>
                          }
                          sx={{ margin: 0 }}
                        />
                      ))}
                    </Box>
                  ) : (
                    <TextField
                      size="small"
                      value={feature.value}
                      onChange={(e) => handleTextChange(feature.id, e.target.value)}
                      sx={{ 
                        minWidth: '200px',
                        '& .MuiOutlinedInput-root': {
                          height: '32px',
                          fontSize: '14px'
                        }
                      }}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 페이지네이션 */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mt: 2,
        pt: 2,
        borderTop: '1px solid #E5E5E5'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ fontSize: '14px', color: '#6B7280' }}>
            페이지당 항목 수:
          </Typography>
          <FormControl size="small">
            <Select
              value={pageSize}
              onChange={(e) => setPageSize(e.target.value)}
              sx={{ 
                fontSize: '14px',
                minWidth: '70px',
                height: '32px'
              }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>
          <Typography sx={{ fontSize: '14px', color: '#6B7280', ml: 2 }}>
            총 {features.filter(feature => 
              feature.featureName.toLowerCase().includes(searchTerm.toLowerCase())
            ).length}개 항목 중 1-{Math.min(pageSize, features.filter(feature => 
              feature.featureName.toLowerCase().includes(searchTerm.toLowerCase())
            ).length)} 표시
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small"
            disabled
            sx={{ 
              minWidth: '36px',
              height: '36px',
              fontSize: '14px',
              color: '#6B7280',
              borderColor: '#D1D5DB'
            }}
          >
            ‹
          </Button>
          <Button 
            variant="text"
              color="primary" 
            size="small"
            sx={{ 
              minWidth: '36px',
              height: '36px',
              fontSize: '14px'
            }}
          >
            1
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ 
              minWidth: '36px',
              height: '36px',
              fontSize: '14px',
              color: '#6B7280',
              borderColor: '#D1D5DB'
            }}
          >
            ›
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default FeaturePermissionPage