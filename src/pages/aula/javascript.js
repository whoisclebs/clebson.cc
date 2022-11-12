import AulaArticle from "../../components/aula/article";

export default function Javascript(){
    return(
        <AulaArticle 
            title="Aula javascript"
            alt="Banner da aula de javascript"
            coverImg="/aula/javascript.png"
            sectionBreadCumb="Javascript"
            valor={70}
        >   
            <div className="flex justify-between items-center">
            </div>
            <p className="text-justify">Aulas de javascript do nível básico e intermediário, ideal para quem está começando na programação. Tudo que você precisa aprender para construir aplicações modernas para Web você aprenderá aqui e com aplicações reais.
            Desenvolvimento Web é hoje um dos assuntos mais relevantes do momento porque o mercado respira Web. E Se você deseja ser um profissional preparado para o mercado e não quer aprender apenas fórmulas, mas o porquês, essas aulas são a escolha certa pra você.</p>
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