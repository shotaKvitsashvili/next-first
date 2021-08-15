import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
