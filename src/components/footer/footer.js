import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaStackOverflow, FaTwitter, FaYoutube } from 'react-icons/fa'
export default function Footer() {
    return (
        <footer className="fixed px-2 sm:px-4 py-2.5 bottom-0 left-0 z-20 w-full bg-white md:flex md:items-center md:justify-between dark:bg-gray-800 dark:border-gray-600">
        <div className="container flex flex-wrap justify-center md:justify-between items-center mx-auto  border-t  border-gray-200 p-4">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://clebson.cc/" className="hover:underline">Clebson Augusto Fonseca</a>. Todos direitos reservados.
            </span>
            <div className="flex mt-4 space-x-6 sm:mt-0">
                <a href="https://medium.com/@clebson" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaMedium/>
                    <span className="sr-only">Blog medium</span>
                </a>
                <a href="https://stackoverflow.com/users/20201406/clebson" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaStackOverflow/>
                    <span className="sr-only">Conta StackOverflow</span>
                </a>
                <a href="https://www.instagram.com/cl3bsonf" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaInstagram/>
                    <span className="sr-only">Pagina Instagram</span>
                </a>
                <a href="https://github.com/clebsonf" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaGithub />
                    <span className="sr-only">Conta Github</span>
                </a>
                <a href="https://www.linkedin.com/in/clebsonf/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaLinkedin/>
                    <span className="sr-only">Conta Linkedin</span>
                </a>
                <a href="https://www.youtube.com/channel/UCTXNglaqvIsBtXpNLe_KTsw" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaYoutube/>
                    <span className="sr-only">Canal do youtube</span>
                </a>
                <a href="https://twitter.com/cl3bsonf" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaTwitter/>
                    <span className="sr-only">Conta Twitter</span>
                </a>
            </div>
        </div>
        </footer>
    )
}