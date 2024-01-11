import Frente from "../FrenteJS/frente.js";
const _Div = (parentElement) => {
    const idDiv = Frente.generateId();
    const div = Frente.createElement(`
        <div id="${idDiv}" ></div>
    `, { parentElement });
    return { _Div: div.element, ids: { idDiv } };
};
export default _Div;
//# sourceMappingURL=Div.js.map