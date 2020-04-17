import React from "react";
import { Link } from "react-router-dom";
import DeleteCourseBtn from "./DeleteCourseBtn";

export default function CourseItem({ first, course }) {
  return (
    <li className={!first ? "border-t border-gray-200" : ""}>
      <div className="flex items-center justify-between min-w-0 items-center px-4 py-4 sm:px-6">
        <div>
          <Link
            to={`course/${course.slug}`}
            className="text-xl leading-5 font-medium text-indigo-600 hover:text-indigo-800 truncate"
          >
            {course.title}
          </Link>
          <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
            <div className="flex items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-gray-400"
              >
                <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
              </svg>
              <span className="ml-1 truncate">{course.category}</span>
            </div>
            <div className="ml-2 flex items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-gray-400"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span className="ml-1 truncate">{course.authorName}</span>
            </div>
          </div>
        </div>
        <DeleteCourseBtn course={course} />
      </div>
    </li>
  );
}
