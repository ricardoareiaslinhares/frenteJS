import Frente from "../FrenteJS/frente.js";
const _Atag = (parentElement) => {
    const idAtag = Frente.generateId();
    // to href you can also do:
    //aTag.element.setAttribute("href", "/link")
    const aTag = Frente.createElement(`
    <Atag id="${idAtag}" href="#" class="text-blue-500 hover:underline cursor-pointer">
    
    </Atag>
    `, { parentElement });
    return aTag.element;
};
export default _Atag;
//# sourceMappingURL=aTag.js.map