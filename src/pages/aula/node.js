import AulaArticle from "../../components/aula/article";

export default function Javascript(){
    return(
        <AulaArticle 
            title="Aula Node"
            alt="Banner da aula de javascript"
            coverImg="/aula/javascript.png"
            sectionBreadCumb="Node.js"
            valor={70}
        >   
            <div className="flex justify-between items-center">
            </div>
            <p className="text-justify">Aulas de node.js do básico e intermediário, ideal para quem está começando na programação e quer se aprofundar em node.js. Tudo que você precisa aprender para construir um codigo perfomatico e moderno em node você aprenderá aqui e com aplicações reais.</p>
            <h2 className="text-2xl font-extrabold">Fundamentos que você irá aprender:</h2>
            <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                <li>
                    Javascript para iniciante
                </li>
                <li>
                    Entendendo funções
                </li>
                <li>
                    Entendendo objetos
                </li>
                <li>
                    Entendendo o Dom
                </li>
                <li>
                    Entendendo eventos
                </li>
                <li>
                    JavaScript Assíncrono
                </li>
                <li>
                    Classes
                </li>
                <li>
                    Factory functions
                </li>
                <li>
                    Rest e spread
                </li>
                <li>
                    Destructuring
                </li>
                <li>
                    Closures
                </li>
                <li>
                    Callbacks
                </li>
                <li>
                    Regex
                </li>
            </ul>            
         <h2 className="text-2xl font-extrabold">Projetos:</h2>
            <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                <li>
                    Pokedex app.
                </li>
                <li>
                    Listagem de fotos de raças de cachorros.                
                </li>
                <li>
                    Site para venda de ingressos.  
                </li>
                <li>
                    Ledact, sua propria implementação do react.
                </li>
            </ul>
           

        </AulaArticle>
    )
}