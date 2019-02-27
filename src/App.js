import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Header } from "semantic-ui-react";

import UserTable from "./components/UserTable";
import "./App.scss";
const userData = require("./userData.json");

class App extends Component {
  state = {
    searchString: ""
  };

  handleInputChange = e => this.setState({ searchString: e.target.value });

  render() {
    const { searchString } = this.state;
    let filteredData;

    if (searchString) {
      filteredData = userData.users.filter(
        user =>
          user.username.includes(searchString) ||
          user.email.includes(searchString) ||
          user.age === +searchString
      );
    }

    return (
      <div className="App">
        <Header as="h1">Table with filter</Header>
        {userData.users.length > 0 ? (
          <UserTable
            userData={searchString ? filteredData : userData.users}
            handleInputChange={this.handleInputChange}
          />
        ) : (
          <div> No data available </div>
        )}
      </div>
    );
  }
}

export default App;
