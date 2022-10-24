import '../../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="UTF-8"/>
      <title>Clebson</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://clebson.cc" />
      <meta name="keywords" content="Clebson, Professor particular, JavaScript, Node.js, Aulas, Java, Programação"/>
      <meta name="description" content="Engenheiro de software, professor e criador de conteúdo." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Clebson Augusto Fonseca" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
