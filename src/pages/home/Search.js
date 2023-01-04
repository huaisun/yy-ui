import { Card, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { GridSearchIcon } from '@mui/x-data-grid';
import { useState } from 'react';

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
    <Card
      sx={{
        mb: 3,
        width: '100%',
        position: 'relative',
        pl: 2,
        pr: 2,
      }}
    >
      <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-standard-label">搜索引擎</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={engine}
          onChange={handleChange}
          label="搜索引擎"
        >
          {seData.map((se) => (
            <MenuItem key={se.value} value={se.value}>
              {se.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 550 }} fullWidth>
        <Stack direction="row">
          <TextField
            id="standard-search"
            label="请输入搜索内容"
            type="search"
            variant="standard"
            fullWidth
            value={searchContent}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          <IconButton aria-label="search" color="secondary" sx={{ mt: 1 }} onClick={searchEngine}>
            <GridSearchIcon />
          </IconButton>
        </Stack>
      </FormControl>
    </Card>
  );
}
