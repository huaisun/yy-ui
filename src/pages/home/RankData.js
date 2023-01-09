import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, Card, Avatar, CardHeader, Typography, Divider } from '@mui/material';
// _mock_
// components
import Iconify from '../../components/Iconify';
import { TextNumber } from '../../utils/common';
import { LikeOutlineIcon, StarOutlineIcon } from '../../theme/overrides/CustomIcons';

const IconWrapperStyle = styled('div')(({ theme }) => ({
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
}));

const linkWebsite = (website) => {
  window.open(website, '_blank');
};

const likeClick = (data) => {
  console.log(data);
};

const starClick = (data) => {
  console.log(data);
};
export default function RankData() {
  const rankData = [
    {
      id: 1,
      website: 'https://www.baidu.com',
      name: '百度',
      likeNumber: 220234343,
      viewNumber: 212323,
      starNumber: 12323,
    },
    {
      id: 2,
      website: 'https://www.bing.com',
      name: '必应',
      likeNumber: 123232,
      viewNumber: 2222,
      starNumber: 12322323,
    },
  ];
  return (
    <Card>
      <CardHeader title="排行榜" />
      <Stack spacing={3} sx={{ p: 3 }}>
        {rankData.map((data, index) => (
          <WebsiteItem key={data.id} data={data} index={index} />
        ))}
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

WebsiteItem.propTypes = {
  data: PropTypes.shape({
    website: PropTypes.any,
    name: PropTypes.any,
    viewNumber: PropTypes.any,
    starNumber: PropTypes.any,
    likeNumber: PropTypes.any,
    handleModalOpen: PropTypes.func,
  }),
  index: PropTypes.number,
};

function WebsiteItem({ data, index }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar alt={data.name} src={`${data.website}/favicon.ico`} onClick={() => linkWebsite(data.website)} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2" onClick={() => linkWebsite(data.website)}>
          {data.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary',
          }}
        >
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
            justifyContent="space-between"
          >
            <Box onClick={() => linkWebsite(data.website)}>
              <Iconify icon={'ph:mouse-duotone'} sx={{ width: 16, height: 16, mr: 0.5 }} />
              <TextNumber num={data.viewNumber} />
            </Box>
            <Box sx={{ cursor: 'pointer' }} onClick={() => likeClick(data)}>
              <LikeOutlineIcon sx={{ width: 16, height: 16, mr: 0.5 }} />
              <TextNumber num={data.viewNumber} />
            </Box>
            <Box sx={{ cursor: 'pointer' }} onClick={() => starClick(data)}>
              <StarOutlineIcon sx={{ width: 16, height: 16, mr: 0.5 }} />
              <TextNumber num={data.starNumber} />
            </Box>
          </Stack>
        </Typography>
      </Box>

      <IconWrapperStyle
        onClick={() => linkWebsite(data.website)}
        sx={{
          ...(index === 1 && {
            color: 'info.main',
            bgcolor: (theme) => alpha(theme.palette.info.main, 0.08),
          }),
          ...(index === 2 && {
            color: 'error.main',
            bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
          }),
        }}
      >
        <Iconify icon={'ant-design:trophy-filled'} width={20} height={20} />
      </IconWrapperStyle>
    </Stack>
  );
}
