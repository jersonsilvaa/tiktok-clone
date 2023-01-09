import clsx from 'clsx'
import { useRef, useState } from 'react'

import styles from './styles.module.css'

const Video = ({ src }) => {
    const [playing, setPlaying] = useState(false)

    const videoRef = useRef(null)

    const handleClick = () => {
        const { current: videoEl } = videoRef

        playing ? videoEl.play() : videoEl.pause()
        
        setPlaying(!playing)
    }

    const playClassName = clsx(styles.player, {
        [styles.hidden]: !playing
    })

    return (
        <div className={styles.wrapper}>
            <video
                loop
                ref={videoRef}
                src={src}
                style={{ objectFit: 'cover' }}
                onClick={handleClick}
                className={styles.videoPlayer}
            />
            <button onClick={handleClick} className={playClassName} />
        </div>
    )
}

export default Video