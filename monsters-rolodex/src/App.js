import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        response.json().then((users) => this.setState({ monsters: users }))
      )
      .catch((error) => console.log("boo boo"));
  }

  render() {
    const { monsters, searchField } = this.state;
    // same as writing:
    // const monsters = this.state.monsters
    // const searchField = this.state.searchField

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder={"search monsters"}
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
