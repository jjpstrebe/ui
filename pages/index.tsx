import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MinimizingWindow from '../components/minimizingWindow';
import ReactiveButton from 'reactive-button';
import MainTabs from '../components/mainTabs';


import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
//import TabPanel from '@mui/lab/TabPanel';

import Container from '@mui/material/Container';

import React, { useState, SyntheticEvent, ReactNode } from "react";


const blockElements = {
    content: 'tabs-content',
    panel: 'tabs-panel',
    label: 'tabs-title'
}

export default function Home() {
  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');

    // send an HTTP request
    setTimeout(() => {
      setState('success');
    }, 2000);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generic structure for an app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MinimizingWindow open title="Window Title">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
          squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident.
        </MinimizingWindow>
        <ReactiveButton
          buttonState={state}
          idleText="Submit"
          loadingText="Loading"
          successText="Done"
          color="dark"
          size="large"
          onClick={onClickHandler}
        />

        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Next.js example
            </Typography>
          </Box>
        </Container>

        <MainTabs />

      </main>
    </>
  )
}
