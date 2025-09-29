import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

// Theme & Components
import theme from './theme'
// import LicenseCheck from './components/LicenseCheck'

// Pages
import LogoManagementPage from './pages/LogoManagement/LogoManagementPage'
import UserPage from './pages/User/UserPage'
import NoticePage from './pages/Notice/NoticePage'
import DictionaryPage from './pages/Dictionary/DictionaryPage'
import MeetingPage from './pages/Meeting/MeetingPage'
import PromptPage from './pages/Prompt/PromptPage'
import StatsUsagePage from './pages/StatsUsage/StatsUsagePage'
import SystemStatsPage from './pages/SystemStats/SystemStatsPage'
import WorkspacePage from './pages/Workspace/WorkspacePage'
import SystemUserPage from './pages/SystemUser/SystemUserPage'
import SystemStatsUserPage from './pages/SystemStatsUser/SystemStatsUserPage'
import SystemStatsUsagePage from './pages/SystemStatsUsage/SystemStatsUsagePage'
import MenuSettingPage from './pages/MenuSetting/MenuSettingPage'
import GroupSettingPage from './pages/GroupSetting/GroupSettingPage'
import WorkspacePermissionPage from './pages/WorkspacePermission/WorkspacePermissionPage'
import WorkspaceGroupSettingPage from './pages/WorkspaceGroupSetting/WorkspaceGroupSettingPage'
import MeetTemplatePage from './pages/MeetTemplate/MeetTemplatePage'
import MeetTemplateDetailPage from './pages/MeetTemplate/MeetTemplateDetailPage'
import ConsentPage from './pages/Consent/ConsentPage'
import CalendarPage from './pages/Calendar/CalendarPage'
import LoginHistoryPage from './pages/LoginHistory/LoginHistoryPage'
import DownloadHistoryPage from './pages/DownloadHistory/DownloadHistoryPage'
import UserConsentHistoryPage from './pages/UserConsentHistory/UserConsentHistoryPage'
import SettingChangeHistoryPage from './pages/SettingChangeHistory/SettingChangeHistoryPage'
import StatsUserPage from './pages/StatsUser/StatsUserPage'
import ContentRetentionPage from './pages/ContentRetention/ContentRetentionPage'
import TestPage from './pages/Test/TestPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<WorkspacePage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/logo" element={<LogoManagementPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/dictionary" element={<DictionaryPage />} />
            <Route path="/meeting" element={<MeetingPage />} />
            <Route path="/prompt" element={<PromptPage />} />
            <Route path="/stats-usage" element={<StatsUsagePage />} />
            <Route path="/system-stats" element={<SystemStatsPage />} />
            <Route path="/workspace" element={<WorkspacePage />} />
            <Route path="/system-user" element={<SystemUserPage />} />
            <Route path="/system-stats-user" element={<SystemStatsUserPage />} />
            <Route path="/system-stats-usage" element={<SystemStatsUsagePage />} />
            <Route path="/menu-setting" element={<MenuSettingPage />} />
            <Route path="/group-setting" element={<GroupSettingPage />} />
            <Route path="/workspace-permission" element={<WorkspacePermissionPage />} />
            <Route path="/workspace-group-setting" element={<WorkspaceGroupSettingPage />} />
            <Route path="/meet-template" element={<MeetTemplatePage />} />
            <Route path="/meet-template-detail" element={<MeetTemplateDetailPage />} />
            <Route path="/consent" element={<ConsentPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/login-history" element={<LoginHistoryPage />} />
            <Route path="/download-history" element={<DownloadHistoryPage />} />
            <Route path="/user-consent-history" element={<UserConsentHistoryPage />} />
            <Route path="/setting-change-history" element={<SettingChangeHistoryPage />} />
            <Route path="/stats-user" element={<StatsUserPage />} />
            <Route path="/system-setting-history" element={<SettingChangeHistoryPage />} />
            <Route path="/content-retention" element={<ContentRetentionPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
