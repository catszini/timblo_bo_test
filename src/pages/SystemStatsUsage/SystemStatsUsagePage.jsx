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

const systemStatsData = [
  {
    month: '2025.08',
    sttRequests: 128,
    sttRequestTime: '143:11:14',
    sttSuccess: 84,
    sttSuccessTime: '107:50:24',
    sttFailed: 44,
    sttFailedTime: '35:20:50',
    llmRequests: 130,
    llmRequestToken: '7,496,816',
    llmSuccess: 130,
    llmFailed: 0
  },
  {
    month: '2025.07',
    sttRequests: 226,
    sttRequestTime: '115:29:48',
    sttSuccess: 170,
    sttSuccessTime: '107:46:28',
    sttFailed: 56,
    sttFailedTime: '07:43:20',
    llmRequests: 178,
    llmRequestToken: '8,150,898',
    llmSuccess: 178,
    llmFailed: 0
  },
  {
    month: '2025.06',
    sttRequests: 222,
    sttRequestTime: '91:06:28',
    sttSuccess: 182,
    sttSuccessTime: '71:53:12',
    sttFailed: 40,
    sttFailedTime: '19:13:16',
    llmRequests: 210,
    llmRequestToken: '6,541,818',
    llmSuccess: 210,
    llmFailed: 0
  },
  {
    month: '2025.05',
    sttRequests: 214,
    sttRequestTime: '136:58:14',
    sttSuccess: 204,
    sttSuccessTime: '133:02:34',
    sttFailed: 10,
    sttFailedTime: '03:55:40',
    llmRequests: 210,
    llmRequestToken: '11,865,258',
    llmSuccess: 210,
    llmFailed: 0
  },
  {
    month: '2025.04',
    sttRequests: 318,
    sttRequestTime: '178:41:22',
    sttSuccess: 298,
    sttSuccessTime: '168:12:08',
    sttFailed: 20,
    sttFailedTime: '10:29:14',
    llmRequests: 345,
    llmRequestToken: '12,458,762',
    llmSuccess: 342,
    llmFailed: 3
  },
  {
    month: '2025.03',
    sttRequests: 285,
    sttRequestTime: '156:33:45',
    sttSuccess: 268,
    sttSuccessTime: '147:22:18',
    sttFailed: 17,
    sttFailedTime: '09:11:27',
    llmRequests: 291,
    llmRequestToken: '9,874,563',
    llmSuccess: 289,
    llmFailed: 2
  },
  {
    month: '2025.02',
    sttRequests: 192,
    sttRequestTime: '98:15:32',
    sttSuccess: 184,
    sttSuccessTime: '94:08:15',
    sttFailed: 8,
    sttFailedTime: '04:07:17',
    llmRequests: 198,
    llmRequestToken: '7,632,891',
    llmSuccess: 198,
    llmFailed: 0
  },
  {
    month: '2025.01',
    sttRequests: 245,
    sttRequestTime: '124:18:56',
    sttSuccess: 232,
    sttSuccessTime: '118:45:33',
    sttFailed: 13,
    sttFailedTime: '05:33:23',
    llmRequests: 256,
    llmRequestToken: '8,945,123',
    llmSuccess: 254,
    llmFailed: 2
  },
  {
    month: '2024.12',
    sttRequests: 301,
    sttRequestTime: '165:42:18',
    sttSuccess: 289,
    sttSuccessTime: '158:30:45',
    sttFailed: 12,
    sttFailedTime: '07:11:33',
    llmRequests: 312,
    llmRequestToken: '13,287,456',
    llmSuccess: 310,
    llmFailed: 2
  },
  {
    month: '2024.11',
    sttRequests: 278,
    sttRequestTime: '142:55:12',
    sttSuccess: 265,
    sttSuccessTime: '136:22:08',
    sttFailed: 13,
    sttFailedTime: '06:33:04',
    llmRequests: 289,
    llmRequestToken: '10,456,789',
    llmSuccess: 287,
    llmFailed: 2
  },
  {
    month: '2024.10',
    sttRequests: 259,
    sttRequestTime: '135:18:44',
    sttSuccess: 248,
    sttSuccessTime: '129:44:22',
    sttFailed: 11,
    sttFailedTime: '05:34:22',
    llmRequests: 267,
    llmRequestToken: '9,123,654',
    llmSuccess: 265,
    llmFailed: 2
  },
  {
    month: '2024.09',
    sttRequests: 234,
    sttRequestTime: '118:26:33',
    sttSuccess: 225,
    sttSuccessTime: '114:12:18',
    sttFailed: 9,
    sttFailedTime: '04:14:15',
    llmRequests: 241,
    llmRequestToken: '8,567,321',
    llmSuccess: 240,
    llmFailed: 1
  }
]

