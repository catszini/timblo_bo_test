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
  IconButton,
  Pagination
} from '@mui/material'
import { Download, Description } from '@mui/icons-material'

const downloadHistoryData = [
  {
    id: 1,
    fileName: '2024년 1분기 회의록 요약.pdf',
    fileSize: '2.4 MB',
    fileType: 'PDF',
    userName: '김다운',
    userEmail: 'kim.download@sktelecom.com',
    workspace: 'SK Telecom',
    downloadTime: '2024-01-15 14:32:15',
    ipAddress: '192.168.1.101',
    device: 'Chrome (Windows)',
    status: '완료'
  },
  {
    id: 2,
    fileName: '프로젝트 킥오프 회의 녹음.mp3',
    fileSize: '15.7 MB',
    fileType: 'MP3',
    userName: '이음성',
    userEmail: 'lee.audio@skhynix.com',
    workspace: 'SK Hynix',
    downloadTime: '2024-01-15 11:20:44',
    ipAddress: '192.168.1.205',
    device: 'Safari (macOS)',
    status: '완료'
  },
  {
    id: 3,
    fileName: '월례 회의 프레젠테이션.pptx',
    fileSize: '8.9 MB',
    fileType: 'PPT',
    userName: '박발표',
    userEmail: 'park.presentation@skcc.com',
    workspace: 'SK C&C',
    downloadTime: '2024-01-15 09:15:22',
    ipAddress: '192.168.1.78',
    device: 'Edge (Windows)',
    status: '진행중'
  },
  {
    id: 4,
    fileName: '개발팀 스프린트 회의록.docx',
    fileSize: '1.2 MB',
    fileType: 'DOC',
    userName: '최문서',
    userEmail: 'choi.document@skinnovation.com',
    workspace: 'SK Innovation',
    downloadTime: '2024-01-14 16:45:33',
    ipAddress: '192.168.1.156',
    device: 'Firefox (Linux)',
    status: '실패'
  }
]

const getFileTypeColor = (type) => {
  switch (type) {
    case 'PDF': return '#EF4444'
    case 'MP3': return '#10B981'
    case 'PPT': return '#F59E0B'
    case 'DOC': return '#3B82F6'
    default: return '#6B7280'
  }
}

function DownloadHistoryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [statusFilter, setStatusFilter] = useState('전체')

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        다운로드 이력
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
              총 {downloadHistoryData.length}개
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
                <MenuItem value="완료">완료</MenuItem>
                <MenuItem value="진행중">진행중</MenuItem>
                <MenuItem value="실패">실패</MenuItem>
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
                  value="fileName"
                  sx={{ 
                    height: '36px',
                    borderRadius: 0,
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' }}}
                >
                  <MenuItem value="fileName">파일명</MenuItem>
                  <MenuItem value="userName">사용자명</MenuItem>
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
              <TableCell>파일명</TableCell>
              <TableCell>파일 정보</TableCell>
              <TableCell>사용자</TableCell>
              <TableCell>워크스페이스</TableCell>
              <TableCell>다운로드 시간</TableCell>
              <TableCell>IP 주소</TableCell>
              <TableCell>디바이스</TableCell>
              <TableCell>상태</TableCell>
              <TableCell>작업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {downloadHistoryData.map((history) => (
              <TableRow key={history.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Description sx={{ 
                      color: getFileTypeColor(history.fileType),
                      fontSize: '20px'
                    }} />
                    <Box>
                      <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>
                        {history.fileName}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Chip 
                      label={history.fileType}
                      size="small"
                      sx={{ 
                        backgroundColor: getFileTypeColor(history.fileType), 
                        color: 'white',
                        mb: 0.5
                      }}
                    />
                    <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
                      {history.fileSize}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>
                      {history.userName}
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
                      {history.userEmail}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {history.workspace}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {history.downloadTime}
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
                      history.status === '완료' ? 'success' : 
                      history.status === '진행중' ? 'warning' : 'error'
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  {history.status === '완료' && (
                    <IconButton 
                      size="small"
                      sx={{ 
                        color: '#3B82F6',
                        '&:hover': {
                          backgroundColor: 'rgba(59, 130, 246, 0.1)'
                        }
                      }}
                      title="다시 다운로드"
                    >
                      <Download sx={{ fontSize: '18px' }} />
                    </IconButton>
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

export default DownloadHistoryPage
