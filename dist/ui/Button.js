import Frente from "../FrenteJS/frente.js";
const _Button = (parentElement) => {
    const idButton = Frente.generateId();
    const button = Frente.createElement(`
    <button id="${idButton}" class="hover:bg-orange-200 border border-special active:bg-orange-300  text-white font-bold py-2 px-4 rounded-md">
   
    </button>
    `, { parentElement });
    return button.element;
};
export default _Button;
//# sourceMappingURL=Button.js.map