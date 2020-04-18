import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import slugify from "slugify";
import { StageSpinner } from "react-spinners-kit";
import CourseForm from "../courses/CourseForm";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import { toast } from "react-toastify";
import SuccessToast from "../core/SuccessToast";

function CourseManagePage(props) {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    category: "",
    authorId: undefined,
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    props.authors.length === 0 && props.loadAuthors();
    props.courses.length === 0 && props.loadCourses();
    props.selectedCourse && setCourse(props.selectedCourse);
  }, [props]);

  const handleChange = ({ target }) => {
    setCourse({
      ...course,
      [target.name]: target.value,
      slug: slugify(course.title, { lower: true }),
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    props.saveCourse(course).then(() => {
      toast(<SuccessToast />);
      props.history.push("/courses");
    });
  }

  const loading = props.courses.length === 0 || props.authors.length === 0;
  return loading ? (
    <div className="flex items-center justify-center p-16">
      <StageSpinner size={60} color="#252f3f" />
    </div>
  ) : (
    <CourseForm
      course={course}
      saving={saving}
      authors={props.authors}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}

const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;
  const selectedCourse =
    state.courses.find((course) => course.slug === slug) || null;
  return {
    selectedCourse,
    courses: state.courses,
    authors: state.authors,
  };
};

const mapDispatchToProps = {
  saveCourse: courseActions.saveCourse,
  loadAuthors: authorActions.loadAuthors,
  loadCourses: courseActions.loadCourses,
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseManagePage);
