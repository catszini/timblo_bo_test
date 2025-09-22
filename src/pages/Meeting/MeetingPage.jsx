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
  Link
} from '@mui/material'

const meetingData = [
  {
    id: 1,
    title: '2024년 1분기 성과 검토 회의',
    date: '2024-01-15',
    time: '14:00-15:30',
    participants: 8,
    status: '완료',
    creator: '김회의',
    workspace: 'SK Telecom'
  },
  {
    id: 2,
    title: '신규 프로젝트 기획 회의',
    date: '2024-01-14',
    time: '10:00-11:00',
    participants: 5,
    status: '완료',
    creator: '이기획',
    workspace: 'SK Innovation'
  },
  {
    id: 3,
    title: '주간 팀 미팅',
    date: '2024-01-13',
    time: '16:00-17:00',
    participants: 12,
    status: '진행중',
    creator: '박팀장',
    workspace: 'SK C&C'
  },
  {
    id: 4,
    title: '월례 전체 회의',
    date: '2024-01-12',
    time: '09:00-10:30',
    participants: 25,
    status: '완료',
    creator: '최관리',
    workspace: 'SK Hynix'
  }
]

function MeetingPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [statusFilter, setStatusFilter] = useState('전체')

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        회의록
      </Typography>

      {/* 검색 툴바 */}
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
              총 {meetingData.length}개
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
            <FormControl size="small" sx={{ minWidth: 100 }}>
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="완료">완료</MenuItem>
                <MenuItem value="진행중">진행중</MenuItem>
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
              backgroundColor: '#fff',
              overflow: 'hidden'
            }}>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <Select
                  value="title"
                  sx={{ 
                    height: '36px',
                    borderRadius: 0,
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' },
                  }}
                >
                  <MenuItem value="title">제목</MenuItem>
                  <MenuItem value="creator">작성자</MenuItem>
                  <MenuItem value="workspace">워크스페이스</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ width: '1px', height: '24px', backgroundColor: '#E5E5E5' }} />
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
                    '&.Mui-focused fieldset': { border: 'none' },
                  },
                }}
              />
            </Box>
            <Button 
              variant="contained" 
              size="small"
              sx={{ 
                height: '36px',
                minWidth: '60px',
                backgroundColor: '#0066FF',
                '&:hover': { backgroundColor: '#0052CC' }
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
              <TableCell>제목</TableCell>
              <TableCell>일시</TableCell>
              <TableCell>참여자 수</TableCell>
              <TableCell>상태</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell>워크스페이스</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {meetingData.map((meeting) => (
              <TableRow key={meeting.id}>
                <TableCell>
                  <Link 
                    href="#" 
                    sx={{ 
                      color: '#0066FF', 
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    {meeting.title}
                  </Link>
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography sx={{ fontSize: '14px' }}>{meeting.date}</Typography>
                    <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>{meeting.time}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{meeting.participants}명</TableCell>
                <TableCell>
                  <Chip 
                    label={meeting.status}
                    color={meeting.status === '완료' ? 'success' : 'warning'}
                    size="small"
                  />
                </TableCell>
                <TableCell>{meeting.creator}</TableCell>
                <TableCell>{meeting.workspace}</TableCell>
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
            color: '#6B7280',
            '&:hover': { borderColor: '#D1D5DB' }
          }}
        >
          ‹
        </Button>
        <Button 
          variant="contained"
          size="small"
          sx={{ 
            minWidth: '32px', 
            height: '32px',
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
            minWidth: '32px', 
            height: '32px', 
            borderColor: '#E5E5E5',
            color: '#6B7280',
            '&:hover': { borderColor: '#D1D5DB' }
          }}
        >
          ›
        </Button>
      </Box>
    </Box>
  )
}

export default MeetingPage