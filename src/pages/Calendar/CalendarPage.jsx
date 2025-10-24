import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Paper,
  Switch,
  Avatar
} from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import Layout from '../../components/Layout/Layout'
import Select from '../../components/common/Select'
import { styles } from './CalendarPage.styles'

const CalendarPage = () => {
  const [googleCalendarEnabled, setGoogleCalendarEnabled] = useState(true)
  const [outlookCalendarEnabled, setOutlookCalendarEnabled] = useState(true)
  const [syncPeriod, setSyncPeriod] = useState('매일')

  const syncPeriodOptions = [
    { value: '매일', label: '매일' },
    { value: '1주일', label: '1주일' },
    { value: '2주일', label: '2주일' },
    { value: '1개월', label: '1개월' }
  ]

  return (
    <Layout>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            캘린더 관리/설정
          </Typography>
        </Box>

        {/* 외부 캘린더 연동 섹션 */}
        <Paper sx={styles.section}>
          <Typography variant="h6" sx={styles.sectionTitle}>
            외부 캘린더 연동
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            외부 캘린더를 연동하여 예정된 회의를 자동으로 인식하고 관리합니다. 
            연동된 정보는 회의 전 및 <strong>회의 중</strong> 활용에 사용됩니다.
          </Typography>

          <Box sx={styles.calendarList}>
            {/* Google Calendar */}
            <Box sx={styles.calendarItem}>
              <Box sx={styles.calendarInfo}>
                <Avatar
                  sx={styles.calendarAvatar}
                  src="/asset/google-calendar-icon.png"
                  alt="Google Calendar"
                >
                  <CalendarMonthIcon />
                </Avatar>
                <Typography variant="body1" fontWeight={500}>
                  Google 캘린더
                </Typography>
              </Box>
              <Switch
                checked={googleCalendarEnabled}
                onChange={(e) => setGoogleCalendarEnabled(e.target.checked)}
                size="small"
                color="primary"
              />
            </Box>

            {/* Microsoft Outlook */}
            <Box sx={styles.calendarItem}>
              <Box sx={styles.calendarInfo}>
                <Avatar
                  sx={styles.calendarAvatar}
                  src="/asset/outlook-calendar-icon.png"
                  alt="Microsoft Outlook"
                >
                  <CalendarMonthIcon />
                </Avatar>
                <Typography variant="body1" fontWeight={500}>
                  Microsoft Outlook
                </Typography>
              </Box>
              <Switch
                checked={outlookCalendarEnabled}
                onChange={(e) => setOutlookCalendarEnabled(e.target.checked)}
                size="small"
                color="primary"
              />
            </Box>
          </Box>
        </Paper>

        {/* 외부 캘린더 동기화 주기 섹션 */}
        <Paper sx={styles.section}>
          <Typography variant="h6" sx={styles.sectionTitle}>
            외부 캘린더 동기화 주기
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            외부 캘린더를 동기화하는 주기를 선택합니다.
          </Typography>

          <Select
            value={syncPeriod}
            onChange={(e) => setSyncPeriod(e.target.value)}
            options={syncPeriodOptions}
            width="200px"
          />
        </Paper>
      </Container>
    </Layout>
  )
}

export default CalendarPage
