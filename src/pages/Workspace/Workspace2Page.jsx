import React, { useState } from 'react'
import { Container, Box, Typography } from '@mui/material'
import Layout from '../../components/Layout/Layout'
import Pagination from '../../components/common/Pagination'
import WorkspaceSearchBar from './components/WorkspaceSearchBar'
import WorkspaceTable from './components/WorkspaceTable'
import WorkspaceCreateModal from './components/WorkspaceCreateModal'
import WorkspaceDeleteModal from './components/WorkspaceDeleteModal'
import { styles } from './Workspace2Page.styles'

const Workspace2Page = () => {
  // 초기 워크스페이스 데이터
  const [workspaces, setWorkspaces] = useState([
    {
      id: 1,
      name: 'SK Telecom',
      icon: 'S',
      iconColor: 'color-teal',
      iconColorHex: '#14B8A6',
      domain: 'www.sktelecom.ai',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 1, owner: 1, admin: 0, member: 0 },
      createdAt: '2025-09-01 14:30:15',
      note: ''
    },
    {
      id: 2,
      name: 'SK Hynix',
      icon: 'S',
      iconColor: 'color-indigo',
      iconColorHex: '#6366F1',
      domain: 'www.skhynix.com',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 8, owner: 0, admin: 1, member: 5 },
      createdAt: '2025-08-15 09:22:43',
      note: ''
    },
    {
      id: 3,
      name: 'SK On',
      icon: 'S',
      iconColor: 'color-rose',
      iconColorHex: '#F43F5E',
      domain: 'www.sk-on.com',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 3, owner: 0, admin: 0, member: 2 },
      createdAt: '2025-07-20 16:45:28',
      note: ''
    },
    {
      id: 4,
      name: 'SK C&C',
      icon: 'S',
      iconColor: 'color-amber',
      iconColorHex: '#F59E0B',
      domain: 'www.skcc.com',
      creator: 'jwpark12',
      memberCount: 1000,
      userStatus: { total: 15, owner: 0, admin: 3, member: 11 },
      createdAt: '2025-09-05 11:18:52',
      note: ''
    },
    {
      id: 5,
      name: 'SK Innovation',
      icon: 'S',
      iconColor: 'color-blue',
      iconColorHex: '#3B82F6',
      domain: 'www.skinnovation.com',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 2, owner: 0, admin: 0, member: 1 },
      createdAt: '2025-08-30 13:07:19',
      note: ''
    },
    {
      id: 6,
      name: 'SK Networks',
      icon: 'S',
      iconColor: 'color-emerald',
      iconColorHex: '#10B981',
      domain: 'www.sknetworks.co.kr',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 1, owner: 0, admin: 1, member: 0 },
      createdAt: '2025-06-10 08:42:17',
      note: ''
    },
    {
      id: 7,
      name: 'SK Materials',
      icon: 'S',
      iconColor: 'color-violet',
      iconColorHex: '#8B5CF6',
      domain: 'www.skmaterials.com',
      creator: '홍길동',
      memberCount: 1000,
      userStatus: { total: 1, owner: 0, admin: 1, member: 0 },
      createdAt: '2025-09-01 10:15:33',
      note: ''
    },
    {
      id: 8,
      name: 'SK Biopharm',
      icon: 'S',
      iconColor: 'color-rose',
      iconColorHex: '#F43F5E',
      domain: 'www.skbiopharm.com',
      creator: '김영희',
      memberCount: 120,
      userStatus: { total: 1, owner: 0, admin: 1, member: 0 },
      createdAt: '2025-09-12 15:28:04',
      note: ''
    },
    {
      id: 9,
      name: 'SK E&S',
      icon: 'S',
      iconColor: 'color-cyan',
      iconColorHex: '#06B6D4',
      domain: 'www.skens.com',
      creator: '이민준',
      memberCount: 1000,
      userStatus: { total: 1, owner: 0, admin: 1, member: 0 },
      createdAt: '2025-05-25 12:55:41',
      note: ''
    },
    {
      id: 10,
      name: 'SK Shieldus',
      icon: 'S',
      iconColor: 'color-lime',
      iconColorHex: '#84CC16',
      domain: 'www.skshieldus.com',
      creator: '박서준',
      memberCount: 1000,
      userStatus: { total: 1, owner: 0, admin: 1, member: 0 },
      createdAt: '2025-09-18 17:33:26',
      note: ''
    }
  ])

  const [selectedIds, setSelectedIds] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  
  // 모달 상태
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState('create') // 'create' or 'edit'
  const [editingWorkspace, setEditingWorkspace] = useState(null)
  const [deletingWorkspace, setDeletingWorkspace] = useState(null)

  // 전체 선택/해제
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(workspaces.map(w => w.id))
    } else {
      setSelectedIds([])
    }
  }

  // 개별 선택
  const handleSelectRow = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  // 구성원 수 변경
  const handleCountChange = (id, newCount) => {
    setWorkspaces(workspaces.map(w => 
      w.id === id ? { ...w, memberCount: newCount } : w
    ))
  }

  // 생성 버튼
  const handleCreate = () => {
    setModalMode('create')
    setEditingWorkspace(null)
    setIsCreateModalOpen(true)
  }

  // 수정 버튼
  const handleEdit = () => {
    if (selectedIds.length === 0) {
      alert('수정할 워크스페이스를 선택해주세요.')
      return
    }
    if (selectedIds.length > 1) {
      alert('한 번에 하나의 워크스페이스만 수정할 수 있습니다.')
      return
    }

    const workspace = workspaces.find(w => w.id === selectedIds[0])
    setModalMode('edit')
    setEditingWorkspace(workspace)
    setIsCreateModalOpen(true)
  }

  // 삭제 버튼
  const handleDelete = () => {
    if (selectedIds.length === 0) {
      alert('삭제할 워크스페이스를 선택해주세요.')
      return
    }
    if (selectedIds.length > 1) {
      alert('한 번에 하나의 워크스페이스만 삭제할 수 있습니다.')
      return
    }

    const workspace = workspaces.find(w => w.id === selectedIds[0])
    setDeletingWorkspace(workspace)
    setIsDeleteModalOpen(true)
  }

  // 워크스페이스 저장 (생성/수정)
  const handleSaveWorkspace = (formData) => {
    if (modalMode === 'create') {
      const newWorkspace = {
        id: Math.max(...workspaces.map(w => w.id)) + 1,
        name: formData.name,
        icon: formData.iconText,
        iconColor: 'color-custom',
        iconColorHex: formData.iconColor,
        domain: formData.domain,
        creator: '홍길동',
        memberCount: 0,
        userStatus: { total: 1, owner: 1, admin: 0, member: 0 },
        createdAt: new Date().toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).replace(/\. /g, '-').replace('.', ''),
        note: formData.note
      }
      setWorkspaces([...workspaces, newWorkspace])
      alert(`워크스페이스 "${formData.name}"이 생성되었습니다.`)
    } else {
      setWorkspaces(workspaces.map(w => 
        w.id === editingWorkspace.id 
          ? { ...w, name: formData.name, domain: formData.domain, note: formData.note }
          : w
      ))
      alert(`워크스페이스 "${formData.name}"이 수정되었습니다.`)
      setSelectedIds([])
    }
  }

  // 워크스페이스 삭제 확인
  const handleConfirmDelete = () => {
    setWorkspaces(workspaces.filter(w => w.id !== deletingWorkspace.id))
    alert(`워크스페이스 "${deletingWorkspace.name}"가 삭제되었습니다.`)
    setSelectedIds([])
    setDeletingWorkspace(null)
  }

  // 검색
  const handleSearch = (searchType, keyword) => {
    console.log('검색:', searchType, keyword)
    // 실제로는 API 호출이나 필터링 로직 구현
  }

  // 라이센스 업로드
  const handleUploadLicense = () => {
    alert('라이센스 업로드 기능')
  }

  const totalLicenseUsed = workspaces.reduce((sum, w) => sum + w.userStatus.total, 0)

  return (
    <Layout className="page-workspace">
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            워크스페이스 관리
          </Typography>
        </Box>

        <Box>
          <WorkspaceSearchBar
            totalWorkspaces={workspaces.length}
            licenseUsed={totalLicenseUsed}
            licenseTotal="unlimited"
            onUploadLicense={handleUploadLicense}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onCreate={handleCreate}
            onSearch={handleSearch}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={setItemsPerPage}
          />

          <WorkspaceTable
            workspaces={workspaces}
            selectedIds={selectedIds}
            onSelectAll={handleSelectAll}
            onSelectRow={handleSelectRow}
            onCountChange={handleCountChange}
          />

          <Pagination 
            count={3} 
            page={currentPage}
            onChange={(e, page) => setCurrentPage(page)}
          />
        </Box>
      </Container>

      <WorkspaceCreateModal
        isOpen={isCreateModalOpen}
        mode={modalMode}
        workspaceData={editingWorkspace}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleSaveWorkspace}
      />

      <WorkspaceDeleteModal
        isOpen={isDeleteModalOpen}
        workspace={deletingWorkspace}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </Layout>
  )
}

export default Workspace2Page

