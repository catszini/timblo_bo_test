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
  Switch,
  Pagination
} from '@mui/material'

const menuData = [
  { id: 1, name: '기능 권한 관리', isActive: true, url: 'workspace_permission.html' },
  { id: 2, name: '메뉴 권한 관리', isActive: true, url: 'workspace_group_setting.html' },
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
  const [menus, setMenus] = useState(menuData)

  const handleToggleStatus = (id) => {
    setMenus(prevMenus => 
      prevMenus.map(menu => 
        menu.id === id 
          ? { ...menu, isActive: !menu.isActive }
          : menu
      )
    )
  }

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        메뉴 생성 관리
      </Typography>

      {/* 메뉴 관리 헤더 */}
      <Box sx={{ mb: 3 }}>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          width: '100%'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Typography sx={{ 
              fontSize: '18px', 
              fontWeight: 600, 
              color: '#111827'
            }}>
              메뉴 관리
            </Typography>
            <Box className="combo-select">
              <FormControl size="small" sx={{ minWidth: 180 }}>
                <Select
                  value="전체"
                  sx={{ 
                    height: '36px',
                    fontSize: '14px',
                    appearance: 'none',
                    '& .MuiSelect-select': {
                      padding: '8px 32px 8px 12px'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#E5E5E5'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#0066FF'
                    }
                  }}
                >
                  <MenuItem value="전체">전체 워크스페이스</MenuItem>
                  <MenuItem value="sk-telecom">SK Telecom</MenuItem>
                  <MenuItem value="sk-hynix">SK Hynix</MenuItem>
                  <MenuItem value="sk-on">SK On</MenuItem>
                  <MenuItem value="timbel-mk">Timbel_Mk</MenuItem>
                  <MenuItem value="timbel-sol">Timbel_sol</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button 
              variant="outlined"
              size="small"
              sx={{ 
                height: '36px',
                fontSize: '14px',
                color: '#6B7280',
                borderColor: '#D1D5DB',
                '&:hover': {
                  backgroundColor: '#F9FAFB',
                  borderColor: '#9CA3AF'
                }
              }}
            >
              초기화
            </Button>
            <Button 
              variant="outlined"
              size="small"
              sx={{ 
                height: '36px',
                fontSize: '14px',
                color: '#10B981',
                borderColor: '#10B981',
                '&:hover': {
                  backgroundColor: '#f0fdf4'
                }
              }}
            >
              저장
            </Button>
            <Button 
              variant="outlined"
              size="small"
              sx={{ 
                height: '36px',
                fontSize: '14px',
                color: '#3B82F6',
                borderColor: '#3B82F6',
                '&:hover': {
                  backgroundColor: '#f0f7ff'
                }
              }}
            >
              + 새 메뉴
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
            {menus.map((menu) => (
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
                  <Typography sx={{ fontSize: '14px', color: '#6B7280' }}>
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
            총 {menus.length}개 항목 중 1-{Math.min(pageSize, menus.length)} 표시
          </Typography>
        </Box>
        
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

export default MenuManagementPage