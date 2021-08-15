import Head from 'next/head'
import styles from '../../styles/Jobs.module.css'
import Link from 'next/link'

const index = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninjas</title>
            </Head>
            <div>
                <h1>All ninjas</h1>
                {ninjas.map(ninja => (
                    <div key={ninja.id}>
                        <Link href={`/ninjas/${ninja.id}`}>
                            <a className={styles.single}>
                                <h3>{ninja.name}</h3>
                            </a>
                        </Link>

                    </div>
                ))}
            </div>
        </>
    );
}


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();


    return {
        props: { ninjas: data }
    }
}


export default index;
