import React, { Component } from "react";
import CoursesList from "../courses/CoursesList";
import AddCourseBtn from "../courses/AddCourseBtn";

export default class CoursesPage extends Component {
  state = {
    courses: [],
  };

  render() {
    return (
      <>
        <div className="absolute top-0 right-0 -mt-14">
          <AddCourseBtn />
        </div>
        <CoursesList courses={this.state.courses} />
      </>
    );
  }
}
