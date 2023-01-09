// @mui
import { Stack, Typography } from '@mui/material';
// hooks
import useAuth from '../../../hooks/useAuth';
// assets
import { DocIllustration } from '../../../assets';

// ----------------------------------------------------------------------

export default function NavbarDocs() {
  const { user } = useAuth();

  return (
    <Stack
      spacing={3}
      sx={{ px: 5, pb: 5, mt: 10, width: 1, textAlign: 'center', display: 'block' }}
    >
      <DocIllustration sx={{ width: 1 }} />

      <div>
        <Typography gutterBottom variant="subtitle1">
          欢迎, {user?.username}
        </Typography>
      </div>
    </Stack>
  );
}
