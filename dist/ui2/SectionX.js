import Frente from "../FrenteJS/frente.js";
const _Section = (parentElement, toggle) => {
    const parentEl = parentElement === undefined ? Frente.S("body") : parentElement;
    const idSection = Frente.generateId();
    if (toggle) {
        toggle.watch(() => {
            if (toggle.value)
                _Section.element.classList.replace("flex", "hidden");
            if (!toggle.value)
                _Section.element.classList.replace("hidden", "flex");
        });
    }
    const _Section = Frente.createElement(`
        <section id="${idSection}" class="max-w-screen-2xl flex flex-1 flex-col justify-center items-center p-12 gap-3"></section>
    `, { parentElement: parentEl });
    return { _Section: _Section.element, ids: { idSection } };
};
export default _Section;
//# sourceMappingURL=SectionX.js.map