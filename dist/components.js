import FrenteTwo, { createElementThree } from "./FrenteJS/frenteTwo.js";
export const Main_ = () => {
    const main = createElementThree(`<main class="w-ful bg-red-300 p-0 h-full flex flex-1 justify-center items-center">hhhhh</main>`);
    main;
    return main;
};
export const Article_ = () => {
    const article = createElementThree(`<article class="p-4 flex flex-1 justify-center items-center">
    <h1 class="p-2 text-xl font-bold" >titulo</h1>
    <p>desc</>
    </article>`);
    return article;
};
export const Article_2 = () => {
    const article = FrenteTwo.createElement(`<article class="p-4 flex flex-1 justify-center items-center">
    <h1 class="p-2 text-xl font-bold" >titulo</h1>
    <p>desc</>
    </article>`);
    return article;
};
export const Article_3 = () => {
    const article = FrenteTwo.createElement(`<article id"idmeuw" class="p-4 flex flex-1 flex-col justify-center items-center">
    <h1 class="p-2 text-xl font-bold" >titulo2</h1>
    <p>desc2</>
    </article>`);
    return article;
};
//# sourceMappingURL=components.js.map