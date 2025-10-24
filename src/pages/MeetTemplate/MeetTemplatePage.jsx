import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import { SearchButton, FileUploadButton, SaveButton, CancelButton, AddButton } from '../../components/common/CommonButtons'
import ActionButton from '../../components/common/ActionButton'
import Pagination from '../../components/common/Pagination'
import { styles } from './MeetTemplatePage.styles'

const MeetTemplatePage = () => {
  const navigate = useNavigate()
  const [dateRange, setDateRange] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState('10')
  const [searchCategory, setSearchCategory] = useState('전체')
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [newCategory, setNewCategory] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('일반회의')
  const [templateName, setTemplateName] = useState('')
  const [templateDescription, setTemplateDescription] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const templates = [
    { id: 'DEF-001-SK', enabled: true, category: '회의', name: '일반 회의록 템플릿', lastModified: '2024-02-28 14:30', modifier: '김철수', version: 'v1.2' },
    { id: 'DEF-002-SK', enabled: true, category: '세미나', name: '주간 업무 보고 템플릿', lastModified: '2024-02-27 11:20', modifier: '이영희', version: 'v2.0' },
    { id: 'DEF-003-SK', enabled: false, category: '상담', name: '프로젝트 킥오프 템플릿', lastModified: '2024-02-26 09:15', modifier: '박지민', version: 'v1.0' },
    { id: 'DEF-004-SK', enabled: true, category: '의료', name: '1:1 면담 템플릿', lastModified: '2024-02-25 16:45', modifier: '최동훈', version: 'v1.5' },
    { id: 'DEF-005-SK', enabled: true, category: '보고서', name: '고객 미팅 템플릿', lastModified: '2024-02-24 13:10', modifier: '정미경', version: 'v2.1' }
  ]

  const itemsPerPageOptions = [
    { value: '10', label: '10개씩 보기' },
    { value: '20', label: '20개씩 보기' },
    { value: '50', label: '50개씩 보기' }
  ]

  const searchCategoryOptions = [
    { value: '전체', label: '전체' },
    { value: '템플릿명', label: '템플릿명' },
    { value: '작성자', label: '작성자' }
  ]

  const categoryOptions = [
    { value: '일반회의', label: '일반회의' },
    { value: '세미나', label: '세미나' },
    { value: '상담', label: '상담' }
  ]

  const handleSearch = () => {
    console.log('검색:', { searchCategory, searchTerm })
  }

  const handleNewTemplate = () => {
    setIsModalOpen(true)
  }

  const handleSwitchChange = (id) => {
    console.log('사용여부 토글:', id)
  }

  const handleRowClick = (template) => {
    if (template.id === 'DEF-001-SK') {
      navigate('/meet-template-detail')
    }
  }

  const handleSaveTemplate = () => {
    console.log('템플릿 저장:', {
      category: selectedCategory,
      name: templateName,
      description: templateDescription
    })
    setIsModalOpen(false)
  }

  const handleSaveCategory = () => {
    console.log('카테고리 추가:', newCategory)
    setIsCategoryModalOpen(false)
    setNewCategory('')
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            템플릿 관리 (회의록, 공통 템플릿)
          </Typography>
        </Box>

        {/* 검색 툴바 */}
        <Box sx={styles.searchToolbar}>
          <Box sx={styles.leftSection}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="날짜 범위를 선택하세요"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <CalendarTodayIcon sx={{ mr: 1, color: '#666', fontSize: 16 }} />
                )
              }}
              sx={{ width: '200px' }}
            />
          </Box>

          <Box sx={styles.rightSection}>
            <Select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(e.target.value)}
              options={itemsPerPageOptions}
              width="140px"
            />
            <Select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              options={searchCategoryOptions}
              width="120px"
            />
            <TextField
              variant="outlined"
              size="small"
              placeholder="검색어를 입력해주세요."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: '200px' }}
            />
            <SearchButton onClick={handleSearch} />
            <FileUploadButton onClick={handleNewTemplate} />
          </Box>
        </Box>

        {/* 테이블 */}
        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={styles.headerCell}>ID</TableCell>
                <TableCell sx={styles.headerCell}>사용여부</TableCell>
                <TableCell sx={styles.headerCell}>카테고리</TableCell>
                <TableCell sx={styles.headerCell}>템플릿명</TableCell>
                <TableCell sx={styles.headerCell}>최근수정일</TableCell>
                <TableCell sx={styles.headerCell}>수정자</TableCell>
                <TableCell sx={styles.headerCell}>버전</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {templates.map((template, index) => (
                <TableRow
                  key={template.id}
                  hover
                  onClick={() => handleRowClick(template)}
                  sx={{ cursor: index === 0 ? 'pointer' : 'default' }}
                >
                  <TableCell>{template.id}</TableCell>
                  <TableCell>
                    <Switch
                      checked={template.enabled}
                      onChange={() => handleSwitchChange(template.id)}
                      size="small"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </TableCell>
                  <TableCell>{template.category}</TableCell>
                  <TableCell>{template.name}</TableCell>
                  <TableCell>{template.lastModified}</TableCell>
                  <TableCell>{template.modifier}</TableCell>
                  <TableCell>{template.version}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* 페이지네이션 */}
        <Box sx={styles.paginationContainer}>
          <Pagination
            currentPage={currentPage}
            totalPages={5}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </Box>

        {/* 새 템플릿 모달 */}
        <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} maxWidth="md" fullWidth>
          <DialogTitle sx={styles.modalTitle}>
            새 템플릿 생성
            <IconButton onClick={() => setIsModalOpen(false)} sx={styles.closeButton}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box sx={styles.modalContent}>
              <Box sx={styles.formGroup}>
                <Typography variant="body2" sx={styles.label}>
                  카테고리 <span style={{ color: '#DC2626' }}>*</span>
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    options={categoryOptions}
                    width="100%"
                  />
                  <ActionButton
                    variant="outlined"
                    onClick={() => setIsCategoryModalOpen(true)}
                  >
                    카테고리 추가
                  </ActionButton>
                </Box>
              </Box>

              <Box sx={styles.formGroup}>
                <Typography variant="body2" sx={styles.label}>
                  템플릿명 <span style={{ color: '#DC2626' }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="템플릿명을 입력하세요"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                />
              </Box>

              <Box sx={styles.formGroup}>
                <Typography variant="body2" sx={styles.label}>
                  설명
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="템플릿 설명을 입력하세요"
                  value={templateDescription}
                  onChange={(e) => setTemplateDescription(e.target.value)}
                />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions sx={styles.modalActions}>
            <CancelButton onClick={() => setIsModalOpen(false)} />
            <SaveButton onClick={handleSaveTemplate} />
          </DialogActions>
        </Dialog>

        {/* 카테고리 추가 모달 */}
        <Dialog open={isCategoryModalOpen} onClose={() => setIsCategoryModalOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle sx={styles.modalTitle}>
            카테고리 추가
            <IconButton onClick={() => setIsCategoryModalOpen(false)} sx={styles.closeButton}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box sx={styles.modalContent}>
              <Typography variant="body2" sx={styles.label}>
                카테고리명 <span style={{ color: '#DC2626' }}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="카테고리명을 입력하세요"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </Box>
          </DialogContent>
          <DialogActions sx={styles.modalActions}>
            <CancelButton onClick={() => setIsCategoryModalOpen(false)} />
            <AddButton onClick={handleSaveCategory} />
          </DialogActions>
        </Dialog>
      </Container>
    </Layout>
  )
}

export default MeetTemplatePage
