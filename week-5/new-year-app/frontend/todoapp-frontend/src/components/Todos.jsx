import React from 'react'

function markTodo(id) {
    fetch("http://localhost:3000/completed", {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
      }),
      headers: { 'Content-Type': 'application/json'}
    }).then(res => console.log(res))
}

const Todos = ({todos}) => {
  
  return (
    <div>
        {todos && todos.map((todo) => {
            return (
                <div key={todo._id}>
                    <p>{todo.title}</p>
                    <p>{todo.description}</p>
                    <button onClick={() => markTodo(todo._id)}>{todo.completed === true ? "Completed" : "Mark as Done"}</button>
                </div>
            )
        })}
    </div>
  )
}

export default Todos