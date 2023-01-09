import { useRef, useState } from 'react'

import style from './styles.module.css'

const Video = ({ src }) => {
    const [playing, setPlaying] = useState(false)

    const videoRef = useRef(null)

    const handleClick = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className={style.wrapper}>
            <video
                className={style.videoPlayer}
                loop
                onClick={handleClick}
                ref={videoRef}
                src={src}
                style={{ objectFit: 'cover' }}
            />
        </div>
    )
}

export default Video