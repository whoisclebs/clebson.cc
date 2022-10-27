import Image from 'next/future/image'
import Head from 'next/head'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/navbar'

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

export default function Home() {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar/>
      <Head>
        <title>Clebson Augusto Fonseca - Sobre min</title>
        <script 
          id='ld+json'
          type='application/ld+json'
          dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
        />
      </Head>
      <main>
        <div className="gap-16 items-center py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h1 className="text-2xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Clebson Augusto Fonseca</h1>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sobre mim:</h2>
              <p className="mb-4"> 
                Me chamo Clebson, 🔭 atualmente trabalho na @Ledthinking e na @LedthinkingAcademy. Programo desde os meus 12 anos e busco sempre evoluir cada vez mais, para celebrar esses 10 anos de programação, resolvi criar esse blog para compartilhar um pouco do meu conhecimento, conquista e experiência com vocês.
              </p>
              <p>
                🌱 Hoje meu foco em estudo é arquitetura limpa, web3.0, webassembly e japonês. Também curto trabalhar com open-source e participar de bastante hackathons, por mais que eu esteja sumidos nesses ultimos tempos.
              </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
              <Image width={348.5} height={618} className="w-full rounded-lg" priority src="/clebson-2019.jpeg" alt="Clebson Augusto Fonseca no ano de 2019"/>
              <Image width={348.5} height={618} className="mt-4 w-full lg:mt-10 rounded-lg" priority={false} src="/clebson-2022.jpg" alt="Clebson Augusto fonseca no ano de 2022"/>
          </div>
        </div>
        <div className="mb-28 pb-16 px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-6"> 
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Conquistas:</h2>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="leading-none text-gray-400 dark:text-gray-500">Concedido(s) por Campus party ·<time dateTime="2020-08-06 17:00" className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">ago 2021</time></span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    1º lugar Hackathon Reboot The World, Campus party Digital - Goiás - 2021
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Durante o ano 2021, finalmente veio o tão sonhado primeiro lugar. Tinhamos lançado nossa ferramenta de dados abertos, strike.tours, uma rede social que formentaria o turismo da região de Goiás.</p>
                  <a target="_blank" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" href='https://www.desenvolvimento.go.gov.br/noticias/4177-passaporte-digital-para-turistas-vence-hackathon-na-campus-party-digital-goias.html' rel="noreferrer">Leia sobre</a>
              </li>
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="leading-none text-gray-400 dark:text-gray-500">Concedido(s) por Campus party ·<time dateTime="2020-07-11 17:00" className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">jul 2020</time></span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">2º lugar hackaton desafio com dados abertos, Campus party Digital - Goiás 2020</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Em 2020 tive minha segunda experiencia com hackathon, quase 1 ano depois do meu primeiro hackathon, lá estava eu de novo, nosso desafio era criar uma solução utilizando dados abertos do estado de Goiás. Ficamos em segundo lugar com uma ferramenta de gestão financeira.</p>
              </li>
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="leading-none text-gray-400 dark:text-gray-500">Concedido(s) por UFPB · <time dateTime="2020-02-14 20:00" className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">fev de 2020</time></span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Prêmio iniciação a docência.</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400"> Uma vez por ano são apresentados todos os trabalhos dos últimos 2 períodos na faculdade e cada campus tem a autonomia de premiar alguns dos trabalhos apresentados e no encontro unificado de 2019 o nosso trabalho de &quot;Tutoria de introdução a programação: relatos e experiencias.&quot; recebeu a premiação de iniciação a docência.</p>
              </li>
              <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="leading-none text-gray-400 dark:text-gray-500">Concedido(s) por Campus party ·<time dateTime="2019-02-17 14:00" className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">ago de 2019</time></span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">3º lugar hackaton Micro Learning, Campus party - RN</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Em 2019 tive a oportunidade de participar do meu primeiro hackaton e minha primeira campus party, nosso desafio era criar uma solução de micro learning para melhorar a capacitação dos servidores públicos do estado do RN, infelizmente não conquistamos o primeiro lugar, mas foi uma ótima oportunidade, fizemos amigos, aprendemos coisas novas e ficou a experiencia.</p>
              </li>
          </ol>
        </div>
{
        /*      
        <div className="pb-16 px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center pb-50">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Cadastre-se no newsletter</h2>
                <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Mantenha-se atualizado com anúncios e descontos exclusivos sinta-se à vontade para se inscrever com seu e-mail.</p>
                <form className='pb-8' action="#">
                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="relative w-full">
                            <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Entre com seu melhor e-mail" type="email" id="email" required=""/>
                        </div>
                        <div>
                            <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-indigo-600 dark:focus:ring-indigo-700">Inscrever</button>
                        </div>
                    </div>
                </form>
            </div>
        </div> 
        */
}
      </main>
      <Footer className="mb-28" ></Footer>
    </section>
  )
}
