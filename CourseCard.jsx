import React, { Component } from "react";
import { Link } from "react-router-dom";

class CourseCard extends Component {
  render() {
    const { id, name, duration } = this.props.course;

    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
        <h3>{name}</h3>
        <p>Duration: {duration}</p>

        <Link to={`/course/${id}`}>
          <button>View Details</button>
        </Link>
      </div>
    );
  }
}

export default CourseCard;
