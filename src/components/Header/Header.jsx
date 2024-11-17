import logo from '../../assets/icons/echo-logo.svg';

import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Echo Logo" />
            <nav>
                <a className={styles.navOption} href="#tag">início</a>
                <a className={styles.navOption} href="#tag">interface</a>
                <a className={styles.borderAnchor} href="#tag">vídeo</a>
            </nav>
        </header>

    );
}
