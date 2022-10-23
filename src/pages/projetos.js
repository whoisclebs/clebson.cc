import Head from 'next/head'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/navbar'
import projetos from '../data/projetos.json'
export default function Projetos() {
    
  return (
    <section>
        <Navbar/>
        <Head>
            <title>Projetos favoritos</title>
        </Head>
        <main>
            <div className="py-12 px-4 mx-auto max-w-screen-xl sm:py-20 lg:px-6">
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Projetos de <span className="text-blue-600 dark:text-blue-500">estimação</span>.</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Aqui temos alguns projetos que tenho muito amor neles ❤</p>
                <div className="px-4 mx-auto max-w-screen-xl lg:px-6 py-8">
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-4">
                        {projetos.repositories.map((repository, index) => (
                            <div key={index} className="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-4 pb-0 h-full flex flex-col justify-between">
                                    <h3 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">{repository.name}</a>
                                    </h3>
                                    <p className="mt-2 mb-2 font-light text-gray-500 dark:text-gray-400">{repository.description}</p>
                                    <a target="_blank" href={repository.url} type="button" class="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full" rel="noreferrer">Visitar</a>
                                </div>
                            </div>
                        ))}
                    </div>  
                </div>
            </div>
        </main>
        <Footer/>
    </section>
  )
}
