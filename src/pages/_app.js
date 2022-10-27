import '../../styles/globals.css'
import Head from 'next/head';
import Script from 'next/script'
import GA from '../components/analytics/ga';


const schemaData = {
  "@context": "http://www.schema.org",
  "@type": "Person",
  "name": "Clebson Augusto Fonseca",
  "disambiguatingDescription": "Founder Ledthinking Academy, Software Engineer, Professor, Palestrante e Criador de Conteúdo",
  "alternateName": "Clebson Augusto",
  "nationality": "Brasileiro",
  "jobTitle": "Professor",
  "gender": "Male",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jacaraú",
    "addressRegion": "Paraíba",
    "postalCode": "58278-000",
    "addressCountry": "Brasil"
  },
  "worksFor": [
    {
      "@type": "Organization",
      "name": "Ledthinking",
      "url": "https://ledthinking.com.br/",
      "sameAs": [
        "https://twitter.com/ledthinking",
        "https://www.facebook.com/ledthinking",
        "https://www.linkedin.com/company/ledthinking",
        "https://www.linkedin.com/school/ledthinking-academy",
        "https://www.instagram.com/ledthinking",
        "https://www.instagram.com/ledthinking.academy"
      ]
    }
  ],
  "alumniOf": [
    {
     "@type": "CollegeOrUniversity",
     "name": "Universidade Federal da Paraíba",
     "sameAs": "https://pt.wikipedia.org/wiki/Universidade_Federal_da_Para%C3%ADba"
    }
  ],
  "email": "clebson.augusto@dcx.ufpb.br",
  "birthDate": "1999-09-24",
  "birthPlace" : {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jacaraú",
      "addressRegion": "Paraíba",
      "addressCountry": "Brasil"
    }
  },
  "url": "https://clebson.cc/",
  "sameAs": [
    "https://twitter.com/cl3bsonf",
    "https://www.linkedin.com/in/clebsonf/",
    "https://stackoverflow.com/users/20201406/clebsonf",
    "https://instagram.com/cl3bsonf",
    "https://www.linkedin.com/in/clebsonf/",
    "https://medium.com/@clebson",
    "https://dev.to/clebsonf"
  ]
}

function MyApp({ Component, pageProps }) {
  return <>
    <GA/>
    <Script 
          id='ld+json'
          type='application/ld+json'
          dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
    />
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
  </>
}

export default MyApp
