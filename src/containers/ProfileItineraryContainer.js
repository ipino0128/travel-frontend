import React from 'react'
import ItineraryCard from '../components/ItineraryCard'

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


  render(){
    return(
    <div className="ui four column grid cards">
  {this.state.usersItineraries.map(itinerary => <ItineraryCard
    key={itinerary.id}
    itinerary={itinerary}
    handleClick={this.props.displayItineraryDetails}/>)}
  </div>

    )
  }

}

export default ProfileItineraryContainer
