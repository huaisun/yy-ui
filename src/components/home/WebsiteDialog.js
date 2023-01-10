import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import { FormProvider, RHFTextField } from '../hook-form';

export default function WebsiteDialog(props) {
  const { enqueueSnackbar } = useSnackbar();
  const visible = props?.visible || false;
  const closeDialog = () => props.closeDialog();
  const isEdit = props?.isEdit || false;
  const { currentWebsite } = props;
  console.log(currentWebsite);

  const NewWebsiteSchema = Yup.object().shape({
    name: Yup.string().required('网址标题必填'),
    website: Yup.string().required('链接URL为必填'),
  });

  const defaultValues = useMemo(
    () => ({
      folder: currentWebsite?.folder || '',
      name: currentWebsite?.name || '',
      website: currentWebsite?.website || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentWebsite]
  );

  const methods = useForm({
    resolver: yupResolver(NewWebsiteSchema),
    defaultValues,
  });

  const {
    reset,
    setValue,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const [folder, setFolder] = useState();

  const cancelClick = () => {
    closeDialog();
    reset();
  };

  const spaceList = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar('Create success!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={visible} onClose={closeDialog} fullWidth>
      <DialogTitle>{`${isEdit ? '编辑' : '新增'}网址信息`}</DialogTitle>
      <DialogContent>
        <Box sx={{ pt: 3 }}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} mb={2}>
              <Box>
                <Typography sx={{ fontSize: 12, color: '#919eab' }}>PS: 文件夹若不选, 默认为常用</Typography>
                <Autocomplete
                  noOptionsText={'无搜索结果'}
                  disablePortal
                  autoHighlight
                  value={folder}
                  onChange={(event, newValue) => {
                    setFolder(newValue);
                  }}
                  options={spaceList}
                  renderInput={(params) => <TextField {...params} label="文件夹" />}
                />
              </Box>
              <RHFTextField
                autoFocus
                name="website"
                label="网址URL"
                placeholder="https://xxx.xxx.xxx"
                value={getValues('website')}
                onChange={(event) => setValue('website', event.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <RHFTextField
                name="name"
                label="网址标题"
                value={getValues('name')}
                onChange={(event) => setValue('name', event.target.value)}
              />
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button variant="" onClick={cancelClick}>
                取 消
              </Button>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {isEdit ? '保存修改' : '创建URL'}
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
WebsiteDialog.propTypes = {
  visible: PropTypes.bool,
  closeDialog: PropTypes.func,
  isEdit: PropTypes.bool,
  currentWebsite: PropTypes.object,
};
