import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'

const WorkspaceMenuSettingPage = () => {
  const [menuItems, setMenuItems] = useState([])
  const [draggedItem, setDraggedItem] = useState(null)
  const [dragOverItem, setDragOverItem] = useState(null)

  // 초기 메뉴 데이터
  const initialMenuData = [
    { id: 1, name: '공통관리', isActive: true, url: '-' },
    { id: 2, name: '기능 권한 관리', isActive: true, url: '-' },
    { id: 3, name: '사용자 관리', isActive: true, url: '-' },
    { id: 4, name: '로고 이미지 관리', isActive: true, url: '-' },
    { id: 5, name: '회의 템플릿 관리', isActive: true, url: '-' },
    { id: 6, name: '프롬프트 관리', isActive: true, url: '-' },
    { id: 7, name: '동의서 관리', isActive: true, url: '-' },
    { id: 8, name: '캘린더 관리', isActive: true, url: '-' },
    { id: 9, name: '사용자 접속 이력', isActive: true, url: '-' },
    { id: 10, name: '다운로드 이력', isActive: true, url: '-' },
    { id: 11, name: '사용자 동의 이력', isActive: true, url: '-' },
    { id: 12, name: '설정변경 이력', isActive: true, url: '-' },
    { id: 13, name: '회의록 관리', isActive: true, url: '-' },
    { id: 14, name: '사전 관리', isActive: true, url: '-' },
    { id: 15, name: '공지사항 관리', isActive: true, url: '-' },
    { id: 16, name: '사용량 통계', isActive: true, url: '-' },
    { id: 17, name: '사용자별 통계', isActive: true, url: '-' }
  ]

  useEffect(() => {
    setMenuItems(initialMenuData)
  }, [])

  // 드래그 시작
  const handleDragStart = (e, item) => {
    setDraggedItem(item)
    e.dataTransfer.effectAllowed = 'move'
    e.target.classList.add('dragging')
  }

  // 드래그 끝
  const handleDragEnd = (e) => {
    e.target.classList.remove('dragging')
    setDraggedItem(null)
    setDragOverItem(null)
  }

  // 드래그 오버
  const handleDragOver = (e, item) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setDragOverItem(item)
  }

  // 드래그 리브
  const handleDragLeave = () => {
    setDragOverItem(null)
  }

  // 드롭
  const handleDrop = (e, targetItem) => {
    e.preventDefault()
    
    if (!draggedItem || draggedItem.id === targetItem.id) {
      return
    }

    const newMenuItems = [...menuItems]
    const draggedIndex = newMenuItems.findIndex(item => item.id === draggedItem.id)
    const targetIndex = newMenuItems.findIndex(item => item.id === targetItem.id)

    // 아이템 순서 변경
    const [removed] = newMenuItems.splice(draggedIndex, 1)
    newMenuItems.splice(targetIndex, 0, removed)

    setMenuItems(newMenuItems)
    setDragOverItem(null)
  }

  // 토글 스위치 핸들러
  const handleToggle = (id) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? { ...item, isActive: !item.isActive } : item
    ))
  }

  // 초기화 버튼
  const handleReset = () => {
    setMenuItems(initialMenuData)
    alert('메뉴 순서가 초기화되었습니다.')
  }

  // 구분선 추가 버튼
  const handleAddSeparator = () => {
    const newSeparator = {
      id: Date.now(),
      name: '--- 구분선 ---',
      isActive: true,
      url: '-',
      isSeparator: true
    }
    setMenuItems([...menuItems, newSeparator])
  }

  // 저장 버튼
  const handleSave = () => {
    console.log('Saved menu order:', menuItems)
    alert('메뉴 설정이 저장되었습니다.')
  }

  return (
    <Layout>
      <div className="page-workspace-menu-setting">
        <div className="content">
          <div className="content-header">
            <h1 className="breadcrumb">메뉴리스트 관리</h1>
          </div>

          <div className="content-body">
            <div className="menu-management-container">
              {/* 메뉴정보 헤더 */}
              <div className="menu-title-header">
                <div className="menu-title-section">
                  <h3 className="menu-subtitle">메뉴 관리</h3>
                </div>
                <div className="menu-action-section">
                  <div className="menu-action-buttons">
                    <button className="btn-reset" onClick={handleReset}>
                      초기화
                    </button>
                    <button className="btn-add-separator" onClick={handleAddSeparator}>
                      구분선 추가
                    </button>
                    <button className="btn-save" onClick={handleSave}>
                      저장
                    </button>
                  </div>
                </div>
              </div>

            {/* 드래그 가능한 메뉴 테이블 */}
            <div className="drag-table-container">
              <table className="drag-sortable-table">
                <thead>
                  <tr>
                    <th width="50" className="drag-column"></th>
                    <th width="250">메뉴명</th>
                    <th width="100">사용여부</th>
                    <th width="300">URL</th>
                  </tr>
                </thead>
                <tbody id="sortable-menu-list">
                  {menuItems.map((item, index) => (
                    <tr
                      key={item.id}
                      draggable="true"
                      data-menu-id={item.id}
                      className={`draggable-row ${dragOverItem?.id === item.id ? 'drag-over' : ''} ${item.isSeparator ? 'separator-row' : ''}`}
                      onDragStart={(e) => handleDragStart(e, item)}
                      onDragEnd={handleDragEnd}
                      onDragOver={(e) => handleDragOver(e, item)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, item)}
                    >
                      <td className="drag-handle" title="드래그하여 순서 변경">
                        ☰
                      </td>
                      <td className={`menu-name ${item.isSeparator ? 'separator-text' : ''}`}>
                        {item.name}
                      </td>
                      <td className="menu-status">
                        <label className="switch">
                          <input 
                            type="checkbox" 
                            checked={item.isActive}
                            onChange={() => handleToggle(item.id)}
                          />
                          <span className="slider"></span>
                        </label>
                      </td>
                      <td className="menu-url">{item.url}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WorkspaceMenuSettingPage
