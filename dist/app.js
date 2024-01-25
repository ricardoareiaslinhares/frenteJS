import Frente from "./FrenteJS/frente.js";
import _Square from "./components/diamondButton/Square.js";
import _Card from "./components/card/Card.js";
import _Code from "./components/code/Code.js";
import _Footer from "./components/footer/Footer.js";
import _HeroTitle from "./components/hero/HeroTitle.js";
import _NavBar from "./components/navBar/NavBar.js";
import _Div from "./ui/Div.js";
import _Main from "./ui/Main.js";
import _Section from "./ui/Section.js";
let idMain1;
const Main1 = () => {
    const main = _Main(Frente.S("body"));
    idMain1 = main.ids.idMain;
    return main._main;
};
const NavBar = () => {
    return _NavBar().element;
};
let idSection1;
const Section1 = () => {
    const section = _Section(Frente.Sid(idMain1));
    idSection1 = section.ids.idSection;
    section._Section.classList.remove("flex-col", "justify-center");
    // Rewrite classes this way to get tailwind intelesense here
    let className = "  flex-row flex-wrap bg-gradient-to-b from-hero-start to-hero-end justify-center ";
    section._Section.className += className;
    return section._Section;
};
let idSection2;
const Section2 = () => {
    const section = _Section(Frente.Sid(idMain1));
    idSection2 = section.ids.idSection;
    section._Section.classList.remove("flex-col", "justify-center", "items-center", "p-12");
    let className = " relative z-0 sm:-translate-y-[130px] flex-row sm:justify-evenly sm:items-center items-start justify-start  p-4 pt-20 sm:pt-0 ";
    section._Section.className += className;
    return section._Section;
};
let idDiv1;
const Div1 = () => {
    const div = _Div(Frente.Sid(idSection1));
    idDiv1 = div.ids.idDiv;
    let className = " flex flex-1 2xl:flex-none justify-center lg:justify-end 2xl:justify-center 2xl:ml-96 2xl:pl-16 ";
    div._Div.className += className;
    return div._Div;
};
const HeroTitle = () => {
    const heroTitle = _HeroTitle(Frente.Sid(idDiv1));
    return heroTitle.heroTitle;
};
const CounterSquare = () => {
    const counter = _Square(Frente.Sid(idMain1));
    return counter;
};
const cardInfo = [
    { title: "Docs", description: "Check the github page to quickly learn FrenteJS", link: "https://github.com/genaiPT/frenteJS" },
    { title: "See the source", description: "Take a look at this page source code to have an idea of how to organize your project" }
];
const Card = () => {
    let cardArray = [];
    cardInfo.map((entry) => {
        const card = _Card(Frente.Sid(idSection2), entry.title, entry.description, entry.link);
        cardArray.push(card);
    });
    return { Card1: cardArray[0], Card2: cardArray[1] };
};
let idSection3;
const Section3 = () => {
    const section = _Section(Frente.Sid(idMain1));
    idSection3 = section.ids.idSection;
    section._Section.classList.remove("p-12");
    let className = "  sm:-translate-y-[130px] py-6 mb-4 sm:mb-4 ";
    section._Section.className += className;
    return section._Section;
};
const Footer = () => {
    const footer = _Footer(Frente.Sid(idSection3));
    return footer;
};
const Code = () => {
    const code = _Code(Frente.Sid(idSection1));
    return code;
};
// Components
Frente.S("body");
NavBar();
Main1();
Section1();
Div1();
HeroTitle();
Code();
CounterSquare();
Section2();
Card();
Section3();
Footer();
// *Indented for readability
//# sourceMappingURL=app.js.map