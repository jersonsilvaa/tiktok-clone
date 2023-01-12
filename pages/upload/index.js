import Head from 'next/head'

import useUser from 'hooks/useUser'

import UploadCard from 'components/UploadCard'

import styles from './styles.module.css'

const Upload = () => {
    const user = useUser()

    return <>
        <Head>
            <title>Cargar | TikTok</title>
            <meta name='description' content='TikTok Clone next.js firebase' />
            <link rel='icon' href='favicon.png' />
        </Head>
        {user && (
            <div className={styles.wrapper}>
                <div className={styles.layout}>
                    <div className={styles.layout__container}>
                        <div className={styles.container}>
                            <div className={styles.container__title}>
                                <span className={styles.title}>Cargar video</span>
                                <div className={styles.sub__title}>
                                    <span className={styles.title__v2}>Publica un video en tu cuenta</span>
                                </div>
                            </div>
                            <UploadCard />
                        </div>
                    </div>
                </div>
            </div>
        )
        }
    </>
}

export default Upload