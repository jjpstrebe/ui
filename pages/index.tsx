import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import MinimizingWindow from '../components/minimizingWindow';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
      </main>
    </>
  )
}
