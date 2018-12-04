import React from 'react'
import { Button, Header, Modal, Dropdown} from 'semantic-ui-react'


class ProfileModal extends React.Component{
  debugger
  constructor(){
    super()
    this.state={
      title: "",
      description: "",
      img_url: "",
      user_id: "",
      destination_id: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      user_id: this.props.currentUser.id,
    })
  }

  handleSelectorChange = (event, data) => {
    console.log(data)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let data = { user: {
      title: this.state.title,
      description: this.state.description,
      img_url: this.state.img_url,
      user_id: this.state.user_id,
      destination_id: this.state.destination_id
      }
    }
    fetch('http://localhost:3000/itineraries', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res=> res.json())
  .then(itinerary => console.log(itinerary))
}

  render(){
    return(
      <div>
        <Modal trigger={<Button icon='add'></Button>} closeIcon>
            <Header icon='paper plane outline' content='Create an Itinerary' />
            <Modal.Content>
            <form className='ui form' onSubmit={this.handleSubmit}>
            <div className="field">
              <label>Destination</label>
              <input
              name="destination"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.img_url}
              placeholder='Destination' />
              <Dropdown
                     label="Destination"
                     placeholder='Destination'
                     fluid search selection options={this.props.options}
                     value={this.state.destination}
                     onChange={this.handleSelectorChange}/>
            </div>
              <div className='field'>
                <label>Title</label>
                <input
                name="title"
                type="text"
                onChange={this.handleChange}
                value={this.state.title}
                placeholder='Title'
                />
              </div>
              <div className='field'>
                <label>Description</label>
                <input
                name="description"
                type="text"
                onChange={this.handleChange}
                value={this.state.description}
                placeholder='Description' />
              </div>
              <div className='field'>
                <label>Image URL</label>
                <input
                name="img_url"
                type="text"
                onChange={this.handleChange}
                value={this.state.img_url}
                placeholder='Image URL' />
              </div>

              <Button type="submit"> Create </Button>

            </form>
            </Modal.Content>
          </Modal>
       </div>
    )
  }
}

export default ProfileModal
