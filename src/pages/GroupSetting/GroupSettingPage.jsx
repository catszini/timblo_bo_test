import React, { useState } from 'react'
import {
  Checkbox,
  Button,
  ButtonGroup,
  styled
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

// 커스텀 체크박스 스타일
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    width: 16,
    height: 16,
    border: '1.5px solid #97c3f0',
    borderRadius: '3px',
    backgroundColor: 'white', // 미체크 상태는 흰색 배경
    '& path': {
      display: 'none', // 체크 아이콘 숨김
    },
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    backgroundColor: 'rgba(199, 223, 247, 0.8)', // 체크된 상태만 파란색 배경
    borderColor: '#97c3f0',
  },
  '&.MuiCheckbox-indeterminate .MuiSvgIcon-root': {
    backgroundColor: 'rgba(199, 223, 247, 0.8)', // indeterminate 상태도 파란색 배경
    borderColor: '#97c3f0',
  },
  '&:hover .MuiSvgIcon-root': {
    borderColor: '#a5cef3',
    backgroundColor: 'white', // 미체크 호버 시에도 흰색 유지
  },
  '&.Mui-checked:hover .MuiSvgIcon-root': {
    backgroundColor: 'rgba(199, 223, 247, 0.9)', // 체크된 상태 호버 시만 파란색
    borderColor: '#a5cef3',
  },
}))

const permissionData = [
  {
    id: 1,
    order: 1,
    workspace: { name: 'SK Telecom', icon: 'S', color: 'color-teal' },
    name: '김민수',
    permissionName: '전체관리자',
    description: '최고관리자 - 모든 시스템 권한',
    checked: false
  },
  {
    id: 2,
    order: 2,
    workspace: { name: 'SK Hynix', icon: 'S', color: 'color-indigo' },
    name: '이영희',
    permissionName: '워크스페이스관리자',
    description: '워크스페이스 전체 관리',
    checked: false
  },
  {
    id: 3,
    order: 3,
    workspace: { name: 'SK C&C', icon: 'S', color: 'color-rose' },
    name: '박철수',
    permissionName: '메뉴관리자',
    description: '메뉴 생성/권한 관리',
    checked: false
  },
  {
    id: 4,
    order: 4,
    workspace: { name: 'SK Innovation', icon: 'S', color: 'color-amber' },
    name: '정수진',
    permissionName: '통계관리자',
    description: '사용량/통계 분석 관리',
    checked: false
  }
]

const permissionTreeData = {
  system: {
    name: '시스템',
    checked: true,
    children: {
      workspaceManagement: { name: '워크스페이스 관리', checked: true },
      userManagement: { name: '사용자 관리', checked: true },
      menuCreationManagement: { name: '메뉴 생성 관리', checked: true },
      menuPermissionManagement: { name: '메뉴 권한 관리', checked: true },
      usageStatistics: { name: '사용량 통계', checked: true },
      userStatistics: { name: '사용자별 통계', checked: true }
    }
  },
  workspace: {
    name: '워크스페이스',
    checked: true,
    children: {
      featurePermissionManagement: { name: '기능 권한 관리', checked: true },
      menuListManagement: { name: '메뉴리스트 관리', checked: true },
      menuPermissionSetting: { name: '메뉴 권한 관리', checked: true },
      userInquiry: { name: '사용자 관리', checked: true },
      logoManagement: { name: '로고 관리', checked: true }
    }
  },
  features: {
    name: '세부 기능 관리',
    checked: true,
    children: {
      templateManagement: { name: '템플릿 관리 (회의록, 공통 템플릿)', checked: true },
      promptManagement: { name: '프롬프트 관리', checked: true },
      consentManagement: { name: '동의서 관리', checked: true },
      calendarManagement: { name: '캘린더 관리/설정', checked: true },
      dictionaryManagement: { name: '사전 관리', checked: true },
      noticeManagement: { name: '공지사항 관리', checked: true }
    }
  },
  historyStats: {
    name: '이력/통계 관리',
    checked: true,
    children: {
      accessHistory: { name: '사용자 접속 이력', checked: true },
      downloadHistory: { name: '다운로드 이력', checked: true },
      consentHistory: { name: '사용자 동의 이력', checked: true },
      settingChangeHistory: { name: '설정변경 이력', checked: true },
      meetingManagement: { name: '회의록 관리', checked: true },
      usageStats: { name: '사용량 통계', checked: true },
      userStats: { name: '사용자별 통계', checked: true }
    }
  }
}

