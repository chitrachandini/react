import React , {Component} from 'react'
import Display from './Display'
class Props extends Component{
    state = {
        firstName:"chandini",
        lastName:"chitra",
        age:23,
        strOrNum:25
    }
    render(){
      return (
          <Display firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.age}  strOrNum={this.state.strOrNum}/>
      )
    }
}
export default Props;