// import { lazy, Suspense } from 'react'
// import {BrowserRouter, Routes, Route, Link , useNavigate} from "react-router-dom"
// import Landing from './components/Landing'
// import Dashboard from './components/Dashboard'
// const Dashboard = lazy(() => import("./components/Dashboard"))
// const Landing = lazy(() => import("./components/Landing"))
import { useCounter, CounterProvider } from "./context/CountContext"
import { useState } from "react"

function App() {

  return (
    <CounterProvider>
    <Count/>
    {/* <Buttons setCount={setCount} count={count}/> */}
    {/* <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path={"/"} element={<Suspense fallback={"Loading..."}><Landing/></Suspense>}/>
        <Route path={"/dashboard"} element={<Suspense fallback={"Loading..."}><Dashboard/></Suspense>}/>
      </Routes>
    </BrowserRouter> */}
    </CounterProvider>
  )
}


// function AppBar() {
  // const navigate = useNavigate()
  // return (
  //   <>
  //     <button onClick={() => {
  //      navigate("/")
  //     }}>Home</button>
  //     <button onClick={() => {
  //       navigate("/dashboard")
  //     }}>
  //       Dashboard
  //     </button>
  //   </>
  // )
// }

function Count({count, setCount}) {
  return <div>
    <CounterRenderer/>
    <Buttons/>
  </div>
}

function CounterRenderer() {
  const {count} = useCounter()
  return <p>{count}</p>
}

function Buttons() {
  const {count, setCount} = useCounter();
  return <>
      <button onClick={() => {setCount(count + 1)}}>Increase</button>
      <button onClick={() => {setCount(count - 1)}}>Decrease</button>
    </>
}
export default App
