import React, { useState, useEffect } from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import Modal from '../../../components/common/Modal'
import FormField from '../../../components/common/FormField'
import ActionButton from '../../../components/common/ActionButton'
import { styles } from './WorkspaceCreateModal.styles'

const WORKSPACE_ICON_COLORS = [
  '#F59E0B', '#3B82F6', '#EF4444', '#10B981',
  '#8B5CF6', '#F97316', '#06B6D4', '#84CC16',
  '#EC4899', '#6B7280'
]

const WorkspaceCreateModal = ({ isOpen, mode, workspaceData, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    domain: '',
    note: '',
    iconText: 'W',
    iconColor: '#F59E0B'
  })

  useEffect(() => {
    if (isOpen) {
      if (mode === 'create') {
        // 생성 모드: 랜덤 색상 설정
        const randomColor = WORKSPACE_ICON_COLORS[Math.floor(Math.random() * WORKSPACE_ICON_COLORS.length)]
        setFormData({
          name: '',
          domain: '',
          note: '',
          iconText: 'W',
          iconColor: randomColor
        })
      } else if (mode === 'edit' && workspaceData) {
        // 수정 모드: 기존 데이터 설정
        setFormData({
          name: workspaceData.name || '',
          domain: workspaceData.domain || '',
          note: workspaceData.note || '',
          iconText: workspaceData.icon || 'W',
          iconColor: workspaceData.iconColorHex || '#F59E0B'
        })
      }
    }
  }, [isOpen, mode, workspaceData])

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.domain.trim()) {
      alert('이름과 도메인은 필수 입력 항목입니다.')
      return
    }

    onSave(formData)
    onClose()
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title={mode === 'create' ? '워크스페이스 생성' : '워크스페이스 수정'}
      maxWidth="sm"
      actions={
        <>
          <ActionButton 
            onClick={onClose}
            variant="outlined"
            fullWidth
            sx={styles.cancelButton}
          >
            취소
          </ActionButton>
          <ActionButton 
            onClick={handleSubmit}
            variant="contained"
            fullWidth
            sx={styles.confirmButton}
          >
            {mode === 'create' ? '확인' : '수정'}
          </ActionButton>
        </>
      }
    >
      <Box sx={styles.avatarContainer}>
        <Avatar sx={{ ...styles.avatar, backgroundColor: formData.iconColor }}>
          {formData.iconText}
        </Avatar>
      </Box>

      <Box sx={styles.formContainer}>
        <FormField
          label="이름"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <FormField
          label="도메인"
          required
          value={formData.domain}
          onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
          error={!formData.domain.trim() && formData.domain !== ''}
          helperText={(!formData.domain.trim() && formData.domain !== '') ? '필수 입력 항목입니다.' : ''}
        />

        <FormField
          label="비고"
          multiline
          rows={3}
          value={formData.note}
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
      </Box>
    </Modal>
  )
}

export default WorkspaceCreateModal

