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
    //const element = document.querySelector("#"+HTMLElementIdValue);
    const element = document.getElementById(HTMLElementIdValue);
    if (!element) {
        console.warn("No element was selected. Verify id, class, or element existence");
        return null;
    }
    return element;
};
const ParentAppElement = Selector("body");
/* //Grab id from HTMLELEMENT - Not in use
const getIdFromHTMLElement = (HTMLElement:HTMLElement): string | null =>  {
    const id = HTMLElement.id
    if (!id) console.warn("No id in this HTMLElement")
    return id
}
 */
const createElementTwo = (htmlStringTemplate) => {
    const trimmedHtmlStringTemplate = htmlStringTemplate.trim();
    const getElement = () => {
        const regex = /^<(\w+)/;
        const match = trimmedHtmlStringTemplate.match(regex);
        if (!match) {
            return console.warn("Not valid html tag. Use syntax like, for example: `<button id='${id}'></button>`");
        }
        return document.createElement(match === null || match === void 0 ? void 0 : match[1]);
    };
    const getId = () => {
        const regex = /id="([^"]+)"/;
        const match = trimmedHtmlStringTemplate.match(regex);
        if (match)
            return match === null || match === void 0 ? void 0 : match[1];
    };
    const id = getId();
    const element = getElement();
    return { element, template: trimmedHtmlStringTemplate, id };
};
const createIdOutter = (element, template, id) => {
    element.outerHTML = template;
    if (!id) {
        element.id = generateRandomId();
    }
    return element;
};
const defineParente = (element, parentElement) => {
    parentElement.appendChild(element);
    return element;
};
//const caril = defineParente(createIdOutter( createElementTwo(template) ))
//CREATE HTML ELEMENT
export const createNewElement = (htmlStringTemplate) => {
    const trimmedHtmlStringTemplate = htmlStringTemplate.trim();
    const getElement = () => {
        const regex = /^<(\w+)/;
        const match = trimmedHtmlStringTemplate.match(regex);
        if (!match) {
            return console.warn("Not valid html tag. Use syntax like, for example: `<button id='${id}'></button>`");
        }
        return document.createElement(match === null || match === void 0 ? void 0 : match[1]);
    };
    const element = getElement();
    const defineOutterHTML = (htmlStringTemplate) => {
        function setOutterHTML() {
            element.outerHTML = htmlStringTemplate;
        }
        return setOutterHTML();
    };
    ///
    return { defineOutterHTML, element };
};
//ID GENERATION
const idSet = new Set();
const generateRandomId = (length = 14) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const firstChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
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
        unWatch,
    });
};
console.log("jjj");
//MAIN LIBRARY FUNCTION
const FrenteTwo = (function () {
    const createElement = (htmlStringTemplate, { parentElement = ParentAppElement } = {}) => {
        const newElement = createNewElement(htmlStringTemplate);
        parentElement.appendChild(newElement.element);
        newElement.defineOutterHTML(htmlStringTemplate);
        newElement.element.id = generateRandomId();
        const list = newElement.element.childNodes.forEach((item) => {
            return item.textContent;
        });
        let list2 = document.querySelectorAll(newElement.element.id);
        const list3 = list2.forEach((entry) => {
            console.log(entry.className);
            return entry;
        });
        console.log(list3);
        //const element = Selector(newElement.element.id);
        return newElement.element;
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
    const Sid = (elementId) => {
        const selector = Selector_id(elementId);
        return selector;
    };
    ///
    return { createElement, createValue, generateId, S, Sid };
})();
export const createElementThree = (htmlStringTemplate) => {
    const trimmedHtmlStringTemplate = htmlStringTemplate.trim();
    const getElement = () => {
        const regex = /^<(\w+)/;
        const match = trimmedHtmlStringTemplate.match(regex);
        if (!match) {
            return console.warn("Not valid html tag. Use syntax like, for example: `<button id='${id}'></button>`");
        }
        return document.createElement(match === null || match === void 0 ? void 0 : match[1]);
    };
    const getId = () => {
        const regex = /id="([^"]+)"/;
        const match = trimmedHtmlStringTemplate.match(regex);
        if (match)
            return match === null || match === void 0 ? void 0 : match[1];
    };
    const id = getId();
    const element = getElement();
    Selector("body").appendChild(element);
    //NEXT
    return (parentElement = ParentAppElement) => {
        parentElement.appendChild(element);
        element.outerHTML = trimmedHtmlStringTemplate;
        if (!id) {
            element.id = generateRandomId();
        }
        return element;
    };
};
/* const div = caril (strign)
  div(parent)
   */
export default FrenteTwo;
//# sourceMappingURL=frenteTwo.js.map