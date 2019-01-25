import React, { Component } from "react";
import ReactDOM from "react-dom";

class BackCard extends Component {
  render() {
    let { donors, totalDonations, navigate, innerRef } = this.props;
    return (
      <div ref={innerRef} className="back-card-container">
        <div className="top-10">
          <h1>Top 10 Donors</h1>
          <div className="subtext">Oxford Giving Day 2018</div>
        </div>
        <div className="table-grid">
          <div className="column-header item-row">
            <div className="column-1">Name</div>
            <div className="column-1">Class Year</div>
            <div className="column-1">Amount</div>
          </div>
          {donors.length === 0 ? (
            <div>Loading...</div>
          ) : (
            donors.length &&
            donors.map(donor => (
              <div className="donor-data item-row">
                <div className="column-1">{donor.name}</div>
                <div className="column-1">{donor.class_year}</div>
                <div className="column-1">{donor.amount}</div>
              </div>
            ))
          )}
        </div>
        <div className="back-card-footer">
          <div className="total-donations">${totalDonations}</div>
          <button onClick={navigate("front")}>Return to front</button>
        </div>
      </div>
    );
  }
}

export default BackCard;
