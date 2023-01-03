import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import { Typography, Link, Card, CardHeader } from '@mui/material';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Avatar from '@mui/material/Avatar';
import { StarIcon, LikeIcon, ViewIcon } from '../../theme/overrides/CustomIcons';

// 超过四位数的数字转化为w格式,如：38128 => 3.8w，381285 => 38.1w
function formatCharCount(count) {
  if (count <= 0 || count.isNaN) {
    return '0';
  }
  const strCount = count.toString();
  if (strCount.length >= 9) {
    if (strCount.length >= 11) {
      return '99亿+';
    }
    let prefix = strCount.substring(0, strCount.length - 8);
    if (strCount.length === 9) {
      prefix = `${prefix}.${strCount[1]}`;
    }
    return `${prefix}亿`;
  }

  if (strCount.length >= 5) {
    let prefix = strCount.substring(0, strCount.length - 4);
    if (strCount.length === 5) {
      prefix = `${prefix}.${strCount[1]}`;
    }
    return `${prefix}万`;
  }
  return strCount;
}

function TextNumber(props) {
  // eslint-disable-next-line react/prop-types
  const { num } = props;
  return <span style={{ fontSize: '12px' }}>{formatCharCount(num)}</span>;
}

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
