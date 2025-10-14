import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

const WorkspaceGroupSettingPage = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [selectedPermission, setSelectedPermission] = useState(null)
  const [selectedRowId, setSelectedRowId] = useState(null)
  const [newPermission, setNewPermission] = useState({
    permissionName: '',
    name: '',
    description: ''
  })

  // HTML과 동일한 권한 데이터
  const permissionData = [
    {
      id: 1,
      permissionType: 'meeting-admin',
      permission: '회의관리자',
      creator: '박영수',
      permissionName: '회의관리자',
      description: '회의록 및 템플릿 관리',
      createdDate: '2024-01-15 10:30:25',
      lastModified: '2024-03-20 14:45:18'
    },
    {
      id: 2,
      permissionType: 'logo-admin',
      permission: '로고관리자',
      creator: '김철수',
      permissionName: '로고관리자',
      description: '로고 이미지 관리',
      createdDate: '2024-02-08 09:15:42',
      lastModified: '2024-03-15 16:22:37'
    },
    {
      id: 3,
      permissionType: 'user-admin',
      permission: '사용자관리자',
      creator: '이민수',
      permissionName: '사용자관리자',
      description: '사용자 관리 및 접속 이력',
      createdDate: '2024-03-10 13:28:51',
      lastModified: '2024-04-15 11:33:29'
    },
    {
      id: 4,
      permissionType: 'stats-admin',
      permission: '통계관리자',
      creator: '최지영',
      permissionName: '통계관리자',
      description: '사용량 및 사용자별 통계',
      createdDate: '2024-04-12 15:41:07',
      lastModified: '2024-05-10 08:56:44'
    },
    {
      id: 5,
      permissionType: 'content-admin',
      permission: '컨텐츠관리자',
      creator: '정수현',
      permissionName: '컨텐츠관리자',
      description: '공지사항 및 사전 관리',
      createdDate: '2024-05-20 12:18:33',
      lastModified: '2024-06-15 17:25:16'
    }
  ]

  // HTML과 동일한 권한별 메뉴 구성
  const permissionMenus = {
    'meeting-admin': {
      title: '워크스페이스',
      menus: [
        { id: '기능 권한 관리', name: '기능 권한 관리', checked: false },
        { id: '메뉴 권한 관리', name: '메뉴 권한 관리', checked: false },
        { id: '사용자 관리', name: '사용자 관리', checked: false },
        { id: '로고 이미지 관리', name: '로고 이미지 관리', checked: false },
        { id: '회의 템플릿 관리', name: '회의 템플릿 관리', checked: true },
        { id: '프롬프트 관리', name: '프롬프트 관리', checked: false },
        { id: '동의서 관리', name: '동의서 관리', checked: false },
        { id: '캘린더 관리', name: '캘린더 관리', checked: true },
        { id: '사용자 접속 이력', name: '사용자 접속 이력', checked: false },
        { id: '다운로드 이력', name: '다운로드 이력', checked: false },
        { id: '사용자 동의 이력', name: '사용자 동의 이력', checked: false },
        { id: '설정변경 이력', name: '설정변경 이력', checked: false },
        { id: '회의록 관리', name: '회의록 관리', checked: true },
        { id: '사전 관리', name: '사전 관리', checked: false },
        { id: '공지사항 관리', name: '공지사항 관리', checked: false },
        { id: '사용량 통계', name: '사용량 통계', checked: false },
        { id: '사용자별 통계', name: '사용자별 통계', checked: false }
      ]
    },
    'logo-admin': {
      title: '워크스페이스',
      menus: [
        { id: '기능 권한 관리', name: '기능 권한 관리', checked: false },
        { id: '메뉴 권한 관리', name: '메뉴 권한 관리', checked: false },
        { id: '사용자 관리', name: '사용자 관리', checked: false },
        { id: '로고 이미지 관리', name: '로고 이미지 관리', checked: true },
        { id: '회의 템플릿 관리', name: '회의 템플릿 관리', checked: false },
        { id: '프롬프트 관리', name: '프롬프트 관리', checked: false },
        { id: '동의서 관리', name: '동의서 관리', checked: false },
        { id: '캘린더 관리', name: '캘린더 관리', checked: false },
        { id: '사용자 접속 이력', name: '사용자 접속 이력', checked: false },
        { id: '다운로드 이력', name: '다운로드 이력', checked: false },
        { id: '사용자 동의 이력', name: '사용자 동의 이력', checked: false },
        { id: '설정변경 이력', name: '설정변경 이력', checked: false },
        { id: '회의록 관리', name: '회의록 관리', checked: false },
        { id: '사전 관리', name: '사전 관리', checked: false },
        { id: '공지사항 관리', name: '공지사항 관리', checked: false },
        { id: '사용량 통계', name: '사용량 통계', checked: false },
        { id: '사용자별 통계', name: '사용자별 통계', checked: false }
      ]
    },
    'user-admin': {
      title: '워크스페이스',
      menus: [
        { id: '기능 권한 관리', name: '기능 권한 관리', checked: false },
        { id: '메뉴 권한 관리', name: '메뉴 권한 관리', checked: false },
        { id: '사용자 관리', name: '사용자 관리', checked: true },
        { id: '로고 이미지 관리', name: '로고 이미지 관리', checked: false },
        { id: '회의 템플릿 관리', name: '회의 템플릿 관리', checked: false },
        { id: '프롬프트 관리', name: '프롬프트 관리', checked: false },
        { id: '동의서 관리', name: '동의서 관리', checked: false },
        { id: '캘린더 관리', name: '캘린더 관리', checked: false },
        { id: '사용자 접속 이력', name: '사용자 접속 이력', checked: true },
        { id: '다운로드 이력', name: '다운로드 이력', checked: true },
        { id: '사용자 동의 이력', name: '사용자 동의 이력', checked: true },
        { id: '설정변경 이력', name: '설정변경 이력', checked: true },
        { id: '회의록 관리', name: '회의록 관리', checked: false },
        { id: '사전 관리', name: '사전 관리', checked: false },
        { id: '공지사항 관리', name: '공지사항 관리', checked: false },
        { id: '사용량 통계', name: '사용량 통계', checked: false },
        { id: '사용자별 통계', name: '사용자별 통계', checked: false }
      ]
    },
    'stats-admin': {
      title: '워크스페이스',
      menus: [
        { id: '기능 권한 관리', name: '기능 권한 관리', checked: false },
        { id: '메뉴 권한 관리', name: '메뉴 권한 관리', checked: false },
        { id: '사용자 관리', name: '사용자 관리', checked: false },
        { id: '로고 이미지 관리', name: '로고 이미지 관리', checked: false },
        { id: '회의 템플릿 관리', name: '회의 템플릿 관리', checked: false },
        { id: '프롬프트 관리', name: '프롬프트 관리', checked: false },
        { id: '동의서 관리', name: '동의서 관리', checked: false },
        { id: '캘린더 관리', name: '캘린더 관리', checked: false },
        { id: '사용자 접속 이력', name: '사용자 접속 이력', checked: false },
        { id: '다운로드 이력', name: '다운로드 이력', checked: false },
        { id: '사용자 동의 이력', name: '사용자 동의 이력', checked: false },
        { id: '설정변경 이력', name: '설정변경 이력', checked: false },
        { id: '회의록 관리', name: '회의록 관리', checked: false },
        { id: '사전 관리', name: '사전 관리', checked: false },
        { id: '공지사항 관리', name: '공지사항 관리', checked: false },
        { id: '사용량 통계', name: '사용량 통계', checked: true },
        { id: '사용자별 통계', name: '사용자별 통계', checked: true }
      ]
    },
    'content-admin': {
      title: '워크스페이스',
      menus: [
        { id: '기능 권한 관리', name: '기능 권한 관리', checked: false },
        { id: '메뉴 권한 관리', name: '메뉴 권한 관리', checked: false },
        { id: '사용자 관리', name: '사용자 관리', checked: false },
        { id: '로고 이미지 관리', name: '로고 이미지 관리', checked: false },
        { id: '회의 템플릿 관리', name: '회의 템플릿 관리', checked: false },
        { id: '프롬프트 관리', name: '프롬프트 관리', checked: true },
        { id: '동의서 관리', name: '동의서 관리', checked: false },
        { id: '캘린더 관리', name: '캘린더 관리', checked: false },
        { id: '사용자 접속 이력', name: '사용자 접속 이력', checked: false },
        { id: '다운로드 이력', name: '다운로드 이력', checked: false },
        { id: '사용자 동의 이력', name: '사용자 동의 이력', checked: false },
        { id: '설정변경 이력', name: '설정변경 이력', checked: false },
        { id: '회의록 관리', name: '회의록 관리', checked: false },
        { id: '사전 관리', name: '사전 관리', checked: true },
        { id: '공지사항 관리', name: '공지사항 관리', checked: true },
        { id: '사용량 통계', name: '사용량 통계', checked: false },
        { id: '사용자별 통계', name: '사용자별 통계', checked: false }
      ]
    }
  }

  // 전체 선택 핸들러
  const handleSelectAll = (e) => {
    const checked = e.target.checked
    setSelectAll(checked)
    if (checked) {
      setSelectedRows(permissionData.map(item => item.id))
    } else {
      setSelectedRows([])
    }
  }

  // 개별 체크박스 선택 핸들러
  const handleRowCheckbox = (id) => {
    const newSelectedRows = selectedRows.includes(id) 
      ? selectedRows.filter(rowId => rowId !== id)
      : [...selectedRows, id]
    
    setSelectedRows(newSelectedRows)
    setSelectAll(newSelectedRows.length === permissionData.length)
  }

  // 테이블 행 클릭 핸들러 (체크박스 제외)
  const handleRowClick = (e, item) => {
    // 체크박스 클릭은 제외
    if (e.target.type === 'checkbox') return

    // 기존 선택된 행 해제 후 현재 행 선택
    setSelectedRowId(item.id)
    setSelectedPermission(item.permissionType)
  }

  // 권한 미리보기 트리 렌더링
  const renderPermissionTree = () => {
    if (!selectedPermission) {
      return (
        <div className="no-data-area" id="noDataArea">
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
    if (!menuData) return null

    return (
      <div className="tree-menu" id="treeMenu">
        <div className="tree-item">
          <input type="checkbox" id="워크스페이스" className="workspace-select-all" />
          <label htmlFor="워크스페이스">{menuData.title}</label>
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

  // 모달 핸들러
  const handleCreateClick = () => {
    setIsCreateModalOpen(true)
  }

  const handleModalClose = () => {
    setIsCreateModalOpen(false)
    setNewPermission({
      permissionName: '',
      name: '',
      description: ''
    })
  }

  const handleCreatePermission = () => {
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

  // 초기화 버튼 핸들러
  const handleReset = () => {
    alert('권한이 초기화되었습니다.')
  }

  // 저장 버튼 핸들러
  const handleSave = () => {
    if (selectedRowId) {
      const selectedItem = permissionData.find(item => item.id === selectedRowId)
      alert(`${selectedItem.permissionName}의 권한이 저장되었습니다.`)
    } else {
      alert('권한을 수정할 사용자를 선택해주세요.')
    }
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
                {/* 권한정보 헤더와 버튼들 */}
                <div className="group-info-header">
                  <div className="group-info-title-section">
                    <h3 className="group-info-subtitle">권한 정보</h3>
                    <span className="group-total-count">총 {permissionData.length}개</span>
                  </div>
                  <div className="group-info-buttons">
                    <button className="btn-form-delete">삭제</button>
                    <button className="btn-form-edit">수정</button>
                    <button className="group-setting-btn-add-group" id="createPermissionBtn" onClick={handleCreateClick}>생성</button>
                  </div>
                </div>

                {/* 권한 정보 테이블 */}
                <div className="group-setting-table-container" id="tableContainer">
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
                        <th>권한</th>
                        <th>생성자</th>
                        <th>권한명</th>
                        <th>설명</th>
                        <th>생성시간</th>
                        <th>최종수정시간</th>
                      </tr>
                    </thead>
                    <tbody>
                      {permissionData.map((item) => (
                        <tr 
                          key={item.id}
                          className={selectedRowId === item.id ? 'selected' : ''}
                          onClick={(e) => handleRowClick(e, item)}
                          style={{ cursor: 'pointer' }}
                          data-permission={item.permissionType}
                        >
                          <td>
                            <input 
                              type="checkbox"
                              checked={selectedRows.includes(item.id)}
                              onChange={() => handleRowCheckbox(item.id)}
                            />
                          </td>
                          <td>{item.permission}</td>
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
              <div className="group-setting-tree-panel" id="treePanel">
                <div className="tree-header">
                  <h4>권한 미리보기</h4>
                </div>
                {renderPermissionTree()}
              </div>
            </div>
          </div>

          {/* 권한 미리보기 하단 버튼들 (외곽선 밖) */}
          <div className="preview-actions-external">
            <button className="btn-reset" onClick={handleReset}>초기화</button>
            <button className="btn-save" onClick={handleSave}>저장</button>
          </div>
        </div>
      </div>

      {/* 권한 생성 모달 */}
      {isCreateModalOpen && (
        <div className="modal-overlay" id="permissionModal">
          <div className="modal-container permission-modal">
            <div className="modal-header">
              <h2>권한 생성</h2>
            </div>
            <div className="modal-content">
              <div className="form-group">
                <label htmlFor="permissionName">권한명</label>
                <input 
                  type="text" 
                  id="permissionName" 
                  className="form-input" 
                  placeholder="권한명을 입력하세요"
                  value={newPermission.permissionName}
                  onChange={(e) => setNewPermission(prev => ({ ...prev, permissionName: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="creatorName">생성자</label>
                <input 
                  type="text" 
                  id="creatorName" 
                  className="form-input" 
                  placeholder="생성자를 입력하세요"
                  value={newPermission.name}
                  onChange={(e) => setNewPermission(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="permissionDescription">설명</label>
                <input 
                  type="text" 
                  id="permissionDescription" 
                  className="form-input" 
                  placeholder="권한 설명을 입력하세요"
                  value={newPermission.description}
                  onChange={(e) => setNewPermission(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>
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

export default WorkspaceGroupSettingPage