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
  Button,
  Checkbox,
  Grid
} from '@mui/material'

const permissionData = [
  {
    id: 1,
    name: '김민수',
    email: 'minsu.kim@sktelecom.com',
    permission: 'meeting-admin',
    permissionName: '회의관리자'
  },
  {
    id: 2,
    name: '이영희',
    email: 'younghee.lee@sktelecom.com',
    permission: 'logo-admin',
    permissionName: '로고관리자'
  },
  {
    id: 3,
    name: '박철수',
    email: 'chulsoo.park@sktelecom.com',
    permission: 'user-admin',
    permissionName: '사용자관리자'
  },
  {
    id: 4,
    name: '정수진',
    email: 'sujin.jung@sktelecom.com',
    permission: 'stats-admin',
    permissionName: '통계관리자'
  },
  {
    id: 5,
    name: '홍지훈',
    email: 'jihoon.hong@sktelecom.com',
    permission: 'content-admin',
    permissionName: '컨텐츠관리자'
  }
]

const permissionMenus = {
  'meeting-admin': {
    system: {
      name: '시스템',
      checked: true,
      children: [
        { name: '워크스페이스 관리', checked: true },
        { name: '사용자 관리', checked: true },
        { name: '메뉴 생성 관리', checked: true },
        { name: '메뉴 권한 관리', checked: true },
        { name: '사용량 통계', checked: true },
        { name: '사용자별 통계', checked: true }
      ]
    },
    workspace: {
      name: '워크스페이스',
      checked: true,
      children: [
        { name: '기능 권한 관리', checked: true },
        { name: '메뉴 권한 관리', checked: true },
        { name: '사용자 관리', checked: false },
        { name: '로고 이미지 관리', checked: false },
        { name: '회의 템플릿 관리', checked: true },
        { name: '프롬프트 관리', checked: true },
        { name: '동의서 관리', checked: false },
        { name: '캘린더 관리', checked: false },
        { name: '사용자 접속 이력', checked: false },
        { name: '다운로드 이력', checked: false },
        { name: '사용자 동의 이력', checked: false },
        { name: '설정변경 이력', checked: false },
        { name: '회의록 관리', checked: true },
        { name: '사전 관리', checked: false },
        { name: '공지사항 관리', checked: false },
        { name: '사용량 통계', checked: false },
        { name: '사용자별 통계', checked: false }
      ]
    }
  },
  'logo-admin': {
    system: {
      name: '시스템',
      checked: false,
      children: [
        { name: '워크스페이스 관리', checked: false },
        { name: '사용자 관리', checked: false },
        { name: '메뉴 생성 관리', checked: false },
        { name: '메뉴 권한 관리', checked: false },
        { name: '사용량 통계', checked: false },
        { name: '사용자별 통계', checked: false }
      ]
    },
    workspace: {
      name: '워크스페이스',
      checked: false,
      children: [
        { name: '기능 권한 관리', checked: false },
        { name: '메뉴 권한 관리', checked: false },
        { name: '사용자 관리', checked: false },
        { name: '로고 이미지 관리', checked: true },
        { name: '회의 템플릿 관리', checked: false },
        { name: '프롬프트 관리', checked: false },
        { name: '동의서 관리', checked: false },
        { name: '캘린더 관리', checked: false },
        { name: '사용자 접속 이력', checked: false },
        { name: '다운로드 이력', checked: false },
        { name: '사용자 동의 이력', checked: false },
        { name: '설정변경 이력', checked: false },
        { name: '회의록 관리', checked: false },
        { name: '사전 관리', checked: false },
        { name: '공지사항 관리', checked: false },
        { name: '사용량 통계', checked: false },
        { name: '사용자별 통계', checked: false }
      ]
    }
  },
  'user-admin': {
    system: {
      name: '시스템',
      checked: false,
      children: [
        { name: '워크스페이스 관리', checked: false },
        { name: '사용자 관리', checked: false },
        { name: '메뉴 생성 관리', checked: false },
        { name: '메뉴 권한 관리', checked: false },
        { name: '사용량 통계', checked: false },
        { name: '사용자별 통계', checked: false }
      ]
    },
    workspace: {
      name: '워크스페이스',
      checked: false,
      children: [
        { name: '기능 권한 관리', checked: false },
        { name: '메뉴 권한 관리', checked: false },
        { name: '사용자 관리', checked: true },
        { name: '로고 이미지 관리', checked: false },
        { name: '회의 템플릿 관리', checked: false },
        { name: '프롬프트 관리', checked: false },
        { name: '동의서 관리', checked: false },
        { name: '캘린더 관리', checked: false },
        { name: '사용자 접속 이력', checked: false },
        { name: '다운로드 이력', checked: false },
        { name: '사용자 동의 이력', checked: false },
        { name: '설정변경 이력', checked: false },
        { name: '회의록 관리', checked: false },
        { name: '사전 관리', checked: false },
        { name: '공지사항 관리', checked: false },
        { name: '사용량 통계', checked: false },
        { name: '사용자별 통계', checked: false }
      ]
    }
  },
  'stats-admin': {
    system: {
      name: '시스템',
      checked: false,
      children: [
        { name: '워크스페이스 관리', checked: false },
        { name: '사용자 관리', checked: false },
        { name: '메뉴 생성 관리', checked: false },
        { name: '메뉴 권한 관리', checked: false },
        { name: '사용량 통계', checked: false },
        { name: '사용자별 통계', checked: false }
      ]
    },
    workspace: {
      name: '워크스페이스',
      checked: false,
      children: [
        { name: '기능 권한 관리', checked: false },
        { name: '메뉴 권한 관리', checked: false },
        { name: '사용자 관리', checked: false },
        { name: '로고 이미지 관리', checked: false },
        { name: '회의 템플릿 관리', checked: false },
        { name: '프롬프트 관리', checked: false },
        { name: '동의서 관리', checked: false },
        { name: '캘린더 관리', checked: false },
        { name: '사용자 접속 이력', checked: false },
        { name: '다운로드 이력', checked: false },
        { name: '사용자 동의 이력', checked: false },
        { name: '설정변경 이력', checked: false },
        { name: '회의록 관리', checked: false },
        { name: '사전 관리', checked: false },
        { name: '공지사항 관리', checked: false },
        { name: '사용량 통계', checked: true },
        { name: '사용자별 통계', checked: true }
      ]
    }
  },
  'content-admin': {
    system: {
      name: '시스템',
      checked: false,
      children: [
        { name: '워크스페이스 관리', checked: false },
        { name: '사용자 관리', checked: false },
        { name: '메뉴 생성 관리', checked: false },
        { name: '메뉴 권한 관리', checked: false },
        { name: '사용량 통계', checked: false },
        { name: '사용자별 통계', checked: false }
      ]
    },
    workspace: {
      name: '워크스페이스',
      checked: true,
      children: [
        { name: '기능 권한 관리', checked: false },
        { name: '메뉴 권한 관리', checked: false },
        { name: '사용자 관리', checked: false },
        { name: '로고 이미지 관리', checked: false },
        { name: '회의 템플릿 관리', checked: true },
        { name: '프롬프트 관리', checked: true },
        { name: '동의서 관리', checked: true },
        { name: '캘린더 관리', checked: false },
        { name: '사용자 접속 이력', checked: false },
        { name: '다운로드 이력', checked: false },
        { name: '사용자 동의 이력', checked: false },
        { name: '설정변경 이력', checked: false },
        { name: '회의록 관리', checked: true },
        { name: '사전 관리', checked: true },
        { name: '공지사항 관리', checked: true },
        { name: '사용량 통계', checked: false },
        { name: '사용자별 통계', checked: false }
      ]
    }
  }
}

