import logo from '../../assets/icons/echo-logo.svg'

import styles from './Footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt='Echo Logo' />
            <p><span>{'{*'}</span> <strong>Transformando</strong> a maneira como você <br /> 
            <span className={styles.spaceTwo}></span>consome energia <br />
            <span className={styles.spaceOne}></span>com <strong>inovação, sustentabilidade e economia</strong><span>{'_'}</span></p>
        </footer>
    )
}