# Frente.js

FrenteJS is a lightweight JavaScript / TypeScript library that provides a set of functions and utilities for building component-based web applications without bundles or frameworks.

## Features

- **Simple API:** Easly create and manipulate the DOM with JS.
- **DOM Creation:** Create DOM within JS with template literals.
- **Observable State:** Implement observable state for reactive updates.
- **No Bundler Required:** Use it without build setups.

## Getting Started



### Installation
You can just copy the file into your project.
**Got to the branch: ts-tw-template:**
 - For TS projects simply go to the src/FrenteJS/frente.ts, download the file and include it in your project.
 - For JS projects download from dist/FrenteJS/frente.js

 You can also start with a template for TypeScript and Tailwind projects, that already contains some UI elements and Components made:

 ` git clone -b ts-tw-template https://github.com/genaiPT/frenteJS.git `

 After cloning and installing with npm, run `npm run watch` to launch the TS and Tailwing compilers in watch mode, and start a dev server using extensions like liveserver (in vscode at least).



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
ButtonF.addEventListener("click", () => ButtonF.classList.replace("bg-blue-200","bg-gray-400"))
```

#### State Management
Create a variable like: `const value = Frente.createValue(1)`

Update the variable with: `value.setValue((prevValue) => prevValue = prevValue + 1)`
Or: `value.setValue(5)`

You can pass it down to components/functions as normal variables or simple create a separate file to manage all your state and export it, e.g.:
 `export const counterValue = Frente.createValue(1)`


Then, you can update it in one component and respond to it in others:

```typescript
import { counterValue } from "../../State/state.js"
// other imports...

const _Square = (parentElement?: HTMLElement) => {
const idSquare = Frente.generateId()

const Button = () => {
  const button = _Button(Frente.Sid(idSquare))
  button.addEventListener("click", ()=> {
      counterValue.setValue((prevValue) => prevValue + 1) //Here
  })
  return button
}
  ///rest of code...
    return {_Square:section.element, ids:{idSquare}}
}
export default _Square
```
Define what happens when the value changes...

```typescript
const _HeroTitle = (parentElement: HTMLElement) => {
  const idHeroTitle = Frente.generateId()
  const idH1 = Frente.generateId()
  const idP = Frente.generateId()
  const idP2 = Frente.generateId()

  const title = "FrenteJS"
  const description = "Write component based SPAs with simple JS"
  let description2 = "Counter: " 
  
  // Here
  counterValue.watch(()=>{
    Frente.Sid(idP2).innerHTML = description2 + counterValue.value
  })
  
    const heroTitle = Frente.createElement(`
    <article class="flex flex-col gap-12 self-center items-center justify-center py-10" id="${idHeroTitle}">
        <h1 class="font-bold text-6xl sm:text-7xl text-left" id="${idH1}" >${title}</h1>
        <p class="text-center sm:text-left text-lg" id="${idP}">${description}</p>
        <p class="text-left text-lg font-semibold text-primary" id="${idP2}">${description2} 1</p>
    </article>
    `, {parentElement})
  
    return {heroTitle:heroTitle.element, ids: {idHeroTitle, idH1, idP}}
}
export default _HeroTitle
```

#### Manipulate children nodes by giving them Ids

In the above code block we are returning the ids of the _HeroTitle children nodes along side the _HeroTitle itself. We can use those ids to futher manipulate the DOM in our main file:

In here we import a _Article component that has an h1 and p as children, we get their ids to set new atributes.
```typescript
const Article = () => {
    const article = _Article(Frente.Sid(idSection), title, description, toggle)

    // The .Sid method is specified for id
    const articleH1 = Frente.Sid(Article.ids.idH1) 
    ArticleH1.classList.add("text-red-500")
    const articleP = Frente.Sid(Article.ids.idP)
    ArticleP.innerHTML = "new text"
    ...
    return article._Article
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
- __Frente.Sid()__ - Also a selector but specified for Id's.

## Exemple
The next is the page of the ts-tw-template, built with [FrenteJS](https://genaipt.github.io/frenteJS/)

## License
MIT
