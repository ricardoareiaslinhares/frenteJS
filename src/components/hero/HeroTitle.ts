import Frente from '../../FrenteJS/frente.js'
import { counterValue } from '../../State/state.js'




const _HeroTitle = (parentElement: HTMLElement) => {
  const idHeroTitle = Frente.generateId()
  const idH1 = Frente.generateId()
  const idP = Frente.generateId()
  const idP2 = Frente.generateId()

  const title = "FrenteJS"
  const description = "Write component based SPAs with simple JS"
  let description2 = "Counter: " 
  
  counterValue.watch(()=>{
    Frente.Sid(idP2).innerHTML = description2 + counterValue.value
  })
  
    const heroTitle = Frente.createElement(`
    <article class="flex flex-col gap-12 self-center items-center justify-center py-10" id="${idHeroTitle}">
        <h1 class="font-bold text-6xl sm:text-7xl text-left" id="${idH1}" >${title}</h1>
        <p class="text-center sm:text-left text-lg" id="${idP}">${description}</p>
        <p class="text-left text-lg font-semibold text-primary" id="${idP2}">${description2} 1</p>
    </article>
    `, {parentElement})
  
    return {heroTitle:heroTitle.element, ids: {idHeroTitle, idH1, idP}}
}
export default _HeroTitle