import React from "react";
import TextInput from "../core/Forms/TextInput";
import ListInput from "../core/Forms/ListInput";
import SubmitBtn from "../core/Forms/SubmitBtn";

export default function CourseForm({ course, authors, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="py-6 px-4 sm:px-6 lg:px-8">
      <div>
        <h3 className="text-2xl leading-6 font-medium text-gray-900">
          Course Form
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          Update and create new courses.
        </p>
      </div>
      <div className="mt-6 sm:mt-5">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <TextInput
            id="title"
            label="Title"
            name="title"
            value={course.title}
            onChange={onChange}
          />
        </div>

        <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <TextInput
            label="Category"
            id="category"
            name="category"
            value={course.category}
            onChange={onChange}
          />
        </div>

        <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <ListInput
            id="authorId"
            label="Author"
            name="authorId"
            value={course.authorId}
            objectList={authors}
            onChange={onChange}
          />
        </div>
        <div className="mt-6 sm:mt-5 flex justify-end sm:border-t sm:border-gray-200 sm:pt-5">
          <SubmitBtn label="submit" />
        </div>
      </div>
    </form>
  );
}
