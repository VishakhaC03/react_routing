import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import CourseDetails from "./components/CourseDetails";
import NotFound from "./components/NotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { id: 1, name: "HTML Basics", duration: "4 Weeks", price: 1999 },
        { id: 2, name: "CSS Mastery", duration: "6 Weeks", price: 2499 },
        { id: 3, name: "JavaScript Fundamentals", duration: "8 Weeks", price: 3499 },
      ],
    };
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<CourseList courses={this.state.courses} />}
          />
          <Route
            path="/course/:id"
            element={<CourseDetails courses={this.state.courses} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}

export default App;