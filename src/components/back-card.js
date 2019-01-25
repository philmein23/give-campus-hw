import React from "react";
import ReactDOM from "react-dom";

const BackCard = React.forwardRef(
  ({ donors, totalDonations, navigate }, ref) => {
    return (
      <div ref={ref} className="back-card-container">
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
                <div className="column-1" style={{ "margin-right": "3px" }}>
                  {donor.name}
                </div>
                <div className="column-1">{donor.class_year}</div>
                <div className="column-1">${donor.amount}</div>
              </div>
            ))
          )}
        </div>
        <div className="back-card-footer">
          <div className="total-donations">${totalDonations}</div>
          <button className="return" onClick={navigate("front")}>
            Return to front
          </button>
        </div>
      </div>
    );
  }
);

export default BackCard;
