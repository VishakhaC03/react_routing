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
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
        <p className="mb-1"><strong>Duration:</strong> {course.duration}</p>
        <p className="mb-3"><strong>Price:</strong> ₹{course.price}</p>

        {/* Enroll Button */}
        {!this.state.enrolled ? (
          <button onClick={this.handleEnroll} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Enroll</button>
        ) : (
          <p className="text-green-600 font-semibold mt-2">
            ✅ You have successfully enrolled!
          </p>
        )}
      </div>
    );
  }
}

export default CourseDetails;

