import React from "react";
import { useHistory } from "react-router-dom";

export default function DeleteCourseBtn({ course, label = "Delete" }) {
  let history = useHistory();
  const handleClick = () => {
    // deleteCouse(course).then(() => history.push("/courses"));
  };
  return (
    <button
      onClick={handleClick}
      className="px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-50 focus:outline-none focus:border-red-300 focus:shadow-outline-red active:bg-red-200 transition ease-in-out duration-150"
    >
      {label}
    </button>
  );
}
