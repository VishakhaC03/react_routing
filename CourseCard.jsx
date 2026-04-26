import React, { Component } from "react";
import { Link } from "react-router-dom";

class CourseCard extends Component {
  render() {
    const { id, name, duration } = this.props.course;

    return (
      <div className="border rounded-lg p-4 m-4 shadow-md">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-700">Duration: {duration}</p>

        <Link to={`/course/${id}`}>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
        </Link>
      </div>
    );
  }
}

export default CourseCard;
