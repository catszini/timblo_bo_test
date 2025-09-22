import React, { useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  Button,
  Switch,
  FormControlLabel,
  Card,
  CardContent,
  Grid
} from '@mui/material'

const calendarIntegrations = [
  { id: 'google', name: 'Google 캘린더', icon: '📅', isEnabled: true },
  { id: 'outlook', name: 'Outlook 캘린더', icon: '📅', isEnabled: false },
  { id: 'apple', name: 'Apple 캘린더', icon: '📅', isEnabled: false }
]

function CalendarAccessPage() {
  const [integrations, setIntegrations] = useState(calendarIntegrations)

  const handleToggleIntegration = (id) => {
    setIntegrations(prev => 
      prev.map(item => 
        item.id === id ? { ...item, isEnabled: !item.isEnabled } : item
      )
    )
  }

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        캘린더 관리
      </Typography>

      {/* 외부 캘린더 연동 섹션 */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            외부 캘린더 연동
          </Typography>
          
          <Typography sx={{ fontSize: '14px', color: '#6B7280', mb: 3, lineHeight: 1.6 }}>
            외부 캘린더를 연동하여 예정된 회의를 자동으로 인식하고 관리합니다. 연동된 정보는 회의 전 및{' '}
            <strong>회의중</strong> 활용에 사용됩니다.
          </Typography>

          {/* 캘린더 연동 목록 */}
          <Grid container spacing={2}>
            {integrations.map((calendar) => (
              <Grid item xs={12} md={6} lg={4} key={calendar.id}>
                <Paper sx={{ 
                  p: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  border: '1px solid #E5E5E5'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography sx={{ fontSize: '24px' }}>
                      {calendar.icon}
                    </Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                      {calendar.name}
                    </Typography>
                  </Box>
                  
                  <Switch
                    checked={calendar.isEnabled}
                    onChange={() => handleToggleIntegration(calendar.id)}
                    size="small"
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* 연동 설정 */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            연동 설정
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControlLabel
              control={<Switch defaultChecked size="small" />}
              label={
                <Typography sx={{ fontSize: '14px' }}>
                  회의 시작 15분 전 자동 알림
                </Typography>
              }
            />
            
            <FormControlLabel
              control={<Switch defaultChecked size="small" />}
              label={
                <Typography sx={{ fontSize: '14px' }}>
                  캘린더 이벤트 자동 동기화
                </Typography>
              }
            />
            
            <FormControlLabel
              control={<Switch defaultChecked={false} size="small" />}
              label={
                <Typography sx={{ fontSize: '14px' }}>
                  회의록 완료 시 캘린더에 자동 첨부
                </Typography>
              }
            />
          </Box>
        </CardContent>
      </Card>

      {/* 저장 버튼 */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button 
          variant="contained" 
          sx={{ 
            fontSize: '14px',
            minWidth: '100px',
            height: '40px'
          }}
        >
          설정 저장
        </Button>
      </Box>
    </Box>
  )
}

export default CalendarAccessPage