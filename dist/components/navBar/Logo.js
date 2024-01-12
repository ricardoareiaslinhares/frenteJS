import Frente from "../../FrenteJS/frente.js";
const _Logo = (parentElement) => {
    const idLogo = Frente.generateId();
    const logo = Frente.createElement(`
    <div id="${idLogo}" class="w-[40px] h-auto flex items-center justify-center ">
    <img src="../../../assets/logo.png" width="40" height="40" alt="Ricardo Linhares Logo" >
    <img src="/assets/logo.png" alt="Ricardo Linhares Logo" >
    <img src="assets/logo.png" width="40" height="40" alt="Ricardo Linhares Logo" >
    </div>
    `, { parentElement });
    return logo;
};
export default _Logo;
//# sourceMappingURL=Logo.js.map