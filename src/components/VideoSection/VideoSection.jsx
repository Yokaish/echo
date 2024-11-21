import styles from './VideoSection.module.css'

export function VideoSection() {
    return (
        <div className={styles.video} id='video'>
            <span className={styles.phrase}>CHECK IT OUT</span>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/4vzYzhQqU5w?si=Ft8Ck6p-tnPLNT1W" 
                title="YouTube video player" 
                frameBorder="0"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen  
            ></iframe>
        </div>
    )
}
