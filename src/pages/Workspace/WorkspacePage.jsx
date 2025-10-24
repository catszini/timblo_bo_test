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
import UploadIcon from '@mui/icons-material/Upload'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import { SearchButton, FileUploadButton } from '../../components/common/CommonButtons'
import Checkbox from '../../components/common/Checkbox'
import Pagination from '../../components/common/Pagination'
import CountSpinner from '../../components/common/CountSpinner'
import { styles } from './WorkspacePage.styles'

const WorkspacePage = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [searchType, setSearchType] = useState('전체')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // 워크스페이스 데이터
  const workspaceData = [
    {
      id: 1,
      workspace: { name: 'SK Telecom', icon: 'S', color: '#14B8A6' },
      domain: 'www.sktelecom.ai',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 1, admin: 1, member: 0 },
      createdDate: '2025-09-01 14:30:15'
    },
    {
      id: 2,
      workspace: { name: 'SK Hynix', icon: 'S', color: '#6366F1' },
      domain: 'www.skhynix.ai',
      creator: '김철수',
      memberCount: 850,
      userStatus: { total: 5, admin: 2, member: 3 },
      createdDate: '2025-08-15 10:20:33'
    },
    {
      id: 3,
      workspace: { name: 'SK C&C', icon: 'S', color: '#F43F5E' },
      domain: 'www.skcc.ai',
      creator: '이영희',
      memberCount: 650,
      userStatus: { total: 3, admin: 1, member: 2 },
      createdDate: '2025-07-22 16:45:10'
    }
  ]

  const searchTypeOptions = [
    { value: '전체', label: '전체' },
    { value: '워크스페이스명', label: '워크스페이스명' },
    { value: '도메인', label: '도메인' },
    { value: '생성자', label: '생성자' }
  ]

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectAll(true)
      setSelectedRows(workspaceData.map(ws => ws.id))
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

  const handleLicenseUpload = () => {
    alert('라이선스 업로드 기능')
  }

  const handleSearch = () => {
    console.log('검색:', searchType, searchKeyword)
  }

  const renderUserStatus = (userStatus) => {
    const roles = []
    if (userStatus.admin > 0) {
      roles.push(
        <Chip
          key="admin"
          label={`관리자 ${userStatus.admin}`}
          size="small"
          variant="outlined"
          sx={{ mr: 0.5 }}
        />
      )
    }
    if (userStatus.member > 0) {
      roles.push(
        <Chip
          key="member"
          label={`멤버 ${userStatus.member}`}
          size="small"
          variant="outlined"
        />
      )
    }

    return (
      <Box sx={styles.userStatusCell}>
        <Typography variant="body2" sx={styles.userTotal}>
          총 {userStatus.total}명
        </Typography>
        {roles.length > 0 && (
          <Box sx={styles.userRoles}>
            {roles}
          </Box>
        )}
      </Box>
    )
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        {/* 헤더 */}
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            워크스페이스 관리
          </Typography>
        </Box>

        {/* 라이선스 정보 및 검색 */}
        <Paper sx={styles.infoPaper}>
          <Box sx={styles.infoSection}>
            <Box sx={styles.licenseInfo}>
              <Typography variant="body2" color="text.secondary">
                총 워크 스페이스 갯수: {workspaceData.length}개
              </Typography>
              <Typography variant="body2" color="text.secondary">
                라이센스 사용 인원: 83명 / 무제한
              </Typography>
              <FileUploadButton
                size="small"
                onClick={handleLicenseUpload}
                sx={{ ml: 2 }}
              >
                라이선스 업로드
              </FileUploadButton>
            </Box>

            <Box sx={styles.searchSection}>
              <Select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                options={searchTypeOptions}
                width="150px"
              />
              <TextField
                variant="outlined"
                size="small"
                placeholder="검색어를 입력해주세요."
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
              <SearchButton onClick={handleSearch} />
            </Box>
          </Box>
        </Paper>

        {/* 테이블 */}
        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" sx={styles.headerCell}>
                  <Checkbox checked={selectAll} onChange={handleSelectAll} />
                </TableCell>
                <TableCell sx={styles.headerCell}>워크스페이스</TableCell>
                <TableCell sx={styles.headerCell}>도메인</TableCell>
                <TableCell sx={styles.headerCell}>생성자</TableCell>
                <TableCell sx={styles.headerCell}>워크 스페이스 인원</TableCell>
                <TableCell sx={styles.headerCell}>FO에서 사용자 현황</TableCell>
                <TableCell sx={styles.headerCell}>생성시간</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workspaceData.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRows.includes(item.id)}
                      onChange={() => handleRowCheckbox(item.id)}
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
                  <TableCell>
                    <Typography
                      component="a"
                      href={`https://${item.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={styles.domainLink}
                    >
                      {item.domain}
                    </Typography>
                  </TableCell>
                  <TableCell>{item.creator}</TableCell>
                  <TableCell>
                    <CountSpinner value={item.memberCount} />
                  </TableCell>
                  <TableCell>
                    {renderUserStatus(item.userStatus)}
                  </TableCell>
                  <TableCell>{item.createdDate}</TableCell>
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

export default WorkspacePage
