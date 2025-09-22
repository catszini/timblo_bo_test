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
  Avatar
} from '@mui/material'

const loginHistoryData = [
  {
    id: 1,
    userName: '안지훈',
    email: 'jihoon.ahn@sktelecom.com',
    workspace: 'SK Telecom',
    workspaceColor: '#14B8A6',
    loginTime: '2024-01-15 14:32:15',
    logoutTime: '2024-01-15 18:45:22',
    duration: '4시간 13분',
    ipAddress: '192.168.1.101',
    device: 'Chrome (Windows)',
    status: '정상 로그아웃'
  },
  {
    id: 2,
    userName: '강수정',
    email: 'sujeong.kang@skhynix.com',
    workspace: 'SK Hynix',
    workspaceColor: '#6366F1',
    loginTime: '2024-01-15 09:15:33',
    logoutTime: '2024-01-15 17:30:45',
    duration: '8시간 15분',
    ipAddress: '192.168.1.205',
    device: 'Safari (macOS)',
    status: '정상 로그아웃'
  },
  {
    id: 3,
    userName: '임도현',
    email: 'dohyun.lim@skcc.com',
    workspace: 'SK C&C',
    workspaceColor: '#F43F5E',
    loginTime: '2024-01-15 08:45:12',
    logoutTime: '-',
    duration: '진행중',
    ipAddress: '192.168.1.78',
    device: 'Edge (Windows)',
    status: '접속중'
  },
  {
    id: 4,
    userName: '윤채원',
    email: 'chaewon.yoon@skinnovation.com',
    workspace: 'SK Innovation',
    workspaceColor: '#10B981',
    loginTime: '2024-01-14 16:20:44',
    logoutTime: '2024-01-14 18:55:12',
    duration: '2시간 34분',
    ipAddress: '192.168.1.156',
    device: 'Firefox (Linux)',
    status: '세션 만료'
  }
]

function LoginHistoryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [statusFilter, setStatusFilter] = useState('전체')

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        사용자 접속 이력
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
              총 {loginHistoryData.length}개
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
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="접속중">접속중</MenuItem>
                <MenuItem value="정상 로그아웃">정상 로그아웃</MenuItem>
                <MenuItem value="세션 만료">세션 만료</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            marginLeft: 'auto'
          }}>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <Select
                  value="userName"
                  sx={{ 
                    height: '36px',
                    borderRadius: 0,
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' }}}
                >
                  <MenuItem value="userName">사용자명</MenuItem>
                  <MenuItem value="email">이메일</MenuItem>
                  <MenuItem value="ipAddress">IP 주소</MenuItem>
                  <MenuItem value="workspace">워크스페이스</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ width: '1px', height: '24px' }} />
              <TextField
                size="small"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ 
                  width: 200,
                  '& .MuiOutlinedInput-root': {
                    height: '36px',
                    borderRadius: 0,
                    '& fieldset': { border: 'none' },
                    '&:hover fieldset': { border: 'none' },
                    '&.Mui-focused fieldset': { border: 'none' }}}}
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
              <TableCell>사용자</TableCell>
              <TableCell>워크스페이스</TableCell>
              <TableCell>로그인 시간</TableCell>
              <TableCell>로그아웃 시간</TableCell>
              <TableCell>접속 시간</TableCell>
              <TableCell>IP 주소</TableCell>
              <TableCell>디바이스</TableCell>
              <TableCell>상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loginHistoryData.map((history) => (
              <TableRow key={history.id}>
                <TableCell>
                  <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>
                      {history.userName}
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
                      {history.email}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar 
                      sx={{ 
                        width: 24, 
                        height: 24, 
                        backgroundColor: history.workspaceColor,
                        fontSize: '12px',
                        fontWeight: 600
                      }}
                    >
                      S
                    </Avatar>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                      {history.workspace}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {history.loginTime}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {history.logoutTime}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ 
                    fontSize: '14px',
                    fontWeight: history.status === '접속중' ? 600 : 400,
                    color: history.status === '접속중' ? '#0066FF' : '#292A2B'
                  }}>
                    {history.duration}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontFamily: 'monospace' }}>
                    {history.ipAddress}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {history.device}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={history.status}
                    color={
                      history.status === '접속중' ? 'success' : 
                      history.status === '정상 로그아웃' ? 'default' : 'warning'
                    }
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 페이지네이션 */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 1, 
        mt: 3 
      }}>
        <Button 
          variant="outlined" 
          size="small"
          sx={{ 
            minWidth: '32px', 
            height: '32px', 
            borderColor: '#E5E5E5',
            color: '#6B7280'
          }}
        >
          ‹
        </Button>
        <Button 
          variant="text"
              color="primary"
          size="small"
          sx={{ 
            minWidth: '32px', 
            height: '32px'
          }}
        >
          1
        </Button>
        <Button 
          variant="outlined" 
          size="small"
          sx={{ 
            minWidth: '32px', 
            height: '32px', 
            borderColor: '#E5E5E5',
            color: '#6B7280'
          }}
        >
          ›
        </Button>
      </Box>
    </Box>
  )
}

export default LoginHistoryPage
