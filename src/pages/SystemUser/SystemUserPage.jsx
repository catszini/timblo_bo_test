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
  Chip,
  Avatar,
  TextField,
  InputAdornment
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import { SearchButton, DeleteButton, InviteButton, ResetButton } from '../../components/common/CommonButtons'
import Checkbox from '../../components/common/Checkbox'
import Pagination from '../../components/common/Pagination'
import { styles } from './SystemUserPage.styles'

const SystemUserPage = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [searchCondition, setSearchCondition] = useState('생성자')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState('10')
  const [currentPage, setCurrentPage] = useState(1)
  const [workspaceFilter, setWorkspaceFilter] = useState('전체')

  // 시스템 사용자 데이터
  const systemUserData = [
    {
      id: 1,
      workspace: { name: 'SK Telecom', icon: 'S', color: '#14B8A6' },
      email: 'admin@sktelecom.com',
      name: '김민수',
      status: 'online',
      permission: '시스템관리자',
      createdAt: '2024-01-10'
    },
    {
      id: 2,
      workspace: { name: 'SK Hynix', icon: 'S', color: '#6366F1' },
      email: 'manager@skhynix.com',
      name: '박지영',
      status: 'online',
      permission: '구성원',
      createdAt: '2024-02-15'
    },
    {
      id: 3,
      workspace: { name: 'SK E&S', icon: 'S', color: '#8B5CF6' },
      email: 'energy@skens.com',
      name: '이상훈',
      status: 'offline',
      permission: '구성원',
      createdAt: '2024-03-08'
    },
    {
      id: 4,
      workspace: { name: 'SK C&C', icon: 'S', color: '#3B82F6' },
      email: 'admin@skcc.com',
      name: '최은정',
      status: 'online',
      permission: '통계관리자',
      createdAt: '2024-04-12'
    },
    {
      id: 5,
      workspace: { name: 'SK Innovation', icon: 'S', color: '#10B981' },
      email: 'innovation@skinnovation.com',
      name: '김태호',
      status: 'online',
      permission: '구성원',
      createdAt: '2024-05-20'
    }
  ]

  const workspaceOptions = [
    { value: '전체', label: '전체' },
    { value: 'SK Telecom', label: 'SK Telecom' },
    { value: 'SK Hynix', label: 'SK Hynix' },
    { value: 'SK E&S', label: 'SK E&S' },
    { value: 'SK C&C', label: 'SK C&C' }
  ]

  const searchOptions = [
    { value: '생성자', label: '생성자' },
    { value: '이메일', label: '이메일' },
    { value: '권한', label: '권한' }
  ]

  const itemsPerPageOptions = [
    { value: '10', label: '10개씩 보기' },
    { value: '20', label: '20개씩 보기' },
    { value: '50', label: '50개씩 보기' }
  ]

  const permissionOptions = [
    { value: '시스템관리자', label: '시스템관리자' },
    { value: '통계관리자', label: '통계관리자' },
    { value: '구성원', label: '구성원' }
  ]

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectAll(true)
      setSelectedRows(systemUserData.map(user => user.id))
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

  const handlePermissionChange = (userId, newPermission) => {
    console.log('권한 변경:', userId, newPermission)
    alert(`권한이 "${newPermission}"(으)로 변경되었습니다.`)
  }

  const handlePasswordReset = (userId) => {
    console.log('비밀번호 초기화:', userId)
    alert('비밀번호가 초기화되었습니다.')
  }

  const handleDeleteUser = (userId) => {
    console.log('사용자 삭제:', userId)
    if (window.confirm('정말 삭제하시겠습니까?')) {
      alert('사용자가 삭제되었습니다.')
    }
  }

  const handleBulkDelete = () => {
    if (selectedRows.length === 0) {
      alert('삭제할 사용자를 선택해주세요.')
      return
    }
    if (window.confirm(`선택한 ${selectedRows.length}명의 사용자를 삭제하시겠습니까?`)) {
      alert(`${selectedRows.length}명의 사용자가 삭제되었습니다.`)
      setSelectedRows([])
      setSelectAll(false)
    }
  }

  const handleInvite = () => {
    alert('사용자 초대 기능')
  }

  const getStatusChip = (status) => {
    return status === 'online' ? (
      <Chip label="온라인" color="success" size="small" variant="outlined" />
    ) : (
      <Chip label="오프라인" color="default" size="small" variant="outlined" />
    )
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            사용자 관리
          </Typography>
        </Box>

        {/* 검색 툴바 */}
        <Box sx={styles.searchToolbar}>
          <Box sx={styles.leftSection}>
            <Typography variant="body2" sx={styles.totalCount}>
              총 {systemUserData.length}개
            </Typography>
            <Select
              value={workspaceFilter}
              onChange={(e) => setWorkspaceFilter(e.target.value)}
              options={workspaceOptions}
              width="180px"
            />
          </Box>

          <Box sx={styles.rightSection}>
            {/* 개수 선택 */}
            <Select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(e.target.value)}
              options={itemsPerPageOptions}
              width="150px"
            />

            {/* 검색 */}
            <Box sx={styles.searchBox}>
              <Select
                value={searchCondition}
                onChange={(e) => setSearchCondition(e.target.value)}
                options={searchOptions}
                width="120px"
                sx={styles.searchSelect}
              />
              <Box sx={styles.divider} />
              <TextField
                variant="outlined"
                size="small"
                placeholder="검색어를 입력하세요"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={styles.searchIcon} />
                    </InputAdornment>
                  ),
                }}
                sx={styles.searchInput}
              />
            </Box>

            <SearchButton />
            <DeleteButton onClick={handleBulkDelete} />
            <InviteButton onClick={handleInvite} />
          </Box>
        </Box>

        {/* 테이블 */}
        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" sx={styles.headerCell}>
                  <Checkbox checked={selectAll} onChange={handleSelectAll} />
                </TableCell>
                <TableCell sx={styles.headerCell}>워크스페이스</TableCell>
                <TableCell sx={styles.headerCell}>이메일</TableCell>
                <TableCell sx={styles.headerCell}>생성자</TableCell>
                <TableCell sx={styles.headerCell}>권한</TableCell>
                <TableCell sx={styles.headerCell}>생성시간</TableCell>
                <TableCell sx={styles.headerCell}>상태</TableCell>
                <TableCell sx={styles.headerCell}>비밀번호 초기화</TableCell>
                <TableCell sx={styles.headerCell}>삭제</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {systemUserData.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRows.includes(user.id)}
                      onChange={() => handleRowCheckbox(user.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={styles.workspaceCell}>
                      <Avatar sx={{ ...styles.avatar, bgcolor: user.workspace.color }}>
                        {user.workspace.icon}
                      </Avatar>
                      <Typography variant="body2">{user.workspace.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      component="a"
                      href={`mailto:${user.email}`}
                      sx={styles.emailLink}
                    >
                      {user.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={styles.userProfile}>
                      <Avatar sx={styles.userAvatar}>{user.name[0]}</Avatar>
                      <Typography variant="body2">{user.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={user.permission}
                      onChange={(e) => handlePermissionChange(user.id, e.target.value)}
                      options={permissionOptions}
                      width="160px"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{user.createdAt}</Typography>
                  </TableCell>
                  <TableCell>
                    {getStatusChip(user.status)}
                  </TableCell>
                  <TableCell>
                    <ResetButton
                      size="small"
                      onClick={() => handlePasswordReset(user.id)}
                    >
                      초기화
                    </ResetButton>
                  </TableCell>
                  <TableCell>
                    <DeleteButton
                      size="small"
                      onClick={() => handleDeleteUser(user.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* 페이지네이션 */}
        <Box sx={styles.paginationContainer}>
          <Pagination
            currentPage={currentPage}
            totalPages={3}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export default SystemUserPage
