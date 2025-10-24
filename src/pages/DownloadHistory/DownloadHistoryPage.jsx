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
  TextField
} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import { SearchButton, ExcelDownloadButton } from '../../components/common/CommonButtons'
import { styles } from './DownloadHistoryPage.styles'

const DownloadHistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setSearchType] = useState('전체')
  const [dateRange, setDateRange] = useState('')

  // 다운로드 이력 데이터
  const downloadHistoryData = [
    {
      id: 1,
      workspace: 'SK Telecom',
      fileName: 'meeting_summary_2024_03_20.pdf',
      user: '김철수',
      email: 'kim@sktelecom.com',
      downloadTime: '2024-03-20 14:30:25',
      fileSize: '2.5MB',
      fileType: 'PDF'
    },
    {
      id: 2,
      workspace: 'SK Hynix',
      fileName: 'quarterly_report_Q1.docx',
      user: '이영희',
      email: 'lee@skhynix.com',
      downloadTime: '2024-03-20 11:15:42',
      fileSize: '1.8MB',
      fileType: 'DOCX'
    },
    {
      id: 3,
      workspace: 'SK C&C',
      fileName: 'project_plan_2024.xlsx',
      user: '박지민',
      email: 'park@skcc.com',
      downloadTime: '2024-03-20 09:45:18',
      fileSize: '3.2MB',
      fileType: 'XLSX'
    },
    {
      id: 4,
      workspace: 'SK Innovation',
      fileName: 'meeting_transcript.txt',
      user: '최동훈',
      email: 'choi@skinnovation.com',
      downloadTime: '2024-03-19 16:20:33',
      fileSize: '0.5MB',
      fileType: 'TXT'
    },
    {
      id: 5,
      workspace: 'SK Telecom',
      fileName: 'annual_summary_2023.pdf',
      user: '정수진',
      email: 'jung@sktelecom.com',
      downloadTime: '2024-03-19 13:55:10',
      fileSize: '4.1MB',
      fileType: 'PDF'
    }
  ]

  const searchTypeOptions = [
    { value: '전체', label: '전체' },
    { value: '파일명', label: '파일명' },
    { value: '사용자', label: '사용자' }
  ]

  const handleSearch = () => {
    console.log('검색:', searchType, searchTerm)
  }

  const handleExport = () => {
    alert('엑셀 다운로드 기능')
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            다운로드 이력
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
                <TableCell sx={styles.headerCell}>파일명</TableCell>
                <TableCell sx={styles.headerCell}>사용자</TableCell>
                <TableCell sx={styles.headerCell}>이메일</TableCell>
                <TableCell sx={styles.headerCell}>다운로드 시간</TableCell>
                <TableCell sx={styles.headerCell}>파일 크기</TableCell>
                <TableCell sx={styles.headerCell}>파일 형식</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {downloadHistoryData.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.workspace}</TableCell>
                  <TableCell>{row.fileName}</TableCell>
                  <TableCell>{row.user}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.downloadTime}</TableCell>
                  <TableCell>{row.fileSize}</TableCell>
                  <TableCell>{row.fileType}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Layout>
  )
}

export default DownloadHistoryPage
