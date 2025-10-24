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
  Paper,
  Switch,
  FormControlLabel
} from '@mui/material'
import Layout from '../../components/Layout/Layout'
import FormField from '../../components/common/FormField'
import { SaveButton } from '../../components/common/CommonButtons'
import Checkbox from '../../components/common/Checkbox'
import { styles } from './WorkspacePermissionPage.styles'

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

  // 기능 데이터
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
      description: '녹음 관련 기능을 전체적으로 활성화하거나 비활성화합니다.',
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
      description: '클립보드 복사 기능을 활성화합니다.',
      type: 'toggle',
      value: permissions.clipboardCopy
    },
    {
      id: 'reSummarize',
      name: '재요약',
      description: '재요약 기능을 활성화합니다.',
      type: 'toggle',
      value: permissions.reSummarize
    },
    {
      id: 'template',
      name: '템플릿',
      description: '템플릿 관련 기능을 활성화합니다.',
      type: 'toggle',
      value: permissions.template
    },
    {
      id: 'documentDownload',
      name: '회의록 다운로드',
      description: '회의록 다운로드 기능을 활성화합니다.',
      type: 'toggle',
      value: permissions.documentDownload
    },
    {
      id: 'documentDownloadOptions',
      name: '회의록 다운로드 옵션',
      description: '다운로드 시 포함할 항목을 선택합니다.',
      type: 'checkbox-group',
      options: [
        { id: 'fullSummary', label: '전체요약', checked: permissions.documentDownloadOptions.fullSummary },
        { id: 'separate', label: '분리요약', checked: permissions.documentDownloadOptions.separate },
        { id: 'highlight', label: '하이라이트', checked: permissions.documentDownloadOptions.highlight },
        { id: 'note', label: '메모', checked: permissions.documentDownloadOptions.note },
        { id: 'transcript', label: '발화록', checked: permissions.documentDownloadOptions.transcript }
      ]
    },
    {
      id: 'mediaDownloadOptions',
      name: '미디어 다운로드 옵션',
      description: '다운로드 가능한 파일 형식을 선택합니다.',
      type: 'checkbox-group',
      options: [
        { id: 'txtDownload', label: 'TXT', checked: permissions.mediaDownloadOptions.txtDownload },
        { id: 'pdfDownload', label: 'PDF', checked: permissions.mediaDownloadOptions.pdfDownload },
        { id: 'docxDownload', label: 'DOCX', checked: permissions.mediaDownloadOptions.docxDownload },
        { id: 'hwpDownload', label: 'HWP', checked: permissions.mediaDownloadOptions.hwpDownload }
      ]
    }
  ]

  const handleToggleChange = (id) => {
    setPermissions(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const handleInputChange = (id, value) => {
    setPermissions(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleCheckboxGroupChange = (groupId, optionId) => {
    setPermissions(prev => ({
      ...prev,
      [groupId]: {
        ...prev[groupId],
        [optionId]: !prev[groupId][optionId]
      }
    }))
  }

  const handleSave = () => {
    console.log('저장:', permissions)
    alert('설정이 저장되었습니다.')
  }

  const renderControl = (feature) => {
    if (feature.type === 'input') {
      return (
        <FormField
          value={feature.value}
          onChange={(e) => handleInputChange(feature.id, e.target.value)}
          size="small"
          sx={styles.input}
        />
      )
    }

    if (feature.type === 'toggle') {
      return (
        <FormControlLabel
          control={
            <Switch
              checked={feature.value}
              onChange={() => handleToggleChange(feature.id)}
              color="primary"
            />
          }
          label=""
        />
      )
    }

    if (feature.type === 'checkbox-group') {
      return (
        <Box sx={styles.checkboxGroup}>
          {feature.options.map(option => (
            <FormControlLabel
              key={option.id}
              control={
                <Checkbox
                  checked={option.checked}
                  onChange={() => handleCheckboxGroupChange(feature.id, option.id)}
                  size="small"
                />
              }
              label={option.label}
            />
          ))}
        </Box>
      )
    }

    return null
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            기능 권한 관리
          </Typography>
          <SaveButton onClick={handleSave} />
        </Box>

        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={styles.headerCell}>기능</TableCell>
                <TableCell sx={styles.headerCell}>권한 설명</TableCell>
                <TableCell sx={styles.headerCell}>사용 설정</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {featureData.map((feature) => (
                <TableRow key={feature.id} hover>
                  <TableCell sx={styles.nameCell}>
                    <Typography variant="body2" sx={styles.featureName}>
                      {feature.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={styles.description}>
                      {feature.description}
                    </Typography>
                  </TableCell>
                  <TableCell sx={styles.controlCell}>
                    {renderControl(feature)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Layout>
  )
}

export default WorkspacePermissionPage
