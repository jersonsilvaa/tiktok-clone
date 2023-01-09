import BottomBar from 'components/BottomBar'
import Video from 'components/Video'

import styles from './styles.module.css'

const MainView = () => {
    return <>
        <div className={styles.App}>
            <div className={styles.app__videos}>
                <Video
                    src='https://v16-webapp.tiktok.com/f41076a28e7a30a468fa9c976705fe04/63bc9c0c/video/tos/useast2a/tos-useast2a-ve-0068c002/f16ad76a39b24ae79049768ad9b730c3/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2476&bt=1238&cs=0&ds=3&ft=IecA0ooDD12NvENcqZIxROk_WlJG-UjNSQopi9&mime_type=video_mp4&qs=0&rc=PGc8aDgzZjw1OTVpOzs8PEBpM3U5cDg6ZmtvZzMzNzczM0BgLl8tXi0uNmAxLTRiMi5hYSNfZTNncjRfazBgLS1kMTZzcw%3D%3D&l=20230109165649BA1A8D41D36FE52F8D23&btag=80000'
                />
            </div>
            <BottomBar />
        </div>
    </>
}

export default MainView