import CaptionUpload from 'components/CaptionUpload'
import styles from './styles.module.css'

const UploadCard = () => {
    return <>
        <div className={styles.content__upload}>
            <div className={styles.uploader}>
                <div>
                    <input type='file' accept='video/*' style={{ display: 'none' }} className={styles.upload} />

                    <div className={styles.upload__card_stage}>
                        <img src='https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-us/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg' />

                        <div className={styles.text__card}>
                            <span className={styles.text}>
                                Selecciona el video para cargar
                            </span>
                        </div>
                        <div className={styles.text__sub}>
                            <span className={styles.title__v3}>
                                O arrastra y suelta un archivo
                            </span>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.separation}>
                                <span className={styles.text__description}>MP4 o WebM</span>
                            </div>
                            <div className={styles.separation}>
                                <span className={styles.text__description}>Resolución de al menos 720x1280</span>
                            </div>
                            <div className={styles.separation}>
                                <span className={styles.text__description}>Hasta 180 segundos</span>
                            </div>
                            <div className={styles.separation}>
                                <span className={styles.text__description}>Menos de 2 GB</span>
                            </div>
                        </div>
                        <div className={styles.file__select}>
                            <button className={styles.select}>
                                <div className={styles.content__button}>
                                    <div className={styles.text__button}>
                                        Selecciona un archivo
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <CaptionUpload />
        </div>
    </>
}

export default UploadCard