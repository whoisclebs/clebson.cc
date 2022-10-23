import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function Navbar() {
    const router = useRouter()

    const [selected, setSelected] = useState("");

    useEffect(() => {
        setSelected(router.pathname.substring(1));
    },[router.pathname, selected])

    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <div className="hidden justify-between items-center w-full lg:flex md:w-auto" id="navbar-sticky">
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link href="/">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >Inicio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "blog" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projetos">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "projetos" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >Projetos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/aulas">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "aulas" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >Aulas</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/palestras">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "palestras" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >Palestras</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <Link href="/" className="flex items-center">
                <a>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CLEBSON</span>
                </a>
            </Link>
            <div className="hidden justify-between items-center w-full lg:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link href="http://ledthinking.com.br/">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "elearning" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >@LedthinkingAcademy</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://ecma.today">
                            <a className={`block py-2 pr-4 pl-3 ${selected === "sobre" ? " dark:text-white" : " dark:text-gray-400" } bg-blue-700 rounded md:bg-transparent  md:p-0`} >ECMA.TODAY</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://octobear.org">
                            <a className={`block py-2 pr-4 pl-3 dark:text-gray-400 bg-blue-700 rounded md:bg-transparent  md:p-0`}>Octobear Hub</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://ko-fi.com/clebsonf">
                            <a className={`block py-2 pr-4 pl-3 dark:text-gray-400 bg-blue-700 rounded md:bg-transparent  md:p-0`} >Me pague um ☕</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex lg:hidden">
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Abrir menu principal</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </div>
      </nav>
    )
}