import React from 'react'
import { 
  Box, 
  Drawer, 
  AppBar, 
  Toolbar, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Collapse,
  Typography,
  IconButton
} from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { ExpandLess, ExpandMore, Logout } from '@mui/icons-material'

const drawerWidth = 240

const menuSections = [
  {
    title: '시스템관리',
    items: [
      { text: '워크스페이스 관리', path: '/workspace' },
      { text: '사용자 관리', path: '/system-user' },
      { text: '메뉴 생성 관리', path: '/menu-setting' },
      { text: '메뉴 권한 관리', path: '/group-setting' },
      { text: '사용량 통계', path: '/system-stats-usage' },
      { text: '사용자별 통계', path: '/system-stats-user' }
    ]
  },
  {
    title: '워크스페이스',
    items: [
      { text: '기능 권한 관리', path: '/workspace-permission' },
      { text: '메뉴 권한 관리', path: '/workspace-group-setting' },
      { text: '사용자 관리', path: '/user' },
      { text: '로고 이미지 관리', path: '/logo' },
      { text: '회의 템플릿 관리', path: '/meet-template' },
      { text: '프롬프트 관리', path: '/prompt' },
      { text: '동의서 관리', path: '/consent' },
      { text: '캘린더 관리', path: '/calendar' },
      { text: '사용자 접속 이력', path: '/login-history' },
      { text: '다운로드 이력', path: '/download-history' },
      { text: '사용자 동의 이력', path: '/user-consent-history' },
      { text: '설정변경 이력', path: '/setting-change-history' },
      { text: '회의록 관리', path: '/meeting' },
      { text: '사전 관리', path: '/dictionary' },
      { text: '공지사항 관리', path: '/notice' },
      { text: '사용량 통계', path: '/stats-usage' },
      { text: '사용자별 통계', path: '/stats-user' }
    ]
  }
]

function Layout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleMenuClick = (path) => {
    if (path) {
      navigate(path)
    }
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* 사이드바 */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid #E5E5E5',
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          },
        }}
      >
        {/* 로고 섹션 */}
        <Box sx={{ 
          p: '20px 20px 24px 20px',
          borderBottom: '1px solid #E5E5E5',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
          <Box sx={{
            width: 40,
            height: 40,
            backgroundColor: '#4B88F0',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 600,
          }}>
            S
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ 
              fontSize: '16px', 
              fontWeight: 600, 
              color: '#292A2B',
              lineHeight: 1.2
            }}>
              SK Telecom
            </Typography>
            <Typography sx={{ 
              fontSize: '14px', 
              color: '#666',
              lineHeight: 1.2
            }}>
              sktelecom.com
            </Typography>
          </Box>
          <IconButton 
            size="small"
            sx={{
              width: 32,
              height: 32,
              '&:hover': {
                backgroundColor: '#F8F9FA',
              }
            }}
          >
            <Logout sx={{ width: 20, height: 20, color: '#4D5256' }} />
          </IconButton>
        </Box>


        <Box sx={{ px: 2, pt: 3 }}>
          {menuSections.map((section, sectionIndex) => (
            <Box key={section.title} sx={{ mb: sectionIndex < menuSections.length - 1 ? 2 : 0 }}>
              <Typography sx={{ 
                fontSize: '16px', 
                fontWeight: 600, 
                color: '#292A2B', 
                mb: 1,
                mt: sectionIndex > 0 ? 3 : 0
              }}>
                {section.title}
              </Typography>
              <List dense sx={{ py: 0 }}>
                {section.items.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton
                      selected={location.pathname === item.path}
                      onClick={() => handleMenuClick(item.path)}
                      sx={{
                        borderRadius: 0,
                        margin: 0,
                        padding: '8px 12px',
                        fontSize: '14px',
                        color: '#333',
                        transition: 'background-color 0.2s',
                        '&:hover': {
                          backgroundColor: '#f5f6f8',
                        },
                        '&.Mui-selected': {
                          backgroundColor: '#f0f7ff',
                          color: '#0066ff',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: '#f0f7ff',
                          },
                        },
                      }}
                    >
                      <ListItemText 
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: '14px',
                          fontWeight: location.pathname === item.path ? 600 : 400,
                          color: location.pathname === item.path ? '#0066ff' : '#333',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Drawer>

      {/* 메인 콘텐츠 */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: { xs: '16px', sm: '24px 32px' },
          backgroundColor: '#ffffff',
          borderLeft: '1px solid #e1e1e1',
          minHeight: '100vh',
          overflowX: 'hidden', // 가로 스크롤만 막기
          overflowY: 'auto',   // 세로 스크롤 허용
          minWidth: 0, // flexbox에서 최소 너비 제한 해제
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout
