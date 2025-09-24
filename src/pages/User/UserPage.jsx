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
  InputAdornment
} from '@mui/material'
import { Search } from '@mui/icons-material'

const userData = [
  {
    name: '김민호',
    email: 'minho.kim@sktelecom.com',
    permission: '회의관리자',
    status: 'online',
    lastLogin: '2024-01-15 14:30'
  },
  {
    name: '이수연',
    email: 'suyeon.lee@sktelecom.com',
    permission: '로고관리자',
    status: 'offline',
    lastLogin: '2024-01-14 09:15'
  },
  {
    name: '박재민',
    email: 'jaemin.park@sktelecom.com',
    permission: '사용자관리자',
    status: 'online',
    lastLogin: '2024-01-15 16:45'
  },
  {
    name: '최윤서',
    email: 'yunseo.choi@sktelecom.com',
    permission: '통계관리자',
    status: 'offline',
    lastLogin: '2024-01-13 11:20'
  },
  {
    name: '정하늘',
    email: 'haneul.jung@sktelecom.com',
    permission: '컨텐츠관리자',
    status: 'online',
    lastLogin: '2024-01-15 13:10'
  },
  {
    name: '강지훈',
    email: 'jihoon.kang@sktelecom.com',
    permission: '템플릿관리자',
    status: 'offline',
    lastLogin: '2024-01-15 10:30'
  },
  {
    name: '송미라',
    email: 'mira.song@sktelecom.com',
    permission: '알림관리자',
    status: 'online',
    lastLogin: '2024-01-15 15:20'
  },
  {
    name: '윤태웅',
    email: 'taewoong.yoon@sktelecom.com',
    permission: '보고서관리자',
    status: 'offline',
    lastLogin: '2024-01-14 18:45'
  },
  {
    name: '조서영',
    email: 'seoyoung.cho@sktelecom.com',
    permission: '시스템관리자',
    status: 'online',
    lastLogin: '2024-01-15 12:15'
  },
  {
    name: '한준혁',
    email: 'junhyuk.han@sktelecom.com',
    permission: '데이터관리자',
    status: 'online',
    lastLogin: '2024-01-15 16:00'
  }
]

function UserPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        사용자
      </Typography>

      {/* 검색 툴바 - 기존 스타일과 동일하게 */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'center' },
          justifyContent: 'space-between',
          gap: 2,
          width: '100%'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ 
              fontSize: '16px', 
              fontWeight: 600, 
              color: '#292A2B',
              whiteSpace: 'nowrap'
            }}>
              총 {userData.length}개
            </Typography>
            <FormControl size="small" sx={{ minWidth: 80 }}>
              <Select
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value={10}>10개</MenuItem>
                <MenuItem value={20}>20개</MenuItem>
                <MenuItem value={50}>50개</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'stretch', sm: 'center' }, 
            gap: 1,
            width: { xs: '100%', md: 'auto' }
          }}>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: '8px',
              overflow: 'hidden',
              width: { xs: '100%', sm: 'auto' }
            }}>
              <FormControl size="small" sx={{ minWidth: { xs: 100, sm: 120 } }}>
                <Select
                  value="name"
                  sx={{ 
                    height: '36px',
                    borderRadius: 0,
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'},
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none'},
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none'}}}
                >
                  <MenuItem value="name">이름</MenuItem>
                  <MenuItem value="email">이메일</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ 
                width: '1px', 
                height: '24px' 
              }} />
              <TextField
                size="small"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ 
                  width: { xs: '100%', sm: 200 },
                  '& .MuiOutlinedInput-root': {
                    height: '36px',
                    borderRadius: 0,
                    '& fieldset': {
                      border: 'none'},
                    '&:hover fieldset': {
                      border: 'none'},
                    '&.Mui-focused fieldset': {
                      border: 'none'}}}}
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
      <TableContainer component={Paper} sx={{ width: '100%' }}>
        <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: { xs: '25%', sm: '20%' } }}>이름</TableCell>
              <TableCell sx={{ display: { xs: 'none', md: 'table-cell' }, width: '30%' }}>이메일</TableCell>
              <TableCell sx={{ width: { xs: '35%', sm: '25%' } }}>권한</TableCell>
              <TableCell sx={{ display: { xs: 'none', lg: 'table-cell' }, width: '15%' }}>접속상태</TableCell>
              <TableCell sx={{ width: { xs: '25%', sm: '20%' } }}>최종 로그인</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user, index) => (
              <TableRow key={index}>
                <TableCell sx={{ 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis', 
                  whiteSpace: 'nowrap',
                  fontSize: { xs: '12px', sm: '14px' }
                }}>
                  {user.name}
                </TableCell>
                <TableCell sx={{ 
                  display: { xs: 'none', md: 'table-cell' },
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis', 
                  whiteSpace: 'nowrap',
                  fontSize: '14px'
                }}>
                  {user.email}
                </TableCell>
                <TableCell>
                  <FormControl size="small" sx={{ minWidth: { xs: 100, sm: 120 }, width: '100%' }}>
                    <Select value={user.permission}>
                      <MenuItem value="회의관리자">회의관리자</MenuItem>
                      <MenuItem value="로고관리자">로고관리자</MenuItem>
                      <MenuItem value="사용자관리자">사용자관리자</MenuItem>
                      <MenuItem value="통계관리자">통계관리자</MenuItem>
                      <MenuItem value="컨텐츠관리자">컨텐츠관리자</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell sx={{ display: { xs: 'none', lg: 'table-cell' } }}>
                  <Chip 
                    label={user.status === 'online' ? '온라인' : '오프라인'}
                    color={user.status === 'online' ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell sx={{ 
                  fontSize: { xs: '12px', sm: '14px' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {user.lastLogin}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default UserPage
