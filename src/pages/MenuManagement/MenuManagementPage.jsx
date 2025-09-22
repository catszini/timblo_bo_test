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
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Switch
} from '@mui/material'

const menuData = [
  { id: 1, name: '기능 권한 관리', isActive: true, url: 'workspace_permission.html' },
  { id: 2, name: '메뉴리스트 관리', isActive: true, url: 'workspace_group_setting.html' },
  { id: 3, name: '사용자 관리', isActive: true, url: 'user.html' },
  { id: 4, name: '로고 이미지 관리', isActive: true, url: 'logo.html' },
  { id: 5, name: '회의 템플릿 관리', isActive: true, url: 'meet_template.html' },
  { id: 6, name: '프롬프트 관리', isActive: false, url: 'prompt.html' },
  { id: 7, name: '동의서 관리', isActive: true, url: 'consent.html' },
  { id: 8, name: '캘린더 관리', isActive: true, url: 'calendar.html' },
  { id: 9, name: '사용자 접속 이력', isActive: true, url: 'login_history.html' },
  { id: 10, name: '다운로드 이력', isActive: true, url: 'download_history.html' },
  { id: 11, name: '사용자 동의 이력', isActive: true, url: 'user_consent_history.html' },
  { id: 12, name: '설정변경 이력', isActive: true, url: 'setting_change_history.html' },
  { id: 13, name: '회의록 관리', isActive: true, url: 'meeting.html' },
  { id: 14, name: '사전 관리', isActive: true, url: 'dictionary.html' },
  { id: 15, name: '공지사항 관리', isActive: true, url: 'notice.html' },
  { id: 16, name: '사용량 통계', isActive: true, url: 'stats_usage.html' },
  { id: 17, name: '사용자별 통계', isActive: true, url: 'stats_user.html' }
]

function MenuManagementPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [statusFilter, setStatusFilter] = useState('전체')

  const handleToggleStatus = (id) => {
    // 사용여부 토글 로직
    console.log('Toggle status for menu:', id)
  }

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        메뉴 생성 관리
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
              fontSize: '14px', 
              fontWeight: 500, 
              color: '#292A2B',
              minWidth: '40px'
            }}>
              상태
            </Typography>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                sx={{ 
                  height: '36px',
                  fontSize: '14px',
                  '& .MuiSelect-select': {
                    padding: '8px 14px'
                  }
                }}
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="사용">사용</MenuItem>
                <MenuItem value="비사용">비사용</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
              size="small"
              placeholder="메뉴명 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ 
                width: '300px',
                '& .MuiOutlinedInput-root': {
                  height: '36px',
                  fontSize: '14px'
                }
              }}
            />
            <Button 
              variant="contained" 
              sx={{ 
                height: '36px',
                fontSize: '14px',
                minWidth: '80px'
              }}
            >
              추가
            </Button>
          </Box>
        </Box>
      </Box>

      {/* 메뉴 테이블 */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width="300">메뉴명</TableCell>
              <TableCell width="100">사용여부</TableCell>
              <TableCell width="350">URL</TableCell>
              <TableCell width="140">수정/삭제</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {menuData.map((menu) => (
              <TableRow key={menu.id}>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {menu.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Switch 
                    checked={menu.isActive}
                    onChange={() => handleToggleStatus(menu.id)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontFamily: 'monospace', color: '#6B7280' }}>
                    {menu.url}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                    <Button 
                      size="small" 
                      variant="outlined" 
                      sx={{ 
                        minWidth: '50px', 
                        fontSize: '12px',
                        height: '28px'
                      }}
                    >
                      수정
                    </Button>
                    <Button 
                      size="small" 
                      variant="outlined" 
                      color="error" 
                      sx={{ 
                        minWidth: '50px', 
                        fontSize: '12px',
                        height: '28px'
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
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mt: 2,
        pt: 2,
        borderTop: '1px solid #E5E5E5'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ fontSize: '14px', color: '#6B7280' }}>
            페이지당 항목 수:
          </Typography>
          <FormControl size="small">
            <Select
              value={pageSize}
              onChange={(e) => setPageSize(e.target.value)}
              sx={{ 
                fontSize: '14px',
                minWidth: '70px',
                height: '32px'
              }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>
          <Typography sx={{ fontSize: '14px', color: '#6B7280', ml: 2 }}>
            총 {menuData.length}개 항목 중 1-{Math.min(pageSize, menuData.length)} 표시
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small"
            disabled
            sx={{ 
              minWidth: '36px',
              height: '36px',
              fontSize: '14px',
              color: '#6B7280',
              borderColor: '#D1D5DB',
              '&:hover': { borderColor: '#D1D5DB' }
            }}
          >
            ‹
          </Button>
          <Button 
            variant="contained" 
            size="small"
            sx={{ 
              minWidth: '36px',
              height: '36px',
              fontSize: '14px',
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
              minWidth: '36px',
              height: '36px',
              fontSize: '14px',
              color: '#6B7280',
              borderColor: '#D1D5DB',
              '&:hover': { borderColor: '#D1D5DB' }
            }}
          >
            ›
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default MenuManagementPage