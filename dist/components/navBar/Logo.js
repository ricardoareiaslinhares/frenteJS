import Frente from "../../FrenteJS/frente.js";
const _Logo = (parentElement) => {
    const idLogo = Frente.generateId();
    const logo = Frente.createElement(`
    <div id="${idLogo}" class="w-[40px] h-auto flex items-center justify-center ">
<<<<<<< HEAD
        <img src="../../../assets/logo.png" alt="Ricardo Linhares Logo" ></img>
=======
    <img src="assets/logo.png" width="40"  alt="Logo" >
>>>>>>> ts-tw-template
    </div>
    `, { parentElement });
    return logo;
};
export default _Logo;
//# sourceMappingURL=Logo.js.map