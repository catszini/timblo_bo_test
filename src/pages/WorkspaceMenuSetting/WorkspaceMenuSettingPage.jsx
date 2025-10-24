import React, { useState, useEffect } from 'react'
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
  Switch,
  IconButton
} from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import Layout from '../../components/Layout/Layout'
import { SaveButton, ResetButton, AddButton } from '../../components/common/CommonButtons'
import ActionButton from '../../components/common/ActionButton'
import { styles } from './WorkspaceMenuSettingPage.styles'

const WorkspaceMenuSettingPage = () => {
  const [menuItems, setMenuItems] = useState([])
  const [draggedItem, setDraggedItem] = useState(null)
  const [dragOverItem, setDragOverItem] = useState(null)

  // 초기 메뉴 데이터
  const initialMenuData = [
    { id: 1, name: '공통관리', isActive: true, url: '-' },
    { id: 2, name: '기능 권한 관리', isActive: true, url: '-' },
    { id: 3, name: '사용자 관리', isActive: true, url: '-' },
    { id: 4, name: '로고 이미지 관리', isActive: true, url: '-' },
    { id: 5, name: '회의 템플릿 관리', isActive: true, url: '-' },
    { id: 6, name: '프롬프트 관리', isActive: true, url: '-' },
    { id: 7, name: '동의서 관리', isActive: true, url: '-' },
    { id: 8, name: '캘린더 관리', isActive: true, url: '-' },
    { id: 9, name: '사용자 접속 이력', isActive: true, url: '-' },
    { id: 10, name: '다운로드 이력', isActive: true, url: '-' },
    { id: 11, name: '사용자 동의 이력', isActive: true, url: '-' },
    { id: 12, name: '설정변경 이력', isActive: true, url: '-' },
    { id: 13, name: '회의록 관리', isActive: true, url: '-' },
    { id: 14, name: '사전 관리', isActive: true, url: '-' },
    { id: 15, name: '공지사항 관리', isActive: true, url: '-' },
    { id: 16, name: '사용량 통계', isActive: true, url: '-' },
    { id: 17, name: '사용자별 통계', isActive: true, url: '-' }
  ]

  useEffect(() => {
    setMenuItems(initialMenuData)
  }, [])

  const handleDragStart = (e, item) => {
    setDraggedItem(item)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragEnd = () => {
    setDraggedItem(null)
    setDragOverItem(null)
  }

  const handleDragOver = (e, item) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setDragOverItem(item)
  }

  const handleDragLeave = () => {
    setDragOverItem(null)
  }

  const handleDrop = (e, targetItem) => {
    e.preventDefault()
    
    if (!draggedItem || draggedItem.id === targetItem.id) {
      return
    }

    const newMenuItems = [...menuItems]
    const draggedIndex = newMenuItems.findIndex(item => item.id === draggedItem.id)
    const targetIndex = newMenuItems.findIndex(item => item.id === targetItem.id)

    const [removed] = newMenuItems.splice(draggedIndex, 1)
    newMenuItems.splice(targetIndex, 0, removed)

    setMenuItems(newMenuItems)
    setDragOverItem(null)
  }

  const handleToggle = (id) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? { ...item, isActive: !item.isActive } : item
    ))
  }

  const handleReset = () => {
    setMenuItems(initialMenuData)
    alert('메뉴 순서가 초기화되었습니다.')
  }

  const handleAddSeparator = () => {
    const newSeparator = {
      id: Date.now(),
      name: '--- 구분선 ---',
      isActive: true,
      url: '-',
      isSeparator: true
    }
    setMenuItems([...menuItems, newSeparator])
  }

  const handleSave = () => {
    console.log('Saved menu order:', menuItems)
    alert('메뉴 설정이 저장되었습니다.')
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            메뉴리스트 관리
          </Typography>
        </Box>

        <Box sx={styles.menuContainer}>
          {/* 메뉴정보 헤더 */}
          <Box sx={styles.menuHeader}>
            <Box sx={styles.menuTitleSection}>
              <Typography variant="h6" sx={styles.subtitle}>
                메뉴 관리
              </Typography>
            </Box>
            <Box sx={styles.buttonGroup}>
              <ActionButton variant="outlined" onClick={handleReset}>
                초기화
              </ActionButton>
              <ActionButton variant="outlined" color="success" onClick={handleAddSeparator}>
                구분선 추가
              </ActionButton>
              <SaveButton onClick={handleSave} />
            </Box>
          </Box>

          {/* 드래그 가능한 메뉴 테이블 */}
          <TableContainer component={Paper} sx={styles.tableContainer}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...styles.headerCell, width: 50 }}></TableCell>
                  <TableCell sx={{ ...styles.headerCell, width: 250 }}>메뉴명</TableCell>
                  <TableCell sx={{ ...styles.headerCell, width: 100 }}>사용여부</TableCell>
                  <TableCell sx={{ ...styles.headerCell, width: 300 }}>URL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {menuItems.map((item) => (
                  <TableRow
                    key={item.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                    onDragEnd={handleDragEnd}
                    onDragOver={(e) => handleDragOver(e, item)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, item)}
                    sx={{
                      ...styles.tableRow,
                      ...(dragOverItem?.id === item.id && styles.dragOverRow),
                      ...(item.isSeparator && styles.separatorRow)
                    }}
                  >
                    <TableCell sx={styles.dragCell}>
                      <IconButton size="small" sx={styles.dragHandle}>
                        <DragIndicatorIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell sx={item.isSeparator ? styles.separatorText : {}}>
                      {item.name}
                    </TableCell>
                    <TableCell>
                      <Switch
                        checked={item.isActive}
                        onChange={() => handleToggle(item.id)}
                        size="small"
                        sx={styles.switch}
                      />
                    </TableCell>
                    <TableCell>{item.url}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Layout>
  )
}

export default WorkspaceMenuSettingPage
