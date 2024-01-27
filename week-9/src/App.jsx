import React, { useState } from "react";
import MyComponenet from "./components/MyComponenet";
import { MyComponentClass } from "./components/MyComponentClass";
import { useIsOnline } from "./hooks/useIsOnline";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { loading, todos } = useTodos(5);
  const online = useIsOnline()
  console.log(online);
  const [render, setRender] = useState(true)

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setRender(false)
  //   }, 5000)
  //   return () => clearTimeout(timerId)
  // }, [])

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {todos.map((todos, index) => (
        <p key={index}>{todos.title}</p>
      ))}

      {online ? <p>Online</p> : <p>Offline</p>}
      {render ? <MyComponenet /> : <div>Another component</div>}
      <MyComponentClass />
    </>
  );
}





export default App;
