import Head from 'next/head'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/navbar'

export default function Sobre() {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
        <Navbar/>
        <Head>
            <title>Palestras</title>
        </Head>
        <main className="gap-16 items-center py-8 px-4 mx-auto">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Lista de palestras.</h2>
                    <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Aqui você pode encontrar a lista de palestras que participei e alguns links uteis:</p>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">2022:</h2>
                    <ol className="mb-4 space-y-1 list-decimal list-inside text-gray-500 dark:text-gray-400">
                        <li>
                            <span className="font-semibold text-gray-900 dark:text-white">
                                Atomic Design com Tailwind CSS
                            </span> disponivel em 
                            <a href='https://youtu.be/ajr65dy5Foc' className="font-semibold text-gray-900 dark:text-white"> Ayty
                            </a> em <span className="font-semibold text-gray-900 dark:text-white">2022-04-06</span>
                        </li> 
                    </ol>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">2021:</h2>
                    <ol className="mb-4 space-y-1 list-decimal list-inside text-gray-500 dark:text-gray-400">
                        <li>
                            <span className="font-semibold text-gray-900 dark:text-white">
                                hackathons: nossas experiências na Ledthinking
                            </span> disponivel em 
                            <a href='https://youtu.be/rmv_2pAVD7o' className="font-semibold text-gray-900 dark:text-white"> Ayty-RTECH
                            </a> em <span className="font-semibold text-gray-900 dark:text-white">2021-09-10</span>
                        </li> 
                    </ol>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">2020:</h2>
                    <ol className="space-y-1 list-decimal list-inside text-gray-500 dark:text-gray-400">
                        <li>
                            <span className="font-semibold text-gray-900 dark:text-white">
                            Análise de interface do portal de gerenciamento de jogos e simulações educacionais 
                            </span> no evento 
                            <a href='https://youtu.be/CeCKqOrZOgg' className="font-semibold text-gray-900 dark:text-white"> ENIC
                            </a> em <span className="font-semibold text-gray-900 dark:text-white">2020-09-21</span>
                        </li> 
                    </ol>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </section>
  )
}
