import BottomBar from 'components/BottomBar'
import FeedVideos from 'components/FeedVideos'

import styles from './styles.module.css'

const MainView = () => {
    return <>
        <div className={styles.App}>
            <div className={styles.app__videos}>
                <FeedVideos />
            </div>
            <BottomBar />
        </div>
    </>
}

export default MainView