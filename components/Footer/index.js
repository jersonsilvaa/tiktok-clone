import AlbumDisk from './AlbumDisk'
import SongTicker from 'components/SongTicker'

import styles from './styles.module.css'

const Footer = ({ albumCover, description = '#bromita que no que sí, vamooo', username = 'devsilva', songTitle = 'Búscandola - Luis Mateus' }) => {
  return <>
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <section>
            <p className={styles.author}>
              @{username}
            </p>
          <p className={styles.text}>
            {description}
          </p>
        </section>
        <SongTicker songTitle={songTitle} />
      </div>
      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>
    </footer>
  </>
}

export default Footer