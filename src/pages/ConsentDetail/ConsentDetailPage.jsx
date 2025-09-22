import React, { useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  Grid,
  Chip,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material'
import { ArrowBack, Edit, Download, History, Person, Check, Close } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const consentDetail = {
  id: 1,
  title: '개인정보 수집 및 이용 동의서',
  version: 'v2.1',
  type: '필수',
  status: '활성',
  publishDate: '2024-01-15',
  effectiveDate: '2024-01-15',
  expiryDate: '2025-01-15',
  description: 'AI 회의록 서비스 이용을 위한 개인정보 수집 및 이용에 대한 동의서입니다.',
  creator: '김법무',
  modifier: '이컴플라이언스',
  lastModified: '2024-01-15 14:30',
  totalUsers: 1250,
  agreedUsers: 1189,
  rejectedUsers: 45,
  pendingUsers: 16,
  agreementRate: 95.1,
  content: `# 개인정보 수집 및 이용 동의서

## 1. 개인정보 수집 항목
- 필수항목: 이름, 이메일, 회사명, 부서
- 선택항목: 전화번호, 프로필 사진

## 2. 수집 및 이용 목적
- 서비스 제공 및 이용자 식별
- 고객 상담 및 불만 처리
- 서비스 개선 및 신규 서비스 개발

## 3. 보유 및 이용 기간
- 서비스 이용 기간 + 1년
- 관련 법령에 따른 보존 의무 기간

## 4. 동의 거부 권리
귀하는 개인정보 수집 및 이용에 대해 거부할 권리가 있습니다.
다만, 필수항목에 대한 동의를 거부할 경우 서비스 이용에 제한이 있을 수 있습니다.`
}

const agreementHistory = [
  {
    id: 1,
    userName: '김동의',
    email: 'kim.agree@sktelecom.com',
    workspace: 'SK Telecom',
    workspaceColor: '#14B8A6',
    action: '동의',
    actionTime: '2024-01-15 14:32:15',
    ipAddress: '192.168.1.101'
  },
  {
    id: 2,
    userName: '이거부',
    email: 'lee.refuse@skhynix.com',
    workspace: 'SK Hynix',
    workspaceColor: '#6366F1',
    action: '거부',
    actionTime: '2024-01-15 11:20:44',
    ipAddress: '192.168.1.205'
  },
  {
    id: 3,
    userName: '박재동의',
    email: 'park.reagree@skcc.com',
    workspace: 'SK C&C',
    workspaceColor: '#F43F5E',
    action: '재동의',
    actionTime: '2024-01-15 09:15:22',
    ipAddress: '192.168.1.78'
  },
  {
    id: 4,
    userName: '최철회',
    email: 'choi.withdraw@skinnovation.com',
    workspace: 'SK Innovation',
    workspaceColor: '#10B981',
    action: '동의철회',
    actionTime: '2024-01-14 16:45:33',
    ipAddress: '192.168.1.156'
  }
]

const versionHistory = [
  {
    version: 'v2.1',
    publishDate: '2024-01-15',
    changes: '개인정보 보유기간 명시 추가',
    publisher: '이컴플라이언스',
    status: '현재'
  },
  {
    version: 'v2.0',
    publishDate: '2023-12-01',
    changes: '선택항목 추가 (전화번호, 프로필 사진)',
    publisher: '김법무',
    status: '이전'
  },
  {
    version: 'v1.0',
    publishDate: '2023-06-01',
    changes: '최초 작성',
    publisher: '김법무',
    status: '이전'
  }
]

function ConsentDetailPage() {
  const navigate = useNavigate()
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [historyDialogOpen, setHistoryDialogOpen] = useState(false)

  const handleBack = () => {
    navigate('/consent')
  }

  return (
    <Box>
      {/* 헤더 */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={handleBack} sx={{ mr: 2 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
          동의서 상세정보
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<History />}
            onClick={() => setHistoryDialogOpen(true)}
            size="small"
          >
            버전 이력
          </Button>
          <Button
            variant="outlined"
            startIcon={<Download />}
            size="small"
          >
            다운로드
          </Button>
          <Button
            variant="text"
            startIcon={<Edit />}
            onClick={() => setEditDialogOpen(true)}
            sx={{
            }}
            size="small"
          >
            수정
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* 왼쪽: 동의서 정보 */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>기본 정보</Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>제목</Typography>
                <Typography variant="body2" color="text.secondary">{consentDetail.title}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>버전</Typography>
                <Chip label={consentDetail.version} size="small" sx={{ color: '#0066FF' }} />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>타입</Typography>
                <Chip 
                  label={consentDetail.type} 
                  size="small" 
                  color={consentDetail.type === '필수' ? 'error' : 'default'}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>상태</Typography>
                <Chip label={consentDetail.status} size="small" color="success" />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>발행일</Typography>
                <Typography variant="body2" color="text.secondary">{consentDetail.publishDate}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>시행일</Typography>
                <Typography variant="body2" color="text.secondary">{consentDetail.effectiveDate}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>만료일</Typography>
                <Typography variant="body2" color="text.secondary">{consentDetail.expiryDate}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>작성자</Typography>
                <Typography variant="body2" color="text.secondary">{consentDetail.creator}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>최종 수정자</Typography>
                <Typography variant="body2" color="text.secondary">{consentDetail.modifier}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>설명</Typography>
                <Typography variant="body2" color="text.secondary">{consentDetail.description}</Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* 동의서 내용 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>동의서 내용</Typography>
            <Paper sx={{ p: 2, border: '1px solid #E5E5E5' }}>
              <Typography component="pre" sx={{ 
                fontFamily: 'inherit', 
                fontSize: '14px', 
                whiteSpace: 'pre-wrap',
                margin: 0,
                lineHeight: 1.6
              }}>
                {consentDetail.content}
              </Typography>
            </Paper>
          </Paper>
        </Grid>

        {/* 오른쪽: 통계 및 이력 */}
        <Grid item xs={12} md={4}>
          {/* 동의 통계 */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>동의 현황</Typography>
              
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">전체 사용자</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {consentDetail.totalUsers.toLocaleString()}명
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ color: '#10B981' }}>동의</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#10B981' }}>
                    {consentDetail.agreedUsers.toLocaleString()}명
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ color: '#EF4444' }}>거부</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#EF4444' }}>
                    {consentDetail.rejectedUsers.toLocaleString()}명
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="body2" sx={{ color: '#F59E0B' }}>대기</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#F59E0B' }}>
                    {consentDetail.pendingUsers.toLocaleString()}명
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>동의율</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#10B981' }}>
                    {consentDetail.agreementRate}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={consentDetail.agreementRate} 
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    '& .MuiLinearProgress-bar': {
                    }}}
                />
              </Box>
            </CardContent>
          </Card>

          {/* 최근 동의 이력 */}
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>최근 동의 이력</Typography>
              
              <List dense>
                {agreementHistory.slice(0, 5).map((history) => (
                  <ListItem key={history.id} sx={{ px: 0 }}>
                    <Avatar 
                      sx={{ 
                        width: 32, 
                        height: 32, 
                        backgroundColor: history.workspaceColor,
                        fontSize: '12px',
                        fontWeight: 600,
                        mr: 2
                      }}
                    >
                      S
                    </Avatar>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                            {history.userName}
                          </Typography>
                          <Chip 
                            label={history.action}
                            size="small"
                            color={
                              history.action === '동의' || history.action === '재동의' ? 'success' : 'error'
                            }
                            sx={{ height: 20, fontSize: '11px' }}
                          />
                        </Box>
                      }
                      secondary={
                        <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
                          {history.actionTime}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>

              <Button 
                fullWidth 
                variant="outlined" 
                size="small" 
                sx={{ mt: 2 }}
                onClick={() => navigate('/user-consent-history')}
              >
                전체 이력 보기
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 수정 다이얼로그 */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>동의서 수정 - {consentDetail.title}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>제목</Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue={consentDetail.title}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>타입</Typography>
              <TextField
                fullWidth
                size="small"
                select
                defaultValue={consentDetail.type}
                SelectProps={{ native: true }}
              >
                <option value="필수">필수</option>
                <option value="선택">선택</option>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>만료일</Typography>
              <TextField
                fullWidth
                size="small"
                type="date"
                defaultValue={consentDetail.expiryDate}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>설명</Typography>
              <TextField
                fullWidth
                size="small"
                multiline
                rows={2}
                defaultValue={consentDetail.description}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}>동의서 내용</Typography>
              <TextField
                fullWidth
                multiline
                rows={15}
                defaultValue={consentDetail.content}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    fontFamily: 'monospace',
                    fontSize: '14px'
                  }
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>취소</Button>
          <Button variant="text">저장</Button>
        </DialogActions>
      </Dialog>

      {/* 버전 이력 다이얼로그 */}
      <Dialog open={historyDialogOpen} onClose={() => setHistoryDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>버전 이력 - {consentDetail.title}</DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>버전</TableCell>
                  <TableCell>발행일</TableCell>
                  <TableCell>변경사항</TableCell>
                  <TableCell>발행자</TableCell>
                  <TableCell>상태</TableCell>
                  <TableCell>관리</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {versionHistory.map((version) => (
                  <TableRow key={version.version}>
                    <TableCell>
                      <Chip 
                        label={version.version} 
                        size="small" 
                        color={version.status === '현재' ? 'primary' : 'default'}
                      />
                    </TableCell>
                    <TableCell>{version.publishDate}</TableCell>
                    <TableCell>{version.changes}</TableCell>
                    <TableCell>{version.publisher}</TableCell>
                    <TableCell>
                      <Chip 
                        label={version.status} 
                        size="small"
                        color={version.status === '현재' ? 'success' : 'default'}
                      />
                    </TableCell>
                    <TableCell>
                      <Button variant="outlined" size="small">복원</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setHistoryDialogOpen(false)}>닫기</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ConsentDetailPage
