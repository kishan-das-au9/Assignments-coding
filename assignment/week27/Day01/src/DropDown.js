import React from "react";


class DropDown extends React.Component {

  state ={
    users:[]
  }
  componentDidMount(){
    fetch(`http://localhost:3333/pokemons`)
    .then(response => response.json())
    .then(users => this.setState({users:users}))
  }
  render(){
    return <div className="drop-down">
    <p>select your favourite pokemon</p>
    <select>{
      this.state.users.map(user => <option value = "user.value">{user.name}</option>)
    }</select>

    </div>
  }

}

export default DropDown;
