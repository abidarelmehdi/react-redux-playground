import React, { useState } from "react";
import { connect } from "react-redux";
import slugify from "slugify";
import CourseForm from "../courses/CourseForm";
import * as courseActions from "../../redux/actions/courseActions";

function CourseManagePage(props) {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    category: "",
    authorId: undefined,
  });

  const handleChange = ({ target }) => {
    setCourse({
      ...course,
      [target.name]: target.value,
      slug: slugify(course.title, { lower: true }),
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.dispatch(courseActions.saveCourse(course));
    // courseActions.saveCourse(course).then(() => props.history.push("/courses"));
  }
  return (
    <CourseForm
      course={course}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}

export default connect()(CourseManagePage);
