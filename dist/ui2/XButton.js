import Frente from "../FrenteJS/frente.js";
const _Button = (parentElement, x) => {
    //
    function watching() {
        console.log("_Button is watching x changes");
        _Button.element.innerHTML = `Click me ${x.value}`;
    }
    const idButton = Frente.generateId();
    x.watch(watching);
    x.unWatch(watching);
    const n = Frente.createValue(1);
    n.unWatch;
    const _Button = Frente.createElement(`
    <button id="${idButton}" class="min-w-5 min-h-4 bg-blue-200 rounded-md shadow-md px-4 py-2 hover:bg-blue-50"></button>
    `, { parentElement: parentElement });
    _Button.element.innerHTML = `Click me ${x.value}`;
    return _Button.element;
};
export default _Button;
//# sourceMappingURL=XButton.js.map