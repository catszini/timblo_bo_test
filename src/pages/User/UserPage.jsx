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

const UserPage = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [searchCondition, setSearchCondition] = useState('생성자')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기')

  // 사용자 데이터 (HTML 최신 버전과 일치)
  const userData = [
    {
      id: 1,
      name: '이지우',
      email: 'lee.jw@sktelecom.com',
      permission: '컨텐츠관리자',
      status: 'online',
      createdDate: '2024-03-28 14:30:15'
    },
    {
      id: 2,
      name: '송하은',
      email: 'song.he@sktelecom.com',
      permission: '컨텐츠관리자',
      status: 'online',
      createdDate: '2024-03-20 09:22:43'
    },
    {
      id: 3,
      name: '송현지',
      email: 'song.hj@sktelecom.com',
      permission: '컨텐츠관리자',
      status: 'online',
      createdDate: '2024-03-12 16:45:28'
    },
    {
      id: 4,
      name: '강민호',
      email: 'kang.mh@sktelecom.com',
      permission: '회의관리자',
      status: 'offline',
      createdDate: '2024-03-05 11:18:52'
    },
    {
      id: 5,
      name: '정수현',
      email: 'jung.sh@sktelecom.com',
      permission: '컨텐츠관리자',
      status: 'online',
      createdDate: '2024-02-25 13:07:19'
    },
    {
      id: 6,
      name: '최지영',
      email: 'choi.jy@sktelecom.com',
      permission: '통계관리자',
      status: 'online',
      createdDate: '2024-02-18 08:42:17'
    },
    {
      id: 7,
      name: '이민수',
      email: 'lee.ms@sktelecom.com',
      permission: '사용자관리자',
      status: 'online',
      createdDate: '2024-02-10 15:28:04'
    },
    {
      id: 8,
      name: '김철수',
      email: 'kim.cs@sktelecom.com',
      permission: '로고관리자',
      status: 'online',
      createdDate: '2024-02-03 12:55:41'
    },
    {
      id: 9,
      name: '박영수',
      email: 'kim.cs@sktelecom.com',
      permission: '회의관리자',
      status: 'online',
      createdDate: '2024-01-22 17:33:26'
    }
  ]

  const permissionOptions = [
    '회의관리자',
    '로고관리자',
    '사용자관리자',
    '통계관리자',
    '컨텐츠관리자'
  ]

  // 전체 선택 핸들러
  const handleSelectAll = (e) => {
    const checked = e.target.checked
    setSelectAll(checked)
    if (checked) {
      setSelectedRows(userData.map(item => item.id))
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
    setSelectAll(newSelectedRows.length === userData.length)
  }

  // 권한 변경 핸들러
  const handlePermissionChange = (id, newPermission) => {
    console.log(`사용자 ${id}의 권한이 ${newPermission}로 변경됨`)
  }

  // 검색 핸들러
  const handleSearch = () => {
    console.log(`${searchCondition}에서 "${searchKeyword}" 검색`)
  }

  // 버튼 핸들러들
  const handleDelete = () => {
    console.log('선택된 사용자 삭제:', selectedRows)
  }

  const handleEdit = () => {
    console.log('선택된 사용자 수정:', selectedRows)
  }

  const handleCreate = () => {
    console.log('새 사용자 생성')
  }

  const handlePasswordReset = (id) => {
    console.log(`사용자 ${id} 비밀번호 초기화`)
  }

  const handleDeleteUser = (id) => {
    console.log(`사용자 ${id} 삭제`)
  }

  return (
    <Layout className="page-user">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">사용자 관리</h1>
        </div>
        <div className="content-body">
          {/* 통합 검색 툴바 */}
          <div className="search-toolbar">
            <div className="common-topbar">
              <div className="tb-left">
                <Typography variant="body2" className="total-count">총 {userData.length}개</Typography>
              </div>
              <div className="tb-right">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  {/* 개수 선택 */}
                  <FormControl size="small" sx={{ minWidth: 120 }}>
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

                  {/* 검색 조합 */}
                  <Box className="combo-search" sx={{ display: 'flex', alignItems: 'center', border: '1px solid #D1D5DB', borderRadius: 1, overflow: 'hidden' }}>
                    <FormControl size="small" sx={{ minWidth: 100 }}>
                      <Select
                        value={searchCondition}
                        onChange={(e) => setSearchCondition(e.target.value)}
                        variant="outlined"
                        sx={{ 
                          '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                          backgroundColor: '#F9FAFB'
                        }}
                      >
                        <MenuItem value="생성자">생성자</MenuItem>
                        <MenuItem value="전체">전체</MenuItem>
                        <MenuItem value="이름">이름</MenuItem>
                        <MenuItem value="이메일">이메일</MenuItem>
                      </Select>
                    </FormControl>
                    <Box sx={{ width: 1, height: 24, backgroundColor: '#D1D5DB' }} />
                    <Box className="search-input-wrapper" sx={{ display: 'flex', alignItems: 'center', flex: 1, position: 'relative' }}>
                      <Typography variant="body2" sx={{ position: 'absolute', left: 8, color: '#6B7280', pointerEvents: 'none', zIndex: 1 }}>
                        🔍
                      </Typography>
                      <TextField
                        placeholder="검색어를 입력해주세요."
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
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

                  {/* 액션 버튼들 */}
                  <Button 
                    variant="outlined"
                    onClick={handleDelete}
                    sx={{
                      color: '#DC2626',
                      borderColor: '#DC2626',
                      '&:hover': {
                        backgroundColor: '#fef2f2',
                        borderColor: '#DC2626'
                      }
                    }}
                  >
                    삭제
                  </Button>
                  <Button 
                    variant="outlined"
                    onClick={handleEdit}
                    sx={{
                      color: '#6B7280',
                      borderColor: '#D1D5DB',
                      '&:hover': {
                        backgroundColor: '#F9FAFB',
                        borderColor: '#9CA3AF'
                      }
                    }}
                  >
                    수정
                  </Button>
                  <Button 
                    variant="contained"
                    onClick={handleCreate}
                    sx={{
                      backgroundColor: '#3B82F6',
                      '&:hover': {
                        backgroundColor: '#2563EB'
                      }
                    }}
                  >
                    생성
                  </Button>
                </Box>
              </div>
            </div>
          </div>

          {/* 테이블 */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>
                    <input 
                      type="checkbox" 
                      className="select-all"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>권한</th>
                  <th>비밀번호 초기화</th>
                  <th>삭제</th>
                  <th>생성시간</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <input 
                        type="checkbox"
                        checked={selectedRows.includes(user.id)}
                        onChange={() => handleRowSelect(user.id)}
                      />
                    </td>
                    <td>
                      <div className="user-profile">
                        <span className={`user-status ${user.status}`}>{user.name}</span>
                      </div>
                    </td>
                    <td>
                      <a href={`mailto:${user.email}`} className="email-link">
                        {user.email}
                      </a>
                    </td>
                    <td>
                      <div className="combo-select">
                        <select 
                          className="permission-select"
                          defaultValue={user.permission}
                          onChange={(e) => handlePermissionChange(user.id, e.target.value)}
                          style={{
                            padding: '6px 12px',
                            border: '1px solid #D1D5DB',
                            borderRadius: '4px',
                            fontSize: '14px',
                            background: 'white'
                          }}
                        >
                          {permissionOptions.map(option => (
                            <option 
                              key={option} 
                              value={option}
                              selected={option === user.permission}
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td>
                      <button 
                        className="btn-outline btn-sm"
                        onClick={() => handlePasswordReset(user.id)}
                        style={{
                          padding: '6px 12px',
                          fontSize: '13px',
                          background: 'transparent',
                          color: '#6B7280',
                          border: '1px solid #D1D5DB',
                          borderRadius: '6px',
                          cursor: 'pointer'
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
                        초기화
                      </button>
                    </td>
                    <td>
                      <button 
                        className="btn-danger btn-sm"
                        onClick={() => handleDeleteUser(user.id)}
                        style={{
                          padding: '6px 12px',
                          fontSize: '13px',
                          background: 'transparent',
                          color: '#DC2626',
                          border: '1px solid #DC2626',
                          borderRadius: '6px',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#fef2f2'
                          e.target.style.borderColor = '#B91C1C'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent'
                          e.target.style.borderColor = '#DC2626'
                        }}
                      >
                        삭제
                      </button>
                    </td>
                    <td>{user.createdDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default UserPage