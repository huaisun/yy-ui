import {
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { GridSearchIcon } from '@mui/x-data-grid';
import { useState } from 'react';
import { SearchIcon } from '../../theme/overrides/CustomIcons';

export default function Search() {
  const [engine, setEngine] = useState(1);
  const [searchContent, setSearchContent] = useState('');

  const handleChange = (event) => {
    setEngine(event.target.value);
  };

  const searchEngine = () => {
    if (engine === 1) {
      window.open(`${seData[engine - 1].website}/s?wd=${searchContent}`);
    } else if (engine === 2 || engine === 4) {
      window.open(`${seData[engine - 1].website}/search?q=${searchContent.replaceAll(' ', '+')}`);
    } else if (engine === 3) {
      window.open(`${seData[engine - 1].website}/search?keyword=${searchContent}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchEngine();
    }
  };

  const handleSearchChange = (event) => {
    setSearchContent(event.target.value);
  };

  const seData = [
    {
      name: '百度',
      value: 1,
      website: 'https://www.baidu.com',
    },
    {
      name: '必应',
      value: 2,
      website: 'https://www.bing.com',
    },
    {
      name: '头条',
      value: 3,
      website: 'https://www.toutiao.com',
    },
    {
      name: '谷歌',
      value: 4,
      website: 'https://www.google.com',
    },
  ];
  return (
    <Box>
      <FormControl variant="standard" sx={{ mb: 2, mr: 2, minWidth: 80 }}>
        <Select size="small" variant="outlined" value={engine} onChange={handleChange}>
          {seData.map((se) => (
            <MenuItem key={se.value} value={se.value}>
              {se.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ mb: 2, minWidth: 120, maxWidth: 550 }} fullWidth>
        <Stack direction="row">
          <TextField
            placeholder="搜索..."
            size="small"
            fullWidth
            variant="outlined"
            value={searchContent}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon htmlColor="#919eab" />
                </InputAdornment>
              ),
            }}
          />
          <Button sx={{ ml: 1 }} color="info" variant="text" onClick={searchEngine}>
            搜索
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
}
