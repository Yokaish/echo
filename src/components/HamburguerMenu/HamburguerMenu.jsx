import { useState } from 'react';
import styles from './HamburguerMenu.module.css';

const HamburguerMenu = () => {
    const [open, setOpen] = useState(false); 

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <>
            {/* Botão Hamburguer */}
            <button
                className={styles.hamburguerButton}
                onClick={() => setOpen(prev => !prev)}
            >
                {open ? (
                    <div className={styles.closeIcon}>
                        <span className={styles.line + ' ' + styles.rotate45}></span>
                        <span className={styles.line + ' ' + styles.rotateNeg45}></span>
                    </div>
                ) : (
                    <div className={styles.menuIcon}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>
                )}
            </button>

            {/* Menu de Navegação */}
            <nav
                className={`${styles.menu} ${
                    open ? styles.menuOpen : styles.menuClosed
                }`}
            >
                <a href="#inicio" onClick={handleLinkClick} className={styles.link}>
                    início
                </a>
                <a href="#interface" onClick={handleLinkClick} className={styles.link}>
                    interface
                </a>
                <a href="#video" onClick={handleLinkClick} className={styles.link}>
                    vídeo
                </a>
            </nav>
        </>
    );
};

export default HamburguerMenu;
