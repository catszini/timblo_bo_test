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
  Link,
  Pagination
} from '@mui/material'

const consentData = [
  {
    id: 1,
    title: '개인정보 수집 및 이용 동의서',
    version: 'v2.1',
    type: '필수',
    agreeCount: 1245,
    disagreeCount: 12,
    agreeRate: 99.04,
    createdDate: '2024-01-15',
    author: '법무팀',
    status: '사용중'
  },
  {
    id: 2,
    title: '마케팅 정보 수신 동의서',
    version: 'v1.3',
    type: '선택',
    agreeCount: 867,
    disagreeCount: 390,
    agreeRate: 68.95,
    createdDate: '2024-01-12',
    author: '마케팅팀',
    status: '사용중'
  },
  {
    id: 3,
    title: '위치 정보 활용 동의서',
    version: 'v1.0',
    type: '선택',
    agreeCount: 456,
    disagreeCount: 801,
    agreeRate: 36.28,
    createdDate: '2024-01-10',
    author: '개발팀',
    status: '중단'
  },
  {
    id: 4,
    title: '제3자 정보 제공 동의서',
    version: 'v2.0',
    type: '필수',
    agreeCount: 1189,
    disagreeCount: 68,
    agreeRate: 94.59,
    createdDate: '2024-01-08',
    author: '법무팀',
    status: '사용중'
  }
]

function ConsentPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [typeFilter, setTypeFilter] = useState('전체')

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        동의서 관리
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
              총 {consentData.length}개
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
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="필수">필수</MenuItem>
                <MenuItem value="선택">선택</MenuItem>
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
              새 동의서
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
                  value="title"
                  sx={{ 
                    height: '36px',
                    borderRadius: 0,
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' }}}
                >
                  <MenuItem value="title">제목</MenuItem>
                  <MenuItem value="author">작성자</MenuItem>
                  <MenuItem value="version">버전</MenuItem>
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
              <TableCell>제목</TableCell>
              <TableCell>버전</TableCell>
              <TableCell>유형</TableCell>
              <TableCell>동의율</TableCell>
              <TableCell>동의/거부</TableCell>
              <TableCell>작성일</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell>상태</TableCell>
              <TableCell>관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {consentData.map((consent) => (
              <TableRow key={consent.id}>
                <TableCell>
                  <Link 
                    href="#" 
                    sx={{ 
                      color: '#0066FF', 
                      textDecoration: 'none',
                      fontWeight: 500
                    }}
                  >
                    {consent.title}
                  </Link>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={consent.version}
                    size="small"
                    sx={{ color: '#0066FF' }}
                  />
                </TableCell>
                <TableCell>
                  <Chip 
                    label={consent.type}
                    color={consent.type === '필수' ? 'error' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ fontWeight: 600, color: '#292A2B' }}>
                      {consent.agreeRate}%
                    </Typography>
                    <Box
                      sx={{
                        width: 60,
                        height: 6,
                        borderRadius: 3,
                        overflow: 'hidden'}}
                    >
                      <Box
                        sx={{
                          width: `${consent.agreeRate}%`,
                          height: '100%',
                          backgroundColor: consent.agreeRate > 80 ? '#10B981' : consent.agreeRate > 50 ? '#F59E0B' : '#EF4444'}}
                      />
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {consent.agreeCount.toLocaleString()} / {consent.disagreeCount.toLocaleString()}
                  </Typography>
                </TableCell>
                <TableCell>{consent.createdDate}</TableCell>
                <TableCell>{consent.author}</TableCell>
                <TableCell>
                  <Chip 
                    label={consent.status}
                    color={consent.status === '사용중' ? 'success' : 'default'}
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
                      중단
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
    </Box>
  )
}

export default ConsentPage
