import React from 'react'
import ActionButton from '../ActionButton'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CancelIcon from '@mui/icons-material/Close'
import UploadIcon from '@mui/icons-material/Upload'
import DownloadIcon from '@mui/icons-material/Download'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import RefreshIcon from '@mui/icons-material/Refresh'

// 조회 버튼
export const SearchButton = ({ onClick, ...props }) => (
  <ActionButton
    variant="outlined"
    color="primary"
    onClick={onClick}
    {...props}
  >
    조회
  </ActionButton>
)

// 생성 버튼
export const CreateButton = ({ onClick, ...props }) => (
  <ActionButton
    variant="outlined"
    color="success"
    startIcon={<AddIcon />}
    onClick={onClick}
    {...props}
  >
    생성
  </ActionButton>
)

// 저장 버튼
export const SaveButton = ({ onClick, ...props }) => (
  <ActionButton
    variant="outlined"
    color="primary"
    onClick={onClick}
    {...props}
  >
    저장
  </ActionButton>
)

// 수정 버튼
export const EditButton = ({ onClick, ...props }) => (
  <ActionButton
    variant="outlined"
    color="primary"
    onClick={onClick}
    {...props}
  >
    수정
  </ActionButton>
)

// 삭제 버튼
export const DeleteButton = ({ onClick, ...props }) => (
  <ActionButton
    variant="outlined"
    color="error"
    onClick={onClick}
    {...props}
  >
    삭제
  </ActionButton>
)

// 취소 버튼
export const CancelButton = ({ onClick, ...props }) => (
  <ActionButton
    variant="outlined"
    onClick={onClick}
    {...props}
  >
    취소
  </ActionButton>
)

// 초대 버튼
export const InviteButton = ({ onClick, ...props }) => (
  <ActionButton
    variant="outlined"
    color="success"
    startIcon={<PersonAddIcon />}
    onClick={onClick}
    {...props}
  >
    초대
  </ActionButton>
)

// 파일 업로드 버튼
export const FileUploadButton = ({ onClick, ...props }) => (
  <ActionButton
    variant="outlined"
    color="success"
    startIcon={<UploadIcon />}
    onClick={onClick}
    {...props}
  >
    파일업로드
  </ActionButton>
)

// 엑셀 다운로드 버튼
export const ExcelDownloadButton = ({ onClick, ...props }) => (
  <ActionButton
    variant="outlined"
    color="success"
    startIcon={<FileDownloadIcon />}
    onClick={onClick}
    {...props}
  >
    엑셀 다운로드
  </ActionButton>
)

// 다운로드 버튼
export const DownloadButton = ({ onClick, children = '다운로드', ...props }) => (
  <ActionButton
    variant="outlined"
    color="success"
    startIcon={<DownloadIcon />}
    onClick={onClick}
    {...props}
  >
    {children}
  </ActionButton>
)

// 초기화 버튼
export const ResetButton = ({ onClick, ...props }) => (
  <ActionButton
    variant="outlined"
    onClick={onClick}
    {...props}
  >
    초기화
  </ActionButton>
)

// 추가 버튼
export const AddButton = ({ onClick, children = '추가', ...props }) => (
  <ActionButton
    variant="outlined"
    color="primary"
    onClick={onClick}
    {...props}
  >
    {children}
  </ActionButton>
)

