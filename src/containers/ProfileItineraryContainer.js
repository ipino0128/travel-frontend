import React from 'react'
import ItineraryCard from '../components/ItineraryCard'
import ProfileModal from '../components/ProfileModal'

class ProfileItineraryContainer extends React.Component{

  constructor(){
    super()
    this.state={
      usersItineraries: []
    }
  }

  componentDidMount(){
    let id = this.props.currentUser.id
    fetch(`http://localhost:3000/users/${id}`)
    .then(res => res.json())
    .then(data => this.setState({
      usersItineraries: data.itineraries
    }))
  }

  addItinerary = (itinerary)  => {
    this.setState({
      usersItineraries: [...this.state.usersItineraries, itinerary]
    })
  }


  removeUserItin = (itinerary) => {
    this.setState({
      usersItineraries: this.state.usersItineraries.filter(prevItin=> prevItin.id !== itinerary.id)
    })
  }


  render(){
    return(
      <div>
      <h4> My Itineraries: </h4>
     <ProfileModal options={this.props.options}  addItinerary={this.addItinerary} addAllItin={this.props.addAllItin} currentUser={this.props.currentUser}/>
      <br/>
      <br/>
    <div className="ui four column grid cards">
  {this.state.usersItineraries.map(itinerary => <ItineraryCard
    key={itinerary.id}
    currentUser={this.props.currentUser}
    itinerary={itinerary}
    removeUserItin={this.removeUserItin}
    removeFromAll={this.props.removeFromAll}
    handleClick={this.props.displayItineraryDetails}/>)}
  </div>
  </div>

    )
  }

}

export default ProfileItineraryContainer
