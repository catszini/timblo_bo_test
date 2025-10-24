import React, { useState } from 'react'
import {
  Container,
  ButtonGroup,
  Button,
  FormControl,
  MenuItem,
  TextField,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import SearchBar from '../../components/common/SearchBar'
import { ExcelDownloadButton } from '../../components/common/CommonButtons'

const SystemStatsUserPage = () => {
  const [dateRange, setDateRange] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기')

  // HTML과 동일한 사용자 데이터
  const userData = [
    {
      workspace: { name: 'SK Telecom', icon: 'S', color: 'color-teal' },
      name: '한진희',
      email: 'jinhee@sktelecom.com',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    },
    {
      workspace: { name: 'SK Telecom', icon: 'S', color: 'color-teal' },
      name: '호랑',
      email: 'luckytrack@sktelecom.com',
      meetingCount: 40,
      meetingTime: '10:31:56',
      llmToken: '4,778,540',
      llmRequests: 16
    },
    {
      workspace: { name: 'SK Hynix', icon: 'S', color: 'color-indigo' },
      name: '이세영',
      email: 'seyoung67@skhynix.com',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    },
    {
      workspace: { name: 'SK C&C', icon: 'S', color: 'color-blue' },
      name: 'june',
      email: 'june@skcc.com',
      meetingCount: 14,
      meetingTime: '00:04:38',
      llmToken: '15,480',
      llmRequests: 2
    },
    {
      workspace: { name: 'SK E&S', icon: 'S', color: 'color-rose' },
      name: '이인호',
      email: 'mr.lee@skens.com',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    },
    {
      workspace: { name: 'SK Innovation', icon: 'S', color: 'color-emerald' },
      name: '김해성',
      email: 'songkim1212@skinnovation.com',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    },
    {
      workspace: { name: 'SK Innovation', icon: 'S', color: 'color-emerald' },
      name: '배인섭',
      email: 'bis0212@skinnovation.com',
      meetingCount: 2,
      meetingTime: '01:20:06',
      llmToken: '131,176',
      llmRequests: 2
    },
    {
      workspace: { name: 'SK Networks', icon: 'S', color: 'color-violet' },
      name: 'Dokyeong',
      email: 'dkyum@sknetworks.co.kr',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    },
    {
      workspace: { name: 'SK Materials', icon: 'S', color: 'color-amber' },
      name: '김지현',
      email: 'ahjilu@skmaterials.com',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    },
    {
      workspace: { name: 'SK Biopharm', icon: 'S', color: 'color-cyan' },
      name: '김상훈',
      email: 'ksh0214@skbiopharm.com',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    }
  ]

  const handleSearch = (searchType, searchKeyword) => {
    console.log('검색:', { searchType, searchKeyword, dateRange, itemsPerPage })
  }

  const handleExcelDownload = () => {
    alert('시스템 전체 사용자별 통계 데이터를 엑셀로 다운로드합니다.')
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontSize: '24px', fontWeight: 600, color: '#111827' }}>
            사용자별 사용 통계
          </Typography>
        </Box>

        <Box>
          {/* 검색 영역 */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TextField
                  placeholder="날짜 범위를 선택하세요"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  variant="outlined"
                  size="small"
                  sx={{ width: '250px' }}
                  InputProps={{ 
                    readOnly: true,
                    startAdornment: (
                      <div style={{ 
                        marginRight: '8px', 
                        display: 'flex', 
                        alignItems: 'center',
                        width: '16px',
                        height: '16px',
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\'%3E%3Cpath d=\'M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75\' stroke=\'%23666666\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                        backgroundSize: '16px 16px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }} />
                    )
                  }}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                <SearchBar
                  searchOptions={['전체', '이름', '이메일', '워크스페이스']}
                  onSearch={handleSearch}
                  placeholder="검색어를 입력하세요"
                />

                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <Select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(e.target.value)}
                    variant="outlined"
                  >
                    <MenuItem value="10개씩 보기">10개씩 보기</MenuItem>
                    <MenuItem value="20개씩 보기">20개씩 보기</MenuItem>
                    <MenuItem value="50개씩 보기">50개씩 보기</MenuItem>
                  </Select>
                </FormControl>
                
                <ExcelDownloadButton onClick={handleExcelDownload} />
              </Box>
            </Box>
          </Box>

          {/* 테이블 */}
          <TableContainer component={Paper} sx={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
            <Table sx={{ tableLayout: 'fixed', width: '100%' }}>
              <colgroup>
                <col style={{ width: '18%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '13%' }} />
                <col style={{ width: '13%' }} />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>워크스페이스</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>이름</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>이메일</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>회의록 건수</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>회의록 시간</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>LLM 토큰</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>LLM 요청수</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((user, index) => (
                  <TableRow key={index} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            backgroundColor: user.workspace.color === 'color-teal' ? '#14B8A6' :
                                           user.workspace.color === 'color-blue' ? '#3B82F6' :
                                           user.workspace.color === 'color-purple' ? '#8B5CF6' : '#6B7280'
                          }}
                        >
                          {user.workspace.icon}
                        </Box>
                        <Typography variant="body2">{user.workspace.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.meetingCount}</TableCell>
                    <TableCell>{user.meetingTime}</TableCell>
                    <TableCell>{user.llmToken}</TableCell>
                    <TableCell>{user.llmRequests}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* 페이징 */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <ButtonGroup variant="outlined" size="small">
              <Button disabled>‹</Button>
              <Button variant="contained">1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>›</Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default SystemStatsUserPage