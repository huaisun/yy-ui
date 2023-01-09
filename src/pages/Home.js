import { Container, Grid, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { GridAddIcon } from '@mui/x-data-grid';
import Page from '../components/Page';
import useSettings from '../hooks/useSettings';
import { NewFolderIcon } from '../theme/overrides/CustomIcons';
import CommonUse from './home/CommonUse';
import RankData from './home/RankData';
import Search from './home/Search';

const actions = [
  { icon: <NewFolderIcon />, name: '创建新的空间' },
  { icon: <GridAddIcon />, name: '添加网址' },
];
export default function Home() {
  const { themeStretch } = useSettings();
  return (
    <Page title="首页">
      <Container sx={{ pr: 1, pl: 1 }} maxWidth={themeStretch ? false : 'xl'}>
        <Search />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <CommonUse />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <RankData />
          </Grid>
        </Grid>
        <SpeedDial ariaLabel="快捷按钮" sx={{ position: 'absolute', bottom: 48, right: 32 }} icon={<SpeedDialIcon />}>
          {actions.map((action) => (
            <SpeedDialAction
              sx={{ fontSize: 18 }}
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
            />
          ))}
        </SpeedDial>
      </Container>
    </Page>
  );
}
