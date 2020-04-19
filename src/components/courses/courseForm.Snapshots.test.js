import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";

it("replace save button with saving state when form is saving", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onChange={jest.fn()}
      onSubmit={jest.fn()}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});

it("load save button instead of saving state when form is loaded", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onChange={jest.fn()}
      onSubmit={jest.fn()}
      saving={false}
    />
  );

  expect(tree).toMatchSnapshot();
});
