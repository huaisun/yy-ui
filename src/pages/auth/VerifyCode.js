import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Link, Container, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
// layouts
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
// sections
import { VerifyCodeForm } from '../../sections/auth/verify-code';
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function VerifyCode() {
  const { email } = useParams();
  const { resend } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const resendCode = async () => {
    try {
      await resend(email);
      enqueueSnackbar('发送成功');
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
      navigate(PATH_AUTH.register, { replace: true });
    }
  };
  return (
    <Page title="Verify" sx={{ height: 1 }}>
      <RootStyle>
        <LogoOnlyLayout />

        <Container>
          <Box sx={{ maxWidth: 480, mx: 'auto' }}>
            <Button
              size="small"
              component={RouterLink}
              to={PATH_AUTH.login}
              startIcon={<Iconify icon={'eva:arrow-ios-back-fill'} width={20} height={20} />}
              sx={{ mb: 3 }}
            >
              返回
            </Button>

            <Typography variant="h3" paragraph>
              请检查您的邮箱!
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              我们已将6位验证码发送至{email}，请在下方框中输入验证码
            </Typography>

            <Box sx={{ mt: 5, mb: 3 }}>
              <VerifyCodeForm />
            </Box>

            <Typography variant="body2" align="center">
              没有收到验证码? &nbsp;
              <Link variant="subtitle2" underline="none" onClick={() => resendCode()}>
                重新发送
              </Link>
            </Typography>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
