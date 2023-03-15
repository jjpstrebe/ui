// TODO:
//   - Use SWR for getting the users
//   - Make the add bring up dialog
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MinimizingWindow from '../components/minimizingWindow';
import ModifyPanel from '../components/modifyPanel';
import MainTabs from '../components/mainTabs';
import React, { useState } from "react";
import useUser from "../util/useUser";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


function getUsers() {
  return [
    {username: 'Ashley'},
    {username: 'Jared'},
    {username: 'Haven'},
    {username: 'Liam'},
    {username: 'Lance'},
    {username: 'Levin'},
    {username: 'Eden'},
  ];
}


function deleteUser(name: string) {
  console.log('Deleting user, ' + name);
}


function setPassword(name: string, password: string) {
  console.log('Setting password for user, ' + name + ', to: ' + password);
}


export default function Home() {
  const { user } = useUser({
    redirectTo: "/login",
  });
  const [openIndex, setOpenIndex] = React.useState(-1);
  const [users, setUsers] = React.useState(getUsers());
  return (
    <>
      <Head>
        <title>New App Users</title>
        <meta name="description" content="Generic structure for an app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Box sx={{ padding: 3 }}>
          <h1>Users</h1>
          {
            users ?
              <>{
                users.map((user, i) => (
                  <Accordion key={i} expanded={openIndex == i} onChange={
                    (event: React.SyntheticEvent, expanded: boolean) => {
                      if (expanded) {
                        setOpenIndex(i);
                      } else {
                        setOpenIndex(-1);
                      }
                    }
                  }>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{user.username}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        component="form"
                        noValidate
                        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                          event.preventDefault();
                          const data = new FormData(event.currentTarget);
                          const body = {
                            username: user.username,
                            password: data.get('password'),
                          };
                          console.log(body);
                          window.notify(`Password changed for ${user.username}`, 'success');
                        }}
                      >
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={3} justifyContent="flex-end">
                            <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
                              <TextField
                                type="password"
                                variant="outlined"
                                sx={{ marginLeft: 4, marginRight: 2 }}
                                name="password"
                              />
                            </Grid>
                          </Grid>
                          <Grid item xs={3} justifyContent="flex-start">
                            <Grid container spacing={2} alignItems="center" justifyContent="flex-start">
                              <Button variant="contained" type="submit">Change Password</Button>
                            </Grid>
                          </Grid>
                          <Grid item xs={1}></Grid>
                          <Grid item xs={1}>
                            <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
                              <IconButton onClick={() => {deleteUser(user.username);}}>
                                <DeleteForeverIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}></Grid>
                        </Grid>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))
              }
              <Fab
                sx={{
                  position: 'absolute',
                  bottom: (theme) => theme.spacing(6),
                  right: (theme) => theme.spacing(6),
                }}
              >
                <AddIcon />
              </Fab>
            </> :
            <></>
          }
        </Box>
      </main>
    </>
  )
}
