import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

const GroupSettingPage = () => {
  const [selectedWorkspace, setSelectedWorkspace] = useState('all')
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [selectedPermission, setSelectedPermission] = useState(null)
  const [selectedRowId, setSelectedRowId] = useState(null)
  const [newPermission, setNewPermission] = useState({
    workspace: 'SK Telecom',
    creator: '',
    permissionName: '',
    description: ''
  })

  // 권한 데이터 - HTML 원본과 완전히 일치
  const permissionData = [
    {
      id: 1,
      workspace: { name: 'SK Telecom', icon: 'S', color: 'color-teal' },
      creator: '김민수',
      permissionName: '전체관리자',
      description: '최고관리자 - 모든 시스템 권한',
      createdDate: '2024-01-15 10:30:25',
      lastModified: '2024-03-20 14:45:18',
      workspaceValue: 'sk-telecom'
    },
    {
      id: 2,
      workspace: { name: 'SK Hynix', icon: 'S', color: 'color-indigo' },
      creator: '이영희',
      permissionName: '워크스페이스관리자',
      description: '워크스페이스 전체 관리',
      createdDate: '2024-02-08 09:15:42',
      lastModified: '2024-03-15 16:22:37',
      workspaceValue: 'sk-hynix'
    },
    {
      id: 3,
      workspace: { name: 'SK C&C', icon: 'S', color: 'color-rose' },
      creator: '박철수',
      permissionName: '시스템 메뉴관리자',
      description: '메뉴 생성/권한 관리',
      createdDate: '2024-01-25 13:28:51',
      lastModified: '2024-03-18 11:33:29',
      workspaceValue: 'sk-cc'
    },
    {
      id: 4,
      workspace: { name: 'SK Innovation', icon: 'S', color: 'color-amber' },
      creator: '정수연',
      permissionName: '사용자관리자',
      description: '사용자 등록/관리',
      createdDate: '2024-03-05 14:22:15',
      lastModified: '2024-03-22 09:17:43',
      workspaceValue: 'sk-innovation'
    }
  ]

  // 워크스페이스 목록
  const workspaceOptions = [
    { value: 'all', label: '전체 워크스페이스' },
    { value: 'sk-telecom', label: 'SK Telecom' },
    { value: 'sk-hynix', label: 'SK Hynix' },
    { value: 'sk-on', label: 'SK On' },
    { value: 'sk-cc', label: 'SK C&C' },
    { value: 'sk-innovation', label: 'SK Innovation' },
    { value: 'sk-networks', label: 'SK Networks' },
    { value: 'sk-materials', label: 'SK Materials' },
    { value: 'sk-biopharm', label: 'SK Biopharm' },
    { value: 'sk-es', label: 'SK E&S' },
    { value: 'sk-shieldus', label: 'SK Shieldus' }
  ]

  // 권한별 메뉴 구성 데이터 - HTML JavaScript와 동일
  const permissionMenus = {
    1: { // 전체관리자
      title: '시스템 메뉴',
      menus: [
        { id: 'workspace-management', name: '워크스페이스 관리', checked: true },
        { id: 'menu-management', name: '전체 메뉴 관리', checked: true },
        { id: 'user-management', name: '사용자 관리', checked: true },
        { id: 'permission-management', name: '메뉴 권한 관리', checked: true },
        { id: 'system-settings', name: '설정변경 이력', checked: true },
        { id: 'system-stats', name: '전체 시스템 사용 통계', checked: true },
        { id: 'user-stats', name: '사용자별 사용 통계', checked: true }
      ]
    },
    2: { // 워크스페이스관리자
      title: '워크스페이스',
      menus: [
        { id: 'fo-policy', name: '기능 권한 관리', checked: true },
        { id: 'content-retention', name: '컨텐츠 보존 관리', checked: true },
        { id: 'workspace-permission', name: '메뉴 권한 관리', checked: true },
        { id: 'workspace-user', name: '사용자 관리', checked: true },
        { id: 'logo-management', name: '로고 관리', checked: true },
        { id: 'template-management', name: '템플릿 관리', checked: false },
        { id: 'prompt-management', name: '프롬프트 관리', checked: false }
      ]
    },
    3: { // 시스템 메뉴관리자
      title: '시스템 메뉴',
      menus: [
        { id: 'workspace-management', name: '워크스페이스 관리', checked: false },
        { id: 'menu-management', name: '전체 메뉴 관리', checked: true },
        { id: 'user-management', name: '사용자 관리', checked: false },
        { id: 'permission-management', name: '메뉴 권한 관리', checked: true },
        { id: 'system-settings', name: '설정변경 이력', checked: false },
        { id: 'system-stats', name: '전체 시스템 사용 통계', checked: false },
        { id: 'user-stats', name: '사용자별 사용 통계', checked: false }
      ]
    },
    4: { // 사용자관리자
      title: '워크스페이스',
      menus: [
        { id: 'fo-policy', name: '기능 권한 관리', checked: false },
        { id: 'content-retention', name: '컨텐츠 보존 관리', checked: false },
        { id: 'workspace-permission', name: '메뉴 권한 관리', checked: false },
        { id: 'workspace-user', name: '사용자 관리', checked: true },
        { id: 'logo-management', name: '로고 관리', checked: false },
        { id: 'login-history', name: '사용자 접속 이력', checked: true },
        { id: 'download-history', name: '다운로드 이력', checked: true }
      ]
    }
  }

  // 필터링된 데이터
  const filteredData = selectedWorkspace === 'all' 
    ? permissionData 
    : permissionData.filter(item => item.workspaceValue === selectedWorkspace)

  // 워크스페이스 변경 핸들러
  const handleWorkspaceChange = (e) => {
    setSelectedWorkspace(e.target.value)
    setSelectAll(false)
    setSelectedRows([])
    setSelectedPermission(null)
    setSelectedRowId(null)
  }

  // 전체 선택 핸들러
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked
    setSelectAll(isChecked)
    if (isChecked) {
      setSelectedRows(filteredData.map(item => item.id))
    } else {
      setSelectedRows([])
    }
  }

  // 개별 체크박스 핸들러
  const handleRowCheckbox = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

  // 행 클릭 핸들러
  const handleRowClick = (item, e) => {
    if (e.target.type === 'checkbox') return

    setSelectedRowId(item.id)
    setSelectedPermission(item.id)
  }

  // 권한 생성 버튼
  const handleCreateClick = () => {
    setIsCreateModalOpen(true)
  }

  // 모달 닫기
  const handleModalClose = () => {
    setIsCreateModalOpen(false)
    setNewPermission({
      workspace: 'SK Telecom',
      creator: '',
      permissionName: '',
      description: ''
    })
  }

  // 권한 생성
  const handleCreatePermission = () => {
    if (!newPermission.creator.trim()) {
      alert('생성자를 입력해주세요.')
      return
    }
    if (!newPermission.permissionName.trim()) {
      alert('권한명을 입력해주세요.')
      return
    }
    if (!newPermission.description.trim()) {
      alert('설명을 입력해주세요.')
      return
    }
    
    alert('권한이 생성되었습니다.')
    handleModalClose()
  }

  // 초기화 버튼
  const handleReset = () => {
    alert('권한이 초기화되었습니다.')
  }

  // 저장 버튼
  const handleSave = () => {
    if (selectedRowId) {
      alert('권한이 저장되었습니다.')
    } else {
      alert('저장할 권한을 선택해주세요.')
    }
  }

  // 권한 미리보기 트리 렌더링
  const renderPermissionTree = () => {
    if (!selectedPermission || !permissionMenus[selectedPermission]) {
      return (
        <div className="no-data-area">
          <div className="no-data-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 16H44C46.2091 16 48 17.7909 48 20V44C48 46.2091 46.2091 48 44 48H20C17.7909 48 16 46.2091 16 44V20C16 17.7909 17.7909 16 20 16Z"
                fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="2" />
              <path d="M28 28H36M28 32H36M28 36H32" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="no-data-text">권한 항목 미리보기가 가능합니다.</p>
        </div>
      )
    }

    const menuData = permissionMenus[selectedPermission]
    
    return (
      <div className="tree-menu">
        <div className="tree-item">
          <input type="checkbox" id={menuData.title} />
          <label htmlFor={menuData.title}>{menuData.title}</label>
          <div className="tree-children">
            {menuData.menus.map((menu, index) => (
              <div className="tree-item" key={index}>
                <input type="checkbox" id={menu.id} defaultChecked={menu.checked} />
                <label htmlFor={menu.id}>{menu.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">메뉴 권한 관리</h1>
        </div>
        <div className="content-body">
          <div className="group-setting-container">
            <div className="group-setting-layout tree-visible">
              <div className="group-setting-left-panel">
                {/* 워크스페이스 셀렉터 */}
                <div className="workspace-selector-section">
                  <div className="combo-select">
                    <select 
                      className="workspace-selector" 
                      value={selectedWorkspace}
                      onChange={handleWorkspaceChange}
                    >
                      {workspaceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <img src="/asset/select-arrow.svg" alt="" />
                  </div>
                </div>

                {/* 권한정보 헤더와 버튼들 */}
                <div className="group-info-header">
                  <div className="group-info-title-section">
                    <h3 className="group-info-subtitle">생성된 권한</h3>
                    <span className="group-total-count">총 {filteredData.length}개</span>
                  </div>
                  <div className="group-info-buttons">
                    <button className="btn-form-delete">삭제</button>
                    <button className="btn-form-edit">수정</button>
                    <button className="group-setting-btn-add-group" onClick={handleCreateClick}>
                      생성
                    </button>
                  </div>
                </div>

                {/* 권한 정보 테이블 */}
                <div className="group-setting-table-container">
                  <table className="group-setting-table">
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
                        <th>워크스페이스</th>
                        <th>권한 생성자</th>
                        <th>권한명</th>
                        <th>설명</th>
                        <th>생성시간</th>
                        <th>최종수정시간</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item) => (
                        <tr 
                          key={item.id}
                          className={selectedRowId === item.id ? 'selected' : ''}
                          onClick={(e) => handleRowClick(item, e)}
                        >
                          <td>
                            <input 
                              type="checkbox"
                              checked={selectedRows.includes(item.id)}
                              onChange={() => handleRowCheckbox(item.id)}
                            />
                          </td>
                          <td>
                            <div className="workspace-name">
                              <div className={`workspace-icon ${item.workspace.color}`}>
                                {item.workspace.icon}
                              </div>
                              <span>{item.workspace.name}</span>
                            </div>
                          </td>
                          <td>{item.creator}</td>
                          <td>{item.permissionName}</td>
                          <td>{item.description}</td>
                          <td>{item.createdDate}</td>
                          <td>{item.lastModified}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 권한 미리보기 패널 */}
              <div className="group-setting-tree-panel">
                <div className="tree-header">
                  <h4>권한 미리보기</h4>
                </div>
                {renderPermissionTree()}
              </div>
            </div>
          </div>

          {/* 권한 미리보기 하단 버튼들 */}
          <div className="preview-actions-external">
            <button className="btn-reset" onClick={handleReset}>초기화</button>
            <button className="btn-save" onClick={handleSave}>저장</button>
          </div>
        </div>
      </div>

      {/* 권한 생성 모달 */}
      {isCreateModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container permission-modal">
            <div className="modal-header">
              <div className="header-content">
                <h3 className="header-text">권한 생성</h3>
                <button className="btn-close" onClick={handleModalClose}>×</button>
              </div>
            </div>
            <div className="modal-body">
              <table className="group-setting-form-table">
                <tbody>
                  <tr>
                    <td className="form-label">워크스페이스</td>
                    <td className="form-input-cell">
                      <select 
                        className="form-input-field"
                        value={newPermission.workspace}
                        onChange={(e) => setNewPermission({...newPermission, workspace: e.target.value})}
                      >
                        <option>SK Telecom</option>
                        <option>SK Hynix</option>
                        <option>SK C&C</option>
                        <option>SK Innovation</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="form-label">생성자</td>
                    <td className="form-input-cell">
                      <input 
                        type="text" 
                        className="form-input-field"
                        value={newPermission.creator}
                        onChange={(e) => setNewPermission({...newPermission, creator: e.target.value})}
                        placeholder="생성자명을 입력하세요"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="form-label">권한명</td>
                    <td className="form-input-cell">
                      <input 
                        type="text" 
                        className="form-input-field"
                        value={newPermission.permissionName}
                        onChange={(e) => setNewPermission({...newPermission, permissionName: e.target.value})}
                        placeholder="권한명을 입력하세요"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="form-label">설명</td>
                    <td className="form-input-cell">
                      <input 
                        type="text" 
                        className="form-input-field"
                        value={newPermission.description}
                        onChange={(e) => setNewPermission({...newPermission, description: e.target.value})}
                        placeholder="권한 설명을 입력하세요"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={handleModalClose}>취소</button>
              <button className="btn-submit" onClick={handleCreatePermission}>생성</button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default GroupSettingPage
