import React, { Component } from 'react'

class ClassState extends Component {
  constructor(){
    super()
    this.state={
      name:"",
      age:null,
      place:""
    }
  }
  handleState(){
    this.setState({
      name:"Rahul",
      age:20,
      place:"Hyderabad"
    })
  }
  render() {
    return (
      <>
        <h1>My name is : {this.state.name}</h1>
        <h1>My age is : {this.state.age}</h1>
        <h1>My place is : {this.state.place}</h1>
        <button onClick={()=>this.handleState()}>Reveal Details</button>
      </>
    )
  }
}
export default ClassState