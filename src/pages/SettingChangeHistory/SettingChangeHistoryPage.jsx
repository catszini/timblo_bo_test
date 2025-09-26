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

const SettingChangeHistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [dateRange, setDateRange] = useState('2025년 08월 12일 - 2025년 08월 19일')
  const [itemsPerPage, setItemsPerPage] = useState('10')
  const [searchCategory, setSearchCategory] = useState('전체')
  const [selectedRow, setSelectedRow] = useState(null)
  const [beforeContent, setBeforeContent] = useState('항목을 선택하면 변경전 내역이 표시됩니다.')
  const [afterContent, setAfterContent] = useState('항목을 선택하면 변경후 내역이 표시됩니다.')

  // 설정 변경 이력 데이터
  const historyData = [
    { id: 1, name: '관리자', ip: '192.168.1.100', screen: '사용자 관리', item: '권한 설정', time: '2024-03-15 14:30:25' },
    { id: 2, name: '김철수', ip: '192.168.1.101', screen: '메뉴 관리', item: '메뉴 순서', time: '2024-03-15 13:45:12' },
    { id: 3, name: '이영희', ip: '192.168.1.102', screen: '권한 관리', item: '사용자 권한', time: '2024-03-15 12:20:45' },
    { id: 4, name: '박지민', ip: '192.168.1.103', screen: '엔진 관리', item: '엔진 설정', time: '2024-03-15 11:15:30' },
    { id: 5, name: '최동훈', ip: '192.168.1.104', screen: '통계', item: '보고서 설정', time: '2024-03-15 10:30:18' },
    { id: 6, name: '정미경', ip: '192.168.1.105', screen: '사용자 관리', item: '프로필 설정', time: '2024-03-15 09:45:33' },
    { id: 7, name: '강민수', ip: '192.168.1.106', screen: '워크스페이스 관리', item: '워크스페이스 설정', time: '2024-03-15 08:20:15' },
    { id: 8, name: '윤서연', ip: '192.168.1.107', screen: '템플릿 관리', item: '템플릿 순서', time: '2024-03-15 07:15:42' },
    { id: 9, name: '조현우', ip: '192.168.1.108', screen: '프롬프트 관리', item: '프롬프트 설정', time: '2024-03-15 06:30:28' },
    { id: 10, name: '한지원', ip: '192.168.1.109', screen: '캘린더 관리', item: '일정 설정', time: '2024-03-15 05:45:55' }
  ]

  // 상세 변경 내역 데이터
  const detailData = {
    1: {
      before: `권한 설정: 일반 사용자\n접근 권한: 읽기 전용\n메뉴 접근: 제한됨\n파일 다운로드: 불가능`,
      after: `권한 설정: 관리자\n접근 권한: 읽기/쓰기\n메뉴 접근: 전체 허용\n파일 다운로드: 가능`
    },
    2: {
      before: `메뉴 순서:\n1. 회의록 관리\n2. 템플릿 관리\n3. 프롬프트 관리\n4. 이력 관리`,
      after: `메뉴 순서:\n1. 템플릿 관리\n2. 회의록 관리\n3. 프롬프트 관리\n4. 이력 관리`
    },
    3: {
      before: `사용자 권한: 뷰어\n워크스페이스 접근: 제한\n편집 권한: 없음`,
      after: `사용자 권한: 에디터\n워크스페이스 접근: 허용\n편집 권한: 있음`
    },
    4: {
      before: `엔진 타입: Standard\n처리 속도: 보통\n메모리 사용량: 512MB\n동시 처리: 5개`,
      after: `엔진 타입: Premium\n처리 속도: 빠름\n메모리 사용량: 1024MB\n동시 처리: 10개`
    },
    5: {
      before: `보고서 주기: 주간\n자동 생성: 비활성화\n수신자: 관리자만\n파일 형식: PDF`,
      after: `보고서 주기: 일간\n자동 생성: 활성화\n수신자: 전체 관리자\n파일 형식: PDF, Excel`
    },
    6: {
      before: `프로필 이미지: 기본 아바타\n알림 설정: 이메일만\n언어 설정: 한국어\n테마: 라이트`,
      after: `프로필 이미지: 사용자 업로드\n알림 설정: 이메일 + SMS\n언어 설정: 한국어\n테마: 다크`
    },
    7: {
      before: `워크스페이스명: 기본 워크스페이스\n설명: 없음\n공개 설정: 비공개\n멤버 수: 5명`,
      after: `워크스페이스명: AI 회의록 워크스페이스\n설명: AI 기반 회의록 관리 시스템\n공개 설정: 제한적 공개\n멤버 수: 12명`
    },
    8: {
      before: `템플릿 순서:\n1. 일반 회의\n2. 세미나\n3. 상담\n4. 의료`,
      after: `템플릿 순서:\n1. 의료\n2. 일반 회의\n3. 세미나\n4. 상담`
    },
    9: {
      before: `프롬프트 언어: 한국어\n최대 토큰: 1000\n온도 설정: 0.7\n응답 형식: 일반`,
      after: `프롬프트 언어: 한국어\n최대 토큰: 2000\n온도 설정: 0.5\n응답 형식: 구조화`
    },
    10: {
      before: `기본 일정 시간: 1시간\n알림 설정: 15분 전\n반복 설정: 없음\n참석자 권한: 읽기 전용`,
      after: `기본 일정 시간: 2시간\n알림 설정: 30분 전\n반복 설정: 주간 반복\n참석자 권한: 편집 가능`
    }
  }

  const handleRowClick = (row) => {
    setSelectedRow(row.id)
    const detail = detailData[row.id]
    if (detail) {
      setBeforeContent(detail.before)
      setAfterContent(detail.after)
    }
  }

  const handleSearch = () => {
    console.log('검색:', { searchCategory, searchTerm, dateRange, itemsPerPage })
  }

  // 페이지 로드 시 첫 번째 행 선택
  React.useEffect(() => {
    if (historyData.length > 0) {
      handleRowClick(historyData[0])
    }
  }, [])

  return (
    <Layout className="page-setting-change-history">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">설정변경 이력</h1>
        </div>
        <div className="content-body">
          {/* 검색 영역 */}
          <div className="search-section">
            <div className="common-topbar">
              <div className="tb-left">
                <div className="date-range-wrap">
                  <span className="calendar-icon"></span>
                  <TextField
                    placeholder="2025년 08월 12일 - 2025년 08월 19일"
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
                      <MenuItem value="10">10개씩 보기</MenuItem>
                      <MenuItem value="20">20개씩 보기</MenuItem>
                      <MenuItem value="50">50개씩 보기</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small" sx={{ minWidth: 100, mr: 1 }}>
                    <Select
                      value={searchCategory}
                      onChange={(e) => setSearchCategory(e.target.value)}
                      variant="outlined"
                    >
                      <MenuItem value="전체">전체</MenuItem>
                      <MenuItem value="이름">이름</MenuItem>
                      <MenuItem value="화면명">화면명</MenuItem>
                      <MenuItem value="변경항목">변경항목</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    placeholder="검색어를 입력해주세요."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    variant="outlined"
                    size="small"
                    sx={{ width: '200px', mr: 1 }}
                  />
                  <Button 
                    variant="outlined"
                    onClick={handleSearch}
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
            </div>
          </div>

          {/* 상단 테이블 */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>순번</th>
                  <th>이름</th>
                  <th>변경IP</th>
                  <th>화면명</th>
                  <th>변경항목</th>
                  <th>변경시간</th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((row) => (
                  <tr 
                    key={row.id} 
                    className={`setting-history-row ${selectedRow === row.id ? 'selected' : ''}`}
                    onClick={() => handleRowClick(row)}
                    style={{ cursor: 'pointer' }}
                  >
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.ip}</td>
                    <td>{row.screen}</td>
                    <td>{row.item}</td>
                    <td>{row.time}</td>
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
              <Button>3</Button>
              <Button>›</Button>
            </ButtonGroup>
          </div>

          {/* 하단 변경 내역 박스 */}
          <div className="detail-section-title">
            <h2>상세 내역</h2>
          </div>
          <div className="setting-change-details">
            <div className="change-detail-box">
              <div className="change-detail-header">
                <h3>변경전 내역</h3>
              </div>
              <div className="change-detail-content" id="beforeContent">
                {beforeContent.includes('\n') ? (
                  <pre>{beforeContent}</pre>
                ) : (
                  <p className="empty-message">{beforeContent}</p>
                )}
              </div>
            </div>

            <div className="change-detail-box">
              <div className="change-detail-header">
                <h3>변경후 내역</h3>
              </div>
              <div className="change-detail-content" id="afterContent">
                {afterContent.includes('\n') ? (
                  <pre>{afterContent}</pre>
                ) : (
                  <p className="empty-message">{afterContent}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SettingChangeHistoryPage
