import * as testFunctions from "../stuff.ts"

const {sum} = jest.requireActual<typeof testFunctions>("../stuff.ts")

const sucessCases = [
    {
        id:0,
        input: {a:1, b:1},
        output: 2
    },
    {
        id:1,
        input: {a:5, b:5},
        output: 10
    },
]

describe ("Test sum funtion", () => {
    it.each(sucessCases)("sucess case $id", ({input, output}) => {
        const {a, b} = input
        expect(sum(a,b)).toBe(output)
    })
})