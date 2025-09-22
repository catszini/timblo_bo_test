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
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Divider,
  IconButton
} from '@mui/material'
import { Add, Edit, Delete, Visibility } from '@mui/icons-material'

const templateData = [
  {
    id: 1,
    category: '업무',
    title: '주간 업무 보고 템플릿',
    usageCount: 120,
    status: '사용중',
    modifier: '김철수',
    lastModified: '2024-01-10'
  },
  {
    id: 2,
    category: '기획',
    title: '신규 프로젝트 기획 템플릿',
    usageCount: 85,
    status: '사용중',
    modifier: '이영희',
    lastModified: '2024-01-08'
  },
  {
    id: 3,
    category: '회의',
    title: '정기 회의록 템플릿',
    usageCount: 200,
    status: '사용중',
    modifier: '박민수',
    lastModified: '2024-01-12'
  },
  {
    id: 4,
    category: '교육',
    title: '신입 사원 교육 템플릿',
    usageCount: 30,
    status: '미사용',
    modifier: '최지영',
    lastModified: '2023-12-20'
  },
  {
    id: 5,
    category: '기술',
    title: '기술 스택 검토 템플릿',
    usageCount: 50,
    status: '사용중',
    modifier: '정현우',
    lastModified: '2024-01-05'
  }
]

function MeetTemplatePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [categoryFilter, setCategoryFilter] = useState('전체')
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [previewDialogOpen, setPreviewDialogOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [newTemplate, setNewTemplate] = useState({
    category: '',
    title: '',
    content: '',
    status: '사용중'
  })

  const filteredTemplates = templateData.filter(template => {
    const matchesSearch = template.title.includes(searchTerm) ||
                          template.modifier.includes(searchTerm)
    const matchesCategory = categoryFilter === '전체' || template.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const handleCreate = () => {
    setNewTemplate({
      category: '',
      title: '',
      content: '',
      status: '사용중'
    })
    setCreateDialogOpen(true)
  }

  const handleEdit = (template) => {
    setSelectedTemplate(template)
    setEditDialogOpen(true)
  }

  const handlePreview = (template) => {
    setSelectedTemplate(template)
    setPreviewDialogOpen(true)
  }

  const handleSaveTemplate = () => {
    // 템플릿 저장 로직
    setCreateDialogOpen(false)
    setEditDialogOpen(false)
  }

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        회의 템플릿
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
              총 {filteredTemplates.length}개
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
                <MenuItem value="업무">업무</MenuItem>
                <MenuItem value="기획">기획</MenuItem>
                <MenuItem value="회의">회의</MenuItem>
                <MenuItem value="교육">교육</MenuItem>
                <MenuItem value="기술">기술</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: '8px',
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
                    '&.Mui-focused fieldset': { border: 'none' }}}}
              />
            </Box>
            <Button 
              variant="text"
              color="primary" 
              size="small"
              sx={{ 
                height: '36px',
                minWidth: '60px'
              }}
            >
              검색
            </Button>
            <Button 
              variant="text" 
              size="small"
              startIcon={<Add />}
              onClick={handleCreate}
              sx={{ 
                height: '36px'
              }}
            >
              템플릿 생성
            </Button>
          </Box>
        </Box>
      </Box>

      {/* 테이블 */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>카테고리</TableCell>
              <TableCell>템플릿명</TableCell>
              <TableCell>사용횟수</TableCell>
              <TableCell>상태</TableCell>
              <TableCell>수정자</TableCell>
              <TableCell>최종 수정일</TableCell>
              <TableCell>관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTemplates.map((template) => (
              <TableRow key={template.id}>
                <TableCell>{template.category}</TableCell>
                <TableCell>{template.title}</TableCell>
                <TableCell>{template.usageCount}</TableCell>
                <TableCell>
                  <Chip 
                    label={template.status}
                    color={template.status === '사용중' ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>{template.modifier}</TableCell>
                <TableCell>{template.lastModified}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton 
                      size="small" 
                      color="primary" 
                      onClick={() => handlePreview(template)}
                    >
                      <Visibility fontSize="small" />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      color="primary"
                      onClick={() => handleEdit(template)}
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
            color: '#6B7280'
          }}
        >
          ‹
        </Button>
        <Button 
          variant="text"
              color="primary"
          size="small"
          sx={{ 
            minWidth: '32px', 
            height: '32px'
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
            color: '#6B7280'
          }}
        >
          ›
        </Button>
      </Box>

      {/* 템플릿 생성 다이얼로그 */}
      <Dialog open={createDialogOpen} onClose={() => setCreateDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>새 템플릿 생성</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>카테고리</Typography>
                <Select
                  value={newTemplate.category}
                  onChange={(e) => setNewTemplate({...newTemplate, category: e.target.value})}
                  size="small"
                >
                  <MenuItem value="업무">업무</MenuItem>
                  <MenuItem value="기획">기획</MenuItem>
                  <MenuItem value="회의">회의</MenuItem>
                  <MenuItem value="교육">교육</MenuItem>
                  <MenuItem value="기술">기술</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>상태</Typography>
                <Select
                  value={newTemplate.status}
                  onChange={(e) => setNewTemplate({...newTemplate, status: e.target.value})}
                  size="small"
                >
                  <MenuItem value="사용중">사용중</MenuItem>
                  <MenuItem value="미사용">미사용</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>템플릿명</Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="템플릿 이름을 입력하세요"
                value={newTemplate.title}
                onChange={(e) => setNewTemplate({...newTemplate, title: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>템플릿 내용</Typography>
              <TextField
                fullWidth
                multiline
                rows={12}
                placeholder="템플릿 내용을 입력하세요..."
                value={newTemplate.content}
                onChange={(e) => setNewTemplate({...newTemplate, content: e.target.value})}
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
          <Button onClick={() => setCreateDialogOpen(false)}>취소</Button>
          <Button variant="text" onClick={handleSaveTemplate}>저장</Button>
        </DialogActions>
      </Dialog>

      {/* 템플릿 수정 다이얼로그 */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>템플릿 수정 - {selectedTemplate?.title}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>카테고리</Typography>
                <Select
                  value={selectedTemplate?.category || ''}
                  size="small"
                >
                  <MenuItem value="업무">업무</MenuItem>
                  <MenuItem value="기획">기획</MenuItem>
                  <MenuItem value="회의">회의</MenuItem>
                  <MenuItem value="교육">교육</MenuItem>
                  <MenuItem value="기술">기술</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>상태</Typography>
                <Select
                  value={selectedTemplate?.status || ''}
                  size="small"
                >
                  <MenuItem value="사용중">사용중</MenuItem>
                  <MenuItem value="미사용">미사용</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>템플릿명</Typography>
              <TextField
                fullWidth
                size="small"
                value={selectedTemplate?.title || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>템플릿 내용</Typography>
              <TextField
                fullWidth
                multiline
                rows={12}
                defaultValue="## 회의 정보\n- 날짜: \n- 시간: \n- 참석자: \n\n## 안건\n1. \n2. \n3. \n\n## 논의 사항\n\n## 결정 사항\n\n## 액션 아이템\n- [ ] \n- [ ] \n- [ ] "
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
          <Button variant="text" onClick={handleSaveTemplate}>저장</Button>
        </DialogActions>
      </Dialog>

      {/* 템플릿 미리보기 다이얼로그 */}
      <Dialog open={previewDialogOpen} onClose={() => setPreviewDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>템플릿 미리보기 - {selectedTemplate?.title}</DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>카테고리</Typography>
                <Typography variant="body2" color="text.secondary">{selectedTemplate?.category}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>사용횟수</Typography>
                <Typography variant="body2" color="text.secondary">{selectedTemplate?.usageCount}회</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>수정자</Typography>
                <Typography variant="body2" color="text.secondary">{selectedTemplate?.modifier}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>최종 수정일</Typography>
                <Typography variant="body2" color="text.secondary">{selectedTemplate?.lastModified}</Typography>
              </Grid>
            </Grid>
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="h6" sx={{ mb: 2 }}>템플릿 내용</Typography>
          <Paper sx={{ p: 2, border: '1px solid #E5E5E5' }}>
            <Typography component="pre" sx={{ 
              fontFamily: 'monospace', 
              fontSize: '14px', 
              whiteSpace: 'pre-wrap',
              margin: 0
            }}>
{`## 회의 정보
- 날짜: 
- 시간: 
- 참석자: 

## 안건
1. 
2. 
3. 

## 논의 사항

## 결정 사항

## 액션 아이템
- [ ] 
- [ ] 
- [ ] `}
            </Typography>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button startIcon={<Edit />} onClick={() => {
            setPreviewDialogOpen(false)
            handleEdit(selectedTemplate)
          }}>
            수정
          </Button>
          <Button onClick={() => setPreviewDialogOpen(false)}>닫기</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default MeetTemplatePage