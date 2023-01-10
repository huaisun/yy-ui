import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, Stack, Typography } from '@mui/material';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import { FormProvider, RHFTextField, RHFUploadAvatar } from '../hook-form';
import { fData } from '../../utils/formatNumber';

export default function FolderDialog(props) {
  const { enqueueSnackbar } = useSnackbar();
  const visible = props?.visible || false;
  const closeDialog = () => props.closeDialog();
  const isEdit = props?.isEdit || false;
  const { currentFolder } = props;

  const NewFolderSchema = Yup.object().shape({
    name: Yup.string().required('文件夹名称不能为空'),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentFolder?.name || '',
      description: currentFolder?.description || '',
      photoUrl: currentFolder?.photoUrl || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentFolder]
  );

  const methods = useForm({
    resolver: yupResolver(NewFolderSchema),
    defaultValues,
  });

  const {
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const cancelClick = () => {
    closeDialog();
    reset();
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'icon',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

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
      <DialogTitle>{`${isEdit ? '编辑' : '新增'}文件夹`}</DialogTitle>
      <DialogContent>
        <Box sx={{ pt: 3 }}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={8}>
                <Stack spacing={3} mb={2}>
                  <RHFTextField
                    autoFocus
                    name="name"
                    label="文件夹名称"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ maxLength: 20 }}
                  />
                  <RHFTextField
                    name="description"
                    label="简介"
                    multiline
                    minRows={3}
                    maxRows={5}
                    inputProps={{ maxLength: 300 }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}>
                <RHFUploadAvatar
                  name="photoUrl"
                  accept="image/*"
                  maxSize={1024000}
                  onDrop={handleDrop}
                  helperText={
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 2,
                        mx: 'auto',
                        display: 'block',
                        textAlign: 'center',
                        color: 'text.secondary',
                      }}
                    >
                      允许 *.jpeg, *.jpg, *.png, *.gif
                      <br /> 文件大小限制 {fData(1024000)}
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button variant="" onClick={cancelClick}>
                取 消
              </Button>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {isEdit ? '保存修改' : '创建文件夹'}
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
FolderDialog.propTypes = {
  visible: PropTypes.bool,
  closeDialog: PropTypes.func,
  isEdit: PropTypes.bool,
  currentFolder: PropTypes.object,
};
