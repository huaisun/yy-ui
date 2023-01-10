import { Box, Card, Container, InputAdornment, TextField, Typography } from '@mui/material';
import useSettings from '../hooks/useSettings';
import Page from '../components/Page';
import imageA from '../assets/images/imageA.jpeg';
import { SearchIcon, StarOutlineIcon } from '../theme/overrides/CustomIcons';
import { TextNumber } from '../utils/common';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../routes/paths';

export default function Find() {
  const { themeStretch } = useSettings();

  return (
    <Page title="首页">
      <Container sx={{ pr: 1, pl: 1 }} maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="公开文件夹"
          links={[
            { name: '首页', href: PATH_DASHBOARD.general.home },
            { name: '发现', href: PATH_DASHBOARD.general.find },
          ]}
        />
        <Box sx={{ mb: 3 }}>
          <TextField
            placeholder="搜索..."
            size="small"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon htmlColor="#919eab" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Card sx={{ maxWidth: 375, display: 'flex' }}>
          <Box sx={{ pt: 2, pl: 2 }}>
            <img style={{ borderRadius: '8px' }} src={imageA} srcSet={imageA} alt="123" loading="lazy" />
          </Box>

          <Box sx={{ width: 250, p: 2 }}>
            <Typography gutterBottom variant="h6" component="div" noWrap>
              好消息，畅销大通病好消息，畅销大通病好消息，畅销大通病好消息，畅销大通病
            </Typography>
            <Typography variant="body2" color="text.secondary">
              【30万访问, 30万点赞】
            </Typography>
          </Box>
          <Box sx={{ p: 2, fontSize: 12 }}>
            <Typography sx={{ mb: 2 }} variant="inherit" color="text.secondary">
              22/10/19
            </Typography>
            <Box sx={{ cursor: 'pointer', color: 'text.secondary' }}>
              <StarOutlineIcon sx={{ width: 16, height: 16, mr: 0.5 }} />
              <TextNumber num="12321" />
            </Box>
          </Box>
        </Card>
      </Container>
    </Page>
  );
}
