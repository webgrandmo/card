import React, { Component } from 'react';
import CardList   from "./components/card-list/card-list.component";
import './App.css';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder={'search monsters'}
          handleChange = { this.handleChange }
        />
        <CardList monsters={filteredMonsters}>
          
        </CardList>
      </div>
    );
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(monsters => this.setState({monsters: monsters}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }
}

export default App;
