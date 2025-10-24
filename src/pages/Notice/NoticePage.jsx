import React, { useState } from 'react'
import {
  Container,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box
} from '@mui/material'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import FormField from '../../components/common/FormField'
import { EditButton, DeleteButton } from '../../components/common/CommonButtons'
import ActionButton from '../../components/common/ActionButton'
import Checkbox from '../../components/common/Checkbox'
import SearchBar from '../../components/common/SearchBar'
import Pagination from '../../components/common/Pagination'

const NoticePage = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [dateRange, setDateRange] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

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
  const handleSearch = (type, keyword) => {
    console.log('검색:', { searchType: type, searchTerm: keyword, dateRange })
  }

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
    <Layout>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontSize: '24px', fontWeight: 600, color: '#111827' }}>
            공지사항 관리
          </Typography>
        </Box>

        <Box>
          {/* 검색 영역 */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                <SearchBar
                  searchOptions={['전체', '제목', '작성자']}
                  onSearch={handleSearch}
                  placeholder="검색어를 입력해주세요."
                />
                <Select
                  value="10개씩 보기"
                  onChange={() => {}}
                  options={[
                    { value: '10개씩 보기', label: '10개씩 보기' },
                    { value: '20개씩 보기', label: '20개씩 보기' },
                    { value: '50개씩 보기', label: '50개씩 보기' }
                  ]}
                  width="140px"
                />
              </Box>
            </Box>
          </Box>

          {/* 공지사항 테이블 */}
          <TableContainer component={Paper} sx={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell width="50" sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>
                    <Checkbox
                      id="notice-select-all"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      size="small"
                    />
                  </TableCell>
                  <TableCell width="60" sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>번호</TableCell>
                  <TableCell width="300" sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>제목</TableCell>
                  <TableCell width="100" sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>작성자</TableCell>
                  <TableCell width="140" sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>게시기간</TableCell>
                  <TableCell width="80" sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>상태</TableCell>
                  <TableCell width="70" sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>팝업</TableCell>
                  <TableCell width="110" sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>생성시간</TableCell>
                  <TableCell width="80" sx={{ fontWeight: 600, backgroundColor: '#F9FAFB', color: '#374151' }}>관리</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {noticeData.map((notice) => (
                  <TableRow key={notice.id} hover>
                    <TableCell>
                      <Checkbox
                        className="notice-checkbox"
                        checked={selectedRows.includes(notice.id)}
                        onChange={() => handleRowSelect(notice.id)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{notice.number}</TableCell>
                    <TableCell>
                      <a 
                        href={`notice_detail.html?id=${notice.id}`} 
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
                    </TableCell>
                    <TableCell>{notice.author}</TableCell>
                    <TableCell>{notice.period}</TableCell>
                    <TableCell>{renderStatusBadge(notice.status)}</TableCell>
                    <TableCell>{renderPopupBadge(notice.isPopup)}</TableCell>
                    <TableCell>{notice.createdDate}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        <EditButton
                          size="small"
                          onClick={() => handleEdit(notice.id)}
                        />
                        <DeleteButton
                          size="small"
                          onClick={() => handleDelete(notice.id)}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* 하단 액션 영역 */}
          <Box sx={{ display: 'flex', gap: 1.5, mt: 2 }}>
            <ActionButton
              variant="outlined"
              color="error"
              onClick={handleBulkDelete}
            >
              선택 삭제
            </ActionButton>
            <ActionButton
              variant="outlined"
              color="success"
              onClick={handleBulkPublish}
            >
              선택 게시
            </ActionButton>
            <ActionButton
              variant="outlined"
              color="secondary"
              onClick={handleBulkUnpublish}
            >
              선택 게시중단
            </ActionButton>
          </Box>

          {/* 페이지네이션 */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination
              currentPage={currentPage}
              totalPages={3}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default NoticePage