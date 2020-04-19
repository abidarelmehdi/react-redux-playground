import React from "react";
import { Link } from "react-router-dom";
import DeleteAuthorBtn from "./DeleteAuthorBtn";

export default function AuthorItem({ handleDelete, first, author }) {
  return (
    <li className={!first ? "border-t border-gray-200" : ""}>
      <div className="flex items-center justify-between min-w-0 items-center px-4 py-4 sm:px-6">
        <div>
          <Link
            to={`author/${author.name}`}
            className="text-xl leading-5 font-medium text-indigo-600 hover:text-indigo-800 truncate"
          >
            {author.name}
          </Link>
        </div>
        <DeleteAuthorBtn onClickDelete={handleDelete} author={author} />
      </div>
    </li>
  );
}
