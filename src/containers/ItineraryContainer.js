import React from 'react'
import ItineraryCard from '../components/ItineraryCard'

class ItineraryContainer extends React.Component{
  render(){
    return(
      <div className="ItineraryContainer">
      <div className="ui three column grid cards">
      {this.props.destination.itineraries.map(itinerary => {
        return(
          <ItineraryCard key={itinerary.id} itinerary={itinerary} handleClick={this.props.displayItineraryDetails}/>
        )
      }
    )}
    </div>
      </div>
    )
  }
}

export default ItineraryContainer
