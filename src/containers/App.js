import React, { Component } from 'react';
import '../App.css';
import DestinationContainer from './DestinationContainer'
import DestinationDetails from '../components/DestinationDetails'
import NavBar from '../components/NavBar'
import ItineraryDetails from '../components/ItineraryDetails'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import Profile from './Profile'
import Login from '../components/Login'
import CreateUser from '../components/CreateUser'


import {Route, Redirect} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state={
      destinations: [],
      current_destination: null,
      current_itinerary: null,
      searchTerm: "",
      currentUser: null,
      itineraries: []
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
   if(token){
     fetch(`http://localhost:3000/profile`, {
       method: "GET",
       headers: {
         "Authentication" : `Bearer ${token}`
       }
     }).then(res => res.json())
     .then(data => {
       this.setState({
         currentUser: data.user
       })
     })
   }
    fetch('http://localhost:3000/destinations')
    .then(res => res.json())
    .then(data => this.setState({
      destinations: data
    }))
    fetch('http://localhost:3000/itineraries')
    .then(res => res.json())
    .then(data => this.setState({
      itineraries: data
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

updateCurrentUser = (user) => {
   this.setState({currentUser: user})
 }

logout = () => {
    localStorage.removeItem('token');
    this.setState({currentUser: null})
  }

addAllItin = (itinerary) => {
  this.setState({
    itineraries: [...this.state.itineraries, itinerary]
  })
}


removeFromAll = (itinerary) => {
  console.log(itinerary)
  this.setState({
    itineraries: this.state.itineraries.filter(prevItin=> prevItin.id !== itinerary.id)
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
        <NavBar logged_in={!!this.state.currentUser} logout={this.logout}/>
        <Route exact path='/' render={()=> <Search className="search-feature" onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
          }/>
        <div className="ui grid">
          <Route exact path='/' render={()=>     <DestinationContainer
              destinations={searchedDestinations}
              displayDetails={this.displayDetails}/>
            }/>

          <Route exact path='/' render={()=>
            <DestinationDetails
              current_destination={this.state.current_destination}
              displayItineraryDetails={this.displayItineraryDetails}
              removeFromAll={this.removeFromAll}
              itineraries={this.state.itineraries}
              currentUser={this.state.currentUser}
              />
          }/>
        </div>
          <Route exact path='/itineraries/:id' render={()=> {
          return <ItineraryDetails itinerary={this.state.current_itinerary} currentUser={this.state.currentUser} removeItinerary={this.removeItinerary}/>
        }
        }/>
        <Route exact path="/profile" render={() =>
          <Profile
          currentUser={this.state.currentUser}
          displayItineraryDetails={this.displayItineraryDetails}
          destinations={orderedDestinations}
          addAllItin={this.addAllItin}
          removeFromAll={this.removeFromAll}
          />}
          />
          <Route exact path="/login" render={() => this.state.currentUser ?
            <Redirect to='/profile'/> :
            <Login updateCurrentUser={this.updateCurrentUser}
            /> }
          />
            <Route exact path="/create" render={() => <CreateUser />} />
      </div>
    );
  }
}

export default App;
