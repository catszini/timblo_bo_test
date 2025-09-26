import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Checkbox,
  ButtonGroup,
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

const userData = [
  {
    id: 1,
    name: '박영수',
    email: 'park.ys@sktelecom.com',
    permission: '회의관리자',
    status: 'online'
  },
  {
    id: 2,
    name: '김철수',
    email: 'kim.cs@sktelecom.com',
    permission: '로고관리자',
    status: 'online'
  },
  {
    id: 3,
    name: '이민수',
    email: 'lee.ms@sktelecom.com',
    permission: '사용자관리자',
    status: 'offline'
  },
  {
    id: 4,
    name: '최지영',
    email: 'choi.jy@sktelecom.com',
    permission: '통계관리자',
    status: 'online'
  },
  {
    id: 5,
    name: '정수현',
    email: 'jung.sh@sktelecom.com',
    permission: '컨텐츠관리자',
    status: 'online'
  }
]

const UserPage = () => {
  const [pageSize, setPageSize] = useState('10개씩 보기')
  const [searchType, setSearchType] = useState('전체')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    console.log('검색:', { pageSize, searchType, searchTerm })
  }

  const handleBulkDelete = () => {
    console.log('일괄 삭제')
  }

  const handleBulkEdit = () => {
    console.log('일괄 수정')
  }

  const handleCreateUser = () => {
    console.log('사용자 생성')
  }

  const handlePermissionChange = (userId, permission) => {
    console.log('권한 변경:', userId, permission)
  }

  const handlePasswordReset = (userId, userName) => {
    console.log('비밀번호 초기화:', userId, userName)
  }

  const handleDeleteUser = (userId, userName) => {
    console.log('사용자 삭제:', userId, userName)
  }

  return (
    <Layout className="page-user user-page member-page">
      <div className="content user-page member-page user-page-custom">
        <div className="content-header">
          <h1 className="breadcrumb">사용자 관리</h1>
        </div>
        
        <div className="content-body">
          <div className="search-toolbar">
            <div className="common-topbar">
              <div className="tb-left">
                <span className="total-count">총 {userData.length}개</span>
              </div>
              <div className="tb-right">
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
                    <MenuItem value="전체">전체</MenuItem>
                    <MenuItem value="이름">이름</MenuItem>
                    <MenuItem value="이메일">이메일</MenuItem>
                    <MenuItem value="권한">권한</MenuItem>
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
                    ml: 1,
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

          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th><CustomCheckbox size="small" /></th>
                  <th>순번</th>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>권한</th>
                  <th>상태</th>
                  <th>비밀번호</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => (
                  <tr key={user.id}>
                    <td>
                      <CustomCheckbox 
                        size="small"
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <div className="permission-select-wrapper">
                        <FormControl size="small" className="permission-select">
                          <Select
                            value={user.permission}
                            onChange={(e) => handlePermissionChange(user.id, e.target.value)}
                            variant="outlined"
                          >
                            <MenuItem value="회의관리자">회의관리자</MenuItem>
                            <MenuItem value="로고관리자">로고관리자</MenuItem>
                            <MenuItem value="사용자관리자">사용자관리자</MenuItem>
                            <MenuItem value="통계관리자">통계관리자</MenuItem>
                            <MenuItem value="컨텐츠관리자">컨텐츠관리자</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </td>
                    <td>
                      <span className={`status ${user.status}`}>
                        {user.status === 'online' ? '온라인' : '오프라인'}
                      </span>
                    </td>
                    <td>
                      <Button 
                        variant="outlined"
                        size="small"
                        onClick={() => handlePasswordReset(user.id, user.name)}
                        sx={{ 
                          color: 'text.secondary', 
                          fontSize: '12px',
                          borderColor: 'grey.400',
                          '&:hover': { 
                            bgcolor: 'grey.100',
                            borderColor: 'grey.400'
                          }
                        }}
                      >
                        초기화
                      </Button>
                    </td>
                    <td>
                      <Button 
                        variant="outlined"
                        size="small"
                        onClick={() => handleDeleteUser(user.id, user.name)}
                        sx={{ 
                          color: 'error.main', 
                          borderColor: 'error.main', 
                          fontSize: '12px',
                          '&:hover': { 
                            bgcolor: 'error.light',
                            color: 'white',
                            borderColor: 'error.main'
                          }
                        }}
                      >
                        삭제
                      </Button>
                    </td>
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

export default UserPage