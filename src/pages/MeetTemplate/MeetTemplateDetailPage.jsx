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
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  Switch,
  FormControlLabel,
  Checkbox,
  Pagination
} from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'

function MeetTemplateDetailPage() {
  const [selectedCategory, setSelectedCategory] = useState('일반회의')
  const [categoryEditOpen, setCategoryEditOpen] = useState(false)
  const [categories, setCategories] = useState(['일반회의', '세미나', '상담진료', '고객'])
  const [commonAreaSettings, setCommonAreaSettings] = useState({
    coresummary: true,
    participants: true,
    keywords: false
  })

  const handleCategoryEdit = () => {
    setCategoryEditOpen(!categoryEditOpen)
  }

  const handleCategoryDelete = (categoryToDelete) => {
    setCategories(categories.filter(cat => cat !== categoryToDelete))
    if (selectedCategory === categoryToDelete) {
      setSelectedCategory(categories[0])
    }
  }

  const handleAddCategory = () => {
    const newCategory = '새 카테고리'
    setCategories([...categories, newCategory])
  }

  const handleCommonAreaChange = (setting) => {
    setCommonAreaSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }))
  }

  return (
    <Box>
      {/* 상단 헤더 */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 3,
        pb: 2,
        borderBottom: '1px solid #E5E7EB' 
      }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 600 }}>
          회의록 템플릿 관리
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small"
            sx={{
              color: '#DC2626',
              borderColor: '#DC2626',
              '&:hover': {
                backgroundColor: '#FEF2F2',
                borderColor: '#B91C1C',
                color: '#B91C1C'
              }
            }}
          >
            삭제
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{
              color: '#6B7280',
              borderColor: '#6B7280',
              '&:hover': {
                backgroundColor: '#F3F4F6',
                borderColor: '#374151',
                color: '#374151'
              }
            }}
          >
            취소
          </Button>
          <Button 
            variant="contained" 
            size="small"
            sx={{
              backgroundColor: '#3B82F6',
              color: 'white',
              '&:hover': {
                backgroundColor: '#2563EB'
              }
            }}
          >
            저장
          </Button>
        </Box>
      </Box>
      
      <Grid container spacing={3}>
        {/* 왼쪽: 템플릿 내용 */}
        <Grid item xs={6.6}>
          <Box>
            <Typography sx={{ mb: 2, fontSize: '14px', fontWeight: 500, color: '#374151' }}>
              템플릿팩 업로드하기
            </Typography>
            
            {/* 템플릿 내용 카드 */}
            <Card sx={{ mb: 3, borderRadius: 1 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  🩺 외래 진료 기록 (간호사 작성)
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography sx={{ fontSize: '14px', fontWeight: 500, mb: 1 }}>
                    <strong>환자명:</strong> 김○○ <strong>성별/나이:</strong> F / 52세 <strong>차트번호:</strong> 2025-001234
                  </Typography>
                  <Typography sx={{ fontSize: '14px' }}>
                    <strong>진료과:</strong> 내과 <strong>담당의:</strong> 홍길동 <strong>방문일시:</strong> 2025-08-08 10:30
                  </Typography>
                </Box>

                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  📄 기존 진료 이력
                </Typography>
                <TableContainer component={Paper} sx={{ mb: 3 }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>날짜</TableCell>
                        <TableCell>진단명</TableCell>
                        <TableCell>처방 내용</TableCell>
                        <TableCell>비고</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>2025-06-12</TableCell>
                        <TableCell>급성 기관지염</TableCell>
                        <TableCell>항생제(Amoxicillin), 진해거담제</TableCell>
                        <TableCell>7일 복용</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2025-03-04</TableCell>
                        <TableCell>고혈압</TableCell>
                        <TableCell>Amlodipine 5mg</TableCell>
                        <TableCell>복용 중</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2024-12-10</TableCell>
                        <TableCell>건강검진</TableCell>
                        <TableCell>이상소견 없음</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  👩‍⚕️ 현재 상태
                </Typography>
                <TableContainer component={Paper} sx={{ mb: 3 }}>
                  <Table size="small">
                    <TableBody>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>주호소(Chief Complaint)</TableCell>
                        <TableCell>3일 전부터 기침·가래 심해짐, 미열 동반</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>V/S (활력징후)</TableCell>
                        <TableCell>BP 128/82 mmHg, PR 78 bpm, BT 37.8°C, RR 20/min</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>외관</TableCell>
                        <TableCell>기침 지속, 호흡 약간 가빠짐</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>기타</TableCell>
                        <TableCell>과거 폐렴 병력 없음</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  🗨️ 의사–환자 대화
                </Typography>
                <TableContainer component={Paper} sx={{ mb: 3 }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell width="100">구분</TableCell>
                        <TableCell>대화 내용</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>의사</TableCell>
                        <TableCell>"언제부터 기침이 시작되었나요? 열은 있었습니까?"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>환자</TableCell>
                        <TableCell>"3일 전부터였고, 어제 열이 좀 났어요."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>의사</TableCell>
                        <TableCell>"가래 색은 어떤가요? 숨이 차거나 가슴이 아픈가요?"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>환자</TableCell>
                        <TableCell>"노란색 가래고, 숨이 조금 차요."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>의사</TableCell>
                        <TableCell>"폐렴 여부 확인 위해 흉부 X-ray 촬영하겠습니다. 결과 보고 설명드릴게요."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>환자</TableCell>
                        <TableCell>"네, 알겠습니다."</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  📅 예약·추후 계획
                </Typography>
                <TableContainer component={Paper}>
                  <Table size="small">
                    <TableBody>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>검사</TableCell>
                        <TableCell>흉부 X-ray (당일)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>다음 진료 예약</TableCell>
                        <TableCell>2025-08-15 10:00 (결과 설명 및 경과 확인)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>교육·지도</TableCell>
                        <TableCell>충분한 수분 섭취, 휴식, 처방약 복용 방법 안내</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500 }}>특이사항</TableCell>
                        <TableCell>폐렴 의심, X-ray 결과에 따라 항생제 조정 예정</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* 오른쪽: 설정 영역 */}
        <Grid item xs={5.4}>
          <Box>
            {/* ID */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                ID
              </Typography>
              <Typography sx={{ fontSize: '14px', color: '#374151' }}>
                DEF-001-SK
              </Typography>
            </Box>

            {/* 버전정보 */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                버전정보
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="V1.0.0" size="small" />
                <Chip label="V1.1.0" size="small" />
                <Chip label="V1.2.0" size="small" variant="outlined" />
                <Chip label="V2.0.0" size="small" />
              </Box>
            </Box>

            {/* 카테고리 */}
            <Box sx={{ mb: 3, position: 'relative' }}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                카테고리
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <FormControl fullWidth size="small">
                  <Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    sx={{ 
                      '& .MuiSelect-select': { 
                        fontSize: '14px' 
                      },
                      height: '40px'
                    }}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button 
                  variant="outlined" 
                  size="small"
                  onClick={handleCategoryEdit}
                  sx={{ 
                    minWidth: '60px',
                    fontSize: '12px',
                    height: '40px'
                  }}
                >
                  편집
                </Button>
              </Box>
              
              {/* 카테고리 편집 툴팁 */}
              {categoryEditOpen && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: 0,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                    p: 2
                  }}
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: 500, mb: 2, color: '#374151' }}>
                    카테고리 관리
                  </Typography>
                  
                  {/* 카테고리 목록 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                    {categories.map((category) => (
                      <Box 
                        key={category}
                        sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          py: 0.5
                        }}
                      >
                        <Typography sx={{ fontSize: '14px' }}>
                          {category}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          <IconButton 
                            size="small" 
                            sx={{ 
                              p: 0.5,
                              color: '#6B7280',
                              '&:hover': {
                                backgroundColor: '#F3F4F6',
                                color: '#374151'
                              }
                            }}
                          >
                            <Edit sx={{ fontSize: '16px' }} />
                          </IconButton>
                          <IconButton 
                            size="small"
                            onClick={() => handleCategoryDelete(category)}
                            sx={{ 
                              p: 0.5,
                              color: '#DC2626',
                              '&:hover': {
                                backgroundColor: '#FEF2F2',
                                color: '#B91C1C'
                              }
                            }}
                          >
                            <Delete sx={{ fontSize: '16px' }} />
                          </IconButton>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  
                  {/* 새 카테고리 생성 버튼 */}
                  <Button 
                    variant="text" 
                    size="small" 
                    onClick={handleAddCategory}
                    sx={{ 
                      fontSize: '12px',
                      color: '#3B82F6',
                      p: 0.5
                    }}
                  >
                    + 새 카테고리 생성
                  </Button>
                </Box>
              )}
            </Box>

            {/* 공통 영역 노출 여부 */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 2, fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                공통 영역 노출 여부
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={commonAreaSettings.coresummary}
                      onChange={() => handleCommonAreaChange('coresummary')}
                      size="small"
                      sx={{
                        padding: '4px',
                        '& .MuiSvgIcon-root': {
                          fontSize: '18px'
                        }
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: '13px' }}>
                      핵심요약
                    </Typography>
                  }
                  labelPlacement="start"
                  sx={{ margin: 0, gap: 0.5, alignItems: 'center' }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={commonAreaSettings.participants}
                      onChange={() => handleCommonAreaChange('participants')}
                      size="small"
                      sx={{
                        padding: '4px',
                        '& .MuiSvgIcon-root': {
                          fontSize: '18px'
                        }
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: '13px' }}>
                      참석자
                    </Typography>
                  }
                  labelPlacement="start"
                  sx={{ margin: 0, gap: 0.5, alignItems: 'center' }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={commonAreaSettings.keywords}
                      onChange={() => handleCommonAreaChange('keywords')}
                      size="small"
                      sx={{
                        padding: '4px',
                        '& .MuiSvgIcon-root': {
                          fontSize: '18px'
                        }
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: '13px' }}>
                      키워드
                    </Typography>
                  }
                  labelPlacement="start"
                  sx={{ margin: 0, gap: 0.5, alignItems: 'center' }}
                />
              </Box>
            </Box>

            {/* 템플릿명 */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                템플릿명
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="외래 진료 기록"
                sx={{ '& .MuiOutlinedInput-root': { fontSize: '14px', height: '40px' } }}
              />
              <Typography sx={{ fontSize: '11px', color: '#9CA3AF', textAlign: 'right', mt: 0.5 }}>
                8/10자
              </Typography>
            </Box>

            {/* 템플릿 설명 */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                템플릿 설명
              </Typography>
              <Box
                component="textarea"
                placeholder="템플릿에 대한 설명을 입력하세요"
                defaultValue="환자의 진료 과정과 상태를 체계적으로 기록하는 의료진 전용 템플릿입니다."
                sx={{
                  width: '100%',
                  minHeight: '100px',
                  padding: '12px',
                  fontSize: '14px',
                  border: '1px solid #E5E7EB',
                  borderRadius: 0,
                  resize: 'none',
                  fontFamily: 'inherit',
                  outline: 'none',
                  '&:focus': {
                    borderColor: '#3B82F6'
                  }
                }}
              />
              <Typography sx={{ fontSize: '11px', color: '#9CA3AF', textAlign: 'right', mt: 0.5 }}>
                56/100자
              </Typography>
            </Box>

            {/* 버전정보 테이블 */}
            <Box>
              <Typography sx={{ mb: 2, fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                버전정보
              </Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontSize: '12px' }}>ID</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>버전</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>유형</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>변경사항</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>등록일</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>등록자</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>수정자</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>수정일자</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ fontSize: '12px' }}>DEF-001-SK</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>V1.2.0</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>텍스트</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>의료 용어 사전 최신 반영</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>2025-07-18 14:30:25</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>김철수</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>박지민</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>2025-08-08 16:45:12</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: '12px' }}>DEF-001-SK</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>V1.1.0</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>음성</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>녹취 품질 개선 프롬프트 적용</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>2025-06-02 11:20:15</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>박지민</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>김철수</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>2025-07-15 09:30:45</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: '12px' }}>DEF-001-SK</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>V1.0.0</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>텍스트</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>초기 배포</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>2025-05-10 10:15:30</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>이영희</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>이영희</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>2025-05-10 10:15:30</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              
              {/* 페이지네이션 */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Pagination 
                  count={5} 
                  page={1} 
                  shape="rounded"
                  showFirstButton={false}
                  showLastButton={false}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MeetTemplateDetailPage
