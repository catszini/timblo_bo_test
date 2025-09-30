import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Switch,
  FormControlLabel
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const dictionaryData = [
  {
    id: 1,
    beforeWord: 'AI',
    afterWord: '인공지능',
    createdAt: '2025-08-10 09:15:21',
    modifiedAt: '2025-08-10 09:20:05',
    user: '김하늘',
    isActive: true
  },
  {
    id: 2,
    beforeWord: 'MTG',
    afterWord: '미팅',
    createdAt: '2025-08-10 08:42:10',
    modifiedAt: '2025-08-10 08:42:10',
    user: '박서준',
    isActive: true
  },
  {
    id: 3,
    beforeWord: 'KR',
    afterWord: '대한민국',
    createdAt: '2025-08-09 18:11:33',
    modifiedAt: '2025-08-09 19:05:40',
    user: '이수지',
    isActive: false
  },
  {
    id: 4,
    beforeWord: 'Mgr',
    afterWord: '매니저',
    createdAt: '2025-08-09 14:03:27',
    modifiedAt: '2025-08-09 14:10:12',
    user: '정윤호',
    isActive: true
  },
  {
    id: 5,
    beforeWord: 'ETA',
    afterWord: '도착예정시간',
    createdAt: '2025-08-09 10:55:06',
    modifiedAt: '2025-08-09 10:55:06',
    user: '최민수',
    isActive: true
  }
]

const DictionaryPage = () => {
  const [dictionaries, setDictionaries] = useState(dictionaryData)
  const [pageSize, setPageSize] = useState(10)
  const [engineType, setEngineType] = useState('기본값')
  const [beforeWordSearch, setBeforeWordSearch] = useState('')
  const [afterWordSearch, setAfterWordSearch] = useState('')
  const [userSearch, setUserSearch] = useState('')

  const handleStatusChange = (id, newStatus) => {
    setDictionaries(dictionaries.map(dict =>
      dict.id === id ? { ...dict, isActive: newStatus } : dict
    ))
  }

  const handleSearch = () => {
    console.log('Search:', { beforeWordSearch, afterWordSearch, userSearch, engineType })
  }

  return (
    <Layout className="page-dictionary dictionary-page">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">사전 관리</h1>
        </div>

        <div className="content-body">
          {/* 검색 영역 */}
          <div className="search-section">
            <div className="common-topbar">
              <div className="tb-left">
              </div>
              <div className="tb-right">
                <div className="total-count">총 {dictionaries.length}개</div>
                
                <div className="combo-select">
                  <FormControl size="small" className="condition-select">
                    <Select
                      value={pageSize}
                      onChange={(e) => setPageSize(e.target.value)}
                      variant="outlined"
                    >
                      <MenuItem value={10}>10개씩 보기</MenuItem>
                      <MenuItem value={20}>20개씩 보기</MenuItem>
                      <MenuItem value={50}>50개씩 보기</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="combo-select">
                  <FormControl size="small" className="condition-select">
                    <Select
                      value={engineType}
                      onChange={(e) => setEngineType(e.target.value)}
                      variant="outlined"
                    >
                      <MenuItem value="기본값">기본값</MenuItem>
                      <MenuItem value="STT온라인_한글(16K)">STT온라인_한글(16K)</MenuItem>
                      <MenuItem value="STT온라인_한글(8K)">STT온라인_한글(8K)</MenuItem>
                      <MenuItem value="STT온라인_영어(16K)">STT온라인_영어(16K)</MenuItem>
                      <MenuItem value="STT배치v2_한글(16K)">STT배치v2_한글(16K)</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="search-input-wrap">
                  <svg className="mag-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="11.5" cy="11.5005" r="9.5" stroke="#9CA3AF" strokeWidth="1.5" />
                    <path d="M20 20.0005L22 22.0005" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <TextField
                    className="search-input"
                    placeholder="변경 전 단어"
                    value={beforeWordSearch}
                    onChange={(e) => setBeforeWordSearch(e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </div>

                <div className="search-input-wrap">
                  <svg className="mag-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="11.5" cy="11.5005" r="9.5" stroke="#9CA3AF" strokeWidth="1.5" />
                    <path d="M20 20.0005L22 22.0005" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <TextField
                    className="search-input"
                    placeholder="변경 후 단어"
                    value={afterWordSearch}
                    onChange={(e) => setAfterWordSearch(e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </div>

                <div className="search-input-wrap">
                  <svg className="mag-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="11.5" cy="11.5005" r="9.5" stroke="#9CA3AF" strokeWidth="1.5" />
                    <path d="M20 20.0005L22 22.0005" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <TextField
                    className="search-input"
                    placeholder="사용자"
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </div>

                <Button 
                  className="search-btn"
                  variant="contained"
                  onClick={handleSearch}
                >
                  조회
                </Button>
              </div>
            </div>
          </div>

          {/* 테이블 영역 */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>변경 전 단어</th>
                  <th>변경 후 단어</th>
                  <th>생성일</th>
                  <th>최종 수정일</th>
                  <th>사용자</th>
                  <th>사용 여부</th>
                </tr>
              </thead>
              <tbody>
                {dictionaries.slice(0, pageSize).map((dict) => (
                  <tr key={dict.id}>
                    <td>{dict.beforeWord}</td>
                    <td>{dict.afterWord}</td>
                    <td>{dict.createdAt}</td>
                    <td>{dict.modifiedAt}</td>
                    <td>{dict.user}</td>
                    <td>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={dict.isActive}
                            onChange={(e) => handleStatusChange(dict.id, e.target.checked)}
                            size="small"
                            color="primary"
                          />
                        }
                        label=""
                        className="switch-control"
                      />
                    </td>
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

export default DictionaryPage
