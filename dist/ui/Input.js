import Frente from "../FrenteJS/frente.js";
const _Input = (parentElement) => {
    const idInput = Frente.generateId();
    const _input = Frente.createElement(`
    <input id="${idInput}" type="text" class="px-4 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md">
    
    </input>
    `, { parentElement });
    return _input.element;
};
export default _Input;
//# sourceMappingURL=Input.js.map