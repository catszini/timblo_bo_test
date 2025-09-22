import React, { useState } from 'react'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Switch,
  Avatar,
  Checkbox,
  IconButton
} from '@mui/material'
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material'

const workspaceData = [
  {
    id: 1,
    name: 'SK Telecom',
    initial: 'S',
    color: '#14B8A6',
    domain: 'www.sktelecom.ai',
    creator: '홍길동',
    memberCount: 1000,
    userStatus: {
      total: 1,
      owner: 1,
      admin: 0,
      member: 0
    },
    createdDate: '2025-09-01',
    inactiveDate: '-',
    isActive: true
  },
  {
    id: 2,
    name: 'SK Hynix',
    initial: 'S',
    color: '#6366F1',
    domain: 'www.skhynix.com',
    creator: '홍길동',
    memberCount: 1000,
    userStatus: {
      total: 8,
      owner: 2,
      admin: 1,
      member: 5
    },
    createdDate: '2025-08-15',
    inactiveDate: '2025-12-31',
    isActive: false
  },
  {
    id: 3,
    name: 'SK On',
    initial: 'S',
    color: '#F43F5E',
    domain: 'www.sk-on.com',
    creator: '홍길동',
    memberCount: 1000,
    userStatus: {
      total: 3,
      owner: 1,
      admin: 0,
      member: 2
    },
    createdDate: '2025-07-20',
    inactiveDate: '2025-11-15',
    isActive: false
  },
  {
    id: 4,
    name: 'SK C&C',
    initial: 'S',
    color: '#F59E0B',
    domain: 'www.skcc.com',
    creator: 'jwpark12',
    memberCount: 1000,
    userStatus: {
      total: 15,
      owner: 1,
      admin: 3,
      member: 11
    },
    createdDate: '2025-09-05',
    inactiveDate: '-',
    isActive: true
  },
  {
    id: 5,
    name: 'SK Innovation',
    initial: 'S',
    color: '#10B981',
    domain: 'www.skinnovation.com',
    creator: '홍길동',
    memberCount: 1000,
    userStatus: {
      total: 2,
      owner: 1,
      admin: 0,
      member: 1
    },
    createdDate: '2025-08-30',
    inactiveDate: '-',
    isActive: true
  },
  {
    id: 6,
    name: 'SK Networks',
    initial: 'S',
    color: '#14B8A6',
    domain: 'www.sknetworks.co.kr',
    creator: '홍길동',
    memberCount: 1000,
    userStatus: {
      total: 1,
      owner: 1,
      admin: 0,
      member: 0
    },
    createdDate: '2025-06-10',
    inactiveDate: '2026-01-20',
    isActive: false
  },
  {
    id: 7,
    name: 'SK Materials',
    initial: 'S',
    color: '#6366F1',
    domain: 'www.skmaterials.com',
    creator: '홍길동',
    memberCount: 1000,
    userStatus: {
      total: 1,
      owner: 1,
      admin: 0,
      member: 0
    },
    createdDate: '2025-09-01',
    inactiveDate: '2025-10-01',
    isActive: true
  },
  {
    id: 8,
    name: 'SK Biopharm',
    initial: 'S',
    color: '#F43F5E',
    domain: 'www.skbiopharm.com',
    creator: '김혁',
    memberCount: 120,
    userStatus: {
      total: 1,
      owner: 1,
      admin: 0,
      member: 0
    },
    createdDate: '2025-09-12',
    inactiveDate: '-',
    isActive: true
  },
  {
    id: 9,
    name: 'SK E&S',
    initial: 'S',
    color: '#14B8A6',
    domain: 'www.skens.com',
    creator: '이민준',
    memberCount: 1000,
    userStatus: {
      total: 1,
      owner: 1,
      admin: 0,
      member: 0
    },
    createdDate: '2025-05-25',
    inactiveDate: '2025-10-30',
    isActive: false
  },
  {
    id: 10,
    name: 'SK Shieldus',
    initial: 'S',
    color: '#84CC16',
    domain: 'www.skshieldus.com',
    creator: '박서준',
    memberCount: 1000,
    userStatus: {
      total: 1,
      owner: 1,
      admin: 0,
      member: 0
    },
    createdDate: '2025-09-18',
    inactiveDate: '-',
    isActive: true
  }
]

function WorkspacePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState('10개씩 보기')
  const [searchCategory, setSearchCategory] = useState('전체')
  const [selectedRows, setSelectedRows] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  const [workspaces, setWorkspaces] = useState(workspaceData)

  const handleSelectAll = (checked) => {
    setSelectAll(checked)
    if (checked) {
      setSelectedRows(workspaces.map(item => item.id))
    } else {
      setSelectedRows([])
    }
  }

  const handleSelectRow = (id, checked) => {
    if (checked) {
      setSelectedRows(prev => [...prev, id])
    } else {
      setSelectedRows(prev => prev.filter(rowId => rowId !== id))
      setSelectAll(false)
    }
  }

  const handleMemberCountChange = (id, newValue) => {
    const value = parseInt(newValue) || 0
    if (value >= 0) {
      setWorkspaces(prev => 
        prev.map(workspace => 
          workspace.id === id 
            ? { ...workspace, memberCount: value }
            : workspace
        )
      )
    }
  }

  const handleSpinnerClick = (id, increment) => {
    const workspace = workspaces.find(w => w.id === id)
    if (workspace) {
      const newValue = Math.max(0, workspace.memberCount + increment)
      handleMemberCountChange(id, newValue)
    }
  }

  return (
    <Box sx={{ width: '100%', maxWidth: '100%' }}>
      <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 600 }}>
        워크스페이스 관리
      </Typography>

      {/* 상단 정보 및 컨트롤 */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'space-between', 
        alignItems: { xs: 'stretch', lg: 'flex-start' },
        gap: { xs: 3, lg: 0 },
        mb: 3 
      }}>
        {/* 왼쪽: 라이센스 정보 */}
        <Box>
          <Typography sx={{ fontSize: '14px', color: '#666', mb: 0.5 }}>
            라이센스 적용 가능한 인원 : 무제한
          </Typography>
          <Typography sx={{ fontSize: '14px', color: '#666', mb: 2 }}>
            라이센스 사용 중인 인원 : 83명
          </Typography>
          <Button 
            variant="outlined"
            sx={{ 
              fontSize: '14px',
              borderColor: '#E5E5E5',
              color: '#666'
            }}
          >
            라이센스 업로드
          </Button>
        </Box>

        {/* 오른쪽: 검색 및 액션 */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'stretch', sm: 'center' }, 
          gap: 2,
          flexWrap: 'wrap'
        }}>
          {/* 검색 영역 */}
          <FormControl size="small">
            <Select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              sx={{ 
                minWidth: 80,
                height: '36px',
                fontSize: '14px'
              }}
            >
              <MenuItem value="전체">전체</MenuItem>
              <MenuItem value="이름">이름</MenuItem>
              <MenuItem value="도메인">도메인</MenuItem>
              <MenuItem value="소유자">소유자</MenuItem>
            </Select>
          </FormControl>

          <TextField
            size="small"
            placeholder="검색어를 입력해주세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ 
              width: { xs: '100%', sm: '200px' },
              minWidth: { sm: '150px' },
              '& .MuiOutlinedInput-root': {
                height: '36px',
                fontSize: '14px'
              }
            }}
          />

          <Button 
            variant="text"
            color="primary"
            sx={{ 
              height: '36px',
              fontSize: '14px'
            }}
          >
            조회
          </Button>

          <FormControl size="small">
            <Select
              value={pageSize}
              onChange={(e) => setPageSize(e.target.value)}
              sx={{ 
                height: '36px',
                fontSize: '14px',
                minWidth: '100px'
              }}
            >
              <MenuItem value="10개씩 보기">10개씩 보기</MenuItem>
              <MenuItem value="20개씩 보기">20개씩 보기</MenuItem>
              <MenuItem value="50개씩 보기">50개씩 보기</MenuItem>
            </Select>
          </FormControl> 

          <Button 
            variant="outlined"
            color="error"
            sx={{ fontSize: '14px', height: '36px' }}
          >
            삭제
          </Button>
          <Button 
            variant="outlined"
            sx={{ fontSize: '14px', height: '36px' }}
          >
            수정
          </Button>
          <Button 
            variant="text"
            color="primary"
            sx={{ 
              fontSize: '14px', 
              height: '36px'
            }}
          >
            생성
          </Button>
        </Box>
      </Box>

      {/* 테이블 */}
      <TableContainer 
        component={Paper} 
        sx={{ 
          boxShadow: 'none', 
          border: '1px solid #E5E5E5',
          width: '100%'
        }}
      >
        <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
          <TableHead>
            <TableRow sx={{ }}>
              <TableCell 
                sx={{ 
                  borderBottom: '1px solid #E5E5E5',
                  width: { xs: '40px', sm: '50px' },
                  padding: { xs: '8px 4px', sm: '16px' }
                }}
              >
                <Checkbox 
                  checked={selectAll}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  size="small"
                />
              </TableCell>
              <TableCell sx={{ 
                fontWeight: 600, 
                fontSize: '14px', 
                borderBottom: '1px solid #E5E5E5',
                width: { xs: '25%', sm: '20%' },
                padding: { xs: '8px 4px', sm: '16px' }
              }}>
                워크스페이스명
              </TableCell>
              <TableCell sx={{ 
                fontWeight: 600, 
                fontSize: '14px', 
                borderBottom: '1px solid #E5E5E5',
                display: { xs: 'none', md: 'table-cell' },
                width: '15%'
              }}>
                도메인
              </TableCell>
              <TableCell sx={{ 
                fontWeight: 600, 
                fontSize: '14px', 
                borderBottom: '1px solid #E5E5E5',
                display: { xs: 'none', sm: 'table-cell' },
                width: '10%'
              }}>
                생성자
              </TableCell>
              <TableCell sx={{ 
                fontWeight: 600, 
                fontSize: '14px', 
                borderBottom: '1px solid #E5E5E5',
                width: { xs: '25%', sm: '15%' },
                padding: { xs: '8px 4px', sm: '16px' }
              }}>
                구성원
              </TableCell>
              <TableCell sx={{ 
                fontWeight: 600, 
                fontSize: '14px', 
                borderBottom: '1px solid #E5E5E5',
                display: { xs: 'none', lg: 'table-cell' },
                width: '15%'
              }}>
                사용자 현황
              </TableCell>
              <TableCell sx={{ 
                fontWeight: 600, 
                fontSize: '14px', 
                borderBottom: '1px solid #E5E5E5',
                display: { xs: 'none', sm: 'table-cell' },
                width: '10%'
              }}>
                생성일
              </TableCell>
              <TableCell sx={{ 
                fontWeight: 600, 
                fontSize: '14px', 
                borderBottom: '1px solid #E5E5E5',
                display: { xs: 'none', md: 'table-cell' },
                width: '10%'
              }}>
                비활성일
              </TableCell>
              <TableCell sx={{ 
                fontWeight: 600, 
                fontSize: '14px', 
                borderBottom: '1px solid #E5E5E5',
                width: { xs: '20%', sm: '10%' },
                padding: { xs: '8px 4px', sm: '16px' }
              }}>
                사용여부 ▲
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workspaces.map((workspace) => (
              <TableRow key={workspace.id} sx={{ }}>
                <TableCell sx={{ 
                  borderBottom: '1px solid #F1F3F4',
                  padding: { xs: '8px 4px', sm: '16px' }
                }}>
                  <Checkbox 
                    checked={selectedRows.includes(workspace.id)}
                    onChange={(e) => handleSelectRow(workspace.id, e.target.checked)}
                    size="small"
                  />
                </TableCell>
                <TableCell sx={{ 
                  borderBottom: '1px solid #F1F3F4',
                  padding: { xs: '8px 4px', sm: '16px' }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1.5 } }}>
                    <Avatar 
                      sx={{ 
                        width: { xs: 20, sm: 24 }, 
                        height: { xs: 20, sm: 24 }, 
                        backgroundColor: workspace.color,
                        fontSize: { xs: '10px', sm: '12px' },
                        fontWeight: 600
                      }}
                    >
                      {workspace.initial}
                    </Avatar>
                    <Typography sx={{ 
                      fontSize: { xs: '12px', sm: '14px' }, 
                      fontWeight: 500,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {workspace.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ 
                  fontSize: '14px', 
                  borderBottom: '1px solid #F1F3F4',
                  display: { xs: 'none', md: 'table-cell' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {workspace.domain}
                </TableCell>
                <TableCell sx={{ 
                  fontSize: '14px', 
                  borderBottom: '1px solid #F1F3F4',
                  display: { xs: 'none', sm: 'table-cell' }
                }}>
                  {workspace.creator}
                </TableCell>
                <TableCell sx={{ 
                  borderBottom: '1px solid #F1F3F4',
                  padding: { xs: '8px 4px', sm: '16px' }
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    border: '1px solid #E5E5E5',
                    borderRadius: '4px',
                    width: 'fit-content',
                    maxWidth: '100%'
                  }}>
                    <TextField
                      type="number"
                      value={workspace.memberCount}
                      onChange={(e) => handleMemberCountChange(workspace.id, e.target.value)}
                      size="small"
                      inputProps={{ min: 0 }}
                      sx={{ 
                        width: { xs: '50px', sm: '60px' },
                        '& .MuiOutlinedInput-root': {
                          height: '28px',
                          fontSize: { xs: '12px', sm: '14px' },
                          fontWeight: 500,
                          color: '#F59E0B',
                          border: 'none',
                          '& fieldset': { border: 'none' },
                          '&:hover fieldset': { border: 'none' },
                          '&.Mui-focused fieldset': { border: 'none' },
                          paddingRight: 0
                        },
                        '& input': {
                          textAlign: 'center',
                          padding: '4px 8px',
                          // 기본 number input 스피너 화살표 제거
                          '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                            WebkitAppearance: 'none',
                            margin: 0
                          },
                          '&[type=number]': {
                            MozAppearance: 'textfield' // Firefox용
                          }
                        }
                      }}
                    />
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      borderLeft: '1px solid #E5E5E5'
                    }}>
                      <IconButton 
                        size="small" 
                        onClick={() => handleSpinnerClick(workspace.id, 1)}
                        sx={{ 
                          padding: '2px', 
                          minWidth: { xs: 16, sm: 20 }, 
                          height: 14,
                          borderRadius: 0,
                          '& .MuiSvgIcon-root': { fontSize: { xs: 10, sm: 12 }, color: '#666' }
                        }}
                      >
                        <KeyboardArrowUp />
                      </IconButton>
                      <IconButton 
                        size="small" 
                        onClick={() => handleSpinnerClick(workspace.id, -1)}
                        sx={{ 
                          padding: '2px', 
                          minWidth: { xs: 16, sm: 20 }, 
                          height: 14,
                          borderRadius: 0,
                          borderTop: '1px solid #E5E5E5',
                          '& .MuiSvgIcon-root': { fontSize: { xs: 10, sm: 12 }, color: '#666' }
                        }}
                      >
                        <KeyboardArrowDown />
                      </IconButton>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ 
                  borderBottom: '1px solid #F1F3F4',
                  display: { xs: 'none', lg: 'table-cell' }
                }}>
                  <Box>
                    <Typography sx={{ 
                      fontSize: '14px', 
                      fontWeight: 600, 
                      color: '#374151',
                      mb: 0.5
                    }}>
                      총 {workspace.userStatus.total}명
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
                      소유자 {workspace.userStatus.owner}
                      {workspace.userStatus.admin > 0 && ` / 관리자 ${workspace.userStatus.admin}`}
                      {workspace.userStatus.member > 0 && ` / 구성원 ${workspace.userStatus.member}`}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ 
                  fontSize: { xs: '12px', sm: '14px' }, 
                  borderBottom: '1px solid #F1F3F4',
                  display: { xs: 'none', sm: 'table-cell' }
                }}>
                  {workspace.createdDate}
                </TableCell>
                <TableCell sx={{ 
                  fontSize: '14px', 
                  borderBottom: '1px solid #F1F3F4',
                  display: { xs: 'none', md: 'table-cell' }
                }}>
                  {workspace.inactiveDate}
                </TableCell>
                <TableCell sx={{ 
                  borderBottom: '1px solid #F1F3F4',
                  padding: { xs: '8px 4px', sm: '16px' }
                }}>
                  <Switch 
                    checked={workspace.isActive} 
                    size="small"
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#2563EB'},
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      }}}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 페이지네이션 */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        mt: 3,
        gap: 0.5
      }}>
        <Button 
          variant="text"
          color="primary"
          size="small"
          sx={{ 
            width: '32px',
            height: '32px',
            minWidth: '32px',
            borderRadius: '50%',
            fontSize: '14px',
            padding: 0
          }}
        >
          1
        </Button>
        <Button 
          variant="text"
              color="primary"
          size="small"
          sx={{ 
            width: '32px',
            height: '32px',
            minWidth: '32px',
            borderRadius: '50%',
            fontSize: '14px',
            color: '#6B7280',
            padding: 0
          }}
        >
          2
        </Button>
        <Button 
          variant="text"
              color="primary"
          size="small"
          sx={{ 
            width: '32px',
            height: '32px',
            minWidth: '32px',
            borderRadius: '50%',
            fontSize: '14px',
            color: '#6B7280',
            padding: 0
          }}
        >
          3
        </Button>
        <Typography sx={{ fontSize: '14px', color: '#6B7280', mx: 1 }}>
          ...
        </Typography>
      </Box>
    </Box>
  )
}

export default WorkspacePage