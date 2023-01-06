import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

import styles from './styles.module.css'

const SignUp = () => {
    const [isActiveUser, setActiveUser] = useState()
    const [isActivePhoto, setActivePhoto] = useState()

    const router = useRouter()

    const handleChangeUser = e => {
        if (e.target.value.length > 5) {
            setActiveUser(e.target.value)
        } else {
            setActiveUser(false)
        }
    }

    const handleChangePassword = e => {
        if (e.target.value.length > 8) {
            setActivePhoto(e.target.value)
        } else {
            setActivePhoto(false)
        }
    }

    const handleClickSignUp = () => {
        console.log('Registrado')
    }

    const routerPage = e => {
        e.preventDefault()
        router.push('/login')
    }

    return <>
        <Head>
            <title>Regístrate | TikTok</title>
            <meta name='description' content='TikTok Clone next.js firebase' />
            <link rel='icon' href='favicon.png' />
        </Head>
        <div className='app'>
            <section className={styles.login__container}>
                <h1 className={styles.login__title}>Regístrate en TikTok</h1>
                <h2 className={styles.login__subtitle}>Crea un perfil, sigue otras cuentas, graba tus propios vídeos y más.</h2>
                <div className={styles.signup__form}>
                    <div className={styles.input__field}>
                        <div className={styles.input__title}>
                            Usuario
                        </div>
                        <div className={styles.input__container}>
                            <input className={styles.input} type='email' placeholder='Nombre de usuario' required onChange={handleChangeUser} />
                        </div>
                    </div>
                    <div className={styles.input__field}>
                        <div className={styles.input__title}>
                            Contraseña
                        </div>
                        <div className={styles.input__container}>
                            <input className={styles.input} type='password' placeholder='Contraseña' required onChange={handleChangePassword} />
                        </div>
                    </div>
                </div>

                <button type='submit' onClick={handleClickSignUp} disabled={!isActiveUser | !isActivePhoto} className={styles.login__button}>
                    Registrarse
                </button>
            </section>
            <div className={styles.footer__text}>
                <p className={styles.text__terms}>
                    Al continuar, confirmas que estás de acuerdo con los <a target='_blank' rel='noopener noreferrer' className={styles.link} href="https://www.tiktok.com/legal/terms-of-use?lang=es">Términos de uso</a> de TikTok y que has leído la <a target='_blank' rel='noopener noreferrer' className={styles.link} href="https://www.tiktok.com/legal/privacy-policy?lang=es">Política de privacidad</a>  de TikTok.
                </p>
            </div>
            <div className={styles.footer__container}>
                <div className={styles.text__login}>¿Ya tienes una cuenta?</div>
                <a onClick={routerPage} className={styles.link__login}>
                    <span className={styles.bottom__login}>Iniciar sesión</span>
                </a>
            </div>
        </div>
    </>
}

export default SignUp