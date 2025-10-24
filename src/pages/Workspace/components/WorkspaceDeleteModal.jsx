import React, { useState, useEffect } from 'react'
import { Box, Avatar, Typography, Alert } from '@mui/material'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import Modal from '../../../components/common/Modal'
import FormField from '../../../components/common/FormField'
import ActionButton from '../../../components/common/ActionButton'
import { styles } from './WorkspaceDeleteModal.styles'

const WorkspaceDeleteModal = ({ isOpen, workspace, onClose, onConfirm }) => {
  const [confirmName, setConfirmName] = useState('')

  useEffect(() => {
    if (isOpen) {
      setConfirmName('')
    }
  }, [isOpen])

  const handleConfirm = () => {
    if (confirmName === workspace?.name) {
      onConfirm()
      onClose()
    }
  }

  if (!workspace) return null

  const isNameMatch = confirmName === workspace.name

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="워크스페이스 삭제"
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
            onClick={handleConfirm}
            variant="contained"
            color="error"
            disabled={!isNameMatch}
            fullWidth
            sx={styles.deleteButton}
          >
            삭제
          </ActionButton>
        </>
      }
    >
      <Box sx={styles.infoCard}>
        <Avatar sx={{ ...styles.avatar, backgroundColor: workspace.iconColorHex }}>
          {workspace.icon}
        </Avatar>
        <Box>
          <Typography variant="h6" sx={styles.workspaceName}>
            {workspace.name}
          </Typography>
          <Typography variant="body2" sx={styles.domain}>
            {workspace.domain}
          </Typography>
          {workspace.note && (
            <Typography variant="caption" sx={styles.note}>
              {workspace.note}
            </Typography>
          )}
        </Box>
      </Box>

      <Typography variant="body2" sx={styles.warningText}>
        삭제를 원하시면 워크스페이스의 이름을 입력해주세요.
      </Typography>

      <Box sx={styles.inputContainer}>
        <FormField
          label="이름"
          placeholder={workspace.name}
          value={confirmName}
          onChange={(e) => setConfirmName(e.target.value)}
          autoFocus
        />
      </Box>

      <Alert 
        severity="error" 
        icon={<WarningAmberIcon />}
        sx={styles.alert}
      >
        <Typography variant="body2">
          워크스페이스를 삭제하면 <strong>모든 콘텐츠가 영구적으로 삭제되며 복구가 불가능</strong>합니다.
        </Typography>
      </Alert>
    </Modal>
  )
}

export default WorkspaceDeleteModal

