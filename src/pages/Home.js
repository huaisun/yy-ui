import { Fab, Grid, Paper, Zoom } from '@mui/material';
import { GridAddIcon } from '@mui/x-data-grid';
import CommonUse from './home/CommonUse';
import RankData from './home/RankData';
import Search from './home/Search';

export default function Home() {
  return (
    <Paper sx={{ pr: 1, pl: 1 }}>
      <Search />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={8} lg={9}>
          <CommonUse />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <RankData />
        </Grid>
      </Grid>
      <Fab sx={{ position: 'absolute', bottom: 50, right: 50 }} color="primary" aria-label="add">
        <GridAddIcon />
      </Fab>
    </Paper>
  );
}
