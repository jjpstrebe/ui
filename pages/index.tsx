import Head from 'next/head'
import styles from '../styles/Home.module.css'
//import MinimizingWindow from '../components/minimizingWindow';
import MainTabs from '../components/mainTabs';
import React, { useState } from "react";

//        <MinimizingWindow title="Window Title">
//          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
//          squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
//          sapiente ea proident.
//        </MinimizingWindow>
export default function Home() {
  return (
    <>
      <Head>
        <title>New App</title>
        <meta name="description" content="Generic structure for an app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MainTabs />
      </main>
    </>
  )
}
