import React, { useState } from 'react'
import {
  Container,
  ButtonGroup,
  Button,
  FormControl,
  Select as MuiSelect,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box
} from '@mui/material'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import ActionButton from '../../components/common/ActionButton'

const StatsUsagePage = () => {
  const [periodType, setPeriodType] = useState('monthly') // 'monthly' or 'yearly'
  const [startYear, setStartYear] = useState('2024')
  const [startMonth, setStartMonth] = useState('8')
  const [endYear, setEndYear] = useState('2025')
  const [endMonth, setEndMonth] = useState('8')
  const [itemsPerPage, setItemsPerPage] = useState('10')

  // HTML과 완전히 동일한 통계 데이터
  const monthlyStatsData = [
    {
      month: '2025.08',
      sttRequests: 64,
      sttRequestTime: '71:35:37',
      sttSuccess: 42,
      sttSuccessTime: '53:55:12',
      sttFail: 22,
      sttFailTime: '17:40:25',
      llmRequests: 65,
      llmTokens: '3,748,408',
      llmSuccess: 65,
      llmFail: 0
    },
    {
      month: '2025.07',
      sttRequests: 113,
      sttRequestTime: '57:44:54',
      sttSuccess: 85,
      sttSuccessTime: '53:53:14',
      sttFail: 28,
      sttFailTime: '03:51:40',
      llmRequests: 89,
      llmTokens: '4,075,449',
      llmSuccess: 89,
      llmFail: 0
    },
    {
      month: '2025.06',
      sttRequests: 111,
      sttRequestTime: '45:33:14',
      sttSuccess: 91,
      sttSuccessTime: '35:56:36',
      sttFail: 20,
      sttFailTime: '09:36:38',
      llmRequests: 105,
      llmTokens: '3,270,909',
      llmSuccess: 105,
      llmFail: 0
    },
    {
      month: '2025.05',
      sttRequests: 107,
      sttRequestTime: '68:29:07',
      sttSuccess: 102,
      sttSuccessTime: '66:31:17',
      sttFail: 5,
      sttFailTime: '01:57:49',
      llmRequests: 105,
      llmTokens: '5,932,629',
      llmSuccess: 105,
      llmFail: 0
    },
    {
      month: '2025.04',
      sttRequests: 288,
      sttRequestTime: '113:45:05',
      sttSuccess: 242,
      sttSuccessTime: '110:17:14',
      sttFail: 46,
      sttFailTime: '03:27:51',
      llmRequests: 263,
      llmTokens: '9,764,137',
      llmSuccess: 263,
      llmFail: 0
    },
    {
      month: '2025.03',
      sttRequests: 324,
      sttRequestTime: '145:22:18',
      sttSuccess: 298,
      sttSuccessTime: '140:15:33',
      sttFail: 26,
      sttFailTime: '05:06:45',
      llmRequests: 312,
      llmTokens: '11,245,672',
      llmSuccess: 312,
      llmFail: 0
    },
    {
      month: '2025.02',
      sttRequests: 198,
      sttRequestTime: '89:14:27',
      sttSuccess: 185,
      sttSuccessTime: '84:22:11',
      sttFail: 13,
      sttFailTime: '04:52:16',
      llmRequests: 201,
      llmTokens: '7,892,345',
      llmSuccess: 201,
      llmFail: 0
    },
    {
      month: '2025.01',
      sttRequests: 156,
      sttRequestTime: '67:43:52',
      sttSuccess: 142,
      sttSuccessTime: '62:18:34',
      sttFail: 14,
      sttFailTime: '05:25:18',
      llmRequests: 167,
      llmTokens: '6,234,891',
      llmSuccess: 167,
      llmFail: 0
    },
    {
      month: '2024.12',
      sttRequests: 278,
      sttRequestTime: '124:36:15',
      sttSuccess: 251,
      sttSuccessTime: '118:42:33',
      sttFail: 27,
      sttFailTime: '05:53:42',
      llmRequests: 289,
      llmTokens: '10,567,234',
      llmSuccess: 289,
      llmFail: 0
    },
    {
      month: '2024.11',
      sttRequests: 203,
      sttRequestTime: '91:28:41',
      sttSuccess: 189,
      sttSuccessTime: '86:15:22',
      sttFail: 14,
      sttFailTime: '05:13:19',
      llmRequests: 215,
      llmTokens: '8,123,456',
      llmSuccess: 215,
      llmFail: 0
    },
    {
      month: '2024.10',
      sttRequests: 234,
      sttRequestTime: '105:17:28',
      sttSuccess: 218,
      sttSuccessTime: '99:42:15',
      sttFail: 16,
      sttFailTime: '05:35:13',
      llmRequests: 245,
      llmTokens: '9,345,678',
      llmSuccess: 245,
      llmFail: 0
    },
    {
      month: '2024.09',
      sttRequests: 189,
      sttRequestTime: '84:52:37',
      sttSuccess: 175,
      sttSuccessTime: '79:18:22',
      sttFail: 14,
      sttFailTime: '05:34:15',
      llmRequests: 198,
      llmTokens: '7,456,789',
      llmSuccess: 198,
      llmFail: 0
    },
    {
      month: '2024.08',
      sttRequests: 167,
      sttRequestTime: '75:23:14',
      sttSuccess: 154,
      sttSuccessTime: '70:45:33',
      sttFail: 13,
      sttFailTime: '04:37:41',
      llmRequests: 178,
      llmTokens: '6,789,123',
      llmSuccess: 178,
      llmFail: 0
    }
  ]

  // 년도 옵션
  const yearOptions = ['2024년', '2025년']
  
  // 월 옵션
  const monthOptions = [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월'
  ]

  // 탭 변경 핸들러
  const handleTabChange = (type) => {
    setPeriodType(type)
  }

  // 조회 핸들러
  const handleQuery = () => {
    console.log('조회 실행:', { periodType, startYear, startMonth, endYear, endMonth })
  }

  // 엑셀 다운로드 핸들러
  const handleExcelDownload = () => {
    alert('엑셀 다운로드를 시작합니다.')
  }

  // 결과 텍스트 생성
  const getResultText = () => {
    if (periodType === 'monthly') {
      return `${startYear}년 ${String(startMonth).padStart(2, '0')}월 ~ ${endYear}년 ${String(endMonth).padStart(2, '0')}월 통계 결과`
    } else {
      return `${startYear}년 ~ ${endYear}년 통계 결과`
    }
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontSize: '24px', fontWeight: 600, color: '#111827' }}>
            워크스페이스 사용 통계
          </Typography>
        </Box>

        <Box>
          <Box sx={{ mb: 3 }}>
            <Box className="stats-head stats-head-row" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 1 }}>
              <Typography variant="h6" className="stats-title stats-title-bold" sx={{ fontWeight: 'bold' }}>
                전체 AI 사용량
              </Typography>
              <Box className="stats-tabs period-toggle-wrap" sx={{ display: 'inline-flex', ml: 2 }}>
                <ButtonGroup variant="outlined" size="small">
                  <Button 
                    variant={periodType === 'monthly' ? 'contained' : 'outlined'}
                  onClick={() => handleTabChange('monthly')}
                    sx={{ minWidth: '60px' }}
                  >
                    월간
                  </Button>
                  <Button 
                    variant={periodType === 'yearly' ? 'contained' : 'outlined'}
                  onClick={() => handleTabChange('yearly')}
                    sx={{ minWidth: '60px' }}
                  >
                    연간
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
            
            <Box className="period-row period-row-flex" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="body2" className="period-label" sx={{ mr: 0.5 }}>기간</Typography>
              <FormControl size="small">
                <MuiSelect
                  value={startYear + '년'}
                  onChange={(e) => setStartYear(e.target.value.replace('년', ''))}
                  variant="outlined"
                >
                  {yearOptions.map((year) => (
                    <MenuItem key={year} value={year}>{year}</MenuItem>
                  ))}
                </MuiSelect>
              </FormControl>
              {periodType === 'monthly' && (
                <FormControl size="small">
                  <MuiSelect
                    value={startMonth + '월'}
                    onChange={(e) => setStartMonth(e.target.value.replace('월', ''))}
                    variant="outlined"
                  >
                    {monthOptions.map((month, index) => (
                      <MenuItem key={month} value={month}>{month}</MenuItem>
                    ))}
                  </MuiSelect>
                </FormControl>
              )}
              <Typography variant="body2" className="period-separator" sx={{ mx: 0.5 }}>~</Typography>
              <FormControl size="small">
                <MuiSelect
                  value={endYear + '년'}
                  onChange={(e) => setEndYear(e.target.value.replace('년', ''))}
                  variant="outlined"
                >
                  {yearOptions.map((year) => (
                    <MenuItem key={year} value={year}>{year}</MenuItem>
                  ))}
                </MuiSelect>
              </FormControl>
              {periodType === 'monthly' && (
                <FormControl size="small">
                  <MuiSelect
                    value={endMonth + '월'}
                    onChange={(e) => setEndMonth(e.target.value.replace('월', ''))}
                    variant="outlined"
                  >
                    {monthOptions.map((month, index) => (
                      <MenuItem key={month} value={month}>{month}</MenuItem>
                    ))}
                  </MuiSelect>
                </FormControl>
              )}
              <Button 
                variant="contained" 
                className="btn-query" 
                onClick={handleQuery}
                sx={{ ml: 1, borderRadius: 2 }}
              >
                조회
              </Button>
              
              <FormControl size="small" sx={{ ml: 'auto' }}>
                <Select
                  value={itemsPerPage + '개씩 보기'}
                  onChange={(e) => setItemsPerPage(e.target.value.replace('개씩 보기', ''))}
                  variant="outlined"
                >
                  <MenuItem value="10개씩 보기">10개씩 보기</MenuItem>
                  <MenuItem value="20개씩 보기">20개씩 보기</MenuItem>
                  <MenuItem value="50개씩 보기">50개씩 보기</MenuItem>
                </Select>
              </FormControl>
              <Button 
                variant="outlined"
                className="btn" 
                onClick={handleExcelDownload}
                sx={{ 
                  ml: 1,
                  color: '#10B981',
                  borderColor: '#10B981',
                  '&:hover': {
                    backgroundColor: '#10B981',
                    color: 'white'
                  }
                }}
              >
                엑셀 다운로드
              </Button>
            </Box>
            
            <Typography variant="body2" className="result-text" sx={{ mb: 2 }}>
              {getResultText()}
            </Typography>
          </Box>

          <TableContainer component={Paper} sx={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>월</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>STT 요청 건</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>STT 요청 시간</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>STT 성공 건</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>STT 성공 시간</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>STT 실패 건</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>STT 실패 시간</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>LLM 요청 건</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>LLM 요청 Token</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>LLM 성공 건</TableCell>
                  <TableCell sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>LLM 실패 건</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {monthlyStatsData.slice(0, parseInt(itemsPerPage)).map((item, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{item.month}</TableCell>
                    <TableCell>{item.sttRequests}</TableCell>
                    <TableCell>{item.sttRequestTime}</TableCell>
                    <TableCell>{item.sttSuccess}</TableCell>
                    <TableCell>{item.sttSuccessTime}</TableCell>
                    <TableCell sx={{ color: '#EF4444' }}>{item.sttFail}</TableCell>
                    <TableCell>{item.sttFailTime}</TableCell>
                    <TableCell>{item.llmRequests}</TableCell>
                    <TableCell>{item.llmTokens}</TableCell>
                    <TableCell>{item.llmSuccess}</TableCell>
                    <TableCell sx={{ color: '#EF4444' }}>{item.llmFail}</TableCell>
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

export default StatsUsagePage
