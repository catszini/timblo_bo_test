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

const MeetTemplateDetailPage = () => {
  const [selectedVersion, setSelectedVersion] = useState('V1.2.0')
  const [selectedCategory, setSelectedCategory] = useState('일반회의')
  const [templateName, setTemplateName] = useState('일반 회의록 템플릿')
  const [templateDescription, setTemplateDescription] = useState('외래 진료에 사용되는 표준 회의록 템플릿입니다.')
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [newCategory, setNewCategory] = useState('')
  
  // Switch 상태들
  const [switchStates, setSwitchStates] = useState({
    summary: false,
    attendees: false,
    keywords: false
  })

  const categories = ['일반회의', '세미나', '상담진료', '고객']

  // 버전 정보 데이터
  const versionData = [
    {
      id: 'DEF-001-SK',
      version: 'V1.2.0',
      type: '텍스트',
      changes: '의료 용어 사전 최신 반영',
      registeredDate: '2025-07-18 14:30:25',
      registeredBy: '김철수',
      modifiedBy: '박지민',
      modifiedDate: '202025-08-08 16:45:12'
    },
    {
      id: 'DEF-001-SK',
      version: 'V1.1.0',
      type: '음성',
      changes: '녹취 품질 개선 프롬프트 적용',
      registeredDate: '2025-06-02 11:20:15',
      registeredBy: '박지민',
      modifiedBy: '김철수',
      modifiedDate: '2025-07-15 09:30:45'
    },
    {
      id: 'DEF-001-SK',
      version: '',
      type: '텍스트',
      changes: '초기 배포',
      registeredDate: '2025-05-10 10:15:30',
      registeredBy: '이영희',
      modifiedBy: '이영희',
      modifiedDate: '2025-05-10 10:15:30'
    }
  ]

  const handleSwitchChange = (switchName) => {
    setSwitchStates(prev => ({
      ...prev,
      [switchName]: !prev[switchName]
    }))
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

  const handleDelete = () => {
    console.log('템플릿 삭제')
  }

  const handleCancel = () => {
    window.history.back()
  }

  const handleSave = () => {
    console.log('템플릿 저장:', {
      selectedVersion,
      selectedCategory,
      templateName,
      templateDescription,
      switchStates
    })
  }

  return (
    <Layout className="page-template-detail template-detail-page">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">템플릿 관리 (회의록, 공통 템플릿)</h1>
          <div className="template-detail-actions">
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
          </div>
        </div>

        <div className="content-body">
          <div className="modal-container">
            <div className="modal-content">
              <div className="modal-split" style={{ display: 'flex', gap: '24px' }}>
                {/* 왼쪽: 프리뷰 */}
                <div className="modal-left" style={{ flex: 1 }}>
                  <div className="form-group">
                    <div className="upload-header" style={{ marginBottom: '16px' }}>
                      <label style={{ fontWeight: '500' }}>템플릿팩 업로드하기</label>
                    </div>
                    <div 
                      className="upload-box template-preview" 
                      style={{ 
                        height: '100vh', 
                        overflowY: 'auto',
                        border: '1px solid #E5E5E5',
                        borderRadius: '8px',
                        padding: '24px',
                        backgroundColor: '#F9F9F9'
                      }}
                    >
                      <div className="preview-content">
                        {/* 의료 미리보기 */}
                        <h3>🩺 외래 진료 기록 (간호사 작성)</h3>
                        <div className="patient-info" style={{ marginBottom: '16px', padding: '12px', backgroundColor: 'white', borderRadius: '4px' }}>
                          <strong>환자명:</strong> 김○○ &nbsp;&nbsp; <strong>성별/나이:</strong> F / 52세 &nbsp;&nbsp;
                          <strong>차트번호:</strong> 2025-001234<br />
                          <strong>진료과:</strong> 내과 &nbsp;&nbsp; <strong>담당의:</strong> 홍길동 &nbsp;&nbsp;
                          <strong>방문일시:</strong> 202025-08-08 10:30
                        </div>
                        
                        <h4>📄 기존 진료 이력</h4>
                        <table className="preview-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
                          <thead>
                            <tr style={{ backgroundColor: '#F0F0F0' }}>
                              <th style={{ border: '1px solid #DDD', padding: '8px' }}>날짜</th>
                              <th style={{ border: '1px solid #DDD', padding: '8px' }}>진단명</th>
                              <th style={{ border: '1px solid #DDD', padding: '8px' }}>처방 내용</th>
                              <th style={{ border: '1px solid #DDD', padding: '8px' }}>비고</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>2025-06-12</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>급성 기관지염</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>항생제(Amoxicillin), 진해거담제</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>7일 복용</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>2025-03-04</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>고혈압</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>Amlodipine 5mg</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>복용 중</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>2024-12-10</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>건강검진</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>이상소견 없음</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}></td>
                            </tr>
                          </tbody>
                        </table>
                        
                        <h4>👩‍⚕️ 현재 상태</h4>
                        <table className="preview-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
                          <tbody>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', backgroundColor: '#F9F9F9', fontWeight: 'bold' }}>주호소(Chief Complaint)</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>3일 전부터 기침·가래 심해짐, 미열 동반</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', backgroundColor: '#F9F9F9', fontWeight: 'bold' }}>V/S (활력징후)</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>BP 128/82 mmHg, PR 78 bpm, BT 37.8°C, RR 20/min</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', backgroundColor: '#F9F9F9', fontWeight: 'bold' }}>외관</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>기침 지속, 호흡 약간 가빠짐</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', backgroundColor: '#F9F9F9', fontWeight: 'bold' }}>기타</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>과거 폐렴 병력 없음</td>
                            </tr>
                          </tbody>
                        </table>
                        
                        <h4>🗨️ 의사–환자 대화</h4>
                        <table className="preview-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
                          <thead>
                            <tr style={{ backgroundColor: '#F0F0F0' }}>
                              <th style={{ border: '1px solid #DDD', padding: '8px' }}>구분</th>
                              <th style={{ border: '1px solid #DDD', padding: '8px' }}>대화 내용</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', fontWeight: 'bold' }}>의사</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>"언제부터 기침이 시작되었나요? 열은 있었습니까?"</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', fontWeight: 'bold' }}>환자</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>"3일 전부터였고, 어제 열이 좀 났어요."</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', fontWeight: 'bold' }}>의사</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>"가래 색은 어떤가요? 숨이 차거나 가슴이 아픈가요?"</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', fontWeight: 'bold' }}>환자</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>"노란색 가래고, 숨이 조금 차요."</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', fontWeight: 'bold' }}>의사</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>"폐렴 여부 확인 위해 흉부 X-ray 촬영하겠습니다. 결과 보고 설명드릴게요."</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', fontWeight: 'bold' }}>환자</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>"네, 알겠습니다."</td>
                            </tr>
                          </tbody>
                        </table>
                        
                        <h4>📅 예약·추후 계획</h4>
                        <table className="preview-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
                          <tbody>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', backgroundColor: '#F9F9F9', fontWeight: 'bold' }}>검사</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>흉부 X-ray (당일)</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', backgroundColor: '#F9F9F9', fontWeight: 'bold' }}>다음 진료 예약</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>2025-08-15 10:00 (결과 설명 및 경과 확인)</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', backgroundColor: '#F9F9F9', fontWeight: 'bold' }}>교육·지도</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>충분한 수분 섭취, 휴식, 처방약 복용 방법 안내</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #DDD', padding: '8px', backgroundColor: '#F9F9F9', fontWeight: 'bold' }}>특이사항</td>
                              <td style={{ border: '1px solid #DDD', padding: '8px' }}>폐렴 의심, X-ray 결과에 따라 항생제 조정 예정</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 오른쪽: 입력 폼 영역 */}
                <div className="modal-right" style={{ flex: 1 }}>
                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>ID</label>
                    <div className="form-value" style={{ padding: '8px', backgroundColor: '#F5F5F5', borderRadius: '4px' }}>
                      DEF-001-SK
                    </div>
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>버전정보</label>
                    <div className="version-group">
                      <FormControl fullWidth size="small">
                        <Select
                          value={selectedVersion}
                          onChange={(e) => setSelectedVersion(e.target.value)}
                          variant="outlined"
                        >
                          <MenuItem value="V1.0.0">V1.0.0</MenuItem>
                          <MenuItem value="V1.1.0">V1.1.0</MenuItem>
                          <MenuItem value="V1.2.0">V1.2.0</MenuItem>
                          <MenuItem value="V2.0.0">V2.0.0</MenuItem>
                        </Select>
                      </FormControl>
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
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>공통 영역 노출 여부</label>
                    <div className="switch-group">
                      <div className="switches" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div className="switch-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div className="switch-text">핵심요약</div>
                          <Switch
                            checked={switchStates.summary}
                            onChange={() => handleSwitchChange('summary')}
                            size="small"
                            color="primary"
                          />
                        </div>
                        <div className="switch-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div className="switch-text">참석자</div>
                          <Switch
                            checked={switchStates.attendees}
                            onChange={() => handleSwitchChange('attendees')}
                            size="small"
                            color="primary"
                          />
                        </div>
                        <div className="switch-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div className="switch-text">키워드</div>
                          <Switch
                            checked={switchStates.keywords}
                            onChange={() => handleSwitchChange('keywords')}
                            size="small"
                            color="primary"
                          />
                        </div>
                      </div>
                    </div>
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

                  {/* 버전정보 테이블 섹션 */}
                  <div className="form-group">
                    <div className="category-header" style={{ marginBottom: '16px' }}>
                      <label style={{ fontWeight: '500' }}>버전정보</label>
                    </div>
                    <div className="table-container" style={{ fontSize: '14px' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                          <tr style={{ backgroundColor: '#F0F0F0' }}>
                            <th style={{ border: '1px solid #DDD', padding: '12px' }}>ID</th>
                            <th style={{ border: '1px solid #DDD', padding: '12px' }}>버전</th>
                            <th style={{ border: '1px solid #DDD', padding: '12px' }}>유형</th>
                            <th style={{ border: '1px solid #DDD', padding: '12px' }}>변경사항</th>
                            <th style={{ border: '1px solid #DDD', padding: '12px' }}>등록일</th>
                            <th style={{ border: '1px solid #DDD', padding: '12px' }}>등록자</th>
                            <th style={{ border: '1px solid #DDD', padding: '12px' }}>수정자</th>
                            <th style={{ border: '1px solid #DDD', padding: '12px' }}>수정일자</th>
                          </tr>
                        </thead>
                        <tbody>
                          {versionData.map((version, index) => (
                            <tr key={index}>
                              <td style={{ border: '1px solid #DDD', padding: '12px' }}>{version.id}</td>
                              <td style={{ border: '1px solid #DDD', padding: '12px' }}>{version.version}</td>
                              <td style={{ border: '1px solid #DDD', padding: '12px' }}>{version.type}</td>
                              <td style={{ border: '1px solid #DDD', padding: '12px' }}>{version.changes}</td>
                              <td style={{ border: '1px solid #DDD', padding: '12px' }}>{version.registeredDate}</td>
                              <td style={{ border: '1px solid #DDD', padding: '12px' }}>{version.registeredBy}</td>
                              <td style={{ border: '1px solid #DDD', padding: '12px' }}>{version.modifiedBy}</td>
                              <td style={{ border: '1px solid #DDD', padding: '12px' }}>{version.modifiedDate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="pagination" style={{ marginTop: '16px', textAlign: 'center' }}>
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
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default MeetTemplateDetailPage
