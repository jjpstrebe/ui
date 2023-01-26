import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MinimizingWindow from '../components/minimizingWindow';
import ModifyPanel from '../components/modifyPanel';
import MainTabs from '../components/mainTabs';
import React, { useState } from "react";

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
        <MinimizingWindow title="Window Title">
          <ModifyPanel />
        </MinimizingWindow>
      </main>
    </>
  )
}