const GroupSettingPage = () => {
  const [permissions, setPermissions] = useState(permissionData)
  const [selectAll, setSelectAll] = useState(false)
  const [selectedPermission, setSelectedPermission] = useState(null)
  const [treeVisible, setTreeVisible] = useState(false)

  const handleSelectAll = (checked) => {
    setSelectAll(checked)
    setPermissions(permissions.map(permission => ({ ...permission, checked })))
  }

  const handleSelectPermission = (id, checked) => {
    const updatedPermissions = permissions.map(permission =>
      permission.id === id ? { ...permission, checked } : permission
    )
    setPermissions(updatedPermissions)
    setSelectAll(updatedPermissions.every(permission => permission.checked))
  }

  const handleRowClick = (permission) => {
    setSelectedPermission(permission)
    setTreeVisible(true)
  }

  const handleDelete = () => {
    const selectedPermissions = permissions.filter(permission => permission.checked)
    if (selectedPermissions.length === 0) {
      alert('삭제할 권한을 선택해주세요.')
      return
    }
    if (window.confirm(`선택된 ${selectedPermissions.length}개의 권한을 삭제하시겠습니까?`)) {
      setPermissions(prev => prev.filter(permission => !permission.checked))
      setSelectAll(false)
      alert('선택된 권한이 삭제되었습니다.')
    }
  }

  const handleEdit = () => {
    const selectedPermissions = permissions.filter(permission => permission.checked)
    if (selectedPermissions.length === 0) {
      alert('수정할 권한을 선택해주세요.')
      return
    }
    console.log('Edit permissions:', selectedPermissions)
  }

  const handleCreate = () => {
    console.log('Create new permission')
  }

  return (
    <Layout className="page-group-setting">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">관리자 접근권한</h1>
        </div>
        
        <div className="content-body">
          <div className="group-setting-container">
            <div className={`group-setting-layout ${treeVisible ? 'tree-visible' : ''}`}>
              <div className="group-setting-left-panel">
                {/* 권한정보 헤더와 버튼들 */}
                <div className="group-info-header">
                  <div className="group-info-title-section">
                    <h3 className="group-info-subtitle">권한 정보</h3>
                    <span className="group-total-count">총 {permissions.length}개</span>
                  </div>
                  <ButtonGroup variant="outlined" size="medium">
                    <Button 
                      onClick={handleDelete}
                      sx={{ 
                        color: 'error.main', 
                        borderColor: 'error.main',
                        '&:hover': { 
                          bgcolor: 'error.light',
                          color: 'white',
                          borderColor: 'error.main'
                        }
                      }}
                    >
                      삭제
                    </Button>
                    <Button 
                      onClick={handleEdit}
                      sx={{ 
                        color: 'primary.main',
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
                      onClick={handleCreate}
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
                      생성
                    </Button>
                  </ButtonGroup>
                </div>

                {/* 권한 정보 테이블 */}
                <div className="group-setting-table-container">
                  <table className="group-setting-table">
                    <thead>
                      <tr>
                        <th>
                          <CustomCheckbox
                            checked={selectAll}
                            onChange={(e) => handleSelectAll(e.target.checked)}
                            size="small"
                          />
                        </th>
                        <th>순번</th>
                        <th>워크스페이스</th>
                        <th>이름</th>
                        <th>권한명</th>
                        <th>설명</th>
                      </tr>
                    </thead>
                    <tbody>
                      {permissions.map((permission) => (
                        <tr 
                          key={permission.id}
                          onClick={() => handleRowClick(permission)}
                          style={{ cursor: 'pointer' }}
                        >
                          <td onClick={(e) => e.stopPropagation()}>
                            <CustomCheckbox
                              checked={permission.checked}
                              onChange={(e) => handleSelectPermission(permission.id, e.target.checked)}
                              size="small"
                            />
                          </td>
                          <td>{permission.order}</td>
                          <td>
                            <div className="workspace-name">
                              <div className={`workspace-icon ${permission.workspace.color}`}>
                                {permission.workspace.icon}
                              </div>
                              <span>{permission.workspace.name}</span>
                            </div>
                          </td>
                          <td>{permission.name}</td>
                          <td>{permission.permissionName}</td>
                          <td>{permission.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 권한 미리보기 패널 */}
              <div className="group-setting-tree-panel">
                <div className="tree-header">
                  <h4>권한 미리보기</h4>
                </div>
                
                {!selectedPermission ? (
                  <div className="no-data-area">
                    <div className="no-data-icon">
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 16H44C46.2091 16 48 17.7909 48 20V44C48 46.2091 46.2091 48 44 48H20C17.7909 48 16 46.2091 16 44V20C16 17.7909 17.7909 16 20 16Z"
                          fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="2" />
                        <path d="M28 28H36M28 32H36M28 36H32" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p className="no-data-text">권한 항목 미리보기가 가능합니다.</p>
                  </div>
                ) : (
                  <div className="tree-menu">
                    {Object.entries(permissionTreeData).map(([key, category]) => (
                      <div key={key} className="tree-item">
                        <CustomCheckbox 
                          checked={category.checked}
                          size="small"
                        />
                        <label>{category.name}</label>
                        <div className="tree-children">
                          {Object.entries(category.children).map(([childKey, child]) => (
                            <div key={childKey} className="tree-item">
                              <CustomCheckbox 
                                checked={child.checked}
                                size="small"
                              />
                              <label>{child.name}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GroupSettingPage