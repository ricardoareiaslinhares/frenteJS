import * as testFunctions from "../frente.ts";

const { createNewElement } = jest.requireActual<typeof testFunctions>(
  "../frente.ts"
);

const Button: HTMLButtonElement = document.createElement("button");

let defineOutterHTML = (htmlStringTemplate: string) => {
  function setOutterHTML() {
    sucessCases[0].output.element.outerHTML = htmlStringTemplate;
    return htmlStringTemplate;
  }
  return setOutterHTML();
};

const sucessCases = [
  {
    id: 0,
    input: `<button id="bid">ola</button>`,
    output: { id: "#bid", defineOutterHTML: defineOutterHTML, element: Button },
  },
];

describe("Test create function", () => {
  it.each(sucessCases)("success case $id", ({ input, output }) => {
    const { id, defineOutterHTML, element } = createNewElement(input);
    const htmlstring = input;

    expect(createNewElement(htmlstring)).toEqual(output);
    expect(id).toBe(output.id);
    expect(element).toEqual(output.element);
    expect(defineOutterHTML(input)).toEqual(output.defineOutterHTML);
  });
});
