import { useCallback, useState } from "react";

const CallbackUse=()=>{
    const[count,setCount]=useState(0);
    const incrementCount = useCallback(() => {
        setCount(prevCount => prevCount + 1);
        // console.log('Counter rendered');
      }, []);
    //   const ResetCount = useCallback(() => {
    //     setCount(0);
    //     // console.log('Counter rendered');
    //   }, []);
      const ResetCount=()=>{
        setCount(0)
      }
    return(
        <div>
        <h1>Count: {count}</h1>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={ResetCount}>Reset</button>
      </div>
    )
}
export default CallbackUse;