import React from 'react'
import ItineraryContainer from '../containers/ItineraryContainer'

const DestinationDetails = (props) => {

    const renderDetails = (current_destination) => {
      if (current_destination === null){
        return (
          <div className="About">
            <h1> Welcome to MyTravels!</h1>
            <h3> To explore travel itineraries, begin by choosing your destination on the left hand side.</h3>
            <img src="https://media.giphy.com/media/l378asbpIR5DTsdqg/giphy.gif"/>
          </div>
        )
      } else {
        return(
          <div>
          <h1>{current_destination.name}</h1>

          <br/>
          <ItineraryContainer
          destination={current_destination}
          displayItineraryDetails={props.displayItineraryDetails}
          itineraries={props.itineraries}
          currentUser={props.currentUser}
          removeFromAll={props.removeFromAll}/>


          </div>

        )
      }

    }

      return(
        <div className="nine wide column">
        {renderDetails(props.current_destination)}
        </div>
      )
}




export default DestinationDetails
