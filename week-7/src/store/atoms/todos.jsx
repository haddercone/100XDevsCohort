import { atom, selector } from "recoil";

export const todoAtom = atom({
    key: "todoAtom",
    default: [
        {title:"test", description: "test"},
        {title:"hello", description: "hello"},
        {title:"find", description: "find"},
        {title:"Cool", description: "Cool stuff"},
        {title:"Red", description: "Red stuff"},
        {title:"Cool stuff", description: "Cool!"},
        {title:"Hello", description: "Hello there"},
        {title:"Awecome", description: "Cool!"},
    ]
})

export const textAtom = atom({
    key: "textAtom",
    default: ""
})

export const filterSelector = selector({
    key: "filterSelector",
    get: (({get}) => {
        const text = get(textAtom)
        const todos = get(todoAtom)

        return todos.filter(todo => todo.title.toLowerCase().startsWith(text.toLowerCase()));
    })
})

