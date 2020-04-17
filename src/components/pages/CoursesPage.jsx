import React, { Component } from "react";
import CoursesList from "../courses/CoursesList";
import AddCourseBtn from "../courses/AddCourseBtn";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";

class CoursesPage extends Component {
  componentDidMount() {
    this.props.actions.loadCourses() /* .then((error) => {
      throw error;
    }) */;
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
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
