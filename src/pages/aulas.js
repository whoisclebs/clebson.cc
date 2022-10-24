import Image from "next/future/image";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import aulas from "../data/aulas.json";


export default function Aulas() {
    return (<section className="bg-white dark:bg-gray-900 min-h-screen">
        <Navbar></Navbar>
        <main className="py-8">
            <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:px-12">
                <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span className="text-xs bg-indigo-500 rounded-full text-white px-4 py-1.5 mr-3">News</span> <span className="text-sm font-medium">Agora também temos bootcamps</span> 
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Aulas particulares de
programação</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Aprenda a programar do zero ao avançado em aulas particulares 100% online!</p>
            </div>
            <div className="px-4 mx-auto max-w-screen-xl lg:px-6 ">
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-4">
                    {aulas.subjects.map((subject, index) => (
                        <div key={index} className="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <Image width={300} height={300} className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={subject.img} alt={subject.alt}/>
                        </a>
                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">{subject.name}</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">{subject.seniority}</span>
                            <p className="mt-2 mb-2 font-light text-gray-500 dark:text-gray-400">{subject.description}</p>
                        </div>
                        </div>
                    ))}
                </div>  
            </div>
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                    <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                    </svg> 
                    <blockquote>
                        <p className="text-2xl font-medium text-gray-900 dark:text-white">&#34;Perfeito! Um super professor, entra contigo nas suas dificuldades e não sai até estar com as duvidas sanadas.&#34;</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div className="text-center font-medium text-gray-900 dark:text-white">Pedro</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Solicite sua 1° aula gratuita</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Sua primeira aula particular de programação é GRÁTIS! Essa é uma forma de nos conhecermos melhor.</p>
                <iframe className="w-full h-[80vh] md:h-[70vh]" src="https://docs.google.com/forms/d/e/1FAIpQLSd9dwcHO-50G2--sUGR0wcQUaJTgHEkfWkWhTPLjqQ70T3UWg/viewform?embedded=true"  frameBorder="0" marginHeight="0" marginWidth="0">Carregando…</iframe>
                <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Ou entre em contato por <a href="mailto:clebson.augusto@dcx.ufpb.br">clebson.augusto@dcx.ufpb.br</a> com o assunto do e-mail AULAS.</p>
            </div>
            <div className="py-4 lg:py-8 px-4 mx-auto max-w-screen-md">
                <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Me encontre em outras plataformas:</h3>
                    <ul className="mb-4 space-y-1 list-disc list-inside text-gray-500 dark:text-gray-400">
                        <li>
                            <a target="_blank" href="https://www.superprof.com.br/como-aprender-programar-logica-programacao-desenvolvimento-web-com-javascript.html" rel="noreferrer"><span className="font-semibold text-gray-900 dark:text-white">
                            Como aprender a programar: da lógica de programação ao desenvolvimento web com javascript.
                            </span> disponivel em 
                            <span className="font-semibold text-gray-900 dark:text-white"> Superprof
                            </span></a>
                        </li> 
                    </ul>
            </div>
        </main>
        <Footer></Footer>
    </section>)
}