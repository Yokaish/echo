import styles from './MainSection.module.css';

export function MainSection() {
    return (
        <main className={styles.mainSection}>
            <div className={styles.titleDiv}>
                <h1>ECHO SOLUTIONS</h1>
                <p>
                    <span>{'{*'}</span> economize energia de forma inteligente<span>{'_'}</span>
                </p>
            </div>
            <p className={styles.bottomText}>
                Porque o amanhã começa <br /> com o que você faz hoje
            </p>
        </main>
    );
}
