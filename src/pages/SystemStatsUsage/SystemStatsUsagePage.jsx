import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box
} from '@mui/material'
import Layout from '../../components/Layout/Layout'

// HTML과 동일한 워크스페이스별 월간 데이터
const monthlyStatsData = [
  // SK Telecom
  {
    workspace: { name: 'SK Telecom', icon: 'S', color: 'color-teal' },
    data: [
      { month: '2025.01', sttRequests: '38건', sttRequestTime: '16:22:18', sttSuccess: '36건', sttSuccessTime: '15:45:43', sttFailed: '2건', sttFailedTime: '0:36:35', llmRequests: '32건', llmTokens: '52,840', llmSuccess: '30건', llmFailed: '2건' },
      { month: '2024.12', sttRequests: '72건', sttRequestTime: '28:45:23', sttSuccess: '68건', sttSuccessTime: '27:30:18', sttFailed: '4건', sttFailedTime: '1:15:05', llmRequests: '62건', llmTokens: '98,750', llmSuccess: '58건', llmFailed: '4건' },
      { month: '2024.11', sttRequests: '56건', sttRequestTime: '22:18:50', sttSuccess: '53건', sttSuccessTime: '21:25:35', sttFailed: '3건', sttFailedTime: '0:53:15', llmRequests: '48건', llmTokens: '78,920', llmSuccess: '45건', llmFailed: '3건' },
      { month: '2024.10', sttRequests: '28건', sttRequestTime: '15:45:12', sttSuccess: '26건', sttSuccessTime: '14:58:47', sttFailed: '2건', sttFailedTime: '0:46:25', llmRequests: '24건', llmTokens: '41,670', llmSuccess: '22건', llmFailed: '2건' },
      { month: '2024.09', sttRequests: '45건', sttRequestTime: '18:22:33', sttSuccess: '42건', sttSuccessTime: '17:30:18', sttFailed: '3건', sttFailedTime: '0:52:15', llmRequests: '38건', llmTokens: '62,480', llmSuccess: '35건', llmFailed: '3건' },
      { month: '2024.08', sttRequests: '32건', sttRequestTime: '12:30:45', sttSuccess: '30건', sttSuccessTime: '11:45:20', sttFailed: '2건', sttFailedTime: '0:45:25', llmRequests: '28건', llmTokens: '45,230', llmSuccess: '26건', llmFailed: '2건' }
    ],
    subtotal: { sttRequests: '271건', sttRequestTime: '123:34:41', sttSuccess: '255건', sttSuccessTime: '117:25:17', sttFailed: '16건', sttFailedTime: '6:09:24', llmRequests: '240건', llmTokens: '383,590', llmSuccess: '225건', llmFailed: '15건' }
  },
  // SK Hynix
  {
    workspace: { name: 'SK Hynix', icon: 'S', color: 'color-indigo' },
    data: [
      { month: '2025.01', sttRequests: '29건', sttRequestTime: '13:45:20', sttSuccess: '28건', sttSuccessTime: '13:20:05', sttFailed: '1건', sttFailedTime: '0:25:15', llmRequests: '26건', llmTokens: '42,380', llmSuccess: '25건', llmFailed: '1건' },
      { month: '2024.12', sttRequests: '54건', sttRequestTime: '22:18:45', sttSuccess: '51건', sttSuccessTime: '21:30:22', sttFailed: '3건', sttFailedTime: '0:48:23', llmRequests: '48건', llmTokens: '78,640', llmSuccess: '45건', llmFailed: '3건' },
      { month: '2024.11', sttRequests: '38건', sttRequestTime: '16:22:33', sttSuccess: '36건', sttSuccessTime: '15:50:18', sttFailed: '2건', sttFailedTime: '0:32:15', llmRequests: '34건', llmTokens: '55,920', llmSuccess: '32건', llmFailed: '2건' },
      { month: '2024.10', sttRequests: '42건', sttRequestTime: '18:30:45', sttSuccess: '40건', sttSuccessTime: '17:45:30', sttFailed: '2건', sttFailedTime: '0:45:15', llmRequests: '38건', llmTokens: '62,180', llmSuccess: '36건', llmFailed: '2건' },
      { month: '2024.09', sttRequests: '25건', sttRequestTime: '12:45:22', sttSuccess: '24건', sttSuccessTime: '12:15:10', sttFailed: '1건', sttFailedTime: '0:30:12', llmRequests: '22건', llmTokens: '38,750', llmSuccess: '21건', llmFailed: '1건' },
      { month: '2024.08', sttRequests: '18건', sttRequestTime: '8:15:30', sttSuccess: '17건', sttSuccessTime: '7:45:15', sttFailed: '1건', sttFailedTime: '0:30:15', llmRequests: '16건', llmTokens: '28,450', llmSuccess: '15건', llmFailed: '1건' }
    ],
    subtotal: { sttRequests: '206건', sttRequestTime: '88:07:25', sttSuccess: '196건', sttSuccessTime: '84:33:00', sttFailed: '10건', sttFailedTime: '3:34:25', llmRequests: '184건', llmTokens: '286,320', llmSuccess: '174건', llmFailed: '10건' }
  },
  // SK E&S
  {
    workspace: { name: 'SK E&S', icon: 'S', color: 'color-rose' },
    data: [
      { month: '2025.01', sttRequests: '32건', sttRequestTime: '14:52:38', sttSuccess: '31건', sttSuccessTime: '14:28:15', sttFailed: '1건', sttFailedTime: '0:24:23', llmRequests: '29건', llmTokens: '48,620', llmSuccess: '28건', llmFailed: '1건' },
      { month: '2024.12', sttRequests: '58건', sttRequestTime: '24:38:52', sttSuccess: '55건', sttSuccessTime: '23:42:30', sttFailed: '3건', sttFailedTime: '0:56:22', llmRequests: '52건', llmTokens: '85,940', llmSuccess: '49건', llmFailed: '3건' },
      { month: '2024.11', sttRequests: '41건', sttRequestTime: '18:12:25', sttSuccess: '39건', sttSuccessTime: '17:35:18', sttFailed: '2건', sttFailedTime: '0:37:07', llmRequests: '37건', llmTokens: '61,720', llmSuccess: '35건', llmFailed: '2건' },
      { month: '2024.10', sttRequests: '48건', sttRequestTime: '20:45:18', sttSuccess: '46건', sttSuccessTime: '19:58:42', sttFailed: '2건', sttFailedTime: '0:46:36', llmRequests: '44건', llmTokens: '72,560', llmSuccess: '42건', llmFailed: '2건' },
      { month: '2024.09', sttRequests: '34건', sttRequestTime: '15:28:33', sttSuccess: '32건', sttSuccessTime: '14:50:22', sttFailed: '2건', sttFailedTime: '0:38:11', llmRequests: '30건', llmTokens: '51,360', llmSuccess: '28건', llmFailed: '2건' },
      { month: '2024.08', sttRequests: '22건', sttRequestTime: '10:35:45', sttSuccess: '21건', sttSuccessTime: '10:15:30', sttFailed: '1건', sttFailedTime: '0:20:15', llmRequests: '19건', llmTokens: '32,480', llmSuccess: '18건', llmFailed: '1건' }
    ],
    subtotal: { sttRequests: '235건', sttRequestTime: '104:33:31', sttSuccess: '224건', sttSuccessTime: '100:50:37', sttFailed: '11건', sttFailedTime: '3:42:54', llmRequests: '211건', llmTokens: '352,680', llmSuccess: '200건', llmFailed: '11건' }
  },
  // SK C&C
  {
    workspace: { name: 'SK C&C', icon: 'S', color: 'color-amber' },
    data: [
      { month: '2025.01', sttRequests: '25건', sttRequestTime: '11:38:28', sttSuccess: '24건', sttSuccessTime: '11:15:30', sttFailed: '1건', sttFailedTime: '0:22:58', llmRequests: '22건', llmTokens: '38,740', llmSuccess: '21건', llmFailed: '1건' },
      { month: '2024.12', sttRequests: '46건', sttRequestTime: '20:18:55', sttSuccess: '44건', sttSuccessTime: '19:35:48', sttFailed: '2건', sttFailedTime: '0:43:07', llmRequests: '41건', llmTokens: '69,480', llmSuccess: '39건', llmFailed: '2건' },
      { month: '2024.11', sttRequests: '32건', sttRequestTime: '14:52:26', sttSuccess: '30건', sttSuccessTime: '14:22:15', sttFailed: '2건', sttFailedTime: '0:30:11', llmRequests: '28건', llmTokens: '48,350', llmSuccess: '26건', llmFailed: '2건' },
      { month: '2024.10', sttRequests: '36건', sttRequestTime: '16:28:42', sttSuccess: '34건', sttSuccessTime: '15:52:18', sttFailed: '2건', sttFailedTime: '0:36:24', llmRequests: '32건', llmTokens: '54,620', llmSuccess: '30건', llmFailed: '2건' },
      { month: '2024.09', sttRequests: '28건', sttRequestTime: '13:45:38', sttSuccess: '27건', sttSuccessTime: '13:18:22', sttFailed: '1건', sttFailedTime: '0:27:16', llmRequests: '25건', llmTokens: '42,790', llmSuccess: '24건', llmFailed: '1건' },
      { month: '2024.08', sttRequests: '15건', sttRequestTime: '7:22:15', sttSuccess: '14건', sttSuccessTime: '6:58:30', sttFailed: '1건', sttFailedTime: '0:23:45', llmRequests: '13건', llmTokens: '23,180', llmSuccess: '12건', llmFailed: '1건' }
    ],
    subtotal: { sttRequests: '182건', sttRequestTime: '84:26:24', sttSuccess: '173건', sttSuccessTime: '81:22:43', sttFailed: '9건', sttFailedTime: '3:03:41', llmRequests: '161건', llmTokens: '277,160', llmSuccess: '152건', llmFailed: '9건' }
  },
  // SK Innovation
  {
    workspace: { name: 'SK Innovation', icon: 'S', color: 'color-emerald' },
    data: [
      { month: '2025.01', sttRequests: '35건', sttRequestTime: '16:18:42', sttSuccess: '34건', sttSuccessTime: '15:48:25', sttFailed: '1건', sttFailedTime: '0:30:17', llmRequests: '32건', llmTokens: '54,620', llmSuccess: '31건', llmFailed: '1건' },
      { month: '2024.12', sttRequests: '62건', sttRequestTime: '26:48:35', sttSuccess: '59건', sttSuccessTime: '25:52:18', sttFailed: '3건', sttFailedTime: '0:56:17', llmRequests: '56건', llmTokens: '92,470', llmSuccess: '53건', llmFailed: '3건' },
      { month: '2024.11', sttRequests: '44건', sttRequestTime: '19:28:52', sttSuccess: '42건', sttSuccessTime: '18:52:38', sttFailed: '2건', sttFailedTime: '0:36:14', llmRequests: '40건', llmTokens: '67,280', llmSuccess: '38건', llmFailed: '2건' },
      { month: '2024.10', sttRequests: '52건', sttRequestTime: '22:35:47', sttSuccess: '49건', sttSuccessTime: '21:45:28', sttFailed: '3건', sttFailedTime: '0:50:19', llmRequests: '46건', llmTokens: '76,840', llmSuccess: '43건', llmFailed: '3건' },
      { month: '2024.09', sttRequests: '39건', sttRequestTime: '17:42:28', sttSuccess: '37건', sttSuccessTime: '17:08:35', sttFailed: '2건', sttFailedTime: '0:33:53', llmRequests: '35건', llmTokens: '58,920', llmSuccess: '33건', llmFailed: '2건' },
      { month: '2024.08', sttRequests: '26건', sttRequestTime: '12:15:33', sttSuccess: '25건', sttSuccessTime: '11:48:22', sttFailed: '1건', sttFailedTime: '0:27:11', llmRequests: '23건', llmTokens: '39,560', llmSuccess: '22건', llmFailed: '1건' }
    ],
    subtotal: { sttRequests: '258건', sttRequestTime: '115:10:17', sttSuccess: '246건', sttSuccessTime: '111:15:46', sttFailed: '12건', sttFailedTime: '3:54:31', llmRequests: '232건', llmTokens: '389,690', llmSuccess: '220건', llmFailed: '12건' }
  }
]

