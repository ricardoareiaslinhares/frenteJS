import Frente from "../../FrenteJS/frente.js"


const _Code = (parentElement) => {
    const idCode = Frente.generateId()

    const code = Frente.createElement(`
    <pre id="${idCode}" class="overflow-hidden">
  <code>
  // Components
  Frente.S("body").classList.add("pt-[34px]")
  NavBar()
  Main1()
      Section1()
          Div1()
              HeroTitle()
          Code()
      CounterSquare()
      Section2()
          Card()
      Section3()
          Footer()
  // *Indented for readability
  </code>
</pre>
    `, {parentElement})
  return  code.element
}

export default _Code