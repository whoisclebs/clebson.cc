import Link from "next/link";
import Script from "next/script";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";



export default function AulaArticle({title, valor, alt, coverImg, sectionBreadCumb, children}){
    const schemaData = {
        "@context": "http://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Aulas",
                "item": "https://clebson.cc/aulas"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": sectionBreadCumb,
                "item": "https://clebson.cc/aula/"+sectionBreadCumb.toLowerCase()
            }
        ]
    }

    return(
        <>
            <Navbar />
            <Script 
                id='breadcumb'
                type='application/ld+json'
                dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
            />
            <nav className="pt-20 px-5 py-3 w-full flex   justify-center text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                <ol className="inline-flex space-x-1 md:space-x-3 mx-auto">
                        <li className="inline-flex items-center">
                            <Link href="/aulas">                    
                                <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Aulas
                                </a>
                            </Link>
                        </li>
                        <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">{sectionBreadCumb}</a>
                        </div>
                        </li>
                </ol>
            </nav>

            <main className="pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <figure>
                                <img className="rounded-xl" src={coverImg || "/placeholder.jpg"} alt={alt}/>
                                <h2 className="text-2xl text-right">Valor do investimento:</h2>

                                <figcaption className="mb-4 text-right text-4xl font-extrabold text-gray-900 dark:text-white ">RS<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{valor},00</span> a hora/aula.</figcaption>
                            </figure>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{title}</h1>
                        </header>
                        {children}
                    </article>
                </div>
            </main>



            <Footer />
        </>
    )
}