import React, { Component } from "react";
import CourseItem from "./CourseItem";

export default class CoursesList extends Component {
  render() {
    return (
      <ul>
        {this.props.courses.map((course, index) => (
          <CourseItem key={course.id} course={course} first={index === 0} />
        ))}
      </ul>
    );
  }
}
