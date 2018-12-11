import React from 'react'
import { Button, Header, Modal, Dropdown} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class ProfileModal extends React.Component{
  constructor(){
    super()
    this.state={
      title: "",
      description: "",
      img_url: "",
      user_id: "",
      destination_id: "",
      created_itinerary: null,
      modalOpen: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      user_id: this.props.currentUser.id,
    })
  }

  handleSelectorChange = (event, data) => {
    this.setState({
      destination_id: data.value
    })
  }


  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      title: this.state.title,
      description: this.state.description,
      img_url: this.state.img_url,
      user_id: this.state.user_id,
      destination_id: this.state.destination_id
    }
    fetch('http://localhost:3000/itineraries', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res=> res.json())
  .then(itinerary => {
    this.props.addItinerary(itinerary)
    this.props.addAllItin(itinerary)
    this.handleClose()
  })
}

  render(){
    return(
      <div>
        <Modal trigger={<Button
          onClick={this.handleOpen}
          icon='add'></Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          closeIcon>

            <Header icon='paper plane outline' content='Create an Itinerary' />
            <Modal.Content>
            <form className='ui form' onSubmit={this.handleSubmit}>
            <div className="field">
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
              <Button type="submit" > Create </Button>
            </form>
            </Modal.Content>
          </Modal>
       </div>
    )
  }
}

export default ProfileModal
