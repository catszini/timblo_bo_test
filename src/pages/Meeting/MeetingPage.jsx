import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const meetingData = [
  {
    id: 1,
    type: '음성',
    title: '웨어러블 디바이스 및 음성 인식 기술 개발 회의',
    modifiedAt: '25-08-08 13:52:48',
    modifier: '이상우',
    meetingTime: '25-08-08 13:48:39',
    duration: '0:51:22',
    participants: '2명',
    shared: '0명'
  },
  {
    id: 2,
    type: '녹음',
    title: 'A.Biz_m_rec_20250808_125749.flac',
    modifiedAt: '25-08-08 12:58:03',
    modifier: 'june',
    meetingTime: '25-08-08 12:57:49',
    duration: '0:33:12',
    participants: '3명',
    shared: '1명'
  },
  {
    id: 3,
    type: '화상',
    title: '마케팅 전략 기획 회의',
    modifiedAt: '25-08-07 16:22:15',
    modifier: '김민지',
    meetingTime: '25-08-07 15:30:00',
    duration: '1:15:30',
    participants: '5명',
    shared: '3명'
  },
  {
    id: 4,
    type: '음성',
    title: '프로젝트 진행 상황 점검 회의',
    modifiedAt: '25-08-07 10:45:32',
    modifier: '박성호',
    meetingTime: '25-08-07 10:00:00',
    duration: '0:42:18',
    participants: '4명',
    shared: '2명'
  }
]

const MeetingPage = () => {
  const [meetings, setMeetings] = useState(meetingData)
  const [pageSize, setPageSize] = useState(10)
  const [searchType, setSearchType] = useState('전체')
  const [searchTerm, setSearchTerm] = useState('')
  const [dateRange, setDateRange] = useState('')
  const [filter1, setFilter1] = useState('전체')
  const [filter2, setFilter2] = useState('전체')
  const [filter3, setFilter3] = useState('전체')

  const handleSearch = () => {
    console.log('Search:', { searchType, searchTerm, dateRange, filter1, filter2, filter3 })
  }

  return (
    <Layout className="page-meeting meeting-page">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">회의록 관리</h1>
        </div>

        <div className="content-body">
          {/* 검색 영역 */}
          <div className="search-section">
            <div className="common-topbar">
              <div className="tb-left">
                <div className="total-count">총 {meetings.length}개</div>
                <div className="date-range-wrap">
                  <span className="calendar-icon">📅</span>
                  <TextField
                    id="mt-range"
                    className="date-range"
                    placeholder="날짜 범위를 선택하세요"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    variant="outlined"
                    size="small"
                    InputProps={{ readOnly: true }}
                  />
                  <div className="range-panel" id="mt-panel">
                    <div className="calendar-range">
                      <div className="calendar" id="mt-cal-start"></div>
                      <div className="calendar" id="mt-cal-end"></div>
                    </div>
                    <div className="range-panel-info">
                      <span id="mt-picked">-</span>
                      <div className="range-actions">
                        <button className="btn-outline" id="mt-cancel">취소</button>
                        <button className="btn-submit" id="mt-apply">적용</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="tb-right">
                <FormControl size="small" className="condition-select">
                  <Select
                    value={pageSize}
                    onChange={(e) => setPageSize(e.target.value)}
                    variant="outlined"
                  >
                    <MenuItem value={10}>10개씩 보기</MenuItem>
                    <MenuItem value={20}>20개씩 보기</MenuItem>
                    <MenuItem value={50}>50개씩 보기</MenuItem>
                  </Select>
                </FormControl>
                
                <FormControl size="small" className="condition-select">
                  <Select
                    value={filter1}
                    onChange={(e) => setFilter1(e.target.value)}
                    variant="outlined"
                  >
                    <MenuItem value="전체">전체</MenuItem>
                    <MenuItem value="음성">음성</MenuItem>
                    <MenuItem value="녹음">녹음</MenuItem>
                    <MenuItem value="화상">화상</MenuItem>
                  </Select>
                </FormControl>
                
                <FormControl size="small" className="condition-select">
                  <Select
                    value={filter2}
                    onChange={(e) => setFilter2(e.target.value)}
                    variant="outlined"
                  >
                    <MenuItem value="전체">전체</MenuItem>
                  </Select>
                </FormControl>
                
                <FormControl size="small" className="condition-select">
                  <Select
                    value={filter3}
                    onChange={(e) => setFilter3(e.target.value)}
                    variant="outlined"
                  >
                    <MenuItem value="전체">전체</MenuItem>
                  </Select>
                </FormControl>
                
                <FormControl size="small" className="condition-select">
                  <Select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    variant="outlined"
                  >
                    <MenuItem value="전체">전체</MenuItem>
                    <MenuItem value="제목">제목</MenuItem>
                    <MenuItem value="작성자">작성자</MenuItem>
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
            </div>
          </div>

          {/* 테이블 */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>종류</th>
                  <th>회의록명</th>
                  <th>최종 수정일</th>
                  <th>수정자</th>
                  <th>회의 시간</th>
                  <th>소요 시간</th>
                  <th>참석자</th>
                  <th>공유</th>
                </tr>
              </thead>
              <tbody>
                {meetings.slice(0, pageSize).map((meeting) => (
                  <tr key={meeting.id}>
                    <td>{meeting.type}</td>
                    <td className="meeting-title">{meeting.title}</td>
                    <td>{meeting.modifiedAt}</td>
                    <td>{meeting.modifier}</td>
                    <td>{meeting.meetingTime}</td>
                    <td>{meeting.duration}</td>
                    <td>{meeting.participants}</td>
                    <td>{meeting.shared}</td>
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

export default MeetingPage
