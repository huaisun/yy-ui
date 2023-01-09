import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function WebsiteDialog(props) {
  const visible = props?.visible || false;
  const closeDialog = () => props.closeDialog();

  const [space, setSpace] = useState(0);
  const handleSelect = (event) => {
    setSpace(event.target.value);
  };

  const resetForm = () => {
    setSpace('');
  };

  const cancelClick = () => {
    resetForm();
    closeDialog();
  };

  const submitClick = () => {
    resetForm();
    closeDialog();
  };

  const spaceList = [
    {
      id: 0,
      name: '常用',
    },
    {
      id: 2,
      name: '空间1',
    },
  ];

  return (
    <Dialog open={visible} onClose={closeDialog}>
      <DialogTitle>修改网址信息</DialogTitle>
      <DialogContent>
        <DialogContentText>...</DialogContentText>
        <FormControl variant="standard" fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ pt: 1, pb: 1 }}>
            存储空间
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={space}
            label="存储空间"
            onChange={handleSelect}
          >
            {spaceList.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField autoFocus margin="dense" id="name" label="链接URL" type="text" fullWidth variant="standard" />
        <TextField margin="dense" id="intro" label="简介" type="text" fullWidth variant="standard" />
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelClick}>取 消</Button>
        <Button onClick={submitClick}>确 定</Button>
      </DialogActions>
    </Dialog>
  );
}
WebsiteDialog.propTypes = {
  visible: PropTypes.bool,
  closeDialog: PropTypes.func,
};
