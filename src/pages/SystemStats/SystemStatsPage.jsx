import React, { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem
} from '@mui/material'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import { styles } from './SystemStatsPage.styles'

const systemStatsData = [
  {
    id: 1,
    order: 1,
    workspace: '개발팀',
    user: '김개발',
    userInitial: '김',
    userColor: '#3B82F6',
    newCount: 45,
    editCount: 23,
    deleteCount: 5,
    totalCount: 73,
    lastActivity: '25-01-15 14:30'
  },
  {
    id: 2,
    order: 2,
    workspace: '디자인팀',
    user: '이디자인',
    userInitial: '이',
    userColor: '#10B981',
    newCount: 38,
    editCount: 19,
    deleteCount: 3,
    totalCount: 60,
    lastActivity: '25-01-14 16:45'
  },
  {
    id: 3,
    order: 3,
    workspace: '기획팀',
    user: '박기획',
    userInitial: '박',
    userColor: '#F97316',
    newCount: 31,
    editCount: 15,
    deleteCount: 2,
    totalCount: 48,
    lastActivity: '25-01-13 11:20'
  },
  {
    id: 4,
    order: 4,
    workspace: '개발팀',
    user: '최개발자',
    userInitial: '최',
    userColor: '#8B5CF6',
    newCount: 28,
    editCount: 12,
    deleteCount: 4,
    totalCount: 44,
    lastActivity: '25-01-12 09:15'
  }
]

const workspaceOptions = [
  { value: '전체 워크스페이스', label: '전체 워크스페이스' },
  { value: '개발팀', label: '개발팀' },
  { value: '디자인팀', label: '디자인팀' },
  { value: '기획팀', label: '기획팀' }
]

const activityOptions = [
  { value: '전체 활동', label: '전체 활동' },
  { value: '신규 생성', label: '신규 생성' },
  { value: '변경', label: '변경' },
  { value: '삭제', label: '삭제' }
]

const searchTypeOptions = [
  { value: '전체', label: '전체' },
  { value: '사용자명', label: '사용자명' },
  { value: '이메일', label: '이메일' }
]

const pageSizeOptions = [
  { value: '10개씩 보기', label: '10개씩 보기' },
  { value: '20개씩 보기', label: '20개씩 보기' },
  { value: '50개씩 보기', label: '50개씩 보기' }
]

const SystemStatsPage = () => {
  const [stats, setStats] = useState(systemStatsData)
  const [dateRange, setDateRange] = useState('')
  const [workspaceFilter, setWorkspaceFilter] = useState('전체 워크스페이스')
  const [activityFilter, setActivityFilter] = useState('전체 활동')
  const [searchType, setSearchType] = useState('전체')
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState('10개씩 보기')

  const handleSearch = () => {
    console.log('Search:', { dateRange, workspaceFilter, activityFilter, searchType, searchTerm })
  }

  const handleExcelDownload = () => {
    console.log('Excel download')
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        {/* 헤더 */}
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            통계
          </Typography>
        </Box>

        {/* 검색 영역 */}
        <Box sx={styles.searchSection}>
          <Box sx={styles.topBar}>
            <Box sx={styles.leftSection}>
              {/* 날짜 범위 선택 */}
              <Box sx={styles.dateRangeWrap}>
                <Box sx={styles.calendarIcon}>📅</Box>
                <TextField
                  placeholder="날짜 범위를 선택하세요"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  variant="outlined"
                  size="small"
                  sx={styles.dateInput}
                  InputProps={{ 
                    readOnly: true,
                    sx: { paddingLeft: '36px' }
                  }}
                />
              </Box>
              
              {/* 워크스페이스 필터 */}
              <Select
                value={workspaceFilter}
                onChange={(e) => setWorkspaceFilter(e.target.value)}
                options={workspaceOptions}
                width="180px"
              />
              
              {/* 활동 필터 */}
              <Select
                value={activityFilter}
                onChange={(e) => setActivityFilter(e.target.value)}
                options={activityOptions}
                width="140px"
              />
              
              {/* 검색 타입 */}
              <Select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                options={searchTypeOptions}
                width="120px"
              />
              
              {/* 검색어 입력 */}
              <TextField
                placeholder="검색어를 입력해주세요."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                variant="outlined"
                size="small"
                sx={styles.searchInput}
              />
              
              {/* 조회 버튼 */}
              <Button 
                variant="contained"
                onClick={handleSearch}
                sx={styles.searchButton}
              >
                조회
              </Button>
            </Box>
            
            <Box sx={styles.rightSection}>
              {/* 엑셀 다운로드 버튼 */}
              <Button 
                variant="contained"
                onClick={handleExcelDownload}
                sx={styles.excelButton}
              >
                엑셀 다운로드
              </Button>
              
              {/* 페이지 크기 선택 */}
              <Select
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value)}
                options={pageSizeOptions}
                width="140px"
              />
            </Box>
          </Box>
        </Box>

        {/* 테이블 */}
        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table sx={styles.table}>
            <TableHead>
              <TableRow sx={styles.headerRow}>
                <TableCell sx={styles.headerCell}>순번</TableCell>
                <TableCell sx={styles.headerCell}>워크스페이스</TableCell>
                <TableCell sx={styles.headerCell}>사용자</TableCell>
                <TableCell sx={styles.headerCell}>신규 생성</TableCell>
                <TableCell sx={styles.headerCell}>변경</TableCell>
                <TableCell sx={styles.headerCell}>삭제</TableCell>
                <TableCell sx={styles.headerCell}>총 활동</TableCell>
                <TableCell sx={styles.headerCell}>최근 활동일</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stats.map((stat) => (
                <TableRow key={stat.id} sx={styles.bodyRow}>
                  <TableCell sx={styles.bodyCell}>{stat.order}</TableCell>
                  <TableCell sx={styles.bodyCell}>
                    <Box sx={styles.workspaceBadge}>{stat.workspace}</Box>
                  </TableCell>
                  <TableCell sx={styles.bodyCell}>
                    <Box sx={styles.userIcon}>
                      <Box sx={{ ...styles.userInitial, bgcolor: stat.userColor }}>
                        {stat.userInitial}
                      </Box>
                      <Typography variant="body2">{stat.user}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={styles.bodyCell}>
                    <Box sx={{ ...styles.statsCount, ...styles.statsNew }}>
                      {stat.newCount}
                    </Box>
                  </TableCell>
                  <TableCell sx={styles.bodyCell}>
                    <Box sx={{ ...styles.statsCount, ...styles.statsEdit }}>
                      {stat.editCount}
                    </Box>
                  </TableCell>
                  <TableCell sx={styles.bodyCell}>
                    <Box sx={{ ...styles.statsCount, ...styles.statsDelete }}>
                      {stat.deleteCount}
                    </Box>
                  </TableCell>
                  <TableCell sx={styles.bodyCell}>
                    <Box sx={{ ...styles.statsCount, ...styles.statsTotal }}>
                      {stat.totalCount}
                    </Box>
                  </TableCell>
                  <TableCell sx={styles.bodyCell}>{stat.lastActivity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Layout>
  )
}

export default SystemStatsPage
