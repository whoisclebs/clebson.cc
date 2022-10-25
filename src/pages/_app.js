import '../../styles/globals.css'
import Head from 'next/head';
import Script from 'next/script'
import GA from '../components/analytics/ga';

function MyApp({ Component, pageProps }) {
  return <>
    <GA/>
    <Head>
      <meta charSet="UTF-8"/>
      <title>Clebson Augusto Fonseca</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://clebson.cc" />
      <meta name="keywords" content="Clebson, Professor particular, JavaScript, Node.js, Aulas, Java, Programação"/>
      <meta name="description" content="Clebson Augusto Fonseca é Engenheiro de software, professor, palestrante e criador de conteúdo. Atualmente é professor particular, tem o foco em distribuir conhecimento para o máximo de alunos possível e contribuir com o open source." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Clebson Augusto Fonseca" />
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://clebson.cc/"/>
      <meta property="og:title" content="Clebson Augusto Fonseca"/>
      <meta property="og:description" content="Clebson é Engenheiro de software, professor, palestrante e criador de conteúdo. Atualmente é professor particular, tem o foco em distribuir conhecimento para o máximo de alunos possível e contribuir com o open source."/>
      <meta property="og:image" content="/preview.png"/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://clebson.cc/"/>
      <meta property="twitter:title" content="Clebson Augusto Fonseca"/>
      <meta property="twitter:description" content="Clebson é Engenheiro de software, professor, palestrante e criador de conteúdo. Atualmente é professor particular, tem o foco em distribuir conhecimento para o máximo de alunos possível e contribuir com o open source."/>
      <meta property="twitter:image" content="/preview.png"></meta>
    </Head>
    <Component {...pageProps} />
    <Script 
      id='ld+json'
      type='application/ld+json'
      dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "http://www.schema.org",
          "@type": "person",
          "name": "Clebson Augusto Fonseca",
          "jobTitle": "Desenvolvedor | Professor | Palestrante | Open source Lover",
          "url": "https://clebson.cc/",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jacaraú",
            "addressRegion": "Paraíba",
            "postalCode": "58278-000",
            "addressCountry": "Brasil"
          },
          "email": "clebson.augusto@dcx.ufpb.br",
          "birthDate": "1999-09-24"
      })}}
    />
  </>
}

export default MyApp
