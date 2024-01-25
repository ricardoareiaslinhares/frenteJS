import Frente from "../../FrenteJS/frente.js";
import _Logo from "./Logo.js";
import _TogglerTheme from "./TogglerTheme.js";
const _NavBar = () => {
    const idNavBar = Frente.generateId();
    const idDiv = Frente.generateId();
    const Logo = () => {
        const logo = _Logo(Frente.Sid(idDiv));
        return logo.element;
    };
    const TogglerTheme = () => {
        const toggler = _TogglerTheme(Frente.Sid(idDiv));
        return toggler.element;
    };
    const navBar = Frente.createElement(`
<nav id="${idNavBar}" class="fixed top-0 w-full  h-[64px] bg-card shadow-sm flex justify-center" >

    <div id="${idDiv}" class="flex-1 2xl:px-40 h-[64px] max-w-screen-2xl  flex items-center justify-between self-center mx-6">
 
 
   </div>
</nav>
`);
    Logo();
    TogglerTheme();
    return navBar;
};
export default _NavBar;
//# sourceMappingURL=NavBar.js.map