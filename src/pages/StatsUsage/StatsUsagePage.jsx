import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

const StatsUsagePage = () => {
  const [periodType, setPeriodType] = useState('monthly')
  const [selectedMonth, setSelectedMonth] = useState('2024-10')
  const [selectedYear, setSelectedYear] = useState('2024')

  // 월간 데이터
  const monthlyData = [
    { date: '2024-10-01', sessions: 245, users: 156, duration: '02:34:12' },
    { date: '2024-10-02', sessions: 198, users: 132, duration: '01:58:43' },
    { date: '2024-10-03', sessions: 287, users: 178, duration: '03:12:56' },
    { date: '2024-10-04', sessions: 165, users: 98, duration: '01:23:45' },
    { date: '2024-10-05', sessions: 234, users: 145, duration: '02:45:31' }
  ]

  // 연간 데이터
  const yearlyData = [
    { month: '1월', sessions: 2450, users: 1560, duration: '254:12:34' },
    { month: '2월', sessions: 2198, users: 1320, duration: '198:43:21' },
    { month: '3월', sessions: 2870, users: 1780, duration: '312:56:45' },
    { month: '4월', sessions: 1650, users: 980, duration: '123:45:12' },
    { month: '5월', sessions: 2340, users: 1450, duration: '245:31:56' }
  ]

  // 탭 전환 핸들러
  const handleTabChange = (type) => {
    setPeriodType(type)
  }

  // 조회 핸들러
  const handleSearch = () => {
    console.log(`${periodType} 데이터 조회:`, periodType === 'monthly' ? selectedMonth : selectedYear)
  }

  // 엑셀 다운로드 핸들러
  const handleExcelDownload = () => {
    alert(`${periodType === 'monthly' ? '월간' : '연간'} 사용 통계 데이터를 다운로드합니다.`)
  }

  return (
    <Layout className="page-stats-usage">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">워크스페이스 사용 통계</h1>
        </div>

        <div className="content-body">
          {/* 기간 선택 탭 */}
          <div className="period-tabs" style={{ marginBottom: '24px' }}>
            <div style={{ borderBottom: '1px solid #E5E7EB' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                <button 
                  className={`tab-button ${periodType === 'monthly' ? 'active' : ''}`}
                  onClick={() => handleTabChange('monthly')}
                  style={{
                    padding: '12px 24px',
                    background: periodType === 'monthly' ? '#1976d2' : '#F8F9FA',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: periodType === 'monthly' ? '#fff' : '#6b7280',
                    borderRadius: '8px 8px 0 0',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (periodType !== 'monthly') {
                      e.target.style.color = '#1976d2'
                      e.target.style.background = 'rgba(25, 118, 210, 0.04)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (periodType !== 'monthly') {
                      e.target.style.color = '#6b7280'
                      e.target.style.background = '#F8F9FA'
                    }
                  }}
                >
                  월간
                </button>
                <button 
                  className={`tab-button ${periodType === 'yearly' ? 'active' : ''}`}
                  onClick={() => handleTabChange('yearly')}
                  style={{
                    padding: '12px 24px',
                    background: periodType === 'yearly' ? '#1976d2' : '#F8F9FA',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: periodType === 'yearly' ? '#fff' : '#6b7280',
                    borderRadius: '8px 8px 0 0',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (periodType !== 'yearly') {
                      e.target.style.color = '#1976d2'
                      e.target.style.background = 'rgba(25, 118, 210, 0.04)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (periodType !== 'yearly') {
                      e.target.style.color = '#6b7280'
                      e.target.style.background = '#F8F9FA'
                    }
                  }}
                >
                  연간
                </button>
              </div>
            </div>
          </div>

          {/* 검색 조건 */}
          <div className="search-section" style={{ 
            padding: '20px', 
            backgroundColor: '#F8F9FA', 
            borderRadius: '8px', 
            marginBottom: '24px' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>기간:</span>
              
              {periodType === 'monthly' ? (
                <input 
                  type="month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              ) : (
                <select 
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value="2024">2024년</option>
                  <option value="2023">2023년</option>
                  <option value="2022">2022년</option>
                </select>
              )}

              <button 
                className="search-btn"
                onClick={handleSearch}
                style={{
                  padding: '8px 16px',
                  background: '#3B82F6',
                  color: 'white',
                  border: '1px solid #3B82F6',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#2563EB'
                  e.target.style.borderColor = '#2563EB'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#3B82F6'
                  e.target.style.borderColor = '#3B82F6'
                }}
              >
                조회
              </button>

              <button 
                className="excel-btn"
                onClick={handleExcelDownload}
                style={{
                  padding: '8px 16px',
                  background: '#10B981',
                  color: 'white',
                  border: '1px solid #10B981',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#059669'
                  e.target.style.borderColor = '#059669'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#10B981'
                  e.target.style.borderColor = '#10B981'
                }}
              >
                Excel 다운로드
              </button>
            </div>
          </div>

          {/* 결과 텍스트 */}
          <div className="result-text" style={{ marginBottom: '16px', fontSize: '14px', color: '#6B7280' }}>
            {periodType === 'monthly' 
              ? `${selectedMonth.replace('-', '년 ')}월 사용 통계`
              : `${selectedYear}년 사용 통계`
            }
          </div>

          {/* 통계 테이블 */}
          <div className="table-container">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F8F9FA' }}>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'left', 
                    borderBottom: '2px solid #E5E7EB',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    {periodType === 'monthly' ? '날짜' : '월'}
                  </th>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'center', 
                    borderBottom: '2px solid #E5E7EB',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    세션 수
                  </th>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'center', 
                    borderBottom: '2px solid #E5E7EB',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    사용자 수
                  </th>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'center', 
                    borderBottom: '2px solid #E5E7EB',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    총 사용 시간
                  </th>
                </tr>
              </thead>
              <tbody>
                {(periodType === 'monthly' ? monthlyData : yearlyData).map((item, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ 
                      padding: '12px 16px', 
                      fontSize: '14px', 
                      color: '#111827'
                    }}>
                      {periodType === 'monthly' ? item.date : item.month}
                    </td>
                    <td style={{ 
                      padding: '12px 16px', 
                      textAlign: 'center', 
                      fontSize: '14px', 
                      color: '#111827'
                    }}>
                      {item.sessions.toLocaleString()}
                    </td>
                    <td style={{ 
                      padding: '12px 16px', 
                      textAlign: 'center', 
                      fontSize: '14px', 
                      color: '#111827'
                    }}>
                      {item.users.toLocaleString()}
                    </td>
                    <td style={{ 
                      padding: '12px 16px', 
                      textAlign: 'center', 
                      fontSize: '14px', 
                      color: '#111827'
                    }}>
                      {item.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 요약 통계 */}
          <div className="summary-stats" style={{ 
            marginTop: '32px', 
            padding: '24px', 
            backgroundColor: '#F8F9FA', 
            borderRadius: '8px' 
          }}>
            <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600', color: '#111827' }}>
              통계 요약
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#3B82F6', marginBottom: '4px' }}>
                  {(periodType === 'monthly' ? monthlyData : yearlyData)
                    .reduce((sum, item) => sum + item.sessions, 0)
                    .toLocaleString()}
                </div>
                <div style={{ fontSize: '14px', color: '#6B7280' }}>총 세션</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#10B981', marginBottom: '4px' }}>
                  {(periodType === 'monthly' ? monthlyData : yearlyData)
                    .reduce((sum, item) => sum + item.users, 0)
                    .toLocaleString()}
                </div>
                <div style={{ fontSize: '14px', color: '#6B7280' }}>총 사용자</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#F59E0B', marginBottom: '4px' }}>
                  {periodType === 'monthly' ? '12:34:56' : '1,234:56:78'}
                </div>
                <div style={{ fontSize: '14px', color: '#6B7280' }}>평균 사용시간</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default StatsUsagePage