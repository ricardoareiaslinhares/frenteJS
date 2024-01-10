//SELECTORS
const Selector = (IdClassTag) => {
    const element = document.querySelector(IdClassTag);
    if (!element) {
        console.warn("No element was selected. Verify id, class, or element existence");
        return null;
    }
    return element;
};
const Selector_id = (HTMLElementIdValue) => {
    const element = document.querySelector("#" + HTMLElementIdValue);
    if (!element) {
        console.warn("No element was selected. Verify id, class, or element existence");
        return null;
    }
    return element;
};
const ParentAppElement = Selector("#app");
/* //Grab id from HTMLELEMENT - Not in use
const getIdFromHTMLElement = (HTMLElement:HTMLElement): string | null =>  {
    const id = HTMLElement.id
    if (!id) console.warn("No id in this HTMLElement")
    return id
}
 */
//CREATE HTML ELEMENT
const createNewElement = (htmlStringTemplate) => {
    const trimmedHtmlStringTemplate = htmlStringTemplate.trim();
    const getId = () => {
        const regex = /id="([^"]+)"/;
        const match = trimmedHtmlStringTemplate.match(regex);
        if (!match)
            console.warn("An id must be provided to acess the Element API");
        return match?.[1];
    };
    const getElement = () => {
        const regex = /^<(\w+)/;
        const match = trimmedHtmlStringTemplate.match(regex);
        if (!match) {
            return console.warn("Not valid html tag. Use syntax like, for example: `<button id='${id}'></button>`");
        }
        return document.createElement(match?.[1]);
    };
    const element = getElement();
    const defineOutterHTML = (htmlStringTemplate) => {
        function setOutterHTML([]) {
            element.outerHTML = htmlStringTemplate;
            return htmlStringTemplate;
        }
        return setOutterHTML(htmlStringTemplate);
    };
    const id = "#" + getId().trim();
    ///
    return { id, defineOutterHTML, element };
};
//ID GENERATION
const idSet = new Set();
const generateRandomId = (length = 14) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const firstChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    //Ensure letter as first char
    const firstCharIndex = Math.floor(Math.random() * firstChar.length);
    let randomId = firstChar.charAt(firstCharIndex);
    //Generate remaining char
    for (let i = 1; i < length; i++) {
        const remainingCharIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(remainingCharIndex);
    }
    //Ensure uniqueness
    while (idSet.has(randomId)) {
        randomId = generateRandomId(length);
    }
    idSet.add(randomId);
    return randomId;
};
//OBSERVER - WATCHER
const observer = (initialValue) => {
    let value = initialValue;
    let watchers = [];
    const watch = (watcher) => {
        watchers.push(watcher);
    };
    const unWatch = (watcher) => {
        watchers = watchers.filter((fn) => fn !== watcher);
        return watchers.length;
    };
    const setValue = (updater) => {
        let oldValue = value;
        if (typeof updater === "function") {
            value = updater(value);
        }
        else {
            value = updater;
        }
        watchers.forEach((watcher) => watcher(value, oldValue));
    };
    return Object.freeze({
        get value() {
            return value;
        },
        setValue,
        watch,
        unWatch
    });
};
//MAIN LIBRARY FUNCTION
const Frente = (function () {
    const createElement = (htmlStringTemplate, { parentElement = ParentAppElement } = {}) => {
        const newElement = createNewElement(htmlStringTemplate);
        parentElement.appendChild(newElement.element);
        newElement.defineOutterHTML(htmlStringTemplate);
        const element = Selector(newElement.id);
        return { element };
    };
    const createValue = (initialValue) => {
        const createValue = observer(initialValue);
        return createValue;
    };
    const generateId = (length = 14) => {
        const generateId = generateRandomId(length);
        return generateId;
    };
    const S = (idClassTag) => {
        const selector = Selector(idClassTag);
        return selector;
    };
    const S_id = (elementId) => {
        const selector = Selector_id(elementId);
        return selector;
    };
    ///
    return { createElement, createValue, generateId, S, S_id };
})();
export default Frente;
//# sourceMappingURL=frente.js.map