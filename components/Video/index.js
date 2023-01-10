import { useRef, useState } from 'react'

import clsx from 'clsx'

import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'

import styles from './styles.module.css'

const Video = ({ src, author, description, photoURL, song, likes, comments, shares, albumCover }) => {
    const [playing, setPlaying] = useState(true)

    const videoRef = useRef(null)

    const handleClick = () => {
        const { current: videoEl } = videoRef

        playing ? videoEl.play() : videoEl.pause()
        
        setPlaying(!playing)
    }

    const playClassName = clsx(styles.player, {
        [styles.hidden]: !playing
    })
 
    return <>
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
            <Sidebar
                photoURL={photoURL}
                likes={likes}
                comments={comments}
                shares={shares}
            />
            <Footer
                author={author}
                description={description}
                albumCover={albumCover}
                song={song}
            />
        </div>
    </>
}

export default Video