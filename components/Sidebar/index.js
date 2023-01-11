import Avatar from 'components/Avatar'
import Heart from 'components/Icons/Heart'
import Share from 'components/Icons/Share'
import Comment from 'components/Icons/Comment'

import styles from './styles.module.css'

const Sidebar = ({ author, photoURL, likes, comments, shares }) => {
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
      <Avatar author={author} photoURL={photoURL} />
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