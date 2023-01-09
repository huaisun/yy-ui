import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import useSettings from '../hooks/useSettings';
import Page from '../components/Page';

export default function Find() {
  const { themeStretch } = useSettings();

  return (
    <Page title="首页">
      <Container sx={{ pr: 1, pl: 1 }} maxWidth={themeStretch ? false : 'xl'}>
        <Card sx={{ maxWidth: 350, display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            src="https://c-ssl.duitang.com/uploads/blog/202103/31/20210331160001_9a852.jpg"
            alt="图片"
          />
          <CardActionArea sx={{ width: 230 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                拥有者: admin, 创建时间: 2022-10-29 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </Page>
  );
}
