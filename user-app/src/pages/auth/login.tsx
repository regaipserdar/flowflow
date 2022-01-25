import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import ErrorText from '../../components/ErrorText';
import { auth, Providers } from '../../config/firebase';
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';
import firebase from 'firebase';
import { SignInWithSocialMedia } from './modules';
import Avatar from '@mui/material/Avatar';
import Buttonmiu from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Linkmiu from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FingerprintIcon from '@mui/icons-material/Fingerprint';


const LoginPage: React.FunctionComponent<IPageProps> = props => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const history = useHistory();

    const signInWithEmailAndPassword = () => {
        if (error !== '') setError('');

        setAuthenticating(true);

        auth.signInWithEmailAndPassword(email, password)
        .then((result: any) => {
            logging.info(result);
            history.push('/');
        })
        .catch((error: { message: React.SetStateAction<string>; }) => {
            logging.error(error);
            setAuthenticating(false);
            setError(error.message);
        });
    }

    const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== '') setError('');

        setAuthenticating(true);

        SignInWithSocialMedia(provider)
        .then(result => {
            logging.info(result);
            history.push('/');
        })
        .catch(error => {
            logging.error(error);
            setAuthenticating(false);
            setError(error.message);
        });
    }


function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Linkmiu color="inherit" href="https://dev-ui-75acb.web.app">
           Dev'eLopment FlowFlow
        </Linkmiu>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

    
const theme = createTheme();


const handleSubmit = () => { // Helpme!
    if (error !== '') setError('');
    setAuthenticating(true);

    auth.signInWithEmailAndPassword(email, password)
    .then((result: any) => {
        logging.info(result);
        history.push('/');
    })
    .catch((error: { message: React.SetStateAction<string>; }) => {
        logging.error(error);
        setAuthenticating(false);
        setError(error.message);
    });
}

    return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FingerprintIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Flow Login 
            Customer Dashboard
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={event => setPassword(event.target.value)}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Buttonmiu
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={authenticating}
              onClick={() => signInWithEmailAndPassword()}
            >
              Sign In
            </Buttonmiu>
            <Grid container>
              <Grid item xs>
                <Linkmiu href="/forget" variant="body2">
                  Forgot password?
                </Linkmiu>
              </Grid>
              <Grid item>
                <Linkmiu href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Linkmiu>
              </Grid>
            </Grid>
            <Buttonmiu
              type="submit"
              fullWidth
              variant="outlined"
              color="error"
              sx={{ mt: 3, mb: 2 }}
              disabled={authenticating}
              onClick={() => signInWithSocialMedia(Providers.google)}
            >Sign in with Google
            </Buttonmiu>
          </Box>
        </Box>
        <ErrorText error={error} />  
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
