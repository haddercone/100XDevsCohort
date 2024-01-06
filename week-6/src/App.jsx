import React, { useState } from 'react'
import './App.css'
let counter = 3
function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: "Title1", description: "Description"},
    {id: 2, title: "Title2", description: "Description2"},
    {id: 3, title: "Title3", description: "Description3"},
  ])
  
  function addTodo() {
    setTodos([{id: ++counter, title: "Title"+ counter, description: "Description"+ counter}, ...todos ])
  }
  console.log(todos);
  return (
    <>
    <Parent/>
      <TodoHOC>
        <TodoHOC>
          <Todo title={"Hello HOC"} description={"Hello description HOC"}/>
        </TodoHOC>
      </TodoHOC>
      <button style={{marginTop:"1rem"}} onClick={addTodo}>Add todo</button>
        {todos.map( todo => <Todo key={todo.id} {...todo}/> )}
    </>
  )
}
//  Example of Lifting state up
function Parent() {
  const [count, setCount] = useState(0); 

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <Child count={count} setCount={setCount} />
    </div>
  );
};


function  Child ({ count, setCount }){
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>Count in Child: {count}</p>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};


// Example of Higher order component
function TodoHOC({children}){
  return (
    <div style={{boxShadow:"2px 2px 0 0 #ddd", padding:"1rem"}}>
      {children}
    </div>
  )
}

// normal component that is going to be used in HOC
function Todo({title, description}){
  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
    </>
  )
}

// const Head = React.memo(function Head({title}) {
//   return (
//     <p>{title}</p>
//   )
// })

export default App
