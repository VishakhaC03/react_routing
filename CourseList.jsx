import React, { Component } from "react";
import CourseCard from "./CourseCard";

class CourseList extends Component {
  render() {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">Available Courses</h2>
        {this.props.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    );
  }
}

export default CourseList;
