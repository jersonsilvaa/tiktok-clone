import { useRef } from 'react'

import clsx from 'clsx'

import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import useIntersectionVideoPlayer from 'hooks/useIntersectionVideo'

import styles from './styles.module.css'

const Video = (props) => {
    const video = useRef(null)

    const { playing, handlePlay } = useIntersectionVideoPlayer({ video })

    const playClassName = clsx(styles.player, {
        [styles.hidden]: playing
    })

    const { src } = props
 
    return <>
        <div className={styles.wrapper}>
            <video
                loop
                ref={video}
                src={src}
                style={{ objectFit: 'cover' }}
                onClick={handlePlay}
                className={styles.videoPlayer}
            />
            <button onClick={handlePlay} className={playClassName} />
            <Sidebar { ...props }/>
            <Footer { ...props }/>
        </div>
    </>
}

export default Video