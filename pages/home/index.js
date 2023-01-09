import Head from 'next/head'

import useUser from 'hooks/useUser'
import MainView from 'components/MainView'

import styles from './styles.module.css'

const Home = () => {
    const user = useUser()

    return <>
        <Head>
            <title>Mira vídeos populares seleccionados para ti | TikTok</title>
            <meta name='description' content='TikTok Clone next.js firebase' />
            <link rel='icon' href='favicon.png' />
        </Head>
        {
            user && (
                <div className={styles.app__content}>
                    <div className={styles.app__videos}>
                        <MainView />
                    </div>
                </div>
            )
        }
    </>
}

export default Home