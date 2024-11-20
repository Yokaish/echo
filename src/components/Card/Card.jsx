import styles from './Card.module.css'

export function Card({interfaceImg}) {
    return (
        <div>
            <img className={styles.image} src={interfaceImg} alt="Interface" />
        </div>
    )
}