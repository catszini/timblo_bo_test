import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

const MenuSettingPage = () => {
  const [activeTab, setActiveTab] = useState('system-menu')
  const [selectedWorkspace, setSelectedWorkspace] = useState('워크스페이스 목록')
  const [isNewMenuModalOpen, setIsNewMenuModalOpen] = useState(false)
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])

  // 시스템 메뉴 데이터
  const systemMenuData = [
    { id: 1, name: '워크스페이스 관리', url: '/workspace', order: 1, isActive: true },
    { id: 2, name: '전체 메뉴 관리', url: '/menu-setting', order: 2, isActive: true },
    { id: 3, name: '사용자 관리', url: '/user-management', order: 3, isActive: true },
    { id: 4, name: '역할 관리', url: '/group-setting', order: 4, isActive: true },
    { id: 5, name: '설정변경 이력', url: '/setting-history', order: 5, isActive: true },
    { id: 6, name: '전체 시스템 사용 통계', url: '/system-stats', order: 6, isActive: true }
  ]

  // 워크스페이스 메뉴 데이터
  const workspaceMenuData = [
    // 워크스페이스 설정
    { id: 'ws-1', name: '기능 권한 관리', url: '/workspace-permission', category: '워크스페이스 설정', isActive: true },
    { id: 'ws-2', name: '컨텐츠 보존 관리', url: '/content-retention', category: '워크스페이스 설정', isActive: true },
    { id: 'ws-3', name: '역할 관리', url: '/workspace-group-setting', category: '워크스페이스 설정', isActive: true },
    { id: 'ws-4', name: '사용자 관리', url: '/user', category: '워크스페이스 설정', isActive: true },
    { id: 'ws-5', name: '로고 관리', url: '/logo', category: '워크스페이스 설정', isActive: true },
    
    // 세부 기능 관리
    { id: 'df-1', name: '템플릿 관리', url: '/meet-template', category: '세부 기능 관리', isActive: true },
    { id: 'df-2', name: '프롬프트 관리', url: '/prompt', category: '세부 기능 관리', isActive: true },
    { id: 'df-3', name: '동의서 관리', url: '/consent', category: '세부 기능 관리', isActive: true },
    { id: 'df-4', name: '캘린더 관리/설정', url: '/calendar', category: '세부 기능 관리', isActive: true },
    { id: 'df-5', name: '사전 관리', url: '/dictionary', category: '세부 기능 관리', isActive: true },
    { id: 'df-6', name: '공지사항 관리', url: '/notice', category: '세부 기능 관리', isActive: true },
    
    // 이력/통계 관리
    { id: 'hs-1', name: '사용자 접속 이력', url: '/login-history', category: '이력/통계 관리', isActive: true },
    { id: 'hs-2', name: '다운로드 이력', url: '/download-history', category: '이력/통계 관리', isActive: true },
    { id: 'hs-3', name: '사용자 동의 이력', url: '/user-consent-history', category: '이력/통계 관리', isActive: true },
    { id: 'hs-4', name: '설정 변경 이력', url: '/setting-change-history', category: '이력/통계 관리', isActive: true },
    { id: 'hs-5', name: '회의록 이력', url: '/meeting', category: '이력/통계 관리', isActive: true },
    { id: 'hs-6', name: '워크스페이스 사용 통계', url: '/stats-usage', category: '이력/통계 관리', isActive: true },
    { id: 'hs-7', name: '사용자별 사용 통계', url: '/stats-user', category: '이력/통계 관리', isActive: true }
  ]

  // 워크스페이스 목록
  const workspaceList = [
    '워크스페이스 목록', 'SK Telecom', 'Samsung Electronics', 'LG Electronics', 
    'Hyundai Motor', 'KT Corporation', 'POSCO', 'Naver Corporation', 
    'Kakao Corp', 'Coupang', 'Krafton'
  ]

  // 탭 변경 핸들러
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    // 탭 변경 시 선택 상태 초기화
    setSelectAll(false)
    setSelectedRows([])
  }

  // 워크스페이스 선택 핸들러
  const handleWorkspaceChange = (e) => {
    setSelectedWorkspace(e.target.value)
  }

  // 전체 선택 핸들러
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked
    setSelectAll(isChecked)
    if (isChecked) {
      const currentData = activeTab === 'system-menu' ? systemMenuData : workspaceMenuData
      setSelectedRows(currentData.map(item => item.id))
    } else {
      setSelectedRows([])
    }
  }

  // 개별 선택 핸들러
  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

  // 토글 스위치 핸들러
  const handleToggle = (id) => {
    // 토글 로직 구현
    console.log('Toggle menu:', id)
  }

  // 버튼 핸들러들
  const handleDelete = () => {
    if (selectedRows.length === 0) {
      alert('삭제할 항목을 선택해주세요.')
      return
    }
    alert(`${selectedRows.length}개 항목이 삭제되었습니다.`)
  }

  const handleEdit = () => {
    if (selectedRows.length !== 1) {
      alert('수정할 항목을 하나만 선택해주세요.')
      return
    }
    alert('수정 기능을 구현해주세요.')
  }

  const handleNew = () => {
    setIsNewMenuModalOpen(true)
  }

  const handleSave = () => {
    alert('저장되었습니다.')
  }

  const handleApply = () => {
    alert('적용되었습니다.')
  }

  // 모달 닫기
  const handleModalClose = () => {
    setIsNewMenuModalOpen(false)
  }

  // 카테고리별 메뉴 그룹화
  const getGroupedWorkspaceMenus = () => {
    const groups = {}
    workspaceMenuData.forEach(menu => {
      if (!groups[menu.category]) {
        groups[menu.category] = []
      }
      groups[menu.category].push(menu)
    })
    return groups
  }

  return (
    <Layout className="page-menu-setting">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">전체 메뉴 관리</h1>
        </div>
        
        <div className="content-body">
        {/* 탭 네비게이션 */}
          <div className="menu-tab-container">
            <ul className="tab-list">
              <li>
                <button 
                    className={`tab-button ${activeTab === 'system-menu' ? 'active' : ''}`}
                    onClick={() => handleTabChange('system-menu')}
                >
                  시스템 메뉴 관리
                </button>
              </li>
              <li>
                <button 
                    className={`tab-button ${activeTab === 'workspace-menu' ? 'active' : ''}`}
                    onClick={() => handleTabChange('workspace-menu')}
                >
                  워크스페이스 메뉴 관리
                </button>
              </li>
            </ul>
          </div>

          {/* 시스템 메뉴 관리 탭 */}
          {activeTab === 'system-menu' && (
            <div className="tab-content active">
          <div className="menu-title-header">
            <div className="menu-title-section">
                  <h3 className="menu-subtitle">시스템 메뉴 관리</h3>
                  <span className="menu-count">총 {systemMenuData.length}개 메뉴</span>
                </div>
                <div className="menu-action-buttons">
                  <button className="delete-btn" onClick={handleDelete}>삭제</button>
                  <button className="edit-btn" onClick={handleEdit}>수정</button>
                  <button className="new-button" onClick={handleNew}>생성</button>
                </div>
          </div>

                <table className="menu-table">
                  <thead>
                    <tr>
                    <th>
                      <input 
                        type="checkbox" 
                        className="select-all"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </th>
                      <th>메뉴명</th>
                      <th>URL</th>
                      <th>순서</th>
                      <th>사용여부</th>
                      <th>관리</th>
                    </tr>
                  </thead>
                  <tbody>
                  {systemMenuData.map(menu => (
                    <tr key={menu.id}>
                      <td>
                        <input 
                          type="checkbox"
                          checked={selectedRows.includes(menu.id)}
                          onChange={() => handleRowSelect(menu.id)}
                        />
                      </td>
                      <td>{menu.name}</td>
                      <td>{menu.url}</td>
                      <td>{menu.order}</td>
                      <td>
                        <label className="switch">
                          <input 
                            type="checkbox" 
                            checked={menu.isActive}
                            onChange={() => handleToggle(menu.id)}
                          />
                          <span className="slider"></span>
                        </label>
                      </td>
                      <td>
                        <button className="edit-btn">수정</button>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
            </div>
          )}

          {/* 워크스페이스 메뉴 관리 탭 */}
          {activeTab === 'workspace-menu' && (
            <div className="tab-content active">
              <div className="menu-title-header">
                <div className="menu-title-section">
              <h3 className="menu-subtitle">메뉴 관리</h3>
              <div className="workspace-selector">
                    <select value={selectedWorkspace} onChange={handleWorkspaceChange}>
                      {workspaceList.map((workspace, index) => (
                        <option key={index} value={workspace}>{workspace}</option>
                      ))}
                    </select>
              </div>
            </div>
                <div className="menu-action-buttons">
                  <button className="btn-save" onClick={handleSave}>저장</button>
                  <button className="new-button" onClick={handleNew}>생성</button>
                  <button className="btn-submit btn-apply" onClick={handleApply}>적용</button>
            </div>
          </div>

            <table className="menu-table">
              <thead>
                <tr>
                    <th>
                      <input 
                        type="checkbox" 
                        className="select-all"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th>메뉴명</th>
                    <th>URL</th>
                    <th>사용여부</th>
                    <th>관리</th>
                </tr>
              </thead>
              <tbody>
                  {Object.entries(getGroupedWorkspaceMenus()).map(([category, menus]) => (
                    <React.Fragment key={category}>
                      <tr className="section-header">
                        <td colSpan="5" className={`section-title ${category.replace(/[^a-zA-Z]/g, '').toLowerCase()}`}>
                          {category}
                      </td>
                    </tr>
                      {menus.map(menu => (
                        <tr key={menu.id}>
                          <td>
                            <input 
                              type="checkbox"
                              checked={selectedRows.includes(menu.id)}
                              onChange={() => handleRowSelect(menu.id)}
                        />
                      </td>
                          <td>{menu.name}</td>
                          <td>{menu.url}</td>
                          <td>
                            <label className="switch">
                              <input 
                                type="checkbox" 
                                checked={menu.isActive}
                                onChange={() => handleToggle(menu.id)}
                              />
                              <span className="slider"></span>
                            </label>
                      </td>
                      <td>
                            <button className="edit-btn">수정</button>
                      </td>
                    </tr>
                      ))}
                    </React.Fragment>
                  ))}
              </tbody>
            </table>
            </div>
          )}

          {/* 새 메뉴 생성 모달 */}
          {isNewMenuModalOpen && (
            <div className="modal-overlay">
              <div className="modal-container">
                <div className="modal-header">
                  <div className="header-content">
                    <h3 className="header-text">새 메뉴</h3>
                    <button className="btn-close" onClick={handleModalClose}>×</button>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="form-row">
                    <div className="form-group">
                      <label>메뉴명</label>
                      <input type="text" className="form-input" placeholder="메뉴명을 입력하세요" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>URL</label>
                      <input type="text" className="form-input" placeholder="URL을 입력하세요" />
                    </div>
                  </div>
                  {activeTab === 'system-menu' && (
                    <div className="form-row">
                      <div className="form-group">
                        <label>순서</label>
                        <input type="number" className="form-input" placeholder="순서를 입력하세요" />
                      </div>
                    </div>
                  )}
                  {activeTab === 'workspace-menu' && (
                    <div className="form-row">
                      <div className="form-group">
                        <label>카테고리</label>
                        <select className="form-input">
                          <option>워크스페이스 설정</option>
                          <option>세부 기능 관리</option>
                          <option>이력/통계 관리</option>
                        </select>
                      </div>
                    </div>
                  )}
                  <div className="form-row">
                    <div className="form-group">
                      <label>사용여부</label>
                      <div className="status-radio-group">
                        <div className="radio-option">
                          <input type="radio" id="active" name="status" value="active" defaultChecked />
                          <label htmlFor="active" className="radio-label active">사용</label>
                        </div>
                        <div className="radio-option">
                          <input type="radio" id="inactive" name="status" value="inactive" />
                          <label htmlFor="inactive" className="radio-label inactive">미사용</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn-cancel" onClick={handleModalClose}>취소</button>
                  <button className="btn-submit" onClick={handleModalClose}>생성</button>
                </div>
          </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default MenuSettingPage
