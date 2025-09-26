import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  ButtonGroup
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const ConsentPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Layout className="page-consent">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">동의서 관리</h1>
        </div>
        <div className="content-body">
          <div className="search-section">
            <div className="common-topbar">
              <div className="tb-left">
                <span className="total-count">총 5개</span>
              </div>
              <div className="tb-right">
                <TextField
                  placeholder="동의서명을 입력해주세요."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  variant="outlined"
                  size="small"
                />
                <Button variant="contained">조회</Button>
                <button className="new-button">생성</button>
              </div>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>동의서명</th>
                  <th>버전</th>
                  <th>필수여부</th>
                  <th>사용여부</th>
                  <th>생성일</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>개인정보 수집 이용 동의</td>
                  <td>v1.2</td>
                  <td>필수</td>
                  <td>
                    <FormControlLabel
                      control={<Switch size="small" defaultChecked color="primary" />}
                      label=""
                    />
                  </td>
                  <td>2024-02-20</td>
                  <td>
                    <ButtonGroup variant="outlined" size="small">
                      <Button 
                        sx={{ 
                          color: 'primary.main',
                          borderColor: 'primary.main',
                          '&:hover': { 
                            bgcolor: 'primary.light',
                            color: 'white',
                            borderColor: 'primary.main'
                          }
                        }}
                      >
                        수정
                      </Button>
                      <Button 
                        sx={{ 
                          color: 'error.main', 
                          borderColor: 'error.main',
                          '&:hover': { 
                            bgcolor: 'error.light',
                            color: 'white',
                            borderColor: 'error.main'
                          }
                        }}
                      >
                        삭제
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ConsentPage
