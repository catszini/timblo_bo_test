import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Checkbox,
  Link,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  styled
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

// 커스텀 체크박스 스타일
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    width: 16,
    height: 16,
    border: '1.5px solid #97c3f0',
    borderRadius: '3px',
    backgroundColor: 'white', // 미체크 상태는 흰색 배경
    '& path': {
      display: 'none', // 체크 아이콘 숨김
    },
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    backgroundColor: 'rgba(199, 223, 247, 0.8)', // 체크된 상태만 파란색 배경
    borderColor: '#97c3f0',
  },
  '&.MuiCheckbox-indeterminate .MuiSvgIcon-root': {
    backgroundColor: 'rgba(199, 223, 247, 0.8)', // indeterminate 상태도 파란색 배경
    borderColor: '#97c3f0',
  },
  '&:hover .MuiSvgIcon-root': {
    borderColor: '#a5cef3',
    backgroundColor: 'white', // 미체크 호버 시에도 흰색 유지
  },
  '&.Mui-checked:hover .MuiSvgIcon-root': {
    backgroundColor: 'rgba(199, 223, 247, 0.9)', // 체크된 상태 호버 시만 파란색
    borderColor: '#a5cef3',
  },
}))

const noticeData = [
  {
    id: 1,
    number: 1,
    title: '회의록 AI 기능 업데이트 안내',
    author: '관리자',
    startDate: '24-12-20',
    endDate: '25-01-20',
    status: '게시중',
    isPopup: true,
    createdAt: '24-12-20 14:30',
    isSelected: false
  },
  {
    id: 2,
    number: 2,
    title: '2025년 신규 기능 출시 예정 안내',
    author: '개발팀',
    startDate: '24-12-15',
    endDate: '25-02-15',
    status: '게시중',
    isPopup: false,
    createdAt: '24-12-15 09:15',
    isSelected: false
  },
  {
    id: 3,
    number: 3,
    title: '시스템 정기 점검 안내',
    author: '운영팀',
    startDate: '24-12-10',
    endDate: '24-12-25',
    status: '게시종료',
    isPopup: false,
    createdAt: '24-12-10 16:45',
    isSelected: false
  }
]

