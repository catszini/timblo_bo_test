import React, { useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  Grid,
  Chip,
  Button,
  Divider,
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material'
import { 
  ArrowBack, 
  Edit, 
  Delete, 
  Share, 
  Print, 
  Visibility, 
  Comment,
  ThumbUp,
  Bookmark,
  Schedule
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const noticeDetail = {
  id: 1,
  title: 'AI 회의록 시스템 업데이트 안내 (v2.1)',
  content: `# AI 회의록 시스템 업데이트 안내

안녕하세요, SK 계열사 AI 회의록 시스템 관리팀입니다.

## 📋 업데이트 개요
2024년 1월 20일(토) 오전 2:00 - 6:00 동안 시스템 업데이트를 진행합니다.

## ✨ 주요 개선사항

### 1. AI 음성 인식 정확도 향상
- 한국어 음성 인식 정확도 95% → 98%로 개선
- 다화자 구분 기능 강화
- 배경 잡음 제거 알고리즘 업데이트

### 2. 실시간 번역 기능 추가
- 영어 ↔ 한국어 실시간 번역 지원
- 중국어, 일본어 번역 기능 베타 버전 출시

### 3. 회의 템플릿 확장
- 20개 신규 템플릿 추가
- 업종별 맞춤 템플릿 제공
- 사용자 정의 템플릿 생성 도구 개선

### 4. 보안 강화
- 종단간 암호화(E2E) 적용
- 다단계 인증(MFA) 옵션 추가
- 감사 로그 기능 강화

## 🚀 신규 기능

### 캘린더 연동
- Google 캘린더, Outlook 연동 지원
- 회의 일정 자동 동기화
- 참석자 자동 초대 기능

### 모바일 앱 출시
- iOS/Android 네이티브 앱 출시
- 오프라인 녹음 및 동기화 지원
- 푸시 알림 기능

## ⚠️ 주의사항

1. **업데이트 기간 중 서비스 중단**
   - 2024.01.20 (토) 02:00 - 06:00
   - 약 4시간 동안 접속 불가

2. **브라우저 캐시 삭제 필요**
   - 업데이트 후 Ctrl+F5로 새로고침
   - 모바일은 앱 재시작 권장

3. **데이터 백업**
   - 중요한 회의록은 미리 다운로드 권장
   - 시스템 복구 시 최대 24시간 이전 데이터로 복원

## 📞 문의사항

기술 지원팀: support@aiminute.co.kr
전화: 02-1234-5678 (평일 09:00-18:00)

업데이트에 대한 자세한 내용은 첨부된 릴리스 노트를 참고해 주세요.

감사합니다.

**AI 회의록 시스템 관리팀**`,
  category: '시스템',
  importance: '높음',
  status: '게시중',
  publishDate: '2024-01-15',
  publishTime: '14:30',
  viewCount: 1247,
  likeCount: 89,
  commentCount: 23,
  author: '김공지',
  authorEmail: 'kim.notice@sktelecom.com',
  authorRole: '시스템관리자',
  lastModified: '2024-01-15 16:45',
  tags: ['업데이트', '시스템', '중요', 'AI'],
  attachments: [
    {
      name: 'release_notes_v2.1.pdf',
      size: '2.3MB',
      downloadCount: 156
    },
    {
      name: 'update_guide.pdf',
      size: '1.8MB',
      downloadCount: 89
    }
  ]
}

const comments = [
  {
    id: 1,
    userName: '이사용자',
    userRole: '사용자',
    content: '업데이트 정보 감사합니다. 음성 인식 정확도 향상이 기대되네요!',
    timestamp: '2024-01-15 15:20',
    likes: 12,
    replies: []
  },
  {
    id: 2,
    userName: '박관리자',
    userRole: '관리자',
    content: '모바일 앱 출시 일정도 함께 공지해주실 수 있나요?',
    timestamp: '2024-01-15 15:45',
    likes: 8,
    replies: [
      {
        id: 21,
        userName: '김공지',
        userRole: '시스템관리자',
        content: '모바일 앱은 2024년 2월 첫째 주에 출시 예정입니다. 별도 공지 예정입니다.',
        timestamp: '2024-01-15 16:10',
        likes: 15
      }
    ]
  },
  {
    id: 3,
    userName: '최질문',
    userRole: '사용자',
    content: '업데이트 중에도 긴급하게 회의록이 필요한 경우는 어떻게 해야 하나요?',
    timestamp: '2024-01-15 16:30',
    likes: 5,
    replies: []
  }
]

function NoticeDetailPage() {
  const navigate = useNavigate()
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  const handleBack = () => {
    navigate('/notice')
  }

  const handleLike = () => {
    setLiked(!liked)
  }

  const handleBookmark = () => {
    setBookmarked(!bookmarked)
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      // 댓글 추가 로직
      setNewComment('')
    }
  }

  return (
    <Box>
      {/* 헤더 */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={handleBack} sx={{ mr: 2 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
          공지사항 상세
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size="small" onClick={handleLike} color={liked ? 'primary' : 'default'}>
            <ThumbUp />
          </IconButton>
          <IconButton size="small" onClick={handleBookmark} color={bookmarked ? 'warning' : 'default'}>
            <Bookmark />
          </IconButton>
          <IconButton size="small">
            <Share />
          </IconButton>
          <IconButton size="small">
            <Print />
          </IconButton>
          <Button
            variant="outlined"
            startIcon={<Edit />}
            onClick={() => setEditDialogOpen(true)}
            size="small"
          >
            수정
          </Button>
          <Button
            variant="outlined"
            startIcon={<Delete />}
            color="error"
            size="small"
          >
            삭제
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* 왼쪽: 공지사항 내용 */}
        <Grid item xs={12} md={8}>
          {/* 공지사항 헤더 */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip 
                  label={noticeDetail.category}
                  size="small"
                  sx={{ color: '#0066FF' }}
                />
                <Chip 
                  label={noticeDetail.importance}
                  size="small"
                  color={noticeDetail.importance === '높음' ? 'error' : 'default'}
                />
                <Chip 
                  label={noticeDetail.status}
                  size="small"
                  color="success"
                />
                {noticeDetail.tags.map((tag) => (
                  <Chip 
                    key={tag}
                    label={`#${tag}`}
                    size="small"
                    variant="outlined"
                  />
                ))}
              </Box>
              
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                {noticeDetail.title}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Avatar color="primary"
              sx={{width: 40, height: 40}}>
                  {noticeDetail.author[0]}
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 500 }}>
                    {noticeDetail.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {noticeDetail.authorRole}
                  </Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    발행일: {noticeDetail.publishDate} {noticeDetail.publishTime}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    최종 수정: {noticeDetail.lastModified}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Visibility sx={{ fontSize: 16, color: '#6B7280' }} />
                  <Typography variant="body2" color="text.secondary">
                    {noticeDetail.viewCount.toLocaleString()}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ThumbUp sx={{ fontSize: 16, color: '#6B7280' }} />
                  <Typography variant="body2" color="text.secondary">
                    {noticeDetail.likeCount}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Comment sx={{ fontSize: 16, color: '#6B7280' }} />
                  <Typography variant="body2" color="text.secondary">
                    {noticeDetail.commentCount}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>

          {/* 공지사항 내용 */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography component="div" sx={{ 
              fontSize: '16px', 
              lineHeight: 1.8,
              whiteSpace: 'pre-wrap',
              '& h1': { fontSize: '24px', fontWeight: 600, mb: 2, mt: 3 },
              '& h2': { fontSize: '20px', fontWeight: 600, mb: 1.5, mt: 2 },
              '& h3': { fontSize: '18px', fontWeight: 600, mb: 1, mt: 2 },
              '& strong': { fontWeight: 600 },
              '& ul': { pl: 2 },
              '& li': { mb: 0.5 }
            }}>
              {noticeDetail.content}
            </Typography>
          </Paper>

          {/* 첨부파일 */}
          {noticeDetail.attachments.length > 0 && (
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>첨부파일</Typography>
              <List>
                {noticeDetail.attachments.map((file, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Box sx={{ 
                        width: 32, 
                        height: 32,
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Typography sx={{ fontSize: '10px', fontWeight: 600, color: '#0066FF' }}>
                          PDF
                        </Typography>
                      </Box>
                    </ListItemIcon>
                    <ListItemText
                      primary={file.name}
                      secondary={`${file.size} • 다운로드 ${file.downloadCount}회`}
                    />
                    <Button variant="outlined" size="small">
                      다운로드
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}

          {/* 댓글 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              댓글 ({comments.length})
            </Typography>

            {/* 댓글 작성 */}
            <Box sx={{ mb: 3, p: 2, borderRadius: 1 }}>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="댓글을 입력하세요..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button 
                  variant="text"
                  onClick={handleAddComment}
                  disabled={!newComment.trim()}
                >
                  댓글 작성
                </Button>
              </Box>
            </Box>

            {/* 댓글 목록 */}
            <List>
              {comments.map((comment) => (
                <React.Fragment key={comment.id}>
                  <ListItem sx={{ px: 0, alignItems: 'flex-start' }}>
                    <Avatar sx={{ mr: 2, mt: 0.5, width: 32, height: 32 }}>
                      {comment.userName[0]}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>
                          {comment.userName}
                        </Typography>
                        <Chip 
                          label={comment.userRole}
                          size="small"
                          sx={{ height: 16, fontSize: '10px' }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {comment.timestamp}
                        </Typography>
                      </Box>
                      <Typography sx={{ mb: 1, fontSize: '14px' }}>
                        {comment.content}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton size="small">
                          <ThumbUp sx={{ fontSize: 14 }} />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary">
                          {comment.likes}
                        </Typography>
                        <Button size="small" sx={{ fontSize: '12px' }}>
                          답글
                        </Button>
                      </Box>
                      
                      {/* 답글 */}
                      {comment.replies.map((reply) => (
                        <Box key={reply.id} sx={{ ml: 4, mt: 2, p: 2, borderRadius: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                            <Avatar sx={{ width: 24, height: 24 }}>
                              {reply.userName[0]}
                            </Avatar>
                            <Typography sx={{ fontWeight: 500, fontSize: '13px' }}>
                              {reply.userName}
                            </Typography>
                            <Chip 
                              label={reply.userRole}
                              size="small"
                              sx={{ height: 14, fontSize: '9px' }}
                            />
                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                              {reply.timestamp}
                            </Typography>
                          </Box>
                          <Typography sx={{ fontSize: '13px', mb: 1 }}>
                            {reply.content}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton size="small">
                              <ThumbUp sx={{ fontSize: 12 }} />
                            </IconButton>
                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '11px' }}>
                              {reply.likes}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </ListItem>
                  <Divider sx={{ my: 2 }} />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* 오른쪽: 관련 정보 */}
        <Grid item xs={12} md={4}>
          {/* 작성자 정보 */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>작성자 정보</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar color="primary"
              sx={{width: 48, height: 48}}>
                  {noticeDetail.author[0]}
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 500 }}>
                    {noticeDetail.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {noticeDetail.authorRole}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {noticeDetail.authorEmail}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* 관련 공지사항 */}
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>관련 공지사항</Typography>
              <List dense>
                                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Schedule sx={{ fontSize: 20, color: '#0066FF' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="정기 점검 안내 (1월)"
                      secondary="2024-01-10"
                      primaryTypographyProps={{ fontSize: '14px' }}
                      secondaryTypographyProps={{ fontSize: '12px' }}
                    />
                  </ListItem>
                                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Schedule sx={{ fontSize: 20, color: '#0066FF' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="보안 정책 업데이트"
                      secondary="2024-01-05"
                      primaryTypographyProps={{ fontSize: '14px' }}
                      secondaryTypographyProps={{ fontSize: '12px' }}
                    />
                  </ListItem>
                                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Schedule sx={{ fontSize: 20, color: '#0066FF' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="신규 기능 안내"
                      secondary="2023-12-28"
                      primaryTypographyProps={{ fontSize: '14px' }}
                      secondaryTypographyProps={{ fontSize: '12px' }}
                    />
                  </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 수정 다이얼로그 */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>공지사항 수정</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="제목"
                defaultValue={noticeDetail.title}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                select
                label="카테고리"
                defaultValue={noticeDetail.category}
                SelectProps={{ native: true }}
              >
                <option value="시스템">시스템</option>
                <option value="서비스">서비스</option>
                <option value="점검">점검</option>
                <option value="기타">기타</option>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                select
                label="중요도"
                defaultValue={noticeDetail.importance}
                SelectProps={{ native: true }}
              >
                <option value="높음">높음</option>
                <option value="보통">보통</option>
                <option value="낮음">낮음</option>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={15}
                label="내용"
                defaultValue={noticeDetail.content}
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
    </Box>
  )
}

export default NoticeDetailPage
