import Frente from "../FrenteJS/frente.js"




const _Section = (parentElement?: HTMLElement) => {
const idSection = Frente.generateId()



    const section = Frente.createElement(`
        <section id="${idSection}" class="max-w-screen-2xl w-full flex flex-col justify-center items-center p-12 gap-3"></section>
    `,{parentElement })
  return {_Section:section.element, ids:{idSection}}
}

export default _Section

