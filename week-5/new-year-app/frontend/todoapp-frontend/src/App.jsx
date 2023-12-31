import { useEffect, useState } from 'react'

import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  
  async function getTodos() {
    const respomse = await fetch("http://localhost:3000/todos");
    const result = await respomse.json();
    setTodos(result);
  }
  useEffect(() => {
    getTodos()
  }, [todos])

  return (
    <>
      <CreateTodo />
      <Todos todos={todos}/>
    </>
  )
}

export default App
