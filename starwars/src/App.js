import React, { Component } from 'react';
import './reset.css';
import './App.css';
import ImperialMarch from './components/ImperialMarch'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });

  };

 //  .then(data => {
 //   console.log(data); <-- Log data here to find the fields you will need.
 //   this.setState({ starwarsChars: data.results });
 // })


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ImperialMarch incArray={this.state.starwarsChars} />
      </div>
    );
  }
}

// <pre>this.state = {JSON.stringify(this.state, null, 2)}</pre>

export default App;
