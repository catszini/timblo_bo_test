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
  TextField,
  Grid
} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import { SearchButton } from '../../components/common/CommonButtons'
import Pagination from '../../components/common/Pagination'
import { styles } from './SettingChangeHistoryPage.styles'

const SettingChangeHistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [dateRange, setDateRange] = useState('2025년 08월 12일 - 2025년 08월 19일')
  const [itemsPerPage, setItemsPerPage] = useState('10')
  const [searchCategory, setSearchCategory] = useState('전체')
  const [selectedRow, setSelectedRow] = useState(null)
  const [beforeContent, setBeforeContent] = useState('항목을 선택하면 변경전 내역이 표시됩니다.')
  const [afterContent, setAfterContent] = useState('항목을 선택하면 변경후 내역이 표시됩니다.')
  const [currentPage, setCurrentPage] = useState(1)

  const historyData = [
    { id: 1, name: '관리자', ip: '192.168.1.100', screen: '사용자 관리', item: '권한 설정', time: '2024-03-15 14:30:25' },
    { id: 2, name: '김철수', ip: '192.168.1.101', screen: '메뉴 관리', item: '메뉴 순서', time: '2024-03-15 13:45:12' },
    { id: 3, name: '이영희', ip: '192.168.1.102', screen: '권한 관리', item: '사용자 권한', time: '2024-03-15 12:20:45' },
    { id: 4, name: '박지민', ip: '192.168.1.103', screen: '엔진 관리', item: '엔진 설정', time: '2024-03-15 11:15:30' },
    { id: 5, name: '최동훈', ip: '192.168.1.104', screen: '통계', item: '보고서 설정', time: '2024-03-15 10:30:18' }
  ]

  const detailData = {
    1: {
      before: `권한 설정: 일반 사용자\n접근 권한: 읽기 전용\n메뉴 접근: 제한됨\n파일 다운로드: 불가능`,
      after: `권한 설정: 관리자\n접근 권한: 읽기/쓰기\n메뉴 접근: 전체 허용\n파일 다운로드: 가능`
    },
    2: {
      before: `메뉴 순서:\n1. 회의록 관리\n2. 템플릿 관리\n3. 프롬프트 관리\n4. 이력 관리`,
      after: `메뉴 순서:\n1. 템플릿 관리\n2. 회의록 관리\n3. 프롬프트 관리\n4. 이력 관리`
    }
  }

  const itemsPerPageOptions = [
    { value: '10', label: '10개씩 보기' },
    { value: '20', label: '20개씩 보기' },
    { value: '50', label: '50개씩 보기' }
  ]

  const searchCategoryOptions = [
    { value: '전체', label: '전체' },
    { value: '이름', label: '이름' },
    { value: '화면', label: '화면' },
    { value: '항목', label: '항목' }
  ]

  const handleRowClick = (row) => {
    setSelectedRow(row.id)
    const detail = detailData[row.id]
    if (detail) {
      setBeforeContent(detail.before)
      setAfterContent(detail.after)
    } else {
      setBeforeContent('상세 변경 내역이 없습니다.')
      setAfterContent('상세 변경 내역이 없습니다.')
    }
  }

  const handleSearch = () => {
    console.log('검색:', { searchCategory, searchTerm, dateRange, itemsPerPage })
  }

  useEffect(() => {
    if (historyData.length > 0) {
      handleRowClick(historyData[0])
    }
  }, [])

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            설정변경 이력
          </Typography>
        </Box>

        {/* 검색 툴바 */}
        <Box sx={styles.searchToolbar}>
          <Box sx={styles.leftSection}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="2025년 08월 12일 - 2025년 08월 19일"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <CalendarTodayIcon sx={{ mr: 1, color: '#666', fontSize: 16 }} />
                )
              }}
              sx={{ width: '250px' }}
            />
          </Box>

          <Box sx={styles.rightSection}>
            <Select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(e.target.value)}
              options={itemsPerPageOptions}
              width="140px"
            />
            <Select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              options={searchCategoryOptions}
              width="120px"
            />
            <TextField
              variant="outlined"
              size="small"
              placeholder="검색어를 입력해주세요."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: '200px' }}
            />
            <SearchButton onClick={handleSearch} />
          </Box>
        </Box>

        {/* 테이블 */}
        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={styles.headerCell}>이름</TableCell>
                <TableCell sx={styles.headerCell}>IP</TableCell>
                <TableCell sx={styles.headerCell}>화면</TableCell>
                <TableCell sx={styles.headerCell}>항목</TableCell>
                <TableCell sx={styles.headerCell}>시간</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {historyData.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  selected={selectedRow === row.id}
                  onClick={() => handleRowClick(row)}
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.ip}</TableCell>
                  <TableCell>{row.screen}</TableCell>
                  <TableCell>{row.item}</TableCell>
                  <TableCell>{row.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* 변경 내역 비교 */}
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={6}>
            <Paper sx={styles.changeBox}>
              <Typography variant="h6" sx={styles.changeTitle}>
                변경 전
              </Typography>
              <Box sx={styles.changeContent}>
                <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                  {beforeContent}
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper sx={styles.changeBox}>
              <Typography variant="h6" sx={styles.changeTitle}>
                변경 후
              </Typography>
              <Box sx={styles.changeContent}>
                <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                  {afterContent}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

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

export default SettingChangeHistoryPage
