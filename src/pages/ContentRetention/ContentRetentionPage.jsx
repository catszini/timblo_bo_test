import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

const ContentRetentionPage = () => {
  const [contentRetentionPeriod, setContentRetentionPeriod] = useState('180일')
  const [voiceRetentionPeriod, setVoiceRetentionPeriod] = useState('영구')
  const [customContentValue, setCustomContentValue] = useState('')
  const [customVoiceValue, setCustomVoiceValue] = useState('')

  // 컨텐츠 보존 기간 변경 핸들러
  const handleContentRetentionChange = (value) => {
    setContentRetentionPeriod(value)
    if (value !== 'custom') {
      setCustomContentValue('')
    }
  }

  // 음성 전사 보존 기간 변경 핸들러
  const handleVoiceRetentionChange = (value) => {
    setVoiceRetentionPeriod(value)
    if (value !== 'custom') {
      setCustomVoiceValue('')
    }
  }

  // 저장 핸들러
  const handleSave = () => {
    const settings = {
      contentRetention: contentRetentionPeriod === 'custom' ? `${customContentValue}일` : contentRetentionPeriod,
      voiceRetention: voiceRetentionPeriod === 'custom' ? `${customVoiceValue}일` : voiceRetentionPeriod
    }
    console.log('컨텐츠 보존 설정 저장:', settings)
    alert('컨텐츠 보존 설정이 저장되었습니다.')
  }

  // 초기화 핸들러
  const handleReset = () => {
    setContentRetentionPeriod('180일')
    setVoiceRetentionPeriod('영구')
    setCustomContentValue('')
    setCustomVoiceValue('')
  }

  return (
    <Layout className="page-content-retention">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">컨텐츠 보존 관리</h1>
          <div className="header-actions">
            <button 
              className="save-btn"
              onClick={handleSave}
              style={{
                padding: '8px 24px',
                background: '#3B82F6',
                color: 'white',
                border: '1px solid #3B82F6',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
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
              저장
            </button>
          </div>
        </div>

        <div className="content-body">
          {/* 컨텐츠 보존 관리 테이블 */}
          <div className="permission-table-container">
            <table className="permission-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F8F9FA' }}>
                  <th style={{ 
                    width: '250px', 
                    padding: '12px 16px', 
                    textAlign: 'left', 
                    borderBottom: '2px solid #E5E7EB',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    기능
                  </th>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'left', 
                    borderBottom: '2px solid #E5E7EB',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    권한 설명
                  </th>
                  <th style={{ 
                    width: '300px', 
                    padding: '12px 16px', 
                    textAlign: 'left', 
                    borderBottom: '2px solid #E5E7EB',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    사용 설정
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* 영상/음성 파일 보존기간 */}
                <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                  <td className="feature-name" style={{ 
                    padding: '16px', 
                    fontSize: '14px', 
                    fontWeight: '500',
                    color: '#111827',
                    verticalAlign: 'top'
                  }}>
                    영상/음성 파일 보존기간
                  </td>
                  <td className="feature-description" style={{ 
                    padding: '16px', 
                    fontSize: '14px', 
                    color: '#6B7280',
                    lineHeight: '1.5',
                    verticalAlign: 'top'
                  }}>
                    녹음된 음성파일이나 업로드된 미디어의 원본파일의 보존 기간을 설정합니다.
                  </td>
                  <td className="feature-setting" style={{ 
                    padding: '16px', 
                    verticalAlign: 'top'
                  }}>
                    <div className="setting-combo-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div className="combo-select" style={{ position: 'relative', display: 'inline-block' }}>
                        <select 
                          className="setting-select"
                          value={contentRetentionPeriod}
                          onChange={(e) => handleContentRetentionChange(e.target.value)}
                            style={{
                              padding: '8px 32px 8px 12px',
                              border: '1px solid #D1D5DB',
                              borderRadius: '6px',
                              fontSize: '14px',
                              minWidth: '120px',
                              appearance: 'none',
                              background: 'white url("../asset/select-arrow.svg") no-repeat right 8px center',
                              backgroundSize: '12px 12px',
                              cursor: 'pointer'
                            }}
                        >
                          <option value="90일">90일</option>
                          <option value="180일">180일</option>
                          <option value="1년">1년</option>
                          <option value="3년">3년</option>
                          <option value="custom">직접 입력</option>
                        </select>
                      </div>
                      {contentRetentionPeriod === 'custom' && (
                        <>
                          <input 
                            type="text" 
                            className="custom-input"
                            value={customContentValue}
                            onChange={(e) => setCustomContentValue(e.target.value)}
                            placeholder="숫자 입력"
                            style={{
                              padding: '8px 12px',
                              border: '1px solid #D1D5DB',
                              borderRadius: '6px',
                              fontSize: '14px',
                              width: '80px'
                            }}
                          />
                          <span className="input-unit" style={{ fontSize: '14px', color: '#6B7280' }}>일 후</span>
                        </>
                      )}
                    </div>
                  </td>
                </tr>

                {/* 영상/음성 전사기록 보존기간 */}
                <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                  <td className="feature-name" style={{ 
                    padding: '16px', 
                    fontSize: '14px', 
                    fontWeight: '500',
                    color: '#111827',
                    verticalAlign: 'top'
                  }}>
                    영상/음성 전사기록 보존기간
                  </td>
                  <td className="feature-description" style={{ 
                    padding: '16px', 
                    fontSize: '14px', 
                    color: '#6B7280',
                    lineHeight: '1.5',
                    verticalAlign: 'top'
                  }}>
                    음성 전사된 컨텐츠에 대한 보존기간을 설정합니다.
                  </td>
                  <td className="feature-setting" style={{ 
                    padding: '16px', 
                    verticalAlign: 'top'
                  }}>
                    <div className="setting-combo-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div className="combo-select" style={{ position: 'relative' }}>
                        <select 
                          className="setting-select"
                          value={voiceRetentionPeriod}
                          onChange={(e) => handleVoiceRetentionChange(e.target.value)}
                            style={{
                              padding: '8px 32px 8px 12px',
                              border: '1px solid #D1D5DB',
                              borderRadius: '6px',
                              fontSize: '14px',
                              minWidth: '120px',
                              appearance: 'none',
                              background: 'white url("../asset/select-arrow.svg") no-repeat right 8px center',
                              backgroundSize: '12px 12px',
                              cursor: 'pointer'
                            }}
                        >
                          <option value="영구">영구</option>
                          <option value="1년">1년</option>
                          <option value="2년">2년</option>
                          <option value="3년">3년</option>
                          <option value="custom">직접 입력</option>
                        </select>
                      </div>
                      {voiceRetentionPeriod === 'custom' && (
                        <>
                          <input 
                            type="text" 
                            className="custom-input"
                            value={customVoiceValue}
                            onChange={(e) => setCustomVoiceValue(e.target.value)}
                            placeholder="숫자 입력"
                            style={{
                              padding: '8px 12px',
                              border: '1px solid #D1D5DB',
                              borderRadius: '6px',
                              fontSize: '14px',
                              width: '80px'
                            }}
                          />
                          <span className="input-unit" style={{ fontSize: '14px', color: '#6B7280' }}>일 후</span>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 하단 액션 버튼 */}
          <div className="form-actions" style={{ 
            marginTop: '32px', 
            textAlign: 'center', 
            paddingTop: '24px',
            borderTop: '1px solid #E5E7EB'
          }}>
            <button 
              className="btn-reset"
              onClick={handleReset}
              style={{
                padding: '12px 24px',
                marginRight: '12px',
                background: 'transparent',
                color: '#6B7280',
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
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
              초기화
            </button>
            <button 
              className="btn-save"
              onClick={handleSave}
              style={{
                padding: '12px 24px',
                background: '#10B981',
                color: 'white',
                border: '1px solid #10B981',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#059669'
                e.target.style.borderColor = '#059669'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#10B981'
                e.target.style.borderColor = '#10B981'
              }}
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContentRetentionPage