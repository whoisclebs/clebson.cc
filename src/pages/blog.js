import Head from 'next/head'
import { useEffect, useState } from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/navbar'
export default function Artigos() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fpt.clebs.dev%2Frss').then(res => res.json()).then(data => setArticles(data.items))
  }, [])

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar/>
      <Head>
        <title>Blog</title>
      </Head>
      <main>
            <div className="py-12 px-4 mx-auto max-w-screen-xl sm:py-20 lg:px-6">
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Meu blog como um <span className="text-blue-600 dark:text-blue-500">hobbie</span>.</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Diretorio para postagens aleatorias</p>
                <div className="px-4 mx-auto max-w-screen-xl lg:px-40 py-8">
                    <div className="grid gap-8 mb-6 lg:mb-16 ">
                        {articles.map((subject, index) => (
                            <div key={index} className="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={subject.thumbnail} alt={subject.alt}/>
                            </a>
                            <div className="p-2">
                                <h3 className="pb-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">{subject.title}</a>
                                </h3>
                                <a target="_blank" href={subject.link} type="button" class="text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full" rel="noreferrer">Ler</a>
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
