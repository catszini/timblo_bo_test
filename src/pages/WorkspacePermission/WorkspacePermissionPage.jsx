import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

const WorkspacePermissionPage = () => {
  const [permissions, setPermissions] = useState({
    browserTitle: 'AI 회의록 - dev',
    consentRequired: true,
    thumbnailUpload: false,
    nicknameEdit: true,
    addressBook: false,
    recording: true,
    fileUpload: true,
    emailNotification: true,
    meetingShare: false,
    clipboardCopy: false,
    reSummarize: true,
    template: true,
    documentDownload: true,
    documentDownloadOptions: {
      fullSummary: false,
      separate: false,
      highlight: false,
      note: false,
      transcript: false
    },
    mediaDownloadOptions: {
      txtDownload: false,
      pdfDownload: false,
      docxDownload: false,
      hwpDownload: false
    }
  })

  // 기능 데이터 (HTML과 완전히 일치)
  const featureData = [
    {
      id: 'browserTitle',
      name: '브라우저 탭 제목 지정',
      description: '브라우저 제목바에 표시될 제목을 설정합니다.',
      type: 'input',
      value: permissions.browserTitle
    },
    {
      id: 'consentRequired',
      name: '동의서 제출요구',
      description: '각종 서비스 이용에 대한 동의서 제출을 요구합니다.',
      type: 'toggle',
      value: permissions.consentRequired
    },
    {
      id: 'thumbnailUpload',
      name: '썸네일 이미지 업로드',
      description: '썸네일 이미지 업로드 기능을 활성화합니다.',
      type: 'toggle',
      value: permissions.thumbnailUpload
    },
    {
      id: 'nicknameEdit',
      name: '닉네임 수정',
      description: '닉네임 수정 기능을 활성화합니다.',
      type: 'toggle',
      value: permissions.nicknameEdit
    },
    {
      id: 'addressBook',
      name: '주소록 기능',
      description: '주소록 기능을 활성화합니다',
      type: 'toggle',
      value: permissions.addressBook
    },
    {
      id: 'recording',
      name: '녹음 기능',
      description: '녹음 관련 기능을 전체적으로 비활성화하지 비활성화합니다.',
      type: 'toggle',
      value: permissions.recording
    },
    {
      id: 'fileUpload',
      name: '파일 업로드',
      description: '파일 업로드 기능을 활성화합니다.',
      type: 'toggle',
      value: permissions.fileUpload
    },
    {
      id: 'emailNotification',
      name: '이메일 알림',
      description: '신규회의록 생성에 대한 이메일 알림 기능을 활성화합니다.',
      type: 'toggle',
      value: permissions.emailNotification
    },
    {
      id: 'meetingShare',
      name: '회의록 공유',
      description: '회의록 공유 기능을 활성화 합니다.',
      type: 'toggle',
      value: permissions.meetingShare
    },
    {
      id: 'clipboardCopy',
      name: '클립보드 복사',
      description: 'AI 요약, 음성기록의 클립보드 복사 기능을 활성화합니다.',
      type: 'toggle',
      value: permissions.clipboardCopy
    },
    {
      id: 'reSummarize',
      name: '재요약 기능',
      description: '음성기록에 대한 재요약 기능을 활성화합니다.',
      type: 'toggle',
      value: permissions.reSummarize
    },
    {
      id: 'template',
      name: '템플릿 기능',
      description: '노트 탭의 템플릿 기능을 활성화 합니다.',
      type: 'toggle',
      value: permissions.template
    },
    {
      id: 'documentDownload',
      name: '문서파일 다운로드',
      description: '문서 다운로드 관련 기능 진체에 활성화합니다.',
      type: 'toggle',
      value: permissions.documentDownload
    },
    {
      id: 'documentDownloadOptions',
      name: '문서 파일 다운로드 항목',
      description: '문서 파일 다운로드 기능을 활성화합니다.',
      type: 'checkbox-group',
      options: [
        { id: 'fullSummary', label: '전체 요약', checked: permissions.documentDownloadOptions.fullSummary },
        { id: 'separate', label: '별도', checked: permissions.documentDownloadOptions.separate },
        { id: 'highlight', label: '하이라이트', checked: permissions.documentDownloadOptions.highlight },
        { id: 'note', label: '노트', checked: permissions.documentDownloadOptions.note },
        { id: 'transcript', label: '음성 기록', checked: permissions.documentDownloadOptions.transcript }
      ]
    },
    {
      id: 'mediaDownloadOptions',
      name: '영상/음성 파일 다운로드',
      description: '영상/음성 파일 다운로드 기능을 활성화합니다.',
      type: 'checkbox-group',
      options: [
        { id: 'txtDownload', label: 'TXT 다운로드', checked: permissions.mediaDownloadOptions.txtDownload },
        { id: 'pdfDownload', label: 'PDF 다운로드', checked: permissions.mediaDownloadOptions.pdfDownload },
        { id: 'docxDownload', label: 'DOCX 다운로드', checked: permissions.mediaDownloadOptions.docxDownload },
        { id: 'hwpDownload', label: 'HWP 다운로드', checked: permissions.mediaDownloadOptions.hwpDownload }
      ]
    }
  ]

  // 입력값 변경 핸들러
  const handleInputChange = (id, value) => {
    setPermissions(prev => ({
      ...prev,
      [id]: value
    }))
  }

  // 토글 변경 핸들러
  const handleToggleChange = (id) => {
    setPermissions(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // 체크박스 그룹 변경 핸들러
  const handleCheckboxGroupChange = (groupId, optionId) => {
    setPermissions(prev => ({
      ...prev,
      [groupId]: {
        ...prev[groupId],
        [optionId]: !prev[groupId][optionId]
      }
    }))
  }

  // 저장 핸들러
  const handleSave = () => {
    console.log('권한 설정 저장:', permissions)
    alert('권한 설정이 저장되었습니다.')
  }

  // 토글 스위치 렌더링
  const renderToggleSwitch = (id, checked) => (
    <label className="toggle-switch" style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
      <input 
        type="checkbox" 
        checked={checked}
        onChange={() => handleToggleChange(id)}
        style={{ opacity: 0, width: 0, height: 0 }}
      />
      <span 
        className="toggle-slider"
        style={{
          position: 'absolute',
          cursor: 'pointer',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: checked ? '#2196F3' : '#ccc',
          transition: '0.4s',
          borderRadius: '24px',
          '&:before': {
            position: 'absolute',
            content: '""',
            height: '18px',
            width: '18px',
            left: checked ? '26px' : '3px',
            bottom: '3px',
            backgroundColor: 'white',
            transition: '0.4s',
            borderRadius: '50%'
          }
        }}
        onClick={() => handleToggleChange(id)}
      >
        <span style={{
          position: 'absolute',
          content: '""',
          height: '18px',
          width: '18px',
          left: checked ? '26px' : '3px',
          bottom: '3px',
          backgroundColor: 'white',
          transition: '0.4s',
          borderRadius: '50%',
          transform: 'translateY(-50%)',
          top: '50%'
        }} />
      </span>
    </label>
  )

  // 체크박스 그룹 렌더링
  const renderCheckboxGroup = (groupId, options) => (
    <div className="checkbox-group-horizontal" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {options.map(option => (
        <label key={option.id} className="checkbox-item" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            className="feature-checkbox"
            checked={option.checked}
            onChange={() => handleCheckboxGroupChange(groupId, option.id)}
            style={{ display: 'none' }}
          />
          <span 
            className="checkmark"
            style={{
              width: '16px',
              height: '16px',
              border: '2px solid #97c3f0',
              borderRadius: '3px',
              backgroundColor: option.checked ? 'rgba(199, 223, 247, 0.8)' : 'white',
              marginRight: '8px',
              transition: 'all 0.2s'
            }}
          />
          {option.label}
        </label>
      ))}
    </div>
  )

  return (
    <Layout className="page-workspace-permission">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">FO기능정책관리</h1>
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
          {/* 기능 권한 관리 테이블 */}
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
                {featureData.map((feature, index) => (
                  <tr key={feature.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td className="feature-name" style={{ 
                      padding: '16px', 
                      fontSize: '14px', 
                      fontWeight: '500',
                      color: '#111827',
                      verticalAlign: 'top'
                    }}>
                      {feature.name}
                    </td>
                    <td className="feature-description" style={{ 
                      padding: '16px', 
                      fontSize: '14px', 
                      color: '#6B7280',
                      lineHeight: '1.5',
                      verticalAlign: 'top'
                    }}>
                      {feature.description}
                    </td>
                    <td className="feature-setting" style={{ 
                      padding: '16px', 
                      verticalAlign: 'top'
                    }}>
                      {feature.type === 'input' && (
                        <input 
                          type="text" 
                          className="setting-input"
                          value={feature.value}
                          onChange={(e) => handleInputChange(feature.id, e.target.value)}
                          style={{
                            width: '100%',
                            padding: '8px 12px',
                            border: '1px solid #D1D5DB',
                            borderRadius: '6px',
                            fontSize: '14px',
                            maxWidth: '250px'
                          }}
                        />
                      )}
                      {feature.type === 'toggle' && renderToggleSwitch(feature.id, feature.value)}
                      {feature.type === 'checkbox-group' && renderCheckboxGroup(feature.id, feature.options)}
                    </td>
                  </tr>
                ))}
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
              onClick={() => {
                setPermissions({
                  browserTitle: 'AI 회의록 - dev',
                  consentRequired: true,
                  thumbnailUpload: false,
                  nicknameEdit: true,
                  addressBook: false,
                  recording: true,
                  fileUpload: true,
                  emailNotification: true,
                  meetingShare: false,
                  clipboardCopy: false,
                  reSummarize: true,
                  template: true,
                  documentDownload: true,
                  documentDownloadOptions: {
                    fullSummary: false,
                    separate: false,
                    highlight: false,
                    note: false,
                    transcript: false
                  },
                  mediaDownloadOptions: {
                    txtDownload: false,
                    pdfDownload: false,
                    docxDownload: false,
                    hwpDownload: false
                  }
                })
              }}
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

export default WorkspacePermissionPage