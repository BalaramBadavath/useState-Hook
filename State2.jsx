import React, { useState } from 'react'

const State2 = () => {
    let [details,setDetails]=useState({
        name:"",
        age:null,
        place:""
    })
    let {name,age,place} = details
    let handleDetails=()=>{
        setDetails({
            name:"Rahul",
            age:18,
            place:"Hyderabad"
        })
    }
  return (
    <>
        <h1>My Name is :{name} </h1>
        <h1>My Age is : {age}</h1>
        <h1>My Place is : {place}</h1>
        <button onClick={handleDetails}>Reveal Details</button>
    </>
  )
}

export default State2