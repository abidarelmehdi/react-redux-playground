import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import { courses, authors } from "../../../tools/mockData";

function buildCourseForm(args) {
  const defaultProps = {
    course: courses[0],
    authors: authors,
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    saving: false,
  };

  const props = { ...defaultProps, ...args };

  return <CourseForm {...props} />;
}

afterEach(cleanup);
// React-Testing-Library test
it("renders page title", () => {
  const { getByText } = render(buildCourseForm({ saving: true }));
  getByText("Course Form");
});

// Enzime test
it("renders forms", () => {
  const wrapper = shallow(buildCourseForm({ saving: true }));
  expect(wrapper.find("form").length).toBe(1);
});

it("renders submit btn when saving is false", () => {
  const wrapper = shallow(buildCourseForm({ saving: false }));
  expect(wrapper.find("SubmitBtn").length).toBe(1);
});

it("renders spinner when saving is true", () => {
  const wrapper = shallow(buildCourseForm({ saving: true }));
  expect(wrapper.find("SubmitBtn").length).toBe(0);
});

/* Snapshot tests */
it("replace save button with saving state when form is saving", () => {
  const tree = renderer.create(buildCourseForm({ saving: true }));

  expect(tree).toMatchSnapshot();
});

it("load save button instead of saving state when form is loaded", () => {
  const tree = renderer.create(buildCourseForm());

  expect(tree).toMatchSnapshot();
});
