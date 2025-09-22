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

const systemUserData = [
  {
    id: 1,
    name: '김시스템',
    email: 'kim.system@sktelecom.com',
    workspace: 'SK Telecom',
    workspaceColor: '#14B8A6',
    permission: '시스템관리자',
    status: 'online',
    lastLogin: '2024-01-15 14:30'
  },
  {
    id: 2,
    name: '이관리',
    email: 'lee.admin@skhynix.com',
    workspace: 'SK Hynix',
    workspaceColor: '#6366F1',
    permission: '관리자',
    status: 'offline',
    lastLogin: '2024-01-14 09:15'
  },
  {
    id: 3,
    name: '박운영',
    email: 'park.ops@skens.com',
    workspace: 'SK E&S',
    workspaceColor: '#F43F5E',
    permission: '운영자',
    status: 'online',
    lastLogin: '2024-01-15 16:45'
  },
  {
    id: 4,
    name: '최담당',
    email: 'choi.manager@skcc.com',
    workspace: 'SK C&C',
    workspaceColor: '#F59E0B',
    permission: '담당자',
    status: 'offline',
    lastLogin: '2024-01-13 11:20'
  },
  {
    id: 5,
    name: '정개발',
    email: 'jung.dev@skinnovation.com',
    workspace: 'SK Innovation',
    workspaceColor: '#10B981',
    permission: '개발자',
    status: 'online',
    lastLogin: '2024-01-15 13:10'
  }
]

function SystemUserPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [selectedWorkspace, setSelectedWorkspace] = useState('전체')

  const workspaceOptions = ['전체', 'SK Telecom', 'SK Hynix', 'SK E&S', 'SK C&C', 'SK Innovation', 'SK Networks', 'SK Biopharm', 'SK Materials', 'SK Shieldus']

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        시스템 사용자
      </Typography>

      {/* 워크스페이스 필터 */}
      <Box sx={{ mb: 2 }}>
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <Select
            value={selectedWorkspace}
            onChange={(e) => setSelectedWorkspace(e.target.value)}
            sx={{ height: '36px' }}
          >
            {workspaceOptions.map((workspace) => (
              <MenuItem key={workspace} value={workspace}>
                {workspace}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

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
              총 {systemUserData.length}개
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
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' }}}
                >
                  <MenuItem value="name">이름</MenuItem>
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
                  width: { xs: '100%', sm: 200 },
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
      <TableContainer component={Paper} sx={{ width: '100%' }}>
        <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: { xs: '25%', sm: '20%' } }}>이름</TableCell>
              <TableCell sx={{ display: { xs: 'none', md: 'table-cell' }, width: '25%' }}>이메일</TableCell>
              <TableCell sx={{ width: { xs: '30%', sm: '20%' } }}>워크스페이스</TableCell>
              <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' }, width: '15%' }}>권한</TableCell>
              <TableCell sx={{ display: { xs: 'none', lg: 'table-cell' }, width: '10%' }}>접속상태</TableCell>
              <TableCell sx={{ width: { xs: '25%', sm: '15%' } }}>최종 로그인</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {systemUserData.map((user) => (
              <TableRow key={user.id}>
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
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
                    <Avatar 
                      sx={{ 
                        width: { xs: 18, sm: 24 }, 
                        height: { xs: 18, sm: 24 }, 
                        backgroundColor: user.workspaceColor,
                        fontSize: { xs: '10px', sm: '12px' },
                        fontWeight: 600
                      }}
                    >
                      S
                    </Avatar>
                    <Typography sx={{ 
                      fontSize: { xs: '12px', sm: '14px' }, 
                      fontWeight: 500,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {user.workspace}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
                  <FormControl size="small" sx={{ minWidth: { xs: 100, sm: 120 }, width: '100%' }}>
                    <Select value={user.permission}>
                      <MenuItem value="시스템관리자">시스템관리자</MenuItem>
                      <MenuItem value="관리자">관리자</MenuItem>
                      <MenuItem value="운영자">운영자</MenuItem>
                      <MenuItem value="담당자">담당자</MenuItem>
                      <MenuItem value="개발자">개발자</MenuItem>
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

export default SystemUserPage
