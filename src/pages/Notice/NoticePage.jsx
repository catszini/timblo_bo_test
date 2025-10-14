import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Chip
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const NoticePage = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [dateRange, setDateRange] = useState('')
  const [searchType, setSearchType] = useState('전체')
  const [searchTerm, setSearchTerm] = useState('')

  // 공지사항 데이터 (HTML 최신 버전과 일치)
  const noticeData = [
    {
      id: 5,
      number: 5,
      title: '[긴급] 시스템 점검 안내 (2024.09.20 02:00~06:00)',
      author: '관리자',
      period: '2024-09-15 ~ 2024-09-25',
      status: 'published',
      isPopup: true,
      createdDate: '2024-09-15 14:30:53'
    },
    {
      id: 4,
      number: 4,
      title: 'AI 회의록 기능 업데이트 안내',
      author: '전체관리자',
      period: '2024-09-10 ~ 2024-10-10',
      status: 'published',
      isPopup: false,
      createdDate: '2024-09-10 09:15:22'
    },
    {
      id: 3,
      number: 3,
      title: '워크스페이스 사용 가이드 안내',
      author: '관리자',
      period: '2024-09-01 ~ 2024-12-31',
      status: 'published',
      isPopup: false,
      createdDate: '2024-09-01 16:45:12'
    },
    {
      id: 2,
      number: 2,
      title: '개인정보 처리방침 변경 안내',
      author: '법무팀',
      period: '2024-08-25 ~ 2024-09-30',
      status: 'expired',
      isPopup: true,
      createdDate: '2024-08-25 11:20:34'
    },
    {
      id: 1,
      number: 1,
      title: 'Timbel 서비스 오픈 안내',
      author: '관리자',
      period: '2024-08-01 ~ 2024-12-31',
      status: 'draft',
      isPopup: false,
      createdDate: '2024-08-01 10:00:00'
    }
  ]

  // 전체 선택 핸들러
  const handleSelectAll = (e) => {
    const checked = e.target.checked
    setSelectAll(checked)
    if (checked) {
      setSelectedRows(noticeData.map(item => item.id))
    } else {
      setSelectedRows([])
    }
  }

  // 개별 행 선택 핸들러
  const handleRowSelect = (id) => {
    const newSelectedRows = selectedRows.includes(id) 
      ? selectedRows.filter(rowId => rowId !== id)
      : [...selectedRows, id]
    
    setSelectedRows(newSelectedRows)
    setSelectAll(newSelectedRows.length === noticeData.length)
  }

  // 상태 배지 렌더링
  const renderStatusBadge = (status) => {
    const statusConfig = {
      published: { text: '게시중', class: 'published' },
      expired: { text: '게시종료', class: 'expired' },
      draft: { text: '임시저장', class: 'draft' }
    }
    
    const config = statusConfig[status] || statusConfig.draft
    
    return (
      <span className={`status-badge ${config.class}`} style={{
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: '500',
        backgroundColor: config.class === 'published' ? '#dcfce7' : 
                        config.class === 'expired' ? '#fee2e2' : '#f3f4f6',
        color: config.class === 'published' ? '#166534' : 
               config.class === 'expired' ? '#dc2626' : '#6b7280'
      }}>
        {config.text}
      </span>
    )
  }

  // 팝업 배지 렌더링
  const renderPopupBadge = (isPopup) => {
    return (
      <span className={`popup-badge ${isPopup ? 'active' : 'inactive'}`} style={{
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: '500',
        backgroundColor: isPopup ? '#dbeafe' : '#f3f4f6',
        color: isPopup ? '#1e40af' : '#6b7280'
      }}>
        {isPopup ? '팝업' : '-'}
      </span>
    )
  }

  // 핸들러들
  const handleEdit = (id) => {
    console.log('공지사항 수정:', id)
  }

  const handleDelete = (id) => {
    if (confirm('이 공지사항을 삭제하시겠습니까?')) {
      console.log('공지사항 삭제:', id)
    }
  }

  const handleBulkDelete = () => {
    const selectedCount = selectedRows.length
    if (selectedCount === 0) {
      alert('삭제할 공지사항을 선택해주세요.')
      return
    }
    if (confirm(`선택된 ${selectedCount}개의 공지사항을 삭제하시겠습니까?`)) {
      console.log('대량 삭제 실행')
      alert('선택된 공지사항이 삭제되었습니다.')
    }
  }

  const handleBulkPublish = () => {
    const selectedCount = selectedRows.length
    if (selectedCount === 0) {
      alert('게시할 공지사항을 선택해주세요.')
      return
    }
    if (confirm(`선택된 ${selectedCount}개의 공지사항을 게시하시겠습니까?`)) {
      console.log('대량 게시 실행')
      alert('선택된 공지사항이 게시되었습니다.')
    }
  }

  const handleBulkUnpublish = () => {
    const selectedCount = selectedRows.length
    if (selectedCount === 0) {
      alert('게시중단할 공지사항을 선택해주세요.')
      return
    }
    if (confirm(`선택된 ${selectedCount}개의 공지사항을 게시중단하시겠습니까?`)) {
      console.log('대량 게시중단 실행')
      alert('선택된 공지사항이 게시중단되었습니다.')
    }
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
                <Box className="date-range-wrap" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2" className="calendar-icon">📅</Typography>
                  <TextField
                    id="consent-range" 
                    className="date-range" 
                    placeholder="날짜 범위를 선택하세요" 
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    InputProps={{ readOnly: true }}
                    size="small"
                    sx={{ width: 200 }}
                    variant="outlined"
                  />
                </Box>
              </div>
              <div className="tb-right">
                <Box className="right-tail" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box className="combo-search combo-search-wide" sx={{ display: 'flex', alignItems: 'center', border: '1px solid #D1D5DB', borderRadius: 1, overflow: 'hidden' }}>
                    <FormControl size="small" sx={{ minWidth: 100 }}>
                      <Select
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                        variant="outlined"
                        sx={{ 
                          '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                          backgroundColor: 'white'
                        }}
                      >
                        <MenuItem value="전체">전체</MenuItem>
                        <MenuItem value="구분">구분</MenuItem>
                        <MenuItem value="이름">이름</MenuItem>
                        <MenuItem value="이메일">이메일</MenuItem>
                        <MenuItem value="제목">제목</MenuItem>
                        <MenuItem value="버전">버전</MenuItem>
                      </Select>
                    </FormControl>
                    <Box sx={{ width: 1, height: 24, backgroundColor: '#D1D5DB' }} />
                    <Box className="search-input-wrapper" sx={{ display: 'flex', alignItems: 'center', flex: 1, position: 'relative' }}>
                      <Typography variant="body2" sx={{ position: 'absolute', left: 8, color: '#6B7280', pointerEvents: 'none', zIndex: 1 }}>
                        🔍
                      </Typography>
                      <TextField
                        placeholder="검색어를 입력해주세요."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        variant="outlined"
                        size="small"
                        sx={{
                          flex: 1,
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { border: 'none' },
                            paddingLeft: '32px'
                          }
                        }}
                      />
                    </Box>
                    <Button 
                      variant="contained"
                      onClick={handleSearch}
                      sx={{ borderRadius: 0, minWidth: 'auto', px: 2 }}
                    >
                      조회
                    </Button>
                  </Box>
                  <FormControl size="small">
                    <Select
                      defaultValue="10개씩 보기"
                      variant="outlined"
                    >
                      <MenuItem value="10개씩 보기">10개씩 보기</MenuItem>
                      <MenuItem value="20개씩 보기">20개씩 보기</MenuItem>
                      <MenuItem value="50개씩 보기">50개씩 보기</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div>

          {/* 공지사항 테이블 */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th width="50">
                    <Checkbox
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
                  <th width="110">생성시간</th>
                  <th width="80">관리</th>
                </tr>
              </thead>
              <tbody>
                {noticeData.map((notice) => (
                  <tr key={notice.id}>
                    <td>
                      <Checkbox
                        className="notice-checkbox"
                        checked={selectedRows.includes(notice.id)}
                        onChange={() => handleRowSelect(notice.id)}
                        size="small"
                      />
                    </td>
                    <td>{notice.number}</td>
                    <td>
                      <a 
                        href={`notice_detail.html?id=${notice.id}`} 
                        className="notice-title-link"
                        style={{ 
                          color: '#3B82F6', 
                          textDecoration: 'none' 
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.textDecoration = 'underline'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.textDecoration = 'none'
                        }}
                      >
                        {notice.title}
                      </a>
                    </td>
                    <td>{notice.author}</td>
                    <td>{notice.period}</td>
                    <td>{renderStatusBadge(notice.status)}</td>
                    <td>{renderPopupBadge(notice.isPopup)}</td>
                    <td>{notice.createdDate}</td>
                    <td>
                      <div className="action-buttons" style={{ display: 'flex', gap: '4px' }}>
                        <button 
                          className="btn-icon edit-notice" 
                          data-id={notice.id} 
                          title="수정"
                          onClick={() => handleEdit(notice.id)}
                          style={{
                            padding: '4px',
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            borderRadius: '4px'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#F3F4F6'
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'transparent'
                          }}
                        >
                          <img src="../asset/edit-icon.svg" alt="수정" width="16" height="16" />
                        </button>
                        <button 
                          className="btn-icon delete-notice" 
                          data-id={notice.id} 
                          title="삭제"
                          onClick={() => handleDelete(notice.id)}
                          style={{
                            padding: '4px',
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            borderRadius: '4px'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#FEF2F2'
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'transparent'
                          }}
                        >
                          <img src="../asset/delete-icon.svg" alt="삭제" width="16" height="16" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 하단 액션 영역 */}
          <div className="table-actions" style={{ 
            display: 'flex', 
            gap: '12px', 
            marginTop: '16px' 
          }}>
            <div className="bulk-actions">
              <button 
                className="btn btn-outline" 
                id="bulk-delete-btn"
                onClick={handleBulkDelete}
                style={{
                  padding: '8px 16px',
                  background: 'transparent',
                  color: '#DC2626',
                  border: '1px solid #DC2626',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  marginRight: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#FEF2F2'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                }}
              >
                선택 삭제
              </button>
              <button 
                className="btn btn-outline" 
                id="bulk-publish-btn"
                onClick={handleBulkPublish}
                style={{
                  padding: '8px 16px',
                  background: 'transparent',
                  color: '#059669',
                  border: '1px solid #059669',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  marginRight: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#F0FDF4'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                }}
              >
                선택 게시
              </button>
              <button 
                className="btn btn-outline" 
                id="bulk-unpublish-btn"
                onClick={handleBulkUnpublish}
                style={{
                  padding: '8px 16px',
                  background: 'transparent',
                  color: '#6B7280',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#F9FAFB'
                  e.target.style.borderColor = '#9CA3AF'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.borderColor = '#D1D5DB'
                }}
              >
                선택 게시중단
              </button>
            </div>
          </div>

          {/* 페이지네이션 */}
          <div className="pagination" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginTop: '20px',
            gap: '4px'
          }}>
            <button 
              className="page-btn prev" 
              disabled
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                background: '#f5f5f5',
                color: '#999',
                borderRadius: '4px',
                cursor: 'not-allowed'
              }}
            >
              ‹
            </button>
            <button 
              className="page-btn active"
              style={{
                padding: '8px 12px',
                border: '1px solid #2196F3',
                background: '#2196F3',
                color: 'white',
                borderRadius: '4px',
                cursor: 'pointer',
                minWidth: '36px'
              }}
            >
              1
            </button>
            <button 
              className="page-btn"
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                background: 'white',
                color: '#333',
                borderRadius: '4px',
                cursor: 'pointer',
                minWidth: '36px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f0f0f0'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white'
              }}
            >
              2
            </button>
            <button 
              className="page-btn"
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                background: 'white',
                color: '#333',
                borderRadius: '4px',
                cursor: 'pointer',
                minWidth: '36px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f0f0f0'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white'
              }}
            >
              3
            </button>
            <button 
              className="page-btn next"
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                background: 'white',
                color: '#333',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f0f0f0'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white'
              }}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NoticePage