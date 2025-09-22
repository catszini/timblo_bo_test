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

const noticeData = [
  {
    id: 1,
    title: '시스템 정기 점검 안내',
    content: '2024년 1월 20일 오전 2시부터 6시까지 정기 점검이 진행됩니다.',
    priority: '중요',
    views: 245,
    createdDate: '2024-01-15',
    author: '시스템관리자',
    status: '게시중'
  },
  {
    id: 2,
    title: '새로운 기능 업데이트 알림',
    content: 'AI 회의록 요약 기능이 새롭게 추가되었습니다.',
    priority: '일반',
    views: 156,
    createdDate: '2024-01-12',
    author: '개발팀',
    status: '게시중'
  },
  {
    id: 3,
    title: '개인정보 처리방침 변경 안내',
    content: '개인정보 처리방침이 2024년 1월 1일부터 변경됩니다.',
    priority: '중요',
    views: 89,
    createdDate: '2024-01-10',
    author: '법무팀',
    status: '게시종료'
  },
  {
    id: 4,
    title: '휴일 고객지원 일정 안내',
    content: '설날 연휴 기간 동안의 고객지원 일정을 안내드립니다.',
    priority: '일반',
    views: 67,
    createdDate: '2024-01-08',
    author: '고객지원팀',
    status: '게시중'
  }
]

function NoticePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [priorityFilter, setPriorityFilter] = useState('전체')

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        공지사항 관리
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
              총 {noticeData.length}개
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
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="중요">중요</MenuItem>
                <MenuItem value="일반">일반</MenuItem>
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
              variant="contained" 
              size="small"
              sx={{ 
                height: '36px',
                backgroundColor: '#0066FF',
                '&:hover': { backgroundColor: '#0052CC' }
              }}
            >
              새 공지사항
            </Button>
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
                  <MenuItem value="content">내용</MenuItem>
                  <MenuItem value="author">작성자</MenuItem>
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
              <TableCell>중요도</TableCell>
              <TableCell>조회수</TableCell>
              <TableCell>작성일</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell>상태</TableCell>
              <TableCell>관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {noticeData.map((notice) => (
              <TableRow key={notice.id}>
                <TableCell>
                  <Box>
                    <Link 
                      href="#" 
                      sx={{ 
                        color: '#0066FF', 
                        textDecoration: 'none',
                        fontWeight: 500,
                        '&:hover': { textDecoration: 'underline' }
                      }}
                    >
                      {notice.title}
                    </Link>
                    <Typography sx={{ fontSize: '12px', color: '#6B7280', mt: 0.5 }}>
                      {notice.content}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={notice.priority}
                    color={notice.priority === '중요' ? 'error' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>{notice.views}회</TableCell>
                <TableCell>{notice.createdDate}</TableCell>
                <TableCell>{notice.author}</TableCell>
                <TableCell>
                  <Chip 
                    label={notice.status}
                    color={notice.status === '게시중' ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button 
                      size="small" 
                      variant="outlined"
                      sx={{ 
                        minWidth: '60px',
                        height: '28px',
                        fontSize: '12px',
                        borderColor: '#E5E5E5',
                        color: '#4D5256'
                      }}
                    >
                      수정
                    </Button>
                    <Button 
                      size="small" 
                      variant="outlined"
                      sx={{ 
                        minWidth: '60px',
                        height: '28px',
                        fontSize: '12px',
                        borderColor: '#E5E5E5',
                        color: '#4D5256'
                      }}
                    >
                      삭제
                    </Button>
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

export default NoticePage
