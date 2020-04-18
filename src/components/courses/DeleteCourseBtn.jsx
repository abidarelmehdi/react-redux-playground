import React from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import SuccessToast from "../core/SuccessToast";
import ErrorToast from "../core/ErrorToast";
import { deleteCourse } from "../../redux/actions/courseActions";

function DeleteCourseBtn({ deleteCourse, course }) {
  function handleClick() {
    toast(<SuccessToast message="Course deleted successfully" />);
    deleteCourse(course).catch((error) =>
      toast(
        <ErrorToast
          message="Course delete failed"
          messageDetail={error.message}
        />
      )
    );
  }
  return (
    <button
      onClick={handleClick}
      className="px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-50 focus:outline-none focus:border-red-300 focus:shadow-outline-red active:bg-red-200 transition ease-in-out duration-150"
    >
      Delete
    </button>
  );
}

const mapDispatchToProps = {
  deleteCourse,
};
export default connect(null, mapDispatchToProps)(DeleteCourseBtn);
