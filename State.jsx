import React, { useState } from 'react'

const State = () => {
  let [count,setCount]= useState(0)
  let handleIncrement=()=>{
   setCount(count+1)
  }
  let handleDecrement=()=>{
    if(count>0)
    setCount(count-1)
  }
  let handleReset=()=>{
   setCount(0)
  }
  return (
    <>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>INCREMENT</button>
        <button onClick={handleDecrement}>DECREMENT</button>
        <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default State