function WorkspaceGroupSettingPage() {
  const [selectedPermission, setSelectedPermission] = useState(permissionData[0])

  const handlePermissionSelect = (permission) => {
    setSelectedPermission(permission)
  }

  const currentMenus = permissionMenus[selectedPermission.permission] || { system: { children: [] }, workspace: { children: [] } }

  return (
    <Box sx={{ width: '100%', maxWidth: '100%' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        메뉴 권한 관리
      </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ width: '100%' }}>
        {/* 왼쪽: 권한 정보 */}
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 0, borderRadius: 0 }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between', 
              alignItems: { xs: 'stretch', sm: 'center' }, 
              gap: { xs: 2, sm: 0 },
              mb: 2,
              pb: 1,
              p: { xs: 1.5, sm: 2 },
              borderBottom: '1px solid #E5E5E5'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '16px' }, fontWeight: 600 }}>
                  권한 정보
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', sm: '16px' }, fontWeight: 600, color: '#292A2B' }}>
                  총 {permissionData.length}개
                </Typography>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                gap: 1,
                flexWrap: 'wrap'
              }}>
                <Button 
                  variant="outlined" 
                  size="small"
                  sx={{ 
                    height: '32px',
                    fontSize: { xs: '11px', sm: '12px' },
                    borderColor: '#E5E5E5',
                    color: '#4D5256',
                    flex: { xs: '1', sm: 'auto' },
                    minWidth: { xs: 'auto', sm: '60px' }
                  }}
                >
                  삭제
                </Button>
                <Button 
                  variant="outlined" 
                  size="small"
                  sx={{ 
                    height: '32px',
                    fontSize: { xs: '11px', sm: '12px' },
                    borderColor: '#E5E5E5',
                    color: '#4D5256',
                    flex: { xs: '1', sm: 'auto' },
                    minWidth: { xs: 'auto', sm: '60px' }
                  }}
                >
                  수정
                </Button>
                <Button 
                  variant="text"
              color="primary" 
                  size="small"
                  sx={{ 
                    height: '32px',
                    fontSize: { xs: '11px', sm: '12px' },
                    flex: { xs: '1', sm: 'auto' },
                    minWidth: { xs: 'auto', sm: '60px' }
                  }}
                >
                  생성
                </Button>
              </Box>
            </Box>

            <TableContainer sx={{ width: '100%', borderRadius: 0 }}>
              <Table size="small" sx={{ width: '100%', tableLayout: 'fixed' }}>
                <TableHead>
                  <TableRow>
                    <TableCell 
                      padding="checkbox" 
                      sx={{ 
                        width: { xs: '40px', sm: '50px' },
                        padding: { xs: '4px', sm: '8px' }
                      }}
                    >
                      <Checkbox size="small" />
                    </TableCell>
                    <TableCell sx={{ 
                      width: { xs: '50%', sm: '40%' },
                      fontSize: { xs: '12px', sm: '14px' },
                      fontWeight: 600
                    }}>
                      이름
                    </TableCell>
                    <TableCell sx={{ 
                      width: { xs: '50%', sm: '60%' },
                      fontSize: { xs: '12px', sm: '14px' },
                      fontWeight: 600
                    }}>
                      권한
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {permissionData.map((permission) => (
                    <TableRow 
                      key={permission.id}
                      selected={selectedPermission.id === permission.id}
                      hover
                      sx={{ cursor: 'pointer' }}
                      onClick={() => handlePermissionSelect(permission)}
                    >
                      <TableCell 
                        padding="checkbox"
                        sx={{ 
                          padding: { xs: '4px', sm: '8px' }
                        }}
                      >
                        <Checkbox size="small" />
                      </TableCell>
                      <TableCell sx={{ 
                        fontSize: { xs: '12px', sm: '14px' },
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {permission.name}
                      </TableCell>
                      <TableCell sx={{ 
                        fontSize: { xs: '12px', sm: '14px' },
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {permission.permissionName}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* 오른쪽: 권한 미리보기 */}
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: { xs: 1.5, sm: 2 } }}>
            <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '16px' }, fontWeight: 600, mb: 2 }}>
              권한 미리보기
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography sx={{ 
                fontSize: { xs: '12px', sm: '14px' }, 
                fontWeight: 500, 
                color: '#292A2B', 
                mb: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                선택된 사용자: {selectedPermission.name} ({selectedPermission.permissionName})
              </Typography>
            </Box>

            {/* 메뉴 트리 - 기존 HTML과 완전 동일한 구조 */}
            <Box sx={{ 
              '& .tree-item': {
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                py: 0.5,
                fontSize: { xs: '12px', sm: '14px' }
              },
              '& .tree-children': {
                pl: 3,
                borderLeft: '1px solid #E5E5E5',
                ml: 1
              },
              '& .MuiCheckbox-root': {
                padding: '4px'
              }
            }}>
              {/* 시스템 섹션 */}
              <Box className="tree-item">
                <Checkbox 
                  size="small"
                  checked={currentMenus.system?.checked || false}
                  onChange={() => {}}
                />
                <Typography sx={{ 
                  fontSize: { xs: '12px', sm: '14px' },
                  fontWeight: 600,
                  color: '#292A2B'
                }}>
                  시스템
                </Typography>
              </Box>
              
              <Box className="tree-children">
                {currentMenus.system?.children?.map((menu, index) => (
                  <Box key={`system-${index}`} className="tree-item">
                    <Checkbox 
                      size="small"
                      checked={menu.checked}
                      onChange={() => {}}
                    />
                    <Typography sx={{ 
                      fontSize: { xs: '12px', sm: '14px' },
                      fontWeight: menu.checked ? 500 : 400,
                      color: menu.checked ? '#292A2B' : '#6B7280'
                    }}>
                      {menu.name}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* 워크스페이스 섹션 */}
              <Box className="tree-item" sx={{ mt: 1 }}>
                <Checkbox 
                  size="small"
                  checked={currentMenus.workspace?.checked || false}
                  onChange={() => {}}
                />
                <Typography sx={{ 
                  fontSize: { xs: '12px', sm: '14px' },
                  fontWeight: 600,
                  color: '#292A2B'
                }}>
                  워크스페이스
                </Typography>
              </Box>
              
              <Box className="tree-children">
                {currentMenus.workspace?.children?.map((menu, index) => (
                  <Box key={`workspace-${index}`} className="tree-item">
                    <Checkbox 
                      size="small"
                      checked={menu.checked}
                      onChange={() => {}}
                    />
                    <Typography sx={{ 
                      fontSize: { xs: '12px', sm: '14px' },
                      fontWeight: menu.checked ? 500 : 400,
                      color: menu.checked ? '#292A2B' : '#6B7280'
                    }}>
                      {menu.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box sx={{ 
              mt: 3, 
              display: 'flex', 
              justifyContent: { xs: 'center', sm: 'flex-end' },
              gap: 1,
              width: '100%'
            }}>
              <Button 
                variant="outlined"
                sx={{ 
                  borderColor: '#E5E5E5',
                  color: '#4D5256',
                  width: { xs: '48%', sm: 'auto' },
                  minWidth: { sm: '80px' }
                }}
              >
                초기화
              </Button>
              <Button 
                variant="text"
              color="primary"
                sx={{
                  width: { xs: '48%', sm: 'auto' },
                  minWidth: { sm: '80px' }
                }}
              >
                저장
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default WorkspaceGroupSettingPage
