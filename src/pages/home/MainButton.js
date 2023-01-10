import { Button, Stack } from '@mui/material';
import { GridAddIcon } from '@mui/x-data-grid';
import { ImportWebsite, NewFolderIcon } from '../../theme/overrides/CustomIcons';

export default function MainButton() {
  return (
    <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
      <Button variant="outlined" startIcon={<GridAddIcon />}>
        链接
      </Button>
      <Button variant="outlined" color="error" startIcon={<NewFolderIcon />}>
        文件夹
      </Button>
      <Button variant="outlined" color="warning" startIcon={<ImportWebsite />}>
        导入标签
      </Button>
    </Stack>
  );
}
