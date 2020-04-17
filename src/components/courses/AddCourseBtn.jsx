import React from "react";
import { Link } from "react-router-dom";
export default function AddCourseBtn() {
  return (
    <Link
      to="course"
      className="px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150"
    >
      New Course
    </Link>
  );
}
