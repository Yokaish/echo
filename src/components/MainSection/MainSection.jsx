import { useEffect } from 'react';
import styles from './MainSection.module.css';

export function MainSection() {
    useEffect(() => {
        // Pré-carregando a imagem
        const img = new Image();
        img.src = '../../assets/img/main-background-min.webp';
    }, []);

    return (
        <section className={styles.mainSection} id='inicio'>
            <div className={styles.titleDiv}>
                <h1>ECHO SOLUTIONS</h1>
                <p>
                    <span>{'{*'}</span> economize energia de forma inteligente<span>{'_'}</span>
                </p>
            </div>
            <p className={styles.bottomText}>
                Porque o amanhã começa <br /> com o que você faz hoje
            </p>
        </section>
    );
}
