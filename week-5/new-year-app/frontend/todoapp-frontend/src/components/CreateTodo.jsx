import React, { useState } from 'react'

const CreateTodo = () => {
  const [title, setTitle] = useState("")
  const [description, setdescription] = useState("")

  function AddTodo() {
    
    if(title === "" && description === "") return ;
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => console.log(res))
  }

  return (
    <div>
        <input style={{padding:".5rem 1rem"}} type="text" name="title"  placeholder='title' onChange={(e) => setTitle(e.target.value)}/> <br /> <br />
        <input style={{padding:".5rem 1rem"}} type="text" name="description" placeholder='description' onChange={(e) => setdescription(e.target.value)} /> <br /> <br />
        <button onClick={AddTodo}>Add a Todo</button>
    </div>
  )
}

export default CreateTodo