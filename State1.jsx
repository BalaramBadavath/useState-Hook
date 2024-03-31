import React, { useState } from 'react'

const State1 = () => {
  let [food,setFood]= useState("")
  let handleCB=()=>{
    setFood("Chicken Biriyani")
  }
  let handleMB=()=>{
    setFood("Mutton Biriyani")
  }
  let handlePalav=()=>{
    setFood("Palav")
  }
  let handlePB=()=>{
    setFood("Prawns Biriyani")
  }
  return (
    <>
    <h1>My Favourite food is : {food}</h1>
    <button onClick={handleCB}>Chicken Biriyani</button>
    <button onClick={handleMB}>Mutton Biriyani</button>
    <button onClick={handlePalav}>Palav</button>
    <button onClick={handlePB}>Prawns Biriyani</button>
    </>
  )
}

export default State1