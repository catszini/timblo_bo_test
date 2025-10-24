import React from 'react'
import { TableRow, TableCell, Box, Chip, Typography, Avatar } from '@mui/material'
import CountSpinner from '../../../components/common/CountSpinner'
import Checkbox from '../../../components/common/Checkbox'
import { styles } from './WorkspaceRow.styles'

const WorkspaceRow = ({ workspace, isSelected, onSelect, onCountChange }) => {
  const { id, name, icon, iconColorHex, domain, creator, memberCount, userStatus, createdAt } = workspace

  return (
    <TableRow 
      hover
      selected={isSelected}
      sx={styles.row}
    >
      <TableCell padding="checkbox">
        <Checkbox 
          checked={isSelected}
          onChange={() => onSelect(id)}
          size="small"
        />
      </TableCell>
      <TableCell>
        <Box sx={styles.workspaceNameContainer}>
          <Avatar sx={{ ...styles.avatar, backgroundColor: iconColorHex }}>
            {icon}
          </Avatar>
          <Typography variant="body2">{name}</Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{domain}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{creator}</Typography>
      </TableCell>
      <TableCell sx={styles.countCell}>
        <CountSpinner 
          value={memberCount} 
          onChange={(newValue) => onCountChange(id, newValue)}
        />
      </TableCell>
      <TableCell>
        <Box>
          <Typography variant="body2" sx={styles.userTotal}>
            총 {userStatus.total}명
          </Typography>
          <Box sx={styles.rolesContainer}>
            {userStatus.owner > 0 && (
              <Chip label={`관리자 ${userStatus.owner}`} size="small" sx={styles.chipOwner} />
            )}
            {userStatus.admin > 0 && (
              <Chip label={`관리자 ${userStatus.admin}`} size="small" sx={styles.chipAdmin} />
            )}
            {userStatus.member > 0 && (
              <Chip label={`구성원 ${userStatus.member}`} size="small" sx={styles.chipMember} />
            )}
          </Box>
        </Box>
      </TableCell>
      <TableCell>
        <Typography variant="body2" sx={styles.createdAt}>
          {createdAt}
        </Typography>
      </TableCell>
    </TableRow>
  )
}

export default WorkspaceRow
