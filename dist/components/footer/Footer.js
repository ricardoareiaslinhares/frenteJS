import Frente from "../../FrenteJS/frente.js";
const _Footer = (parentElement) => {
    const idFooter = Frente.generateId();
    const footer = Frente.createElement(`
    <div id="${idFooter}" class="flex flex-1 items-center justify-center flex-col">
    <p  class="text-md font-semibold text-secondary" >Handcrafted with care by</p>
    <p class="text-md text-secondary">Ricardo Linhares, 2024</p>
    </div>
    `, { parentElement });
    return footer.element;
};
export default _Footer;
//# sourceMappingURL=Footer.js.map