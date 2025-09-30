import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

const WorkspacePage = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [newWorkspace, setNewWorkspace] = useState({
    name: '',
    domain: '',
    description: ''
  })

  // 워크스페이스 데이터 (HTML과 완전히 일치)
  const workspaceData = [
    {
      id: 1,
      workspace: { name: 'SK Telecom', icon: 'S', color: 'color-teal' },
      domain: 'www.sktelecom.ai',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 1, admin: 1, member: 0 },
      createdDate: '2025-09-01 14:30:15'
    },
    {
      id: 2,
      workspace: { name: 'SK Hynix', icon: 'S', color: 'color-indigo' },
      domain: 'www.skhynix.com',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 8, admin: 1, member: 5 },
      createdDate: '2025-08-15 09:22:43'
    },
    {
      id: 3,
      workspace: { name: 'SK On', icon: 'S', color: 'color-rose' },
      domain: 'www.sk-on.com',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 3, admin: 0, member: 2 },
      createdDate: '2025-07-20 16:45:28'
    },
    {
      id: 4,
      workspace: { name: 'SK C&C', icon: 'S', color: 'color-amber' },
      domain: 'www.skcc.com',
      creator: 'jwpark12',
      memberCount: 1000,
      userStatus: { total: 15, admin: 1, member: 10 },
      createdDate: '2025-06-10 08:42:17'
    },
    {
      id: 5,
      workspace: { name: 'Timbel_Mk', icon: 'T', color: 'color-green' },
      domain: 'www.timbel.ai',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 5, admin: 1, member: 3 },
      createdDate: '2025-05-25 12:55:41'
    },
    {
      id: 6,
      workspace: { name: 'Timbel_sol', icon: 'T', color: 'color-purple' },
      domain: 'www.timbelsol.co.kr',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 7, admin: 1, member: 4 },
      createdDate: '2025-04-18 11:33:29'
    }
  ]

  // 전체 선택 핸들러
  const handleSelectAll = (e) => {
    const checked = e.target.checked
    setSelectAll(checked)
    if (checked) {
      setSelectedRows(workspaceData.map(item => item.id))
    } else {
      setSelectedRows([])
    }
  }

  // 개별 행 선택 핸들러
  const handleRowSelect = (id) => {
    const newSelectedRows = selectedRows.includes(id) 
      ? selectedRows.filter(rowId => rowId !== id)
      : [...selectedRows, id]
    
    setSelectedRows(newSelectedRows)
    setSelectAll(newSelectedRows.length === workspaceData.length)
  }

  // 모달 핸들러
  const handleCreateClick = () => {
    setIsCreateModalOpen(true)
  }

  const handleModalClose = () => {
    setIsCreateModalOpen(false)
    setNewWorkspace({
      name: '',
      domain: '',
      description: ''
    })
  }

  const handleCreateWorkspace = () => {
    console.log('새 워크스페이스 생성:', newWorkspace)
    handleModalClose()
  }

  // 스피너 핸들러
  const handleSpinnerChange = (id, newValue) => {
    console.log(`워크스페이스 ${id} 구성원 수 변경:`, newValue)
  }

  // 사용자 현황 렌더링
  const renderUserStatus = (userStatus) => {
    const roles = []
    if (userStatus.admin > 0) {
      roles.push(<span key="admin" className="role-item admin">관리자 {userStatus.admin}</span>)
    }
    if (userStatus.member > 0) {
      if (roles.length > 0) {
        roles.push(<span key="sep" className="role-separator">/</span>)
      }
      roles.push(<span key="member" className="role-item member">구성원 {userStatus.member}</span>)
    }

    return (
      <div className="user-status">
        <div className="user-total">총 {userStatus.total}명</div>
        {roles.length > 0 && (
          <div className="user-roles">
            {roles}
          </div>
        )}
      </div>
    )
  }

  // 워크스페이스 아이콘 색상 랜덤 생성
  const getRandomIconColor = () => {
    const colors = ['#F59E0B', '#EF4444', '#10B981', '#3B82F6', '#8B5CF6', '#F97316']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <Layout className="page-workspace">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">워크스페이스 관리</h1>
          <div className="header-actions">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="검색어를 입력하세요" 
                className="search-input"
                style={{
                  padding: '8px 16px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  fontSize: '14px',
                  width: '250px'
                }}
              />
              <button 
                className="search-btn"
                style={{
                  padding: '8px 16px',
                  marginLeft: '8px',
                  background: '#F3F4F6',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                검색
              </button>
            </div>
            <button 
              className="btn-primary"
              onClick={handleCreateClick}
              style={{
                padding: '8px 16px',
                marginLeft: '16px',
                background: '#3B82F6',
                color: 'white',
                border: '1px solid #3B82F6',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#2563EB'
                e.target.style.borderColor = '#2563EB'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#3B82F6'
                e.target.style.borderColor = '#3B82F6'
              }}
            >
              + 생성
            </button>
          </div>
        </div>

        <div className="content-body">
          <div className="table-header">
            <div className="table-info">
              <span className="total-count">총 {workspaceData.length}개</span>
            </div>
            <div className="table-actions">
              <button 
                className="btn-bulk-action"
                style={{
                  padding: '6px 12px',
                  background: 'transparent',
                  color: '#DC2626',
                  border: '1px solid #DC2626',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  marginRight: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#fef2f2'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                }}
              >
                삭제
              </button>
              <button 
                className="btn-bulk-action"
                style={{
                  padding: '6px 12px',
                  background: 'transparent',
                  color: '#6B7280',
                  border: '1px solid #D1D5DB',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#F9FAFB'
                  e.target.style.borderColor = '#9CA3AF'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.borderColor = '#D1D5DB'
                }}
              >
                수정
              </button>
            </div>
          </div>

          <div className="table-container">
            <table className="workspace-table">
              <thead>
                <tr>
                  <th style={{ textAlign: 'center', width: '50px' }}>
                    <input 
                      type="checkbox"
                      className="select-all"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>워크스페이스명</th>
                  <th>조직</th>
                  <th>생성자</th>
                  <th>구성원</th>
                  <th>사용자 현황</th>
                  <th>생성시간</th>
                </tr>
              </thead>
              <tbody>
                {workspaceData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input 
                        type="checkbox"
                        checked={selectedRows.includes(item.id)}
                        onChange={() => handleRowSelect(item.id)}
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
                    <td>{item.domain}</td>
                    <td>{item.creator}</td>
                    <td>
                      <div className="count-spinner">
                        <input 
                          type="number" 
                          className="count-input" 
                          defaultValue={item.memberCount}
                          min="0"
                          onChange={(e) => handleSpinnerChange(item.id, e.target.value)}
                          style={{
                            width: '80px',
                            padding: '4px 8px',
                            border: '1px solid #D1D5DB',
                            borderRadius: '4px',
                            fontSize: '13px',
                            textAlign: 'center'
                          }}
                        />
                        <div className="spinner-buttons" style={{ marginLeft: '4px' }}>
                          <button 
                            className="spinner-btn spinner-up"
                            style={{
                              display: 'block',
                              width: '20px',
                              height: '15px',
                              border: '1px solid #D1D5DB',
                              background: '#F9FAFB',
                              cursor: 'pointer',
                              borderRadius: '2px',
                              marginBottom: '1px'
                            }}
                            onClick={() => {
                              const input = document.querySelector(`input[data-id="${item.id}"]`)
                              if (input) {
                                const newValue = parseInt(input.value) + 1
                                input.value = newValue
                                handleSpinnerChange(item.id, newValue)
                              }
                            }}
                          >
                            <img src="../asset/spinner-up.svg" alt="증가" style={{ width: '10px', height: '6px' }} />
                          </button>
                          <button 
                            className="spinner-btn spinner-down"
                            style={{
                              display: 'block',
                              width: '20px',
                              height: '15px',
                              border: '1px solid #D1D5DB',
                              background: '#F9FAFB',
                              cursor: 'pointer',
                              borderRadius: '2px'
                            }}
                            onClick={() => {
                              const input = document.querySelector(`input[data-id="${item.id}"]`)
                              if (input) {
                                const newValue = Math.max(0, parseInt(input.value) - 1)
                                input.value = newValue
                                handleSpinnerChange(item.id, newValue)
                              }
                            }}
                          >
                            <img src="../asset/spinner-down.svg" alt="감소" style={{ width: '10px', height: '6px' }} />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>{renderUserStatus(item.userStatus)}</td>
                    <td>{item.createdDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 */}
          <div className="pagination" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginTop: '20px',
            gap: '4px'
          }}>
            <button 
              className="page-btn prev" 
              disabled
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                background: '#f5f5f5',
                color: '#999',
                borderRadius: '4px',
                cursor: 'not-allowed'
              }}
            >
              ‹
            </button>
            <button 
              className="page-btn active"
              style={{
                padding: '8px 12px',
                border: '1px solid #2196F3',
                background: '#2196F3',
                color: 'white',
                borderRadius: '4px',
                cursor: 'pointer',
                minWidth: '36px'
              }}
            >
              1
            </button>
            <button 
              className="page-btn"
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                background: 'white',
                color: '#333',
                borderRadius: '4px',
                cursor: 'pointer',
                minWidth: '36px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f0f0f0'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white'
              }}
            >
              2
            </button>
            <button 
              className="page-btn"
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                background: 'white',
                color: '#333',
                borderRadius: '4px',
                cursor: 'pointer',
                minWidth: '36px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f0f0f0'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white'
              }}
            >
              3
            </button>
            <button 
              className="page-btn next"
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                background: 'white',
                color: '#333',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f0f0f0'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white'
              }}
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* 워크스페이스 생성 모달 */}
      {isCreateModalOpen && (
        <div className="modal-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="modal-container workspace-create-modal" style={{
            background: 'white',
            borderRadius: '12px',
            width: '500px',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto'
          }}>
            <div className="modal-content" style={{ padding: '32px', textAlign: 'center' }}>
              <h2 className="modal-title" style={{ 
                fontSize: '20px', 
                fontWeight: '600', 
                color: '#111827', 
                margin: '0 0 24px 0' 
              }}>
                워크스페이스 생성
              </h2>
              
              {/* 워크스페이스 아이콘 */}
              <div className="workspace-icon-section" style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
                <div 
                  className="workspace-icon-large"
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '20px',
                    background: getRandomIconColor(),
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '32px',
                    fontWeight: '600',
                    color: 'white',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {newWorkspace.name ? newWorkspace.name.charAt(0).toUpperCase() : 'W'}
                </div>
              </div>

              {/* 폼 섹션 */}
              <div className="form-section" style={{ textAlign: 'left', marginBottom: '32px' }}>
                {/* 이름 입력 */}
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label className="form-label" style={{ 
                    display: 'block', 
                    fontSize: '14px', 
                    fontWeight: '500', 
                    color: '#374151', 
                    marginBottom: '8px' 
                  }}>
                    이름
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={newWorkspace.name}
                    onChange={(e) => setNewWorkspace(prev => ({ ...prev, name: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: '#111827',
                      background: 'white',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* 도메인 입력 */}
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label className="form-label" style={{ 
                    display: 'block', 
                    fontSize: '14px', 
                    fontWeight: '500', 
                    color: '#374151', 
                    marginBottom: '8px' 
                  }}>
                    도메인
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={newWorkspace.domain}
                    onChange={(e) => setNewWorkspace(prev => ({ ...prev, domain: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: '#111827',
                      background: 'white',
                      boxSizing: 'border-box'
                    }}
                  />
                  <div className="form-error" style={{ 
                    marginTop: '6px', 
                    fontSize: '12px', 
                    color: '#EF4444' 
                  }}>
                    필수 입력 항목입니다.
                  </div>
                </div>

                {/* 비고 입력 */}
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label className="form-label" style={{ 
                    display: 'block', 
                    fontSize: '14px', 
                    fontWeight: '500', 
                    color: '#374151', 
                    marginBottom: '8px' 
                  }}>
                    비고
                  </label>
                  <textarea
                    className="form-textarea"
                    rows={3}
                    value={newWorkspace.description}
                    onChange={(e) => setNewWorkspace(prev => ({ ...prev, description: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: '#111827',
                      background: 'white',
                      boxSizing: 'border-box',
                      minHeight: '80px',
                      resize: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </div>

              {/* 모달 버튼 */}
              <div className="modal-buttons" style={{ display: 'flex', gap: '16px' }}>
                <button 
                  className="btn-cancel"
                  onClick={handleModalClose}
                  style={{
                    flex: 1,
                    padding: '12px',
                    fontSize: '16px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    background: 'white',
                    color: '#374151',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#F9FAFB'
                    e.target.style.borderColor = '#9CA3AF'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'white'
                    e.target.style.borderColor = '#D1D5DB'
                  }}
                >
                  취소
                </button>
                <button 
                  className="btn-confirm"
                  onClick={handleCreateWorkspace}
                  style={{
                    flex: 1,
                    padding: '12px',
                    fontSize: '16px',
                    border: '1px solid #3B82F6',
                    borderRadius: '8px',
                    background: '#3B82F6',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#2563EB'
                    e.target.style.borderColor = '#2563EB'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#3B82F6'
                    e.target.style.borderColor = '#3B82F6'
                  }}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default WorkspacePage