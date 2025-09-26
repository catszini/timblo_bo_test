import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  Button,
  ButtonGroup,
  Box
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const statsData = [
  {
    id: 1,
    month: '2025.08',
    sttRequests: '64',
    sttRequestTime: '71:35:37',
    sttSuccess: '42',
    sttSuccessTime: '53:55:12',
    sttFailed: '22',
    sttFailedTime: '17:40:25',
    llmRequests: '65',
    llmRequestToken: '3,748,408',
    llmSuccess: '65',
    llmFailed: '0'
  },
  {
    id: 2,
    month: '2025.07',
    sttRequests: '113',
    sttRequestTime: '57:44:54',
    sttSuccess: '85',
    sttSuccessTime: '53:53:14',
    sttFailed: '28',
    sttFailedTime: '03:51:40',
    llmRequests: '89',
    llmRequestToken: '4,075,449',
    llmSuccess: '89',
    llmFailed: '0'
  },
  {
    id: 3,
    month: '2025.06',
    sttRequests: '111',
    sttRequestTime: '45:33:14',
    sttSuccess: '91',
    sttSuccessTime: '35:56:36',
    sttFailed: '20',
    sttFailedTime: '09:36:38',
    llmRequests: '98',
    llmRequestToken: '4,512,387',
    llmSuccess: '98',
    llmFailed: '0'
  },
  {
    id: 4,
    month: '2025.05',
    sttRequests: '95',
    sttRequestTime: '52:18:22',
    sttSuccess: '78',
    sttSuccessTime: '41:22:15',
    sttFailed: '17',
    sttFailedTime: '10:56:07',
    llmRequests: '82',
    llmRequestToken: '3,892,156',
    llmSuccess: '82',
    llmFailed: '0'
  }
]

const StatsUsagePage = () => {
  const [stats, setStats] = useState(statsData)
  const [periodType, setPeriodType] = useState('월간')
  const [startYear, setStartYear] = useState('2024년')
  const [startMonth, setStartMonth] = useState('8월')
  const [endYear, setEndYear] = useState('2025년')
  const [endMonth, setEndMonth] = useState('8월')
  const [pageSize, setPageSize] = useState('10개씩 보기')

  const handlePeriodToggle = (type) => {
    setPeriodType(type)
  }

  const handleQuery = () => {
    console.log('Query:', { periodType, startYear, startMonth, endYear, endMonth })
  }

  const handleExcelDownload = () => {
    console.log('Excel download')
  }

  const years = ['2024년', '2025년']
  const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']

  return (
    <Layout className="stats-usage-page">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">사용량 통계</h1>
        </div>

        <div className="content-body">
          <div className="search-section">
            <div className="">
              <div className="tb-left">
                <div className="stats-head stats-head-row" style={{ marginBottom: '7px' }}>
                  <div className="stats-title stats-title-bold">전체 AI 사용량</div>
                  <ButtonGroup variant="outlined" size="small">
                    <Button 
                      variant={periodType === '월간' ? 'contained' : 'outlined'}
                      onClick={() => handlePeriodToggle('월간')}
                      sx={{ minWidth: '60px' }}
                    >
                      월간
                    </Button>
                    <Button 
                      variant={periodType === '연간' ? 'contained' : 'outlined'}
                      onClick={() => handlePeriodToggle('연간')}
                      sx={{ minWidth: '60px' }}
                    >
                      연간
                    </Button>
                  </ButtonGroup>
                </div>
                
                <div className="period-row period-row-flex">
                  <span className="period-label">기간</span>
                  
                  <FormControl size="small" className="condition-select">
                    <Select
                      value={startYear}
                      onChange={(e) => setStartYear(e.target.value)}
                      variant="outlined"
                    >
                      {years.map(year => (
                        <MenuItem key={year} value={year}>{year}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  
                  <FormControl size="small" className="condition-select">
                    <Select
                      value={startMonth}
                      onChange={(e) => setStartMonth(e.target.value)}
                      variant="outlined"
                    >
                      {months.map(month => (
                        <MenuItem key={month} value={month}>{month}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  
                  <span className="period-separator">~</span>
                  
                  <FormControl size="small" className="condition-select">
                    <Select
                      value={endYear}
                      onChange={(e) => setEndYear(e.target.value)}
                      variant="outlined"
                    >
                      {years.map(year => (
                        <MenuItem key={year} value={year}>{year}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  
                  <FormControl size="small" className="condition-select">
                    <Select
                      value={endMonth}
                      onChange={(e) => setEndMonth(e.target.value)}
                      variant="outlined"
                    >
                      {months.map(month => (
                        <MenuItem key={month} value={month}>{month}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  
                  <Button 
                    variant="outlined" 
                    onClick={handleQuery}
                    sx={{ 
                      ml: 1,
                      bgcolor: 'primary.main',
                      color: 'white',
                      borderColor: 'primary.main',
                      '&:hover': { 
                        bgcolor: 'primary.dark',
                        borderColor: 'primary.dark'
                      }
                    }}
                  >
                    조회
                  </Button>
                  
                  <div className="tb-right">
                    <FormControl size="small" className="condition-select">
                      <Select
                        value={pageSize}
                        onChange={(e) => setPageSize(e.target.value)}
                        variant="outlined"
                      >
                        <MenuItem value="10개씩 보기">10개씩 보기</MenuItem>
                        <MenuItem value="20개씩 보기">20개씩 보기</MenuItem>
                        <MenuItem value="50개씩 보기">50개씩 보기</MenuItem>
                      </Select>
                    </FormControl>
                    
                    <Button 
                      variant="outlined"
                      onClick={handleExcelDownload}
                      sx={{ 
                        ml: 1,
                        bgcolor: 'success.main',
                        color: 'white',
                        borderColor: 'success.main',
                        '&:hover': { 
                          bgcolor: 'success.dark',
                          borderColor: 'success.dark'
                        }
                      }}
                    >
                      엑셀 다운로드
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="result-text">
              {startYear} {startMonth} ~ {endYear} {endMonth} 통계 결과
            </div>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>월</th>
                  <th>STT 요청 건</th>
                  <th>STT 요청 시간</th>
                  <th>STT 성공 건</th>
                  <th>STT 성공 시간</th>
                  <th>STT 실패 건</th>
                  <th>STT 실패 시간</th>
                  <th>LLM 요청 건</th>
                  <th>LLM 요청 Token</th>
                  <th>LLM 성공 건</th>
                  <th>LLM 실패 건</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((stat) => (
                  <tr key={stat.id}>
                    <td>{stat.month}</td>
                    <td>{stat.sttRequests}</td>
                    <td>{stat.sttRequestTime}</td>
                    <td>{stat.sttSuccess}</td>
                    <td>{stat.sttSuccessTime}</td>
                    <td style={{ color: '#EF4444' }}>{stat.sttFailed}</td>
                    <td>{stat.sttFailedTime}</td>
                    <td>{stat.llmRequests}</td>
                    <td>{stat.llmRequestToken}</td>
                    <td>{stat.llmSuccess}</td>
                    <td className="text-red">{stat.llmFailed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default StatsUsagePage
