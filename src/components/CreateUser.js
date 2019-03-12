import React from 'react'
import { Button } from "semantic-ui-react";
import {Redirect} from 'react-router-dom'


class CreateUser extends React.Component {
  constructor(){
    super()
    this.state={
      username: "",
      password: "",
      password_confirmation: "",
      bio: "",
      avatar: ""
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
      password_confirmation: this.state.password_confirmation,
      bio: this.state.bio,
      avatar: this.state.avatar
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
        <div className='field'>
          <label>bio</label>
          <input
          name="bio"
          type="text"
          onChange={this.handleChange}
          value={this.state.bio}
          placeholder='bio' />
          </div>
          <div className='field'>
            <label>profile picture</label>
            <input
            name="avatar"
            type="text"
            onChange={this.handleChange}
            value={this.state.avatar}
            placeholder='profile picture' />
            </div>

        <Button type="submit"> Create </Button>

      </form>
      </div>
    )
  }
}

export default CreateUser
