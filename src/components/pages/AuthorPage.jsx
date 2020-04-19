import React, { Component } from "react";
import { toast } from "react-toastify";
import AuthorsList from "../authors/AuthorsList";
import AddAuthorBtn from "../authors/AddAuthorBtn";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authorActions from "../../redux/actions/authorActions";
import * as courseActions from "../../redux/actions/courseActions";
import { StageSpinner } from "react-spinners-kit";
import SuccessToast from "../core/SuccessToast";
import ErrorToast from "../core/ErrorToast";

class AuthorsPage extends Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;
    authors.length === 0 && actions.loadAuthors();
    courses.length === 0 && actions.loadCourses();
  }

  handleDelete = (author) => {
    const authorCourses = this.props.courses.filter(
      (course) => course.authorId === author.id
    );
    if (authorCourses.length > 0) {
      toast(<ErrorToast message="There are courses for this author" />);
      return;
    }

    toast(<SuccessToast message="Author deleted successfully" />);
    this.props.actions
      .deleteAuthor(author)
      .catch((error) =>
        toast(
          <ErrorToast
            message="Author delete failed"
            messageDetail={error.message}
          />
        )
      );
  };

  render() {
    return (
      <>
        <div className="absolute top-0 right-0 -mt-14">
          <AddAuthorBtn />
        </div>
        {this.props.loading ? (
          <div className="flex items-center justify-center p-16">
            <StageSpinner size={60} color="#252f3f" />
          </div>
        ) : (
          <AuthorsList
            handleDelete={this.handleDelete}
            authors={this.props.authors}
          />
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.apiStatus > 0,
    authors: state.authors,
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteAuthor: bindActionCreators(authorActions.deleteAuthor, dispatch),
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
