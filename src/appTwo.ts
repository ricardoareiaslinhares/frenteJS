import Frente from "./FrenteJS/frente.js"
import { Article_, Article_2, Article_3, Main_ } from "./components.js"


let body = Frente.S("body")

const Main = () => {
    const main = Main_()
    
 
    return main(body)
}

const Article = () => {
    const article = Article_2()

    return article
}
const Article2 = () => {
    const article = Article_3()
    console.log(article.id, "ehe")
    return article
}


Main()
Article()
Article2()
