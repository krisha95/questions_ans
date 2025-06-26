import React from "react";
import { Col } from "react-bootstrap";

const TitleSelect = () => {
  return (
    <div className="bg-mode p-4 rounded">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">05 Answers</h5>
        <Col xs={6} sm={4} md={3}>
          <select
            className="form-select js-choice"
            data-placeholder-val="Sort by"
            data-search-enabled="false"
          >
            <option value="AB">Best</option>
            <option value="NG">Upvote</option>
            <option value="SG">Recent</option>
          </select>
        </Col>
      </div>
    </div>
  );
};

export default TitleSelect;
