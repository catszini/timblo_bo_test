import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Layout from './components/Layout/Layout'
import LicenseCheck from './components/LicenseCheck'
import { setMuiLicense } from './utils/muiLicense'
import UserPage from './pages/User/UserPage'
import WorkspacePage from './pages/Workspace/WorkspacePage'
import MeetingPage from './pages/Meeting/MeetingPage'
import WorkspaceGroupSettingPage from './pages/WorkspaceGroupSetting/WorkspaceGroupSettingPage'
import SystemUserPage from './pages/System/SystemUserPage'
import MeetTemplatePage from './pages/MeetTemplate/MeetTemplatePage'
import MeetTemplateDetailPage from './pages/MeetTemplate/MeetTemplateDetailPage'
import PromptPage from './pages/Prompt/PromptPage'
import DictionaryPage from './pages/Dictionary/DictionaryPage'
import NoticePage from './pages/Notice/NoticePage'
import ConsentPage from './pages/Consent/ConsentPage'
import LoginHistoryPage from './pages/LoginHistory/LoginHistoryPage'
import DownloadHistoryPage from './pages/DownloadHistory/DownloadHistoryPage'
import UserConsentHistoryPage from './pages/UserConsentHistory/UserConsentHistoryPage'
import SettingChangeHistoryPage from './pages/SettingChangeHistory/SettingChangeHistoryPage'
import StatsUsagePage from './pages/StatsUsage/StatsUsagePage'
import SystemStatsPage from './pages/SystemStats/SystemStatsPage'
import MenuManagementPage from './pages/MenuManagement/MenuManagementPage'
import FeaturePermissionPage from './pages/FeaturePermission/FeaturePermissionPage'
import LogoManagementPage from './pages/LogoManagement/LogoManagementPage'
import ConsentDetailPage from './pages/ConsentDetail/ConsentDetailPage'
import CalendarAccessPage from './pages/CalendarAccess/CalendarAccessPage'
import NoticeDetailPage from './pages/NoticeDetail/NoticeDetailPage'

function App() {
  // MUI X Pro 라이센스 초기화
  useEffect(() => {
    setMuiLicense()
  }, [])

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <LicenseCheck />
      <Layout>
        <Routes>
          <Route path="/" element={<WorkspacePage />} />
          <Route path="/meeting" element={<MeetingPage />} />
          <Route path="/meet-template" element={<MeetTemplatePage />} />
          <Route path="/meet-template/:id" element={<MeetTemplateDetailPage />} />
          <Route path="/prompt" element={<PromptPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/consent" element={<ConsentPage />} />
          <Route path="/login-history" element={<LoginHistoryPage />} />
          <Route path="/download-history" element={<DownloadHistoryPage />} />
          <Route path="/user-consent-history" element={<UserConsentHistoryPage />} />
          <Route path="/setting-change-history" element={<SettingChangeHistoryPage />} />
          <Route path="/stats-usage" element={<StatsUsagePage />} />
          <Route path="/system-stats" element={<SystemStatsPage />} />
          <Route path="/menu-management" element={<MenuManagementPage />} />
          <Route path="/feature-permission" element={<FeaturePermissionPage />} />
          <Route path="/logo-management" element={<LogoManagementPage />} />
          <Route path="/consent/:id" element={<ConsentDetailPage />} />
          <Route path="/calendar-access" element={<CalendarAccessPage />} />
          <Route path="/notice/:id" element={<NoticeDetailPage />} />
          
          {/* 시스템 섹션 라우트 */}
          <Route path="/menu-setting" element={<MenuManagementPage />} />
          <Route path="/group-setting" element={<WorkspaceGroupSettingPage />} />
          <Route path="/system-stats-usage" element={<StatsUsagePage />} />
          <Route path="/system-stats-user" element={<SystemStatsPage />} />
          
          {/* 워크스페이스 섹션 라우트 */}
          <Route path="/workspace-permission" element={<FeaturePermissionPage />} />
          <Route path="/logo" element={<LogoManagementPage />} />
          <Route path="/calendar" element={<CalendarAccessPage />} />
          <Route path="/stats-user" element={<SystemStatsPage />} />
          
          <Route path="/user" element={<UserPage />} />
          <Route path="/workspace" element={<WorkspacePage />} />
          <Route path="/workspace-group-setting" element={<WorkspaceGroupSettingPage />} />
          <Route path="/system-user" element={<SystemUserPage />} />
        </Routes>
      </Layout>
    </Box>
  )
}

export default App
