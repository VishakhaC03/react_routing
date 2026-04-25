import React, { Component } from "react";
import CourseCard from "./CourseCard";

class CourseList extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Available Courses</h2>
        {this.props.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    );
  }
}

export default CourseList;
