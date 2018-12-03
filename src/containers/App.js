import React, { Component } from 'react';
import '../App.css';
import DestinationContainer from './DestinationContainer'
import DestinationDetails from '../components/DestinationDetails'
import NavBar from '../components/NavBar'
import ItineraryDetails from '../components/ItineraryDetails'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import Profile from './Profile'


import {Route} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state={
      destinations: [],
      current_destination: null,
      current_itinerary: null,
      searchTerm: "",
      user: null
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/destinations')
    .then(res => res.json())
    .then(data => this.setState({
      destinations: data
    }))
  }

  displayDetails = (destination) => {
    this.setState({
      current_destination: destination
    })
  }

  displayItineraryDetails = (itinerary) => {
    this.setState({
      current_itinerary: itinerary
    })
  }

  handleSearchChange = (event, {value}) => {
  this.setState({
    searchTerm: value
  })
}




  render() {
    const orderedDestinations = this.state.destinations.sort(function(a,b){
    return a.name.localeCompare(b.name);})

    const searchedDestinations = orderedDestinations.filter(destination=> {
      return destination.name.toLowerCase().includes(this.state.searchTerm)
    })

    return (
      <div className="App">
        <NavBar/>
        <Route exact path='/' render={()=> <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
          }/>
        <div className="ui grid">
          <Route exact path='/' render={()=>     <DestinationContainer
              destinations={searchedDestinations}
              displayDetails={this.displayDetails}/>
            }/>

          <Route exact path='/' render={()=>
            <DestinationDetails
              current_destination={this.state.current_destination}
              displayItineraryDetails={this.displayItineraryDetails}/>
          }/>
        </div>
          <Route exact path='/itineraries/:id' render={()=> {
          return <ItineraryDetails itinerary={this.state.current_itinerary}/>
        }
        }/>
        <Route exact path='/profile' render={Profile}/>

      </div>
    );
  }
}

export default App;
