import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="tattoo" content="tattoo" />
      </Head>

      <div>
        <h1 className={styles.title}>HELLO</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, enim eaque est, totam tempore fuga repellendus commodi libero quos officiis et dolore reprehenderit debitis nam maiores, vel quibusdam delectus explicabo.</p>
        <Link href="/ninjas">
          <span className={styles.btn}>see ninja listing</span>
        </Link>
      </div>
    </div>
  )
}
