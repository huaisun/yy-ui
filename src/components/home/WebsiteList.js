import {
  Avatar,
  IconButton,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Stack,
  styled,
  Menu,
  alpha,
  MenuItem,
  Divider,
} from '@mui/material';
import { GridMoreVertIcon } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  LikeIcon,
  StarIcon,
  EditIcon,
  StarOutlineIcon,
  LikeOutlineIcon,
} from '../../theme/overrides/CustomIcons';
import { TextNumber } from '../../utils/common';
import Iconify from '../Iconify';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 120,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

export default function WebsiteList(props) {
  const { website, name, viewNumber, starNumber, likeNumber } = props;
  const linkWebsite = (website) => {
    window.open(website, '_blank');
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const moreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const editWebsite = () => {
    handleClose();
    props.handleModalOpen();
  };
  return (
    <ListItem sx={{ width: 320 }} onClick={() => linkWebsite(website)}>
      <ListItemAvatar>
        <Avatar style={{ width: 20, height: 20 }} alt={name} src={`${website}/favicon.ico`} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography>
            <Link href={website} target="_blank" rel="noopener">
              {name}
            </Link>
          </Typography>
        }
        secondary={null}
      />
      <ListItemSecondaryAction>
        <Stack direction="row" justifyContent="space-between">
          <IconButton size="small" aria-label="more" onClick={moreClick}>
            <GridMoreVertIcon fontSize="small" />
          </IconButton>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              {likeNumber > 10000 ? <LikeIcon htmlColor="#ff6699" /> : <LikeOutlineIcon />}
              <TextNumber num={likeNumber} />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {starNumber > 10000 ? <StarIcon htmlColor="#ff6699" /> : <StarOutlineIcon />}
              <TextNumber num={starNumber} />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Iconify icon={'ph:mouse-duotone'} sx={{ width: 18, height: 18, mr: 1.5 }} />
              <TextNumber num={viewNumber} />
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={editWebsite}>
              <EditIcon />
              编辑
            </MenuItem>
          </StyledMenu>
        </Stack>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

WebsiteList.propTypes = {
  website: PropTypes.any,
  name: PropTypes.any,
  viewNumber: PropTypes.any,
  starNumber: PropTypes.any,
  likeNumber: PropTypes.any,
  handleModalOpen: PropTypes.func,
};
