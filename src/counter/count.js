import { useState } from "react";

const Count=()=>{

    const[usercount,setUserCount]=useState(0);
    //  implement setTimeout and setInterval method--> 
    // setTimeout- setTime function basically a execute a function specfic delay-- for example 1s-button click-->setTime async function
    // setInterval -->  setinterval a function repeatedly at specfic interval .basically call in function 1s -without any button click.
    const handleIncr=()=>{
        setTimeout(()=>{
            setUserCount(usercount+1)  // a button click increment 1
        },1000)
        setInterval(()=>{
            setUserCount(usercount+1)  // a button click increment 1
        },1000)
        setUserCount(usercount+1)
    }
    const handleReset=()=>{


        setUserCount(0)
    }
    const handleDecr=()=>{
        setUserCount(usercount-1)
    }
return(
    <>
    <div>
        <p>{usercount}</p>
        <button onClick={handleIncr}>Incr</button>
        <button onClick={handleDecr}>Decr</button>
        <button onClick={handleReset}>Reset</button>

    </div>
    </>
)
}

export default Count;