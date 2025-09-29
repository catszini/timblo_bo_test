import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Checkbox,
  Link,
  ButtonGroup,
  Box,
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

const systemUserData = [
  {
    id: 1,
    workspace: {
      name: 'SK Telecom',
      icon: 'S',
      iconColor: 'color-teal'
    },
    email: 'admin@sktelecom.com',
    name: '김민수',
    status: 'online',
    permission: '시스템관리자',
    createdAt: '2024-01-10',
    isSelected: false
  },
  {
    id: 2,
    workspace: {
      name: 'SK Hynix',
      icon: 'S',
      iconColor: 'color-indigo'
    },
    email: 'manager@skhynix.com',
    name: '박지영',
    status: 'online',
    permission: '구성원',
    createdAt: '2024-02-15',
    isSelected: false
  },
  {
    id: 3,
    workspace: {
      name: 'SK E&S',
      icon: 'S',
      iconColor: 'color-violet'
    },
    email: 'energy@skens.com',
    name: '이상훈',
    status: 'offline',
    permission: '구성원',
    createdAt: '2024-03-08',
    isSelected: false
  },
  {
    id: 4,
    workspace: {
      name: 'SK C&C',
      icon: 'S',
      iconColor: 'color-blue'
    },
    email: 'admin@skcc.com',
    name: '최은정',
    status: 'online',
    permission: '통계관리자',
    createdAt: '2024-04-12',
    isSelected: false
  },
  {
    id: 5,
    workspace: {
      name: 'SK Innovation',
      icon: 'S',
      iconColor: 'color-emerald'
    },
    email: 'innovation@skinnovation.com',
    name: '정호준',
    status: 'online',
    permission: '워크스페이스관리자',
    isSelected: false
  },
  {
    id: 6,
    workspace: {
      name: 'SK Networks',
      icon: 'S',
      iconColor: 'color-amber'
    },
    email: 'networks@sknetworks.co.kr',
    name: '송민아',
    status: 'online',
    permission: '워크스페이스관리자',
    isSelected: false
  },
  {
    id: 7,
    workspace: {
      name: 'SK Biopharm',
      icon: 'S',
      iconColor: 'color-rose'
    },
    email: 'bio@skbiopharm.com',
    name: '한도영',
    status: 'offline',
    permission: '메뉴관리자',
    isSelected: false
  },
  {
    id: 8,
    workspace: {
      name: 'SK Materials',
      icon: 'S',
      iconColor: 'color-rose'
    },
    email: 'materials@skmaterials.com',
    name: '윤서현',
    status: 'online',
    permission: '통계관리자',
    isSelected: false
  },
  {
    id: 9,
    workspace: {
      name: 'SK Shieldus',
      icon: 'S',
      iconColor: 'color-gray'
    },
    email: 'security@skshieldus.com',
    name: '임준혁',
    status: 'online',
    permission: '시스템관리자',
    isSelected: false
  }
]

