import Head from 'next/head'

import Login from './login'

const Home = () => {
  return <>
    <Head>
      <title>Mira vídeos populares seleccionados para ti | TikTok</title>
      <meta name='description' content='TikTok Clone next.js firebase' />
      <link rel='icon' href='favicon.png' />
    </Head>

    <Login />
  </>
}

export default Home