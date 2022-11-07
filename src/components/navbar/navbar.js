import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { FaWindowClose } from "react-icons/fa";

export default function Navbar() {
    const router = useRouter()

    const [selected, setSelected] = useState("");
    const [toggleNav, setToggleNav] = useState(false)

    useEffect(() => {
        setSelected(router.pathname.substring(1));
    },[router.pathname, selected])

    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/" className="flex items-center">
                <a>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CLEBSON<span className="bg-gradient-to-r from-blue-100 via-cyan-100 to-cyan-200 text-cyan-800 font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">.CC</span></span>
                </a>
            </Link>
            <div className="hidden justify-between items-center w-full lg:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li className="flex items-center">
                        <Link href="/">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >Inicio</a>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link href="/blog">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "blog" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >Blog</a>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link href="/projetos">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "projetos" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >Projetos</a>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link href="/aulas">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "aulas" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >Aulas</a>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link href="/palestras">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "palestras" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >Palestras</a>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link href="http://ledthinking.com.br/">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "elearning" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >Academy</a>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link href="https://ecma.today">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "sobre" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >ECMA.TODAY</a>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link href="https://octobear.org">
                            <a className={`block py-2 pr-4 pl-3 dark:text-gray-400 bg-blue-700 rounded md:bg-transparent  md:p-0`}>Octobear Hub</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://ko-fi.com/clebsonf">
                                <button type="button" className="relative px-6 py-2 group">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0" />
                                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black " />
                                    <span className="relative text-black ">Me pague um ☕</span>
                                </button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex lg:hidden">
                <button  onClick={() => setToggleNav(!toggleNav)} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky-left" aria-expanded="false" >
                    <span className="sr-only">Abrir menu principal</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <ul
                    className={`
                md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                duration-500 z-50 ${toggleNav ? "left-0" : "left-[-100%] "}
                `}
                >
                        <li>
                            <button
                            type="button"
                            aria-label="fechar menu"
                            onClick={() => setToggleNav(!toggleNav)}
                        >
                            <FaWindowClose size="32" />
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleNav(!toggleNav)
                                    router.push("/")
                                }}
                            >
                                <span
                                    className="py-4 px-3 inline-block"
                                    aria-current="page"
                                >
                                    Inicio
                                </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleNav(!toggleNav)
                                    router.push("/blog")
                                }}
                            >
                                <span
                                    className="py-4 px-3 inline-block"
                                    aria-current="page"
                                >
                                    Blog
                                </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleNav(!toggleNav)
                                    router.push("/projetos")
                                }}
                            >
                                <span
                                    className="py-4 px-3 inline-block"
                                    aria-current="page"
                                >
                                    Projetos
                                </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleNav(!toggleNav)
                                    router.push("/aulas")
                                }}
                            >
                                <span
                                    className="py-4 px-3 inline-block"
                                    aria-current="page"
                                >
                                    Aulas
                                </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleNav(!toggleNav)
                                    router.push("/palestras")
                                }}
                            >
                                <span
                                    className="py-4 px-3 inline-block"
                                    aria-current="page"
                                >
                                    Palestras
                                </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleNav(!toggleNav)
                                    router.push("http://ledthinking.com.br/")
                                }}
                            >
                                <span
                                    className="py-4 px-3 inline-block"
                                    aria-current="page"
                                >
                                    Academy
                                </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleNav(!toggleNav)
                                    router.push("http://ecma.today/")
                                }}
                            >
                                <span
                                    className="py-4 px-3 inline-block"
                                    aria-current="page"
                                >
                                    ECMA.TODAY
                                </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleNav(!toggleNav)
                                    router.push("http://octobear.org/")
                                }}
                            >
                                <span
                                    className="py-4 px-3 inline-block"
                                    aria-current="page"
                                >
                                    Octobear Hub
                                </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleNav(!toggleNav)
                                    router.push("https://ko-fi.com/clebsonf")
                                }}
                            >
                                <span
                                    className="py-4 px-3 inline-block"
                                    aria-current="page"
                                >
                                    Me pague um ☕                   
                                </span>
                            </button>
                        </li>
                </ul>
        </div>
      </nav>
    )
}