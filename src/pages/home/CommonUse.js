import List from '@mui/material/List';
import { Card, Tabs, Tab, Stack, Divider } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Iconify from '../../components/Iconify';
import WebsiteList from '../../components/home/WebsiteList';
import WebsiteDialog from '../../components/home/WebsiteDialog';

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
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
  const rankData = [
    {
      id: 1,
      website: 'https://www.baidu.com',
      name: '百度',
      likeNumber: 123,
      viewNumber: 212323,
      starNumber: 123,
    },
    {
      id: 2,
      website: 'https://www.bing.com',
      name: '必应',
      likeNumber: 123232,
      viewNumber: 2222,
      starNumber: 12333,
    },
  ];
  const [spaceValue, setSpaceValue] = useState('1');

  const handleChangeTab = (value) => {
    setSpaceValue(value);
  };

  const [visible, setVisible] = useState(false);

  const openDialog = () => {
    setVisible(true);
  };

  const closeDialog = () => {
    setVisible(false);
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
      <List sx={{ minWidth: 320, overflow: 'auto' }}>
        <Stack divider={<Divider orientation="vertical" flexItem />} direction={{ xs: 'column', md: 'row' }}>
          {rankData.map((data) => (
            <WebsiteList
              key={data.id}
              website={data.website}
              name={data.name}
              viewNumber={data.viewNumber}
              likeNumber={data.likeNumber}
              starNumber={data.starNumber}
              handleModalOpen={openDialog}
            />
          ))}
        </Stack>
      </List>
      <WebsiteDialog visible={visible} closeDialog={closeDialog} />
    </Card>
  );
}
