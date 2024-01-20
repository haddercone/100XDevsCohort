import { useContext, useState } from "react"
import { CountContext } from "./context";
import { Navigate } from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { textAtom } from "./store/atoms/todos";


function App() {
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <RecoilRoot>
      <div>
        {/* <Count /> */}
        <TextInput/>
        <Todos />
      </div>
    </RecoilRoot>
  )
}

function TextInput() {
  const [text, setText] = useRecoilState(textAtom);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
    </div>
  );
}

function Todos() {
  // const todos = useRecoilValue(todoAtom);
  const todos = useRecoilValue(filterSelector)

  return todos.map((todo, idx) =>  {
    return <div key={idx}>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
    </div>
  })
}


function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Buttons  />
  </div>
}


function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    <b>{count}</b>
    <EvenCountrenderer/>
  </div>
}

function EvenCountrenderer() {
  const isEven = useRecoilValue(evenSelector)
  return <div>{isEven ? "It is even" : ""}</div>
}

function Buttons({}) {
  const [count, setCount] = useRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
