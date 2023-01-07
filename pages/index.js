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

const Home = () => {
  const router = useRouter()

  const redirectEmail = () => {
    router.push('/email')
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
        <div onClick={redirectEmail} className='login__with'>
          <div className='login__icon'>
            <User />
          </div>
          <p>Usar teléfono/correo/nombre de usuario</p>
        </div>
        <div onClick={signInWithFacebook} className='login__with'>
          <div className='login__icon'>
            <Facebook />
          </div>
          <p>Continuar con Facebook</p>
        </div>
        <div onClick={signInWithGoogle} className='login__with'>
          <div className='login__icon'>
            <Google />
          </div>
          <p>Continuar con Google</p>
        </div>
        <div onClick={signInWithGithub} className='login__with'>
          <div className='login__icon'>
            <Github />
          </div>
          <p>Continuar con Github</p>
        </div>
      </section>
    </div>
  </>
}

export default Home