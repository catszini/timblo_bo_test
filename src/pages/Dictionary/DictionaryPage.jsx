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
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import ActionButton from '../../components/common/ActionButton'
import { SearchButton } from '../../components/common/CommonButtons'
import Checkbox from '../../components/common/Checkbox'
import Pagination from '../../components/common/Pagination'
import { styles } from './DictionaryPage.styles'

const DictionaryPage = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [beforeWordSearch, setBeforeWordSearch] = useState('')
  const [afterWordSearch, setAfterWordSearch] = useState('')
  const [userSearch, setUserSearch] = useState('')
  const [engineType, setEngineType] = useState('전체')
  const [currentPage, setCurrentPage] = useState(1)

  const dictionaryData = [
    {
      id: 1,
      beforeWord: '웨어러블',
      afterWord: 'Wearable',
      user: '이상우',
      engineType: 'STT',
      timestamp: '2025-08-08 13:48:39'
    },
    {
      id: 2,
      beforeWord: '인공지능',
      afterWord: 'AI',
      user: 'june',
      engineType: 'GPT',
      timestamp: '2025-08-08 12:57:49'
    },
    {
      id: 3,
      beforeWord: '데이터베이스',
      afterWord: 'Database',
      user: '김민지',
      engineType: 'STT',
      timestamp: '2025-08-07 16:22:15'
    },
    {
      id: 4,
      beforeWord: '프로젝트',
      afterWord: 'Project',
      user: '박성호',
      engineType: 'GPT',
      timestamp: '2025-08-07 10:45:32'
    }
  ]

  const engineTypeOptions = [
    { value: '전체', label: '전체' },
    { value: 'STT', label: 'STT' },
    { value: 'GPT', label: 'GPT' }
  ]

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectAll(true)
      setSelectedRows(dictionaryData.map(item => item.id))
    } else {
      setSelectAll(false)
      setSelectedRows([])
    }
  }

  const handleRowCheckbox = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

  const handleSearch = () => {
    console.log('Search:', { beforeWordSearch, afterWordSearch, userSearch, engineType })
  }

  const handleAdd = () => {
    alert('사전 항목 추가 기능')
  }

  const handleDelete = () => {
    if (selectedRows.length === 0) {
      alert('삭제할 항목을 선택해주세요.')
      return
    }
    if (window.confirm(`선택한 ${selectedRows.length}개의 항목을 삭제하시겠습니까?`)) {
      alert(`${selectedRows.length}개의 항목이 삭제되었습니다.`)
      setSelectedRows([])
      setSelectAll(false)
    }
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            사전 관리
          </Typography>
          <Box sx={styles.headerActions}>
            <ActionButton
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              삭제
            </ActionButton>
            <ActionButton
              variant="contained"
              color="success"
              startIcon={<AddIcon />}
              onClick={handleAdd}
            >
              추가
            </ActionButton>
          </Box>
        </Box>

        {/* 검색 툴바 */}
        <Box sx={styles.searchToolbar}>
          <Box sx={styles.leftSection}>
            <Typography variant="body2" sx={styles.totalCount}>
              총 {dictionaryData.length}개
            </Typography>
          </Box>

          <Box sx={styles.rightSection}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="변경 전 단어"
              value={beforeWordSearch}
              onChange={(e) => setBeforeWordSearch(e.target.value)}
              sx={styles.searchInput}
            />
            <TextField
              variant="outlined"
              size="small"
              placeholder="변경 후 단어"
              value={afterWordSearch}
              onChange={(e) => setAfterWordSearch(e.target.value)}
              sx={styles.searchInput}
            />
            <TextField
              variant="outlined"
              size="small"
              placeholder="사용자 검색"
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              sx={styles.searchInput}
            />
            <Select
              value={engineType}
              onChange={(e) => setEngineType(e.target.value)}
              options={engineTypeOptions}
              width="120px"
            />
            <SearchButton onClick={handleSearch} />
          </Box>
        </Box>

        {/* 테이블 */}
        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" sx={styles.headerCell}>
                  <Checkbox checked={selectAll} onChange={handleSelectAll} />
                </TableCell>
                <TableCell sx={styles.headerCell}>변경 전 단어</TableCell>
                <TableCell sx={styles.headerCell}>변경 후 단어</TableCell>
                <TableCell sx={styles.headerCell}>사용자</TableCell>
                <TableCell sx={styles.headerCell}>엔진 종류</TableCell>
                <TableCell sx={styles.headerCell}>등록 시간</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dictionaryData.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRows.includes(item.id)}
                      onChange={() => handleRowCheckbox(item.id)}
                    />
                  </TableCell>
                  <TableCell>{item.beforeWord}</TableCell>
                  <TableCell>{item.afterWord}</TableCell>
                  <TableCell>{item.user}</TableCell>
                  <TableCell>{item.engineType}</TableCell>
                  <TableCell>{item.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* 페이지네이션 */}
        <Box sx={styles.paginationContainer}>
          <Pagination
            currentPage={currentPage}
            totalPages={3}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export default DictionaryPage
