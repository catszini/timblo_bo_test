import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  ButtonGroup
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const StatsUserPage = () => {
  const [dateRange, setDateRange] = useState('')
  const [searchCategory, setSearchCategory] = useState('전체')
  const [searchTerm, setSearchTerm] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기')

  // HTML과 동일한 사용자 데이터
  const userData = [
    {
      name: '한진희',
      email: 'jinhee@timbel.net',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    },
    {
      name: '호랑',
      email: 'luckytrack@timbel.net',
      meetingCount: 20,
      meetingTime: '05:15:58',
      llmToken: '2,389,270',
      llmRequests: 8
    },
    {
      name: '이세영',
      email: 'seyoung67@timbel.net',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    },
    {
      name: 'june',
      email: 'june@timbel.net',
      meetingCount: 7,
      meetingTime: '00:02:19',
      llmToken: '7,740',
      llmRequests: 1
    },
    {
      name: '이인호',
      email: 'mr.lee@timbel.net',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    },
    {
      name: '김해성',
      email: 'songkim1212@timbel.net',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    },
    {
      name: '팀벨_배인섭',
      email: 'bis0212@timbel.net',
      meetingCount: 1,
      meetingTime: '00:40:03',
      llmToken: '65,588',
      llmRequests: 1
    },
    {
      name: 'Dokyeong',
      email: 'dkyum@timbel.net',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    },
    {
      name: 'TimbelTest05',
      email: 'ahjilu@timbel.net',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    },
    {
      name: 'TimbelTest04',
      email: 'ksh0214@timbel.net',
      meetingCount: 0,
      meetingTime: '00:00:00',
      llmToken: 0,
      llmRequests: 0
    }
  ]

  const handleSearch = () => {
    console.log('검색:', { searchCategory, searchTerm, dateRange, itemsPerPage })
  }

  const handleExcelDownload = () => {
    alert('사용자별 통계 데이터를 엑셀로 다운로드합니다.')
  }

  return (
    <Layout className="page-stats-user">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">사용자별 통계</h1>
        </div>
        <div className="content-body">
          {/* 검색 영역 */}
          <div className="search-section">
            <div className="common-topbar">
              <div className="tb-left">
                <div className="date-range-wrap">
                  <span className="calendar-icon"></span>
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
                </div>
              </div>
              <div className="tb-right tb-right-full">
                <div className="right-tail">
                  <FormControl size="small" sx={{ minWidth: 120, mr: 1 }}>
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
                  <div className="combo-search">
                    <div className="combo-field">
                      <FormControl size="small" sx={{ minWidth: 100 }}>
                        <Select
                          value={searchCategory}
                          onChange={(e) => setSearchCategory(e.target.value)}
                          variant="outlined"
                        >
                          <MenuItem value="전체">전체</MenuItem>
                          <MenuItem value="이름">이름</MenuItem>
                          <MenuItem value="이메일">이메일</MenuItem>
                        </Select>
                      </FormControl>
                      <div className="divider"></div>
                      <div className="combo-input-wrap">
                        <span className="mag-icon">🔍</span>
                        <TextField
                          placeholder="검색어를 입력하세요"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          variant="outlined"
                          size="small"
                          sx={{ '& .MuiOutlinedInput-root': { border: 'none' } }}
                        />
                      </div>
                      <Button 
                        onClick={handleSearch}
                        variant="outlined"
                        sx={{ 
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
                    </div>
                  </div>
                  <Button 
                    onClick={handleExcelDownload}
                    variant="outlined"
                    sx={{ 
                      color: '#10B981',
                      borderColor: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      '&:hover': { 
                        bgcolor: '#f0fdf4',
                        borderColor: '#10B981'
                      }
                    }}
                  >
                    엑셀 다운로드
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* 테이블 */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>회의록 건수</th>
                  <th>회의록 시간</th>
                  <th>LLM 토큰</th>
                  <th>LLM 요청수</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.meetingCount}</td>
                    <td>{user.meetingTime}</td>
                    <td>{user.llmToken}</td>
                    <td>{user.llmRequests}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 페이징 */}
          <div className="pagination">
            <ButtonGroup variant="outlined" size="small">
              <Button disabled>‹</Button>
              <Button variant="contained">1</Button>
              <Button>2</Button>
              <Button>›</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default StatsUserPage
