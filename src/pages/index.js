import Image from 'next/future/image'
import Head from 'next/head'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/navbar'

export default function Home() {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar/>
      <Head>
        <title>Clebson Augusto Fonseca - Sobre min</title>
      </Head>
      <main>
        <div className="gap-16 items-center py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h1 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">Clebson Augusto Fonseca</h1>

            <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  Home
                </a>
              </li>
            </ol>
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
      </main>
      <Footer></Footer>
    </section>
  )
}
