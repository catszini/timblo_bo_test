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
import { CreateButton, SaveButton, ResetButton, EditButton, DeleteButton, CancelButton } from '../../components/common/CommonButtons'
import ActionButton from '../../components/common/ActionButton'
import Checkbox from '../../components/common/Checkbox'
import Modal from '../../components/common/Modal'
import FormField from '../../components/common/FormField'
import { styles } from './WorkspaceGroupSettingPage.styles'

const WorkspaceGroupSettingPage = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [selectedPermission, setSelectedPermission] = useState(null)
  const [selectedRowId, setSelectedRowId] = useState(null)
  const [newPermission, setNewPermission] = useState({
    permissionName: '',
    name: '',
    description: ''
  })

  // 권한 데이터
  const permissionData = [
    {
      id: 1,
      permissionType: 'meeting-admin',
      permission: '회의관리자',
      creator: '박영수',
      permissionName: '회의관리자',
      description: '회의록 및 템플릿 관리',
      createdDate: '2024-01-15 10:30:25',
      lastModified: '2024-03-20 14:45:18'
    },
    {
      id: 2,
      permissionType: 'logo-admin',
      permission: '로고관리자',
      creator: '김철수',
      permissionName: '로고관리자',
      description: '로고 이미지 관리',
      createdDate: '2024-02-08 09:15:42',
      lastModified: '2024-03-15 16:22:37'
    },
    {
      id: 3,
      permissionType: 'user-admin',
      permission: '사용자관리자',
      creator: '이민수',
      permissionName: '사용자관리자',
      description: '사용자 관리 및 접속 이력',
      createdDate: '2024-03-10 13:28:51',
      lastModified: '2024-04-15 11:33:29'
    },
    {
      id: 4,
      permissionType: 'stats-admin',
      permission: '통계관리자',
      creator: '최지영',
      permissionName: '통계관리자',
      description: '사용량 및 사용자별 통계',
      createdDate: '2024-04-12 15:41:07',
      lastModified: '2024-05-10 08:56:44'
    },
    {
      id: 5,
      permissionType: 'content-admin',
      permission: '컨텐츠관리자',
      creator: '정수현',
      permissionName: '컨텐츠관리자',
      description: '공지사항 및 사전 관리',
      createdDate: '2024-05-20 12:18:33',
      lastModified: '2024-06-15 17:25:16'
    }
  ]

  // 권한별 메뉴 구성
  const permissionMenus = {
    'meeting-admin': {
      title: '워크스페이스',
      menus: [
        { id: '기능 권한 관리', name: '기능 권한 관리', checked: false },
        { id: '역할 관리', name: '역할 관리', checked: false },
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
        { id: '역할 관리', name: '역할 관리', checked: false },
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
        { id: '역할 관리', name: '역할 관리', checked: false },
        { id: '사용자 관리', name: '사용자 관리', checked: true },
        { id: '로고 이미지 관리', name: '로고 이미지 관리', checked: false },
        { id: '회의 템플릿 관리', name: '회의 템플릿 관리', checked: false },
        { id: '프롬프트 관리', name: '프롬프트 관리', checked: false },
        { id: '동의서 관리', name: '동의서 관리', checked: false },
        { id: '캘린더 관리', name: '캘린더 관리', checked: false },
        { id: '사용자 접속 이력', name: '사용자 접속 이력', checked: true },
        { id: '다운로드 이력', name: '다운로드 이력', checked: true },
        { id: '사용자 동의 이력', name: '사용자 동의 이력', checked: true },
        { id: '설정변경 이력', name: '설정변경 이력', checked: false },
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
        { id: '역할 관리', name: '역할 관리', checked: false },
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
        { id: '역할 관리', name: '역할 관리', checked: false },
        { id: '사용자 관리', name: '사용자 관리', checked: false },
        { id: '로고 이미지 관리', name: '로고 이미지 관리', checked: false },
        { id: '회의 템플릿 관리', name: '회의 템플릿 관리', checked: false },
        { id: '프롬프트 관리', name: '프롬프트 관리', checked: false },
        { id: '동의서 관리', name: '동의서 관리', checked: true },
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

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectAll(true)
      setSelectedRows(permissionData.map(item => item.id))
    } else {
      setSelectAll(false)
      setSelectedRows([])
    }
  }

  const handleRowCheckbox = (id) => {
    let newSelectedRows
    if (selectedRows.includes(id)) {
      newSelectedRows = selectedRows.filter(rowId => rowId !== id)
    } else {
      newSelectedRows = [...selectedRows, id]
    }
    
    setSelectedRows(newSelectedRows)
    setSelectAll(newSelectedRows.length === permissionData.length)
  }

  const handleRowClick = (item) => {
    setSelectedRowId(item.id)
    setSelectedPermission(item.permissionType)
  }

  const [expanded, setExpanded] = useState(true)

  const renderPermissionTree = () => {
    if (!selectedPermission) {
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
    if (!menuData) return null

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

  const handleCreateClick = () => {
    setIsCreateModalOpen(true)
  }

  const handleModalClose = () => {
    setIsCreateModalOpen(false)
    setNewPermission({
      permissionName: '',
      name: '',
      description: ''
    })
  }

  const handleCreatePermission = () => {
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
      const selectedItem = permissionData.find(item => item.id === selectedRowId)
      alert(`${selectedItem.permissionName}의 권한이 저장되었습니다.`)
    } else {
      alert('권한을 수정할 사용자를 선택해주세요.')
    }
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
            {/* 권한정보 헤더 */}
            <Box sx={styles.infoHeader}>
              <Box sx={styles.infoTitleSection}>
                <Typography variant="h6" sx={styles.subtitle}>
                  생성된 권한
                </Typography>
                <Typography variant="body2" sx={styles.count}>
                  총 {permissionData.length}개
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
                    <TableCell>권한명</TableCell>
                    <TableCell>권한 생성자</TableCell>
                    <TableCell>설명</TableCell>
                    <TableCell>생성시간</TableCell>
                    <TableCell>최종수정시간</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {permissionData.map((item) => (
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
                      <TableCell>{item.permissionName}</TableCell>
                      <TableCell>{item.creator}</TableCell>
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

export default WorkspaceGroupSettingPage
