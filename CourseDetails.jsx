import React, { Component } from "react";

class CourseDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enrolled: false,
    };
  }

  handleEnroll = () => {
    this.setState({ enrolled: true });
  };

  render() {
    const path = window.location.pathname;
    const id = parseInt(path.split("/")[2]);

    const course = this.props.courses.find((c) => c.id === id);

    if (!course) {
      return <h2 style={{ padding: "20px" }}>Course Not Found</h2>;
    }

    return (
      <div style={{ padding: "20px" }}>
        <h2>{course.name}</h2>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Price:</strong> ₹{course.price}</p>

        {/* Enroll Button */}
        {!this.state.enrolled ? (
          <button onClick={this.handleEnroll}>Enroll</button>
        ) : (
          <p style={{ color: "green", marginTop: "10px" }}>
            ✅ You have successfully enrolled!
          </p>
        )}
      </div>
    );
  }
}

export default CourseDetails;

