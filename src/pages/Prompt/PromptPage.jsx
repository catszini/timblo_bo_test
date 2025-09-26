import React, { useState } from 'react'
import {
  Button
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const promptData = [
  {
    id: 1,
    category: '회의록',
    key: 'TRN-EK-001',
    name: '핵심 요약 프롬프트',
    description: '회의의 핵심 내용을 요약하는 프롬프트',
    createdAt: '2024-02-28 14:30',
    creator: '김철수',
    version: 'v1.2'
  },
  {
    id: 2,
    category: '번역',
    key: 'TRN-EK-002',
    name: '영어 번역 프롬프트',
    description: '한국어를 영어로 번역하는 프롬프트',
    createdAt: '2024-02-27 11:20',
    creator: '이영희',
    version: 'v2.0'
  },
  {
    id: 3,
    category: '일정',
    key: 'TRN-EK-003',
    name: '일정 정리 프롬프트',
    description: '캘린더 일정을 정리하는 프롬프트',
    createdAt: '2024-02-26 09:15',
    creator: '박지민',
    version: 'v1.0'
  },
  {
    id: 4,
    category: '번역',
    key: 'TRN-EK-004',
    name: '중국어 번역 프롬프트',
    description: '한국어를 중국어로 번역하는 프롬프트',
    createdAt: '2024-02-25 16:45',
    creator: '최동훈',
    version: 'v1.5'
  },
  {
    id: 5,
    category: '분석',
    key: 'TRN-EK-005',
    name: '감정 분석 프롬프트',
    description: '텍스트의 감정을 분석하는 프롬프트',
    createdAt: '2024-02-24 13:20',
    creator: '정수민',
    version: 'v1.8'
  }
]

const PromptPage = () => {
  const [prompts, setPrompts] = useState(promptData)

  const handleFileUpload = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json,.csv,.txt'
    input.onchange = (e) => {
      const file = e.target.files[0]
      if (file) {
        console.log('File selected:', file.name)
        // 파일 업로드 로직 구현
      }
    }
    input.click()
  }

  return (
    <Layout className="page-prompt prompt-page">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">프롬프트 관리</h1>
        </div>

        <div className="content-body">
          <div className="search-section">
            <div className="search-group">
              <div className="right-group">
                <Button 
                  className="new-button"
                  variant="contained"
                  onClick={handleFileUpload}
                >
                  파일업로드
                </Button>
              </div>
            </div>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>카테고리</th>
                  <th>KEY</th>
                  <th>이름</th>
                  <th>설명</th>
                  <th>등록일</th>
                  <th>등록자</th>
                  <th>버전</th>
                </tr>
              </thead>
              <tbody>
                {prompts.map((prompt) => (
                  <tr key={prompt.id}>
                    <td>{prompt.category}</td>
                    <td>{prompt.key}</td>
                    <td>{prompt.name}</td>
                    <td>{prompt.description}</td>
                    <td>{prompt.createdAt}</td>
                    <td>{prompt.creator}</td>
                    <td>{prompt.version}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PromptPage
