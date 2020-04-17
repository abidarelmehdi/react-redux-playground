import React, { Component } from "react";
import CoursesList from "../courses/CoursesList";
import AddCourseBtn from "../courses/AddCourseBtn";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";

class CoursesPage extends Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;
    courses.length === 0 && actions.loadCourses();
    authors.length === 0 && actions.loadAuthors();
  }
  render() {
    return (
      <>
        <div className="absolute top-0 right-0 -mt-14">
          <AddCourseBtn />
        </div>
        <CoursesList courses={this.props.courses} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    authors: state.authors,
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find(
                (author) => author.id === course.authorId
              ).name,
            };
          }),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
