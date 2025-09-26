import React, { useState } from 'react'
import {
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
  ButtonGroup
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const MeetTemplatePage = () => {
  const [dateRange, setDateRange] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState('10')
  const [searchCategory, setSearchCategory] = useState('전체')
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [newCategory, setNewCategory] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('일반회의')
  const [templateName, setTemplateName] = useState('')
  const [templateDescription, setTemplateDescription] = useState('')
  const [previewText, setPreviewText] = useState('미리보기입니다. 템플릿팩 업로드 후 내용을 확인하세요.')

  // 템플릿 데이터
  const templates = [
    { 
      id: 'DEF-001-SK', 
      enabled: true, 
      category: '회의', 
      name: '일반 회의록 템플릿', 
      lastModified: '2024-02-28 14:30', 
      modifier: '김철수', 
      version: 'v1.2' 
    },
    { 
      id: 'DEF-002-SK', 
      enabled: true, 
      category: '세미나', 
      name: '주간 업무 보고 템플릿', 
      lastModified: '2024-02-27 11:20', 
      modifier: '이영희', 
      version: 'v2.0' 
    },
    { 
      id: 'DEF-003-SK', 
      enabled: false, 
      category: '상담', 
      name: '프로젝트 킥오프 템플릿', 
      lastModified: '2024-02-26 09:15', 
      modifier: '박지민', 
      version: 'v1.0' 
    },
    { 
      id: 'DEF-004-SK', 
      enabled: true, 
      category: '의료', 
      name: '1:1 면담 템플릿', 
      lastModified: '2024-02-25 16:45', 
      modifier: '최동훈', 
      version: 'v1.5' 
    },
    { 
      id: 'DEF-005-SK', 
      enabled: true, 
      category: '보고서', 
      name: '고객 미팅 템플릿', 
      lastModified: '2024-02-24 13:10', 
      modifier: '정미경', 
      version: 'v2.1' 
    },
    { 
      id: 'DEF-006-SK', 
      enabled: true, 
      category: '회의', 
      name: '월간 보고 템플릿', 
      lastModified: '2024-02-23 10:30', 
      modifier: '강민수', 
      version: 'v1.3' 
    },
    { 
      id: 'DEF-007-SK', 
      enabled: true, 
      category: '세미나', 
      name: '팀 미팅 템플릿', 
      lastModified: '2024-02-22 15:20', 
      modifier: '윤서연', 
      version: 'v1.1' 
    },
    { 
      id: 'DEF-008-SK', 
      enabled: false, 
      category: '상담', 
      name: '이사회 템플릿', 
      lastModified: '2024-02-21 09:45', 
      modifier: '조현우', 
      version: 'v2.2' 
    },
    { 
      id: 'DEF-009-SK', 
      enabled: true, 
      category: '의료', 
      name: '부서장 회의 템플릿', 
      lastModified: '2024-02-20 16:15', 
      modifier: '한지원', 
      version: 'v1.4' 
    },
    { 
      id: 'DEF-010-SK', 
      enabled: true, 
      category: '보고서', 
      name: '외부 미팅 템플릿', 
      lastModified: '2024-02-19 11:00', 
      modifier: '임수진', 
      version: 'v1.0' 
    }
  ]

  const categories = ['일반회의', '세미나', '상담진료', '고객']

  const handleSearch = () => {
    console.log('검색:', { searchCategory, searchTerm, dateRange, itemsPerPage })
  }

  const handleNewTemplate = () => {
    setIsModalOpen(true)
  }

  const handleSwitchChange = (templateId) => {
    console.log(`템플릿 ${templateId} 사용여부 변경`)
  }

  const handleRowClick = (template) => {
    if (template.id === 'DEF-001-SK') {
      // 첫 번째 행 클릭 시 상세 페이지로 이동
      window.location.href = '/meet-template-detail'
    }
  }

  const handleFileSelect = () => {
    console.log('파일 선택')
  }

  const handleCategoryEdit = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleNewCategory = () => {
    setIsDropdownOpen(false)
    setIsCategoryModalOpen(true)
  }

  const handleCategoryCreate = () => {
    console.log('새 카테고리 생성:', newCategory)
    setIsCategoryModalOpen(false)
    setNewCategory('')
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setTemplateName('')
    setTemplateDescription('')
    setPreviewText('미리보기입니다. 템플릿팩 업로드 후 내용을 확인하세요.')
  }

  const handleSave = () => {
    console.log('템플릿 저장:', { 
      selectedCategory, 
      templateName, 
      templateDescription 
    })
    setIsModalOpen(false)
  }

  return (
    <Layout className="template-list-page">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">회의 템플릿 관리</h1>
        </div>
        <div className="content-body">
          <div className="search-section">
            <div className="common-topbar">
              <div className="tb-left">
                <div className="date-range-wrap">
                  <TextField
                    placeholder="날짜 범위를 선택하세요"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    variant="outlined"
                    size="small"
                    sx={{ width: '200px' }}
                    InputProps={{ 
                      readOnly: true,
                      startAdornment: (
                        <div style={{ 
                          marginRight: '8px', 
                          display: 'flex', 
                          alignItems: 'center',
                          width: '16px',
                          height: '16px',
                          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\'%3E%3Cpath d=\'M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75\' stroke=\'%23666666\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                          backgroundSize: '16px 16px',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center'
                        }} />
                      )
                    }}
                  />
                </div>
              </div>
              <div className="tb-right tb-right-full">
                <div className="right-tail">
                  <FormControl size="small" sx={{ minWidth: 120, mr: 1 }}>
                    <Select
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(e.target.value)}
                      variant="outlined"
                    >
                      <MenuItem value="10">10개씩 보기</MenuItem>
                      <MenuItem value="20">20개씩 보기</MenuItem>
                      <MenuItem value="50">50개씩 보기</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small" sx={{ minWidth: 100, mr: 1 }}>
                    <Select
                      value={searchCategory}
                      onChange={(e) => setSearchCategory(e.target.value)}
                      variant="outlined"
                    >
                      <MenuItem value="전체">전체</MenuItem>
                      <MenuItem value="템플릿명">템플릿명</MenuItem>
                      <MenuItem value="작성자">작성자</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    placeholder="검색어를 입력해주세요."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    variant="outlined"
                    size="small"
                    sx={{ width: '200px', mr: 1 }}
                  />
                  <Button 
                    variant="outlined"
                    onClick={handleSearch}
                    sx={{ 
                      mr: 1,
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
                </div>
                <Button 
                  variant="outlined"
                  onClick={handleNewTemplate}
                  sx={{ 
                    bgcolor: 'success.main',
                    color: 'white',
                    borderColor: 'success.main',
                    '&:hover': { 
                      bgcolor: 'success.dark',
                      borderColor: 'success.dark'
                    }
                  }}
                >
                  파일업로드
                </Button>
              </div>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th className="sortable">사용여부 <span className="sort-icon" aria-hidden="true"></span></th>
                  <th>카테고리</th>
                  <th>템플릿명</th>
                  <th>최근수정일</th>
                  <th>수정자</th>
                  <th>버전</th>
                </tr>
              </thead>
              <tbody>
                {templates.map((template, index) => (
                  <tr 
                    key={template.id} 
                    onClick={() => handleRowClick(template)}
                    style={{ cursor: index === 0 ? 'pointer' : 'default' }}
                  >
                    <td>{template.id}</td>
                    <td>
                      <Switch
                        checked={template.enabled}
                        onChange={() => handleSwitchChange(template.id)}
                        size="small"
                        color="primary"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </td>
                    <td>{template.category}</td>
                    <td>{template.name}</td>
                    <td>{template.lastModified}</td>
                    <td>{template.modifier}</td>
                    <td>{template.version}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 페이징 */}
          <div className="pagination">
            <ButtonGroup variant="outlined" size="small">
              <Button disabled>‹</Button>
              <Button variant="contained">1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>›</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>

      {/* 템플릿 생성 모달 */}
      <Dialog 
        open={isModalOpen} 
        onClose={handleCancel} 
        maxWidth="lg" 
        fullWidth
        PaperProps={{
          sx: {
            height: '90vh',
            maxHeight: '90vh'
          }
        }}
      >
        <DialogTitle>
          <div className="header-text">
            <h2>템플릿 생성하기</h2>
            <p className="modal-subtitle">탬플릿 파일을 업로드해주세요</p>
          </div>
        </DialogTitle>
        <DialogContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div className="modal-split" style={{ display: 'flex', gap: '24px', height: 'calc(100% - 20px)', minHeight: '600px' }}>
            {/* 왼쪽: 템플릿팩 업로드 영역 */}
            <div className="modal-left" style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="form-group" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="upload-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <label style={{ fontWeight: '500' }}>템플릿팩 업로드하기</label>
                  <Button 
                    variant="outlined" 
                    onClick={handleFileSelect}
                    size="small"
                  >
                    파일 선택
                  </Button>
                </div>
                <div 
                  className="upload-box template-preview" 
                  style={{ 
                    border: '2px dashed #E5E5E5', 
                    borderRadius: '8px',
                    padding: '24px',
                    flex: 1,
                    minHeight: '500px',
                    backgroundColor: '#F9F9F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'auto'
                  }}
                >
                  <div className="preview-content preview-content-center" style={{ textAlign: 'center', color: '#666' }}>
                    {previewText}
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽: 입력 폼 영역 */}
            <div className="modal-right" style={{ flex: 1, overflow: 'auto', maxHeight: '100%' }}>
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>ID</label>
                <div className="form-value" style={{ padding: '8px', backgroundColor: '#F5F5F5', borderRadius: '4px' }}>
                  자동 생성됩니다
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>버전정보</label>
                <div className="form-value" style={{ padding: '8px', backgroundColor: '#F5F5F5', borderRadius: '4px' }}>
                  v1.0
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontWeight: '500' }}>카테고리</label>
                  <div className="edit-wrapper" style={{ position: 'relative' }}>
                    <Button 
                      variant="outlined" 
                      size="small"
                      onClick={handleCategoryEdit}
                    >
                      편집
                    </Button>
                    {isDropdownOpen && (
                      <div 
                        className="dropdown-menu" 
                        style={{
                          position: 'absolute',
                          top: '100%',
                          right: 0,
                          backgroundColor: 'white',
                          border: '1px solid #E5E5E5',
                          borderRadius: '4px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                          zIndex: 1000,
                          minWidth: '200px'
                        }}
                      >
                        <ul style={{ margin: 0, padding: '8px 0', listStyle: 'none' }}>
                          {categories.map((category) => (
                            <li key={category} className="dropdown-item" style={{ padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span>{category}</span>
                              <div className="item-actions">
                                <ButtonGroup variant="outlined" size="small">
                                  <Button sx={{ minWidth: 'auto', p: 0.5 }}>✏️</Button>
                                  <Button sx={{ minWidth: 'auto', p: 0.5 }}>🗑️</Button>
                                </ButtonGroup>
                              </div>
                            </li>
                          ))}
                          <li style={{ borderTop: '1px solid #E5E5E5', margin: '8px 0' }}></li>
                          <li 
                            className="dropdown-item new-category" 
                            style={{ padding: '8px 16px', cursor: 'pointer' }}
                            onClick={handleNewCategory}
                          >
                            <span>새 카테고리 생성</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <FormControl fullWidth size="small">
                  <Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    variant="outlined"
                  >
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>템플릿명</label>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="템플릿 이름을 입력하세요"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                />
                <div className="input-counter" style={{ textAlign: 'right', fontSize: '12px', color: '#666', marginTop: '4px' }}>
                  {templateName.length}/10자
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>템플릿 설명</label>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  size="small"
                  variant="outlined"
                  placeholder="사용자에게 템플릿을 소개할 수 있는 설명을 입력하세요"
                  value={templateDescription}
                  onChange={(e) => setTemplateDescription(e.target.value)}
                />
                <div className="input-counter" style={{ textAlign: 'right', fontSize: '12px', color: '#666', marginTop: '4px' }}>
                  {templateDescription.length}/100자
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <ButtonGroup variant="outlined" size="medium">
            <Button 
              onClick={handleCancel}
              sx={{ 
                color: 'text.secondary',
                borderColor: 'grey.400',
                '&:hover': { 
                  bgcolor: 'grey.100',
                  borderColor: 'grey.400'
                }
              }}
            >
              취소
            </Button>
            <Button 
              onClick={handleSave}
              sx={{ 
                bgcolor: 'primary.main',
                color: 'white',
                borderColor: 'primary.main',
                '&:hover': { 
                  bgcolor: 'primary.dark',
                  borderColor: 'primary.dark'
                }
              }}
            >
              저장
            </Button>
          </ButtonGroup>
        </DialogActions>
      </Dialog>

      {/* 새 카테고리 생성 모달 */}
      <Dialog open={isCategoryModalOpen} onClose={() => setIsCategoryModalOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>새 카테고리 생성</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder="새 카테고리 이름을 입력해주세요"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <ButtonGroup variant="outlined" size="medium">
            <Button 
              onClick={() => setIsCategoryModalOpen(false)}
              sx={{ 
                color: 'text.secondary',
                borderColor: 'grey.400',
                '&:hover': { 
                  bgcolor: 'grey.100',
                  borderColor: 'grey.400'
                }
              }}
            >
              취소
            </Button>
            <Button 
              onClick={handleCategoryCreate}
              sx={{ 
                bgcolor: 'primary.main',
                color: 'white',
                borderColor: 'primary.main',
                '&:hover': { 
                  bgcolor: 'primary.dark',
                  borderColor: 'primary.dark'
                }
              }}
            >
              저장
            </Button>
          </ButtonGroup>
        </DialogActions>
      </Dialog>
    </Layout>
  )
}

export default MeetTemplatePage
