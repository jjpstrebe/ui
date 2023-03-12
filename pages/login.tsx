import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useUser from "../util/useUser";
import fetchJson, { FetchError } from "../util/fetchJson";


export default function SignIn() {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      username: data.get('username'),
      password: data.get('password'),
    };
    try {
      mutateUser(
        await fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }),
        false,
      );
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMessage(error.data.message);
      } else {
        console.error("An unexpected error happened:", error);
      }
    }
  };

  return (
    <>
      <Head>
        <title>New App (login)</title>
        <meta name="description" content="Generic structure for an app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {errorMessage && <Typography>{errorMessage}</Typography>}
            <Grid container>
              <Grid item xs>
                <Tooltip title={<Typography>Have an admin sign in and change your password.</Typography>} arrow>
                  <Link href="#">
                    Forgot password?
                  </Link>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title={<Typography>Have an admin sign in and add an account for you.</Typography>} arrow>
                  <Link href="#" >
                    {"Don't have an account?"}
                  </Link>
                </Tooltip>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </main>
    </>
  );
}
