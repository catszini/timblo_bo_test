import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Checkbox,
  ButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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
    name: '박영수',
    permissionName: '회의관리자',
    description: '회의록 및 템플릿 관리',
    permissionType: 'meeting-admin'
  },
  {
    id: 2,
    order: 2,
    name: '김철수',
    permissionName: '로고관리자',
    description: '로고 이미지 관리',
    permissionType: 'logo-admin'
  },
  {
    id: 3,
    order: 3,
    name: '이민수',
    permissionName: '사용자관리자',
    description: '사용자 관리 및 접속 이력',
    permissionType: 'user-admin'
  },
  {
    id: 4,
    order: 4,
    name: '최지영',
    permissionName: '통계관리자',
    description: '사용량 및 사용자별 통계',
    permissionType: 'stats-admin'
  },
  {
    id: 5,
    order: 5,
    name: '정수현',
    permissionName: '컨텐츠관리자',
    description: '공지사항 및 사전 관리',
    permissionType: 'content-admin'
  }
]

const permissionMenus = {
  'meeting-admin': {
    title: '워크스페이스',
    menus: [
      { id: '기능 권한 관리', name: '기능 권한 관리', checked: false },
      { id: '메뉴 권한 관리', name: '메뉴 권한 관리', checked: false },
      { id: '사용자 관리', name: '사용자 관리', checked: false },
      { id: '로고 이미지 관리', name: '로고 이미지 관리', checked: false },
      { id: '회의 템플릿 관리', name: '회의 템플릿 관리', checked: true },
      { id: '프롬프트 관리', name: '프롬프트 관리', checked: false },
      { id: '동의서 관리', name: '동의서 관리', checked: false },
      { id: '캘린더 관리', name: '캘린더 관리', checked: true },
      { id: '사용자 접속 이력', name: '사용자 접속 이력', checked: false },
      { id: '다운로드 이력', name: '다운로드 이력', checked: false },
      { id: '사용자 동의 이력', name: '사용자 동의 이력', checked: false },
      { id: '설정변경 이력', name: '설정변경 이력', checked: false },
      { id: '회의록 관리', name: '회의록 관리', checked: true },
      { id: '사전 관리', name: '사전 관리', checked: false },
      { id: '공지사항 관리', name: '공지사항 관리', checked: false },
      { id: '사용량 통계', name: '사용량 통계', checked: false },
      { id: '사용자별 통계', name: '사용자별 통계', checked: false }
    ]
  },
  'logo-admin': {
    title: '워크스페이스',
    menus: [
      { id: '기능 권한 관리', name: '기능 권한 관리', checked: false },
      { id: '메뉴 권한 관리', name: '메뉴 권한 관리', checked: false },
      { id: '사용자 관리', name: '사용자 관리', checked: false },
      { id: '로고 이미지 관리', name: '로고 이미지 관리', checked: true },
      { id: '회의 템플릿 관리', name: '회의 템플릿 관리', checked: false },
      { id: '프롬프트 관리', name: '프롬프트 관리', checked: false },
      { id: '동의서 관리', name: '동의서 관리', checked: false },
      { id: '캘린더 관리', name: '캘린더 관리', checked: false },
      { id: '사용자 접속 이력', name: '사용자 접속 이력', checked: false },
      { id: '다운로드 이력', name: '다운로드 이력', checked: false },
      { id: '사용자 동의 이력', name: '사용자 동의 이력', checked: false },
      { id: '설정변경 이력', name: '설정변경 이력', checked: false },
      { id: '회의록 관리', name: '회의록 관리', checked: false },
      { id: '사전 관리', name: '사전 관리', checked: false },
      { id: '공지사항 관리', name: '공지사항 관리', checked: false },
      { id: '사용량 통계', name: '사용량 통계', checked: false },
      { id: '사용자별 통계', name: '사용자별 통계', checked: false }
    ]
  },
  'user-admin': {
    title: '워크스페이스',
    menus: [
      { id: '기능 권한 관리', name: '기능 권한 관리', checked: false },
      { id: '메뉴 권한 관리', name: '메뉴 권한 관리', checked: false },
      { id: '사용자 관리', name: '사용자 관리', checked: true },
      { id: '로고 이미지 관리', name: '로고 이미지 관리', checked: false },
      { id: '회의 템플릿 관리', name: '회의 템플릿 관리', checked: false },
      { id: '프롬프트 관리', name: '프롬프트 관리', checked: false },
      { id: '동의서 관리', name: '동의서 관리', checked: false },
      { id: '캘린더 관리', name: '캘린더 관리', checked: false },
      { id: '사용자 접속 이력', name: '사용자 접속 이력', checked: true },
      { id: '다운로드 이력', name: '다운로드 이력', checked: true },
      { id: '사용자 동의 이력', name: '사용자 동의 이력', checked: true },
      { id: '설정변경 이력', name: '설정변경 이력', checked: true },
      { id: '회의록 관리', name: '회의록 관리', checked: false },
      { id: '사전 관리', name: '사전 관리', checked: false },
      { id: '공지사항 관리', name: '공지사항 관리', checked: false },
      { id: '사용량 통계', name: '사용량 통계', checked: false },
      { id: '사용자별 통계', name: '사용자별 통계', checked: false }
    ]
  },
  'stats-admin': {
    title: '워크스페이스',
    menus: [
      { id: '기능 권한 관리', name: '기능 권한 관리', checked: false },
      { id: '메뉴 권한 관리', name: '메뉴 권한 관리', checked: false },
      { id: '사용자 관리', name: '사용자 관리', checked: false },
      { id: '로고 이미지 관리', name: '로고 이미지 관리', checked: false },
      { id: '회의 템플릿 관리', name: '회의 템플릿 관리', checked: false },
      { id: '프롬프트 관리', name: '프롬프트 관리', checked: false },
      { id: '동의서 관리', name: '동의서 관리', checked: false },
      { id: '캘린더 관리', name: '캘린더 관리', checked: false },
      { id: '사용자 접속 이력', name: '사용자 접속 이력', checked: false },
      { id: '다운로드 이력', name: '다운로드 이력', checked: false },
      { id: '사용자 동의 이력', name: '사용자 동의 이력', checked: false },
      { id: '설정변경 이력', name: '설정변경 이력', checked: false },
      { id: '회의록 관리', name: '회의록 관리', checked: false },
      { id: '사전 관리', name: '사전 관리', checked: false },
      { id: '공지사항 관리', name: '공지사항 관리', checked: false },
      { id: '사용량 통계', name: '사용량 통계', checked: true },
      { id: '사용자별 통계', name: '사용자별 통계', checked: true }
    ]
  },
  'content-admin': {
    title: '워크스페이스',
    menus: [
      { id: '기능 권한 관리', name: '기능 권한 관리', checked: false },
      { id: '메뉴 권한 관리', name: '메뉴 권한 관리', checked: false },
      { id: '사용자 관리', name: '사용자 관리', checked: false },
      { id: '로고 이미지 관리', name: '로고 이미지 관리', checked: false },
      { id: '회의 템플릿 관리', name: '회의 템플릿 관리', checked: false },
      { id: '프롬프트 관리', name: '프롬프트 관리', checked: true },
      { id: '동의서 관리', name: '동의서 관리', checked: false },
      { id: '캘린더 관리', name: '캘린더 관리', checked: false },
      { id: '사용자 접속 이력', name: '사용자 접속 이력', checked: false },
      { id: '다운로드 이력', name: '다운로드 이력', checked: false },
      { id: '사용자 동의 이력', name: '사용자 동의 이력', checked: false },
      { id: '설정변경 이력', name: '설정변경 이력', checked: false },
      { id: '회의록 관리', name: '회의록 관리', checked: false },
      { id: '사전 관리', name: '사전 관리', checked: true },
      { id: '공지사항 관리', name: '공지사항 관리', checked: true },
      { id: '사용량 통계', name: '사용량 통계', checked: false },
      { id: '사용자별 통계', name: '사용자별 통계', checked: false }
    ]
  }
}

