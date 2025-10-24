import React, { useState } from 'react'
import { 
  Box, 
  TextField, 
  Select, 
  MenuItem, 
  Button,
  InputAdornment,
  FormControl
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { styles } from './SearchBar.styles'

const SearchBar = ({ 
  searchOptions = ['전체'],
  onSearch,
  placeholder = "검색어를 입력해주세요"
}) => {
  const [searchType, setSearchType] = useState(searchOptions[0])
  const [searchKeyword, setSearchKeyword] = useState('')

  const handleSearch = () => {
    onSearch(searchType, searchKeyword)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Box sx={styles.container}>
      <FormControl variant="outlined" size="small">
        <Select
          variant="outlined"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          sx={styles.select}
        >
          {searchOptions.map((option, index) => (
            <MenuItem key={index} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        variant="outlined"
        size="small"
        placeholder={placeholder}
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onKeyPress={handleKeyPress}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={styles.searchIcon} />
            </InputAdornment>
          ),
        }}
        sx={styles.textField}
      />
      <Button 
        variant="contained"
        onClick={handleSearch}
        sx={styles.button}
      >
        조회
      </Button>
    </Box>
  )
}

export default SearchBar

