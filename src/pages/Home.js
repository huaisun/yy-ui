import { Container, Grid } from '@mui/material';
import Page from '../components/Page';
import useSettings from '../hooks/useSettings';
import CommonUse from './home/CommonUse';
import MainButton from './home/MainButton';
import RankData from './home/RankData';
import Search from './home/Search';

export default function Home() {
  const { themeStretch } = useSettings();
  return (
    <Page title="首页">
      <Container sx={{ pr: 1, pl: 1 }} maxWidth={themeStretch ? false : 'xl'}>
        <Search />
        <MainButton />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <CommonUse />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <RankData />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
