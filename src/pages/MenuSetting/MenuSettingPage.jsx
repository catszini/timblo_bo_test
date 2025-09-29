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
  const [activeTab, setActiveTab] = useState('system-menu') // 시스템 메뉴가 기본 활성

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
          <h1 className="breadcrumb">전체 메뉴 관리</h1>
        </div>
        
        <div className="content-body">
        {/* 탭 네비게이션 */}
        <div className="menu-setting-tab-container">
          <ul className="menu-setting-tab-list">
              <li>
                <button 
                  className={`menu-setting-tab-button ${activeTab === 'system-menu' ? 'active' : ''}`}
                  onClick={() => setActiveTab('system-menu')}
                >
                  시스템 메뉴 관리
                </button>
              </li>
              <li>
                <button 
                  className={`menu-setting-tab-button ${activeTab === 'workspace-menu' ? 'active' : ''}`}
                  onClick={() => setActiveTab('workspace-menu')}
                >
                  워크스페이스 메뉴 관리
                </button>
              </li>
            </ul>
          </div>

          {/* 시스템 메뉴 관리 탭 */}
          {activeTab === 'system-menu' && (
            <div id="system-menu" className="menu-setting-tab-content">
          <div className="menu-title-header">
            <div className="menu-title-section">
                  <h3 className="menu-subtitle">시스템 메뉴 관리</h3>
                  <span className="menu-count">총 6개 메뉴</span>
                </div>
                <div className="menu-action-buttons">
                  <button className="delete-btn">삭제</button>
                  <button className="edit-btn">수정</button>
                  <button className="new-button">생성</button>
                </div>
          </div>

              <div className="table-container">
                <table className="menu-table">
                  <thead>
                    <tr>
                      <th><input type="checkbox" className="select-all" /></th>
                      <th>메뉴명</th>
                      <th>URL</th>
                      <th>순서</th>
                      <th>사용여부</th>
                      <th>관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>워크스페이스 관리</td>
                      <td>workspace.html</td>
                      <td>1</td>
                      <td>
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider"></span>
                        </label>
                      </td>
                      <td>
                        <button className="edit-btn small">수정</button>
                      </td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>전체 메뉴 관리</td>
                      <td>menu_setting.html</td>
                      <td>2</td>
                      <td>
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider"></span>
                        </label>
                      </td>
                      <td>
                        <button className="edit-btn small">수정</button>
                      </td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>사용자 관리</td>
                      <td>system_user.html</td>
                      <td>3</td>
                      <td>
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider"></span>
                        </label>
                      </td>
                      <td>
                        <button className="edit-btn small">수정</button>
                      </td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>메뉴 권한 관리</td>
                      <td>group_setting.html</td>
                      <td>4</td>
                      <td>
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider"></span>
                        </label>
                      </td>
                      <td>
                        <button className="edit-btn small">수정</button>
                      </td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>전체 시스템 사용 통계</td>
                      <td>system_stats_usage.html</td>
                      <td>5</td>
                      <td>
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider"></span>
                        </label>
                      </td>
                      <td>
                        <button className="edit-btn small">수정</button>
                      </td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>사용자별 사용 통계</td>
                      <td>system_stats_user.html</td>
                      <td>6</td>
                      <td>
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider"></span>
                        </label>
                      </td>
                      <td>
                        <button className="edit-btn small">수정</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 워크스페이스 메뉴 관리 탭 */}
          {activeTab === 'workspace-menu' && (
            <div id="workspace-menu" className="menu-setting-tab-content">
              <div className="menu-setting-title-header">
                <div className="menu-setting-title-section">
              <h3 className="menu-subtitle">메뉴 관리</h3>
              <div className="workspace-selector">
                    <FormControl size="small" className="combo-select menu-setting-workspace-selector">
                    <Select
                      value={selectedWorkspace}
                      onChange={(e) => setSelectedWorkspace(e.target.value)}
                      variant="outlined"
                        sx={{ 
                          width: '100%',
                          fontSize: '14px',
                          height: '40px',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#ddd',
                            borderRadius: '8px'
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#999'
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#0066FF',
                            borderWidth: '2px',
                            boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.1)'
                          },
                          '& .MuiSelect-select': {
                            padding: '8px 32px 8px 12px',
                            fontSize: '14px',
                            lineHeight: '1.5'
                          },
                          '& .MuiSvgIcon-root': {
                            right: '8px',
                            color: '#666'
                          }
                        }}
                      >
                        <MenuItem value="all">워크스페이스 목록</MenuItem>
                      <MenuItem value="sk-telecom">SK Telecom</MenuItem>
                      <MenuItem value="sk-hynix">SK Hynix</MenuItem>
                      <MenuItem value="sk-on">SK On</MenuItem>
                      <MenuItem value="timbel-mk">Timbel_Mk</MenuItem>
                      <MenuItem value="timbel-sol">Timbel_sol</MenuItem>
                    </Select>
                  </FormControl>
              </div>
            </div>
            <div className="menu-action-section">
                  <div className="menu-action-buttons" style={{ display: 'flex', gap: '8px' }}>
                    <button 
                      className="btn-reset"
                      style={{
                        padding: '8px 16px',
                        fontSize: '14px',
                        background: '#fff',
                        color: '#6B7280',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F9FAFB';
                        e.target.style.borderColor = '#9CA3AF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#fff';
                        e.target.style.borderColor = '#D1D5DB';
                    }}
                  >
                    초기화
                    </button>
                    <button 
                      className="btn-save"
                      style={{
                        padding: '8px 16px',
                        fontSize: '14px',
                        background: 'transparent',
                        color: '#10B981',
                        border: '1px solid #10B981',
                        borderRadius: '6px',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#f0fdf4';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                    }}
                  >
                    저장
                    </button>
                    <button 
                      className="btn-submit"
                      style={{
                        padding: '8px 16px',
                        fontSize: '14px',
                        background: '#3B82F6',
                    color: 'white',
                        border: '1px solid #3B82F6',
                        borderRadius: '6px',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#2563EB';
                        e.target.style.borderColor = '#2563EB';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#3B82F6';
                        e.target.style.borderColor = '#3B82F6';
                  }}
                >
                  + 새 메뉴
                    </button>
                  </div>
            </div>
          </div>

              {/* 워크스페이스 메뉴 테이블 */}
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
                    {/* 워크스페이스 설정 그룹 */}
                    <tr className="section-header" style={{ background: '#EBF8FF' }}>
                      <td 
                        colSpan={4} 
                        className="section-title"
                        style={{
                          fontWeight: '600',
                          color: '#1E40AF',
                          padding: '12px 16px',
                          borderBottom: '1px solid #BFDBFE',
                          textAlign: 'left',
                          fontSize: '14px',
                          letterSpacing: '0.3px'
                        }}
                      >
                        📁 워크스페이스 설정
                      </td>
                    </tr>
                    <tr>
                      <td>FO기능정책관리</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>workspace_permission.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>컨텐츠 보존 관리</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>content_retention.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>메뉴 권한 관리</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>workspace_group_setting.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>사용자 관리</td>
                    <td>
                      <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>user.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>로고 관리</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                        label=""
                      />
                    </td>
                      <td>logo.html</td>
                    <td>
                      <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>

                    {/* 세부 기능 관리 그룹 */}
                    <tr className="section-header" style={{ background: '#EBF8FF' }}>
                      <td 
                        colSpan={4} 
                        className="section-title"
                        style={{
                          fontWeight: '600',
                          color: '#1E40AF',
                          padding: '12px 16px',
                          borderBottom: '1px solid #BFDBFE',
                          textAlign: 'left',
                          fontSize: '14px',
                          letterSpacing: '0.3px'
                        }}
                      >
                        ⚙️ 세부 기능 관리
                      </td>
                    </tr>
                    <tr>
                      <td>템플릿 관리 (회의록, 공통 템플릿)</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>meet_template.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>프롬프트 관리</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>prompt.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>동의서 관리</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>consent.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>캘린더 관리/설정</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>calendar.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>사전 관리</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>dictionary.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>공지사항 관리</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>notice.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>

                    {/* 이력/통계 관리 그룹 */}
                    <tr className="section-header" style={{ background: '#EBF8FF' }}>
                      <td 
                        colSpan={4} 
                        className="section-title"
                        style={{
                          fontWeight: '600',
                          color: '#1E40AF',
                          padding: '12px 16px',
                          borderBottom: '1px solid #BFDBFE',
                          textAlign: 'left',
                          fontSize: '14px',
                          letterSpacing: '0.3px'
                        }}
                      >
                        📊 이력/통계 관리
                      </td>
                    </tr>
                    <tr>
                      <td>사용자 접속 이력</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>login_history.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>다운로드 이력</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>download_history.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>사용자 동의 이력</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>user_consent_history.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>설정 변경 이력</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>setting_change_history.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>회의록 이력</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>meeting.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>워크스페이스 사용 통계</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>stats_usage.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>사용자별 사용 통계</td>
                      <td>
                        <FormControlLabel
                          control={<Switch defaultChecked size="small" />}
                          label=""
                        />
                      </td>
                      <td>stats_user.html</td>
                      <td>
                        <ButtonGroup variant="outlined" size="small">
                          <Button sx={{ color: 'primary.main', fontSize: '12px' }}>수정</Button>
                          <Button sx={{ color: 'error.main', fontSize: '12px' }}>삭제</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default MenuSettingPage