// 연간 데이터 (HTML에서 가져온 데이터)
const yearlyStatsData = [
  // SK Telecom
  {
    workspace: { name: 'SK Telecom', icon: 'S', color: 'color-teal' },
    data: [
      { year: '2025년', sttRequests: '994건', sttRequestTime: '624:30:18', sttSuccess: '948건', sttSuccessTime: '594:15:45', sttFailed: '46건', sttFailedTime: '30:14:33', llmRequests: '902건', llmTokens: '1,478,620', llmSuccess: '860건', llmFailed: '42건' },
      { year: '2024년', sttRequests: '824건', sttRequestTime: '512:18:22', sttSuccess: '785건', sttSuccessTime: '487:30:18', sttFailed: '39건', sttFailedTime: '24:48:04', llmRequests: '748건', llmTokens: '1,224,970', llmSuccess: '712건', llmFailed: '36건' },
      { year: '2023년', sttRequests: '758건', sttRequestTime: '452:30:45', sttSuccess: '720건', sttSuccessTime: '430:15:30', sttFailed: '38건', sttFailedTime: '22:15:15', llmRequests: '685건', llmTokens: '1,124,680', llmSuccess: '652건', llmFailed: '33건' },
      { year: '2022년', sttRequests: '642건', sttRequestTime: '386:22:18', sttSuccess: '612건', sttSuccessTime: '368:45:12', sttFailed: '30건', sttFailedTime: '17:37:06', llmRequests: '580건', llmTokens: '948,750', llmSuccess: '548건', llmFailed: '32건' },
      { year: '2021년', sttRequests: '486건', sttRequestTime: '298:45:30', sttSuccess: '462건', sttSuccessTime: '285:20:15', sttFailed: '24건', sttFailedTime: '13:25:15', llmRequests: '420건', llmTokens: '685,470', llmSuccess: '395건', llmFailed: '25건' }
    ],
    subtotal: { sttRequests: '3,456건', sttRequestTime: '2,081:56:22', sttSuccess: '3,280건', sttSuccessTime: '1,999:56:22', sttFailed: '196건', sttFailedTime: '82:00:00', llmRequests: '3,084건', llmTokens: '4,964,000', llmSuccess: '3,040건', llmFailed: '196건' }
  },
  // SK E&S
  {
    workspace: { name: 'SK E&S', icon: 'S', color: 'color-rose' },
    data: [
      { year: '2024년', sttRequests: '156건', sttRequestTime: '68:45:30', sttSuccess: '148건', sttSuccessTime: '65:20:15', sttFailed: '8건', sttFailedTime: '3:25:15', llmRequests: '142건', llmTokens: '234,680', llmSuccess: '135건', llmFailed: '7건' },
      { year: '2023년', sttRequests: '89건', sttRequestTime: '42:15:45', sttSuccess: '85건', sttSuccessTime: '40:30:20', sttFailed: '4건', sttFailedTime: '1:45:25', llmRequests: '78건', llmTokens: '128,950', llmSuccess: '74건', llmFailed: '4건' },
      { year: '2022년', sttRequests: '67건', sttRequestTime: '31:22:18', sttSuccess: '64건', sttSuccessTime: '29:45:30', sttFailed: '3건', sttFailedTime: '1:36:48', llmRequests: '58건', llmTokens: '95,420', llmSuccess: '55건', llmFailed: '3건' },
      { year: '2021년', sttRequests: '45건', sttRequestTime: '22:18:33', sttSuccess: '43건', sttSuccessTime: '21:15:20', sttFailed: '2건', sttFailedTime: '1:03:13', llmRequests: '39건', llmTokens: '64,280', llmSuccess: '37건', llmFailed: '2건' },
      { year: '2020년', sttRequests: '32건', sttRequestTime: '15:45:22', sttSuccess: '30건', sttSuccessTime: '14:30:15', sttFailed: '2건', sttFailedTime: '1:15:07', llmRequests: '28건', llmTokens: '46,150', llmSuccess: '26건', llmFailed: '2건' },
      { year: '2019년', sttRequests: '28건', sttRequestTime: '13:22:45', sttSuccess: '26건', sttSuccessTime: '12:45:30', sttFailed: '2건', sttFailedTime: '0:37:15', llmRequests: '24건', llmTokens: '39,680', llmSuccess: '22건', llmFailed: '2건' }
    ],
    subtotal: { sttRequests: '417건', sttRequestTime: '193:50:13', sttSuccess: '396건', sttSuccessTime: '184:07:30', sttFailed: '21건', sttFailedTime: '9:42:43', llmRequests: '369건', llmTokens: '609,160', llmSuccess: '349건', llmFailed: '20건' }
  },
  // SK C&C
  {
    workspace: { name: 'SK C&C', icon: 'S', color: 'color-amber' },
    data: [
      { year: '2024년', sttRequests: '198건', sttRequestTime: '85:30:45', sttSuccess: '189건', sttSuccessTime: '81:15:30', sttFailed: '9건', sttFailedTime: '4:15:15', llmRequests: '175건', llmTokens: '289,450', llmSuccess: '168건', llmFailed: '7건' },
      { year: '2023년', sttRequests: '134건', sttRequestTime: '58:22:18', sttSuccess: '128건', sttSuccessTime: '55:45:20', sttFailed: '6건', sttFailedTime: '2:36:58', llmRequests: '118건', llmTokens: '194,680', llmSuccess: '112건', llmFailed: '6건' },
      { year: '2022년', sttRequests: '98건', sttRequestTime: '42:15:33', sttSuccess: '94건', sttSuccessTime: '40:30:15', sttFailed: '4건', sttFailedTime: '1:45:18', llmRequests: '86건', llmTokens: '142,150', llmSuccess: '82건', llmFailed: '4건' },
      { year: '2021년', sttRequests: '76건', sttRequestTime: '33:45:22', sttSuccess: '73건', sttSuccessTime: '32:15:10', sttFailed: '3건', sttFailedTime: '1:30:12', llmRequests: '67건', llmTokens: '110,680', llmSuccess: '64건', llmFailed: '3건' },
      { year: '2020년', sttRequests: '54건', sttRequestTime: '24:18:45', sttSuccess: '52건', sttSuccessTime: '23:30:20', sttFailed: '2건', sttFailedTime: '0:48:25', llmRequests: '48건', llmTokens: '79,250', llmSuccess: '46건', llmFailed: '2건' },
      { year: '2019년', sttRequests: '42건', sttRequestTime: '18:45:30', sttSuccess: '40건', sttSuccessTime: '17:30:15', sttFailed: '2건', sttFailedTime: '1:15:15', llmRequests: '36건', llmTokens: '59,420', llmSuccess: '34건', llmFailed: '2건' }
    ],
    subtotal: { sttRequests: '602건', sttRequestTime: '262:58:13', sttSuccess: '576건', sttSuccessTime: '250:46:30', sttFailed: '26건', sttFailedTime: '12:11:43', llmRequests: '532건', llmTokens: '875,630', llmSuccess: '506건', llmFailed: '24건' }
  },
  // SK Innovation
  {
    workspace: { name: 'SK Innovation', icon: 'S', color: 'color-emerald' },
    data: [
      { year: '2024년', sttRequests: '112건', sttRequestTime: '48:22:15', sttSuccess: '108건', sttSuccessTime: '46:15:30', sttFailed: '4건', sttFailedTime: '2:06:45', llmRequests: '98건', llmTokens: '161,680', llmSuccess: '94건', llmFailed: '4건' },
      { year: '2023년', sttRequests: '89건', sttRequestTime: '38:45:22', sttSuccess: '86건', sttSuccessTime: '37:15:10', sttFailed: '3건', sttFailedTime: '1:30:12', llmRequests: '78건', llmTokens: '128,750', llmSuccess: '75건', llmFailed: '3건' },
      { year: '2022년', sttRequests: '67건', sttRequestTime: '29:18:45', sttSuccess: '64건', sttSuccessTime: '28:15:20', sttFailed: '3건', sttFailedTime: '1:03:25', llmRequests: '58건', llmTokens: '95,680', llmSuccess: '55건', llmFailed: '3건' },
      { year: '2021년', sttRequests: '54건', sttRequestTime: '23:45:30', sttSuccess: '52건', sttSuccessTime: '22:30:15', sttFailed: '2건', sttFailedTime: '1:15:15', llmRequests: '48건', llmTokens: '79,250', llmSuccess: '46건', llmFailed: '2건' },
      { year: '2020년', sttRequests: '43건', sttRequestTime: '18:30:22', sttSuccess: '41건', sttSuccessTime: '17:45:10', sttFailed: '2건', sttFailedTime: '0:45:12', llmRequests: '38건', llmTokens: '62,680', llmSuccess: '36건', llmFailed: '2건' },
      { year: '2019년', sttRequests: '38건', sttRequestTime: '16:22:45', sttSuccess: '36건', sttSuccessTime: '15:30:20', sttFailed: '2건', sttFailedTime: '0:52:25', llmRequests: '32건', llmTokens: '52,850', llmSuccess: '30건', llmFailed: '2건' }
    ],
    subtotal: { sttRequests: '403건', sttRequestTime: '175:04:59', sttSuccess: '387건', sttSuccessTime: '168:31:05', sttFailed: '16건', sttFailedTime: '6:33:54', llmRequests: '352건', llmTokens: '580,890', llmSuccess: '336건', llmFailed: '16건' }
  }
]

