import Head from 'next/head'
import { useRouter } from 'next/router'

import User from 'components/Icons/User'
import Google from 'components/Icons/Google'
import Github from 'components/Icons/Github'
import Facebook from 'components/Icons/Facebook'

import {
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook
} from 'services/client'

import styles from './styles.module.css'

const Login = () => {
    const router = useRouter()

    const handleSignup = () => {
        router.push('/signup')
    }
    return <>
        <Head>
            <title>Iniciar sesión | TikTok</title>
            <meta name='description' content='TikTok Clone next.js firebase' />
            <link rel='icon' href='favicon.png' />
        </Head>
        <div className='app'>
            <section className={styles.login__container}>
                <h1 className={styles.login__title}>Iniciar sesión en TikTok</h1>
                <h2 className={styles.login__subtitle}>Gestiona tu cuenta, lee notificaciones, comenta sobre vídeos y más</h2>
                <div className={styles.login__with}>
                    <div className={styles.login__icon}>
                        <User />
                    </div>
                    <p>Usar teléfono/correo/nombre de usuario</p>
                </div>
                <div onClick={signInWithFacebook} className={styles.login__with}>
                    <div className={styles.login__icon}>
                        <Facebook />
                    </div>
                    <p>Continuar con Facebook</p>
                </div>
                <div onClick={signInWithGoogle} className={styles.login__with}>
                    <div className={styles.login__icon}>
                        <Google />
                    </div>
                    <p>Continuar con Google</p>
                </div>
                <div onClick={signInWithGithub} className={styles.login__with}>
                    <div className={styles.login__icon}>
                        <Github />
                    </div>
                    <p>Continuar con Github</p>
                </div>
            </section>
            <div className={styles.footer__container}>
                <div className={styles.text__login}>¿No tienes cuenta?</div>
                <a onClick={handleSignup} className={styles.link__login}>
                    <span className={styles.bottom__login}>Registrarse</span>
                </a>
            </div>
        </div>
    </>
}

export default Login