const NoticePage = () => {
  const [notices, setNotices] = useState(noticeData)
  const [selectAll, setSelectAll] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setSearchType] = useState('전체')
  const [pageSize, setPageSize] = useState(10)
  const [dateRange, setDateRange] = useState('')
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const handleSelectAll = (e) => {
    const checked = e.target.checked
    setSelectAll(checked)
    setNotices(notices.map(notice => ({ ...notice, isSelected: checked })))
  }

  const handleSelectNotice = (id, checked) => {
    setNotices(notices.map(notice => 
      notice.id === id ? { ...notice, isSelected: checked } : notice
    ))
    const selectedCount = notices.filter(n => n.id === id ? checked : n.isSelected).length
    setSelectAll(selectedCount === notices.length)
  }

  const handleEdit = (id) => {
    console.log('Edit notice:', id)
  }

  const handleDelete = (id) => {
    if (window.confirm('이 공지사항을 삭제하시겠습니까?')) {
      setNotices(prev => prev.filter(notice => notice.id !== id))
    }
  }

  const handleView = (id) => {
    console.log('View notice:', id)
    window.open(`/notice/${id}`, '_blank')
  }

  const handleBulkDelete = () => {
    const selectedNotices = notices.filter(notice => notice.isSelected)
    if (selectedNotices.length === 0) {
      alert('삭제할 공지사항을 선택해주세요.')
      return
    }
    setShowDeleteDialog(true)
  }

  const confirmBulkDelete = () => {
    setNotices(prev => prev.filter(notice => !notice.isSelected))
    setSelectAll(false)
    setShowDeleteDialog(false)
  }

  return (
    <Layout className="notice-page">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">공지사항 관리</h1>
        </div>

        <div className="content-body">
          {/* 검색 영역 */}
          <div className="search-section">
            <div className="common-topbar">
              <div className="tb-left">
                <div className="date-range-wrap">
                  <span className="calendar-icon">📅</span>
                  <TextField
                    id="consent-range"
                    className="date-range"
                    placeholder="날짜 범위를 선택하세요"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    variant="outlined"
                    size="small"
                    InputProps={{ readOnly: true }}
                  />
                  <div className="range-panel" id="consent-panel">
                    <div className="calendar-range">
                      <div className="calendar" id="consent-cal-start"></div>
                      <div className="calendar" id="consent-cal-end"></div>
                    </div>
                    <div className="range-panel-info">
                      <span id="consent-picked">-</span>
                      <div className="range-actions">
                        <button className="btn-outline" id="consent-cancel">취소</button>
                        <button className="btn-submit" id="consent-apply">적용</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tb-right">
                <div className="right-tail">
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
                      value={searchType}
                      onChange={(e) => setSearchType(e.target.value)}
                      variant="outlined"
                    >
                      <MenuItem value="전체">전체</MenuItem>
                      <MenuItem value="구분">구분</MenuItem>
                      <MenuItem value="이름">이름</MenuItem>
                      <MenuItem value="이메일">이메일</MenuItem>
                      <MenuItem value="제목">제목</MenuItem>
                      <MenuItem value="버전">버전</MenuItem>
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
                    className="search-btn"
                  >
                    조회
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* 공지사항 테이블 */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th width="50">
                    <CustomCheckbox
                      id="notice-select-all"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      size="small"
                    />
                  </th>
                  <th width="60">번호</th>
                  <th width="300">제목</th>
                  <th width="100">작성자</th>
                  <th width="140">게시기간</th>
                  <th width="80">상태</th>
                  <th width="70">팝업</th>
                  <th width="110">작성일</th>
                  <th width="80">관리</th>
                </tr>
              </thead>
              <tbody>
                {notices.slice(0, pageSize).map((notice) => (
                  <tr key={notice.id}>
                    <td>
                      <CustomCheckbox
                        checked={notice.isSelected}
                        onChange={(e) => handleSelectNotice(notice.id, e.target.checked)}
                        size="small"
                      />
                    </td>
                    <td>{notice.number}</td>
                    <td>
                      <Link
                        href="#"
                        onClick={() => handleView(notice.id)}
                        className="notice-title"
                        underline="none"
                      >
                        {notice.title}
                      </Link>
                    </td>
                    <td>{notice.author}</td>
                    <td>{notice.startDate} ~ {notice.endDate}</td>
                    <td>
                      <Chip
                        label={notice.status}
                        size="small"
                        color={notice.status === '게시중' ? 'success' : 'default'}
                        variant="outlined"
                        className={`status-badge ${notice.status === '게시중' ? 'active' : 'inactive'}`}
                      />
                    </td>
                    <td>
                      <Chip
                        label={notice.isPopup ? 'ON' : 'OFF'}
                        size="small"
                        color={notice.isPopup ? 'primary' : 'default'}
                        variant="outlined"
                        className={`popup-badge ${notice.isPopup ? 'on' : 'off'}`}
                      />
                    </td>
                    <td>{notice.createdAt}</td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="btn-icon edit-btn"
                          onClick={() => handleEdit(notice.id)}
                          title="수정"
                        >
                          ✏️
                        </button>
                        <button 
                          className="btn-icon delete-btn"
                          onClick={() => handleDelete(notice.id)}
                          title="삭제"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 일괄 액션 버튼 */}
          <div className="table-actions">
            <button className="btn-danger" onClick={handleBulkDelete}>
              선택 삭제
            </button>
          </div>
        </div>
      </div>

      {/* 삭제 확인 다이얼로그 */}
      <Dialog
        open={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
      >
        <DialogTitle>공지사항 삭제</DialogTitle>
        <DialogContent>
          선택된 공지사항을 삭제하시겠습니까?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteDialog(false)} variant="outlined">
            취소
            </Button>
          <Button onClick={confirmBulkDelete} color="error" variant="contained">
            삭제
            </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  )
}

export default NoticePage