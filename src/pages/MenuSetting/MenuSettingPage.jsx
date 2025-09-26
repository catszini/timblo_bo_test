import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Button,
  ButtonGroup,
  Box
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const menuData = [
  {
    id: 1,
    name: '기능 권한 관리',
    url: 'workspace_permission.html',
    isEnabled: true
  },
  {
    id: 2,
    name: '메뉴 관리',
    url: 'workspace_menu_setting.html',
    isEnabled: true
  },
  {
    id: 3,
    name: '메뉴 권한 관리',
    url: 'workspace_group_setting.html',
    isEnabled: true
  },
  {
    id: 4,
    name: '사용자 관리',
    url: 'user.html',
    isEnabled: true
  },
  {
    id: 5,
    name: '로고 이미지 관리',
    url: 'logo.html',
    isEnabled: true
  },
  {
    id: 6,
    name: '회의 템플릿 관리',
    url: 'meet_template.html',
    isEnabled: true
  },
  {
    id: 7,
    name: '프롬프트 관리',
    url: 'prompt.html',
    isEnabled: true
  },
  {
    id: 8,
    name: '동의서 관리',
    url: 'consent.html',
    isEnabled: true
  },
  {
    id: 9,
    name: '캘린더 관리',
    url: 'calendar.html',
    isEnabled: true
  },
  {
    id: 10,
    name: '사용자 접속 이력',
    url: 'login_history.html',
    isEnabled: true
  },
  {
    id: 11,
    name: '다운로드 이력',
    url: 'download_history.html',
    isEnabled: true
  },
  {
    id: 12,
    name: '사용자 동의 이력',
    url: 'user_consent_history.html',
    isEnabled: true
  },
  {
    id: 13,
    name: '설정변경 이력',
    url: 'setting_change_history.html',
    isEnabled: true
  },
  {
    id: 14,
    name: '회의록 관리',
    url: 'meeting.html',
    isEnabled: true
  },
  {
    id: 15,
    name: '사전 관리',
    url: 'dictionary.html',
    isEnabled: true
  },
  {
    id: 16,
    name: '공지사항 관리',
    url: 'notice.html',
    isEnabled: true
  },
  {
    id: 17,
    name: '사용량 통계',
    url: 'stats_usage.html',
    isEnabled: true
  },
  {
    id: 18,
    name: '사용자별 통계',
    url: 'stats_user.html',
    isEnabled: true
  }
]

const MenuSettingPage = () => {
  const [menus, setMenus] = useState(menuData)
  const [selectedWorkspace, setSelectedWorkspace] = useState('all')

  const handleMenuToggle = (id, newStatus) => {
    setMenus(menus.map(menu =>
      menu.id === id ? { ...menu, isEnabled: newStatus } : menu
    ))
  }

  const handleEdit = (id) => {
    console.log('Edit menu:', id)
  }

  const handleDelete = (id) => {
    if (window.confirm('이 메뉴를 삭제하시겠습니까?')) {
      setMenus(prev => prev.filter(menu => menu.id !== id))
    }
  }

  const handleReset = () => {
    if (window.confirm('메뉴 설정을 초기화하시겠습니까?')) {
      setMenus(menuData)
    }
  }

  const handleSave = () => {
    alert('메뉴 설정이 저장되었습니다.')
    console.log('Save menus:', menus)
  }

  const handleNewMenu = () => {
    console.log('Create new menu')
  }

  return (
    <Layout className="page-menu-setting">
      <div className="content menu-setting-page">
        <div className="content-header">
          <h1 className="breadcrumb">메뉴 관리</h1>
        </div>
        
        <div className="content-body">
          {/* 메뉴 관리 헤더 */}
          <div className="menu-title-header">
            <div className="menu-title-section">
              <h3 className="menu-subtitle">메뉴 관리</h3>
              <div className="workspace-selector">
                <div className="combo-select">
                  <FormControl size="small" className="workspace-select">
                    <Select
                      value={selectedWorkspace}
                      onChange={(e) => setSelectedWorkspace(e.target.value)}
                      variant="outlined"
                    >
                      <MenuItem value="all">전체 워크스페이스</MenuItem>
                      <MenuItem value="sk-telecom">SK Telecom</MenuItem>
                      <MenuItem value="sk-hynix">SK Hynix</MenuItem>
                      <MenuItem value="sk-on">SK On</MenuItem>
                      <MenuItem value="timbel-mk">Timbel_Mk</MenuItem>
                      <MenuItem value="timbel-sol">Timbel_sol</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="menu-action-section">
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                <ButtonGroup variant="outlined" size="medium">
                  <Button 
                    onClick={handleReset}
                    sx={{ 
                      color: 'text.secondary',
                      borderColor: 'grey.400',
                      '&:hover': { 
                        bgcolor: 'grey.100',
                        borderColor: 'grey.400'
                      }
                    }}
                  >
                    초기화
                  </Button>
                  <Button 
                    onClick={handleSave}
                    sx={{ 
                      color: 'success.main', 
                      borderColor: 'success.main',
                      '&:hover': { 
                        bgcolor: 'success.light',
                        color: 'white',
                        borderColor: 'success.main'
                      }
                    }}
                  >
                    저장
                  </Button>
                </ButtonGroup>
                <Button 
                  variant="outlined"
                  onClick={handleNewMenu}
                  sx={{ 
                    ml: 1, 
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderColor: 'primary.main',
                    '&:hover': { 
                      bgcolor: 'primary.dark',
                      borderColor: 'primary.dark'
                    }
                  }}
                >
                  + 새 메뉴
                </Button>
              </Box>
            </div>
          </div>

          {/* 메뉴 테이블 */}
          <div className="table-container">
            <table className="menu-table">
              <thead>
                <tr>
                  <th width="300">메뉴명</th>
                  <th width="100">사용여부</th>
                  <th width="350">URL</th>
                  <th width="140">수정/삭제</th>
                </tr>
              </thead>
              <tbody>
                {menus.map((menu) => (
                  <tr key={menu.id}>
                    <td>{menu.name}</td>
                    <td>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={menu.isEnabled}
                            onChange={(e) => handleMenuToggle(menu.id, e.target.checked)}
                            size="small"
                            color="primary"
                          />
                        }
                        label=""
                        className="switch-control"
                      />
                    </td>
                    <td>{menu.url}</td>
                    <td>
                      <ButtonGroup variant="outlined" size="small">
                        <Button 
                          onClick={() => handleEdit(menu.id)}
                          sx={{ 
                            color: 'primary.main', 
                            fontSize: '12px',
                            borderColor: 'primary.main',
                            '&:hover': { 
                              bgcolor: 'primary.light',
                              color: 'white',
                              borderColor: 'primary.main'
                            }
                          }}
                        >
                          수정
                        </Button>
                        <Button 
                          onClick={() => handleDelete(menu.id)}
                          sx={{ 
                            color: 'error.main', 
                            borderColor: 'error.main', 
                            fontSize: '12px',
                            '&:hover': { 
                              bgcolor: 'error.light',
                              color: 'white',
                              borderColor: 'error.main'
                            }
                          }}
                        >
                          삭제
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MenuSettingPage
