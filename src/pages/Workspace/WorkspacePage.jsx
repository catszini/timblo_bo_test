import React, { useState } from 'react'
import {
  TextField,
  Button,
  ButtonGroup,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  InputLabel,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Pagination
} from '@mui/material'
import { Search, Add } from '@mui/icons-material'
import Layout from '../../components/Layout/Layout'

const WorkspacePage = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [newWorkspace, setNewWorkspace] = useState({
    name: '',
    domain: '',
    description: ''
  })

  // 워크스페이스 데이터 (HTML 최신 버전과 일치)
  const workspaceData = [
    {
      id: 1,
      workspace: { name: 'SK Telecom', icon: 'S', color: 'color-teal' },
      domain: 'www.sktelecom.ai',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 1, admin: 1, member: 0 },
      createdDate: '2025-09-01 14:30:15'
    },
    {
      id: 2,
      workspace: { name: 'SK Hynix', icon: 'S', color: 'color-indigo' },
      domain: 'www.skhynix.com',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 8, admin: 1, member: 5 },
      createdDate: '2025-08-15 09:22:43'
    },
    {
      id: 3,
      workspace: { name: 'SK On', icon: 'S', color: 'color-rose' },
      domain: 'www.sk-on.com',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 3, admin: 0, member: 2 },
      createdDate: '2025-07-20 16:45:28'
    },
    {
      id: 4,
      workspace: { name: 'SK C&C', icon: 'S', color: 'color-amber' },
      domain: 'www.skcc.com',
      creator: 'jwpark12',
      memberCount: 1000,
      userStatus: { total: 15, admin: 3, member: 11 },
      createdDate: '2025-09-05 11:18:52'
    },
    {
      id: 5,
      workspace: { name: 'SK Innovation', icon: 'S', color: 'color-blue' },
      domain: 'www.skinnovation.com',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 2, admin: 0, member: 1 },
      createdDate: '2025-08-30 13:07:19'
    },
    {
      id: 6,
      workspace: { name: 'SK Networks', icon: 'S', color: 'color-emerald' },
      domain: 'www.sknetworks.co.kr',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 1, admin: 1, member: 0 },
      createdDate: '2025-06-10 08:42:17'
    },
    {
      id: 7,
      workspace: { name: 'SK Materials', icon: 'S', color: 'color-violet' },
      domain: 'www.skmaterials.com',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 1, admin: 1, member: 0 },
      createdDate: '2025-09-01 10:15:33'
    },
    {
      id: 8,
      workspace: { name: 'SK Biopharm', icon: 'S', color: 'color-rose' },
      domain: 'www.skbiopharm.com',
      creator: '김영희',
      memberCount: 120,
      userStatus: { total: 1, admin: 1, member: 0 },
      createdDate: '2025-09-12 15:28:04'
    },
    {
      id: 9,
      workspace: { name: 'SK E&S', icon: 'S', color: 'color-cyan' },
      domain: 'www.skens.com',
      creator: '이민준',
      memberCount: 1000,
      userStatus: { total: 1, admin: 1, member: 0 },
      createdDate: '2025-05-25 12:55:41'
    },
    {
      id: 10,
      workspace: { name: 'SK Shieldus', icon: 'S', color: 'color-lime' },
      domain: 'www.skshieldus.com',
      creator: '박서준',
      memberCount: 1000,
      userStatus: { total: 1, admin: 1, member: 0 },
      createdDate: '2025-09-18 17:33:26'
    }
  ]

  // 전체 선택 핸들러
  const handleSelectAll = (e) => {
    const checked = e.target.checked
    setSelectAll(checked)
    if (checked) {
      setSelectedRows(workspaceData.map(item => item.id))
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
    setSelectAll(newSelectedRows.length === workspaceData.length)
  }

  // 모달 핸들러
  const handleCreateClick = () => {
    setIsCreateModalOpen(true)
  }

  const handleModalClose = () => {
    setIsCreateModalOpen(false)
    setNewWorkspace({
      name: '',
      domain: '',
      description: ''
    })
  }

  const handleCreateWorkspace = () => {
    console.log('새 워크스페이스 생성:', newWorkspace)
    handleModalClose()
  }

  // 스피너 핸들러
  const handleSpinnerChange = (id, newValue) => {
    console.log(`워크스페이스 ${id} 구성원 수 변경:`, newValue)
  }

  // 사용자 현황 렌더링
  const renderUserStatus = (userStatus) => {
    const roles = []
    if (userStatus.admin > 0) {
      roles.push(<span key="admin" className="role-item admin">관리자 {userStatus.admin}</span>)
    }
    if (userStatus.member > 0) {
      if (roles.length > 0) {
        roles.push(<span key="sep" className="role-separator">/</span>)
      }
      roles.push(<span key="member" className="role-item member">구성원 {userStatus.member}</span>)
    }

    return (
      <div className="user-status-display">
        <div className="user-total">총 {userStatus.total}명</div>
        {roles.length > 0 && (
          <div className="user-roles">
            {roles}
          </div>
        )}
      </div>
    )
  }

  // 워크스페이스 아이콘 색상 랜덤 생성
  const getRandomIconColor = () => {
    const colors = ['#F59E0B', '#EF4444', '#10B981', '#3B82F6', '#8B5CF6', '#F97316']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <Layout className="page-workspace">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">워크스페이스 관리</h1>
        </div>

        <div className="content-body">
          <Box sx={{ mb: 3 }}>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      총 워크 스페이스 갯수 : {workspaceData.length}개
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      라이센스 사용 인원 : 83명 / 무제한
                    </Typography>
                  </Box>
                  <Button 
                    variant="contained" 
                    size="small"
                    sx={{ ml: 2 }}
                  >
                    라이선스 업로드
                  </Button>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FormControl sx={{ minWidth: 120 }}>
                    <Select defaultValue="전체" variant="outlined">
                      <MenuItem value="전체">전체</MenuItem>
                      <MenuItem value="워크스페이스명">워크스페이스명</MenuItem>
                      <MenuItem value="도메인">도메인</MenuItem>
                      <MenuItem value="생성자">생성자</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <TextField
                    placeholder="검색어를 입력해주세요."
                    variant="outlined"
                    sx={{ minWidth: 250 }}
                    InputProps={{
                      startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />
                    }}
                  />
                  
                  <Button variant="contained">
                    조회
                  </Button>
                  
                  <ButtonGroup variant="outlined" sx={{ ml: 1 }}>
                    <Button 
                      color="error"
                    >
                      삭제
                    </Button>
                    
                    <Button>
                      수정
                    </Button>
                    
                    <Button 
                      variant="contained"
                      onClick={handleCreateClick}
                    >
                      생성
                    </Button>
                  </ButtonGroup>
                  
                  <FormControl sx={{ minWidth: 120, ml: 1 }}>
                    <Select defaultValue="10개씩 보기" variant="outlined">
                      <MenuItem value="10개씩 보기">10개씩 보기</MenuItem>
                      <MenuItem value="20개씩 보기">20개씩 보기</MenuItem>
                      <MenuItem value="50개씩 보기">50개씩 보기</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Paper>
          </Box>

          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectAll}
                      onChange={handleSelectAll}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>워크스페이스명</TableCell>
                  <TableCell>조직</TableCell>
                  <TableCell>생성자</TableCell>
                  <TableCell>구성원</TableCell>
                  <TableCell>사용자 현황</TableCell>
                  <TableCell>생성시간</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {workspaceData.map((item) => (
                  <TableRow 
                    key={item.id}
                    hover
                    selected={selectedRows.includes(item.id)}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedRows.includes(item.id)}
                        onChange={() => handleRowSelect(item.id)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box 
                          className={`workspace-icon ${item.workspace.color}`}
                          sx={{ 
                            width: 32, 
                            height: 32, 
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 600,
                            mr: 1.5
                          }}
                        >
                          {item.workspace.icon}
                        </Box>
                        <Typography variant="body2">
                          {item.workspace.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{item.domain}</TableCell>
                    <TableCell>{item.creator}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <TextField
                          type="number"
                          size="small"
                          value={item.memberCount}
                          onChange={(e) => handleSpinnerChange(item.id, e.target.value)}
                          sx={{ width: 80 }}
                          inputProps={{ min: 0 }}
                        />
                      </Box>
                    </TableCell>
                    <TableCell>
                      {renderUserStatus(item.userStatus)}
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {item.createdDate}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* 페이지네이션 */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination 
              count={3} 
              page={1} 
              variant="outlined" 
              shape="rounded"
            />
          </Box>
        </div>
      </div>

      {/* 워크스페이스 생성 모달 */}
      <Dialog 
        open={isCreateModalOpen} 
        onClose={handleModalClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ textAlign: 'center', pb: 2 }}>
          워크스페이스 생성
        </DialogTitle>
        
        <DialogContent>
          {/* 워크스페이스 아이콘 */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: 5,
                background: getRandomIconColor(),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                fontWeight: 600,
                color: 'white',
                boxShadow: 2
              }}
            >
              {newWorkspace.name ? newWorkspace.name.charAt(0).toUpperCase() : 'W'}
            </Box>
          </Box>

          {/* 폼 섹션 */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="이름"
              value={newWorkspace.name}
              onChange={(e) => setNewWorkspace(prev => ({ ...prev, name: e.target.value }))}
              fullWidth
              variant="outlined"
              size="small"
            />

            <TextField
              label="도메인"
              value={newWorkspace.domain}
              onChange={(e) => setNewWorkspace(prev => ({ ...prev, domain: e.target.value }))}
              fullWidth
              variant="outlined"
              size="small"
              helperText="필수 입력 항목입니다."
              error={!newWorkspace.domain}
            />

            <TextField
              label="비고"
              value={newWorkspace.description}
              onChange={(e) => setNewWorkspace(prev => ({ ...prev, description: e.target.value }))}
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              size="small"
            />
          </Box>
        </DialogContent>
        
        <DialogActions sx={{ p: 3, gap: 2 }}>
          <Button 
            onClick={handleModalClose}
            variant="outlined"
            fullWidth
          >
            취소
          </Button>
          <Button 
            onClick={handleCreateWorkspace}
            variant="contained"
            fullWidth
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  )
}

export default WorkspacePage