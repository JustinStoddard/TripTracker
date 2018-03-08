import React, { Component } from 'react';
import AdventureForm from './components/AdventureForm';
import AdventureList from './components/AdventureList';

class App extends Component {
  state = { Adventures: [] }

  componentDidMount() { //Makes a call to our rails server to get all Trips

  }

  addTrip = (name) => {

  }

  updateAdventure = (id) => {

  }

  deleteAdventure = (id) => {

  }

  render() {
    return (
      <div className="container">
        <AdventureForm addTrip={ this.addTrip } />
        <AdventureList 
          adventures={this.state.adventures} 
          updateAdventure={this.updateAdventure}
          deleteAdventure={this.deleteAdventure}
        />
      </div>
    );
  }
}

export default App;
