import styles from './sass-modules/Nav.module.scss';

function Nav() {
    return (
        <div className={styles.container}>
            <p className={styles.tab + ' ' + styles.active}>Home</p>
            <p className={styles.tab}>Projects</p>
            <p className={styles.tab}>Contact</p>
        </div>
    )
}

export default Nav;