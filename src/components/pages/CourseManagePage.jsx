import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import slugify from "slugify";
import CourseForm from "../courses/CourseForm";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import { bindActionCreators } from "redux";

function CourseManagePage({ authors, actions }) {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    category: "",
    authorId: undefined,
  });

  useEffect(() => {
    authors.length === 0 && actions.loadAuthors();
  }, [authors, actions]);

  const handleChange = ({ target }) => {
    setCourse({
      ...course,
      [target.name]: target.value,
      slug: slugify(course.title, { lower: true }),
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    actions.saveCourse(course);
    // courseActions.saveCourse(course).then(() => props.history.push("/courses"));
  }
  return (
    <CourseForm
      course={course}
      authors={authors}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    authors: state.authors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      saveCourse: bindActionCreators(courseActions.saveCourse, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseManagePage);
