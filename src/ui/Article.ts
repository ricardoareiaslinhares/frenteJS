import Frente from '../FrenteJS/frente.js'



const _Article = (parentElement: HTMLElement, title:string, description:string) => {
  const idArticle = Frente.generateId()
  const idH1 = Frente.generateId()
  const idP = Frente.generateId()
  

  
    const article = Frente.createElement(`
    <article class="flex flex-1 flex-col gap-4 self-start" id="${idArticle}">
        <h1 class="font-bold text-2xl text-left text-primary" id="${idH1}" >${title}</h1>
        <p class="text-left text-md text-primary" id="${idP}">${description}</p>
    </article>
    `, {parentElement})
  
  
    return {article:article.element, ids: {idArticle, idH1, idP}}
}
export default _Article