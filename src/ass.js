import React, { Component } from 'react'
import Display from './Display'
class Ass extends Component {
    state = [
        {firstName : "chandini",lastName:"chitra",age:23},
        {firstName : "chitra",lastName:"nikhitha",age:19},
        {firstName:"aadhya",lastName:"raavi",age:1},
        {firstName:"bhargavi",lastName:"raavi",age:24}
    ]
    render(){
        return(
            <div>
               {this.state.map(personInfo => {
                   return (<Display displayData = {personInfo}/>
               )})}
            </div>
        )
    }
}
export default Ass;