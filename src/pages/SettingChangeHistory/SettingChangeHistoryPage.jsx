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
  Chip,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Divider,
  IconButton,
  Card,
  CardContent
} from '@mui/material'
import { Visibility, Compare, ArrowForward } from '@mui/icons-material'

const settingChangeHistoryData = [
  {
    id: 1,
    userName: '김설정',
    email: 'kim.setting@sktelecom.com',
    workspace: 'SK Telecom',
    workspaceColor: '#14B8A6',
    settingCategory: '워크스페이스',
    settingName: '로고 이미지',
    action: '수정',
    oldValue: 'logo_old.png',
    newValue: 'logo_new.png',
    changeTime: '2024-01-15 14:32:15',
    ipAddress: '192.168.1.101',
    device: 'Chrome (Windows)'
  },
  {
    id: 2,
    userName: '이권한',
    email: 'lee.permission@skhynix.com',
    workspace: 'SK Hynix',
    workspaceColor: '#6366F1',
    settingCategory: '권한',
    settingName: '사용자 권한',
    action: '추가',
    oldValue: '-',
    newValue: '회의관리자',
    changeTime: '2024-01-15 11:20:44',
    ipAddress: '192.168.1.205',
    device: 'Safari (macOS)'
  },
  {
    id: 3,
    userName: '박시스템',
    email: 'park.system@skcc.com',
    workspace: 'SK C&C',
    workspaceColor: '#F43F5E',
    settingCategory: '시스템',
    settingName: '세션 타임아웃',
    action: '수정',
    oldValue: '30분',
    newValue: '60분',
    changeTime: '2024-01-15 09:15:22',
    ipAddress: '192.168.1.78',
    device: 'Edge (Windows)'
  },
  {
    id: 4,
    userName: '최템플릿',
    email: 'choi.template@skinnovation.com',
    workspace: 'SK Innovation',
    workspaceColor: '#10B981',
    settingCategory: '템플릿',
    settingName: '기본 템플릿',
    action: '삭제',
    oldValue: '주간 회의 템플릿',
    newValue: '-',
    changeTime: '2024-01-14 16:45:33',
    ipAddress: '192.168.1.156',
    device: 'Firefox (Linux)'
  }
]

function SettingChangeHistoryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [categoryFilter, setCategoryFilter] = useState('전체')
  const [compareDialogOpen, setCompareDialogOpen] = useState(false)
  const [selectedChange, setSelectedChange] = useState(null)

  const handleCompare = (change) => {
    setSelectedChange(change)
    setCompareDialogOpen(true)
  }

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        설정변경 이력
      </Typography>

      {/* 검색 툴바 */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          width: '100%'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ 
              fontSize: '16px', 
              fontWeight: 600, 
              color: '#292A2B',
              whiteSpace: 'nowrap'
            }}>
              총 {settingChangeHistoryData.length}개
            </Typography>
            <FormControl size="small" sx={{ minWidth: 80 }}>
              <Select
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value={10}>10개</MenuItem>
                <MenuItem value={20}>20개</MenuItem>
                <MenuItem value={50}>50개</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="워크스페이스">워크스페이스</MenuItem>
                <MenuItem value="권한">권한</MenuItem>
                <MenuItem value="시스템">시스템</MenuItem>
                <MenuItem value="템플릿">템플릿</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            marginLeft: 'auto'
          }}>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: '8px',
              backgroundColor: '#fff',
              overflow: 'hidden'
            }}>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <Select
                  value="userName"
                  sx={{ 
                    height: '36px',
                    borderRadius: 0,
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' },
                  }}
                >
                  <MenuItem value="userName">사용자명</MenuItem>
                  <MenuItem value="settingName">설정명</MenuItem>
                  <MenuItem value="workspace">워크스페이스</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ width: '1px', height: '24px', backgroundColor: '#E5E5E5' }} />
              <TextField
                size="small"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ 
                  width: 200,
                  '& .MuiOutlinedInput-root': {
                    height: '36px',
                    borderRadius: 0,
                    '& fieldset': { border: 'none' },
                    '&:hover fieldset': { border: 'none' },
                    '&.Mui-focused fieldset': { border: 'none' },
                  },
                }}
              />
            </Box>
            <Button 
              variant="contained" 
              size="small"
              sx={{ 
                height: '36px',
                minWidth: '60px',
                backgroundColor: '#0066FF',
                '&:hover': { backgroundColor: '#0052CC' }
              }}
            >
              검색
            </Button>
          </Box>
        </Box>
      </Box>

      {/* 테이블 */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>사용자</TableCell>
              <TableCell>워크스페이스</TableCell>
              <TableCell>설정 분류</TableCell>
              <TableCell>설정명</TableCell>
              <TableCell>작업</TableCell>
              <TableCell>변경 전</TableCell>
              <TableCell>변경 후</TableCell>
              <TableCell>변경 시간</TableCell>
                <TableCell>IP 주소</TableCell>
                <TableCell>비교</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {settingChangeHistoryData.map((history) => (
              <TableRow key={history.id}>
                <TableCell>
                  <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>
                      {history.userName}
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
                      {history.email}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar 
                      sx={{ 
                        width: 24, 
                        height: 24, 
                        backgroundColor: history.workspaceColor,
                        fontSize: '12px',
                        fontWeight: 600
                      }}
                    >
                      S
                    </Avatar>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                      {history.workspace}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={history.settingCategory}
                    size="small"
                    sx={{ backgroundColor: '#f0f7ff', color: '#0066FF' }}
                  />
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                    {history.settingName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={history.action}
                    color={
                      history.action === '추가' ? 'success' : 
                      history.action === '삭제' ? 'error' : 'warning'
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Typography sx={{ 
                    fontSize: '14px', 
                    fontFamily: 'monospace',
                    color: history.oldValue === '-' ? '#6B7280' : '#292A2B'
                  }}>
                    {history.oldValue}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ 
                    fontSize: '14px', 
                    fontFamily: 'monospace',
                    color: history.newValue === '-' ? '#6B7280' : '#292A2B'
                  }}>
                    {history.newValue}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {history.changeTime}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontFamily: 'monospace' }}>
                    {history.ipAddress}
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton 
                    size="small" 
                    color="primary"
                    onClick={() => handleCompare(history)}
                  >
                    <Compare fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 페이지네이션 */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 1, 
        mt: 3 
      }}>
        <Button 
          variant="outlined" 
          size="small"
          sx={{ 
            minWidth: '32px', 
            height: '32px', 
            borderColor: '#E5E5E5',
            color: '#6B7280',
            '&:hover': { borderColor: '#D1D5DB' }
          }}
        >
          ‹
        </Button>
        <Button 
          variant="contained"
          size="small"
          sx={{ 
            minWidth: '32px', 
            height: '32px',
            backgroundColor: '#0066FF',
            '&:hover': { backgroundColor: '#0052CC' }
          }}
        >
          1
        </Button>
        <Button 
          variant="outlined" 
          size="small"
          sx={{ 
            minWidth: '32px', 
            height: '32px', 
            borderColor: '#E5E5E5',
            color: '#6B7280',
            '&:hover': { borderColor: '#D1D5DB' }
          }}
        >
          ›
        </Button>
      </Box>


      {/* 변경사항 비교 다이얼로그 */}
      <Dialog open={compareDialogOpen} onClose={() => setCompareDialogOpen(false)} maxWidth="lg" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Compare />
            <Typography variant="h6">설정 변경사항 비교</Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedChange && (
            <Box>
              {/* 변경 정보 헤더 */}
              <Card sx={{ mb: 3, backgroundColor: '#f8f9fa' }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>변경자</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar 
                          sx={{ 
                            width: 24, 
                            height: 24, 
                            backgroundColor: selectedChange.workspaceColor,
                            fontSize: '12px',
                            fontWeight: 600
                          }}
                        >
                          S
                        </Avatar>
                        <Typography variant="body2">{selectedChange.userName}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>변경 시간</Typography>
                      <Typography variant="body2">{selectedChange.changeTime}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>설정 분류</Typography>
                      <Chip 
                        label={selectedChange.settingCategory}
                        size="small"
                        sx={{ backgroundColor: '#f0f7ff', color: '#0066FF' }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>작업</Typography>
                      <Chip 
                        label={selectedChange.action}
                        size="small"
                        color={
                          selectedChange.action === '추가' ? 'success' : 
                          selectedChange.action === '삭제' ? 'error' : 'warning'
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>설정명</Typography>
                      <Typography variant="body2">{selectedChange.settingName}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              <Divider sx={{ my: 3 }} />

              {/* 변경전/변경후 비교 */}
              <Typography variant="h6" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Compare />
                변경 전/후 비교
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2, height: 400, border: '2px solid #fecaca' }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1, 
                      mb: 2,
                      pb: 1,
                      borderBottom: '1px solid #E5E5E5'
                    }}>
                      <Box sx={{ 
                        width: 12, 
                        height: 12, 
                        borderRadius: '50%', 
                        backgroundColor: '#EF4444' 
                      }} />
                      <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 600, color: '#EF4444' }}>
                        변경 전
                      </Typography>
                    </Box>
                    
                    <Box sx={{ 
                      p: 2, 
                      backgroundColor: '#fef2f2', 
                      borderRadius: 1,
                      height: 320,
                      overflow: 'auto'
                    }}>
                      {selectedChange.action === '추가' ? (
                        <Typography sx={{ 
                          fontSize: '14px', 
                          color: '#6B7280', 
                          fontStyle: 'italic',
                          textAlign: 'center',
                          mt: 10
                        }}>
                          이전 값이 없습니다 (신규 추가)
                        </Typography>
                      ) : (
                        <Box>
                          <Typography component="pre" sx={{ 
                            fontFamily: 'monospace', 
                            fontSize: '12px', 
                            whiteSpace: 'pre-wrap',
                            margin: 0,
                            color: '#374151'
                          }}>
                            {getDetailedOldValue(selectedChange)}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2, height: 400, border: '2px solid #bbf7d0' }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1, 
                      mb: 2,
                      pb: 1,
                      borderBottom: '1px solid #E5E5E5'
                    }}>
                      <Box sx={{ 
                        width: 12, 
                        height: 12, 
                        borderRadius: '50%', 
                        backgroundColor: '#10B981' 
                      }} />
                      <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 600, color: '#10B981' }}>
                        변경 후
                      </Typography>
                    </Box>
                    
                    <Box sx={{ 
                      p: 2, 
                      backgroundColor: '#f0fdf4', 
                      borderRadius: 1,
                      height: 320,
                      overflow: 'auto'
                    }}>
                      {selectedChange.action === '삭제' ? (
                        <Typography sx={{ 
                          fontSize: '14px', 
                          color: '#6B7280', 
                          fontStyle: 'italic',
                          textAlign: 'center',
                          mt: 10
                        }}>
                          값이 삭제되었습니다
                        </Typography>
                      ) : (
                        <Box>
                          <Typography component="pre" sx={{ 
                            fontFamily: 'monospace', 
                            fontSize: '12px', 
                            whiteSpace: 'pre-wrap',
                            margin: 0,
                            color: '#374151'
                          }}>
                            {getDetailedNewValue(selectedChange)}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Paper>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              {/* 변경 요약 */}
              <Typography variant="h6" sx={{ mb: 2 }}>변경 요약</Typography>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2, 
                p: 2, 
                backgroundColor: '#f8f9fa',
                borderRadius: 1,
                border: '1px solid #E5E5E5'
              }}>
                <Chip 
                  label={selectedChange.oldValue}
                  size="small"
                  sx={{ backgroundColor: '#fef2f2', color: '#991b1b', fontWeight: 500 }}
                />
                <ArrowForward sx={{ color: '#6B7280' }} />
                <Chip 
                  label={selectedChange.newValue}
                  size="small"
                  sx={{ backgroundColor: '#f0fdf4', color: '#166534', fontWeight: 500 }}
                />
              </Box>
              <Typography sx={{ fontSize: '14px', color: '#6B7280', mt: 2 }}>
                {selectedChange.settingName} 설정이 {selectedChange.action}되었습니다.
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCompareDialogOpen(false)}>닫기</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

