import React, {useEffect, useReducer} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {signupReducer} from '../../reducers/signupReducer';
import {Copyright} from '../shared/Copyright';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useAuthDispatch, useAuth} from "../../contexts/AuthContext";


export const SignupForm = () => {
  const {uid} = useAuth();
  const authDispatch = useAuthDispatch();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(signupReducer, {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    newsLetter: false
  });

  useEffect(() => {
    if (uid) {
      navigate("/profile")
    }
  }, [uid])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const res = await axios.post("/auth/signup", {
      username: data.get('username'),
      email: data.get('email'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      password: data.get('password'),
    })
      if (res?.data) {
        authDispatch({type: 'all', value: {
            ...res.data
          }});
      }
  };

  return (
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
        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={state.username}
                  onChange={e =>
                      dispatch({type: 'change_username', value: e.target.value})
                  }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={state.firstName}
                onChange={e =>
                  dispatch({type: 'change_first_name', value: e.target.value})
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={state.lastName}
                onChange={e =>
                  dispatch({type: 'change_last_name', value: e.target.value})
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={state.email}
                onChange={e =>
                  dispatch({type: 'change_email', value: e.target.value})
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={state.password}
                onChange={e =>
                  dispatch({type: 'change_password', value: e.target.value})
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.newsLetter}
                    onChange={e =>
                      dispatch({
                        type: 'check_newsletter',
                        value: e.target.checked,
                      })
                    }
                    value="allowExtraEmails"
                    color="primary"
                  />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{mt: 5}} />
    </Container>
  );
};
