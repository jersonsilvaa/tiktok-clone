import styles from './styles.module.css'

const AlbumDisk = ({ albumCover = 'https://pps.whatsapp.net/v/t61.24694-24/291483763_3316118818675085_5448892912731441282_n.jpg?ccb=11-4&oh=01_AdQ78LTwcbV_wHU7uha6x8SXYcAzNZhDhEo4K-bVx3rU4w&oe=63CA08C5' }) => {
  return (
    <div className={styles.album}>
      <img className={styles.albumImage} src={albumCover} />
    </div>
  )
}

export default AlbumDisk