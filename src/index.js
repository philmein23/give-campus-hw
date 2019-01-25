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

  front = React.createRef();
  back = React.createRef();

  navigate = where => e => {
    e.preventDefault();
    let back = this.back.current.classList;
    let front = this.front.current.classList;

    if (where === "front") {
      back.toggle("animate");
      front.toggle("animate");
    }

    if (where === "back") {
      front.toggle("animate");
      back.toggle("animate");
    }
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
        <div className="cards">
          <FrontCard ref={this.front} navigate={this.navigate} />
          <BackCard
            ref={this.back}
            navigate={this.navigate}
            donors={donors}
            totalDonations={totalDonations}
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
