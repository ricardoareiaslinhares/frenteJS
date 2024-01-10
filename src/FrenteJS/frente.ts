//SELECTORS
const Selector = (IdClassTag: string): HTMLElement | null => {
    const element = document.querySelector(IdClassTag);
    if (!element) {
      console.warn("No element was selected. Verify id, class, or element existence");
      return null;
    }
    return element as HTMLElement;
  };

  const Selector_id = (HTMLElementIdValue: string): HTMLElement | null => {
    const element = document.querySelector("#"+HTMLElementIdValue);
    if (!element) {
      console.warn("No element was selected. Verify id, class, or element existence");
      return null;
    }
    return element as HTMLElement;
  };


const ParentAppElement = Selector("#app") as HTMLBodyElement;


/* //Grab id from HTMLELEMENT - Not in use
const getIdFromHTMLElement = (HTMLElement:HTMLElement): string | null =>  {
    const id = HTMLElement.id
    if (!id) console.warn("No id in this HTMLElement")
    return id 
}
 */

//CREATE HTML ELEMENT
const createNewElement = (htmlStringTemplate: string) => {
    
    const trimmedHtmlStringTemplate = htmlStringTemplate.trim()

    const getId = () =>  {
        const regex = /id="([^"]+)"/;
        const match = trimmedHtmlStringTemplate.match(regex);
        if (!match) console.warn("An id must be provided to acess the Element API")
        return match?.[1]
    }

    const getElement = () => {
        const regex = /^<(\w+)/
        const match = trimmedHtmlStringTemplate.match(regex)
        if (!match) {return console.warn("Not valid html tag. Use syntax like, for example: `<button id='${id}'></button>`")}
        return document.createElement(match?.[1])
    }

    const element = getElement() as HTMLElement

    const defineOutterHTML = (htmlStringTemplate:string) => {
        function setOutterHTML([]){
            element.outerHTML = htmlStringTemplate
            return htmlStringTemplate
        }
        return setOutterHTML(htmlStringTemplate)
    }

    const id = "#" + getId().trim()
///
    return {id, defineOutterHTML, element}
}

//ID GENERATION
const idSet = new Set()


const generateRandomId = (length:number = 14) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const firstChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    //Ensure letter as first char
    const firstCharIndex = Math.floor(Math.random() * firstChar.length)
    let randomId = firstChar.charAt(firstCharIndex)

    //Generate remaining char
    for (let i = 1; i < length; i++){
        const remainingCharIndex = Math.floor(Math.random() * characters.length)
        randomId += characters.charAt(remainingCharIndex)
    }

    //Ensure uniqueness
    while (idSet.has(randomId)){
        randomId = generateRandomId(length)
    }
    idSet.add(randomId)

    return randomId
}



//OBSERVER - WATCHER
const observer = <T>(initialValue: T) => {
    let value = initialValue
    let watchers: Array<(value: T, oldValue: T) => void> = []

    const watch = (watcher: (value: T, oldValue: T) => void) => {
        watchers.push(watcher)
    }

    const unWatch = (watcher: (value: T, oldValue: T) => void) => {
        watchers = watchers.filter((fn) => fn !== watcher)
        return watchers.length
    }

    const setValue = <U extends T | ((updater: T) => void)>(updater: U) => {
        let oldValue = value
        if (typeof updater === "function") {
            value = (updater as ((prevValue: T) => T))(value);
        }
        else {
            value = updater as T
        } 
        watchers.forEach((watcher) => watcher(value, oldValue))
    }
   

    return Object.freeze({
        get value() {
            return value
        },
        setValue,
        watch,
        unWatch
    })
}
export type createValueType<T> = Readonly<{
    readonly value: T;
    setValue: <U extends T | ((updater: T) => void)>(updater: U) => void;
    watch: (watcher: (value: T, oldValue: T) => void) => void;
    unWatch: (watcher: (value: T, oldValue: T) => void) => number;
  }>;



  //MAIN LIBRARY FUNCTION

const Frente = (function() {
    const createElement = (htmlStringTemplate: string, { parentElement = ParentAppElement }: { parentElement?: HTMLElement  } = {}) => {
        const newElement = createNewElement(htmlStringTemplate)
        parentElement.appendChild(newElement.element)

        newElement.defineOutterHTML(htmlStringTemplate)
        const element = Selector(newElement.id)

        return {element}
    }

    const createValue = <T>(initialValue:T) => {
        const createValue = observer(initialValue)
        return createValue
    }

    const generateId = (length:number = 14) => {
        const generateId = generateRandomId(length)
        return generateId
    }

    const S = (idClassTag: string): HTMLElement | null => {
        const selector = Selector(idClassTag)
        return selector
    }

    const S_id = (elementId: string): HTMLElement | null => {
        const selector = Selector_id(elementId)
        return selector
    }





    ///
    return {createElement, createValue, generateId, S, S_id}
  })()
  export default Frente
