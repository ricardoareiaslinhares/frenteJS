import Frente from "./FrenteJS/frente.js"
import _Article from "./ui/Article.js"

import _Button from "./ui2/XButton.js"
import _Section from "./ui2/SectionX.js"
import _Atag from "./ui/aTag.js"
import _Square from "./components/diamondButton/Square.js"

const BODY = Frente.S("body")

//Make Dark Mode
Frente.S("html").setAttribute("data-theme","dark")


//Creates a value thats alows components (that are watching it) to respond when the value changes
const x = Frente.createValue(1)


//Lift the id of Section to use it as a parent in other components
let idSection:string
let idSectionTwo:string

//Import a Component and define it with a function.
const Section = () => {
    const section = _Section() //pass the parent(optional, default is already #app)

    // Add additional logic for the component

    idSection = section.ids.idSection
    return section._Section

}

//The same component can be reutilized
const SectionTwo = () => {
    const SectionTwo = _Section(BODY, toggle)
    idSectionTwo = SectionTwo.ids.idSection
    SectionTwo._Section.classList.add("bg-slate-200")
    return SectionTwo._Section
}

const toggle = Frente.createValue(false)
 const Button = () => {
    const Button = _Button(Frente.Sid(idSection), x) //Section is parent, and x is passed
    Button.addEventListener("click", () => {
        toggle.setValue((prevValue)=> !prevValue)
        console.log(toggle)
        //Frente.createValue can be updated in two ways:
     x.setValue((prevValue)=> prevValue = prevValue +1)
     // or use as: x.setValue(5)
    })
    return Button
} 



//Initiate the Component


const title = "titulo", description = "descrição";

const Article = () => {
    const article = _Article(Frente.Sid(idSection), title, description)


    const ArticleH1 = Frente.Sid(article.ids.idH1)
    ArticleH1.classList.add("text-red-500")
    return article.article
}




//Map an array into a component, rendering it array.length times
const book = [{title:"t1", description:"d1"}, {title:"t2", description:"d2"}]

const ArticleTwo = () => {
    type ArticleType = {article:HTMLElement, ids:{idH1: string, idP: string;}}
    let articles: Array<ArticleType> = []
    book.map((chapter) => {
        const ArticleTwo = _Article(Frente.Sid(idSectionTwo), chapter.title, chapter.description)
        articles.push(ArticleTwo) // To be able to alter each new components
        return ArticleTwo.article
    })
    //Altering the second article only
    articles[1].article.classList.add("bg-yellow-300")

//you can also descunstruct the array to grab the individual articles outside the function
return {Article1:articles[0].article, Article2: articles[1].article}
}




//INITIALIZE COMPONENTS (components are rendered in the DOM here)

Section()
    Article()

    // You can also acess the hmtl atributes, initializig the component into a variavel
    const button = Button()
    
    button.addEventListener("click", ()=> button.classList.replace("bg-blue-200","bg-gray-400"))
    


 
 

SectionTwo()




    let {Article1, Article2} = ArticleTwo()
    Article1.classList.add("bg-red-400")

    const aTag = _Atag(BODY)
    aTag.innerHTML = "ola"

    const Square1 = () => {
        const square = _Square()
        square._Square.classList.add("bg-background")
        return square
    }

    const Square2 = () => {
        const square = _Square()
        square._Square.classList.add("bg-popover-foreground")
        return square
    }

    const Square3 = () => {
        const square = _Square()
        square._Square.classList.add("bg-yellow-300")
        return square
    }

    Square1()
    Square2()
    Square3()