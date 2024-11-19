import styles from './VideoSection.module.css'

export function VideoSection() {
    return (
        <div className={styles.video}>
            <span className={styles.phrase}>CHECK IT OUT</span>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TzfnlPxCZv0?si=6ibilPOSoJZXuswa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}