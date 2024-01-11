import Frente from "../../FrenteJS/frente.js";
import _Button from "../../ui/Button.js";
const _TogglerTheme = (parentElement) => {
    const idTogglerTheme = Frente.generateId();
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>';
    const Button = () => {
        const button = _Button(Frente.Sid(idTogglerTheme));
        button.innerHTML = svg;
        button.addEventListener("click", () => {
            const html = Frente.S("html");
            if (html.hasAttribute("data-theme")) {
                html.removeAttribute("data-theme");
                button.classList.remove("bg-special");
            }
            else {
                html.setAttribute("data-theme", "dark");
                button.classList.add("bg-special");
            }
        });
        return button;
    };
    const toggler = Frente.createElement(`
    <div id="${idTogglerTheme}" class="w-[40px] h-auto flex items-center justify-center active:bg-orange-100  ">
        
    </div>
    `, { parentElement });
    Button();
    return toggler;
};
export default _TogglerTheme;
//# sourceMappingURL=TogglerTheme.js.map