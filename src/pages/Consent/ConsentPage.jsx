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
  Switch,
  TextField,
  Chip
} from '@mui/material'
import Layout from '../../components/Layout/Layout'
import { SearchButton, CreateButton, EditButton, DeleteButton } from '../../components/common/CommonButtons'
import Pagination from '../../components/common/Pagination'
import { styles } from './ConsentPage.styles'

const ConsentPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const consentData = [
    {
      id: 1,
      name: '개인정보 수집 이용 동의',
      version: 'v1.2',
      required: true,
      active: true,
      createdAt: '2024-02-20'
    },
    {
      id: 2,
      name: '서비스 이용약관',
      version: 'v2.1',
      required: true,
      active: true,
      createdAt: '2024-01-15'
    },
    {
      id: 3,
      name: '마케팅 정보 수신 동의',
      version: 'v1.0',
      required: false,
      active: true,
      createdAt: '2023-12-10'
    },
    {
      id: 4,
      name: '제3자 정보 제공 동의',
      version: 'v1.5',
      required: false,
      active: false,
      createdAt: '2023-11-05'
    },
    {
      id: 5,
      name: '위치정보 이용 동의',
      version: 'v1.1',
      required: false,
      active: true,
      createdAt: '2023-10-20'
    }
  ]

  const handleSearch = () => {
    console.log('검색:', searchTerm)
  }

  const handleCreate = () => {
    alert('동의서 생성 기능')
  }

  const handleEdit = (id) => {
    console.log('수정:', id)
    alert('동의서 수정 기능')
  }

  const handleDelete = (id) => {
    console.log('삭제:', id)
    if (window.confirm('정말 삭제하시겠습니까?')) {
      alert('동의서가 삭제되었습니다.')
    }
  }

  const handleToggle = (id) => {
    console.log('사용여부 토글:', id)
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            동의서 관리
          </Typography>
        </Box>

        {/* 검색 툴바 */}
        <Box sx={styles.searchToolbar}>
          <Box sx={styles.leftSection}>
            <Typography variant="body2" sx={styles.totalCount}>
              총 {consentData.length}개
            </Typography>
          </Box>

          <Box sx={styles.rightSection}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="동의서명을 입력해주세요."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={styles.searchInput}
            />
            <SearchButton onClick={handleSearch} />
            <CreateButton onClick={handleCreate} />
          </Box>
        </Box>

        {/* 테이블 */}
        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={styles.headerCell}>동의서명</TableCell>
                <TableCell sx={styles.headerCell}>버전</TableCell>
                <TableCell sx={styles.headerCell}>필수여부</TableCell>
                <TableCell sx={styles.headerCell}>사용여부</TableCell>
                <TableCell sx={styles.headerCell}>생성일</TableCell>
                <TableCell sx={styles.headerCell}>관리</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {consentData.map((consent) => (
                <TableRow key={consent.id} hover>
                  <TableCell>{consent.name}</TableCell>
                  <TableCell>{consent.version}</TableCell>
                  <TableCell>
                    <Chip
                      label={consent.required ? '필수' : '선택'}
                      color={consent.required ? 'error' : 'default'}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={consent.active}
                      onChange={() => handleToggle(consent.id)}
                      size="small"
                      color="primary"
                    />
                  </TableCell>
                  <TableCell>{consent.createdAt}</TableCell>
                  <TableCell>
                    <Box sx={styles.actionButtons}>
                      <EditButton
                        size="small"
                        onClick={() => handleEdit(consent.id)}
                      />
                      <DeleteButton
                        size="small"
                        onClick={() => handleDelete(consent.id)}
                      />
                    </Box>
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
            totalPages={2}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export default ConsentPage
