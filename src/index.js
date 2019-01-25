import React, { Component } from "react";
import ReactDOM from "react-dom";
import BackCard from "./components/back-card";
import FrontCard from "./components/front-card";
import { getDonors } from "../../utils/api";

import "./styles.css";

class App extends Component {
  state = {
    donors: []
  };

  componentDidMount() {
    return getDonors().then(donors => {
      this.setState(() => ({
        donors
      }));
    });
  }

  render() {
    let { donors } = this.state;
    return (
      <div className="wrapper">
        <FrontCard />
        <BackCard donors={donors} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
