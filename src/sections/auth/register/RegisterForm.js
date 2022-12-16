import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import { useSnackbar } from 'notistack';
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';

// routes
import { PATH_AUTH } from '../../../routes/paths';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { register } = useAuth();

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    username: Yup.string().required('用户名必填'),
    email: Yup.string().email('邮箱格式不正确').required('邮箱地址必填'),
    password: Yup.string().required('密码必填'),
    authCode: Yup.string().required('验证码必填'),
  });

  const defaultValues = {
    username: '',
    email: '',
    password: '',
    authCode: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await register(data.username, data.email, data.password, data.authCode);
      enqueueSnackbar('注册成功!');
      navigate(PATH_AUTH.login, { replace: true });
    } catch (error) {
      if (isMountedRef.current) {
        setError('afterSubmit', error);
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <RHFTextField name="email" label="邮箱地址" />

        <RHFTextField name="username" label="用户名" />

        <RHFTextField
          name="password"
          label="密码"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFTextField name="authCode" label="验证码" />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          注 册
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
