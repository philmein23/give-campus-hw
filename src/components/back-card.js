import React, { Component } from "react";
import ReactDOM from "react-dom";
import { getDonors } from "../../utils/api";

class BackCard extends Component {
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
    console.log(donors);
    return (
      <div className="back-card-container">
        <div className="table-grid">
          <div className="item-row">
            <div className="column-1">Name</div>
            <div className="column-1">Class Year</div>
            <div className="column-1">Amount</div>
          </div>
        </div>
        {donors.length === 0 ? (
          <div>Loading...</div>
        ) : (
          donors.length && donors.map(donor => <div>{donor.name}</div>)
        )}
      </div>
    );
  }
}

export default BackCard;
