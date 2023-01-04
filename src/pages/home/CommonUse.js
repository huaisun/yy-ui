import List from '@mui/material/List';
import { capitalCase } from 'change-case';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import { Typography, Link, Card, Tabs, Tab, Box } from '@mui/material';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { StarIcon, LikeIcon, ViewIcon } from '../../theme/overrides/CustomIcons';
import { TextNumber } from '../../utils/common';
import Iconify from '../../components/Iconify';

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  // zIndex: 9,
  // top: 0,
  width: '100%',
  display: 'flex',
  // position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3),
  },
}));

export default function CommonUse() {
  const linkWebsite = (website) => {
    window.open(website, '_blank');
  };
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
  const [spaceValue, setSpaceValue] = useState('1');

  const handleChangeTab = (value) => {
    setSpaceValue(value);
  };

  const PROFILE_TABS = [
    {
      value: '1',
      name: '常用',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <></>,
    },
    {
      value: '2',
      name: '空间1',
      icon: <Iconify icon={'eva:heart-fill'} width={20} height={20} />,
      component: <></>,
    },
    {
      value: '3',
      name: '空间2',
      icon: <Iconify icon={'eva:people-fill'} width={20} height={20} />,
      component: <></>,
    },
    {
      value: '4',
      name: '空间3',
      icon: <Iconify icon={'ic:round-perm-media'} width={20} height={20} />,
      component: <></>,
    },
  ];
  return (
    <Card
      sx={{
        mb: 3,
        position: 'relative',
        pl: 2,
        pr: 2,
      }}
    >
      <TabsWrapperStyle>
        <Tabs
          value={spaceValue}
          onChange={(e, value) => handleChangeTab(value)}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
        >
          {PROFILE_TABS.map((tab) => (
            <Tab disableRipple key={tab.value} value={tab.value} icon={tab.icon} label={tab.name} />
          ))}
        </Tabs>
      </TabsWrapperStyle>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {rankData.map((data) => (
          <ListItem key={data.id} onClick={() => linkWebsite(data.website)}>
            <ListItemAvatar>
              <Avatar style={{ width: 20, height: 20 }} alt={data.name} src={`${data.website}/favicon.ico`} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography>
                  <Link href={data.website} target="_blank" rel="noopener">
                    {data.name}
                  </Link>
                </Typography>
              }
              secondary={null}
            />
            <ListItemSecondaryAction>
              <IconButton size="small" aria-label="view" onClick={() => linkWebsite(data.website)}>
                <ViewIcon fontSize="small" />
              </IconButton>
              <TextNumber num={data.viewNumber} />
              <IconButton size="small" aria-label="star">
                <StarIcon fontSize="small" />
              </IconButton>
              <TextNumber num={data.starNumber} />
              <IconButton size="small" aria-label="like">
                <LikeIcon fontSize="small" />
              </IconButton>
              <TextNumber num={data.likeNumber} />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
