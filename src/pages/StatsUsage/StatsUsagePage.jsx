import React, { useState } from 'react'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Avatar,
  LinearProgress,
  Grid,
  Card,
  CardContent
} from '@mui/material'
import { BarChart } from '@mui/x-charts/BarChart'
import { PieChart } from '@mui/x-charts/PieChart'
import { LineChart } from '@mui/x-charts/LineChart'

// 차트 데이터
const chartData = {
  workspaceUsage: [
    { workspace: 'SK Telecom', users: 1245, meetings: 8567 },
    { workspace: 'SK Hynix', users: 892, meetings: 5234 },
    { workspace: 'SK Innovation', users: 1456, meetings: 9876 },
    { workspace: 'SK Energy', users: 678, meetings: 3456 },
    { workspace: 'SK C&C', users: 1123, meetings: 7654 }
  ],
  monthlyTrend: {
    months: ['1월', '2월', '3월', '4월', '5월', '6월'],
    meetings: [2400, 1398, 9800, 3908, 4800, 3800],
    users: [2400, 2210, 2290, 2000, 2181, 2500]
  },
  statusDistribution: [
    { id: 0, value: 68, label: '활성 사용자' },
    { id: 1, value: 22, label: '비활성 사용자' },
    { id: 2, value: 10, label: '휴면 사용자' }
  ]
}

const statsUsageData = [
  {
    id: 1,
    workspace: 'SK Telecom',
    workspaceColor: '#14B8A6',
    totalUsers: 1245,
    activeUsers: 987,
    activeRate: 79.3,
    totalMeetings: 8567,
    totalMinutes: 125340,
    avgMinutesPerMeeting: 14.6,
    period: '2024-01',
    storageUsed: 15.7,
    storageLimit: 50.0
  },
  {
    id: 2,
    workspace: 'SK Hynix',
    workspaceColor: '#6366F1',
    totalUsers: 876,
    activeUsers: 654,
    activeRate: 74.7,
    totalMeetings: 5234,
    totalMinutes: 89456,
    avgMinutesPerMeeting: 17.1,
    period: '2024-01',
    storageUsed: 23.4,
    storageLimit: 50.0
  },
  {
    id: 3,
    workspace: 'SK C&C',
    workspaceColor: '#F43F5E',
    totalUsers: 567,
    activeUsers: 445,
    activeRate: 78.5,
    totalMeetings: 3456,
    totalMinutes: 67890,
    avgMinutesPerMeeting: 19.6,
    period: '2024-01',
    storageUsed: 8.9,
    storageLimit: 25.0
  },
  {
    id: 4,
    workspace: 'SK Innovation',
    workspaceColor: '#10B981',
    totalUsers: 789,
    activeUsers: 623,
    activeRate: 79.0,
    totalMeetings: 4567,
    totalMinutes: 98765,
    avgMinutesPerMeeting: 21.6,
    period: '2024-01',
    storageUsed: 31.2,
    storageLimit: 50.0
  }
]

function StatsUsagePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [periodFilter, setPeriodFilter] = useState('2024-01')

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const mins = Math.floor(minutes % 60)
    return `${hours}시간 ${mins}분`
  }

  return (
    <Box sx={{ width: '100%', maxWidth: '100%' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        사용량 통계
      </Typography>

      {/* 차트 대시보드 */}
      <Grid container spacing={3} sx={{ mb: 4, width: '100%' }}>
        {/* 워크스페이스별 사용량 차트 */}
        <Grid item xs={12} lg={8}>
          <Card sx={{ height: '420px' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                워크스페이스별 사용량
              </Typography>
              <BarChart
                dataset={chartData.workspaceUsage}
                xAxis={[{ scaleType: 'band', dataKey: 'workspace' }]}
                series={[
                  { dataKey: 'users', label: '사용자 수', color: '#2563EB' },
                  { dataKey: 'meetings', label: '회의 수', color: '#10B981' }
                ]}
                height={340}
                margin={{ top: 20, right: 20, bottom: 40, left: 60 }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* 사용자 상태 분포 파이 차트 */}
        <Grid item xs={12} lg={4}>
          <Card sx={{ height: '420px' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                사용자 상태 분포
              </Typography>
              <PieChart
                series={[
                  {
                    data: chartData.statusDistribution,
                    innerRadius: 40,
                    outerRadius: 80,
                    paddingAngle: 2,
                    cornerRadius: 5
                  }
                ]}
                height={340}
                slotProps={{
                  legend: {
                    direction: 'column',
                    position: { vertical: 'bottom', horizontal: 'left' }
                  }
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* 월별 트렌드 라인 차트 */}
        <Grid item xs={12}>
          <Card sx={{ height: '380px' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                월별 사용 트렌드
              </Typography>
              <LineChart
                xAxis={[{ scaleType: 'point', data: chartData.monthlyTrend.months }]}
                series={[
                  {
                    data: chartData.monthlyTrend.meetings,
                    label: '회의 수',
                    color: '#2563EB',
                    curve: 'linear'
                  },
                  {
                    data: chartData.monthlyTrend.users,
                    label: '활성 사용자',
                    color: '#10B981',
                    curve: 'linear'
                  }
                ]}
                height={300}
                margin={{ top: 20, right: 20, bottom: 40, left: 60 }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 검색 툴바 */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          width: '100%'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ 
              fontSize: '16px', 
              fontWeight: 600, 
              color: '#292A2B',
              whiteSpace: 'nowrap'
            }}>
              총 {statsUsageData.length}개
            </Typography>
            <FormControl size="small" sx={{ minWidth: 80 }}>
              <Select
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value={10}>10개</MenuItem>
                <MenuItem value={20}>20개</MenuItem>
                <MenuItem value={50}>50개</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select
                value={periodFilter}
                onChange={(e) => setPeriodFilter(e.target.value)}
                sx={{ height: '36px' }}
              >
                <MenuItem value="2024-01">2024년 1월</MenuItem>
                <MenuItem value="2023-12">2023년 12월</MenuItem>
                <MenuItem value="2023-11">2023년 11월</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            marginLeft: 'auto'
          }}>
            <Button 
              variant="text"
              color="primary" 
              size="small"
              sx={{ 
                height: '36px'
              }}
            >
              데이터 내보내기
            </Button>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <Select
                  value="workspace"
                  sx={{ 
                    height: '36px',
                    borderRadius: 0,
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' }}}
                >
                  <MenuItem value="workspace">워크스페이스</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ width: '1px', height: '24px' }} />
              <TextField
                size="small"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ 
                  width: 200,
                  '& .MuiOutlinedInput-root': {
                    height: '36px',
                    borderRadius: 0,
                    '& fieldset': { border: 'none' },
                    '&:hover fieldset': { border: 'none' },
                    '&.Mui-focused fieldset': { border: 'none' }}}}
              />
            </Box>
            <Button 
              variant="text"
              color="primary" 
              size="small"
              sx={{ 
                height: '36px',
                minWidth: '60px'
              }}
            >
              검색
            </Button>
          </Box>
        </Box>
      </Box>

      {/* 테이블 */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>워크스페이스</TableCell>
              <TableCell>사용자 현황</TableCell>
              <TableCell>활성화율</TableCell>
              <TableCell>총 회의수</TableCell>
              <TableCell>총 회의시간</TableCell>
              <TableCell>평균 회의시간</TableCell>
              <TableCell>스토리지 사용량</TableCell>
              <TableCell>기간</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statsUsageData.map((stats) => (
              <TableRow key={stats.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar 
                      sx={{ 
                        width: 32, 
                        height: 32, 
                        backgroundColor: stats.workspaceColor,
                        fontSize: '16px',
                        fontWeight: 600
                      }}
                    >
                      S
                    </Avatar>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                      {stats.workspace}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                      {stats.activeUsers.toLocaleString()} / {stats.totalUsers.toLocaleString()}명
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
                      활성 / 전체
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: 120 }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 600, minWidth: 50 }}>
                      {stats.activeRate}%
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={stats.activeRate} 
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: stats.activeRate > 75 ? '#10B981' : stats.activeRate > 50 ? '#F59E0B' : '#EF4444'}}}
                      />
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                    {stats.totalMeetings.toLocaleString()}건
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {formatTime(stats.totalMinutes)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '14px' }}>
                    {stats.avgMinutesPerMeeting}분
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                      {stats.storageUsed}GB / {stats.storageLimit}GB
                    </Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={(stats.storageUsed / stats.storageLimit) * 100} 
                      sx={{
                        height: 4,
                        borderRadius: 2,
                        mt: 0.5,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 
                            (stats.storageUsed / stats.storageLimit) > 0.8 ? '#EF4444' : 
                            (stats.storageUsed / stats.storageLimit) > 0.6 ? '#F59E0B' : '#10B981'}}}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={stats.period}
                    size="small"
                    sx={{ color: '#0066FF' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 페이지네이션 */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 1, 
        mt: 3 
      }}>
        <Button 
          variant="outlined" 
          size="small"
          sx={{ 
            minWidth: '32px', 
            height: '32px', 
            borderColor: '#E5E5E5',
            color: '#6B7280'
          }}
        >
          ‹
        </Button>
        <Button 
          variant="text"
              color="primary"
          size="small"
          sx={{ 
            minWidth: '32px', 
            height: '32px'
          }}
        >
          1
        </Button>
        <Button 
          variant="outlined" 
          size="small"
          sx={{ 
            minWidth: '32px', 
            height: '32px', 
            borderColor: '#E5E5E5',
            color: '#6B7280'
          }}
        >
          ›
        </Button>
      </Box>
    </Box>
  )
}

export default StatsUsagePage
