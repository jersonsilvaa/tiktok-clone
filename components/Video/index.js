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

    const { src, photoURL, likes, comments, shares, author, description, albumCover, song } = props
 
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