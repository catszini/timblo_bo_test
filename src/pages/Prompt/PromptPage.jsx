import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

const PromptPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPrompt, setSelectedPrompt] = useState(null)

  // HTML과 동일한 프롬프트 데이터
  const promptData = [
    {
      id: 1,
      category: '회의록',
      key: 'TRN-EK-001',
      name: '핵심 요약 프롬프트',
      description: '회의의 핵심 내용을 요약하는 프롬프트',
      createdAt: '2024-02-28 14:30',
      creator: '김철수',
      version: 'v1.2'
    },
    {
      id: 2,
      category: '번역',
      key: 'TRN-EK-002',
      name: '영어 번역 프롬프트',
      description: '한국어를 영어로 번역하는 프롬프트',
      createdAt: '2024-02-27 11:20',
      creator: '이영희',
      version: 'v2.0'
    },
    {
      id: 3,
      category: '일정',
      key: 'TRN-EK-003',
      name: '일정 정리 프롬프트',
      description: '캘린더 일정을 정리하는 프롬프트',
      createdAt: '2024-02-26 09:15',
      creator: '박지민',
      version: 'v1.0'
    },
    {
      id: 4,
      category: '번역',
      key: 'TRN-EK-004',
      name: '중국어 번역 프롬프트',
      description: '한국어를 중국어로 번역하는 프롬프트',
      createdAt: '2024-02-25 16:45',
      creator: '최동훈',
      version: 'v1.5'
    },
    {
      id: 5,
      category: '분석',
      key: 'TRN-EK-005',
      name: '감정 분석 프롬프트',
      description: '텍스트의 감정을 분석하는 프롬프트',
      createdAt: '2024-02-24 13:20',
      creator: '정수진',
      version: 'v1.1'
    }
  ]

  const handleFileUpload = () => {
    // 파일 업로드 로직
    console.log('파일 업로드')
  }

  const handleRowClick = (prompt) => {
    setSelectedPrompt(prompt)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPrompt(null)
  }

  return (
    <Layout className="page-prompt">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">프롬프트관리</h1>
        </div>
        <div className="content-body">
          <div className="search-section">
            <div className="search-group">
              <div className="right-group">
                <button className="new-button" onClick={handleFileUpload}>파일업로드</button>
              </div>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>카테고리</th>
                  <th>KEY</th>
                  <th>이름</th>
                  <th>설명</th>
                  <th>생성시간</th>
                  <th>생성자</th>
                  <th>버전</th>
                </tr>
              </thead>
              <tbody>
                {promptData.map((prompt) => (
                  <tr key={prompt.id} onClick={() => handleRowClick(prompt)} style={{ cursor: 'pointer' }}>
                    <td>{prompt.category}</td>
                    <td>{prompt.key}</td>
                    <td>{prompt.name}</td>
                    <td>{prompt.description}</td>
                    <td>{prompt.createdAt}</td>
                    <td>{prompt.creator}</td>
                    <td>{prompt.version}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 프롬프트 등록/수정 모달 */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div 
            className="modal-container prompt-modal"
            style={{ width: '1000px', maxWidth: '1000px', minWidth: '1000px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              {/* ID 섹션 */}
              <div className="prompt-form-group">
                <div className="prompt-category-header">
                  <label>ID</label>
                  <button className="btn-close" onClick={handleCloseModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M1.33398 14.6663L14.6673 1.33301M1.33398 1.33301L14.6673 14.6663" stroke="#15191E" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <div className="prompt-form-value">{selectedPrompt?.key || 'DEF-001-SK'}</div>
              </div>

              {/* 버전정보 섹션 */}
              <div className="prompt-form-group">
                <div className="prompt-category-header">
                  <label>버전정보</label>
                </div>
                <div className="prompt-version-group">
                  <div className="prompt-version-input">
                    <div className="combo-select">
                      <select className="prompt-form-select">
                        <option>V1.0.0</option>
                        <option>V1.1.0</option>
                        <option>V1.2.0</option>
                        <option>V2.0.0</option>
                      </select>
                      <img src="../asset/select-arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 카테고리 섹션 */}
              <div className="prompt-form-group">
                <div className="prompt-category-header">
                  <label>카테고리</label>
                  <div className="prompt-edit-wrapper">
                    <button className="prompt-btn-edit">편집</button>
                  </div>
                </div>
                <div className="combo-select">
                  <select className="prompt-form-select">
                    <option>{selectedPrompt?.category || '회의록'}</option>
                    <option>번역</option>
                    <option>일정</option>
                    <option>분석</option>
                  </select>
                  <img src="../asset/select-arrow.svg" alt="" />
                </div>
              </div>

              {/* 프롬프트명 섹션 */}
              <div className="prompt-form-group">
                <div className="prompt-category-header">
                  <label>프롬프트명</label>
                </div>
                <input 
                  type="text" 
                  className="prompt-form-input" 
                  defaultValue={selectedPrompt?.name || ''}
                  placeholder="프롬프트명을 입력하세요"
                />
              </div>

              {/* 설명 섹션 */}
              <div className="prompt-form-group">
                <div className="prompt-category-header">
                  <label>설명</label>
                </div>
                <div style={{ position: 'relative' }}>
                  <textarea 
                    className="prompt-form-textarea" 
                    rows="3"
                    defaultValue={selectedPrompt?.description || ''}
                    placeholder="프롬프트에 대한 설명을 입력하세요"
                    style={{ resize: 'none' }}
                  />
                  <div className="prompt-input-counter">56/100자</div>
                </div>
              </div>

              {/* 버전정보 테이블 섹션 */}
              <div className="prompt-form-group">
                <div className="prompt-category-header">
                  <label>버전정보</label>
                </div>
                <div className="prompt-table-container">
                  <table className="prompt-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>버전</th>
                        <th>유형</th>
                        <th>변경사항</th>
                        <th>생성시간</th>
                        <th>생성자</th>
                        <th>수정자</th>
                        <th>수정일자</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DEF-001-SK</td>
                        <td>V1.2.0</td>
                        <td>텍스트</td>
                        <td title="의료 용어 사전 최신 반영">의료 용어 사전 최신 반영</td>
                        <td>2025-07-18 14:30:25</td>
                        <td>김철수</td>
                        <td>박지민</td>
                        <td>2025-08-08 16:45:12</td>
                      </tr>
                      <tr>
                        <td>DEF-001-SK</td>
                        <td>V1.1.0</td>
                        <td>음성</td>
                        <td title="녹취 품질 개선 프롬프트 적용">녹취 품질 개선 프롬프트 적용</td>
                        <td>2025-06-02 11:20:15</td>
                        <td>박지민</td>
                        <td>김철수</td>
                        <td>2025-07-15 09:30:45</td>
                      </tr>
                      <tr>
                        <td>DEF-001-SK</td>
                        <td>V1.0.0</td>
                        <td>텍스트</td>
                        <td title="초기 배포">초기 배포</td>
                        <td>2025-05-10 10:15:30</td>
                        <td>이영희</td>
                        <td>이영희</td>
                        <td>2025-05-10 10:15:30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 모달 푸터 버튼들 */}
              <div className="modal-footer" style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button className="prompt-btn-cancel" onClick={handleCloseModal}>취소</button>
                <button className="prompt-btn-submit">저장</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default PromptPage
