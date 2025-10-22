import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import selectArrowIcon from '../../../asset/select-arrow.svg'
import closeIcon from '../../../asset/close-icon.svg'

const MenuSettingPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  // URL 파라미터에서 탭 읽기
  const getInitialTab = () => {
    const params = new URLSearchParams(location.search)
    return params.get('tab') || 'system-menu'
  }
  
  const [activeTab, setActiveTab] = useState(getInitialTab())
  const [isNewMenuModalOpen, setIsNewMenuModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [currentMenuType, setCurrentMenuType] = useState('system')
  
  // 시스템 메뉴 데이터 (순서 컬럼 제거됨)
  const [systemMenuData, setSystemMenuData] = useState([
    { id: 1, name: '워크스페이스 관리', url: '/workspace', isActive: true },
    { id: 2, name: '전체 메뉴 관리', url: '/menu-setting', isActive: true },
    { id: 3, name: '사용자 관리', url: '/user-management', isActive: true },
    { id: 4, name: '역할 관리', url: '/group-setting', isActive: true },
    { id: 5, name: '설정변경 이력', url: '/setting-history', isActive: true },
    { id: 6, name: '전체 시스템 사용 통계', url: '/system-stats', isActive: true },
    { id: 7, name: '사용자별 사용 통계', url: '/system-stats-user', isActive: true }
  ])

  // 워크스페이스 메뉴 데이터
  const [workspaceMenuData, setWorkspaceMenuData] = useState([
    // 워크스페이스 설정
    { id: 'ws-1', name: '기능 권한 관리', url: '/workspace-permission', category: '워크스페이스 설정', isActive: true },
    { id: 'ws-2', name: '컨텐츠 보존 관리', url: '/content-retention', category: '워크스페이스 설정', isActive: true },
    { id: 'ws-3', name: '역할 관리', url: '/workspace-group-setting', category: '워크스페이스 설정', isActive: true },
    { id: 'ws-4', name: '사용자 관리', url: '/user', category: '워크스페이스 설정', isActive: true },
    { id: 'ws-5', name: '로고 관리', url: '/logo', category: '워크스페이스 설정', isActive: true },
    
    // 세부 기능 관리
    { id: 'df-1', name: '템플릿 관리 (회의록, 공통 템플릿)', url: '/meet-template', category: '세부 기능 관리', isActive: true },
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
  ])

  // 선택된 메뉴들
  const [systemSelectedMenus, setSystemSelectedMenus] = useState([])
  const [workspaceSelectedMenus, setWorkspaceSelectedMenus] = useState([])
  
  // 모달 폼 데이터
  const [formData, setFormData] = useState({
    menuName: '',
    menuUrl: '',
    menuOrder: '',
    groupSelect: '',
    menuStatus: 'active'
  })

  // URL 파라미터 변경 감지
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const tabParam = params.get('tab')
    if (tabParam && tabParam !== activeTab) {
      setActiveTab(tabParam)
    }
  }, [location.search])

  // 탭 변경 핸들러
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    // URL 파라미터 업데이트
    const newUrl = new URL(window.location)
    newUrl.searchParams.set('tab', tab)
    navigate(`?tab=${tab}`, { replace: true })
  }

  // 전체 선택 핸들러
  const handleSelectAll = (e, tabType) => {
    const isChecked = e.target.checked
    if (tabType === 'system') {
      if (isChecked) {
        setSystemSelectedMenus(systemMenuData.map(m => m.id))
      } else {
        setSystemSelectedMenus([])
      }
    } else {
      if (isChecked) {
        setWorkspaceSelectedMenus(workspaceMenuData.map(m => m.id))
      } else {
        setWorkspaceSelectedMenus([])
      }
    }
  }

  // 개별 선택 핸들러
  const handleRowSelect = (id, tabType) => {
    if (tabType === 'system') {
      if (systemSelectedMenus.includes(id)) {
        setSystemSelectedMenus(systemSelectedMenus.filter(menuId => menuId !== id))
      } else {
        setSystemSelectedMenus([...systemSelectedMenus, id])
      }
    } else {
      if (workspaceSelectedMenus.includes(id)) {
        setWorkspaceSelectedMenus(workspaceSelectedMenus.filter(menuId => menuId !== id))
      } else {
        setWorkspaceSelectedMenus([...workspaceSelectedMenus, id])
      }
    }
  }

  // 삭제 버튼 클릭
  const handleDeleteClick = () => {
    const selectedMenus = activeTab === 'system-menu' ? systemSelectedMenus : workspaceSelectedMenus
    if (selectedMenus.length === 0) {
      alert('삭제할 메뉴를 선택해주세요.')
      return
    }
    setIsDeleteModalOpen(true)
  }

  // 삭제 확인
  const handleDeleteConfirm = () => {
    if (activeTab === 'system-menu') {
      const selectedNames = systemMenuData
        .filter(menu => systemSelectedMenus.includes(menu.id))
        .map(menu => menu.name)
      
      setSystemMenuData(systemMenuData.filter(menu => !systemSelectedMenus.includes(menu.id)))
      setSystemSelectedMenus([])
      
      alert(`선택한 메뉴가 삭제되었습니다: ${selectedNames.join(', ')}`)
    } else {
      const selectedNames = workspaceMenuData
        .filter(menu => workspaceSelectedMenus.includes(menu.id))
        .map(menu => menu.name)
      
      setWorkspaceMenuData(workspaceMenuData.filter(menu => !workspaceSelectedMenus.includes(menu.id)))
      setWorkspaceSelectedMenus([])
      
      alert(`선택한 메뉴가 삭제되었습니다: ${selectedNames.join(', ')}`)
    }
    setIsDeleteModalOpen(false)
  }

  // 생성 버튼 클릭
  const handleNewClick = () => {
    setCurrentMenuType(activeTab === 'system-menu' ? 'system' : 'workspace')
    clearModalForm()
    setIsNewMenuModalOpen(true)
  }

  // 모달 폼 초기화
  const clearModalForm = () => {
    setFormData({
      menuName: '',
      menuUrl: '',
      menuOrder: '',
      groupSelect: '',
      menuStatus: 'active'
    })
  }

  // 모달 저장
  const handleModalSave = () => {
    const { menuName, menuUrl, menuOrder, groupSelect, menuStatus } = formData
    
    if (!menuName || !menuUrl) {
      alert('메뉴명과 URL을 입력해주세요.')
      return
    }

    if (currentMenuType === 'system') {
      if (!menuOrder) {
        alert('순서를 입력해주세요.')
        return
      }
      alert(`시스템 메뉴가 생성되었습니다.\n메뉴명: ${menuName}\nURL: ${menuUrl}\n순서: ${menuOrder}\n상태: ${menuStatus === 'active' ? '사용' : '미사용'}`)
    } else {
      if (!groupSelect) {
        alert('그룹을 선택해주세요.')
        return
      }
      alert(`워크스페이스 메뉴가 생성되었습니다.\n메뉴명: ${menuName}\nURL: ${menuUrl}\n그룹: ${groupSelect}\n상태: ${menuStatus === 'active' ? '사용' : '미사용'}`)
    }
    
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

  // 카테고리 클래스명 생성
  const getCategoryClass = (category) => {
    if (category === '워크스페이스 설정') return 'workspace-settings'
    if (category === '세부 기능 관리') return 'feature-management'
    if (category === '이력/통계 관리') return 'history-stats'
    return ''
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
                  data-tab="system-menu"
                >
                  시스템 메뉴 관리
                </button>
              </li>
              <li>
                <button 
                  className={`tab-button ${activeTab === 'workspace-menu' ? 'active' : ''}`}
                  onClick={() => handleTabChange('workspace-menu')}
                  data-tab="workspace-menu"
                >
                  워크스페이스 메뉴 관리
                </button>
              </li>
            </ul>
          </div>

          {/* 시스템 메뉴 관리 탭 */}
          <div id="system-menu" className={`tab-content ${activeTab === 'system-menu' ? 'active' : ''}`}>
            <div className="menu-title-header">
              <div className="menu-title-section">
                <h3 className="menu-subtitle">시스템 메뉴 관리</h3>
                <span className="menu-count">총 {systemMenuData.length}개 메뉴</span>
              </div>
              <div className="menu-action-buttons">
                <button className="delete-btn" onClick={handleDeleteClick}>삭제</button>
                <button className="new-button" onClick={handleNewClick}>생성</button>
              </div>
            </div>

            <table className="menu-table">
              <thead>
                <tr>
                  <th>
                    <input 
                      type="checkbox" 
                      className="select-all"
                      checked={systemSelectedMenus.length === systemMenuData.length && systemMenuData.length > 0}
                      onChange={(e) => handleSelectAll(e, 'system')}
                    />
                  </th>
                  <th>메뉴명</th>
                  <th>URL</th>
                  <th>사용여부</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody>
                {systemMenuData.map(menu => (
                  <tr key={menu.id} className={systemSelectedMenus.includes(menu.id) ? 'selected' : ''}>
                    <td>
                      <input 
                        type="checkbox"
                        checked={systemSelectedMenus.includes(menu.id)}
                        onChange={() => handleRowSelect(menu.id, 'system')}
                      />
                    </td>
                    <td>{menu.name}</td>
                    <td>{menu.url}</td>
                    <td>
                      <label className="switch">
                        <input 
                          type="checkbox" 
                          checked={menu.isActive}
                          onChange={() => {}}
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

          {/* 워크스페이스 메뉴 관리 탭 */}
          <div id="workspace-menu" className={`tab-content ${activeTab === 'workspace-menu' ? 'active' : ''}`}>
            <div className="menu-title-header">
              <div className="menu-title-section">
                <h3 className="menu-subtitle">메뉴 관리</h3>
                <div className="workspace-selector">
                  <select>
                    <option>워크스페이스 목록</option>
                    <option>SK Telecom</option>
                    <option>Samsung Electronics</option>
                    <option>LG Electronics</option>
                    <option>Hyundai Motor</option>
                    <option>KT Corporation</option>
                    <option>POSCO</option>
                    <option>Naver Corporation</option>
                    <option>Kakao Corp</option>
                    <option>Coupang</option>
                    <option>Krafton</option>
                  </select>
                </div>
              </div>
              <div className="menu-action-buttons">
                <button className="delete-btn" onClick={handleDeleteClick}>삭제</button>
                <button className="new-button" onClick={handleNewClick}>생성</button>
              </div>
            </div>

            <table className="menu-table">
              <thead>
                <tr>
                  <th>
                    <input 
                      type="checkbox" 
                      className="select-all"
                      checked={workspaceSelectedMenus.length === workspaceMenuData.length && workspaceMenuData.length > 0}
                      onChange={(e) => handleSelectAll(e, 'workspace')}
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
                      <td colSpan="5" className={`section-title ${getCategoryClass(category)}`}>
                        {category}
                      </td>
                    </tr>
                    {menus.map(menu => (
                      <tr key={menu.id} className={workspaceSelectedMenus.includes(menu.id) ? 'selected' : ''}>
                        <td>
                          <input 
                            type="checkbox"
                            checked={workspaceSelectedMenus.includes(menu.id)}
                            onChange={() => handleRowSelect(menu.id, 'workspace')}
                          />
                        </td>
                        <td>{menu.name}</td>
                        <td>{menu.url}</td>
                        <td>
                          <label className="switch">
                            <input 
                              type="checkbox" 
                              checked={menu.isActive}
                              onChange={() => {}}
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
        </div>
      </div>

      {/* 새메뉴 생성 모달 */}
      {isNewMenuModalOpen && (
        <div className="modal-overlay" onClick={(e) => {
          if (e.target.className === 'modal-overlay') {
            setIsNewMenuModalOpen(false)
          }
        }}>
          <div className="modal-container" style={{ width: '600px', maxWidth: '90vw', minHeight: '500px' }}>
            <div className="modal-header">
              <div className="header-content">
                <div className="header-text">
                  <h3 style={{ fontSize: '18px', margin: 0 }}>
                    {currentMenuType === 'system' ? '시스템 메뉴 생성' : '워크스페이스 메뉴 생성'}
                  </h3>
                </div>
                <button className="btn-close" onClick={() => setIsNewMenuModalOpen(false)}>
                  <img src={closeIcon} alt="닫기" />
                </button>
              </div>
            </div>
            <div className="modal-content" style={{ padding: '32px' }}>
              <div className="form-row" style={{ marginBottom: '24px' }}>
                <div className="form-group" style={{ marginRight: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>메뉴명</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="메뉴명을 입력하세요"
                    style={{ width: '100%', padding: '12px' }}
                    value={formData.menuName}
                    onChange={(e) => setFormData({ ...formData, menuName: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row" style={{ marginBottom: '24px', display: currentMenuType === 'system' ? 'block' : 'none' }} id="order-section">
                <div className="form-group" style={{ marginRight: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>순서</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    placeholder="순서를 입력하세요"
                    style={{ width: '100%', padding: '12px' }}
                    value={formData.menuOrder}
                    onChange={(e) => setFormData({ ...formData, menuOrder: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row" style={{ marginBottom: '24px' }}>
                <div className="form-group full-width">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>링크 URL</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    style={{ width: '100%', padding: '12px' }}
                    placeholder="페이지 경로 또는 URL을 입력하세요 (예: /admin/workspace.html, https://example.com)"
                    value={formData.menuUrl}
                    onChange={(e) => setFormData({ ...formData, menuUrl: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row" style={{ marginBottom: '24px', display: currentMenuType === 'workspace' ? 'block' : 'none' }} id="group-section">
                <div className="form-group full-width">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>그룹 설정</label>
                  <div className="combo-select" style={{ width: '100%' }}>
                    <div>
                      <select 
                        id="groupSelect"
                        style={{ 
                          width: '100%', 
                          border: '1px solid #ddd', 
                          borderRadius: '6px', 
                          fontSize: '14px', 
                          backgroundColor: 'white' 
                        }}
                        value={formData.groupSelect}
                        onChange={(e) => setFormData({ ...formData, groupSelect: e.target.value })}
                      >
                        <option value="">그룹을 선택하세요</option>
                        <option value="workspace-setting">워크스페이스 설정</option>
                        <option value="feature-management">세부 기능 관리</option>
                        <option value="history-stats">이력/통계 관리</option>
                      </select>
                      <img src={selectArrowIcon} alt="선택 화살표" className="select-arrow" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-row" style={{ marginBottom: '24px' }}>
                <div className="form-group full-width">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>사용 여부</label>
                  <div className="status-radio-group">
                    <label className="radio-option">
                      <input 
                        type="radio" 
                        name="menuStatus" 
                        value="active" 
                        checked={formData.menuStatus === 'active'}
                        onChange={(e) => setFormData({ ...formData, menuStatus: e.target.value })}
                      />
                      <span className="radio-label active">사용</span>
                    </label>
                    <label className="radio-option">
                      <input 
                        type="radio" 
                        name="menuStatus" 
                        value="inactive"
                        checked={formData.menuStatus === 'inactive'}
                        onChange={(e) => setFormData({ ...formData, menuStatus: e.target.value })}
                      />
                      <span className="radio-label inactive">미사용</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer" style={{ padding: '24px 32px 32px 32px', display: 'flex', gap: '16px' }}>
              <button 
                className="btn-cancel" 
                onClick={() => setIsNewMenuModalOpen(false)}
                style={{ flex: 1, padding: '12px', fontSize: '16px' }}
              >
                취소
              </button>
              <button 
                className="btn-submit" 
                onClick={handleModalSave}
                style={{ flex: 1, padding: '12px', fontSize: '16px' }}
              >
                저장
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 메뉴 삭제 확인 모달 */}
      {isDeleteModalOpen && (
        <div 
          className="modal-overlay" 
          onClick={(e) => {
            if (e.target.className === 'modal-overlay') {
              setIsDeleteModalOpen(false)
            }
          }}
        >
          <div className="modal-container simple-confirm-modal">
            <div className="modal-content">
              <div className="simple-message">
                <h3>삭제하시겠습니까?</h3>
                <p>확인 후에는 되돌릴 수 없습니다.</p>
              </div>

              <div className="simple-buttons">
                <button className="btn-cancel" onClick={() => setIsDeleteModalOpen(false)}>취소</button>
                <button className="btn-confirm" onClick={handleDeleteConfirm}>확인</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default MenuSettingPage
