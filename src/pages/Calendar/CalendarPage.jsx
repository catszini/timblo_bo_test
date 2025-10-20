import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  Switch
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

const CalendarPage = () => {
  const [googleCalendarEnabled, setGoogleCalendarEnabled] = useState(true)
  const [outlookCalendarEnabled, setOutlookCalendarEnabled] = useState(true)
  const [syncPeriod, setSyncPeriod] = useState('매일')

  const handleSyncPeriodChange = (event) => {
    setSyncPeriod(event.target.value)
  }

  return (
    <Layout className="page-calendar">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">캘린더 관리/설정</h1>
        </div>
        <div className="content-body">
          {/* 외부 캘린더 연동 섹션 */}
          <div className="calendar-settings-section">
            <h3>외부 캘린더 연동</h3>
            <p>외부 캘린더를 연동하여 예정된 회의를 자동으로 인식하고 관리합니다. 연동된 정보 정보는 회의 전 및 <strong>회의중</strong> 활용에 사용됩니다.</p>

            <div className="calendar-integration-list">
              <div className="calendar-item">
                <div className="calendar-logo">
                  <img src="/asset/google-calendar-icon.png" alt="Google Calendar" />
                  <span>Google 캘린더</span>
                </div>
                <Switch
                  checked={googleCalendarEnabled}
                  onChange={(e) => setGoogleCalendarEnabled(e.target.checked)}
                  size="small"
                  color="primary"
                />
              </div>

              <div className="calendar-item">
                <div className="calendar-logo">
                  <img src="/asset/outlook-calendar-icon.png" alt="Microsoft Outlook" />
                  <span>Microsoft Outlook</span>
                </div>
                <Switch
                  checked={outlookCalendarEnabled}
                  onChange={(e) => setOutlookCalendarEnabled(e.target.checked)}
                  size="small"
                  color="primary"
                />
              </div>
            </div>
          </div>

          {/* 외부 캘린더 동기화 주기 섹션 */}
          <div className="calendar-settings-section">
            <h3>외부 캘린더 동기화 주기</h3>
            <p>외부 캘린더를 동기화 하는 주기를 선택합니다.</p>

            <div className="combo-select">
              <FormControl size="small" sx={{ minWidth: 200 }}>
                <Select
                  value={syncPeriod}
                  onChange={handleSyncPeriodChange}
                  variant="outlined"
                  displayEmpty
                >
                  <MenuItem value="">선택해 주세요</MenuItem>
                  <MenuItem value="매일">매일</MenuItem>
                  <MenuItem value="1주일">1주일</MenuItem>
                  <MenuItem value="2주일">2주일</MenuItem>
                  <MenuItem value="1개월">1개월</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CalendarPage
