import React from 'react'
import Layout from '../../components/Layout/Layout'

const TestPage = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* 사이드바 */}
      <div style={{ 
        width: '250px', 
        backgroundColor: '#f8f9fa', 
        padding: '20px',
        borderRight: '1px solid #e5e7eb'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: '#0066FF', 
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>T</div>
          <div style={{ marginTop: '8px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>Timbel</div>
            <div style={{ color: '#666', fontSize: '14px' }}>timbel.net</div>
          </div>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}>전체 시스템 관리</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <a href="/workspace" style={{ textDecoration: 'none', color: '#555' }}>워크스페이스 관리</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="/menu-setting" style={{ textDecoration: 'none', color: '#555' }}>전체 메뉴 관리</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="/system-user" style={{ textDecoration: 'none', color: '#555' }}>관리자 지정</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}>워크스페이스</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <a href="/user" style={{ textDecoration: 'none', color: '#555' }}>사용자 관리</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="/logo" style={{ textDecoration: 'none', color: '#555' }}>로고 이미지 관리</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="/notice" style={{ textDecoration: 'none', color: '#555' }}>공지사항 관리</a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* 메인 콘텐츠 */}
      <div style={{ flex: 1, padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>테스트 페이지</h1>
        </div>
        <div className="test-container">
          <h2 className="test-title">✅ 사이드바가 보입니다!</h2>
          <p className="test-description">이제 왼쪽에 사이드바가 인라인 스타일로 표시됩니다.</p>
          <p className="test-description">CSS 파일 로딩에 문제가 있었던 것 같습니다.</p>
          
          <div className="test-info">
            <h3 style={{ marginBottom: '10px' }}>테스트 링크:</h3>
            <ul>
              <li><a href="/logo" style={{ color: '#0066FF' }}>로고 관리 페이지</a></li>
              <li><a href="/user" style={{ color: '#0066FF' }}>사용자 관리 페이지</a></li>
              <li><a href="/notice" style={{ color: '#0066FF' }}>공지사항 관리 페이지</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestPage
