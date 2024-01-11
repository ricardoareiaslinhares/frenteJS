import Frente from "../../FrenteJS/frente.js"
import { counterValue } from "../../State/state.js"
import _Button from "../../ui/Button.js"




const _Square = (parentElement?: HTMLElement) => {
const idSquare = Frente.generateId()


const svg = '<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>'

const Button = () => {
  const button = _Button(Frente.Sid(idSquare))
  button.addEventListener("click", ()=> {
      counterValue.setValue((prevValue) => prevValue + 1)
  })

  let className :string
  className =" h-[105px] w-[105px] border active:bg-orange-50/80 active:shadow-sm drop-shadow-sm hover:bg-blue-50/80 backdrop:* bg-white/90  flex items-center justify-center "
  button.className = className
  button.innerHTML = svg
  return button
}

    const section = Frente.createElement(`
        <div id="${idSquare}" class="relative z-20 h-[105px] w-[105px] border rotate-45 sm:-translate-y-[65px]  self-center hover:to-blue-200 hover:from-white hover:bg-gradient-to-r hover:via-blue-100 transition duration-300 ease-in-out "></div>
    `,{parentElement })

    Button()

  return {_Square:section.element, ids:{idSquare}}
}

export default _Square

