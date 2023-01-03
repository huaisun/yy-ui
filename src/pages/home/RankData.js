import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import { Typography, Link, Card, CardHeader } from '@mui/material';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Avatar from '@mui/material/Avatar';
import { StarIcon, LikeIcon, ViewIcon } from '../../theme/overrides/CustomIcons';
import { TextNumber } from '../../utils/common';

export default function RankData() {
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
  return (
    <Card
      sx={{
        mb: 3,
        width: 360,
        position: 'relative',
        pl: 2,
        pr: 2,
      }}
    >
      <CardHeader title="排行榜" />
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
              <IconButton size="small" edge="false" aria-label="star" onClick={() => linkWebsite(data.website)}>
                <ViewIcon fontSize="small" />
              </IconButton>
              <TextNumber num={data.viewNumber} />
              <IconButton size="small" edge="false" aria-label="star">
                <StarIcon fontSize="small" />
              </IconButton>
              <TextNumber num={data.starNumber} />
              <IconButton size="small" edge="false" aria-label="star">
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
