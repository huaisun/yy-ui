import { Button, Stack } from '@mui/material';
import { GridAddIcon } from '@mui/x-data-grid';
import { useState } from 'react';
import { ImportWebsite, NewFolderIcon } from '../../theme/overrides/CustomIcons';
import WebsiteDialog from '../../components/home/WebsiteDialog';
import FolderDialog from '../../components/home/FolderDialog';

export default function MainButton() {
  const [websiteVisible, setWebsiteVisible] = useState(false);
  const [folderVisible, setFolderVisible] = useState(false);
  return (
    <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
      <Button variant="outlined" startIcon={<GridAddIcon />} onClick={() => setWebsiteVisible(true)}>
        链接
      </Button>
      <Button variant="outlined" color="error" startIcon={<NewFolderIcon />} onClick={() => setFolderVisible(true)}>
        文件夹
      </Button>
      <Button variant="outlined" color="warning" startIcon={<ImportWebsite />}>
        导入标签
      </Button>
      <WebsiteDialog visible={websiteVisible} closeDialog={() => setWebsiteVisible(false)} />
      <FolderDialog visible={folderVisible} closeDialog={() => setFolderVisible(false)} />
    </Stack>
  );
}
