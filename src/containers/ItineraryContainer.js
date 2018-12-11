import React from 'react'
import ItineraryCard from '../components/ItineraryCard'

class ItineraryContainer extends React.Component{


  render(){
    const filtered = this.props.itineraries.filter(itinerary => itinerary.destination_id === this.props.destination.id)
    return(
      <div className="ItineraryContainer">
      <div className="ui three column grid cards">


      {filtered.map(itinerary => {
        return(
          <ItineraryCard
          key={itinerary.id}
          itinerary={itinerary}
          handleClick={this.props.displayItineraryDetails}
          removeFromAll={this.props.removeFromAll}
          currentUser={this.props.currentUser}
          />
        )
      }
    )}
    </div>
      </div>
    )
  }
}

export default ItineraryContainer
