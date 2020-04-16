import React from "react";

export default function ListInput(props) {
  return (
    <>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
      >
        {props.label}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <div className="w-full rounded-md shadow-sm">
          <select
            id={props.id}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
            className="block w-full form-select transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          >
            <option key={-1} value="">
              --------
            </option>
            {props.objectList.map((obj) => (
              <option key={obj.id} value={obj.id}>
                {obj.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