const SystemStatsUsagePage = () => {
  const [statsData, setStatsData] = useState(systemStatsData)
  const [periodType, setPeriodType] = useState('monthly') // monthly or yearly
  const [startYear, setStartYear] = useState('2024년')
  const [startMonth, setStartMonth] = useState('8월')
  const [endYear, setEndYear] = useState('2025년')
  const [endMonth, setEndMonth] = useState('8월')
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기')

  const handlePeriodToggle = (type) => {
    setPeriodType(type)
  }

  const handleQuery = () => {
    console.log('Query stats:', { startYear, startMonth, endYear, endMonth })
  }

  const handleExcelDownload = () => {
    alert('엑셀 파일을 다운로드합니다.')
  }

  const getResultText = () => {
    return `${startYear} ${startMonth} ~ ${endYear} ${endMonth} 시스템 전체 통계 결과`
  }

  return (
    <Layout className="page-system-stats-usage stats-page stats-usage-page">
      <div className="content stats-page stats-usage-page">
        <div className="content-header">
          <h1 className="breadcrumb">전체 시스템 사용 통계</h1>
        </div>
        
        <div className="content-body">
          <div className="search-section">
            <div className="">
              <div className="tb-left">
                <div className="stats-head stats-head-row">
                  <div className="stats-title stats-title-bold">전체 AI 사용량 (시스템 전체)</div>
                  <ButtonGroup variant="outlined" size="small">
                    <Button 
                      variant={periodType === 'monthly' ? 'contained' : 'outlined'}
                      onClick={() => handlePeriodToggle('monthly')}
                      sx={{ minWidth: '60px' }}
                    >
                      월간
                    </Button>
                    <Button 
                      variant={periodType === 'yearly' ? 'contained' : 'outlined'}
                      onClick={() => handlePeriodToggle('yearly')}
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
                      <MenuItem value="2024년">2024년</MenuItem>
                      <MenuItem value="2025년">2025년</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <FormControl size="small" className="condition-select">
                    <Select
                      value={startMonth}
                      onChange={(e) => setStartMonth(e.target.value)}
                      variant="outlined"
                    >
                      {['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'].map(month => (
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
                      <MenuItem value="2024년">2024년</MenuItem>
                      <MenuItem value="2025년">2025년</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <FormControl size="small" className="condition-select">
                    <Select
                      value={endMonth}
                      onChange={(e) => setEndMonth(e.target.value)}
                      variant="outlined"
                    >
                      {['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'].map(month => (
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
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(e.target.value)}
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
            
            <div className="result-text">{getResultText()}</div>
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
                {statsData.map((stats, index) => (
                  <tr key={index}>
                    <td>{stats.month}</td>
                    <td>{stats.sttRequests}</td>
                    <td>{stats.sttRequestTime}</td>
                    <td>{stats.sttSuccess}</td>
                    <td>{stats.sttSuccessTime}</td>
                    <td style={{ color: '#EF4444' }}>{stats.sttFailed}</td>
                    <td>{stats.sttFailedTime}</td>
                    <td>{stats.llmRequests}</td>
                    <td>{stats.llmRequestToken}</td>
                    <td>{stats.llmSuccess}</td>
                    <td className={stats.llmFailed > 0 ? 'text-red' : ''}>{stats.llmFailed}</td>
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

export default SystemStatsUsagePage