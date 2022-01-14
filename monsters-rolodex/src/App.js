import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

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
    return (
      <div className="App">
        <input
          type="search"
          placeholder="seach monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
