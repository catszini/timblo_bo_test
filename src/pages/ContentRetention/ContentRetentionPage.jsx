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
  TextField
} from '@mui/material'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import { SaveButton, ResetButton } from '../../components/common/CommonButtons'
import { styles } from './ContentRetentionPage.styles'

const ContentRetentionPage = () => {
  const [contentRetentionPeriod, setContentRetentionPeriod] = useState('180일')
  const [voiceRetentionPeriod, setVoiceRetentionPeriod] = useState('영구')
  const [customContentValue, setCustomContentValue] = useState('')
  const [customVoiceValue, setCustomVoiceValue] = useState('')

  const retentionOptions = [
    { value: '30일', label: '30일' },
    { value: '60일', label: '60일' },
    { value: '90일', label: '90일' },
    { value: '180일', label: '180일' },
    { value: '365일', label: '365일' },
    { value: '영구', label: '영구' },
    { value: 'custom', label: '직접입력' }
  ]

  const handleContentRetentionChange = (e) => {
    const value = e.target.value
    setContentRetentionPeriod(value)
    if (value !== 'custom') {
      setCustomContentValue('')
    }
  }

  const handleVoiceRetentionChange = (e) => {
    const value = e.target.value
    setVoiceRetentionPeriod(value)
    if (value !== 'custom') {
      setCustomVoiceValue('')
    }
  }

  const handleSave = () => {
    const settings = {
      contentRetention: contentRetentionPeriod === 'custom' ? `${customContentValue}일` : contentRetentionPeriod,
      voiceRetention: voiceRetentionPeriod === 'custom' ? `${customVoiceValue}일` : voiceRetentionPeriod
    }
    console.log('컨텐츠 보존 설정 저장:', settings)
    alert('컨텐츠 보존 설정이 저장되었습니다.')
  }

  const handleReset = () => {
    setContentRetentionPeriod('180일')
    setVoiceRetentionPeriod('영구')
    setCustomContentValue('')
    setCustomVoiceValue('')
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            콘텐츠 보존 관리
          </Typography>
          <SaveButton onClick={handleSave} />
        </Box>

        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={styles.headerCell}>항목</TableCell>
                <TableCell sx={styles.headerCell}>보존 기간</TableCell>
                <TableCell sx={styles.headerCell}>설명</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* 컨텐츠 보존 기간 */}
              <TableRow>
                <TableCell sx={styles.itemCell}>
                  <Typography variant="body1" fontWeight={600}>
                    컨텐츠 보존 기간
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={styles.selectGroup}>
                    <Select
                      value={contentRetentionPeriod}
                      onChange={handleContentRetentionChange}
                      options={retentionOptions}
                      width="180px"
                    />
                    {contentRetentionPeriod === 'custom' && (
                      <TextField
                        variant="outlined"
                        size="small"
                        type="number"
                        placeholder="일수 입력"
                        value={customContentValue}
                        onChange={(e) => setCustomContentValue(e.target.value)}
                        sx={{ width: '120px' }}
                      />
                    )}
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    회의록 컨텐츠의 보존 기간을 설정합니다. 설정된 기간이 지나면 자동으로 삭제됩니다.
                  </Typography>
                </TableCell>
              </TableRow>

              {/* 음성/녹음/녹화 전사 보존 기간 */}
              <TableRow>
                <TableCell sx={styles.itemCell}>
                  <Typography variant="body1" fontWeight={600}>
                    음성/녹음/녹화 전사 보존 기간
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={styles.selectGroup}>
                    <Select
                      value={voiceRetentionPeriod}
                      onChange={handleVoiceRetentionChange}
                      options={retentionOptions}
                      width="180px"
                    />
                    {voiceRetentionPeriod === 'custom' && (
                      <TextField
                        variant="outlined"
                        size="small"
                        type="number"
                        placeholder="일수 입력"
                        value={customVoiceValue}
                        onChange={(e) => setCustomVoiceValue(e.target.value)}
                        sx={{ width: '120px' }}
                      />
                    )}
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    음성, 녹음, 녹화 파일의 전사 데이터 보존 기간을 설정합니다.
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={styles.actionButtons}>
          <ResetButton onClick={handleReset} />
          <SaveButton onClick={handleSave} />
        </Box>
      </Container>
    </Layout>
  )
}

export default ContentRetentionPage
