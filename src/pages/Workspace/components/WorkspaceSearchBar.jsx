import React from 'react'
import { Box, Typography } from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import SearchBar from '../../../components/common/SearchBar'
import ActionButton from '../../../components/common/ActionButton'
import Select from '../../../components/common/Select'
import { styles } from './WorkspaceSearchBar.styles'

const WorkspaceSearchBar = ({ 
  totalWorkspaces, 
  licenseUsed, 
  licenseTotal,
  onUploadLicense,
  onDelete,
  onEdit,
  onCreate,
  onSearch,
  itemsPerPage,
  onItemsPerPageChange
}) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.topContainer}>
        {/* 왼쪽: 라이센스 정보 */}
        <Box sx={styles.leftSection}>
          <Box>
            <Typography variant="body2" sx={styles.licenseText}>
              총 워크 스페이스 갯수 : {totalWorkspaces}개
            </Typography>
            <Typography variant="body2" sx={styles.licenseText}>
              라이센스 사용 인원 : {licenseUsed}명 / {licenseTotal === 'unlimited' ? '무제한' : `${licenseTotal}명`}
            </Typography>
          </Box>
          <ActionButton 
            variant="outlined"
            startIcon={<UploadIcon />}
            onClick={onUploadLicense}
          >
            라이선스 업로드
          </ActionButton>
        </Box>

        {/* 오른쪽: 검색 및 액션 */}
        <Box sx={styles.rightSection}>
          {/* 검색 */}
          <SearchBar
            searchOptions={['전체', '워크스페이스명', '도메인', '생성자']}
            onSearch={onSearch}
          />

          {/* 액션 버튼 */}
          <Box sx={styles.actionsContainer}>
            <ActionButton 
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={onDelete}
            >
              삭제
            </ActionButton>
            <ActionButton 
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={onEdit}
            >
              수정
            </ActionButton>
            <ActionButton 
              variant="contained"
              color="success"
              startIcon={<AddIcon />}
              onClick={onCreate}
            >
              생성
            </ActionButton>
          </Box>

          {/* 페이지 크기 선택 */}
          <Select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(e.target.value)}
            options={[
              { value: 10, label: '10개씩 보기' },
              { value: 20, label: '20개씩 보기' },
              { value: 50, label: '50개씩 보기' }
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default WorkspaceSearchBar