// 상세한 이전 값 생성 함수
function getDetailedOldValue(change) {
  switch (change.settingCategory) {
    case '워크스페이스':
      return `로고 이미지 설정:
파일명: ${change.oldValue}
크기: 245KB
해상도: 512x256
형식: PNG
업로드일: 2023-12-01
설명: 이전 회사 로고 이미지`

    case '시스템':
      return `세션 타임아웃 설정:
현재 값: ${change.oldValue}
단위: 분
적용 범위: 전체 사용자
보안 정책: 표준
마지막 수정: 2023-11-15
설명: 보안상 ${change.oldValue} 후 자동 로그아웃`

    case '권한':
      return `사용자 권한 설정:
이전 상태: 권한 없음
사용자: ${change.userName}
워크스페이스: ${change.workspace}
부여일: -
만료일: -
설명: 해당 사용자에게 부여된 권한이 없었습니다.`

    case '템플릿':
      return `템플릿 설정:
템플릿명: ${change.oldValue}
카테고리: 주간회의
사용횟수: 45회
상태: 활성
생성일: 2023-10-01
설명: 매주 진행되는 정기 회의용 템플릿`

    default:
      return change.oldValue
  }
}

// 상세한 새 값 생성 함수
function getDetailedNewValue(change) {
  switch (change.settingCategory) {
    case '워크스페이스':
      return `로고 이미지 설정:
파일명: ${change.newValue}
크기: 189KB
해상도: 1024x512
형식: PNG
업로드일: 2024-01-15
설명: 새로운 회사 로고 이미지 (고해상도)`

    case '시스템':
      return `세션 타임아웃 설정:
현재 값: ${change.newValue}
단위: 분
적용 범위: 전체 사용자
보안 정책: 강화
마지막 수정: 2024-01-15
설명: 보안 강화를 위해 ${change.newValue} 후 자동 로그아웃으로 변경`

    case '권한':
      return `사용자 권한 설정:
새 권한: ${change.newValue}
사용자: ${change.userName}
워크스페이스: ${change.workspace}
부여일: 2024-01-15
만료일: 2024-12-31
설명: ${change.newValue} 권한이 새로 부여되었습니다.`

    case '템플릿':
      return `템플릿 삭제:
상태: 삭제됨
삭제일: 2024-01-14
삭제 사유: 더 이상 사용하지 않음
백업: 완료
복구 가능: 30일 이내
설명: 사용 빈도가 낮아 삭제 처리됨`

    default:
      return change.newValue
  }
}

export default SettingChangeHistoryPage
