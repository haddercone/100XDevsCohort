import { useEffect, useState } from "react";

function MyComponenet() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log("Component mounted");
  
      return () => {
        console.log("component un-mounted");
      };
    }, []);
    return (
      <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </>
    );
  }
export default MyComponenet;