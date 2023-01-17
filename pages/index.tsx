import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import MinimizingWindow from '../components/minimizingWindow';
import ReactiveButton from 'reactive-button';
import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion'
import React, { useState } from "react";

const inter = Inter({ subsets: ['latin'] })

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



        <Tabbordion blockElements={blockElements} className="tabs" name="tabs">
            <TabPanel>
                <TabLabel>My title</TabLabel>
                <TabContent>
                    <h2>Sample</h2>
                    <p>Content</p>
                </TabContent>
            </TabPanel>
            <TabPanel>
                <TabLabel>Another title</TabLabel>
                <TabContent>
                    <h2>Another Sample</h2>
                    <p>Some other kind of content</p>
                </TabContent>
            </TabPanel>
        </Tabbordion>



      </main>
    </>
  )
}
