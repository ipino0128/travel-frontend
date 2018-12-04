import React from 'react'
import { Button } from "semantic-ui-react";
import {Link} from 'react-router-dom'


class CreateUser extends React.Component {
  constructor(){
    super()
    this.state={
      username: "",
      password: "",
      password_confirmation: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let data = { user: {
      username: this.state.username,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
      }
    }
    fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res=> res.json())
  .then(user => console.log(user))
}


  render(){
    return(
    <div className="Create">
      <form className='ui form' onSubmit={this.handleSubmit}>
        <div className='field'>
          <label>username</label>
          <input
          name="username"
          type="text"
          onChange={this.handleChange}
          value={this.state.username}
          placeholder='username'
          />
        </div>
        <div className='field'>
          <label>password</label>
          <input
          name="password"
          type="text"
          onChange={this.handleChange}
          value={this.state.password}
          placeholder='password' />
        </div>
        <div className='field'>
          <label>password confirmation</label>
          <input
          name="password_confirmation"
          type="text"
          onChange={this.handleChange}
          value={this.state.password_confirmation}
          placeholder='password confirmation' />
        </div>
          <Link to={`/profile`}>
        <Button type="submit"> Create </Button>
        </Link>
      </form>
      </div>
    )
  }
}

export default CreateUser
