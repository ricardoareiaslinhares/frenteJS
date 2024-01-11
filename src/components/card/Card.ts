import Frente from "../../FrenteJS/frente.js"
import _Article from "../../ui/Article.js"


const _Card = (parentElement:HTMLElement, title:string, description:string, link?:string) => {
  const idCard = Frente.generateId()


const Article = () => {
  const article = _Article(Frente.Sid(idCard), title, description)
  return article.article
}
  const card = Frente.createElement(`
  <div id="${idCard}" class=" ${link ? "cursor-pointer" : ""}  border sm:h-36 max-w-72 px-4 py-2 rounded-md bg-card/90 hover:to-hero-end hover:from-hero-start hover:bg-gradient-to-br active:bg-orange-300 transition duration-300 ease-in-out">

  </div>
  `,{parentElement})
  Article()

  card.element.addEventListener("click", ()=>{
    window.open(link, "_blank")
  })

  return card.element
}
export default _Card