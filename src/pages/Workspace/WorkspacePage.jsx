import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Checkbox,
  Switch,
  FormControlLabel,
  IconButton,
  Box,
  ButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  styled
} from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import Layout from '../../components/Layout/Layout'

// 커스텀 체크박스 스타일
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  // 모든 체크박스 동일한 크기와 패딩
  padding: '6px',
  width: '28px',
  height: '28px',
  
  '& .MuiSvgIcon-root': {
    width: '16px !important',
    height: '16px !important',
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

const workspaceData = [
  {
    id: 1,
    name: 'SK Telecom',
    icon: 'S',
    iconColor: 'color-teal',
    domain: 'www.sktelecom.ai',
    creator: '홍길동',
    memberCount: 1000,
    userStatus: {
      total: 1,
      owner: 1,
      admin: 0,
      member: 0
    },
    createdAt: '2025-09-01',
    inactiveDate: '-',
    isEnabled: true,
    isSelected: false
  },
  {
    id: 2,
    name: 'LG Electronics',
    icon: 'L',
    iconColor: 'color-blue',
    domain: 'www.lgelectronics.ai',
    creator: '김철수',
    memberCount: 750,
    userStatus: {
      total: 45,
      owner: 1,
      admin: 4,
      member: 40
    },
    createdAt: '2025-08-15',
    inactiveDate: '-',
    isEnabled: true,
    isSelected: false
  },
  {
    id: 3,
    name: 'Samsung',
    icon: 'S',
    iconColor: 'color-purple',
    domain: 'www.samsung.ai',
    creator: '이영희',
    memberCount: 1200,
    userStatus: {
      total: 67,
      owner: 1,
      admin: 6,
      member: 60
    },
    createdAt: '2025-07-20',
    inactiveDate: '-',
    isEnabled: false,
    isSelected: false
  }
]

const WorkspacePage = () => {
  const [workspaces, setWorkspaces] = useState(workspaceData)
  const [selectAll, setSelectAll] = useState(false)
  const [searchType, setSearchType] = useState('전체')
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState('10개씩 보기')
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [newWorkspace, setNewWorkspace] = useState({
    name: '',
    domain: '',
    description: '',
    iconColor: 'color-purple' // 기본값으로 보라색 설정
  })

  const handleSelectAll = (e) => {
    const checked = e.target.checked
    setSelectAll(checked)
    setWorkspaces(workspaces.map(ws => ({ ...ws, isSelected: checked })))
  }

  const handleSelectWorkspace = (id, checked) => {
    setWorkspaces(workspaces.map(ws => 
      ws.id === id ? { ...ws, isSelected: checked } : ws
    ))
    const selectedCount = workspaces.filter(w => w.id === id ? checked : w.isSelected).length
    setSelectAll(selectedCount === workspaces.length)
  }

  const handleMemberCountChange = (id, newCount) => {
    setWorkspaces(workspaces.map(ws =>
      ws.id === id ? { ...ws, memberCount: Math.max(0, newCount) } : ws
    ))
  }

  const handleStatusToggle = (id, newStatus) => {
    setWorkspaces(workspaces.map(ws =>
      ws.id === id ? { ...ws, isEnabled: newStatus } : ws
    ))
  }

  const handleLicenseUpload = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.lic,.license,.txt'
    input.onchange = (e) => {
      const file = e.target.files[0]
      if (file) {
        console.log('License file selected:', file.name)
      }
    }
    input.click()
  }

  const handleSearch = () => {
    console.log('Search:', { searchType, searchTerm })
  }

  const handleDelete = () => {
    const selectedWorkspaces = workspaces.filter(ws => ws.isSelected)
    if (selectedWorkspaces.length === 0) {
      alert('삭제할 워크스페이스를 선택해주세요.')
      return
    }
    if (window.confirm(`선택된 ${selectedWorkspaces.length}개의 워크스페이스를 삭제하시겠습니까?`)) {
      setWorkspaces(prev => prev.filter(ws => !ws.isSelected))
      setSelectAll(false)
    }
  }

  const handleEdit = () => {
    const selectedWorkspaces = workspaces.filter(ws => ws.isSelected)
    if (selectedWorkspaces.length === 0) {
      alert('수정할 워크스페이스를 선택해주세요.')
      return
    }
    console.log('Edit workspaces:', selectedWorkspaces)
  }

  const handleCreate = () => {
    setIsCreateModalOpen(true)
  }

  const handleCreateWorkspace = () => {
    if (!newWorkspace.name.trim()) {
      alert('워크스페이스 이름을 입력해주세요.')
      return
    }
    if (!newWorkspace.domain.trim()) {
      alert('도메인을 입력해주세요.')
      return
    }
    
    // 새 워크스페이스 생성
    const newId = Math.max(...workspaces.map(w => w.id)) + 1
    const workspaceToAdd = {
      id: newId,
      name: newWorkspace.name,
      icon: newWorkspace.name.charAt(0).toUpperCase(),
      iconColor: newWorkspace.iconColor,
      domain: newWorkspace.domain,
      creator: '관리자',
      memberCount: 1,
      userStatus: {
        total: 1,
        owner: 1,
        admin: 0,
        member: 0
      },
      createdAt: new Date().toISOString().split('T')[0],
      inactiveDate: '-',
      isEnabled: true,
      isSelected: false
    }
    
    setWorkspaces([...workspaces, workspaceToAdd])
    setIsCreateModalOpen(false)
    setNewWorkspace({
      name: '',
      domain: '',
      description: '',
      iconColor: 'color-purple'
    })
    alert('워크스페이스가 생성되었습니다.')
  }

  const handleModalClose = () => {
    setIsCreateModalOpen(false)
    setNewWorkspace({
      name: '',
      domain: '',
      description: '',
      iconColor: 'color-purple'
    })
  }

  return (
    <Layout className="page-workspace workspace-page">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">워크스페이스 관리</h1>
        </div>

        <div className="content-body">
          <div className="search-section">
            <div className="common-topbar">
              <div className="tb-left" style={{ width: '50%' }}>
                <div className="license-info">
                  <p>라이센스 적용 가능한 인원 : 무제한</p>
                  <p>라이센스 사용 중인 인원 : 83명</p>
                </div>
                <Button 
                  className="new-button"
                  variant="contained"
                  onClick={handleLicenseUpload}
                >
                  라이센스 업로드
                </Button>
              </div>
              
              <div className="tb-right tb-right-full">
                <div className="right-tail">
                  <FormControl size="small" className="condition-select">
                    <Select
                      value={searchType}
                      onChange={(e) => setSearchType(e.target.value)}
                      variant="outlined"
                    >
                      <MenuItem value="전체">전체</MenuItem>
                      <MenuItem value="이름">이름</MenuItem>
                      <MenuItem value="도메인">도메인</MenuItem>
                      <MenuItem value="소유자">소유자</MenuItem>
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
                
                <ButtonGroup variant="outlined" size="medium">
                  <Button 
                    onClick={handleDelete}
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
                    onClick={handleEdit}
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
                    onClick={handleCreate}
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
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: 'center', width: '50px' }}>
                    <CustomCheckbox
                      className="select-all"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      size="small"
                    />
                  </th>
                  <th>워크스페이스명</th>
                  <th>도메인</th>
                  <th>생성자</th>
                  <th>구성원</th>
                  <th>사용자 현황</th>
                  <th>생성일</th>
                </tr>
              </thead>
              <tbody>
                {workspaces.map((workspace) => (
                  <tr key={workspace.id}>
                    <td style={{ textAlign: 'center' }}>
                      <CustomCheckbox
                        checked={workspace.isSelected}
                        onChange={(e) => handleSelectWorkspace(workspace.id, e.target.checked)}
                        size="small"
                      />
                    </td>
                    <td>
                      <div className="workspace-name">
                        <div className={`workspace-icon ${workspace.iconColor}`}>
                          {workspace.icon}
                        </div>
                        <span>{workspace.name}</span>
                      </div>
                    </td>
                    <td>{workspace.domain}</td>
                    <td>{workspace.creator}</td>
                    <td>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <TextField
                          type="number"
                          value={workspace.memberCount}
                          onChange={(e) => handleMemberCountChange(workspace.id, parseInt(e.target.value) || 0)}
                          variant="outlined"
                          size="small"
                          sx={{ 
                            width: '70px',
                            '& input': { textAlign: 'center', fontSize: '14px' }
                          }}
                          inputProps={{ min: 0 }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <IconButton
                            size="small"
                            onClick={() => handleMemberCountChange(workspace.id, workspace.memberCount + 1)}
                            sx={{ 
                              padding: '2px',
                              minWidth: '20px',
                              height: '16px',
                              borderRadius: '2px',
                              border: '1px solid',
                              borderColor: 'grey.300',
                              mb: 0.25,
                              '&:hover': { borderColor: 'primary.main' }
                            }}
                          >
                            <Add sx={{ fontSize: '12px' }} />
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={() => handleMemberCountChange(workspace.id, workspace.memberCount - 1)}
                            sx={{ 
                              padding: '2px',
                              minWidth: '20px',
                              height: '16px',
                              borderRadius: '2px',
                              border: '1px solid',
                              borderColor: 'grey.300',
                              '&:hover': { borderColor: 'primary.main' }
                            }}
                          >
                            <Remove sx={{ fontSize: '12px' }} />
                          </IconButton>
                        </Box>
                      </Box>
                    </td>
                    <td>
                      <div className="user-status">
                        <div className="user-total">총 {workspace.userStatus.total}명</div>
                        <div className="user-roles">
                          <span className="role-item owner">소유자 {workspace.userStatus.owner}</span>
                          {workspace.userStatus.admin > 0 && (
                            <span className="role-item admin">, 관리자 {workspace.userStatus.admin}</span>
                          )}
                          {workspace.userStatus.member > 0 && (
                            <span className="role-item member">, 멤버 {workspace.userStatus.member}</span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>{workspace.createdAt}</td>
                    <td>{workspace.inactiveDate}</td>
                    <td>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={workspace.isEnabled}
                            onChange={(e) => handleStatusToggle(workspace.id, e.target.checked)}
                            size="small"
                            color="primary"
                          />
                        }
                        label=""
                        className="switch-control"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 워크스페이스 생성 모달 */}
      <Dialog 
        open={isCreateModalOpen} 
        onClose={handleModalClose}
        maxWidth="sm" 
        fullWidth
      >
        <DialogTitle style={{ textAlign: 'center', paddingBottom: '20px' }}>
          워크스페이스 생성
        </DialogTitle>
        <DialogContent>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '8px' }}>
            {/* 워크스페이스 썸네일 */}
            <div style={{ marginBottom: '30px' }}>
              <div 
                style={{ 
                  width: '100px', 
                  height: '100px', 
                  borderRadius: '8px',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '32px',
                  color: 'white',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  backgroundColor: '#9c27b0'
                }}
                onClick={() => {
                  // 이미지 업로드 기능 추후 구현
                  console.log('썸네일 이미지 업로드')
                }}
              >
                {newWorkspace.name ? newWorkspace.name.charAt(0).toUpperCase() : 'W'}
              </div>
            </div>

            {/* 이름 입력 */}
            <div style={{ width: '100%', marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>이름</label>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="워크스페이스 이름을 입력하세요"
                value={newWorkspace.name}
                onChange={(e) => setNewWorkspace(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            {/* 도메인 입력 */}
            <div style={{ width: '100%', marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>도메인</label>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="도메인을 입력하세요"
                value={newWorkspace.domain}
                onChange={(e) => setNewWorkspace(prev => ({ ...prev, domain: e.target.value }))}
                error={newWorkspace.domain !== '' && !newWorkspace.domain.includes('.')}
                helperText={newWorkspace.domain !== '' && !newWorkspace.domain.includes('.') ? "올바른 도메인 형식이 아닙니다." : ""}
              />
            </div>

            {/* 비고 입력 */}
            <div style={{ width: '100%', marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>비고</label>
              <TextField
                fullWidth
                multiline
                rows={3}
                variant="outlined"
                placeholder="비고를 입력하세요"
                value={newWorkspace.description}
                onChange={(e) => setNewWorkspace(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions style={{ padding: '20px', justifyContent: 'center' }}>
          <ButtonGroup variant="outlined" size="medium">
            <Button 
              onClick={handleModalClose}
              style={{ 
                minWidth: '80px',
                color: '#666',
                borderColor: '#ddd',
                backgroundColor: 'white'
              }}
            >
              취소
            </Button>
            <Button 
              onClick={handleCreateWorkspace}
              variant="contained"
              style={{ 
                minWidth: '80px',
                backgroundColor: '#1976d2',
                color: 'white',
                borderColor: '#1976d2'
              }}
            >
              확인
            </Button>
          </ButtonGroup>
        </DialogActions>
      </Dialog>
    </Layout>
  )
}

export default WorkspacePage
