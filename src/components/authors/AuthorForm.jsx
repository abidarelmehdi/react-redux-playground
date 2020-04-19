import React from "react";
import { StageSpinner } from "react-spinners-kit";
import TextInput from "../core/Forms/TextInput";
import SubmitBtn from "../core/Forms/SubmitBtn";

export default function AuthorForm({ author, onChange, onSubmit, saving }) {
  return (
    <form onSubmit={onSubmit} className="py-6 px-4 sm:px-6 lg:px-8">
      <div>
        <h3 className="text-2xl leading-6 font-medium text-gray-900">
          Author Form
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          Update and create new author.
        </p>
      </div>
      <div className="mt-6 sm:mt-5">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <TextInput
            id="name"
            label="Name"
            name="name"
            value={author.name}
            onChange={onChange}
          />
        </div>
        <div className="mt-6 sm:mt-5 flex justify-end sm:border-t sm:border-gray-200 sm:pt-5">
          {saving ? (
            <StageSpinner size={40} color="#252f3f" />
          ) : (
            <SubmitBtn label="submit" />
          )}
        </div>
      </div>
    </form>
  );
}
