import MusicIcon from 'components/Icons/MusicIcon'

import Marquee from 'react-fast-marquee'

import styles from './styles.module.css'

const SongTicker = ({ songTitle }) => {
    return <>
        <div className={styles.song}>
            <MusicIcon />
            <Marquee gradient={false} speed={70}>
                {songTitle}
            </Marquee>
        </div>
    </>
}

export default SongTicker