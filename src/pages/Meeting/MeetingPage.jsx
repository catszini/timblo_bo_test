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
  TextField,
  Chip
} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import { SearchButton } from '../../components/common/CommonButtons'
import Pagination from '../../components/common/Pagination'
import { styles } from './MeetingPage.styles'

const MeetingPage = () => {
  const [pageSize, setPageSize] = useState('10')
  const [searchType, setSearchType] = useState('전체')
  const [searchTerm, setSearchTerm] = useState('')
  const [dateRange, setDateRange] = useState('')
  const [filter1, setFilter1] = useState('전체')
  const [filter2, setFilter2] = useState('전체')
  const [filter3, setFilter3] = useState('전체')
  const [currentPage, setCurrentPage] = useState(1)

  const meetingData = [
    {
      id: 1,
      type: '음성',
      title: '웨어러블 디바이스 및 음성 인식 기술 개발 회의',
      modifiedAt: '2025-08-08 13:52:48',
      modifier: '이상우',
      meetingTime: '2025-08-08 13:48:39',
      duration: '0:51:22',
      participants: '2명',
      shared: '0명'
    },
    {
      id: 2,
      type: '녹음',
      title: 'A.Biz_m_rec_20250808_125749.flac',
      modifiedAt: '2025-08-08 12:58:03',
      modifier: 'june',
      meetingTime: '2025-08-08 12:57:49',
      duration: '0:33:12',
      participants: '3명',
      shared: '1명'
    },
    {
      id: 3,
      type: '화상',
      title: '마케팅 전략 기획 회의',
      modifiedAt: '2025-08-07 16:22:15',
      modifier: '김민지',
      meetingTime: '2025-08-07 15:30:00',
      duration: '1:15:30',
      participants: '5명',
      shared: '3명'
    },
    {
      id: 4,
      type: '음성',
      title: '프로젝트 진행 상황 점검 회의',
      modifiedAt: '2025-08-07 10:45:32',
      modifier: '박성호',
      meetingTime: '2025-08-07 10:00:00',
      duration: '0:42:18',
      participants: '4명',
      shared: '2명'
    }
  ]

  const pageSizeOptions = [
    { value: '10', label: '10개씩 보기' },
    { value: '20', label: '20개씩 보기' },
    { value: '50', label: '50개씩 보기' }
  ]

  const searchTypeOptions = [
    { value: '전체', label: '전체' },
    { value: '제목', label: '제목' },
    { value: '작성자', label: '작성자' }
  ]

  const filter1Options = [
    { value: '전체', label: '전체' },
    { value: '음성', label: '음성' },
    { value: '녹음', label: '녹음' },
    { value: '화상', label: '화상' }
  ]

  const filter2Options = [{ value: '전체', label: '전체' }]
  const filter3Options = [{ value: '전체', label: '전체' }]

  const handleSearch = () => {
    console.log('Search:', { searchType, searchTerm, dateRange, filter1, filter2, filter3 })
  }

  const getTypeChip = (type) => {
    const colorMap = {
      '음성': 'primary',
      '녹음': 'success',
      '화상': 'warning'
    }
    return (
      <Chip 
        label={type} 
        color={colorMap[type] || 'default'} 
        size="small" 
        variant="outlined" 
      />
    )
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            회의록 이력
          </Typography>
        </Box>

        {/* 검색 툴바 */}
        <Box sx={styles.searchToolbar}>
          <Box sx={styles.leftSection}>
            <Typography variant="body2" sx={styles.totalCount}>
              총 {meetingData.length}개
            </Typography>
            <Box sx={styles.dateRangeWrap}>
              <CalendarTodayIcon sx={styles.calendarIcon} />
              <TextField
                variant="outlined"
                size="small"
                placeholder="날짜 범위를 선택하세요"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                InputProps={{ readOnly: true }}
                sx={styles.dateInput}
              />
            </Box>
          </Box>

          <Box sx={styles.rightSection}>
            <Select
              value={pageSize}
              onChange={(e) => setPageSize(e.target.value)}
              options={pageSizeOptions}
              width="150px"
            />
            <Select
              value={filter1}
              onChange={(e) => setFilter1(e.target.value)}
              options={filter1Options}
              width="120px"
            />
            <Select
              value={filter2}
              onChange={(e) => setFilter2(e.target.value)}
              options={filter2Options}
              width="120px"
            />
            <Select
              value={filter3}
              onChange={(e) => setFilter3(e.target.value)}
              options={filter3Options}
              width="120px"
            />
            <Select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              options={searchTypeOptions}
              width="120px"
            />
            <TextField
              variant="outlined"
              size="small"
              placeholder="검색어를 입력해주세요."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={styles.searchInput}
            />
            <SearchButton onClick={handleSearch} />
          </Box>
        </Box>

        {/* 테이블 */}
        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={styles.headerCell}>종류</TableCell>
                <TableCell sx={styles.headerCell}>회의록명</TableCell>
                <TableCell sx={styles.headerCell}>최종 수정일</TableCell>
                <TableCell sx={styles.headerCell}>수정자</TableCell>
                <TableCell sx={styles.headerCell}>회의 시간</TableCell>
                <TableCell sx={styles.headerCell}>소요 시간</TableCell>
                <TableCell sx={styles.headerCell}>참석자</TableCell>
                <TableCell sx={styles.headerCell}>공유</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {meetingData.map((meeting) => (
                <TableRow key={meeting.id} hover>
                  <TableCell>{getTypeChip(meeting.type)}</TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={styles.meetingTitle}>
                      {meeting.title}
                    </Typography>
                  </TableCell>
                  <TableCell>{meeting.modifiedAt}</TableCell>
                  <TableCell>{meeting.modifier}</TableCell>
                  <TableCell>{meeting.meetingTime}</TableCell>
                  <TableCell>{meeting.duration}</TableCell>
                  <TableCell>{meeting.participants}</TableCell>
                  <TableCell>{meeting.shared}</TableCell>
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

export default MeetingPage
