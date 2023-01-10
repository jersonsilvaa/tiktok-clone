import AlbumDisk from './AlbumDisk'
import SongTicker from 'components/SongTicker'

import styles from './styles.module.css'

const Footer = ({ author, description, albumCover, song }) => {
  return <>
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <section>
            <p className={styles.author}>
              @{author}
            </p>
          <p className={styles.text}>
            {description}
          </p>
        </section>
        <SongTicker song={song} />
      </div>
      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>
    </footer>
  </>
}

export default Footer