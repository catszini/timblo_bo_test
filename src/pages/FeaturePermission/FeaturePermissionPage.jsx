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
  Switch
} from '@mui/material'

const featurePermissionData = [
  { id: 1, featureName: '브라우저 제목바 제목', settingType: 'text', value: 'AI 회의록 - dev', description: '브라우저 제목바에 표시될 제목을 설정합니다.' },
  { id: 2, featureName: '동의서 제출 요구', settingType: 'toggle', value: true, description: '사용자에게 동의서 제출을 요구합니다.' },
  { id: 3, featureName: '회의록 자동 백업', settingType: 'toggle', value: true, description: '회의록을 자동으로 백업합니다.' },
  { id: 4, featureName: '최대 회의 시간', settingType: 'text', value: '180분', description: '한 번의 회의에서 허용되는 최대 시간을 설정합니다.' },
  { id: 5, featureName: '음성 인식 언어', settingType: 'text', value: '한국어', description: '음성 인식에 사용할 기본 언어를 설정합니다.' },
  { id: 6, featureName: '실시간 번역', settingType: 'toggle', value: false, description: '회의 중 실시간 번역 기능을 활성화합니다.' },
  { id: 7, featureName: '회의 녹음 저장', settingType: 'toggle', value: true, description: '회의 녹음을 서버에 저장합니다.' },
  { id: 8, featureName: '참석자 수 제한', settingType: 'text', value: '50명', description: '한 회의에 참석할 수 있는 최대 인원을 설정합니다.' }
]

function FeaturePermissionPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)

  const handleToggle = (id) => {
    console.log('Toggle feature:', id)
  }

  const handleTextChange = (id, value) => {
    console.log('Update feature:', id, value)
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
              <TableCell>사용 설정</TableCell>
              <TableCell width="400">권한 설명</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {featurePermissionData.map((feature) => (
              <TableRow key={feature.id}>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                    {feature.featureName}
                  </Typography>
                </TableCell>
                <TableCell>
                  {feature.settingType === 'toggle' ? (
                    <Switch 
                      checked={feature.value}
                      onChange={() => handleToggle(feature.id)}
                      size="small"
                    />
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
                <TableCell>
                  <Typography sx={{ fontSize: '14px', color: '#6B7280' }}>
                    {feature.description}
                  </Typography>
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
            총 {featurePermissionData.length}개 항목 중 1-{Math.min(pageSize, featurePermissionData.length)} 표시
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
              borderColor: '#D1D5DB',
              '&:hover': { borderColor: '#D1D5DB' }
            }}
          >
            ‹
          </Button>
          <Button 
            variant="contained" 
            size="small"
            sx={{ 
              minWidth: '36px',
              height: '36px',
              fontSize: '14px',
              backgroundColor: '#0066FF',
              '&:hover': { backgroundColor: '#0052CC' }
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
              borderColor: '#D1D5DB',
              '&:hover': { borderColor: '#D1D5DB' }
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