const SystemUserPage = () => {
  const [users, setUsers] = useState(systemUserData)
  const [selectAll, setSelectAll] = useState(false)
  const [selectedWorkspace, setSelectedWorkspace] = useState('워크스페이스 목록')
  const [pageSize, setPageSize] = useState('10개씩 보기')
  const [searchType, setSearchType] = useState('생성자')
  const [searchTerm, setSearchTerm] = useState('')

  const workspaceOptions = [
    '워크스페이스 목록',
    'SK Telecom',
    'SK Hynix', 
    'SK E&S',
    'SK C&C',
    'SK Innovation',
    'SK Networks',
    'SK Biopharm',
    'SK Materials',
    'SK Shieldus'
  ]

  const handleSelectAll = (e) => {
    const checked = e.target.checked
    setSelectAll(checked)
    setUsers(users.map(user => ({ ...user, isSelected: checked })))
  }

  const handleSelectUser = (id, checked) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, isSelected: checked } : user
    ))
    const selectedCount = users.filter(u => u.id === id ? checked : u.isSelected).length
    setSelectAll(selectedCount === users.length)
  }

  const handlePermissionChange = (id, newPermission) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, permission: newPermission } : user
    ))
  }

  const handlePasswordReset = (id, userName) => {
    if (window.confirm(`${userName}의 비밀번호를 초기화하시겠습니까?`)) {
      alert('비밀번호가 초기화되었습니다.')
    }
  }

  const handleDeleteUser = (id, userName) => {
    if (window.confirm(`${userName}을(를) 삭제하시겠습니까?`)) {
      setUsers(prev => prev.filter(user => user.id !== id))
      alert('사용자가 삭제되었습니다.')
    }
  }

  const handleBulkDelete = () => {
    const selectedUsers = users.filter(user => user.isSelected)
    if (selectedUsers.length === 0) {
      alert('삭제할 사용자를 선택해주세요.')
      return
    }
    if (window.confirm(`선택된 ${selectedUsers.length}명의 사용자를 삭제하시겠습니까?`)) {
      setUsers(prev => prev.filter(user => !user.isSelected))
      setSelectAll(false)
      alert('선택된 사용자들이 삭제되었습니다.')
    }
  }

  const handleBulkEdit = () => {
    const selectedUsers = users.filter(user => user.isSelected)
    if (selectedUsers.length === 0) {
      alert('수정할 사용자를 선택해주세요.')
      return
    }
    console.log('Bulk edit users:', selectedUsers)
  }

  const handleCreateUser = () => {
    console.log('Create new user')
  }

  const handleSearch = () => {
    console.log('Search:', { searchType, searchTerm, selectedWorkspace })
  }

  return (
    <Layout className="page-system-user user-page member-page">
      <div className="content user-page member-page user-page-custom">
        <div className="content-header">
          <h1 className="breadcrumb">사용자 관리</h1>
        </div>
        
        <div className="content-body">
          <div className="search-toolbar">
            <div className="common-topbar">
              <div className="tb-left">
                <span className="total-count">총 9개</span>
                <FormControl size="small" className="condition-select">
                  <Select
                    value={selectedWorkspace}
                    onChange={(e) => setSelectedWorkspace(e.target.value)}
                    variant="outlined"
                  >
                    {workspaceOptions.map(option => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="tb-right">
                <div className="right-tail">
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
                  
                  <FormControl size="small" className="condition-select">
                    <Select
                      value={searchType}
                      onChange={(e) => setSearchType(e.target.value)}
                      variant="outlined"
                    >
                      <MenuItem value="생성자">생성자</MenuItem>
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
                    className="search-input-field"
                  />
                  
                  <Button 
                    variant="outlined"
                    onClick={handleSearch}
                    sx={{ 
                      mr: 1,
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
                  
                  <ButtonGroup variant="outlined" size="medium" sx={{ ml: 1 }}>
                    <Button 
                      onClick={handleBulkDelete}
                      sx={{ 
                        color: 'error.main', 
                        borderColor: 'error.main',
                        '&:hover': { 
                          bgcolor: 'error.light',
                          color: 'white',
                          borderColor: 'error.main'
                        }
                      }}
                    >
                      삭제
                    </Button>
                    <Button 
                      onClick={handleBulkEdit}
                      sx={{ 
                        color: 'primary.main',
                        borderColor: 'primary.main',
                        '&:hover': { 
                          bgcolor: 'primary.light',
                          color: 'white',
                          borderColor: 'primary.main'
                        }
                      }}
                    >
                      수정
                    </Button>
                    <Button 
                      onClick={handleCreateUser}
                      sx={{ 
                        color: 'success.main', 
                        borderColor: 'success.main',
                        '&:hover': { 
                          bgcolor: 'success.light',
                          color: 'white',
                          borderColor: 'success.main'
                        }
                      }}
                    >
                      생성
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th><input type="checkbox" className="select-all" checked={selectAll} onChange={handleSelectAll} /></th>
                  <th>워크스페이스</th>
                  <th>이메일</th>
                  <th>이름</th>
                  <th>메뉴권한</th>
                  <th>생성일</th>
                  <th>비밀번호 초기화</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="workspace-name">
                      <div className="workspace-icon color-teal">S</div>
                      <span>SK Telecom</span>
                    </div>
                  </td>
                  <td><a href="mailto:admin@sktelecom.com" className="email-link">admin@sktelecom.com</a></td>
                  <td>
                    <div className="user-profile">
                      <span className="user-status online">김민수</span>
                    </div>
                  </td>
                  <td>
                    <select className="permission-select">
                      <option selected>시스템관리자</option>
                      <option>워크스페이스관리자</option>
                      <option>메뉴관리자</option>
                      <option>통계관리자</option>
                      <option>구성원</option>
                    </select>
                  </td>
                  <td>2024-01-10</td>
                  <td>
                    <button 
                      className="btn-outline btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '60px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#6B7280',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F9FAFB';
                        e.target.style.borderColor = '#9CA3AF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#D1D5DB';
                      }}
                    >
                      초기화
                    </button>
                  </td>
                  <td>
                    <button 
                      className="btn-danger btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '50px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#DC2626',
                        border: '1px solid #DC2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fef2f2';
                        e.target.style.borderColor = '#B91C1C';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#DC2626';
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="workspace-name">
                      <div className="workspace-icon color-indigo">S</div>
                      <span>SK Hynix</span>
                    </div>
                  </td>
                  <td><a href="mailto:manager@skhynix.com" className="email-link">manager@skhynix.com</a></td>
                  <td>
                    <div className="user-profile">
                      <span className="user-status online">박지영</span>
                    </div>
                  </td>
                  <td>
                    <select className="permission-select">
                      <option>시스템관리자</option>
                      <option>워크스페이스관리자</option>
                      <option>메뉴관리자</option>
                      <option>통계관리자</option>
                      <option selected>구성원</option>
                    </select>
                  </td>
                  <td>2024-02-15</td>
                  <td>
                    <button 
                      className="btn-outline btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '60px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#6B7280',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F9FAFB';
                        e.target.style.borderColor = '#9CA3AF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#D1D5DB';
                      }}
                    >
                      초기화
                    </button>
                  </td>
                  <td>
                    <button 
                      className="btn-danger btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '50px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#DC2626',
                        border: '1px solid #DC2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fef2f2';
                        e.target.style.borderColor = '#B91C1C';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#DC2626';
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="workspace-name">
                      <div className="workspace-icon color-violet">S</div>
                      <span>SK E&S</span>
                    </div>
                  </td>
                  <td><a href="mailto:energy@skens.com" className="email-link">energy@skens.com</a></td>
                  <td>
                    <div className="user-profile">
                      <span className="user-status offline">이상훈</span>
                    </div>
                  </td>
                  <td>
                    <select className="permission-select">
                      <option>시스템관리자</option>
                      <option>워크스페이스관리자</option>
                      <option>메뉴관리자</option>
                      <option>통계관리자</option>
                      <option selected>구성원</option>
                    </select>
                  </td>
                  <td>2024-03-08</td>
                  <td>
                    <button 
                      className="btn-outline btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '60px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#6B7280',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F9FAFB';
                        e.target.style.borderColor = '#9CA3AF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#D1D5DB';
                      }}
                    >
                      초기화
                    </button>
                  </td>
                  <td>
                    <button 
                      className="btn-danger btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '50px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#DC2626',
                        border: '1px solid #DC2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fef2f2';
                        e.target.style.borderColor = '#B91C1C';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#DC2626';
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="workspace-name">
                      <div className="workspace-icon color-blue">S</div>
                      <span>SK C&C</span>
                    </div>
                  </td>
                  <td><a href="mailto:admin@skcc.com" className="email-link">admin@skcc.com</a></td>
                  <td>
                    <div className="user-profile">
                      <span className="user-status online">최은정</span>
                    </div>
                  </td>
                  <td>
                    <select className="permission-select">
                      <option>시스템관리자</option>
                      <option>워크스페이스관리자</option>
                      <option>메뉴관리자</option>
                      <option selected>통계관리자</option>
                      <option>구성원</option>
                    </select>
                  </td>
                  <td>2024-04-12</td>
                  <td>
                    <button 
                      className="btn-outline btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '60px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#6B7280',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F9FAFB';
                        e.target.style.borderColor = '#9CA3AF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#D1D5DB';
                      }}
                    >
                      초기화
                    </button>
                  </td>
                  <td>
                    <button 
                      className="btn-danger btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '50px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#DC2626',
                        border: '1px solid #DC2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fef2f2';
                        e.target.style.borderColor = '#B91C1C';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#DC2626';
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="workspace-name">
                      <div className="workspace-icon color-emerald">S</div>
                      <span>SK Innovation</span>
                    </div>
                  </td>
                  <td><a href="mailto:innovation@skinnovation.com" className="email-link">innovation@skinnovation.com</a></td>
                  <td>
                    <div className="user-profile">
                      <span className="user-status online">김태호</span>
                    </div>
                  </td>
                  <td>
                    <select className="permission-select">
                      <option>시스템관리자</option>
                      <option>워크스페이스관리자</option>
                      <option>메뉴관리자</option>
                      <option>통계관리자</option>
                      <option selected>구성원</option>
                    </select>
                  </td>
                  <td>2024-05-22</td>
                  <td>
                    <button 
                      className="btn-outline btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '60px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#6B7280',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F9FAFB';
                        e.target.style.borderColor = '#9CA3AF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#D1D5DB';
                      }}
                    >
                      초기화
                    </button>
                  </td>
                  <td>
                    <button 
                      className="btn-danger btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '50px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#DC2626',
                        border: '1px solid #DC2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fef2f2';
                        e.target.style.borderColor = '#B91C1C';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#DC2626';
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="workspace-name">
                      <div className="workspace-icon color-amber">S</div>
                      <span>SK Networks</span>
                    </div>
                  </td>
                  <td><a href="mailto:networks@sknetworks.com" className="email-link">networks@sknetworks.com</a></td>
                  <td>
                    <div className="user-profile">
                      <span className="user-status offline">윤서연</span>
                    </div>
                  </td>
                  <td>
                    <select className="permission-select">
                      <option>시스템관리자</option>
                      <option>워크스페이스관리자</option>
                      <option>메뉴관리자</option>
                      <option>통계관리자</option>
                      <option selected>구성원</option>
                    </select>
                  </td>
                  <td>2024-06-14</td>
                  <td>
                    <button 
                      className="btn-outline btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '60px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#6B7280',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F9FAFB';
                        e.target.style.borderColor = '#9CA3AF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#D1D5DB';
                      }}
                    >
                      초기화
                    </button>
                  </td>
                  <td>
                    <button 
                      className="btn-danger btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '50px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#DC2626',
                        border: '1px solid #DC2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fef2f2';
                        e.target.style.borderColor = '#B91C1C';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#DC2626';
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="workspace-name">
                      <div className="workspace-icon color-rose">S</div>
                      <span>SK Biopharm</span>
                    </div>
                  </td>
                  <td><a href="mailto:bio@skbiopharm.com" className="email-link">bio@skbiopharm.com</a></td>
                  <td>
                    <div className="user-profile">
                      <span className="user-status online">정민호</span>
                    </div>
                  </td>
                  <td>
                    <select className="permission-select">
                      <option>시스템관리자</option>
                      <option>워크스페이스관리자</option>
                      <option>메뉴관리자</option>
                      <option>통계관리자</option>
                      <option selected>구성원</option>
                    </select>
                  </td>
                  <td>2024-07-03</td>
                  <td>
                    <button 
                      className="btn-outline btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '60px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#6B7280',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F9FAFB';
                        e.target.style.borderColor = '#9CA3AF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#D1D5DB';
                      }}
                    >
                      초기화
                    </button>
                  </td>
                  <td>
                    <button 
                      className="btn-danger btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '50px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#DC2626',
                        border: '1px solid #DC2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fef2f2';
                        e.target.style.borderColor = '#B91C1C';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#DC2626';
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="workspace-name">
                      <div className="workspace-icon color-rose">S</div>
                      <span>SK Materials</span>
                    </div>
                  </td>
                  <td><a href="mailto:materials@skmaterials.com" className="email-link">materials@skmaterials.com</a></td>
                  <td>
                    <div className="user-profile">
                      <span className="user-status online">송하늘</span>
                    </div>
                  </td>
                  <td>
                    <select className="permission-select">
                      <option>시스템관리자</option>
                      <option>워크스페이스관리자</option>
                      <option>메뉴관리자</option>
                      <option>통계관리자</option>
                      <option selected>구성원</option>
                    </select>
                  </td>
                  <td>2024-08-19</td>
                  <td>
                    <button 
                      className="btn-outline btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '60px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#6B7280',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F9FAFB';
                        e.target.style.borderColor = '#9CA3AF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#D1D5DB';
                      }}
                    >
                      초기화
                    </button>
                  </td>
                  <td>
                    <button 
                      className="btn-danger btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '50px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#DC2626',
                        border: '1px solid #DC2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fef2f2';
                        e.target.style.borderColor = '#B91C1C';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#DC2626';
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="workspace-name">
                      <div className="workspace-icon color-cyan">S</div>
                      <span>SK Shieldus</span>
                    </div>
                  </td>
                  <td><a href="mailto:security@skshieldus.com" className="email-link">security@skshieldus.com</a></td>
                  <td>
                    <div className="user-profile">
                      <span className="user-status offline">한지우</span>
                    </div>
                  </td>
                  <td>
                    <select className="permission-select">
                      <option>시스템관리자</option>
                      <option>워크스페이스관리자</option>
                      <option>메뉴관리자</option>
                      <option>통계관리자</option>
                      <option selected>구성원</option>
                    </select>
                  </td>
                  <td>2024-09-11</td>
                  <td>
                    <button 
                      className="btn-outline btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '60px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#6B7280',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F9FAFB';
                        e.target.style.borderColor = '#9CA3AF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#D1D5DB';
                      }}
                    >
                      초기화
                    </button>
                  </td>
                  <td>
                    <button 
                      className="btn-danger btn-sm"
                      style={{
                        padding: '6px 12px',
                        fontSize: '13px',
                        height: '32px',
                        minWidth: '50px',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        color: '#DC2626',
                        border: '1px solid #DC2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fef2f2';
                        e.target.style.borderColor = '#B91C1C';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#DC2626';
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
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
                e.target.style.background = '#f0f0f0';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white';
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
                e.target.style.background = '#f0f0f0';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white';
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
                e.target.style.background = '#f0f0f0';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white';
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

export default SystemUserPage
