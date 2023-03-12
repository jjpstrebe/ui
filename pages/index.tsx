import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MinimizingWindow from '../components/minimizingWindow';
import ModifyPanel from '../components/modifyPanel';
import MainTabs from '../components/mainTabs';
import React, { useState } from "react";
import useUser from "../util/useUser";


export default function Home() {
  const { user } = useUser({
    redirectTo: "/login",
  });
  let title = 'New App'
  if (user) {
    title += ' for ' + user.login.toString();
  }
  return (
    <>
      <Head>
        <title>{title}</title>
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
