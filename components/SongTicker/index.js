import MusicIcon from 'components/Icons/MusicIcon'

import Marquee from 'react-fast-marquee'

import styles from './styles.module.css'

const SongTicker = ({ song }) => {
    return <>
        <div className={styles.song}>
            <MusicIcon />
            <Marquee gradient={false} speed={70}>
                {song}
            </Marquee>
        </div>
    </>
}

export default SongTicker