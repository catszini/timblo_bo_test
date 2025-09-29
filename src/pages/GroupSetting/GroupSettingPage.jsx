import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

const GroupSettingPage = () => {
  const [selectedWorkspace, setSelectedWorkspace] = useState('all')
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [selectedPermission, setSelectedPermission] = useState(null)
  const [newPermission, setNewPermission] = useState({
    workspace: 'SK Telecom',
    name: '',
    description: ''
  })

  // 권한 데이터 (HTML과 완전히 일치)
  const permissionData = [
    {
      id: 1,
      workspace: { name: 'SK Telecom', icon: 'S', color: 'color-teal' },
      creator: '김민수',
      permissionName: '전체관리자',
      description: '최고관리자 - 모든 시스템 권한',
      createdDate: '2024-01-15',
      lastModified: '2024-03-20',
      workspaceValue: 'sk-telecom'
    },
    {
      id: 2,
      workspace: { name: 'SK Hynix', icon: 'S', color: 'color-indigo' },
      creator: '이영희',
      permissionName: '워크스페이스관리자',
      description: '워크스페이스 전체 관리',
      createdDate: '2024-02-08',
      lastModified: '2024-03-15',
      workspaceValue: 'sk-hynix'
    },
    {
      id: 3,
      workspace: { name: 'SK C&C', icon: 'S', color: 'color-rose' },
      creator: '박철수',
      permissionName: '시스템 메뉴관리자',
      description: '메뉴 생성/권한 관리',
      createdDate: '2024-01-25',
      lastModified: '2024-03-18',
      workspaceValue: 'sk-cc'
    },
    {
      id: 4,
      workspace: { name: 'SK Innovation', icon: 'S', color: 'color-amber' },
      creator: '정수진',
      permissionName: '통계관리자',
      description: '사용량/통계 분석 관리',
      createdDate: '2024-03-05',
      lastModified: '2024-03-25',
      workspaceValue: 'sk-innovation'
    }
  ]

  // 워크스페이스 필터링된 데이터
  const filteredData = selectedWorkspace === 'all' 
    ? permissionData 
    : permissionData.filter(item => item.workspaceValue === selectedWorkspace)

  // 워크스페이스 필터 핸들러
  const handleWorkspaceChange = (e) => {
    setSelectedWorkspace(e.target.value)
    // 필터 변경 시 선택 초기화
    setSelectAll(false)
    setSelectedRows([])
    setSelectedPermission(null)
  }

  // 전체 선택 핸들러
  const handleSelectAll = (e) => {
    const checked = e.target.checked
    setSelectAll(checked)
    if (checked) {
      setSelectedRows(filteredData.map(item => item.id))
    } else {
      setSelectedRows([])
      setSelectedPermission(null)
    }
  }

  // 개별 행 선택 핸들러
  const handleRowSelect = (id, permissionName) => {
    const newSelectedRows = selectedRows.includes(id) 
      ? selectedRows.filter(rowId => rowId !== id)
      : [...selectedRows, id]
    
    setSelectedRows(newSelectedRows)
    setSelectAll(newSelectedRows.length === filteredData.length)

    // 단일 선택 시 권한 미리보기 설정
    if (newSelectedRows.length === 1) {
      setSelectedPermission(permissionName)
    } else {
      setSelectedPermission(null)
    }
  }

  // 권한 미리보기 트리 렌더링
  const renderPermissionTree = () => {
    if (!selectedPermission) {
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

    return (
      <div className="tree-menu">
        {/* 전체 시스템 관리 */}
        <div className="tree-item">
          <input type="checkbox" id="전체시스템관리" defaultChecked />
          <label htmlFor="전체시스템관리">전체 시스템 관리</label>
          <div className="tree-children">
            <div className="tree-item">
              <input type="checkbox" id="워크스페이스관리" defaultChecked />
              <label htmlFor="워크스페이스관리">워크스페이스 관리</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="전체메뉴관리" defaultChecked />
              <label htmlFor="전체메뉴관리">전체 메뉴 관리</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="시스템사용자관리" defaultChecked />
              <label htmlFor="시스템사용자관리">사용자 관리</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="시스템메뉴권한관리" defaultChecked />
              <label htmlFor="시스템메뉴권한관리">메뉴 권한 관리</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="시스템설정변경이력" defaultChecked />
              <label htmlFor="시스템설정변경이력">설정변경 이력</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="전체시스템사용통계" defaultChecked />
              <label htmlFor="전체시스템사용통계">전체 시스템 사용 통계</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="시스템사용자별통계" defaultChecked />
              <label htmlFor="시스템사용자별통계">사용자별 사용 통계</label>
            </div>
          </div>
        </div>

        {/* 워크스페이스 설정 */}
        <div className="tree-item">
          <input type="checkbox" id="워크스페이스설정" defaultChecked />
          <label htmlFor="워크스페이스설정">워크스페이스 설정</label>
          <div className="tree-children">
            <div className="tree-item">
              <input type="checkbox" id="FO기능정책관리" defaultChecked />
              <label htmlFor="FO기능정책관리">FO기능정책관리</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="컨텐츠보존관리" defaultChecked />
              <label htmlFor="컨텐츠보존관리">컨텐츠 보존 관리</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="워크스페이스메뉴권한관리" defaultChecked />
              <label htmlFor="워크스페이스메뉴권한관리">메뉴 권한 관리</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="워크스페이스사용자관리" defaultChecked />
              <label htmlFor="워크스페이스사용자관리">사용자 관리</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="로고관리" defaultChecked />
              <label htmlFor="로고관리">로고 관리</label>
            </div>
          </div>
        </div>

        {/* 세부 기능 관리 */}
        <div className="tree-item">
          <input type="checkbox" id="세부기능관리" defaultChecked />
          <label htmlFor="세부기능관리">세부 기능 관리</label>
          <div className="tree-children">
            <div className="tree-item">
              <input type="checkbox" id="템플릿관리" defaultChecked />
              <label htmlFor="템플릿관리">템플릿 관리 (회의록, 공통 템플릿)</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="프롬프트관리" defaultChecked />
              <label htmlFor="프롬프트관리">프롬프트 관리</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="동의서관리" defaultChecked />
              <label htmlFor="동의서관리">동의서 관리</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="캘린더관리설정" defaultChecked />
              <label htmlFor="캘린더관리설정">캘린더 관리/설정</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="사전관리" defaultChecked />
              <label htmlFor="사전관리">사전 관리</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="공지사항관리" defaultChecked />
              <label htmlFor="공지사항관리">공지사항 관리</label>
            </div>
          </div>
        </div>

        {/* 이력/통계 관리 */}
        <div className="tree-item">
          <input type="checkbox" id="이력통계관리" defaultChecked />
          <label htmlFor="이력통계관리">이력/통계 관리</label>
          <div className="tree-children">
            <div className="tree-item">
              <input type="checkbox" id="사용자접속이력" defaultChecked />
              <label htmlFor="사용자접속이력">사용자 접속 이력</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="다운로드이력" defaultChecked />
              <label htmlFor="다운로드이력">다운로드 이력</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="사용자동의이력" defaultChecked />
              <label htmlFor="사용자동의이력">사용자 동의 이력</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="설정변경이력" defaultChecked />
              <label htmlFor="설정변경이력">설정 변경 이력</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="회의록이력" defaultChecked />
              <label htmlFor="회의록이력">회의록 이력</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="워크스페이스사용통계" defaultChecked />
              <label htmlFor="워크스페이스사용통계">워크스페이스 사용 통계</label>
            </div>
            <div className="tree-item">
              <input type="checkbox" id="사용자별사용통계" defaultChecked />
              <label htmlFor="사용자별사용통계">사용자별 사용 통계</label>
            </div>
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
      workspace: 'SK Telecom',
      name: '',
      description: ''
    })
  }

  const handleCreatePermission = () => {
    console.log('새 권한 생성:', newPermission)
    handleModalClose()
  }

  return (
    <Layout className="page-group-setting">
      <div className="content user-page group-setting-page">
        <div className="content-header">
          <h1 className="breadcrumb">메뉴 권한 관리</h1>
        </div>
        <div className="content-body">
          <div className="group-setting-container">
            <div className="group-setting-layout tree-visible">
              <div className="group-setting-left-panel">
                {/* 워크스페이스 목록 셀렉트 박스 */}
                <div className="workspace-selector-section">
                  <div className="combo-select">
                    <select 
                      id="workspaceSelect" 
                      className="workspace-selector"
                      value={selectedWorkspace}
                      onChange={handleWorkspaceChange}
                    >
                      <option value="all">전체 워크스페이스</option>
                      <option value="sk-telecom">SK Telecom</option>
                      <option value="sk-hynix">SK Hynix</option>
                      <option value="sk-on">SK On</option>
                      <option value="sk-cc">SK C&C</option>
                      <option value="sk-innovation">SK Innovation</option>
                      <option value="sk-networks">SK Networks</option>
                      <option value="sk-materials">SK Materials</option>
                      <option value="sk-biopharm">SK Biopharm</option>
                      <option value="sk-es">SK E&S</option>
                      <option value="sk-shieldus">SK Shieldus</option>
                    </select>
                    <img src="../asset/select-arrow.svg" alt="" />
                  </div>
                </div>

                {/* 권한정보 헤더와 버튼들 */}
                <div className="group-info-header">
                  <div className="group-info-title-section">
                    <h3 className="group-info-subtitle">생성된 권한</h3>
                    <span className="group-total-count">총 {filteredData.length}개</span>
                  </div>
                  <div className="group-info-buttons">
                    <button 
                      className="btn-form-delete"
                      style={{
                        padding: '8px 16px',
                        fontSize: '14px',
                        background: 'transparent',
                        color: '#DC2626',
                        border: '1px solid #DC2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        marginRight: '8px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fef2f2';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                      }}
                    >
                      삭제
                    </button>
                    <button 
                      className="btn-form-edit"
                      style={{
                        padding: '8px 16px',
                        fontSize: '14px',
                        background: 'transparent',
                        color: '#6B7280',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        marginRight: '8px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F9FAFB';
                        e.target.style.borderColor = '#9CA3AF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#D1D5DB';
                      }}
                    >
                      수정
                    </button>
                    <button 
                      className="group-setting-btn-add-group"
                      onClick={handleCreateClick}
                      style={{
                        padding: '8px 16px',
                        fontSize: '14px',
                        background: '#3B82F6',
                        color: 'white',
                        border: '1px solid #3B82F6',
                        borderRadius: '6px',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#2563EB';
                        e.target.style.borderColor = '#2563EB';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#3B82F6';
                        e.target.style.borderColor = '#3B82F6';
                      }}
                    >
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
                        <th>생성일</th>
                        <th>최종수정일</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <input 
                              type="checkbox"
                              checked={selectedRows.includes(item.id)}
                              onChange={() => handleRowSelect(item.id, item.permissionName)}
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
        </div>
      </div>

      {/* 권한 생성 모달 */}
      {isCreateModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3>권한 생성</h3>
              <button 
                className="modal-close"
                onClick={handleModalClose}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="workspaceName">워크스페이스</label>
                <div className="combo-select">
                  <select 
                    id="workspaceName" 
                    className="form-select"
                    value={newPermission.workspace}
                    onChange={(e) => setNewPermission(prev => ({ ...prev, workspace: e.target.value }))}
                  >
                    <option>SK Telecom</option>
                    <option>SK Hynix</option>
                    <option>KT</option>
                    <option>LG U+</option>
                    <option>Timbel_Mk</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="permissionName">권한명</label>
                <input 
                  type="text" 
                  id="permissionName" 
                  className="form-input" 
                  placeholder="권한명을 입력하세요"
                  value={newPermission.name}
                  onChange={(e) => setNewPermission(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="permissionType">권한 설명</label>
                <input 
                  type="text" 
                  id="permissionType" 
                  className="form-input" 
                  placeholder="권한 설명을 입력하세요"
                  value={newPermission.description}
                  onChange={(e) => setNewPermission(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn-cancel"
                onClick={handleModalClose}
                style={{
                  padding: '12px 24px',
                  fontSize: '14px',
                  background: 'transparent',
                  color: '#6B7280',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  marginRight: '12px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#F9FAFB';
                  e.target.style.borderColor = '#9CA3AF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = '#D1D5DB';
                }}
              >
                취소
              </button>
              <button 
                className="btn-submit"
                onClick={handleCreatePermission}
                style={{
                  padding: '12px 24px',
                  fontSize: '14px',
                  background: '#3B82F6',
                  color: 'white',
                  border: '1px solid #3B82F6',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#2563EB';
                  e.target.style.borderColor = '#2563EB';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#3B82F6';
                  e.target.style.borderColor = '#3B82F6';
                }}
              >
                생성
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default GroupSettingPage