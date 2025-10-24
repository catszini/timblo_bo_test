import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ChevronRight from '@mui/icons-material/ChevronRight'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import { CreateButton, SaveButton, ResetButton, EditButton, DeleteButton, CancelButton } from '../../components/common/CommonButtons'
import ActionButton from '../../components/common/ActionButton'
import Checkbox from '../../components/common/Checkbox'
import Modal from '../../components/common/Modal'
import FormField from '../../components/common/FormField'
import { styles } from './GroupSettingPage.styles'

const GroupSettingPage = () => {
  const [selectedWorkspace, setSelectedWorkspace] = useState('all')
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [selectedPermission, setSelectedPermission] = useState(null)
  const [selectedRowId, setSelectedRowId] = useState(null)
  const [newPermission, setNewPermission] = useState({
    workspace: 'SK Telecom',
    creator: '',
    permissionName: '',
    description: ''
  })

  // 권한 데이터
  const permissionData = [
    {
      id: 1,
      workspace: { name: 'SK Telecom', icon: 'S', color: '#14B8A6' },
      creator: '김민수',
      permissionName: '전체관리자',
      description: '최고관리자 - 모든 시스템 권한',
      createdDate: '2024-01-15 10:30:25',
      lastModified: '2024-03-20 14:45:18',
      workspaceValue: 'sk-telecom'
    },
    {
      id: 2,
      workspace: { name: 'SK Hynix', icon: 'S', color: '#6366F1' },
      creator: '이영희',
      permissionName: '워크스페이스관리자',
      description: '워크스페이스 전체 관리',
      createdDate: '2024-02-08 09:15:42',
      lastModified: '2024-03-15 16:22:37',
      workspaceValue: 'sk-hynix'
    },
    {
      id: 3,
      workspace: { name: 'SK C&C', icon: 'S', color: '#F43F5E' },
      creator: '박철수',
      permissionName: '시스템 메뉴관리자',
      description: '메뉴 생성/권한 관리',
      createdDate: '2024-01-25 13:28:51',
      lastModified: '2024-03-18 11:33:29',
      workspaceValue: 'sk-cc'
    },
    {
      id: 4,
      workspace: { name: 'SK Innovation', icon: 'S', color: '#F59E0B' },
      creator: '정수연',
      permissionName: '사용자관리자',
      description: '사용자 등록/관리',
      createdDate: '2024-03-05 14:22:15',
      lastModified: '2024-03-22 09:17:43',
      workspaceValue: 'sk-innovation'
    }
  ]

  // 워크스페이스 목록
  const workspaceOptions = [
    { value: 'all', label: '전체 워크스페이스' },
    { value: 'sk-telecom', label: 'SK Telecom' },
    { value: 'sk-hynix', label: 'SK Hynix' },
    { value: 'sk-on', label: 'SK On' },
    { value: 'sk-cc', label: 'SK C&C' },
    { value: 'sk-innovation', label: 'SK Innovation' },
    { value: 'sk-networks', label: 'SK Networks' }
  ]

  // 권한별 메뉴 구성 데이터
  const permissionMenus = {
    1: { // 전체관리자
      title: '시스템 메뉴',
      menus: [
        { id: 'workspace-management', name: '워크스페이스 관리', checked: true },
        { id: 'menu-management', name: '전체 메뉴 관리', checked: true },
        { id: 'user-management', name: '사용자 관리', checked: true },
        { id: 'permission-management', name: '역할 관리', checked: true },
        { id: 'system-settings', name: '설정변경 이력', checked: true },
        { id: 'system-stats', name: '전체 시스템 사용 통계', checked: true },
        { id: 'user-stats', name: '사용자별 사용 통계', checked: true }
      ]
    },
    2: { // 워크스페이스관리자
      title: '워크스페이스',
      menus: [
        { id: 'fo-policy', name: '기능 권한 관리', checked: true },
        { id: 'content-retention', name: '컨텐츠 보존 관리', checked: true },
        { id: 'workspace-permission', name: '역할 관리', checked: true },
        { id: 'workspace-user', name: '사용자 관리', checked: true },
        { id: 'logo-management', name: '로고 관리', checked: true }
      ]
    },
    3: { // 시스템 메뉴관리자
      title: '시스템 메뉴',
      menus: [
        { id: 'menu-management', name: '전체 메뉴 관리', checked: true },
        { id: 'permission-management', name: '역할 관리', checked: true }
      ]
    },
    4: { // 사용자관리자
      title: '사용자 관리',
      menus: [
        { id: 'user-management', name: '사용자 관리', checked: true },
        { id: 'workspace-user', name: '워크스페이스 사용자', checked: true }
      ]
    }
  }

  // 필터링된 데이터
  const filteredData = selectedWorkspace === 'all' 
    ? permissionData 
    : permissionData.filter(item => item.workspaceValue === selectedWorkspace)

  const handleWorkspaceChange = (e) => {
    setSelectedWorkspace(e.target.value)
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectAll(true)
      setSelectedRows(filteredData.map(item => item.id))
    } else {
      setSelectAll(false)
      setSelectedRows([])
    }
  }

  const handleRowCheckbox = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

  const handleRowClick = (item) => {
    setSelectedRowId(item.id)
    setSelectedPermission(item.id)
  }

  const handleCreateClick = () => {
    setIsCreateModalOpen(true)
  }

  const handleModalClose = () => {
    setIsCreateModalOpen(false)
    setNewPermission({
      workspace: 'SK Telecom',
      creator: '',
      permissionName: '',
      description: ''
    })
  }

  const handleCreatePermission = () => {
    if (!newPermission.creator.trim()) {
      alert('생성자를 입력해주세요.')
      return
    }
    if (!newPermission.permissionName.trim()) {
      alert('권한명을 입력해주세요.')
      return
    }
    if (!newPermission.description.trim()) {
      alert('설명을 입력해주세요.')
      return
    }
    
    alert('권한이 생성되었습니다.')
    handleModalClose()
  }

  const handleReset = () => {
    alert('권한이 초기화되었습니다.')
  }

  const handleSave = () => {
    if (selectedRowId) {
      alert('권한이 저장되었습니다.')
    } else {
      alert('저장할 권한을 선택해주세요.')
    }
  }

  // 권한 미리보기 렌더링
  const [expanded, setExpanded] = useState(true)

  const renderPermissionTree = () => {
    if (!selectedPermission || !permissionMenus[selectedPermission]) {
      return (
        <Box sx={styles.noDataArea}>
          <FolderIcon sx={styles.noDataIcon} />
          <Typography variant="body2" sx={styles.noDataText}>
            권한 항목 미리보기가 가능합니다.
          </Typography>
        </Box>
      )
    }

    const menuData = permissionMenus[selectedPermission]
    
    return (
      <List sx={styles.treeView}>
        <ListItem button onClick={() => setExpanded(!expanded)} sx={styles.treeParent}>
          <ListItemIcon>
            {expanded ? <ExpandMore /> : <ChevronRight />}
          </ListItemIcon>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary={menuData.title} />
        </ListItem>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {menuData.menus.map((menu) => (
              <ListItem key={menu.id} sx={styles.treeChild}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <InsertDriveFileIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={menu.name} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    )
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            역할 관리
          </Typography>
        </Box>

        <Box sx={styles.mainLayout}>
          <Box sx={styles.leftPanel}>
            {/* 워크스페이스 셀렉터 */}
            <Box sx={styles.workspaceSelector}>
              <Select
                value={selectedWorkspace}
                onChange={handleWorkspaceChange}
                options={workspaceOptions}
                fullWidth
              />
            </Box>

            {/* 권한정보 헤더 */}
            <Box sx={styles.infoHeader}>
              <Box sx={styles.infoTitleSection}>
                <Typography variant="h6" sx={styles.subtitle}>
                  생성된 권한
                </Typography>
                <Typography variant="body2" sx={styles.count}>
                  총 {filteredData.length}개
                </Typography>
              </Box>
              <Box sx={styles.buttonGroup}>
                <ActionButton variant="outlined" color="error">
                  삭제
                </ActionButton>
                <ActionButton variant="outlined">
                  수정
                </ActionButton>
                <CreateButton onClick={handleCreateClick} />
              </Box>
            </Box>

            {/* 권한 테이블 */}
            <TableContainer component={Paper} sx={styles.tableContainer}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox checked={selectAll} onChange={handleSelectAll} />
                    </TableCell>
                    <TableCell>워크스페이스</TableCell>
                    <TableCell>권한 생성자</TableCell>
                    <TableCell>권한명</TableCell>
                    <TableCell>설명</TableCell>
                    <TableCell>생성시간</TableCell>
                    <TableCell>최종수정시간</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.map((item) => (
                    <TableRow
                      key={item.id}
                      hover
                      selected={selectedRowId === item.id}
                      onClick={() => handleRowClick(item)}
                      sx={styles.tableRow}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedRows.includes(item.id)}
                          onChange={(e) => {
                            e.stopPropagation()
                            handleRowCheckbox(item.id)
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Box sx={styles.workspaceCell}>
                          <Avatar sx={{ ...styles.avatar, bgcolor: item.workspace.color }}>
                            {item.workspace.icon}
                          </Avatar>
                          <Typography variant="body2">{item.workspace.name}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{item.creator}</TableCell>
                      <TableCell>{item.permissionName}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>{item.createdDate}</TableCell>
                      <TableCell>{item.lastModified}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* 권한 미리보기 패널 */}
          <Box sx={styles.rightPanel}>
            <Box sx={styles.treeHeader}>
              <Typography variant="h6">권한 미리보기</Typography>
            </Box>
            <Box sx={styles.treeContent}>
              {renderPermissionTree()}
            </Box>
          </Box>
        </Box>

        {/* 하단 버튼 */}
        <Box sx={styles.bottomActions}>
          <ResetButton onClick={handleReset} />
          <SaveButton onClick={handleSave} />
        </Box>
      </Container>

      {/* 권한 생성 모달 */}
      <Modal
        open={isCreateModalOpen}
        onClose={handleModalClose}
        title="권한 생성"
        maxWidth="sm"
        actions={
          <>
            <CancelButton onClick={handleModalClose} fullWidth />
            <CreateButton onClick={handleCreatePermission} fullWidth />
          </>
        }
      >
        <Box sx={styles.modalContent}>
          <FormField
            label="워크스페이스"
            select
            value={newPermission.workspace}
            onChange={(e) => setNewPermission({...newPermission, workspace: e.target.value})}
            SelectProps={{
              native: true
            }}
          >
            <option>SK Telecom</option>
            <option>SK Hynix</option>
            <option>SK C&C</option>
            <option>SK Innovation</option>
          </FormField>

          <FormField
            label="생성자"
            value={newPermission.creator}
            onChange={(e) => setNewPermission({...newPermission, creator: e.target.value})}
            placeholder="생성자명을 입력하세요"
          />

          <FormField
            label="권한명"
            value={newPermission.permissionName}
            onChange={(e) => setNewPermission({...newPermission, permissionName: e.target.value})}
            placeholder="권한명을 입력하세요"
          />

          <FormField
            label="설명"
            value={newPermission.description}
            onChange={(e) => setNewPermission({...newPermission, description: e.target.value})}
            placeholder="권한 설명을 입력하세요"
          />
        </Box>
      </Modal>
    </Layout>
  )
}

export default GroupSettingPage
