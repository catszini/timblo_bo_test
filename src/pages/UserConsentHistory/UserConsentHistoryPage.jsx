import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const UserConsentHistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [dateRange, setDateRange] = useState('')

  return (
    <Layout className="page-user-consent-history">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">사용자 동의 이력</h1>
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
                    <MenuItem value="사용자">사용자</MenuItem>
                    <MenuItem value="동의서">동의서</MenuItem>
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
              </div>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>사용자</th>
                  <th>이메일</th>
                  <th>동의서명</th>
                  <th>동의 상태</th>
                  <th>동의 시간</th>
                  <th>IP 주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>김철수</td>
                  <td>kim@sktelecom.com</td>
                  <td>개인정보 수집 이용 동의</td>
                  <td>동의</td>
                  <td>2024-03-20 09:15:30</td>
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

export default UserConsentHistoryPage
