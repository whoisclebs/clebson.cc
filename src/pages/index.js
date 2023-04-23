import Image from "next/future/image"
import Head from "next/head"
import Link from "next/link"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import { useRouter } from "next/router";

const indexContent = {
  "pt-BR": {
    title: "Clebson Augusto Fonseca - Sobre mim",
    headLine: "Soluções de desenvolvimento e DevOps personalizadas para impulsionar perfomance da sua equipe",
    subtitle: "Maximize o desempenho da sua equipe de TI com nossas soluções sob medida e orientação especializada",
    headLineCallToActionA: "Agende uma consultoria",
    headLineCallToActionB: "Outros serviços",
    aboutMeTitle: "🔭 Quem sou eu?",
    aboutMeSubtitle: "Me chamo",
    aboutMeDescription: "Como programador de profissão e professor por paixão, dediquei os últimos 10 anos a aprimorar minhas habilidades em programação e operações de TI. Como fundador da @Ledthinking e @LedthinkingAcademy, presto serviços de consultoria, freelas MVP e aulas particulares personalizadas. Neste site, compartilho minha trajetória como programador e um diretório completo de tudo que produzo. Minha missão é ajudar indivíduos e equipes a alcançarem seu potencial máximo em programação e DevOps, com soluções personalizadas e orientação especializada. Acompanhe também meu trabalho em publicações no Medium.",
    iAmSuperProf: "Sou super professor",
    iAmSuperProfDescription: "Desde que fui classificado como um superprofessor na plataforma Superprof em 2021, tenho tido o prazer de ensinar programação para alunos de todos os níveis e em uma ampla variedade de tópicos. Meu objetivo é transmitir meu amor pela programação e ajudar meus alunos a desenvolverem suas habilidades de forma prática e eficaz. Como um profissional experiente em desenvolvimento e DevOps, ofereço orientação especializada em todos os estágios do aprendizado, desde iniciantes até alunos avançados que procuram aprimorar suas habilidades e conquistar novas oportunidades. Entre em contato para saber mais sobre minhas aulas particulares personalizadas e como posso ajudar a alcançar seus objetivos de programação.",
    bookTagline: "Potencializando o domínio do JavaScript",
    bookCallToAction: "Adquira sua cópia hoje!",
    bookSecondaryCallToAction: "Explore mais livros",
  },
  "en-US": {
    title: "Clebson Augusto Fonseca - About me",
    headLine: "Customized development and DevOps solutions to boost your team's performance",
    subtitle: "Maximize the performance of your IT team with our custom solutions and specialized guidance",
    headLineCallToActionA: "Schedule a consultation",
    headLineCallToActionB: "Other services",
    aboutMeTitle: "🔭 Who am I?",
    aboutMeSubtitle: "My name is",
    aboutMeDescription: "As a programmer by profession and teacher by passion, I have dedicated the last 10 years to improving my skills in programming and IT operations. As the founder of @Ledthinking and @LedthinkingAcademy, I provide consulting services, MVP freelancing and personalized private lessons. On this site, I share my journey as a programmer and a complete directory of everything I produce. My mission is to help individuals and teams reach their maximum potential in programming and DevOps, with customized solutions and specialized guidance. Follow my work in publications on Medium.",
    iAmSuperProf: "I am super professor",
    iAmSuperProfDescription: "Since being classified as a superprofessor on the Superprof platform in 2021, I have had the pleasure of teaching programming to students of all levels and in a wide variety of topics. My goal is to pass on my love for programming and help my students develop their skills in a practical and effective way. As an experienced professional in development and DevOps, I offer specialized guidance at all stages of learning, from beginners to advanced students looking to improve their skills and seize new opportunities. Contact me to learn more about my personalized private lessons and how I can help you achieve your programming goals.",
    bookTagline: "Empowering JavaScript Mastery",
    bookCallToAction: "Get Your Copy Today!",
    bookSecondaryCallToAction: "Explore More Books",
  },
}

export default function Home() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { 
    title, 
    headLine,
    subtitle,
    headLineCallToActionA,
    headLineCallToActionB,
    aboutMeTitle,
    aboutMeSubtitle,
    aboutMeDescription,
    iAmSuperProf,
    iAmSuperProfDescription,
    bookTagline,
    bookCallToAction,
    bookSecondaryCallToAction,
  } = indexContent[locale];
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar/>
      <Head>
        <title>{ title }</title>
      </Head>
      <main className="mt-32 mx-4">
      <div className="relative py-16 px-8 mx-auto max-w-screen-xl text-left lg:grid lg:grid-cols-2 bg-regal-purple dark:bg-gray-800 border rounded-lg ">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0" />
          <span className="absolute inset-0 w-full h-full bg-regal-purple border-2 border-black " />
          <div className="relative pb-12 md:pb-0 items-center justify-center">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-3xl dark:text-white">
                { headLine }
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-50 lg:text-xl dark:text-gray-400">
                { subtitle }
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row  sm:space-y-0 sm:space-x-4">
                <Link href="https://calendly.com/clebson-augusto/60min" passHref>
                  <a
                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-purple-700 rounded-lg bg-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
                    { headLineCallToActionA }
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
          </div>
          <div className="relative flex justify-center pt-0 sm:pt-8">
            <Image src="/developer.png" width={450} height={300} alt="Ilustração de um desenvolvedor"/>
          </div>
        </div>
        <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 py-8 lg:py-16 lg:px-6 ">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 ">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{ aboutMeTitle }</h2>
              <h3 className="text-2xl tracking-tight font-extrabold text-black"> { aboutMeSubtitle } <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Clebson Augusto Fonseca</span></h3>
              <p className="mb-4 text-justify"> 
                { aboutMeDescription }
              </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 filter saturate-150">
              <Image width={348.5} height={618} className="w-full rounded-lg " priority src="/clebson-2019.jpeg" alt="Clebson Augusto Fonseca no ano de 2019" />
              <Image width={348.5} height={618} className="mt-4 w-full lg:mt-10 rounded-lg" priority={false} src="/clebson-2022.jpg" alt="Clebson Augusto fonseca no ano de 2022"/>
          </div>
          <Image width={400} height={400} src="/superprof.png" alt="Banner clebson site superprof." />
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="text-4xl tracking-tight font-extrabold "><span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400">{ iAmSuperProf }</span> 🦸🏻‍♂️</h2>
              <p className="mb-4"> 
                { iAmSuperProfDescription }
              </p>
          </div>
        </div>
        <section class="bg-white dark:bg-gray-900 mb-8">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                  <h2 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"> { bookTagline } </h2>
                  <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Clean and Efficient JavaScript: Insightful Strategies for Modern Developers.</p>
                  <a href="https://www.amazon.com/dp/B0C39PLQMQ?ref_=pe_3052080_276849420" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                      { bookCallToAction }
                      <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                  <a href="https://www.amazon.com/stores/author/B0C3BBQY17/allbooks" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      { bookSecondaryCallToAction }
                  </a> 
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-center">
                  <Image width="180" height="380" src="/book-clean-and-efficient-javascript.png"  alt="book cover"/>
              </div>                
          </div>
        </section>
      </main>
      <Footer className="mb-28" ></Footer>
    </section>
  )
}