const WorkspaceGroupSettingPage = () => {
  const [selectedPermission, setSelectedPermission] = useState(null)
  const [selectedMenus, setSelectedMenus] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newPermission, setNewPermission] = useState({
    workspaceName: 'SK Telecom',
    permissionName: '',
    description: ''
  })

  const handleRowClick = (permission) => {
    setSelectedPermission(permission)
    const menuData = permissionMenus[permission.permissionType]
    if (menuData) {
      const initialMenus = {}
      menuData.menus.forEach(menu => {
        initialMenus[menu.id] = menu.checked
      })
      setSelectedMenus(initialMenus)
    }
  }

  const handleMenuCheck = (menuId, checked) => {
    setSelectedMenus(prev => ({
      ...prev,
      [menuId]: checked
    }))
  }

  const handleWorkspaceCheck = (checked) => {
    const menuData = permissionMenus[selectedPermission?.permissionType]
    if (menuData) {
      const updatedMenus = {}
      menuData.menus.forEach(menu => {
        updatedMenus[menu.id] = checked
      })
      setSelectedMenus(updatedMenus)
    }
  }

  const handleReset = () => {
    if (selectedPermission) {
      const menuData = permissionMenus[selectedPermission.permissionType]
      if (menuData) {
        const initialMenus = {}
        menuData.menus.forEach(menu => {
          initialMenus[menu.id] = menu.checked
        })
        setSelectedMenus(initialMenus)
        alert('권한이 초기화되었습니다.')
      }
    } else {
      alert('초기화할 권한을 선택해주세요.')
    }
  }

  const handleSave = () => {
    if (selectedPermission) {
      alert(`${selectedPermission.name}의 권한이 저장되었습니다.`)
    } else {
      alert('권한을 수정할 사용자를 선택해주세요.')
    }
  }

  const handleCreatePermission = () => {
    if (!newPermission.permissionName.trim()) {
      alert('권한명을 입력해주세요.')
      return
    }
    if (!newPermission.description.trim()) {
      alert('구분을 입력해주세요.')
      return
    }
    alert('권한이 생성되었습니다.')
    setIsModalOpen(false)
    setNewPermission({
      workspaceName: 'SK Telecom',
      permissionName: '',
      description: ''
    })
  }

  const handleDelete = () => {
    // 삭제 로직
    console.log('삭제')
  }

  const handleEdit = () => {
    // 수정 로직
    console.log('수정')
  }

  const handleCreate = () => {
    setIsModalOpen(true)
  }

  const getCheckedMenusCount = () => {
    return Object.values(selectedMenus).filter(checked => checked).length
  }

  const getTotalMenusCount = () => {
    const menuData = permissionMenus[selectedPermission?.permissionType]
    return menuData ? menuData.menus.length : 0
  }

  const isWorkspaceChecked = () => {
    const checkedCount = getCheckedMenusCount()
    const totalCount = getTotalMenusCount()
    return checkedCount === totalCount && totalCount > 0
  }

  const isWorkspaceIndeterminate = () => {
    const checkedCount = getCheckedMenusCount()
    const totalCount = getTotalMenusCount()
    return checkedCount > 0 && checkedCount < totalCount
  }

  return (
    <Layout className="page-group-setting">
      <div className="content user-page group-setting-page">
        <div className="content-header">
          <h1 className="breadcrumb">메뉴 권한 관리</h1>
        </div>
        <div className="content-body">
          <div className="group-setting-container">
            <div className="group-setting-layout tree-visible">
              <div className="group-setting-left-panel">
                {/* 권한정보 헤더와 버튼들 */}
                <div className="group-info-header">
                  <div className="group-info-title-section">
                    <h3 className="group-info-subtitle">권한 정보</h3>
                    <span className="group-total-count">총 {permissionData.length}개</span>
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
                        <th><CustomCheckbox size="small" /></th>
                        <th>순번</th>
                        <th>이름</th>
                        <th>권한명</th>
                        <th>설명</th>
                      </tr>
                    </thead>
                    <tbody>
                      {permissionData.map((permission) => (
                        <tr 
                          key={permission.id}
                          className={selectedPermission?.id === permission.id ? 'selected' : ''}
                          onClick={() => handleRowClick(permission)}
                          style={{ cursor: 'pointer' }}
                        >
                          <td>
                            <CustomCheckbox 
                              size="small"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </td>
                          <td>{permission.order}</td>
                          <td>{permission.name}</td>
                          <td>{permission.permissionName}</td>
                          <td>{permission.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

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
                    <div className="tree-item">
                      <CustomCheckbox
                        checked={isWorkspaceChecked()}
                        indeterminate={isWorkspaceIndeterminate()}
                        onChange={(e) => handleWorkspaceCheck(e.target.checked)}
                        size="small"
                      />
                      <label>워크스페이스</label>
                      <div className="tree-children">
                        {permissionMenus[selectedPermission.permissionType]?.menus.map(menu => (
                          <div key={menu.id} className="tree-item">
                            <CustomCheckbox
                              checked={selectedMenus[menu.id] || false}
                              onChange={(e) => handleMenuCheck(menu.id, e.target.checked)}
                              size="small"
                            />
                            <label>{menu.name}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 권한 미리보기 하단 버튼들 */}
        <div className="preview-actions-external">
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
        </div>
      </div>

      {/* 권한 생성 모달 */}
      <Dialog 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        maxWidth="sm" 
        fullWidth
      >
        <DialogTitle>권한 생성</DialogTitle>
        <DialogContent>
          <div style={{ paddingTop: '8px' }}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>워크스페이스</label>
              <FormControl fullWidth size="small">
                <Select
                  value={newPermission.workspaceName}
                  onChange={(e) => setNewPermission(prev => ({ ...prev, workspaceName: e.target.value }))}
                  variant="outlined"
                >
                  <MenuItem value="SK Telecom">SK Telecom</MenuItem>
                  <MenuItem value="SK Hynix">SK Hynix</MenuItem>
                  <MenuItem value="KT">KT</MenuItem>
                  <MenuItem value="LG U+">LG U+</MenuItem>
                  <MenuItem value="Timbel_Mk">Timbel_Mk</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>권한명</label>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="권한명을 입력하세요"
                value={newPermission.permissionName}
                onChange={(e) => setNewPermission(prev => ({ ...prev, permissionName: e.target.value }))}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>권한 설명</label>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="권한 설명을 입력하세요"
                value={newPermission.description}
                onChange={(e) => setNewPermission(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setIsModalOpen(false)}
            sx={{ 
              color: 'text.secondary',
              '&:hover': { bgcolor: 'grey.100' }
            }}
          >
            취소
          </Button>
          <Button 
            onClick={handleCreatePermission}
            variant="contained"
            sx={{ 
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            생성
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  )
}

export default WorkspaceGroupSettingPage
