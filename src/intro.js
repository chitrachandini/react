import React, { Component } from 'react'
class Intro extends Component {
    state = {
        firstName : "chandini",
        lastName : "chitra",
        age : 23,
        address : {
            doorno : 157,
            street : "near poleramma temple",
            mandal : "chirala",
            district : "prakasam",
        }
    }
    handleClick = () => {
        this.setState({
            firstName : "Aadhya",
            lastName : "Raavi",
            age : 1,
            address : {
                doorno : 170,
                street : "near pooja gardens",
                mandal : "tondangi",
                district : "east godavari"
            }
        })
    }
    render(){
        return(
            <div>
               <h1>My name is {this.state.firstName}  {this.state.lastName}</h1>
               <h3>Age is {this.state.age}</h3>
               <p>address is {this.state.address.doorno}</p>
               <button onClick = {this.handleClick}>Click here!</button>
            </div>
        )
    }
}
export default Intro;