const SystemStatsUsagePage = () => {
  const [periodType, setPeriodType] = useState('monthly') // monthly or yearly
  const [workspaceFilter, setWorkspaceFilter] = useState('all')
  const [startYear, setStartYear] = useState('2024')
  const [startMonth, setStartMonth] = useState('8')
  const [endYear, setEndYear] = useState('2025')
  const [endMonth, setEndMonth] = useState('8')

  const handleTabChange = (type) => {
    setPeriodType(type)
  }

  const handleQuery = () => {
    console.log('Query stats:', { startYear, startMonth, endYear, endMonth, workspaceFilter })
  }

  const handleExcelDownload = () => {
    const period = periodType === 'monthly' ? '월간' : '연간'
    const workspace = workspaceFilter === 'all' ? '전체 워크스페이스' : workspaceFilter
    alert(`${workspace} ${period} 사용량 통계 데이터를 엑셀로 다운로드합니다.`)
  }

  const getResultText = () => {
    const period = periodType === 'monthly' ? '월간' : '연간'
    if (periodType === 'monthly') {
      return `${startYear}년 ${startMonth.padStart(2, '0')}월 ~ ${endYear}년 ${endMonth.padStart(2, '0')}월 워크스페이스별 ${period} 통계 결과`
    } else {
      return `2021년 ~ 2025년 워크스페이스별 ${period} 통계 결과`
    }
  }

  const getCurrentData = () => {
    return periodType === 'monthly' ? monthlyStatsData : yearlyStatsData
  }

  const getFilteredData = () => {
    const data = getCurrentData()
    if (workspaceFilter === 'all') return data
    
    return data.filter(item => {
      const name = item.workspace.name.toLowerCase()
      return (
        (workspaceFilter === 'sk-telecom' && name.includes('sk telecom')) ||
        (workspaceFilter === 'sk-hynix' && name.includes('sk hynix')) ||
        (workspaceFilter === 'sk-es' && name.includes('sk e&s')) ||
        (workspaceFilter === 'sk-cc' && name.includes('sk c&c')) ||
        (workspaceFilter === 'sk-innovation' && name.includes('sk innovation')) ||
        (workspaceFilter === 'sk-networks' && name.includes('sk networks'))
      )
    })
  }

  return (
    <Layout className="page-system-stats-usage stats-usage-page">
      <div className="content">
        <div className="content-header">
          <h1 className="breadcrumb">전체 시스템 사용 통계</h1>
        </div>
        
        <div className="content-body">
          <div className="search-section">
            <Box className="tb-left">
              <Box className="workspace-filter-row" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <FormControl size="small" sx={{ minWidth: 200 }}>
                  <Select
                    value={workspaceFilter}
                    onChange={(e) => setWorkspaceFilter(e.target.value)}
                    variant="outlined"
                  >
                    <MenuItem value="all">전체 워크스페이스</MenuItem>
                    <MenuItem value="sk-telecom">SK Telecom</MenuItem>
                    <MenuItem value="sk-hynix">SK Hynix</MenuItem>
                    <MenuItem value="sk-es">SK E&S</MenuItem>
                    <MenuItem value="sk-cc">SK C&C</MenuItem>
                    <MenuItem value="sk-innovation">SK Innovation</MenuItem>
                    <MenuItem value="sk-networks">SK Networks</MenuItem>
                  </Select>
                </FormControl>
                
                  <ButtonGroup variant="outlined" size="small">
                    <Button 
                      variant={periodType === 'monthly' ? 'contained' : 'outlined'}
                    onClick={() => handleTabChange('monthly')}
                      sx={{ minWidth: '60px' }}
                    >
                      월간
                    </Button>
                    <Button 
                      variant={periodType === 'yearly' ? 'contained' : 'outlined'}
                    onClick={() => handleTabChange('yearly')}
                      sx={{ minWidth: '60px' }}
                    >
                      연간
                    </Button>
                  </ButtonGroup>
              </Box>
                
              <Box className="period-row" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <FormControl size="small">
                    <Select
                    value={startYear + '년'}
                    onChange={(e) => setStartYear(e.target.value.replace('년', ''))}
                      variant="outlined"
                    >
                      <MenuItem value="2024년">2024년</MenuItem>
                      <MenuItem value="2025년">2025년</MenuItem>
                    </Select>
                  </FormControl>
                  
                {periodType === 'monthly' && (
                  <FormControl size="small">
                    <Select
                      value={startMonth + '월'}
                      onChange={(e) => setStartMonth(e.target.value.replace('월', ''))}
                      variant="outlined"
                    >
                      {['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'].map((month, index) => (
                        <MenuItem key={month} value={month}>{month}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
                  
                <Typography variant="body2" sx={{ mx: 1 }}>~</Typography>
                  
                <FormControl size="small">
                    <Select
                    value={endYear + '년'}
                    onChange={(e) => setEndYear(e.target.value.replace('년', ''))}
                      variant="outlined"
                    >
                      <MenuItem value="2024년">2024년</MenuItem>
                      <MenuItem value="2025년">2025년</MenuItem>
                    </Select>
                  </FormControl>
                  
                {periodType === 'monthly' && (
                  <FormControl size="small">
                    <Select
                      value={endMonth + '월'}
                      onChange={(e) => setEndMonth(e.target.value.replace('월', ''))}
                      variant="outlined"
                    >
                      {['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'].map((month, index) => (
                        <MenuItem key={month} value={month}>{month}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
                  
                  <Button 
                  variant="contained" 
                    onClick={handleQuery}
                  sx={{ ml: 1 }}
                  >
                    조회
                  </Button>
                    
                    <Button 
                      variant="outlined"
                      onClick={handleExcelDownload}
                      sx={{ 
                    ml: 'auto',
                    color: '#10B981',
                    borderColor: '#10B981',
                        '&:hover': { 
                      backgroundColor: '#10B981',
                      color: 'white'
                        }
                      }}
                    >
                      엑셀 다운로드
                    </Button>
              </Box>
            </Box>
            
            <Typography variant="body2" className="result-text" sx={{ mb: 2 }}>
              {getResultText()}
            </Typography>
          </div>

          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>워크스페이스</TableCell>
                  <TableCell>{periodType === 'monthly' ? '월' : '연도'}</TableCell>
                  <TableCell>STT 요청 건수</TableCell>
                  <TableCell>STT 요청 시간</TableCell>
                  <TableCell>STT 성공 건수</TableCell>
                  <TableCell>STT 성공 시간</TableCell>
                  <TableCell>STT 실패 건수</TableCell>
                  <TableCell>STT 실패 시간</TableCell>
                  <TableCell>LLM 요청 건수</TableCell>
                  <TableCell>LLM 요청 Token</TableCell>
                  <TableCell>LLM 성공 건수</TableCell>
                  <TableCell>LLM 실패 건수</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getFilteredData().map((workspaceGroup, groupIndex) => (
                  <React.Fragment key={groupIndex}>
                    {workspaceGroup.data.map((item, itemIndex) => (
                      <TableRow key={`${groupIndex}-${itemIndex}`}>
                        {itemIndex === 0 && (
                          <TableCell rowSpan={workspaceGroup.data.length}>
                            <Box className="workspace-name" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Box 
                                className={`workspace-icon ${workspaceGroup.workspace.color}`}
                                sx={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: 'white',
                                  fontWeight: 'bold',
                                  fontSize: '14px'
                                }}
                              >
                                {workspaceGroup.workspace.icon}
                              </Box>
                              <Typography variant="body2">{workspaceGroup.workspace.name}</Typography>
                            </Box>
                          </TableCell>
                        )}
                        <TableCell>
                          <Typography variant="body2" fontWeight="bold">
                            {periodType === 'monthly' ? item.month : item.year}
                          </Typography>
                        </TableCell>
                        <TableCell>{periodType === 'monthly' ? item.sttRequests : item.sttRequests}</TableCell>
                        <TableCell>{periodType === 'monthly' ? item.sttRequestTime : item.sttRequestTime}</TableCell>
                        <TableCell>{periodType === 'monthly' ? item.sttSuccess : item.sttSuccess}</TableCell>
                        <TableCell>{periodType === 'monthly' ? item.sttSuccessTime : item.sttSuccessTime}</TableCell>
                        <TableCell>{periodType === 'monthly' ? item.sttFailed : item.sttFailed}</TableCell>
                        <TableCell>{periodType === 'monthly' ? item.sttFailedTime : item.sttFailedTime}</TableCell>
                        <TableCell>{periodType === 'monthly' ? item.llmRequests : item.llmRequests}</TableCell>
                        <TableCell>{periodType === 'monthly' ? item.llmTokens : item.llmTokens}</TableCell>
                        <TableCell>{periodType === 'monthly' ? item.llmSuccess : item.llmSuccess}</TableCell>
                        <TableCell sx={{ color: '#EF4444' }}>
                          {periodType === 'monthly' ? item.llmFailed : item.llmFailed}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow sx={{ backgroundColor: '#f8f9fa', fontWeight: 'bold', borderTop: '2px solid #dee2e6' }}>
                      <TableCell colSpan={2} sx={{ textAlign: 'center', color: '#6c757d', fontWeight: 'bold' }}>
                        소계
                      </TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{workspaceGroup.subtotal.sttRequests}</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{workspaceGroup.subtotal.sttRequestTime}</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{workspaceGroup.subtotal.sttSuccess}</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{workspaceGroup.subtotal.sttSuccessTime}</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{workspaceGroup.subtotal.sttFailed}</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{workspaceGroup.subtotal.sttFailedTime}</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{workspaceGroup.subtotal.llmRequests}</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{workspaceGroup.subtotal.llmTokens}</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{workspaceGroup.subtotal.llmSuccess}</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{workspaceGroup.subtotal.llmFailed}</TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Layout>
  )
}

export default SystemStatsUsagePage