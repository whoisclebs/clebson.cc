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
      <meta name="description" content="Clebson Augusto Fonseca é Engenheiro de software, professor, palestrante e criador de conteúdo. Atualmente é professor particular, tem o foco em distribuir conhecimento para o máximo de alunos possível e contribuir com o open source." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Clebson Augusto Fonseca" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
