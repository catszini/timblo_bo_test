import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const systemStatsData = [
  {
    id: 1,
    order: 1,
    workspace: '개발팀',
    user: '김개발',
    userInitial: '김',
    userColor: 'color-blue',
    newCount: 45,
    editCount: 23,
    deleteCount: 5,
    totalCount: 73,
    lastActivity: '25-01-15 14:30'
  },
  {
    id: 2,
    order: 2,
    workspace: '디자인팀',
    user: '이디자인',
    userInitial: '이',
    userColor: 'color-green',
    newCount: 38,
    editCount: 19,
    deleteCount: 3,
    totalCount: 60,
    lastActivity: '25-01-14 16:45'
  },
  {
    id: 3,
    order: 3,
    workspace: '기획팀',
    user: '박기획',
    userInitial: '박',
    userColor: 'color-orange',
    newCount: 31,
    editCount: 15,
    deleteCount: 2,
    totalCount: 48,
    lastActivity: '25-01-13 11:20'
  },
  {
    id: 4,
    order: 4,
    workspace: '개발팀',
    user: '최개발자',
    userInitial: '최',
    userColor: 'color-purple',
    newCount: 28,
    editCount: 12,
    deleteCount: 4,
    totalCount: 44,
    lastActivity: '25-01-12 09:15'
  }
]

const SystemStatsPage = () => {
  const [stats, setStats] = useState(systemStatsData)
  const [dateRange, setDateRange] = useState('')
  const [workspaceFilter, setWorkspaceFilter] = useState('전체 워크스페이스')
  const [activityFilter, setActivityFilter] = useState('전체 활동')
  const [searchType, setSearchType] = useState('전체')
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState('10개씩 보기')

  const handleSearch = () => {
    console.log('Search:', { dateRange, workspaceFilter, activityFilter, searchType, searchTerm })
  }

  const handleExcelDownload = () => {
    console.log('Excel download')
  }

  return (
    <Layout className="page-system-stats stats-page">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">통계</h1>
        </div>

        <div className="content-body">
          {/* 검색 영역 */}
          <div className="search-section">
            <div className="common-topbar">
              <div className="tb-left">
                <div className="date-range-wrap">
                  <span className="calendar-icon">📅</span>
                  <TextField
                    id="stats-range"
                    className="date-range"
                    placeholder="날짜 범위를 선택하세요"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    variant="outlined"
                    size="small"
                    InputProps={{ readOnly: true }}
                  />
                  <div className="range-panel" id="stats-panel">
                    <div className="calendar-range">
                      <div className="calendar" id="stats-cal-start"></div>
                      <div className="calendar" id="stats-cal-end"></div>
                    </div>
                    <div className="range-panel-info">
                      <span id="stats-picked">-</span>
                      <div className="range-actions">
                        <button className="btn-outline" id="stats-cancel">취소</button>
                        <button className="btn-submit" id="stats-apply">적용</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <FormControl size="small" className="condition-select">
                  <Select
                    value={workspaceFilter}
                    onChange={(e) => setWorkspaceFilter(e.target.value)}
                    variant="outlined"
                  >
                    <MenuItem value="전체 워크스페이스">전체 워크스페이스</MenuItem>
                    <MenuItem value="개발팀">개발팀</MenuItem>
                    <MenuItem value="디자인팀">디자인팀</MenuItem>
                    <MenuItem value="기획팀">기획팀</MenuItem>
                  </Select>
                </FormControl>
                
                <FormControl size="small" className="condition-select">
                  <Select
                    value={activityFilter}
                    onChange={(e) => setActivityFilter(e.target.value)}
                    variant="outlined"
                  >
                    <MenuItem value="전체 활동">전체 활동</MenuItem>
                    <MenuItem value="신규 생성">신규 생성</MenuItem>
                    <MenuItem value="변경">변경</MenuItem>
                    <MenuItem value="삭제">삭제</MenuItem>
                  </Select>
                </FormControl>
                
                <FormControl size="small" className="condition-select">
                  <Select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    variant="outlined"
                  >
                    <MenuItem value="전체">전체</MenuItem>
                    <MenuItem value="사용자명">사용자명</MenuItem>
                    <MenuItem value="이메일">이메일</MenuItem>
                  </Select>
                </FormControl>
                
                <TextField
                  placeholder="검색어를 입력해주세요."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  variant="outlined"
                  size="small"
                  className="search-input-field"
                />
                
                <Button 
                  variant="contained"
                  onClick={handleSearch}
                  className="search-btn"
                >
                  조회
                </Button>
              </div>
              
              <div className="tb-right tb-right-full">
                <div className="right-tail">
                  <button 
                    className="btn"
                    style={{
                      backgroundColor: '#10B981',
                      color: 'white',
                      border: '1px solid #10B981',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onClick={handleExcelDownload}
                  >
                    엑셀 다운로드
                  </button>
                  
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
                </div>
              </div>
            </div>
          </div>

          {/* 테이블 */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>순번</th>
                  <th>워크스페이스</th>
                  <th>사용자</th>
                  <th>신규 생성</th>
                  <th>변경</th>
                  <th>삭제</th>
                  <th>총 활동</th>
                  <th>최근 활동일</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((stat) => (
                  <tr key={stat.id}>
                    <td>{stat.order}</td>
                    <td>
                      <span className="workspace-badge">{stat.workspace}</span>
                    </td>
                    <td>
                      <div className="user-icon">
                        <div className={`user-initial ${stat.userColor}`}>{stat.userInitial}</div>
                        <span>{stat.user}</span>
                      </div>
                    </td>
                    <td>
                      <span className="stats-count new">{stat.newCount}</span>
                    </td>
                    <td>
                      <span className="stats-count edit">{stat.editCount}</span>
                    </td>
                    <td>
                      <span className="stats-count delete">{stat.deleteCount}</span>
                    </td>
                    <td>
                      <span className="stats-count total">{stat.totalCount}</span>
                    </td>
                    <td>{stat.lastActivity}</td>
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

export default SystemStatsPage
