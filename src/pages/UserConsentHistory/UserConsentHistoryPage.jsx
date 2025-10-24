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
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import { SearchButton, ExcelDownloadButton } from '../../components/common/CommonButtons'
import { styles } from './UserConsentHistoryPage.styles'

const UserConsentHistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setSearchType] = useState('전체')
  const [dateRange, setDateRange] = useState('')

  // 사용자 동의 이력 데이터
  const consentHistoryData = [
    {
      id: 1,
      workspace: 'SK Telecom',
      user: '김철수',
      email: 'kim@sktelecom.com',
      consentType: '개인정보 수집 및 이용 동의',
      consentDate: '2024-03-20 09:15:30',
      status: '동의',
      ipAddress: '192.168.1.100'
    },
    {
      id: 2,
      workspace: 'SK Hynix',
      user: '이영희',
      email: 'lee@skhynix.com',
      consentType: '서비스 이용약관 동의',
      consentDate: '2024-03-20 08:30:15',
      status: '동의',
      ipAddress: '192.168.1.101'
    },
    {
      id: 3,
      workspace: 'SK C&C',
      user: '박지민',
      email: 'park@skcc.com',
      consentType: '마케팅 정보 수신 동의',
      consentDate: '2024-03-19 17:45:22',
      status: '거부',
      ipAddress: '192.168.1.102'
    },
    {
      id: 4,
      workspace: 'SK Innovation',
      user: '최동훈',
      email: 'choi@skinnovation.com',
      consentType: '개인정보 제3자 제공 동의',
      consentDate: '2024-03-19 14:20:10',
      status: '동의',
      ipAddress: '192.168.1.103'
    },
    {
      id: 5,
      workspace: 'SK Telecom',
      user: '정수진',
      email: 'jung@sktelecom.com',
      consentType: '녹음 및 녹화 동의',
      consentDate: '2024-03-19 11:30:45',
      status: '동의',
      ipAddress: '192.168.1.104'
    }
  ]

  const searchTypeOptions = [
    { value: '전체', label: '전체' },
    { value: '사용자', label: '사용자' },
    { value: '동의서', label: '동의서' }
  ]

  const handleSearch = () => {
    console.log('검색:', searchType, searchTerm)
  }

  const handleExport = () => {
    alert('엑셀 다운로드 기능')
  }

  const getStatusColor = (status) => {
    return status === '동의' ? 'success' : 'error'
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            사용자 동의 이력
          </Typography>
        </Box>

        {/* 검색 영역 */}
        <Box sx={styles.searchSection}>
          <Box sx={styles.leftSection}>
            <Box sx={styles.dateRangeWrap}>
              <CalendarTodayIcon sx={styles.calendarIcon} />
              <TextField
                placeholder="날짜 범위를 선택하세요"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                variant="outlined"
                size="small"
                InputProps={{ readOnly: true }}
                sx={styles.dateInput}
              />
            </Box>
          </Box>

          <Box sx={styles.rightSection}>
            <Select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              options={searchTypeOptions}
              width="120px"
            />
            <TextField
              placeholder="검색어를 입력해주세요."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outlined"
              size="small"
              sx={styles.searchInput}
            />
            <SearchButton onClick={handleSearch} />
            <ExcelDownloadButton onClick={handleExport} />
          </Box>
        </Box>

        {/* 테이블 */}
        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={styles.headerCell}>워크스페이스</TableCell>
                <TableCell sx={styles.headerCell}>사용자</TableCell>
                <TableCell sx={styles.headerCell}>이메일</TableCell>
                <TableCell sx={styles.headerCell}>동의서 종류</TableCell>
                <TableCell sx={styles.headerCell}>동의 시간</TableCell>
                <TableCell sx={styles.headerCell}>동의 상태</TableCell>
                <TableCell sx={styles.headerCell}>IP 주소</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {consentHistoryData.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.workspace}</TableCell>
                  <TableCell>{row.user}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.consentType}</TableCell>
                  <TableCell>{row.consentDate}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.status}
                      color={getStatusColor(row.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{row.ipAddress}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Layout>
  )
}

export default UserConsentHistoryPage
