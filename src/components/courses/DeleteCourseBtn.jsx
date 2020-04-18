import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { StageSpinner } from "react-spinners-kit";
import { connect } from "react-redux";
import SuccessToast from "../core/SuccessToast";
import { deleteCourse } from "../../redux/actions/courseActions";

function DeleteCourseBtn({ deleteCourse, course }) {
  const [deleting, setDeleting] = useState(false);
  const isMounted = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  function handleClick() {
    setDeleting(true);
    deleteCourse(course)
      .then(() => toast(<SuccessToast message="Course deleted successfully" />))
      .finally(() => {
        isMounted.current && setDeleting(false);
      });
    return;
  }
  return deleting ? (
    <StageSpinner size={30} color="#c81e1e" />
  ) : (
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
