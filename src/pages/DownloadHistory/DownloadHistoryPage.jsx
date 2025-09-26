import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const DownloadHistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [dateRange, setDateRange] = useState('')

  return (
    <Layout className="page-download-history">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">다운로드 이력</h1>
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
                    <MenuItem value="파일명">파일명</MenuItem>
                    <MenuItem value="사용자">사용자</MenuItem>
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
                  <th>파일명</th>
                  <th>파일유형</th>
                  <th>다운로드 시간</th>
                  <th>파일크기</th>
                  <th>IP 주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>김철수</td>
                  <td>회의록_20240320.pdf</td>
                  <td>PDF</td>
                  <td>2024-03-20 14:30:15</td>
                  <td>2.5MB</td>
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

export default DownloadHistoryPage
