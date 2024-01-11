import Frente from "../../FrenteJS/frente.js"
import _Logo from "./Logo.js"
import _TogglerTheme from "./TogglerTheme.js"


const _NavBar = () => {
const idNavBar = Frente.generateId()
const idDiv = Frente.generateId()

const Logo = () => {
    const logo = _Logo(Frente.Sid(idDiv))
    return logo.element
}

const TogglerTheme = () => {
    const toggler = _TogglerTheme(Frente.Sid(idDiv))
    return toggler.element
}

const navBar = Frente.createElement(`
<nav id="${idNavBar}" class="fixed top-0 w-full max-w-screen-2xl  h-[64px] bg-card shadow-sm" >

    <div id="${idDiv}" class="flex-1 2xl:px-72 h-[64px] flex items-center justify-between self-center mx-6">
 
 
   </div>
</nav>
`)

Logo()
TogglerTheme()
return navBar
}

export default _NavBar
