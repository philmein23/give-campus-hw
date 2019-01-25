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
  back = null;

  navigate = where => e => {
    e.preventDefault();

    if (where === "front") {
      console.log("front");
    }

    if (where === "back") {
      console.log("back");
    }
  };

  componentDidMount() {
    console.log("refdfdf", this.front);
    console.log("back card", this.back);

    return getDonors().then(donors => {
      this.setState(() => ({
        donors,
        totalDonations: getTotalDonation(donors)
      }));
    });
  }

  render() {
    console.log("thdfsdf", this.front);
    let { donors, totalDonations } = this.state;
    return (
      <div className="wrapper">
        <FrontCard ref={this.front} navigate={this.navigate} />
        <BackCard
          innerRef={el => (this.back = el)}
          navigate={this.navigate}
          donors={donors}
          totalDonations={totalDonations}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
