import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import User from 'components/Icons/User'
import Google from 'components/Icons/Google'
import Github from 'components/Icons/Github'
import Facebook from 'components/Icons/Facebook'

import useUser, { STATES } from 'hooks/useUser'

import { loginWithFacebook, loginWithGoogle, loginWithGithub } from 'services/client'

const Home = () => {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/home')
  }, [user])


  const redirectEmail = () => {
    router.push('/email')
  }

  const handleLoginFacebook = () => {
    loginWithFacebook()
      .catch(err => {
        console.error(err)
      })
  }

  const handleLoginGoogle = () => {
    loginWithGoogle()
      .catch(err => {
        console.error(err)
      })
  }

  const handleLoginGithub = () => {
    loginWithGithub()
      .catch(err => {
        console.error(err)
      })
  }
  return <>
    <Head>
      <title>Iniciar sesión | TikTok</title>
      <meta name='description' content='TikTok Clone next.js firebase' />
      <link rel='icon' href='favicon.png' />
    </Head>
    <div className='app'>
      <section className='login__container'>
        <h1 className='login__title'>Iniciar sesión en TikTok</h1>
        <h2 className='login__subtitle'>Gestiona tu cuenta, lee notificaciones, comenta sobre vídeos y más</h2>
        {
          user === STATES.NOT_LOGGED && <>
            <div onClick={redirectEmail} className='login__with'>
              <div className='login__icon'>
                <User />
              </div>
              <p>Usar teléfono/correo/nombre de usuario</p>
            </div>
            <div onClick={handleLoginFacebook} className='login__with'>
              <div className='login__icon'>
                <Facebook />
              </div>
              <p>Continuar con Facebook</p>
            </div>
            <div onClick={handleLoginGoogle} className='login__with'>
              <div className='login__icon'>
                <Google />
              </div>
              <p>Continuar con Google</p>
            </div>
            <div onClick={handleLoginGithub} className='login__with'>
              <div className='login__icon'>
                <Github />
              </div>
              <p>Continuar con Github</p>
            </div>
          </>
        }
        {user === STATES.NOT_KNOWN && <img src='spinner.gif' />}
      </section>
    </div>
  </>
}

export default Home