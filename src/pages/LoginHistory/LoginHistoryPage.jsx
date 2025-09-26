import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const LoginHistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [dateRange, setDateRange] = useState('')

  return (
    <Layout className="page-login-history">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">사용자 접속 이력</h1>
        </div>
        <div className="content-body">
          <div className="search-section">
            <div className="common-topbar">
              <div className="tb-left">
                <div className="date-range-wrap">
                  <span className="calendar-icon">📅</span>
                  <TextField
                    className="date-range"
                    placeholder="날짜 범위를 선택하세요"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    variant="outlined"
                    size="small"
                    InputProps={{ readOnly: true }}
                  />
                </div>
              </div>
              <div className="tb-right">
                <FormControl size="small">
                  <Select variant="outlined" defaultValue="전체">
                    <MenuItem value="전체">전체</MenuItem>
                    <MenuItem value="이름">이름</MenuItem>
                    <MenuItem value="이메일">이메일</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  placeholder="검색어를 입력해주세요."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  variant="outlined"
                  size="small"
                />
                <Button variant="contained">조회</Button>
                <Button variant="outlined" style={{ color: '#10B981', borderColor: '#10B981' }}>
                  엑셀 다운로드
                </Button>
              </div>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>워크스페이스</th>
                  <th>사용자</th>
                  <th>이메일</th>
                  <th>접속 시간</th>
                  <th>로그아웃 시간</th>
                  <th>접속 시간(분)</th>
                  <th>IP 주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SK Telecom</td>
                  <td>김철수</td>
                  <td>kim@sktelecom.com</td>
                  <td>2024-03-20 09:15:30</td>
                  <td>2024-03-20 18:30:15</td>
                  <td>555분</td>
                  <td>192.168.1.100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LoginHistoryPage
