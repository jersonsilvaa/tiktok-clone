import Heart from 'components/Icons/Heart'
import Share from 'components/Icons/Share'
import Comment from 'components/Icons/Comment'

import styles from './styles.module.css'

const Sidebar = ({ username = 'devsilva', avatar = 'https://pps.whatsapp.net/v/t61.24694-24/291483763_3316118818675085_5448892912731441282_n.jpg?ccb=11-4&oh=01_AdQ78LTwcbV_wHU7uha6x8SXYcAzNZhDhEo4K-bVx3rU4w&oe=63CA08C5', likes = 12, comments = 34, shares = 35, hearted = false }) => {
  const handleLike = () => {
    window.alert('Like')
  }

  const handleComment = () => {
    window.alert('Comentar')
  }

  const handleShare = () => {
    window.alert('Compartir')
  }
  return <>
    <aside className={styles.actions}>
      <div className={styles.user}>
        <img alt={username} src={avatar} />
        <img src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg' width='24' />
      </div>
      <button onClick={handleLike} className={styles.action}>
        <Heart />
        <span title='like'>{likes}</span>
      </button>

      <button onClick={handleComment} className={styles.action}>
        <Comment width='35' />
        <span title='comments'>{comments}</span>
      </button>

      <button onClick={handleShare} className={styles.action}>
        <Share width='35' />
        <span title='shares'>{shares}</span>
      </button>
    </aside>
  </>
}

export default Sidebar