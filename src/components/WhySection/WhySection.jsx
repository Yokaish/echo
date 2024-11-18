import styles from './WhySection.module.css'

export function WhySection() {
    return (
        <section className={styles.whyContainer}>
            <h2>WHY ECCO?</h2>
            <div>

                <div className={styles.numberContainer}>
                    <div>
                        <span>1</span>
                    </div>
                    <p className={styles.paragraph}>
                        <span>{'{*'}</span> Echo monitora, ajusta <br />
                        <span className={styles.spaceTwo}></span>e recompensa seu consumo de <br />
                        <span className={styles.spaceOne}></span>energia em tempo real<span>{'_'}</span>
                    </p>


                </div>

                <div className={styles.numberContainer}>
                    <div>
                        <span>2</span>
                    </div>
                    <p className={styles.italic}>
                        <span>{'//'}</span> Desafie o comum<br />
                        <span>{'//'}</span> Domine sua energia
                    </p>
                </div>

                <div className={styles.numberContainer}>
                    <div>
                        <span>3</span>
                    </div>
                    <p className={styles.paragraph}>
                        <span>{'<'}</span>Echo<br />
                        <span className={styles.spaceTwo}></span>innovation={'{'}<span>{'true'}</span>{'}'}<br />
                        <span>{'/>'}</span>
                    </p>
                </div>

            </div>
        </section>
    )
}