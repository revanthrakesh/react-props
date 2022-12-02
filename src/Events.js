import React from "react"

export default class Events extends React.Component {
    state={
        username:""
    }
    handleClick=()=>{
        console.log(this.state.username)
        this.setState({
            username:""
        })
    }
    handleUser=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  render() {
    //console.log(this.state.username)
    return (
        <div>
            <input name="username" type="text" placeholder="user" value={this.state.username} onChange={this.handleUser}/>
            <p><button onClick={this.handleClick}>submit</button></p>
            
      </div>
    )
  }
}
