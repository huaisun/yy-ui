import { Card, CardHeader, List } from '@mui/material';
import WebsiteList from '../../components/home/WebsiteList';

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
    <Card
      sx={{
        mb: 3,
        position: 'relative',
        pl: 2,
        pr: 2,
        overflow: 'auto',
      }}
    >
      <CardHeader title="排行榜" />
      <List sx={{ minWidth: 320 }}>
        {rankData.map((data) => (
          <WebsiteList
            key={data.id}
            website={data.website}
            name={data.name}
            viewNumber={data.viewNumber}
            likeNumber={data.likeNumber}
            starNumber={data.starNumber}
          />
        ))}
      </List>
    </Card>
  );
}
