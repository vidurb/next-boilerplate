import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Vidur's Next Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-center text-2xl">Vidur's Next Boilerplate</h1>
    </main>
  );
}
