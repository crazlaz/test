import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Donate from '../components/Donate'
import TheList from '../components/TheList'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Expose Goverment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Exposed Government 
        </h1>
        

        <p className={styles.description}>
          a place to see the true face of our 'elected' leaders.
        </p>

        <p className={styles.description}>
          This website is not meant to hurt our Government but promote the true face of our elected leaders. We deserver to know who is controlling the reality we are in.

        </p>

        <TheList />

<Donate />
       
      </main>

      <footer className={styles.footer}>
        
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          class='font-bold'
        >
          
Powered by the people of the United States of America.
        </a>
      </footer>
    </div>
  )
}
