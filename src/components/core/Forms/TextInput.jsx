import React from "react";

export default function TextInput(props) {
  return (
    <>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
      >
        {props.label}
      </label>
      <div className="mt-1 sm:mt-0 col-span-2">
        <div className="w-full rounded-md shadow-sm">
          <input
            id={props.id}
            type="text"
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
      </div>
    </>
  );
}
