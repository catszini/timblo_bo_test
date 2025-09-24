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
  Chip,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Avatar,
  Pagination,
  Grid,
  Divider,
  Card,
  CardContent
} from '@mui/material'

const settingChangeHistoryData = [
  {
    id: 1,
    userName: '한리자',
    ipAddress: '192.168.1.100',
    screenName: '사용자 관리',
    changeItem: '권한 설정',
    changeTime: '2024-03-15 14:30:25'
  },
  {
    id: 2,
    userName: '김철수',
    ipAddress: '192.168.1.101',
    screenName: '메뉴 관리',
    changeItem: '메뉴 순서',
    changeTime: '2024-03-15 13:45:12'
  },
  {
    id: 3,
    userName: '이영희',
    ipAddress: '192.168.1.102',
    screenName: '권한 관리',
    changeItem: '사용자 권한',
    changeTime: '2024-03-15 12:20:45'
  },
  {
    id: 4,
    userName: '박지민',
    ipAddress: '192.168.1.103',
    screenName: '엔진 관리',
    changeItem: '엔진 설정',
    changeTime: '2024-03-15 11:15:30'
  },
  {
    id: 5,
    userName: '최동호',
    ipAddress: '192.168.1.104',
    screenName: '통계',
    changeItem: '보고서 설정',
    changeTime: '2024-03-15 10:30:18'
  },
  {
    id: 6,
    userName: '장미영',
    ipAddress: '192.168.1.105',
    screenName: '사용자 관리',
    changeItem: '프로필 설정',
    changeTime: '2024-03-15 09:45:33'
  },
  {
    id: 7,
    userName: '강민수',
    ipAddress: '192.168.1.106',
    screenName: '워크스페이스 관리',
    changeItem: '워크스페이스 설정',
    changeTime: '2024-03-15 08:20:15'
  },
  {
    id: 8,
    userName: '윤서연',
    ipAddress: '192.168.1.107',
    screenName: '템플릿 관리',
    changeItem: '템플릿 순서',
    changeTime: '2024-03-15 07:15:42'
  },
  {
    id: 9,
    userName: '조현우',
    ipAddress: '192.168.1.108',
    screenName: '프롬프트 관리',
    changeItem: '프롬프트 설정',
    changeTime: '2024-03-15 06:30:28'
  },
  {
    id: 10,
    userName: '한지원',
    ipAddress: '192.168.1.109',
    screenName: '캘린더 관리',
    changeItem: '일정 설정',
    changeTime: '2024-03-15 05:45:55'
  }
]

function SettingChangeHistoryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [categoryFilter, setCategoryFilter] = useState('전체')
  const [selectedChange, setSelectedChange] = useState(settingChangeHistoryData[0])

  const handleRowClick = (change) => {
    setSelectedChange(change)
  }

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        설정변경 이력
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
              fontSize: '16px', 
              fontWeight: 600, 
              color: '#292A2B',
              whiteSpace: 'nowrap'
            }}>
              총 {settingChangeHistoryData.length}개
            </Typography>
            <FormControl size="small" sx={{ minWidth: 80 }}>
              <Select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                sx={{ fontSize: '14px', height: '36px' }}
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="워크스페이스">워크스페이스</MenuItem>
                <MenuItem value="권한">권한</MenuItem>
                <MenuItem value="시스템">시스템</MenuItem>
                <MenuItem value="템플릿">템플릿</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px'
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              padding: '6px 12px',
              minWidth: '240px'
            }}>
              <TextField
                placeholder="사용자명, 설정명, IP 주소로 검색"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': {
                    border: 'none',
                    '& fieldset': {
                      border: 'none',
                    },
                  },
                  '& .MuiInputBase-input': {
                    padding: '6px 0',
                    fontSize: '14px'
                  }
                }}
              />
            </Box>
            <Button 
              variant="text"
              color="primary" 
              size="small"
              sx={{ 
                height: '36px',
                minWidth: '60px'
              }}
            >
              검색
            </Button>
          </Box>
        </Box>
      </Box>

      {/* 테이블 */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>관리자</TableCell>
              <TableCell>변경IP</TableCell>
              <TableCell>화면명</TableCell>
              <TableCell>변경항목</TableCell>
              <TableCell>변경시간</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {settingChangeHistoryData.map((history) => (
              <TableRow 
                key={history.id}
                onClick={() => handleRowClick(history)}
                sx={{ 
                  cursor: 'pointer',
                  backgroundColor: selectedChange?.id === history.id ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                  '&:hover': {
                    backgroundColor: selectedChange?.id === history.id ? 'rgba(59, 130, 246, 0.15)' : '#F9FAFB'
                  }
                }}
              >
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                    {history.userName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {history.ipAddress}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {history.screenName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {history.changeItem}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {history.changeTime}
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
        justifyContent: 'center', 
        mt: 3 
      }}>
        <Pagination 
          count={5} 
          page={1} 
          shape="rounded"
          showFirstButton={false}
          showLastButton={false}
        />
      </Box>

      {/* 선택된 변경사항 상세 정보 */}
      {selectedChange && (
        <Box sx={{ mt: 4 }}>
          {/* 상세보기 */}
          <Typography variant="h6" sx={{ mb: 3 }}>
            상세보기
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: 250, border: '1px solid #E5E7EB' }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  mb: 2,
                  pb: 1,
                  borderBottom: '1px solid #E5E7EB'
                }}>
                  <Box 
                    sx={{
                      width: 12, 
                      height: 12, 
                      backgroundColor: '#6B7280',
                      borderRadius: '50%'
                    }} 
                  />
                  <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 600, color: '#6B7280' }}>
                    변경전 내역
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  p: 2, 
                  borderRadius: 1,
                  height: 170,
                  overflow: 'auto'
                }}>
                  <Box>
                    <Typography sx={{ fontSize: '14px', mb: 1 }}>
                      권한 설정: 일반 사용자
                    </Typography>
                    <Typography sx={{ fontSize: '14px', mb: 1 }}>
                      접근 권한: 읽기 전용
                    </Typography>
                    <Typography sx={{ fontSize: '14px', mb: 1 }}>
                      메뉴 접근: 제한됨
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                      파일 다운로드: 불가능
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: 250, border: '1px solid #E5E7EB' }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  mb: 2,
                  pb: 1,
                  borderBottom: '1px solid #E5E7EB'
                }}>
                  <Box 
                    sx={{
                      width: 12, 
                      height: 12, 
                      backgroundColor: '#3B82F6',
                      borderRadius: '50%'
                    }} 
                  />
                  <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 600, color: '#3B82F6' }}>
                    변경후 내역
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  p: 2, 
                  borderRadius: 1,
                  height: 170,
                  overflow: 'auto'
                }}>
                  <Box>
                    <Typography sx={{ fontSize: '14px', mb: 1 }}>
                      권한 설정: 관리자
                    </Typography>
                    <Typography sx={{ fontSize: '14px', mb: 1 }}>
                      접근 권한: 읽기/쓰기
                    </Typography>
                    <Typography sx={{ fontSize: '14px', mb: 1 }}>
                      메뉴 접근: 전체 허용
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                      파일 다운로드: 가능
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  )
}

export default SettingChangeHistoryPage