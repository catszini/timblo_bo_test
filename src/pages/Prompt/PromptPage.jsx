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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import { Add, Edit, Delete, PlayArrow } from '@mui/icons-material'

const promptData = [
  {
    id: 1,
    title: '회의 요약 프롬프트',
    description: '회의 내용을 효과적으로 요약하는 AI 프롬프트',
    category: '회의록',
    usageCount: 156,
    lastModified: '2024-01-15',
    modifier: '김프롬프트',
    status: '활성'
  },
  {
    id: 2,
    title: '액션 아이템 추출',
    description: '회의에서 나온 액션 아이템을 자동으로 추출',
    category: '요약',
    usageCount: 89,
    lastModified: '2024-01-12',
    modifier: '이액션',
    status: '활성'
  },
  {
    id: 3,
    title: '결정사항 정리',
    description: '회의에서 내린 결정사항들을 명확히 정리',
    category: '분석',
    usageCount: 67,
    lastModified: '2024-01-10',
    modifier: '박결정',
    status: '비활성'
  },
  {
    id: 4,
    title: '참석자 발언 분류',
    description: '각 참석자별 주요 발언 내용을 분류',
    category: '분석',
    usageCount: 45,
    lastModified: '2024-01-08',
    modifier: '최분석',
    status: '활성'
  },
  {
    id: 5,
    title: '영어 번역 프롬프트',
    description: '한국어 회의록을 영어로 번역',
    category: '번역',
    usageCount: 78,
    lastModified: '2024-01-05',
    modifier: '정번역',
    status: '활성'
  }
]

function PromptPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [categoryFilter, setCategoryFilter] = useState('전체')
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [testDialogOpen, setTestDialogOpen] = useState(false)
  const [selectedPrompt, setSelectedPrompt] = useState(null)
  const [newPrompt, setNewPrompt] = useState({
    category: '',
    title: '',
    content: '',
    status: '활성'
  })
  const [testInput, setTestInput] = useState('')
  const [testOutput, setTestOutput] = useState('')

  const filteredPrompts = promptData.filter(prompt => {
    const matchesSearch = prompt.title.includes(searchTerm) ||
                          prompt.description.includes(searchTerm)
    const matchesCategory = categoryFilter === '전체' || prompt.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const handleCreate = () => {
    setNewPrompt({
      category: '',
      title: '',
      content: '',
      status: '활성'
    })
    setCreateDialogOpen(true)
  }

  const handleEdit = (prompt) => {
    setSelectedPrompt(prompt)
    setEditDialogOpen(true)
  }

  const handleTest = (prompt) => {
    setSelectedPrompt(prompt)
    setTestInput('')
    setTestOutput('')
    setTestDialogOpen(true)
  }

  const handleSavePrompt = () => {
    // 프롬프트 저장 로직
    setCreateDialogOpen(false)
    setEditDialogOpen(false)
  }

  const handleRunTest = () => {
    // AI 프롬프트 테스트 실행 로직
    setTestOutput('AI 응답: 안녕하세요! 요청하신 내용에 대해 다음과 같이 답변드립니다...')
  }

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        AI 프롬프트 관리
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
              총 {filteredPrompts.length}개
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
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            marginLeft: 'auto'
          }}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="회의록">회의록</MenuItem>
                <MenuItem value="요약">요약</MenuItem>
                <MenuItem value="번역">번역</MenuItem>
                <MenuItem value="분석">분석</MenuItem>
                <MenuItem value="작성">작성</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: '8px',
              backgroundColor: '#fff',
              overflow: 'hidden'
            }}>
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
            <Button 
              variant="contained" 
              size="small"
              startIcon={<Add />}
              onClick={handleCreate}
              sx={{ 
                height: '36px',
                backgroundColor: '#10B981',
                '&:hover': { backgroundColor: '#059669' }
              }}
            >
              프롬프트 생성
            </Button>
          </Box>
        </Box>
      </Box>

      {/* 테이블 */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>프롬프트명</TableCell>
              <TableCell>설명</TableCell>
              <TableCell>카테고리</TableCell>
              <TableCell>사용횟수</TableCell>
              <TableCell>상태</TableCell>
              <TableCell>수정자</TableCell>
              <TableCell>최종 수정일</TableCell>
              <TableCell>관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPrompts.map((prompt) => (
              <TableRow key={prompt.id}>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                    {prompt.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', color: '#6B7280' }}>
                    {prompt.description}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={prompt.category}
                    size="small"
                    sx={{ backgroundColor: '#f0f7ff', color: '#0066FF' }}
                  />
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                    {prompt.usageCount}회
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={prompt.status}
                    color={prompt.status === '활성' ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>{prompt.modifier}</TableCell>
                <TableCell>{prompt.lastModified}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton 
                      size="small" 
                      color="success"
                      onClick={() => handleTest(prompt)}
                    >
                      <PlayArrow fontSize="small" />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      color="primary"
                      onClick={() => handleEdit(prompt)}
                    >
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
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

      {/* 프롬프트 생성 다이얼로그 */}
      <Dialog open={createDialogOpen} onClose={() => setCreateDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>새 프롬프트 생성</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>카테고리</Typography>
                <Select
                  value={newPrompt.category}
                  onChange={(e) => setNewPrompt({...newPrompt, category: e.target.value})}
                  size="small"
                >
                  <MenuItem value="회의록">회의록</MenuItem>
                  <MenuItem value="요약">요약</MenuItem>
                  <MenuItem value="번역">번역</MenuItem>
                  <MenuItem value="분석">분석</MenuItem>
                  <MenuItem value="작성">작성</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>상태</Typography>
                <Select
                  value={newPrompt.status}
                  onChange={(e) => setNewPrompt({...newPrompt, status: e.target.value})}
                  size="small"
                >
                  <MenuItem value="활성">활성</MenuItem>
                  <MenuItem value="비활성">비활성</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>프롬프트명</Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="프롬프트 이름을 입력하세요"
                value={newPrompt.title}
                onChange={(e) => setNewPrompt({...newPrompt, title: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>프롬프트 내용</Typography>
              <TextField
                fullWidth
                multiline
                rows={10}
                placeholder="프롬프트 내용을 입력하세요..."
                value={newPrompt.content}
                onChange={(e) => setNewPrompt({...newPrompt, content: e.target.value})}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    fontFamily: 'monospace',
                    fontSize: '14px'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ p: 2, backgroundColor: '#f0f7ff', borderRadius: 1 }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 500, mb: 1 }}>
                  프롬프트 작성 가이드
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0 }}>
                    <ListItemText 
                      primary="• 명확하고 구체적인 지시사항을 포함하세요"
                      primaryTypographyProps={{ fontSize: '12px' }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0 }}>
                    <ListItemText 
                      primary="• 변수는 {variable} 형태로 표기하세요"
                      primaryTypographyProps={{ fontSize: '12px' }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0 }}>
                    <ListItemText 
                      primary="• 원하는 출력 형식을 명시하세요"
                      primaryTypographyProps={{ fontSize: '12px' }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreateDialogOpen(false)}>취소</Button>
          <Button variant="contained" onClick={handleSavePrompt}>저장</Button>
        </DialogActions>
      </Dialog>

      {/* 프롬프트 수정 다이얼로그 */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>프롬프트 수정 - {selectedPrompt?.title}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>카테고리</Typography>
                <Select
                  value={selectedPrompt?.category || ''}
                  size="small"
                >
                  <MenuItem value="회의록">회의록</MenuItem>
                  <MenuItem value="요약">요약</MenuItem>
                  <MenuItem value="번역">번역</MenuItem>
                  <MenuItem value="분석">분석</MenuItem>
                  <MenuItem value="작성">작성</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>상태</Typography>
                <Select
                  value={selectedPrompt?.status || ''}
                  size="small"
                >
                  <MenuItem value="활성">활성</MenuItem>
                  <MenuItem value="비활성">비활성</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>프롬프트명</Typography>
              <TextField
                fullWidth
                size="small"
                value={selectedPrompt?.title || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>프롬프트 내용</Typography>
              <TextField
                fullWidth
                multiline
                rows={10}
                defaultValue="다음 회의 내용을 요약하여 주요 결정사항과 액션 아이템을 추출해주세요:\n\n{meeting_content}\n\n형식:\n## 주요 결정사항\n1. \n2. \n\n## 액션 아이템\n- [ ] \n- [ ] "
                sx={{
                  '& .MuiOutlinedInput-root': {
                    fontFamily: 'monospace',
                    fontSize: '14px'
                  }
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>취소</Button>
          <Button variant="contained" onClick={handleSavePrompt}>저장</Button>
        </DialogActions>
      </Dialog>

      {/* 프롬프트 테스트 다이얼로그 */}
      <Dialog open={testDialogOpen} onClose={() => setTestDialogOpen(false)} maxWidth="lg" fullWidth>
        <DialogTitle>프롬프트 테스트 - {selectedPrompt?.title}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>프롬프트 내용</Typography>
              <Paper sx={{ p: 2, backgroundColor: '#f8f9fa', border: '1px solid #E5E5E5' }}>
                <Typography component="pre" sx={{ 
                  fontFamily: 'monospace', 
                  fontSize: '12px', 
                  whiteSpace: 'pre-wrap',
                  margin: 0
                }}>
                  {selectedPrompt?.description || '프롬프트 내용이 여기에 표시됩니다...'}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>입력</Typography>
              <TextField
                fullWidth
                multiline
                rows={12}
                placeholder="테스트할 입력 내용을 입력하세요..."
                value={testInput}
                onChange={(e) => setTestInput(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    fontSize: '14px'
                  }
                }}
              />
              <Box sx={{ mt: 1 }}>
                <Button 
                  variant="contained" 
                  size="small"
                  startIcon={<PlayArrow />}
                  onClick={handleRunTest}
                  sx={{ 
                    backgroundColor: '#10B981',
                    '&:hover': { backgroundColor: '#059669' }
                  }}
                >
                  실행
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>출력</Typography>
              <Paper sx={{ 
                p: 2, 
                height: 300, 
                backgroundColor: '#f8f9fa', 
                border: '1px solid #E5E5E5',
                overflow: 'auto'
              }}>
                {testOutput ? (
                  <Typography sx={{ fontSize: '14px', whiteSpace: 'pre-wrap' }}>
                    {testOutput}
                  </Typography>
                ) : (
                  <Typography sx={{ fontSize: '14px', color: '#6B7280', fontStyle: 'italic' }}>
                    실행 버튼을 클릭하면 AI 응답이 여기에 표시됩니다.
                  </Typography>
                )}
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTestDialogOpen(false)}>닫기</Button>
          <Button startIcon={<Edit />} onClick={() => {
            setTestDialogOpen(false)
            handleEdit(selectedPrompt)
          }}>
            수정
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default PromptPage