import React, { Component } from "react";
import ReactDOM from "react-dom";

class BackCard extends Component {
  render() {
    let { donors } = this.props;
    return (
      <div className="back-card-container">
        <div className="table-grid">
          <div className="item-row">
            <div className="column-1">Name</div>
            <div className="column-1">Class Year</div>
            <div className="column-1">Amount</div>
          </div>
          {donors.length === 0 ? (
            <div>Loading...</div>
          ) : (
            donors.length &&
            donors.map(donor => (
              <div className="item-row">
                <div className="column-1">{donor.name}</div>
                <div className="column-1">{donor.class_year}</div>
                <div className="column-1">{donor.amount}</div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default BackCard;
