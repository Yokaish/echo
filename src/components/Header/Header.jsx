import { useState, useEffect } from 'react';
import logo from '../../assets/icons/echo-logo.svg';
import styles from './Header.module.css';
import HamburguerMenu from '../HamburguerMenu/HamburguerMenu';

export function Header() {
    
    const [isVisible, setIsVisible] = useState(true); // Controla visibilidade do header
    const [isScrolled, setIsScrolled] = useState(false); // Controla background do header
    const [lastScrollY, setLastScrollY] = useState(0); // Rastreia posição do scroll

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Verifica se o usuário rolou para baixo ou para cima
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false); // Esconde header
            } else {
                setIsVisible(true); // Mostra header
            }

            // Adiciona background ao rolar mais de 50px
            setIsScrolled(currentScrollY > 200);

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`${styles.header} 
                        ${isVisible ? styles.visible : styles.hidden} 
                        ${isScrolled ? styles.scrolled : ''}`}
        >
            <a href="#inicio"><img src={logo} alt="Echo Logo" /></a>

            <HamburguerMenu />

            <nav className={styles.navigation}>
                <a className={styles.navOption} href="#inicio">início</a>
                <a className={styles.navOption} href="#interface">interface</a>
                <a className={styles.borderAnchor} href="#video">vídeo</a>
            </nav>
        </header>
    );
}
