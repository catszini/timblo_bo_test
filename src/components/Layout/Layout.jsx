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
  ListItemIcon,
  Collapse,
  Typography,
  IconButton
} from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { 
  ExpandLess, 
  ExpandMore, 
  Logout,
  WorkspacesOutlined,
  PeopleOutlined,
  MenuOutlined,
  SecurityOutlined,
  BarChartOutlined,
  AssessmentOutlined,
  SettingsOutlined,
  PersonOutlined,
  ImageOutlined,
  DescriptionOutlined,
  SmartToyOutlined,
  ArticleOutlined,
  CalendarTodayOutlined,
  HistoryOutlined,
  DownloadOutlined,
  PolicyOutlined,
  FactCheckOutlined,
  RecordVoiceOverOutlined,
  BookOutlined,
  CampaignOutlined,
  TrendingUpOutlined,
  PersonSearchOutlined
} from '@mui/icons-material'

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
            borderRadius: '0px !important',
            boxShadow: 'none !important',
            transform: 'none !important',
            transition: 'none !important',
            '&:hover': {
              boxShadow: 'none !important',
              transform: 'none !important',
            },
            '&::-webkit-scrollbar': {
              display: 'none'},
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'}}}
      >
        {/* 로고 섹션 */}
        <Box sx={{ 
          p: '20px 20px 24px 20px',
          borderBottom: '1px solid #E5E5E5',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          boxShadow: 'none !important',
          transform: 'none !important',
          transition: 'none !important',
          '&:hover': {
            boxShadow: 'none !important',
            transform: 'none !important',
          }
        }}>
          <Box sx={{
            width: 40,
            height: 40,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 600}}>
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
              height: 32
            }}
          >
            <Logout sx={{ width: 20, height: 20, color: '#4D5256' }} />
          </IconButton>
        </Box>


        <Box sx={{ 
          px: 2, 
          pt: 3,
          boxShadow: 'none !important',
          transform: 'none !important',
          transition: 'none !important',
          '&:hover': {
            boxShadow: 'none !important',
            transform: 'none !important',
          }
        }}>
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
                  <ListItem key={item.text} disablePadding sx={{ borderRadius: '0px !important' }}>
                    <ListItemButton
                      selected={location.pathname === item.path}
                      onClick={() => handleMenuClick(item.path)}
                      sx={{
                        borderRadius: '0px !important',
                        margin: 0,
                        padding: '8px 12px',
                        fontSize: '14px',
                        color: '#333',
                        transition: 'background-color 0.2s',
                        '&.Mui-selected': {
                          color: '#6366F1',
                          fontWeight: 600,
                          borderRadius: '0px !important'}}}
                    >
                      <ListItemText 
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: '14px',
                          fontWeight: location.pathname === item.path ? 600 : 400,
                          color: location.pathname === item.path ? '#6366F1' : '#333',
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
          width: `calc(100vw - ${drawerWidth}px)`, // 정확한 너비 계산
          padding: { xs: '16px', sm: '20px 24px' }, // 패딩 감소,
          borderLeft: '1px solid #e1e1e1',
          minHeight: '100vh',
          overflowX: 'hidden', // 가로 스크롤만 막기
          overflowY: 'auto',   // 세로 스크롤 허용
          minWidth: 0, // flexbox에서 최소 너비 제한 해제
          maxWidth: `calc(100vw - ${drawerWidth}px)`, // 최대 너비도 제한
          backgroundColor: '#ffffff', // 메인 영역 배경색 하얀색
          backgroundImage: 'none', // 그라데이션 제거
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout
