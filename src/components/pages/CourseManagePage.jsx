import React, { useState, useEffect } from "react";
import slugify from "slugify";
import CourseForm from "../courses/CourseForm";

export default function CourseManagePage(props) {
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
