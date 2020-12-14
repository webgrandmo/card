import React, { Component } from 'react';
import CardList   from "./components/card-list/card-list.component";
import './App.css';

class App extends Component {
  state = {
    monsters: []
  }
  render() {
    return (
      <div className="App">
         
        <CardList monsters={this.state.monsters}>
          
        </CardList>
      </div>
    );
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(monsters => this.setState({monsters: monsters}))
  }
}

export default App;
