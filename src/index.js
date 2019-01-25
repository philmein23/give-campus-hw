import React, { Component } from "react";
import ReactDOM from "react-dom";
import BackCard from "./components/back-card";
import FrontCard from "./components/front-card";
import { getDonors, getTotalDonation } from "../../utils/api";

import "./styles.css";

class App extends Component {
  state = {
    donors: [],
    totalDonations: null
  };

  componentDidMount() {
    return getDonors().then(donors => {
      this.setState(() => ({
        donors,
        totalDonations: getTotalDonation(donors)
      }));
    });
  }

  render() {
    let { donors, totalDonations } = this.state;
    return (
      <div className="wrapper">
        <FrontCard />
        <BackCard donors={donors} totalDonations={totalDonations} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
