import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Container,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Switch,
  Radio,
  RadioGroup,
  FormControlLabel,
  Tabs,
  Tab
} from '@mui/material'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import Modal from '../../components/common/Modal'
import Checkbox from '../../components/common/Checkbox'
import ActionButton from '../../components/common/ActionButton'
import { DeleteButton, CreateButton, CancelButton, SaveButton } from '../../components/common/CommonButtons'
import { styles } from './MenuSettingPage.styles'

const MenuSettingPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  const getInitialTab = () => {
    const params = new URLSearchParams(location.search)
    return params.get('tab') === 'workspace-menu' ? 1 : 0
  }
  
  const [activeTab, setActiveTab] = useState(getInitialTab())
  const [isNewMenuModalOpen, setIsNewMenuModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [currentMenuType, setCurrentMenuType] = useState('system')
  const [selectedWorkspace, setSelectedWorkspace] = useState('워크스페이스 목록')
  
  // 시스템 메뉴 데이터
  const [systemMenuData, setSystemMenuData] = useState([
    { id: 1, name: '워크스페이스 관리', url: '/workspace', isActive: true },
    { id: 2, name: '전체 메뉴 관리', url: '/menu-setting', isActive: true },
    { id: 3, name: '사용자 관리', url: '/user-management', isActive: true },
    { id: 4, name: '역할 관리', url: '/group-setting', isActive: true },
    { id: 5, name: '설정변경 이력', url: '/setting-history', isActive: true },
    { id: 6, name: '전체 시스템 사용 통계', url: '/system-stats', isActive: true },
    { id: 7, name: '사용자별 사용 통계', url: '/system-stats-user', isActive: true }
  ])

  // 워크스페이스 메뉴 데이터
  const [workspaceMenuData, setWorkspaceMenuData] = useState([
    { id: 'ws-1', name: '기능 권한 관리', url: '/workspace-permission', category: '워크스페이스 설정', isActive: true },
    { id: 'ws-2', name: '컨텐츠 보존 관리', url: '/content-retention', category: '워크스페이스 설정', isActive: true },
    { id: 'ws-3', name: '역할 관리', url: '/workspace-group-setting', category: '워크스페이스 설정', isActive: true },
    { id: 'ws-4', name: '사용자 관리', url: '/user', category: '워크스페이스 설정', isActive: true },
    { id: 'ws-5', name: '로고 관리', url: '/logo', category: '워크스페이스 설정', isActive: true },
    { id: 'df-1', name: '템플릿 관리 (회의록, 공통 템플릿)', url: '/meet-template', category: '세부 기능 관리', isActive: true },
    { id: 'df-2', name: '프롬프트 관리', url: '/prompt', category: '세부 기능 관리', isActive: true },
    { id: 'df-3', name: '동의서 관리', url: '/consent', category: '세부 기능 관리', isActive: true },
    { id: 'df-4', name: '캘린더 관리/설정', url: '/calendar', category: '세부 기능 관리', isActive: true },
    { id: 'df-5', name: '사전 관리', url: '/dictionary', category: '세부 기능 관리', isActive: true },
    { id: 'df-6', name: '공지사항 관리', url: '/notice', category: '세부 기능 관리', isActive: true },
    { id: 'hs-1', name: '사용자 접속 이력', url: '/login-history', category: '이력/통계 관리', isActive: true },
    { id: 'hs-2', name: '다운로드 이력', url: '/download-history', category: '이력/통계 관리', isActive: true },
    { id: 'hs-3', name: '사용자 동의 이력', url: '/user-consent-history', category: '이력/통계 관리', isActive: true },
    { id: 'hs-4', name: '설정 변경 이력', url: '/setting-change-history', category: '이력/통계 관리', isActive: true },
    { id: 'hs-5', name: '회의록 이력', url: '/meeting', category: '이력/통계 관리', isActive: true },
    { id: 'hs-6', name: '워크스페이스 사용 통계', url: '/stats-usage', category: '이력/통계 관리', isActive: true },
    { id: 'hs-7', name: '사용자별 사용 통계', url: '/stats-user', category: '이력/통계 관리', isActive: true }
  ])

  const [systemSelectedMenus, setSystemSelectedMenus] = useState([])
  const [workspaceSelectedMenus, setWorkspaceSelectedMenus] = useState([])
  
  const [formData, setFormData] = useState({
    menuName: '',
    menuUrl: '',
    menuOrder: '',
    groupSelect: '',
    menuStatus: 'active'
  })

  const workspaceOptions = [
    { value: '워크스페이스 목록', label: '워크스페이스 목록' },
    { value: 'SK Telecom', label: 'SK Telecom' },
    { value: 'Samsung Electronics', label: 'Samsung Electronics' },
    { value: 'LG Electronics', label: 'LG Electronics' }
  ]

  const groupOptions = [
    { value: '', label: '그룹을 선택하세요' },
    { value: 'workspace-setting', label: '워크스페이스 설정' },
    { value: 'feature-management', label: '세부 기능 관리' },
    { value: 'history-stats', label: '이력/통계 관리' }
  ]

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const tabParam = params.get('tab')
    if (tabParam === 'workspace-menu' && activeTab !== 1) {
      setActiveTab(1)
    } else if (!tabParam && activeTab !== 0) {
      setActiveTab(0)
    }
  }, [location.search])

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
    const tabName = newValue === 0 ? 'system-menu' : 'workspace-menu'
    navigate(`?tab=${tabName}`, { replace: true })
  }

  const handleSelectAll = (e, tabType) => {
    const isChecked = e.target.checked
    if (tabType === 'system') {
      setSystemSelectedMenus(isChecked ? systemMenuData.map(m => m.id) : [])
    } else {
      setWorkspaceSelectedMenus(isChecked ? workspaceMenuData.map(m => m.id) : [])
    }
  }

  const handleRowSelect = (id, tabType) => {
    if (tabType === 'system') {
      setSystemSelectedMenus(prev => 
        prev.includes(id) ? prev.filter(menuId => menuId !== id) : [...prev, id]
      )
    } else {
      setWorkspaceSelectedMenus(prev => 
        prev.includes(id) ? prev.filter(menuId => menuId !== id) : [...prev, id]
      )
    }
  }

  const handleDeleteClick = () => {
    const selectedMenus = activeTab === 0 ? systemSelectedMenus : workspaceSelectedMenus
    if (selectedMenus.length === 0) {
      alert('삭제할 메뉴를 선택해주세요.')
      return
    }
    setIsDeleteModalOpen(true)
  }

  const handleDeleteConfirm = () => {
    if (activeTab === 0) {
      setSystemMenuData(systemMenuData.filter(menu => !systemSelectedMenus.includes(menu.id)))
      setSystemSelectedMenus([])
    } else {
      setWorkspaceMenuData(workspaceMenuData.filter(menu => !workspaceSelectedMenus.includes(menu.id)))
      setWorkspaceSelectedMenus([])
    }
    setIsDeleteModalOpen(false)
    alert('선택한 메뉴가 삭제되었습니다.')
  }

  const handleNewClick = () => {
    setCurrentMenuType(activeTab === 0 ? 'system' : 'workspace')
    setFormData({
      menuName: '',
      menuUrl: '',
      menuOrder: '',
      groupSelect: '',
      menuStatus: 'active'
    })
    setIsNewMenuModalOpen(true)
  }

  const handleModalSave = () => {
    const { menuName, menuUrl, menuOrder, groupSelect, menuStatus } = formData
    
    if (!menuName || !menuUrl) {
      alert('메뉴명과 URL을 입력해주세요.')
      return
    }

    if (currentMenuType === 'system' && !menuOrder) {
      alert('순서를 입력해주세요.')
      return
    }

    if (currentMenuType === 'workspace' && !groupSelect) {
      alert('그룹을 선택해주세요.')
      return
    }

    alert(`메뉴가 생성되었습니다.`)
    setIsNewMenuModalOpen(false)
  }

  const getGroupedWorkspaceMenus = () => {
    const groups = {}
    workspaceMenuData.forEach(menu => {
      if (!groups[menu.category]) {
        groups[menu.category] = []
      }
      groups[menu.category].push(menu)
    })
    return groups
  }

  const renderSystemMenuTable = () => (
    <TableContainer component={Paper} sx={styles.tableContainer}>
      <Table sx={styles.table}>
        <TableHead>
          <TableRow sx={styles.headerRow}>
            <TableCell padding="checkbox" sx={styles.headerCell}>
              <Checkbox
                checked={systemSelectedMenus.length === systemMenuData.length && systemMenuData.length > 0}
                onChange={(e) => handleSelectAll(e, 'system')}
              />
            </TableCell>
            <TableCell sx={styles.headerCell}>메뉴명</TableCell>
            <TableCell sx={styles.headerCell}>URL</TableCell>
            <TableCell sx={styles.headerCell}>사용여부</TableCell>
            <TableCell sx={styles.headerCell}>관리</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {systemMenuData.map(menu => (
            <TableRow 
              key={menu.id} 
              sx={{
                ...styles.bodyRow,
                ...(systemSelectedMenus.includes(menu.id) && { bgcolor: '#EFF6FF' })
              }}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={systemSelectedMenus.includes(menu.id)}
                  onChange={() => handleRowSelect(menu.id, 'system')}
                />
              </TableCell>
              <TableCell sx={styles.bodyCell}>{menu.name}</TableCell>
              <TableCell sx={styles.bodyCell}>{menu.url}</TableCell>
              <TableCell sx={styles.bodyCell}>
                <Box sx={styles.switchContainer}>
                  <Switch checked={menu.isActive} size="small" />
                </Box>
              </TableCell>
              <TableCell sx={styles.bodyCell}>
                <Button sx={styles.editButton}>수정</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

  const renderWorkspaceMenuTable = () => (
    <TableContainer component={Paper} sx={styles.tableContainer}>
      <Table sx={styles.table}>
        <TableHead>
          <TableRow sx={styles.headerRow}>
            <TableCell padding="checkbox" sx={styles.headerCell}>
              <Checkbox
                checked={workspaceSelectedMenus.length === workspaceMenuData.length && workspaceMenuData.length > 0}
                onChange={(e) => handleSelectAll(e, 'workspace')}
              />
            </TableCell>
            <TableCell sx={styles.headerCell}>메뉴명</TableCell>
            <TableCell sx={styles.headerCell}>URL</TableCell>
            <TableCell sx={styles.headerCell}>사용여부</TableCell>
            <TableCell sx={styles.headerCell}>관리</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(getGroupedWorkspaceMenus()).map(([category, menus]) => (
            <React.Fragment key={category}>
              <TableRow>
                <TableCell colSpan={5} sx={styles.sectionHeader}>
                  {category}
                </TableCell>
              </TableRow>
              {menus.map(menu => (
                <TableRow 
                  key={menu.id}
                  sx={{
                    ...styles.bodyRow,
                    ...(workspaceSelectedMenus.includes(menu.id) && { bgcolor: '#EFF6FF' })
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={workspaceSelectedMenus.includes(menu.id)}
                      onChange={() => handleRowSelect(menu.id, 'workspace')}
                    />
                  </TableCell>
                  <TableCell sx={styles.bodyCell}>{menu.name}</TableCell>
                  <TableCell sx={styles.bodyCell}>{menu.url}</TableCell>
                  <TableCell sx={styles.bodyCell}>
                    <Box sx={styles.switchContainer}>
                      <Switch checked={menu.isActive} size="small" />
                    </Box>
                  </TableCell>
                  <TableCell sx={styles.bodyCell}>
                    <Button sx={styles.editButton}>수정</Button>
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            전체 메뉴 관리
          </Typography>
        </Box>

        <Box sx={styles.tabContainer}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="시스템 메뉴 관리" />
            <Tab label="워크스페이스 메뉴 관리" />
          </Tabs>
        </Box>

        {/* 시스템 메뉴 탭 */}
        {activeTab === 0 && (
          <Box>
            <Box sx={styles.contentHeader}>
              <Box sx={styles.titleSection}>
                <Typography sx={styles.subtitle}>시스템 메뉴 관리</Typography>
                <Typography sx={styles.count}>총 {systemMenuData.length}개 메뉴</Typography>
              </Box>
              <Box sx={styles.actionButtons}>
                <DeleteButton onClick={handleDeleteClick} />
                <CreateButton onClick={handleNewClick} />
              </Box>
            </Box>
            {renderSystemMenuTable()}
          </Box>
        )}

        {/* 워크스페이스 메뉴 탭 */}
        {activeTab === 1 && (
          <Box>
            <Box sx={styles.contentHeader}>
              <Box sx={styles.titleSection}>
                <Typography sx={styles.subtitle}>메뉴 관리</Typography>
                <Box sx={styles.workspaceSelector}>
                  <Select
                    value={selectedWorkspace}
                    onChange={(e) => setSelectedWorkspace(e.target.value)}
                    options={workspaceOptions}
                    fullWidth
                  />
                </Box>
              </Box>
              <Box sx={styles.actionButtons}>
                <DeleteButton onClick={handleDeleteClick} />
                <CreateButton onClick={handleNewClick} />
              </Box>
            </Box>
            {renderWorkspaceMenuTable()}
          </Box>
        )}

        {/* 메뉴 생성 모달 */}
        <Modal
          open={isNewMenuModalOpen}
          onClose={() => setIsNewMenuModalOpen(false)}
          title={currentMenuType === 'system' ? '시스템 메뉴 생성' : '워크스페이스 메뉴 생성'}
          maxWidth="sm"
          actions={
            <>
              <CancelButton onClick={() => setIsNewMenuModalOpen(false)} fullWidth />
              <SaveButton onClick={handleModalSave} fullWidth />
            </>
          }
        >
          <Box sx={styles.modalContent}>
            <Box sx={styles.formRow}>
              <Typography variant="subtitle2" fontWeight={600}>메뉴명</Typography>
              <TextField
                fullWidth
                placeholder="메뉴명을 입력하세요"
                value={formData.menuName}
                onChange={(e) => setFormData({ ...formData, menuName: e.target.value })}
              />
            </Box>

            {currentMenuType === 'system' && (
              <Box sx={styles.formRow}>
                <Typography variant="subtitle2" fontWeight={600}>순서</Typography>
                <TextField
                  fullWidth
                  type="number"
                  placeholder="순서를 입력하세요"
                  value={formData.menuOrder}
                  onChange={(e) => setFormData({ ...formData, menuOrder: e.target.value })}
                />
              </Box>
            )}

            <Box sx={styles.formRow}>
              <Typography variant="subtitle2" fontWeight={600}>링크 URL</Typography>
              <TextField
                fullWidth
                placeholder="페이지 경로 또는 URL을 입력하세요"
                value={formData.menuUrl}
                onChange={(e) => setFormData({ ...formData, menuUrl: e.target.value })}
              />
            </Box>

            {currentMenuType === 'workspace' && (
              <Box sx={styles.formRow}>
                <Typography variant="subtitle2" fontWeight={600}>그룹 설정</Typography>
                <Select
                  value={formData.groupSelect}
                  onChange={(e) => setFormData({ ...formData, groupSelect: e.target.value })}
                  options={groupOptions}
                  fullWidth
                />
              </Box>
            )}

            <Box sx={styles.formRow}>
              <Typography variant="subtitle2" fontWeight={600}>사용 여부</Typography>
              <RadioGroup
                row
                value={formData.menuStatus}
                onChange={(e) => setFormData({ ...formData, menuStatus: e.target.value })}
              >
                <FormControlLabel value="active" control={<Radio />} label="사용" />
                <FormControlLabel value="inactive" control={<Radio />} label="미사용" />
              </RadioGroup>
            </Box>
          </Box>
        </Modal>

        {/* 삭제 확인 모달 */}
        <Modal
          open={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          title="삭제 확인"
          maxWidth="xs"
          actions={
            <>
              <CancelButton onClick={() => setIsDeleteModalOpen(false)} fullWidth />
              <Button
                variant="contained"
                color="error"
                onClick={handleDeleteConfirm}
                fullWidth
              >
                확인
              </Button>
            </>
          }
        >
          <Box sx={styles.confirmModal}>
            <Box sx={styles.confirmMessage}>
              <Typography sx={styles.confirmTitle}>삭제하시겠습니까?</Typography>
              <Typography sx={styles.confirmText}>확인 후에는 되돌릴 수 없습니다.</Typography>
            </Box>
          </Box>
        </Modal>
      </Container>
    </Layout>
  )
}

export default MenuSettingPage
