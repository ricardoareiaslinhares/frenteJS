# Frente.js

FrenteJS is a lightweight JavaScript / TypeScript library that provides a set of functions and utilities for building component-based web applications without bundles.

## Features

- **Simple API:** Easly create and manipulate the DOM with JS.
- **DOM Creation:** Create DOM within JS with template literals.
- **Observable State:** Implement observable state for reactive updates.
- **No Bundler Required:** Use it without build setups.

## Getting Started



### Installation

For TS projects simply go to the src/FrenteJS/frente.ts, download the file and include it in your project.

For JS projects download from dist/FrenteJS/frente.js


### Usage
#### Creating a Component

```typescript
import Frente from "../FrenteJS/frente.js";

const _Button = (parentElement: HTMLElement) => {
    const idButton = Frente.generateId(); // Generate or give a custom id to reference the element.

    const _Button = Frente.createElement(
        `<button id="${idButton}" class="min-w-5 min-h-4 bg-blue-200 rounded-md shadow-md px-4 py-2 hover:bg-blue-50">
            Click me
        </button>`,
        { parentElement: parentElement }
    );

    return _Button.element;
};

export default _Button;
```

#### Import it in the main script file

```typescript
const Button = () => {
    // Specify the parent element (optional, default is body), using a helper selector
    const button = _Button(Frente.S("#app")) 

    // Manipulate the DOM
    button.addEventListener("click", () => {})
    return button
}
```

#### Initialize it (2 ways)
```typescript
// Just call the function you just created
Button()

// Call it into a variable to access it's attributes
const ButtonF = Button()
ButtonF.addEventListener("click", ()=> ButtonF.classList.replace("bg-blue-200","bg-gray-400"))
```

#### State Management
Create a variable on the file you are initializing the components: `const toggle = Frente.createValue(1)`

Update the variable with: `value.setValue((prevValue) => prevValue = prevValue + 1)`
Or: `value.setValue(5)`

You can pass it as normal variable to a component when you first imported it:

```typescript
const toggle = Frente.createValue(false)
const title = "titulo", description = "descrição";

const Article = () => {
    const Article = _Article(Frente.S_id(idSection), title, description, toggle)
    return Article._Article
}
```
On the component side:

```typescript
const _Article = (parentElement: HTMLElement, title:string, description:string, toggle:createValueType<boolean>) => {
  const idArticle = Frente.generateId()
  const idH1 = Frente.generateId()
  const idP = Frente.generateId()
  
  // The .watch method receives a callback functions that executes it's logic when the value of toggle changes
  toggle.watch(()=>{
    if(toggle.value) _Article.element.classList.replace("flex", "hidden")
    if(!toggle.value) _Article.element.classList.replace("hidden", "flex")

  })

    const _Article = Frente.createElement(`
    <article class="flex flex-1 flex-col gap-4 self-start" id="${idArticle}">
        <h1 class="font-bold text-2xl text-left" id="${idH1}" >${title}</h1>
        <p class="text-left text-md" id="${idP}">${description}</p>
    </article>
    `, {parentElement})
  
    return {_Article:_Article.element, ids: {idH1, idP}}
}
export default _Article
```

#### Manipulate children nodes by giving them Id's
In the above code block we are returning the id's of the _Article's childrens nodes along side the _Article itself. We can use those id's to futher manipulate the DOM in our main file:
```typescript
const Article = () => {
    const Article = _Article(Frente.S_id(idSection), title, description, toggle)

    // The .S_id method only adds the char "#" to the id string and performs a normal document.querySelector()
    const ArticleH1 = Frente.S_id(Article.ids.idH1) 
    ArticleH1.classList.add("text-red-500")
    const ArticleP = Frente.S_id(Article.ids.idP)
    ...
    return Article._Article
}
```

### API
- __Frente.createElement(_htmlElement_, {_parentElement_})__ - Creates HTMLElements. Receives a template literal of the element and an optional parent element.
- __Frente.createValue()__ - Creates state that other components can respond to upon changes to that state.
    - ___variable_.watch()__ - To use on the component that should responde when state changes. Receives a function whith the logic inside.
    - ___variable_.unWatch()__ - Receives the same function to stop responding to state changes with that logic.
    - ___variable_.value__ - Returns the current value.
    - ___variable_.setValue()__ - Set the new value of the state. You can set it directly or use a callback to get the previous value of the state and do something with it.
- __Frente.generateId()__ - Generates an unique Id.
- __Frente.S()__ - A quicker document.querySelector() method.
- __Frente.S_id()__ - Also a querySelector but adds the char "#" to be faster with Id's.

## License
MIT
