import womenInove from '../../assets/img/inove-woman.jpg'

import styles from './InoveSection.module.css'

export function InoveSection() {
    return (
        <div className={styles.inoveContainer}>
            <img src={womenInove} alt="Inove Woman" />
            <p><span>{'{*'}</span> <strong>Inovação</strong> <br /><span className={styles.spaceTwo}></span> na palma da <strong>sua</strong> mão<span>{'_'}</span></p>
        </div>
    )
}