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

const dictionaryData = [
  {
    id: 1,
    term: 'ROI',
    fullTerm: 'Return on Investment',
    definition: '투자수익률, 투자에 대한 수익의 비율을 나타내는 지표',
    category: '경영',
    usage: 89,
    lastModified: '2024-01-15',
    modifier: '김용어',
    status: '승인'
  },
  {
    id: 2,
    term: 'KPI',
    fullTerm: 'Key Performance Indicator',
    definition: '핵심성과지표, 조직의 목표 달성도를 측정하는 지표',
    category: '경영',
    usage: 124,
    lastModified: '2024-01-12',
    modifier: '이지표',
    status: '승인'
  },
  {
    id: 3,
    term: 'MVP',
    fullTerm: 'Minimum Viable Product',
    definition: '최소기능제품, 고객의 피드백을 받기 위한 최소한의 기능을 가진 제품',
    category: '개발',
    usage: 67,
    lastModified: '2024-01-10',
    modifier: '박개발',
    status: '대기'
  },
  {
    id: 4,
    term: 'API',
    fullTerm: 'Application Programming Interface',
    definition: '응용프로그램 프로그래밍 인터페이스, 소프트웨어 간 상호작용을 위한 인터페이스',
    category: '기술',
    usage: 156,
    lastModified: '2024-01-08',
    modifier: '최기술',
    status: '승인'
  }
]

function DictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [categoryFilter, setCategoryFilter] = useState('전체')

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        사전 관리
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
              총 {dictionaryData.length}개
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
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="경영">경영</MenuItem>
                <MenuItem value="개발">개발</MenuItem>
                <MenuItem value="기술">기술</MenuItem>
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
              새 용어
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
                  value="term"
                  sx={{ 
                    height: '36px',
                    borderRadius: 0,
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' }}}
                >
                  <MenuItem value="term">용어</MenuItem>
                  <MenuItem value="definition">정의</MenuItem>
                  <MenuItem value="modifier">수정자</MenuItem>
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
              <TableCell>용어</TableCell>
              <TableCell>전체명</TableCell>
              <TableCell>정의</TableCell>
              <TableCell>카테고리</TableCell>
              <TableCell>사용횟수</TableCell>
              <TableCell>최종 수정일</TableCell>
              <TableCell>수정자</TableCell>
              <TableCell>상태</TableCell>
              <TableCell>관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dictionaryData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Typography sx={{ fontWeight: 600, color: '#292A2B' }}>
                    {item.term}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', color: '#6B7280' }}>
                    {item.fullTerm}
                  </Typography>
                </TableCell>
                <TableCell sx={{ maxWidth: 300 }}>
                  <Typography sx={{ fontSize: '14px', color: '#292A2B' }}>
                    {item.definition}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={item.category}
                    size="small"
                    sx={{ color: '#0066FF' }}
                  />
                </TableCell>
                <TableCell>{item.usage}회</TableCell>
                <TableCell>{item.lastModified}</TableCell>
                <TableCell>{item.modifier}</TableCell>
                <TableCell>
                  <Chip 
                    label={item.status}
                    color={item.status === '승인' ? 'success' : 'warning'}
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

export default DictionaryPage
