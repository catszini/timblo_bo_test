import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'
import Layout from '../../components/Layout/Layout'
import { FileUploadButton, SaveButton, CancelButton } from '../../components/common/CommonButtons'
import ActionButton from '../../components/common/ActionButton'
import Modal from '../../components/common/Modal'
import FormField from '../../components/common/FormField'
import Select from '../../components/common/Select'
import { styles } from './PromptPage.styles'

const PromptPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPrompt, setSelectedPrompt] = useState(null)
  const [formData, setFormData] = useState({
    version: 'V1.0.0',
    category: '회의록',
    name: '',
    description: ''
  })

  // 프롬프트 데이터
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
      creator: '정수진',
      version: 'v1.1'
    }
  ]

  // 버전 이력 데이터
  const versionHistory = [
    {
      id: 'DEF-001-SK',
      version: 'V1.2.0',
      type: '텍스트',
      changes: '의료 용어 사전 최신 반영',
      createdAt: '2025-07-18 14:30:25',
      creator: '김철수',
      modifier: '박지민',
      modifiedAt: '2025-08-08 16:45:12'
    },
    {
      id: 'DEF-001-SK',
      version: 'V1.1.0',
      type: '음성',
      changes: '녹취 품질 개선 프롬프트 적용',
      createdAt: '2025-06-02 11:20:15',
      creator: '박지민',
      modifier: '김철수',
      modifiedAt: '2025-07-15 09:30:45'
    },
    {
      id: 'DEF-001-SK',
      version: 'V1.0.0',
      type: '텍스트',
      changes: '초기 배포',
      createdAt: '2025-05-10 10:15:30',
      creator: '이영희',
      modifier: '이영희',
      modifiedAt: '2025-05-10 10:15:30'
    }
  ]

  const handleFileUpload = () => {
    console.log('파일 업로드')
  }

  const handleRowClick = (prompt) => {
    setSelectedPrompt(prompt)
    setFormData({
      version: 'V1.0.0',
      category: prompt.category,
      name: prompt.name,
      description: prompt.description
    })
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPrompt(null)
  }

  const handleSave = () => {
    alert('프롬프트가 저장되었습니다.')
    handleCloseModal()
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            프롬프트 관리
          </Typography>
          <FileUploadButton onClick={handleFileUpload} />
        </Box>

        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={styles.headerCell}>카테고리</TableCell>
                <TableCell sx={styles.headerCell}>KEY</TableCell>
                <TableCell sx={styles.headerCell}>이름</TableCell>
                <TableCell sx={styles.headerCell}>설명</TableCell>
                <TableCell sx={styles.headerCell}>생성시간</TableCell>
                <TableCell sx={styles.headerCell}>생성자</TableCell>
                <TableCell sx={styles.headerCell}>버전</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {promptData.map((prompt) => (
                <TableRow
                  key={prompt.id}
                  hover
                  onClick={() => handleRowClick(prompt)}
                  sx={styles.tableRow}
                >
                  <TableCell>{prompt.category}</TableCell>
                  <TableCell>{prompt.key}</TableCell>
                  <TableCell>{prompt.name}</TableCell>
                  <TableCell>{prompt.description}</TableCell>
                  <TableCell>{prompt.createdAt}</TableCell>
                  <TableCell>{prompt.creator}</TableCell>
                  <TableCell>{prompt.version}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* 프롬프트 등록/수정 모달 */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        title="프롬프트 상세"
        maxWidth="md"
        actions={
          <>
            <CancelButton onClick={handleCloseModal} fullWidth />
            <SaveButton onClick={handleSave} fullWidth />
          </>
        }
      >
        <Box sx={styles.modalContent}>
          <Box>
            <Typography variant="body2" sx={styles.modalLabel}>ID</Typography>
            <Typography variant="body1" sx={styles.modalValue}>
              {selectedPrompt?.key || 'DEF-001-SK'}
            </Typography>
          </Box>

          <FormField
            label="버전정보"
            select
            value={formData.version}
            onChange={(e) => setFormData({...formData, version: e.target.value})}
            SelectProps={{
              native: true
            }}
          >
            <option>V1.0.0</option>
            <option>V1.1.0</option>
            <option>V1.2.0</option>
            <option>V2.0.0</option>
          </FormField>

          <FormField
            label="카테고리"
            select
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            SelectProps={{
              native: true
            }}
          >
            <option>회의록</option>
            <option>번역</option>
            <option>일정</option>
            <option>분석</option>
          </FormField>

          <FormField
            label="프롬프트명"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="프롬프트명을 입력하세요"
          />

          <FormField
            label="설명"
            multiline
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="프롬프트에 대한 설명을 입력하세요"
            helperText={`${formData.description.length}/100자`}
          />

          {/* 버전정보 테이블 */}
          <Box>
            <Typography variant="body2" sx={styles.modalLabel}>버전정보</Typography>
            <TableContainer component={Paper} sx={styles.versionTable}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={styles.versionHeaderCell}>ID</TableCell>
                    <TableCell sx={styles.versionHeaderCell}>버전</TableCell>
                    <TableCell sx={styles.versionHeaderCell}>유형</TableCell>
                    <TableCell sx={styles.versionHeaderCell}>변경사항</TableCell>
                    <TableCell sx={styles.versionHeaderCell}>생성시간</TableCell>
                    <TableCell sx={styles.versionHeaderCell}>생성자</TableCell>
                    <TableCell sx={styles.versionHeaderCell}>수정자</TableCell>
                    <TableCell sx={styles.versionHeaderCell}>수정일자</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {versionHistory.map((version, index) => (
                    <TableRow key={index}>
                      <TableCell>{version.id}</TableCell>
                      <TableCell>{version.version}</TableCell>
                      <TableCell>{version.type}</TableCell>
                      <TableCell>{version.changes}</TableCell>
                      <TableCell>{version.createdAt}</TableCell>
                      <TableCell>{version.creator}</TableCell>
                      <TableCell>{version.modifier}</TableCell>
                      <TableCell>{version.modifiedAt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Modal>
    </Layout>
  )
}

export default PromptPage
