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
  LinearProgress
} from '@mui/material'

const systemStatsData = [
  {
    id: 1,
    userName: '김태현',
    email: 'taehyun.kim@sktelecom.com',
    workspace: 'SK Telecom',
    workspaceColor: '#14B8A6',
    role: '시스템관리자',
    loginCount: 142,
    lastLogin: '2024-01-15 14:32',
    meetingCount: 89,
    meetingMinutes: 1340,
    downloadCount: 45,
    createdTemplates: 12,
    usageScore: 95.2,
    period: '2024-01'
  },
  {
    id: 2,
    userName: '이정우',
    email: 'jungwoo.lee@skhynix.com',
    workspace: 'SK Hynix',
    workspaceColor: '#6366F1',
    role: '운영자',
    loginCount: 98,
    lastLogin: '2024-01-15 11:20',
    meetingCount: 67,
    meetingMinutes: 980,
    downloadCount: 23,
    createdTemplates: 8,
    usageScore: 78.5,
    period: '2024-01'
  },
  {
    id: 3,
    userName: '박서현',
    email: 'seohyun.park@skcc.com',
    workspace: 'SK C&C',
    workspaceColor: '#F43F5E',
    role: '담당자',
    loginCount: 76,
    lastLogin: '2024-01-15 09:15',
    meetingCount: 34,
    meetingMinutes: 456,
    downloadCount: 15,
    createdTemplates: 3,
    usageScore: 65.8,
    period: '2024-01'
  },
  {
    id: 4,
    userName: '최민준',
    email: 'minjun.choi@skinnovation.com',
    workspace: 'SK Innovation',
    workspaceColor: '#10B981',
    role: '개발자',
    loginCount: 156,
    lastLogin: '2024-01-15 16:45',
    meetingCount: 123,
    meetingMinutes: 2145,
    downloadCount: 89,
    createdTemplates: 25,
    usageScore: 88.9,
    period: '2024-01'
  },
  {
    id: 5,
    userName: '정유진',
    email: 'jung.analyst@sknetworks.com',
    workspace: 'SK Networks',
    workspaceColor: '#F59E0B',
    role: '분석가',
    loginCount: 112,
    lastLogin: '2024-01-15 13:10',
    meetingCount: 78,
    meetingMinutes: 1567,
    downloadCount: 156,
    createdTemplates: 15,
    usageScore: 82.3,
    period: '2024-01'
  }
]

function SystemStatsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [roleFilter, setRoleFilter] = useState('전체')
  const [workspaceFilter, setWorkspaceFilter] = useState('전체')

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const mins = Math.floor(minutes % 60)
    return `${hours}시간 ${mins}분`
  }

  const getScoreColor = (score) => {
    if (score >= 90) return '#10B981'
    if (score >= 80) return '#F59E0B'
    if (score >= 70) return '#EF4444'
    return '#6B7280'
  }

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        사용자별 통계
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
              총 {systemStatsData.length}개
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
                value={workspaceFilter}
                onChange={(e) => setWorkspaceFilter(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="SK Telecom">SK Telecom</MenuItem>
                <MenuItem value="SK Hynix">SK Hynix</MenuItem>
                <MenuItem value="SK C&C">SK C&C</MenuItem>
                <MenuItem value="SK Innovation">SK Innovation</MenuItem>
                <MenuItem value="SK Networks">SK Networks</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="시스템관리자">시스템관리자</MenuItem>
                <MenuItem value="운영자">운영자</MenuItem>
                <MenuItem value="담당자">담당자</MenuItem>
                <MenuItem value="개발자">개발자</MenuItem>
                <MenuItem value="분석가">분석가</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            marginLeft: 'auto'
          }}>
            <Button 
              variant="text"
              color="primary"
              size="small"
              sx={{ 
                height: '36px'
              }}
            >
              데이터 내보내기
            </Button>
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
              <TableCell>역할</TableCell>
              <TableCell>로그인 횟수</TableCell>
              <TableCell>최종 로그인</TableCell>
              <TableCell>회의 참석</TableCell>
              <TableCell>회의 시간</TableCell>
              <TableCell>다운로드</TableCell>
              <TableCell>템플릿 생성</TableCell>
              <TableCell>활용도</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {systemStatsData.map((stats) => (
              <TableRow key={stats.id}>
                <TableCell>
                  <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>
                      {stats.userName}
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
                      {stats.email}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar 
                      sx={{ 
                        width: 24, 
                        height: 24, 
                        backgroundColor: stats.workspaceColor,
                        fontSize: '12px',
                        fontWeight: 600
                      }}
                    >
                      S
                    </Avatar>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                      {stats.workspace}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={stats.role}
                    size="small"
                    sx={{ 
                      backgroundColor: 
                        stats.role === '시스템관리자' ? '#fee2e2' :
                        stats.role === '운영자' ? '#fef3c7' :
                        stats.role === '개발자' ? '#dcfce7' :
                        stats.role === '분석가' ? '#dbeafe' : '#f3f4f6',
                      color: 
                        stats.role === '시스템관리자' ? '#dc2626' :
                        stats.role === '운영자' ? '#d97706' :
                        stats.role === '개발자' ? '#16a34a' :
                        stats.role === '분석가' ? '#2563eb' : '#6b7280'
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                    {stats.loginCount}회
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {stats.lastLogin}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                    {stats.meetingCount}회
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {formatTime(stats.meetingMinutes)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                    {stats.downloadCount}회
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                    {stats.createdTemplates}개
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: 120 }}>
                    <Typography sx={{ 
                      fontSize: '14px', 
                      fontWeight: 600, 
                      minWidth: 45,
                      color: getScoreColor(stats.usageScore)
                    }}>
                      {stats.usageScore}점
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={stats.usageScore} 
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: getScoreColor(stats.usageScore)}}}
                      />
                    </Box>
                  </Box>
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

export default SystemStatsPage
