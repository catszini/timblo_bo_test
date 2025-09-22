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

const userConsentHistoryData = [
  {
    id: 1,
    userName: '서원준',
    email: 'wonjun.seo@sktelecom.com',
    workspace: 'SK Telecom',
    workspaceColor: '#14B8A6',
    consentTitle: '개인정보 수집 및 이용 동의서',
    consentVersion: 'v2.1',
    consentType: '필수',
    action: '동의',
    actionTime: '2024-01-15 14:32:15',
    ipAddress: '192.168.1.101',
    device: 'Chrome (Windows)'
  },
  {
    id: 2,
    userName: '한소율',
    email: 'soyul.han@skhynix.com',
    workspace: 'SK Hynix',
    workspaceColor: '#6366F1',
    consentTitle: '마케팅 정보 수신 동의서',
    consentVersion: 'v1.3',
    consentType: '선택',
    action: '거부',
    actionTime: '2024-01-15 11:20:44',
    ipAddress: '192.168.1.205',
    device: 'Safari (macOS)'
  },
  {
    id: 3,
    userName: '오준혁',
    email: 'junhyuk.oh@skcc.com',
    workspace: 'SK C&C',
    workspaceColor: '#F43F5E',
    consentTitle: '위치 정보 활용 동의서',
    consentVersion: 'v1.0',
    consentType: '선택',
    action: '동의철회',
    actionTime: '2024-01-15 09:15:22',
    ipAddress: '192.168.1.78',
    device: 'Edge (Windows)'
  },
  {
    id: 4,
    userName: '남예은',
    email: 'yeeun.nam@skinnovation.com',
    workspace: 'SK Innovation',
    workspaceColor: '#10B981',
    consentTitle: '제3자 정보 제공 동의서',
    consentVersion: 'v2.0',
    consentType: '필수',
    action: '재동의',
    actionTime: '2024-01-14 16:45:33',
    ipAddress: '192.168.1.156',
    device: 'Firefox (Linux)'
  }
]

function UserConsentHistoryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [actionFilter, setActionFilter] = useState('전체')

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        사용자 동의 이력
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
              총 {userConsentHistoryData.length}개
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
                value={actionFilter}
                onChange={(e) => setActionFilter(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="동의">동의</MenuItem>
                <MenuItem value="거부">거부</MenuItem>
                <MenuItem value="동의철회">동의철회</MenuItem>
                <MenuItem value="재동의">재동의</MenuItem>
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
                  <MenuItem value="consentTitle">동의서명</MenuItem>
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
              <TableCell>동의서</TableCell>
              <TableCell>버전</TableCell>
              <TableCell>유형</TableCell>
              <TableCell>행동</TableCell>
              <TableCell>처리 시간</TableCell>
              <TableCell>IP 주소</TableCell>
              <TableCell>디바이스</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userConsentHistoryData.map((history) => (
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
                  <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                    {history.consentTitle}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={history.consentVersion}
                    size="small"
                    sx={{ color: '#0066FF' }}
                  />
                </TableCell>
                <TableCell>
                  <Chip 
                    label={history.consentType}
                    color={history.consentType === '필수' ? 'error' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip 
                    label={history.action}
                    color={
                      history.action === '동의' || history.action === '재동의' ? 'success' : 
                      history.action === '거부' || history.action === '동의철회' ? 'error' : 'default'
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {history.actionTime}
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

export default UserConsentHistoryPage
