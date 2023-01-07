import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

import Back from 'components/Icons/Back'

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

    const routerPage = () => {
        router.replace('/')
    }

    return <>
        <Head>
            <title>Iniciar sesión | TikTok</title>
            <meta name='description' content='TikTok Clone next.js firebase' />
            <link rel='icon' href='favicon.png' />
        </Head>
        <div className='app'>
            <Back onClick={routerPage} className={styles.back__button} />
            <section className={styles.login__container}>
                <h1 className={styles.login__title}>Iniciar sesión</h1>
                <div className={styles.signup__form}>
                    <div className={styles.input__field}>
                        <div className={styles.input__title}>
                            Correo
                        </div>
                        <div className={styles.input__container}>
                            <input className={styles.input} type='email' placeholder='Ingrese su dirección de correo' required onChange={handleChangeUser} />
                        </div>
                    </div>
                    <div className={styles.input__field}>
                        <div className={styles.input__title}>
                            Contraseña
                        </div>
                        <div className={styles.input__container}>
                            <input className={styles.input} type='password' placeholder='Ingrese una contraseña' required onChange={handleChangePassword} />
                        </div>
                    </div>
                </div>

                <button type='submit' disabled={!isActiveUser | !isActivePhoto} className={styles.login__button}>
                    Iniciar sesión
                </button>
            </section>
        </div>
    </>
}

export default SignUp