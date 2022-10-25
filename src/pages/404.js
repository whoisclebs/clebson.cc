import Link from "next/link";
import Navbar from "../components/navbar/navbar";

export default function NotFound() {
    return (
        <section>
            <Navbar/>
        <main class="h-screen flex  items-center dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-purple-600 dark:text-purple-500">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Algo está faltando.</p>
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Desculpe, não conseguimos encontrar essa página. Você encontrará muito para explorar na página inicial. </p>
                    <Link href="/">
                        <a class="inline-flex text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-purple-900 my-4">Back to Homepage</a>
                    </Link>
                </div>   
            </div>
        </main>
        </section>
    )
}
