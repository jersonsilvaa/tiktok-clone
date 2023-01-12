import { useRouter } from 'next/router'

import styles from './styles.module.css'

const CaptionUpload = () => {
    const router = useRouter()
    
    const handleCancel = e => {
        e.preventDefault()
        router.replace('/home')
    }

    return <>
        <div className={styles.form}>
            <div className={styles.caption__description}>
                <div className={styles.container}>
                    <div>
                        <div className={styles.text__container}>
                            <span className={styles.text__description_caption}>
                                Descripción <span className={styles.dot}>*</span>
                                <input type='text' className={styles.input__description} placeholder='Ingresar descripción del video' />
                            </span>
                        </div>
                        <br /> <br />
                        <div className={styles.text__container}>
                            <span className={styles.text__description_caption}>
                                Canción
                                <input type='text' className={styles.input__description} placeholder='Ingresar nombre de la canción y del artista' />
                            </span>
                        </div>
                        <div className={styles.button__container}>
                            <div className={styles.button__cancel}>
                                <button className={styles.cancel} onClick={handleCancel}>
                                    <div className={styles.text__cancel}>
                                        <div className={styles.text}>
                                            Descartar
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className={styles.button__send}>
                                <button className={styles.send}>
                                    <div className={styles.text__send}>
                                        <div className={styles.text}>
                                            Publicar
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CaptionUpload