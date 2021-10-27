import React from "react";
import "./css/Review.css";

function ReviewCard(props) {
  return (
    <div className="col-4 Review">
      <div className="card text-center mb-3r">
        <div className="card-header"></div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.summary}</p>
          <p className="card-text">{props.stars}</p>
          <button className="btn btn-warning">Full Review</button>
        </div>
        <div className="card-footer text-muted">{props.date}</div>
      </div>
    </div>
  );
}

export default ReviewCard;
