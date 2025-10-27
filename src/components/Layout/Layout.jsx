import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Select from '../common/Select'

const Layout = ({ children, className = '' }) => {
  const location = useLocation()
  const [selectedWorkspace, setSelectedWorkspace] = useState('Timbel')
  
  const workspaceOptions = [
    { value: 'Timbel', label: 'Timbel' },
    { value: 'sk-telecom', label: 'SK Telecom' },
    { value: 'sk-hynix', label: 'SK Hynix' },
    { value: 'sk-es', label: 'SK E&S' },
    { value: 'sk-cc', label: 'SK C&C' },
    { value: 'sk-innovation', label: 'SK Innovation' },
    { value: 'sk-networks', label: 'SK Networks' }
  ]
  
  const isActive = (path) => {
    // 홈 경로('/') 는 워크스페이스 관리로 리다이렉트되므로
    if (path === '/workspace' && location.pathname === '/') {
      return 'active'
    }
    return location.pathname === path ? 'active' : ''
  }
  return (
    <div className={`container ${className}`}>
      {/* 사이드바 */}
      <div className="sidebar">
        <div className="logo">
          <div className="logo-icon">T</div>
          <div className="logo-text">
            <div className="logo-title">홍길동</div>
            <div className="logo-url">
              <Select
                value={selectedWorkspace}
                onChange={(e) => setSelectedWorkspace(e.target.value)}
                options={workspaceOptions}
                width="100%"
              />
            </div>
          </div>
          <button className="logout-btn" title="로그아웃">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_logout)">
                <path
                  d="M12 3H6.66667C5.95942 3 5.28115 3.27092 4.78105 3.75315C4.28095 4.23539 4 4.88944 4 5.57143V18.4286C4 19.1106 4.28095 19.7646 4.78105 20.2468C5.28115 20.7291 5.95942 21 6.66667 21H12"
                  stroke="#4D5256" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.75 8.25L19.5 12M19.5 12L15.75 15.75M19.5 12H8" stroke="#4D5256" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_logout">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className="menu-section">
          <h3>전체 시스템 관리</h3>
          <ul>
            <li><a href="/workspace" className={isActive('/workspace')}>워크스페이스 관리</a></li>
            <li><a href="/menu-setting" className={isActive('/menu-setting')}>전체 메뉴 관리</a></li>
            <li><a href="/system-user" className={isActive('/system-user')}>사용자 관리</a></li>
            <li><a href="/group-setting" className={isActive('/group-setting')}>역할 관리</a></li>
            <li><a href="/terms-of-service" className={isActive('/terms-of-service')}>이용약관 관리</a></li>
            <li><a href="/terms-consent-history" className={isActive('/terms-consent-history')}>이용약관 동의 이력</a></li>
            <li><a href="/system-setting-history" className={isActive('/system-setting-history')}>설정변경 이력</a></li>
            <li><a href="/system-stats-usage" className={isActive('/system-stats-usage')}>전체 시스템 사용 통계</a></li>
            <li><a href="/system-stats-user" className={isActive('/system-stats-user')}>사용자별 사용 통계</a></li>
          </ul>
        </div>

        <div className="menu-section">
          <div className="menu-section-header">
            <h3>워크스페이스 설정</h3>
          </div>
          <ul>
            <li><a href="/workspace-permission" className={isActive('/workspace-permission')}>기능 권한 관리</a></li>
            <li><a href="/content-retention" className={isActive('/content-retention')}>콘텐츠 보존 관리</a></li>
            <li><a href="/workspace-group-setting" className={isActive('/workspace-group-setting')}>역할 관리</a></li>
            <li><a href="/user" className={isActive('/user')}>사용자 관리</a></li>
            <li><a href="/logo" className={isActive('/logo')}>로고 관리</a></li>
          </ul>
        </div>

        <div className="menu-section">
          <div className="menu-section-header">
            <h3>세부 기능 관리</h3>
          </div>
          <ul>
            <li><a href="/meet-template" className={isActive('/meet-template')}>템플릿 관리 (회의록, 공통 템플릿)</a></li>
            <li><a href="/prompt" className={isActive('/prompt')}>프롬프트 관리</a></li>
            <li><a href="/consent" className={isActive('/consent')}>동의서 관리</a></li>
            <li><a href="/calendar" className={isActive('/calendar')}>캘린더 관리/설정</a></li>
            <li><a href="/dictionary" className={isActive('/dictionary')}>사전 관리</a></li>
            <li><a href="/notice" className={isActive('/notice')}>공지사항 관리</a></li>
          </ul>
        </div>

        <div className="menu-section">
          <div className="menu-section-header">
            <h3>이력/통계 관리</h3>
          </div>
          <ul>
            <li><a href="/login-history" className={isActive('/login-history')}>사용자 접속 이력</a></li>
            <li><a href="/download-history" className={isActive('/download-history')}>다운로드 이력</a></li>
            <li><a href="/user-consent-history" className={isActive('/user-consent-history')}>사용자 동의 이력</a></li>
            <li><a href="/setting-change-history" className={isActive('/setting-change-history')}>설정 변경 이력</a></li>
            <li><a href="/meeting" className={isActive('/meeting')}>회의록 이력</a></li>
            <li><a href="/stats-usage" className={isActive('/stats-usage')}>워크스페이스 사용 통계</a></li>
            <li><a href="/stats-user" className={isActive('/stats-user')}>사용자별 사용 통계</a></li>
          </ul>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      {children}
    </div>
  )
}

export default Layout